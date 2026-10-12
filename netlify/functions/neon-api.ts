/**
 * 🛡️ সার্ভার-প্রহরী (v1.4.133 — নিরাপত্তা-প্যাকেজ ধাপ-১)
 * ------------------------------------------------------------------
 * Netlify Function: ./netlify/functions/neon-api
 *
 * কাজগুলো:
 *  • login        : মোবাইল+পাসওয়ার্ড যাচয় সার্ভারে (পাসওয়ার্ড-হ্যাশ DB-তে) → HMAC টোকেন
 *  • google       : Google ID-টোকেন যাচয় → অনুমোদিত হলে টোকেন; নতুন হলে "pending"
 *  • pending-list : ✅ অনুমোদন-দরকার নতুন ইউজারদের তালিকা (শুধু admin টোকেন)
 *  • approve      : admin অনুমতি/বাধা দেয়
 *  • meet         : টোকেন যাচয় + আমার প্রোফাইল (+admin হলে pending-সংখ্যা)
 *
 * 🔑 ডেটাবেজ-চাবি শুধু এই সার্ভারে (env: NEON_DATABASE_URL) — ব্রাউজারে আসে না।
 * 🔐 টোকেন = base64url(JSON).HMAC-SHA256 — env: APP_AUTH_SECRET দিয়ে স্বাক্ষরিত।
 */

import { createHmac, createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { neon } from "@neondatabase/serverless";

/* ════════════════ টোকেন (HMAC-স্বাক্ষরিত, মেয়াদসহ) ════════════════ */

export type TokenPayload = {
  uid: number;
  name: string;
  mobile?: string;
  email?: string;
  branch_id: string;
  role: string; // "admin" | "member"
  method: "password" | "google";
  exp: number; // epoch ms
};

const b64u = (s: string | Buffer) =>
  Buffer.from(s).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
const fromB64u = (s: string) =>
  Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");

export function signToken(payload: TokenPayload, secret: string): string {
  const body = b64u(JSON.stringify(payload));
  const sig = createHmac("sha256", secret).update(body).digest();
  return `${body}.${b64u(sig)}`;
}

export function verifyToken(token: string, secret: string): TokenPayload | null {
  try {
    const [body, sig] = String(token || "").split(".");
    if (!body || !sig) return null;
    const expect = b64u(createHmac("sha256", secret).update(body).digest());
    const a = Buffer.from(sig);
    const b = Buffer.from(expect);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
    const payload: TokenPayload = JSON.parse(fromB64u(body));
    if (!payload || typeof payload !== "object" || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

/* ════════════════ সাহায্যকারী ════════════════ */

export const normalizeMobile = (raw: string): string =>
  String(raw || "").replace(/[^0-9+]/g, "").replace(/^\+?880/, "0");

/** লিগ্যাসি হ্যাশ ফরম্যাট (auth.ts-এর মতোই): sha256hex(`${mobile}::${password}`) */
export const legacyHash = (password: string, mobile: string): string =>
  createHash("sha256").update(`${mobile}::${password}`, "utf8").digest("hex");

const json = (statusCode: number, obj: unknown) => ({
  statusCode,
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(obj),
});

const bearer = (event: any): string => {
  const h = event?.headers?.authorization || event?.headers?.Authorization || "";
  return h.startsWith("Bearer ") ? h.slice(7) : "";
};

export type AppUserRow = {
  id: number;
  name: string;
  mobile: string | null;
  email: string | null;
  pass_hash: string | null;
  branch_id: string;
  role: string;
  status: string; // approved | pending | rejected
};

/** টেবিল নিশ্চিত + গোবরা ডিফল্ট অ্যাডমিন সিড */
export async function ensureUsersTable(sql: any): Promise<void> {
  await sql.query(
    `CREATE TABLE IF NOT EXISTS app_users (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       mobile TEXT UNIQUE,
       email TEXT UNIQUE,
       pass_hash TEXT,
       branch_id TEXT NOT NULL DEFAULT 'gobra',
       role TEXT NOT NULL DEFAULT 'member',
       status TEXT NOT NULL DEFAULT 'pending',
       created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
       last_login_at TIMESTAMPTZ
     )`,
    []
  );
  const DEFAULT_MOBILE = "013241655828"; // লিগ্যাসি ডিফল্ট — সার্ভারেই অ্যাডমিন বীজ
  const existing = await sql.query(`SELECT id FROM app_users WHERE mobile = $1`, [DEFAULT_MOBILE]);
  if (!existing?.length) {
    await sql.query(
      `INSERT INTO app_users (name, mobile, pass_hash, branch_id, role, status)
       VALUES ($1, $2, $3, 'gobra', 'admin', 'approved')
       ON CONFLICT (mobile) DO NOTHING`,
      ["Gobra Office", DEFAULT_MOBILE, legacyHash("gobra1234", DEFAULT_MOBILE)]
    );
  }
}

export type HandlerDeps = {
  sql: any; // @neondatabase/serverless ক্লায়েন্ট (টেস্টে ফেক)
  secret: string;
  googleClientId?: string;
  fetchFn?: typeof fetch; // Google tokeninfo যাচয় (টেস্টে ফেক)
};

export function createHandler(deps: HandlerDeps) {
  const { sql, secret } = deps;
  const fetchFn = deps.fetchFn || fetch;
  const tokenFor = (u: AppUserRow, method: TokenPayload["method"]): string =>
    signToken(
      {
        uid: u.id,
        name: u.name,
        mobile: u.mobile || undefined,
        email: u.email || undefined,
        branch_id: u.branch_id,
        role: u.role,
        method,
        exp: Date.now() + 1000 * 60 * 60 * 24 * 30, // ৩০ দিন
      },
      secret
    );

  return async function handler(event: any): Promise<any> {
    try {
      if (event.httpMethod !== "POST") return json(405, { ok: false, error: "method" });
      const body = JSON.parse(event.body || "{}");
      const action = String(body.action || "");

      await ensureUsersTable(sql);

      const authPayload = (): TokenPayload | null => verifyToken(bearer(event), secret);
      const requireAuth = (): TokenPayload | null => authPayload();
      const requireAdmin = (): TokenPayload | null => {
        const p = authPayload();
        return p && p.role === "admin" ? p : null;
      };
      const pendingCount = async (): Promise<number> => {
        const r = await sql.query(`SELECT COUNT(*)::int AS c FROM app_users WHERE status='pending'`, []);
        return r?.[0]?.c || 0;
      };

      /* ── 🔑 মোবাইল + পাসওয়ার্ড লগইন ── */
      if (action === "login") {
        const mobile = normalizeMobile(body.mobile);
        const password = String(body.password || "");
        if (mobile.length < 6 || !password) return json(400, { ok: false, error: "মোবাইল নম্বর ও পাসওয়ার্ড দিন।" });
        const rows: AppUserRow[] = await sql.query(`SELECT * FROM app_users WHERE mobile = $1`, [mobile]);
        const u = rows?.[0];
        if (!u) return json(401, { ok: false, error: "এই মোবাইল নম্বরে কোনো ইউজার নেই।" });
        if (u.pass_hash !== legacyHash(password, String(u.mobile)))
          return json(401, { ok: false, error: "পাসওয়ার্ড মিলছে না।" });
        if (u.status === "pending") return json(403, { ok: false, error: "⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।", pending: true });
        if (u.status !== "approved") return json(403, { ok: false, error: "প্রবেশ বন্ধ আছে — অ্যাডমিনের সাথে যোগাযোগ করুন।" });
        await sql.query(`UPDATE app_users SET last_login_at = now() WHERE id = $1`, [u.id]);
        return json(200, {
          ok: true,
          token: tokenFor(u, "password"),
          user: { name: u.name, mobile: u.mobile, branchId: u.branch_id, role: u.role },
          pendingCount: u.role === "admin" ? await pendingCount() : 0,
        });
      }

      /* ── 📝 নতুন সাইন-আপ (মোবাইল+পাসওয়ার্ড) — pending; অ্যাডমিন অনুমতিতে চালু ── */
      if (action === "register") {
        const name = String(body.name || "").trim();
        const mobile = normalizeMobile(body.mobile);
        const password = String(body.password || "");
        const branch = String(body.branchId || "gobra").toLowerCase().replace(/[^a-z0-9_]/g, "_") || "gobra";
        if (name.length < 2) return json(400, { ok: false, error: "নাম লিখুন (কমপক্ষে ২ অক্ষর)।" });
        if (mobile.length < 6) return json(400, { ok: false, error: "সঠিক মোবাইল নম্বর দিন।" });
        if (password.length < 6) return json(400, { ok: false, error: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।" });
        const dup: AppUserRow[] = await sql.query(`SELECT id, status FROM app_users WHERE mobile = $1`, [mobile]);
        if (dup?.length) {
          if (dup[0].status === "pending") return json(200, { ok: true, pending: true, message: "⏳ এই নম্বরের অনুরোধ আগেই জমা — অ্যাডমিনের অনুমতির অপেক্ষায়।" });
          return json(409, { ok: false, error: "এই নম্বরে ইউজার আছে — সাইন ইন করুন।" });
        }
        await sql.query(
          `INSERT INTO app_users (name, mobile, pass_hash, branch_id, role, status)
           VALUES ($1, $2, $3, $4, 'member', 'pending')`,
          [name, mobile, legacyHash(password, mobile), branch]
        );
        return json(200, { ok: true, pending: true, message: "⏳ আপনার সাথে অ্যাডমিনের অনুমতি চেয়ে জমা হয়েছে — অনুমতি পেলে ঢুকতে পারবেন।" });
      }

      /* ── 🔵 Google লগইন ── */
      if (action === "google") {
        const credential = String(body.credential || "");
        if (!deps.googleClientId) return json(501, { ok: false, error: "Google লগইন এখনো কনফিগার হয়নি।" });
        if (!credential) return json(400, { ok: false, error: "google credential লাগবে।" });
        // Google-এর কাছে টোকেন যাচয়
        const r = await fetchFn(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`);
        if (!r.ok) return json(401, { ok: false, error: "Google পরিচয় যাচয় ব্যর্থ।" });
        const info: any = await r.json();
        if (info.aud !== deps.googleClientId) return json(401, { ok: false, error: "অন্য অ্যাপের টোকেন — প্রত্যাখ্যাত।" });
        if (info.email_verified !== "true" && info.email_verified !== true)
          return json(401, { ok: false, error: "Google ইমেইল যাচাইকৃত নয়।" });
        const email = String(info.email || "").toLowerCase();
        const name = String(info.name || email.split("@")[0]);
        let rows: AppUserRow[] = await sql.query(`SELECT * FROM app_users WHERE email = $1`, [email]);
        let u = rows?.[0];
        if (!u) {
          // 🆕 নতুন — pending হিসেবে জমা; অ্যাডমিন অনুমতি না দিলে কখনোই ঢুকবে না
          const ins: AppUserRow[] = await sql.query(
            `INSERT INTO app_users (name, email, branch_id, role, status)
             VALUES ($1, $2, 'gobra', 'member', 'pending') RETURNING *`,
            [name, email]
          );
          u = ins?.[0];
          return json(200, { ok: true, pending: true, message: "⏳ আপনার অনুরোধ জমা হয়েছে — অ্যাডমিন অনুমতি দিলে ঢুকতে পারবেন।" });
        }
        if (u.status === "pending")
          return json(200, { ok: true, pending: true, message: "⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।" });
        if (u.status !== "approved") return json(403, { ok: false, error: "প্রবেশ বন্ধ আছে — অ্যাডমিনের সাথে যোগাযোগ করুন।" });
        await sql.query(`UPDATE app_users SET last_login_at = now() WHERE id = $1`, [u.id]);
        return json(200, {
          ok: true,
          token: tokenFor(u, "google"),
          user: { name: u.name, email, branchId: u.branch_id, role: u.role },
          pendingCount: u.role === "admin" ? await pendingCount() : 0,
        });
      }

      /* ── 📋 অনুমতির অপেক্ষায় তালিকা (admin) ── */
      if (action === "pending-list") {
        if (!requireAdmin()) return json(401, { ok: false, error: "unauthorized" });
        const rows = await sql.query(
          `SELECT id, name, email, mobile, branch_id, role, status, created_at
           FROM app_users WHERE status = 'pending' ORDER BY created_at ASC`, []);
        return json(200, { ok: true, pending: rows || [] });
      }

      /* ── ✅/❌ অনুমতি / বাধা (admin) ── */
      if (action === "approve" || action === "reject") {
        if (!requireAdmin()) return json(401, { ok: false, error: "unauthorized" });
        const id = Number(body.userId);
        if (!id) return json(400, { ok: false, error: "userId দিন।" });
        const status = action === "approve" ? "approved" : "rejected";
        const branch = String(body.branchId || "gobra").toLowerCase().replace(/[^a-z0-9_]/g, "_") || "gobra";
        const upd: AppUserRow[] = await sql.query(
          `UPDATE app_users SET status = $1, branch_id = $2 WHERE id = $3 RETURNING id, name, email, status, branch_id`,
          [status, action === "approve" ? branch : "gobra", id]
        );
        if (!upd?.length) return json(404, { ok: false, error: "ইউজার পাওয়া যায়নি।" });
        return json(200, { ok: true, user: upd[0], pendingCount: await pendingCount() });
      }

      /* ── 🛡️ টোকেনগেটড SQL গেটওয়ে (v1.4.135 ধাপ-২) — ব্রাউজারের সব ডেটা-যাতায়াত এখন এই দরজায় ── */
      if (action === "sql") {
        if (!requireAuth()) return json(401, { ok: false, error: "unauthorized" });
        const queries: { text: string; params?: unknown[] }[] = Array.isArray(body.queries) ? body.queries : [];
        if (!queries.length) return json(400, { ok: false, error: "কোয়েরি দিন।" });
        if (queries.length > 80) return json(400, { ok: false, error: "একসাথে অনেক বেশি কোয়েরি।" });
        // ⛔ বিধ্বংসী ব্লকলিস্ট (অ্যাপ কখনোই DROP/TRUNCATE চালায় না)
        const BLOCK = /\b(drop\s+table|drop\s+schema|truncate\b|create\s+extension|alter\s+role|grant\b|revoke\b)/i;
        for (const q of queries) {
          if (!q || typeof q.text !== "string" || !q.text.trim()) return json(400, { ok: false, error: "অসম্পূর্ণ কোয়েরি।" });
          if (BLOCK.test(q.text)) return json(403, { ok: false, error: "নিষিদ্ধ কোয়েরি — প্রত্যাখ্যাত।" });
        }
        const url = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || "";
        const db = getDb(url);
        const tx = Boolean(body.transaction);
        const results = tx
          ? await db.transaction(queries.map((q) => db.query(q.text, (q.params as any[]) || [])))
          : await Promise.all(queries.map((q) => db.query(q.text, (q.params as any[]) || [])));
        return json(200, { ok: true, results });
      }

      /* ── 🙋 আমি কে (টোকেন যাচয় + pending-সংখ্যা) ── */
      if (action === "meet") {
        const p = requireAuth();
        if (!p) return json(401, { ok: false, error: "unauthorized" });
        return json(200, {
          ok: true,
          user: { name: p.name, mobile: p.mobile, email: p.email, branchId: p.branch_id, role: p.role },
          pendingCount: p.role === "admin" ? await pendingCount() : 0,
        });
      }

      return json(400, { ok: false, error: "unknown action" });
    } catch (e: any) {
      console.error("[neon-api]", e);
      return json(500, { ok: false, error: "server error" });
    }
  };
}

/* ════════════════ আসল হ্যান্ডলার (env থেকে) ════════════════ */

let cached: ReturnType<typeof createHandler> | null = null;
let dbCached: any = null;
const getDb = (url: string) => (dbCached ||= neon(url));

export async function handler(event: any, _context: any) {
  if (!cached) {
    const url = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || "";
    const secret = process.env.APP_AUTH_SECRET || "";
    cached = createHandler({
      sql: neon(url),
      secret: secret || "insecure-dev-secret",
      googleClientId: process.env.GOOGLE_CLIENT_ID || "",
    });
  }
  return cached(event);
}

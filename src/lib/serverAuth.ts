/**
 * 🛡️ সার্ভার-সেশন (v1.4.133 — নিরাপত্তা-প্যাকেজ ধাপ-১)
 * Netlify Function (./netlify/functions/neon-api)-এর সাথে কথোপকথন।
 * টোকেন (প্রবেশ-টিকেট) localStorage-এ জমা থাকে — প্রতিটি অনুরোধে আপনিই যায়।
 */

export type ServerUser = {
  name: string;
  mobile?: string | null;
  email?: string | null;
  branchId: string;
  role: string;
  /** 🌐 v1.4.140: মালিক-চিহ্ন — সব শাখা দেখা/বদলানো/মোছার ক্ষমতা */
  is_super?: boolean;
};

export type PendingUser = {
  id: number;
  name: string;
  email: string | null;
  mobile: string | null;
  branch_id: string;
  role: string;
  status: string;
  is_super?: boolean;
  created_at: string;
};

const API_BASE = "/.netlify/functions/neon-api";
const TOKEN_KEY = "gobra_server_token";
const USER_KEY = "gobra_server_user";

export function getServerToken(): string {
  try {
    return localStorage.getItem(TOKEN_KEY) || "";
  } catch {
    return "";
  }
}
export function getServerUser(): ServerUser | null {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as ServerUser) : null;
  } catch {
    return null;
  }
}
function saveSession(token: string, user: ServerUser): void {
  try {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch {}
}
export function clearServerSession(): void {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  } catch {}
}

/* 🔐 v1.4.142: অ্যাডমিন-গেট টোকেন (শুধু এই ট্যাবে, সেশন-স্টোরেজে) — যেকোনো অফিস থেকে পাসওয়ার্ডে অ্যাডমিন-প্যানেল */
const GATE_KEY = "gobra_admin_gate_token";
export function getGateToken(): string {
  try { return sessionStorage.getItem(GATE_KEY) || ""; } catch { return ""; }
}
export function setGateToken(t: string): void {
  try { sessionStorage.setItem(GATE_KEY, t); } catch {}
}
export function clearGateToken(): void {
  try { sessionStorage.removeItem(GATE_KEY); } catch {}
}
/** গেট-টোকেন থাকলে সেটাই (অ্যাডমিন-ডাকের জন্য) */
const gateOr = (): string => getGateToken();

async function call(action: string, extra: Record<string, unknown> = {}, token = "") {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(token || getServerToken() ? { authorization: `Bearer ${token || getServerToken()}` } : {}),
    },
    body: JSON.stringify({ action, ...extra }),
  });
  /* 🛰️ v1.4.166: ফাংশনহীন স্ট্যাটিক হোস্ট (GitHub Pages ইত্যাদি) — POST 404/405 পেলে
     "সার্ভার অসুবিধা" হিসেবে বলি, যাতে লগইন/নিবন্ধন লোকাল ফলব্যাকে যায় (HTTP 405 লাল আর নয়!) */
  if (res.status === 404 || res.status === 405) {
    return { ok: false, error: "server error" };
  }
  let data: any = null;
  try {
    data = await res.json();
  } catch {
    if (res.status === 404 || res.status === 405) return { ok: false, error: "server error" };
    data = { ok: false, error: `HTTP ${res.status}` };
  }
  /* 🆕 v1.4.139: পুরনো/আর্কাইভ ঠিকানায় পৌঁছে গেলে Netlify-র কাঁচা "usage_exceeded" বাংলায় বোঝাই */
  if (data && data.error === "usage_exceeded")
    data.error = "⚠️ পুরনো/আর্কাইভ ঠিকানায় আছেন — সে সার্ভার বন্ধ। ➡️ নতুন লিংক খুলুন: cash-gobra-bkf.netlify.app";
  return data;
}

export type LoginResult = {
  ok: boolean;
  error?: string;
  message?: string;
  pending?: boolean;
  user?: ServerUser;
  token?: string;
  pendingCount?: number;
};

/** 🔑 মোবাইল + পাসওয়ার্ড — সার্ভারে যাচয় */
export async function serverLogin(mobile: string, password: string): Promise<LoginResult> {
  const d = await call("login", { mobile, password });
  if (d.ok && d.token) saveSession(d.token, d.user);
  return d;
}

/** 📝 নতুন সাইন-আপ (মোবাইল+পাসওয়ার্ড) — pending হিসেবে জমা */
export async function serverRegister(input: { name: string; mobile: string; password: string; branchId?: string }): Promise<LoginResult> {
  const d = await call("register", { name: input.name, mobile: input.mobile, password: input.password, branchId: input.branchId });
  // 🆕 v1.4.145: প্রতিষ্ঠাতা-টোকেন জমা করি — নইলে ফোনের সব ক্লাউড-কল 401, নতুন অফিসের স্কিমা কখনোই তৈরি হতো না (br_test-বাগ)
  if (d?.ok && d.token && d.user) saveSession(d.token, d.user);
  return d;
}

/** 🔵 Google ID-টোকেন — সার্ভারে যাচয়; নতুন হলে pending */
export async function serverGoogleLogin(credential: string): Promise<LoginResult> {
  const d = await call("google", { credential });
  if (d.ok && d.token) saveSession(d.token, d.user);
  return d;
}

/** 🙋 টোকেন-যাচয় + প্রোফাইল (+admin-এর pending-সংখ্যা) */
export async function serverMeet(): Promise<LoginResult> {
  const d = await call("meet");
  if (d.ok && d.user) saveSession(getServerToken(), d.user);
  if (d.error === "unauthorized") clearServerSession();
  return d;
}

/** 📋 (admin) অনুমতির অপেক্ষায় ইউজাররা */
export async function serverPendingList(): Promise<{ ok: boolean; pending: PendingUser[] }> {
  const d = await call("pending-list", {}, gateOr());
  return { ok: Boolean(d.ok), pending: Array.isArray(d.pending) ? d.pending : [] };
}

/** ✅/❌ (admin) অনুমতি / বাধা */
export async function serverApprove(userId: number, branchId = "gobra"): Promise<LoginResult> {
  return call("approve", { userId, branchId }, gateOr());
}
export async function serverReject(userId: number): Promise<LoginResult> {
  return call("reject", { userId }, gateOr());
}

/** 🏢 (super) শাখা-তালিকা — ব্যবহারকারীসংখ্যাসহ */
export async function serverBranchList(): Promise<{ ok: boolean; branches: { branch_id: string; users: number }[] }> {
  const d = await call("branch-list", {}, gateOr());
  return { ok: Boolean(d.ok), branches: Array.isArray(d.branches) ? d.branches : [] };
}

/** 👥 (super) সব শাখার সব ইউজার — ভুল তৈরি খোঁজার জন্য */
export async function serverUserList(): Promise<{ ok: boolean; users: PendingUser[] }> {
  const d = await call("user-list", {}, gateOr());
  return { ok: Boolean(d.ok), users: Array.isArray(d.users) ? d.users : [] };
}

/** 🗑️ (super) ভুল ইউজার স্থায়ীভাবে মোছা (নিজেকে মোছা যায় না) */
export async function serverUserDelete(userId: number): Promise<LoginResult> {
  return call("user-delete", { userId }, gateOr());
}

/** 🔐 অ্যাডমিন-গেট খোলা — সফল হলে গেট-টোকেন জমা (v1.4.142) */
export async function serverGate(password: string): Promise<{ ok: boolean; error?: string; pendingCount?: number }> {
  const d = await call("gate", { password });
  if (d.ok && d.gateToken) setGateToken(d.gateToken);
  return { ok: Boolean(d.ok), error: d.error, pendingCount: d.pendingCount };
}

/** 🔑 অ্যাডমিন-গেট পাসওয়ার্ড বদল (রিসেট) */
export async function serverGatePassChange(oldPass: string, newPass: string): Promise<LoginResult> {
  return call("gate-pass-change", { oldPass, newPass });
}

/** 🔵 Google Identity Services স্ক্রিপ্ট (একবারই লোড) */
let gsiPromise: Promise<void> | null = null;
export function loadGoogleScript(): Promise<void> {
  if (!gsiPromise) {
    gsiPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[src*="gsi/client"]');
      if (existing) return resolve();
      const s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.async = true;
      s.defer = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Google script লোড হয়নি"));
      document.head.appendChild(s);
    });
  }
  return gsiPromise;
}

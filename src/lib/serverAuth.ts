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
};

export type PendingUser = {
  id: number;
  name: string;
  email: string | null;
  mobile: string | null;
  branch_id: string;
  role: string;
  status: string;
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

async function call(action: string, extra: Record<string, unknown> = {}, token = "") {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(token || getServerToken() ? { authorization: `Bearer ${token || getServerToken()}` } : {}),
    },
    body: JSON.stringify({ action, ...extra }),
  });
  let data: any = null;
  try {
    data = await res.json();
  } catch {
    data = { ok: false, error: `HTTP ${res.status}` };
  }
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
  return call("register", { name: input.name, mobile: input.mobile, password: input.password, branchId: input.branchId });
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
  const d = await call("pending-list");
  return { ok: Boolean(d.ok), pending: Array.isArray(d.pending) ? d.pending : [] };
}

/** ✅/❌ (admin) অনুমতি / বাধা */
export async function serverApprove(userId: number, branchId = "gobra"): Promise<LoginResult> {
  return call("approve", { userId, branchId });
}
export async function serverReject(userId: number): Promise<LoginResult> {
  return call("reject", { userId });
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

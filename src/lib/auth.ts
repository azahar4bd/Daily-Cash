/**
 * 🔐 সাইন ইন / সাইন আপ + অফিস (শাখা) ব্যবস্থাপনা
 * ------------------------------------------------------------------
 * • ইউজার আইডি = মোবাইল নম্বর
 * • প্রতিটি ইউজার একটি শাখার (অফিসের) সাথে যুক্ত — সেই শাখার সব হিসাব আলাদা
 * • নতুন শাখা নাম লিখে সাইন আপ করলেই নতুন অফিস তৈরি হয়ে যায় (খালি খতিয়ান)
 * • পাসওয়ার্ড কখনো সরাসরি সংরক্ষিত হয় না — হ্যাশ (SHA-256) হয়ে থাকে
 *
 * ⚠️ সব ডেটা ব্রাউজারের localStorage-এ থাকে, তাই ইউজার তালিকাও এই ব্রাউজারেই
 *    সংরক্ষিত। অন্য ডিভাইস/ব্রাউজারে সেই শাখার ইউজার আবার সাইন আপ করতে হবে
 *    (গোবরার ডিফল্ট আইডি সব জায়গাতেই নিজে থেকেই তৈরি হয়)।
 */

import {
  DEFAULT_BRANCH_ID,
  DEFAULT_BRANCH_NAME,
  getCurrentBranch,
  isDefaultBranch,
  setBranch,
} from "./branchScope";

export type AuthUser = {
  /** ইউজার আইডি = মোবাইল নম্বর */
  id: string;
  name: string;
  mobile: string;
  branchId: string;
  passHash: string;
  createdAt: string;
  /** সর্বশেষ প্রবেশ */
  lastLoginAt?: string;
};

export type Branch = {
  id: string;
  name: string;
  createdAt: string;
  createdBy?: string;
};

export type Session = {
  userId: string;
  branchId: string;
  loginAt: string;
};

const USERS_KEY = "gobra_auth_users";
const BRANCHES_KEY = "gobra_auth_branches";
const SESSION_KEY = "gobra_auth_session";

/** গোবরা অফিসের ডিফল্ট প্রবেশ (ব্যবহারকারীর দেওয়া) */
const GOBRA_USER = { mobile: "013241655828", password: "gobra1234", name: "Gobra Office" };

/* ───────────────────────── helpers ───────────────────────── */

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("[auth] সংরক্ষণ করা যায়নি", e);
  }
}

/**
 * মোবাইল নম্বরকে একক ফরম্যাটে আনা।
 * নম্বর যেমন দেওয়া হয়েছে তেমনই রাখা হয় (দৈর্ঘ্য জোর করে বদলানো হয় না) —
 * শুধু +880/88 কান্ট্রি প্রিফিক্স থাকলে সেটি বাদ যায়।
 */
export const normalizeMobile = (v: unknown): string => {
  let d = String(v ?? "").replace(/[^0-9]/g, "");
  if (d.length === 14 && d.startsWith("880")) d = d.slice(3); // +8801XXXXXXXXX
  else if (d.length === 13 && d.startsWith("88")) d = d.slice(2); // 8801XXXXXXXXX
  else if (d.length === 10 && d.startsWith("1")) d = `0${d}`; // 1XXXXXXXXX
  return d;
};

/** ইউজার আইডি হিসেবে গ্রহণযোগ্য কি না (৬–১৫ ডিজিট) */
export const isValidMobile = (v: unknown): boolean => {
  const d = normalizeMobile(v);
  return d.length >= 6 && d.length <= 15;
};

/** শাখার নাম থেকে সংরক্ষণের আইডি (ইংরেজি অক্ষর/সংখ্যা; না হলে অনন্য আইডি) */
export const branchIdFromName = (name: string): string => {
  const base = String(name || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 24);
  return base || `br-${Date.now().toString(36)}`;
};

/* ───────────────────────── password hash ───────────────────────── */

export async function hashPassword(password: string, salt: string): Promise<string> {
  const input = `${salt}::${password}`;
  try {
    const subtle = (globalThis.crypto as Crypto | undefined)?.subtle;
    if (subtle) {
      const buf = await subtle.digest("SHA-256", new TextEncoder().encode(input));
      return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
  } catch {}
  // ফলব্যাক (crypto.subtle না থাকলে)
  let h1 = 0x811c9dc5;
  let h2 = 0x1000193;
  for (let i = 0; i < input.length; i++) {
    h1 = ((h1 ^ input.charCodeAt(i)) * 16777619) >>> 0;
    h2 = (h2 + input.charCodeAt(i) * 31 + i) >>> 0;
  }
  return `f${h1.toString(16).padStart(8, "0")}${h2.toString(16).padStart(8, "0")}`;
}

/* ───────────────────────── users & branches ───────────────────────── */

export const listUsers = (): AuthUser[] => {
  const list = readJSON<AuthUser[]>(USERS_KEY, []);
  return Array.isArray(list) ? list : [];
};

export const listBranches = (): Branch[] => {
  const list = readJSON<Branch[]>(BRANCHES_KEY, []);
  if (!Array.isArray(list) || list.length === 0) {
    return [{ id: DEFAULT_BRANCH_ID, name: DEFAULT_BRANCH_NAME, createdAt: new Date().toISOString() }];
  }
  return list;
};

const saveUsers = (list: AuthUser[]) => writeJSON(USERS_KEY, list);
const saveBranches = (list: Branch[]) => writeJSON(BRANCHES_KEY, list);

export const findUser = (mobile: string): AuthUser | null => {
  const id = normalizeMobile(mobile);
  return listUsers().find((u) => normalizeMobile(u.mobile) === id) || null;
};

export const getBranch = (branchId: string): Branch | null =>
  listBranches().find((b) => b.id === branchId) || null;

/** বর্তমান শাখার প্রদর্শন নাম */
export const currentBranchName = (): string => {
  if (isDefaultBranch()) return DEFAULT_BRANCH_NAME;
  return getBranch(getCurrentBranch())?.name || getCurrentBranch().toUpperCase();
};

/** ক্যাশবুক প্রিন্ট হেডারের শাখা লাইন (গোবরার জন্য হুবহু আগের লেখা) */
export const branchPrintLine = (): string => {
  if (isDefaultBranch()) return `${DEFAULT_BRANCH_NAME} Branch.`;
  return `${currentBranchName().toUpperCase()} Branch.`;
};

/* ───────────────────────── session ───────────────────────── */

export const getSession = (): Session | null => {
  const s = readJSON<Session | null>(SESSION_KEY, null);
  if (!s || !s.userId) return null;
  const user = findUser(s.userId);
  if (!user) return null; // ইউজার মুছে গেলে সেশন বাতিল
  return { userId: s.userId, branchId: user.branchId, loginAt: s.loginAt };
};

export const currentUser = (): AuthUser | null => {
  const s = getSession();
  return s ? findUser(s.userId) : null;
};

function startSession(user: AuthUser): Session {
  const session: Session = {
    userId: user.id,
    branchId: user.branchId,
    loginAt: new Date().toISOString(),
  };
  writeJSON(SESSION_KEY, session);
  setBranch(user.branchId);
  const users = listUsers().map((u) =>
    u.id === user.id ? { ...u, lastLoginAt: session.loginAt } : u
  );
  saveUsers(users);
  return session;
}

export function signOut(): void {
  try {
    window.localStorage.removeItem(SESSION_KEY);
  } catch {}
  setBranch(DEFAULT_BRANCH_ID);
}

/* ───────────────────────── seed (গোবরা অফিস) ───────────────────────── */

/** গোবরা শাখা ও তার ডিফল্ট ইউজার না থাকলে তৈরি করে দেয় */
export async function ensureAuthSeed(): Promise<void> {
  try {
    const branches = listBranches();
    if (!branches.some((b) => b.id === DEFAULT_BRANCH_ID)) {
      saveBranches([
        { id: DEFAULT_BRANCH_ID, name: DEFAULT_BRANCH_NAME, createdAt: new Date().toISOString() },
        ...branches,
      ]);
    }
    if (findUser(GOBRA_USER.mobile)) return;
    const passHash = await hashPassword(GOBRA_USER.password, GOBRA_USER.mobile);
    saveUsers([
      ...listUsers(),
      {
        id: normalizeMobile(GOBRA_USER.mobile),
        name: GOBRA_USER.name,
        mobile: normalizeMobile(GOBRA_USER.mobile),
        branchId: DEFAULT_BRANCH_ID,
        passHash,
        createdAt: new Date().toISOString(),
      },
    ]);
  } catch (e) {
    console.error("[auth] ডিফল্ট ইউজার তৈরি করা যায়নি", e);
  }
}

/* ───────────────────────── sign in / sign up ───────────────────────── */

export type AuthResult = { ok: boolean; error?: string; session?: Session };

export async function signIn(mobile: string, password: string): Promise<AuthResult> {
  await ensureAuthSeed();
  const id = normalizeMobile(mobile);
  if (!isValidMobile(id)) {
    return { ok: false, error: "সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট) — এটাই ইউজার আইডি।" };
  }
  if (!password) return { ok: false, error: "পাসওয়ার্ড দিন।" };

  const user = findUser(id);
  if (!user) {
    return {
      ok: false,
      error: "এই মোবাইল নম্বরে কোনো ইউজার নেই — আগে সাইন আপ করুন।",
    };
  }
  const hash = await hashPassword(password, normalizeMobile(user.mobile));
  if (hash !== user.passHash) {
    return { ok: false, error: "পাসওয়ার্ড মিলছে না।" };
  }
  return { ok: true, session: startSession(user) };
}

export async function signUp(input: {
  name: string;
  mobile: string;
  branchName: string;
  password: string;
  confirmPassword: string;
  /** একই শাখায় আগে থেকে ইউজার থাকলে সেই শাখায় যোগ হবে */
}): Promise<AuthResult> {
  await ensureAuthSeed();

  const name = String(input.name || "").trim();
  const mobile = normalizeMobile(input.mobile);
  const branchName = String(input.branchName || "").trim();
  const password = String(input.password || "");
  const confirm = String(input.confirmPassword || "");

  if (name.length < 2) return { ok: false, error: "নাম লিখুন (কমপক্ষে ২ অক্ষর)।" };
  if (!isValidMobile(mobile))
    return { ok: false, error: "সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট) — এটাই ইউজার আইডি।" };
  if (!branchName) return { ok: false, error: "অফিস / শাখার নাম লিখুন।" };
  if (password.length < 6)
    return { ok: false, error: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।" };
  if (password !== confirm) return { ok: false, error: "পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড মিলছে না।" };
  if (findUser(mobile))
    return { ok: false, error: "এই মোবাইল নম্বর আগেই সাইন আপ করা আছে — সাইন ইন করুন।" };

  // শাখা: একই নামের শাখা থাকলে সেটিতেই যোগ হবে, না থাকলে নতুন শাখা তৈরি হবে
  const branches = listBranches();
  const matchName = branchName.toLowerCase();
  let branch =
    branches.find((b) => b.name.trim().toLowerCase() === matchName) ||
    branches.find((b) => b.id === branchIdFromName(branchName));
  if (!branch) {
    branch = {
      id: branchIdFromName(branchName),
      name: branchName,
      createdAt: new Date().toISOString(),
      createdBy: mobile,
    };
    saveBranches([...branches, branch]);
  }

  const passHash = await hashPassword(password, mobile);
  const user: AuthUser = {
    id: mobile,
    name,
    mobile,
    branchId: branch.id,
    passHash,
    createdAt: new Date().toISOString(),
  };
  saveUsers([...listUsers(), user]);
  return { ok: true, session: startSession(user) };
}

/** একটি শাখায় কতজন ইউজার আছে */
export const branchUserCount = (branchId: string): number =>
  listUsers().filter((u) => u.branchId === branchId).length;

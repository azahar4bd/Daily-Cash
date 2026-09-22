/**
 * 🏢 মাল্টি-অফিস (শাখা) স্টোরেজ স্কোপ
 * ------------------------------------------------------------------
 * প্রতিটি অফিস/শাখার সব ডেটা সম্পূর্ণ আলাদা করে রাখা হয় — একই ব্রাউজারে
 * একাধিক অফিসের খতিয়ান চলবে, একটার ডেটা আরেকটায় মিশবে না।
 *
 * কীভাবে কাজ করে:
 *  • `gobra_` দিয়ে শুরু হওয়া প্রতিটি স্টোরেজ কী বর্তমান শাখা অনুযায়ী বদলে যায়
 *    (যেমন: gobra_local_transactions → gobra_<শাখা>__local_transactions)
 *  • **গোবরা (ডিফল্ট) শাখার কী আগের নামেই থাকে** — তাই আপনার পুরনো কোনো
 *    ডেটা নড়ে না, মুছেও যায় না।
 *  • লগইন/ইউজার/ভার্সন/UI-পজিশনের কীগুলো শাখা-নিরপেক্ষ (সবার জন্য এক)।
 */

export const DEFAULT_BRANCH_ID = "gobra";
export const DEFAULT_BRANCH_NAME = "GOBRA BRANCH-0014";

const PREFIX = "gobra_";

/** `gobra_` ছাড়াও যেসব কী শাখা অনুযায়ী আলাদা হতে হবে (অফিসের নিজস্ব ডেটা) */
const EXTRA_SCOPED_PREFIXES = ["cash_sheet_denom_"];
const EXTRA_SCOPED_KEYS = new Set<string>(["kallyan_rule_version_v2", "app_master_date"]);

/** এই কীগুলো সব শাখার জন্য এক (শাখা-স্কোপ করা হবে না) */
const GLOBAL_KEYS = new Set<string>([
  "gobra_auth_users",
  "gobra_auth_branches",
  "gobra_auth_session",
  "gobra_force_reload_done",
  "gobra_floating_pos_cashbook",
  "gobra_floating_pos_report",
]);

let currentBranchId: string = DEFAULT_BRANCH_ID;
let installed = false;

export const getCurrentBranch = (): string => currentBranchId || DEFAULT_BRANCH_ID;
export const isDefaultBranch = (): boolean => getCurrentBranch() === DEFAULT_BRANCH_ID;

export function setBranch(branchId: string): void {
  const id = String(branchId || "").trim();
  currentBranchId = id || DEFAULT_BRANCH_ID;
}

/** কী-কে বর্তমান শাখার কী-তে বদলানো */
export const scopedKey = (key: string): string => {
  if (typeof key !== "string") return key;
  const isAppKey =
    key.startsWith(PREFIX) ||
    EXTRA_SCOPED_KEYS.has(key) ||
    EXTRA_SCOPED_PREFIXES.some((p) => key.startsWith(p));
  if (!isAppKey) return key;
  if (key.startsWith(PREFIX) && GLOBAL_KEYS.has(key)) return key;
  if (getCurrentBranch() === DEFAULT_BRANCH_ID) return key;
  const rest = key.startsWith(PREFIX) ? key.slice(PREFIX.length) : key;
  return `${PREFIX}${getCurrentBranch()}__${rest}`;
};

/** নিবন্ধিত শাখাগুলোর আইডি (অথ রেজিস্ট্রি থেকে) */
function knownBranchIds(t: Storage): string[] {
  try {
    const raw = t.getItem("gobra_auth_branches");
    const list = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(list)) return [];
    return list.map((b: { id?: unknown }) => String(b?.id || "")).filter(Boolean);
  } catch {
    return [];
  }
}

/** কী-টি অন্য শাখার স্কোপড ঘর কি না */
function isForeignScoped(t: Storage, key: string): boolean {
  if (!key.startsWith(PREFIX)) return false;
  const rest = key.slice(PREFIX.length);
  const idx = rest.indexOf("__");
  if (idx <= 0) return false;
  const br = rest.slice(0, idx);
  if (br === getCurrentBranch()) return false;
  return knownBranchIds(t).includes(br);
}

/** কী-টি বর্তমান শাখা থেকে দেখা যায় কি না */
function isVisible(t: Storage, key: string): boolean {
  if (isForeignScoped(t, key)) return false;
  if (GLOBAL_KEYS.has(key)) return true;
  const cur = getCurrentBranch();
  if (cur === DEFAULT_BRANCH_ID) return true;
  // নন-ডিফল্ট শাখা: ডিফল্ট (গোবরা) শাখার মার্কারবিহীন অ্যাপ-কী দেখা যাবে না
  if (EXTRA_SCOPED_KEYS.has(key) || EXTRA_SCOPED_PREFIXES.some((p) => key.startsWith(p))) return false;
  if (key.startsWith(PREFIX)) return key.slice(PREFIX.length).startsWith(`${cur}__`);
  return true; // অ্যাপ-বহির্ভূত কী
}

/** বর্তমান শাখা থেকে দেখা যায় এমন কী-এর তালিকা */
function visibleKeys(t: Storage): string[] {
  const out: string[] = [];
  for (let i = 0; i < t.length; i++) {
    const k = t.key(i);
    if (k && isVisible(t, k)) out.push(k);
  }
  return out;
}

/**
 * localStorage-কে শাখা-স্কোপড প্রক্সি দিয়ে বদলে দেয়।
 * অ্যাপ শুরুর আগে একবারই ডাকতে হয় — এরপর সব পড়া/লেখা নিজে থেকেই
 * বর্তমান শাখার ঘরে হবে (পুরনো কোডে কোনো বদল লাগে না)।
 */
export function installBranchStorage(branchId?: string): void {
  if (branchId) setBranch(branchId);
  if (installed) return;
  try {
    const target = window.localStorage;
    if (!target) return;

    const proxy = new Proxy(target, {
      get(t, prop) {
        switch (prop) {
          case "getItem":
            return (k: string) => t.getItem(scopedKey(k));
          case "setItem":
            return (k: string, v: string) => t.setItem(scopedKey(k), String(v));
          case "removeItem":
            return (k: string) => t.removeItem(scopedKey(k));
          case "key": {
            const keys = visibleKeys(t);
            return (i: number) => keys[i] ?? null;
          }
          case "length":
            return visibleKeys(t).length;
          case "clear":
            // শুধু এই শাখার ডেটা মুছবে — অন্য অফিস ও লগইন তথ্য অক্ষত থাকবে
            return () => {
              visibleKeys(t)
                .filter((k) => !GLOBAL_KEYS.has(k))
                .forEach((k) => t.removeItem(k));
            };
          case "__branchScoped":
            return true;
          default: {
            const v = (t as unknown as Record<string | symbol, unknown>)[prop];
            return typeof v === "function" ? (v as () => unknown).bind(t) : v;
          }
        }
      },
      has(t, prop) {
        return prop in t;
      },
      set(t, prop, value) {
        (t as unknown as Record<string | symbol, unknown>)[prop] = value;
        return true;
      },
    });

    Object.defineProperty(window, "localStorage", {
      value: proxy,
      configurable: true,
      writable: true,
    });
    // কিছু পরিবেশ globalThis থেকেও পড়ে
    try {
      Object.defineProperty(globalThis, "localStorage", {
        value: proxy,
        configurable: true,
        writable: true,
      });
    } catch {}
    installed = true;
  } catch (e) {
    console.error("[branch] শাখা-স্কোপ বসানো যায়নি", e);
  }
}

/** শাখা বদলালে পুরো অ্যাপ নতুন করে লোড করতে হয় (সব ডেটা নতুন শাখার থেকে পড়া হবে) */
export function switchBranch(branchId: string): void {
  setBranch(branchId);
  try {
    window.location.reload();
  } catch {}
}

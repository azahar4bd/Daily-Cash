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
  if (typeof key !== "string" || !key.startsWith(PREFIX)) return key;
  if (GLOBAL_KEYS.has(key)) return key;
  if (getCurrentBranch() === DEFAULT_BRANCH_ID) return key;
  return `${PREFIX}${getCurrentBranch()}__${key.slice(PREFIX.length)}`;
};

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
          case "key":
            return (i: number) => t.key(i);
          case "length":
            return t.length;
          case "clear":
            return () => t.clear();
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

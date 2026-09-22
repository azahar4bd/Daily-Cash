/**
 * Check এন্ট্রি স্টোরেজ — "কোনো এন্ট্রি যেন কখনো মুছে না যায়"
 * ------------------------------------------------------------
 * টেবিলের কলাম: sr, date, member code, member name, centre code,
 * centre name, bank name, check no.
 * মেম্বার ডাটাবেজে কোড থাকলে name/centre সেখান থেকে আসে,
 * না থাকলে ফর্মে সব ঘরই পূরণ করতে হয় (এবং সেটাই নতুন মেম্বার হিসেবে সেভ হয়)।
 *
 * নিরাপত্তা বলয়:
 *  ১) প্রতিবার সেভের আগে ব্যাকআপ কী-তে আগের তালিকা রাখা হয় — মূল কী নষ্ট/খালি
 *     হয়ে গেলে ব্যাকআপ থেকে নিজে থেকেই ফিরে আসে।
 *  ২) সেভের সময় নতুন তালিকায় পুরনো কোনো এন্ট্রি না থাকলে (স্পষ্ট ডিলিট ছাড়া)
 *     সেটি ফিরিয়ে আনা হয় — অর্থাৎ এডিট/মডিফাই করিয়ে কোনো এন্ট্রি হারাবে না।
 *  ৩) একই আইডিতে ভিন্ন এন্ট্রি থাকলে নতুন এন্ট্রিকে নতুন অনন্য আইডি দেওয়া হয় —
 *     পুরনো এন্ট্রির উপর চাপিয়ে দেওয়া হয় না।
 *  ৪) আপডেটে আইডি না মিললে এন্ট্রিটি মুছে না গিয়ে নতুন করে যোগ হয়।
 */

import type { CheckEntry } from "@/types";

const CHECK_KEY = "gobra_check_entries";
const CHECK_BACKUP_KEY = "gobra_check_entries_backup";

type ReadResult = { ok: boolean; list: CheckEntry[] };

/** একটি কী থেকে তালিকা পড়া — ok=false মানে কী নেই বা ডেটা নষ্ট */
function readRaw(key: string): ReadResult {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return { ok: false, list: [] };
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return { ok: false, list: [] };
    return {
      ok: true,
      list: parsed.filter((x) => x && typeof x === "object") as CheckEntry[],
    };
  } catch {
    return { ok: false, list: [] };
  }
}

export function getCheckEntries(): CheckEntry[] {
  const main = readRaw(CHECK_KEY);
  if (main.ok) return main.list; // বৈধ খালি তালিকাও গ্রহণযোগ্য (সব এন্ট্রি ডিলিট হলে)

  // মূল কী নেই/নষ্ট → ব্যাকআপ থেকে উদ্ধার
  const backup = readRaw(CHECK_BACKUP_KEY);
  if (backup.ok && backup.list.length > 0) {
    try {
      localStorage.setItem(CHECK_KEY, JSON.stringify(backup.list));
    } catch {}
    console.warn(
      `[checkStore] মূল তালিকা পাওয়া যায়নি — ব্যাকআপ থেকে ${backup.list.length}টি এন্ট্রি ফিরিয়ে আনা হয়েছে।`
    );
    return backup.list;
  }
  return [];
}

/**
 * সেভ — হারানো এন্ট্রি ফিরিয়ে আনা হয়।
 * `removedIds` শুধু স্পষ্ট ডিলিটের সময় দেওয়া হয়, যাতে সেটি আবার ফিরে না আসে।
 */
function persist(next: CheckEntry[], removedIds: Array<number | string> = []): void {
  const prev = getCheckEntries();

  const removed = new Set(removedIds.map((x) => String(x)));
  const have = new Set(next.map((x) => String(x?.id)));
  const restored = prev.filter(
    (x) =>
      x &&
      x.id !== undefined &&
      x.id !== null &&
      !have.has(String(x.id)) &&
      !removed.has(String(x.id))
  );
  const merged = restored.length > 0 ? [...next, ...restored] : next;

  if (restored.length > 0) {
    console.warn(
      `[checkStore] ${restored.length}টি এন্ট্রি নতুন তালিকায় ছিল না — হারিয়ে না যায় বলে ফিরিয়ে আনা হয়েছে।`
    );
  }

  try {
    localStorage.setItem(CHECK_KEY, JSON.stringify(merged));
    // ব্যাকআপ: সর্বশেষ ভালো অবস্থা — মূল কী নষ্ট/মুছে গেলে এখান থেকেই ফিরবে
    localStorage.setItem(CHECK_BACKUP_KEY, JSON.stringify(merged));
  } catch (e) {
    console.error("[checkStore] সেভ করা যায়নি (স্টোরেজ সমস্যা)", e);
    // মূল কী লেখা না গেলেও অন্তত ব্যাকআপটা রাখার চেষ্টা
    if (prev.length > 0) {
      try {
        localStorage.setItem(CHECK_BACKUP_KEY, JSON.stringify(prev));
      } catch {}
    }
  }
  window.dispatchEvent(
    new CustomEvent("check-changed", {
      detail: { count: merged.length, restored: restored.length },
    })
  );
}

let seq = 0;
const nextId = (): number => {
  seq += 1;
  return Date.now() * 1000 + seq;
};

/** একই এন্ট্রি কি না (ব্যাংক + চেক নম্বর + তারিখ মিলিয়ে) */
const isSameEntry = (a: CheckEntry, b: CheckEntry): boolean =>
  String(a?.bankName || "").trim().toLowerCase() === String(b?.bankName || "").trim().toLowerCase() &&
  String(a?.checkNo || "").trim().toLowerCase() === String(b?.checkNo || "").trim().toLowerCase() &&
  String(a?.checkDate || "") === String(b?.checkDate || "");

/** আইডি অনন্য করা — অন্য এন্ট্রির আইডি হলে নতুন আইডি (পুরনো এন্ট্রি মুছে ফেলা যাবে না) */
function ensureUniqueId(
  id: number | undefined,
  list: CheckEntry[],
  payload: CheckEntry
): number {
  const wanted = Number(id) || nextId();
  const clash = list.find((x) => Number(x.id) === wanted);
  if (!clash) return wanted;
  return isSameEntry(clash, payload) ? wanted : nextId();
}

export function saveCheckEntry(payload: Omit<CheckEntry, "id"> & { id?: number }): CheckEntry {
  const list = getCheckEntries();
  const base = { ...payload, createdAt: new Date().toISOString() } as CheckEntry;
  const rec = { ...base, id: ensureUniqueId(payload.id, list, base) } as CheckEntry;

  const idx = list.findIndex((x) => Number(x.id) === Number(rec.id));
  const next = idx >= 0 ? list.map((x) => (Number(x.id) === Number(rec.id) ? rec : x)) : [rec, ...list];
  persist(next);
  return rec;
}

export function updateCheckEntry(item: CheckEntry): CheckEntry {
  const list = getCheckEntries();
  const idNum = Number(item?.id);

  // ১) আইডি মিললে সেই এন্ট্রিটিই বদলাবে
  if (Number.isFinite(idNum)) {
    const byId = list.findIndex((x) => Number(x.id) === idNum);
    if (byId >= 0) {
      persist(list.map((x, i) => (i === byId ? item : x)));
      return item;
    }
  }

  // ২) আইডি না মিললে একই এন্ট্রি (ব্যাংক + চেক নম্বর + তারিখ) খুঁজে সেটিই আপডেট হবে
  //    — নতুন কপি যোগ হয়ে ডুপ্লিকেট হবে না, পুরনো এন্ট্রিও মুছে যাবে না
  const byContent = list.findIndex((x) => isSameEntry(x, item));
  if (byContent >= 0) {
    const mergedItem = { ...item, id: list[byContent].id } as CheckEntry;
    persist(list.map((x, i) => (i === byContent ? mergedItem : x)));
    return mergedItem;
  }

  // ৩) কোথাও না মিললে এন্ট্রিটি যোগ হবে — কোনোভাবেই হারাবে না
  persist([item, ...list]);
  return item;
}

/** একমাত্র যেখানে এন্ট্রি সত্যিই মুছে ফেলা হয় (ব্যবহারকারীর নিশ্চিতকরণের পর) */
export function deleteCheckEntry(id: number | string): void {
  const list = getCheckEntries().filter((x) => String(x.id) !== String(id));
  persist(list, [id]);
}

/** টেবিলে দেখানোর ক্রম: নতুন তারিখ আগে, একই তারিখে সর্বশেষ এন্ট্রি আগে */
export function getCheckEntriesSorted(): CheckEntry[] {
  return [...getCheckEntries()].sort((a, b) => {
    if (a.checkDate === b.checkDate) return Number(b.id || 0) - Number(a.id || 0);
    return a.checkDate < b.checkDate ? 1 : -1;
  });
}

/** তারিখের পরিসর (ইনপুটের জন্য) */
export function getAllowedCheckDates(): string[] {
  return Array.from(new Set(getCheckEntries().map((e) => e.checkDate))).sort().reverse();
}

/** একই ব্যাংক + চেক নম্বর দুবার আছে কি না */
export function isDuplicateCheck(bankName: string, checkNo: string, exceptId?: number): boolean {
  const b = String(bankName || "").trim().toLowerCase();
  const c = String(checkNo || "").trim().toLowerCase();
  if (!b || !c) return false;
  return getCheckEntries().some(
    (e) =>
      Number(e.id) !== Number(exceptId) &&
      String(e.bankName || "").trim().toLowerCase() === b &&
      String(e.checkNo || "").trim().toLowerCase() === c
  );
}

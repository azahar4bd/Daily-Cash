/**
 * Check এন্ট্রি স্টোরেজ
 * ------------------------------------------------------------
 * টেবিলের কলাম: sr, date, member code, member name, centre code,
 * centre name, bank name, check no.
 * মেম্বার ডাটাবেজে কোড থাকলে name/centre সেখান থেকে আসে,
 * না থাকলে ফর্মে সব ঘরই পূরণ করতে হয় (এবং সেটাই নতুন মেম্বার হিসেবে সেভ হয়)।
 */

import type { CheckEntry } from "@/types";

const CHECK_KEY = "gobra_check_entries";

export function getCheckEntries(): CheckEntry[] {
  try {
    const raw = localStorage.getItem(CHECK_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function persist(list: CheckEntry[]): void {
  try {
    localStorage.setItem(CHECK_KEY, JSON.stringify(list));
  } catch {}
  window.dispatchEvent(new CustomEvent("check-changed", { detail: { count: list.length } }));
}

let seq = 0;
const nextId = (): number => {
  seq += 1;
  return Date.now() * 1000 + seq;
};

export function saveCheckEntry(payload: Omit<CheckEntry, "id"> & { id?: number }): CheckEntry {
  const list = getCheckEntries();
  const rec: CheckEntry = {
    ...payload,
    id: payload.id ?? nextId(),
    createdAt: new Date().toISOString(),
  } as CheckEntry;
  const idx = list.findIndex((x) => x.id === rec.id);
  const next = idx >= 0 ? list.map((x) => (x.id === rec.id ? rec : x)) : [rec, ...list];
  persist(next);
  return rec;
}

export function updateCheckEntry(item: CheckEntry): CheckEntry {
  const list = getCheckEntries().map((x) => (x.id === item.id ? item : x));
  persist(list);
  return item;
}

export function deleteCheckEntry(id: number): void {
  persist(getCheckEntries().filter((x) => x.id !== id));
}

/** টেবিলে দেখানোর ক্রম: নতুন তারিখ আগে, একই তারিখে সর্বশেষ এন্ট্রি আগে */
export function getCheckEntriesSorted(): CheckEntry[] {
  return [...getCheckEntries()].sort((a, b) => {
    if (a.checkDate === b.checkDate) return (b.id || 0) - (a.id || 0);
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
      e.id !== exceptId &&
      String(e.bankName || "").trim().toLowerCase() === b &&
      String(e.checkNo || "").trim().toLowerCase() === c
  );
}

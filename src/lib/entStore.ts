/**
 * 🎉 Entertainment পেজের স্টোর (v1.4.71)
 * - লোকাল: localStorage (gobra_entertainment_entries)
 * - ক্লাউড: Neon app_settings KV-তে পুরো তালিকা JSON আকারে যায় (একই অফিসের সব ডিভাইসে মিলে যায়)
 */
import { enqueueNeonAction } from "./neonSync";

export const ENT_KEY = "gobra_entertainment_entries";
export const ENT_CLOUD_KEY = "entertainment_entries";
/* 🪦 v1.4.131: মোছা এন্ট্রির "টম্বস্টোন" — ইউনিয়ন মার্জে ডিলিট হওয়া এন্ট্রি আর ফেরত আসে না */
export const ENT_TOMBSTONE_KEY = "gobra_entertainment_deleted_ids";
export const ENT_TOMBSTONE_CLOUD_KEY = "entertainment_deleted_ids";

export type EntEntry = {
  id: number;
  date: string; // YYYY-MM-DD
  category: "জমা" | "খরচ";
  description: string;
  amount: string; // সংখ্যা-স্ট্রিং (Tx প্যাটার্ন অনুযায়ী)
};

export function getEntEntries(): EntEntry[] {
  try {
    const raw = localStorage.getItem(ENT_KEY);
    const list: EntEntry[] = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

/** তারিখ নতুন→পুরনো, একই দিনে সর্বশেষ এন্ট্রি আগে */
export function getEntEntriesSorted(): EntEntry[] {
  return [...getEntEntries()].sort(
    (a, b) =>
      String(b.date || "").localeCompare(String(a.date || "")) ||
      Number(b.id) - Number(a.id)
  );
}

function writeAll(list: EntEntry[]): void {
  localStorage.setItem(ENT_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("entertainment-changed"));
  // ☁️ পুরো তালিকা ক্লাউডে (app_settings KV) — স্কিমা-চেঞ্জ ছাড়াই সিংক
  enqueueNeonAction({
    type: "setting",
    payload: { key: ENT_CLOUD_KEY, value: JSON.stringify(list) },
  });
}

export function saveEntEntry(
  payload: Omit<EntEntry, "id"> & { id?: number }
): EntEntry {
  const entry: EntEntry = { ...payload, id: payload.id || Date.now() };
  writeAll([entry, ...getEntEntries().filter((e) => e.id !== entry.id)]);
  return entry;
}

export function getEntTombstones(): Set<string> {
  try {
    const raw = localStorage.getItem(ENT_TOMBSTONE_KEY);
    const list: unknown[] = raw ? JSON.parse(raw) : [];
    return new Set((Array.isArray(list) ? list : []).map(String));
  } catch {
    return new Set();
  }
}

export function storeEntTombstones(list: Iterable<string>): void {
  const arr = [...new Set([...list].map(String))].slice(0, 500); // সর্বোচ্চ ৫০০ মনে রাখি
  localStorage.setItem(ENT_TOMBSTONE_KEY, JSON.stringify(arr));
}

export function addEntTombstone(id: string): void {
  storeEntTombstones([...getEntTombstones(), String(id)]);
  // ☁️ মোছা-তালিকা ক্লাউডে — অন্য ডিভাইসেও ডিলিট পৌঁছে যায়
  enqueueNeonAction({
    type: "setting",
    payload: { key: ENT_TOMBSTONE_CLOUD_KEY, value: JSON.stringify([...getEntTombstones()]) },
  });
}

/** ক্লাউড ∪ লোকাল ইউনিয়ন মার্জ — তবে টম্বস্টোনযুক্ত id ফেরত আসে না (v1.4.131) */
export function mergeEntEntries(cloudList: EntEntry[], localList: EntEntry[]): EntEntry[] {
  const tomb = getEntTombstones();
  const byId = new Map<string, EntEntry>();
  for (const e of cloudList) if (e && !tomb.has(String(e.id))) byId.set(String(e.id), e);
  for (const e of localList) if (e && !tomb.has(String(e.id))) byId.set(String(e.id), e);
  const merged = [...byId.values()];
  merged.sort(
    (a, b) =>
      String(b.date || "").localeCompare(String(a.date || "")) ||
      Number(b.id) - Number(a.id)
  );
  return merged;
}

export function deleteEntEntry(id: number | string): void {
  addEntTombstone(String(id)); // 🪦 প্রথমে টম্বস্টোন — মার্জে এরপর কখনোই ফিরবে না
  writeAll(getEntEntries().filter((e) => String(e.id) !== String(id)));
}

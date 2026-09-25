/**
 * 🎉 Entertainment পেজের স্টোর (v1.4.71)
 * - লোকাল: localStorage (gobra_entertainment_entries)
 * - ক্লাউড: Neon app_settings KV-তে পুরো তালিকা JSON আকারে যায় (একই অফিসের সব ডিভাইসে মিলে যায়)
 */
import { enqueueNeonAction } from "./neonSync";

export const ENT_KEY = "gobra_entertainment_entries";
export const ENT_CLOUD_KEY = "entertainment_entries";

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

export function deleteEntEntry(id: number | string): void {
  writeAll(getEntEntries().filter((e) => String(e.id) !== String(id)));
}

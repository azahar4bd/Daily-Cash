/**
 * মেম্বার ডাটাবেজ (Member Database)
 * ------------------------------------------------------------
 * Check পেজে মেম্বার কোড লিখলে এখান থেকেই member name, centre code,
 * centre name খুঁজে আনা হয়। ডাটাবেজে না থাকলে এন্ট্রি টেবিলের সব ঘর
 * দেখানো হয়, এবং সেভ করলে নতুন মেম্বার এখানেই যোগ হয়।
 */

export type Member = {
  memberCode: string;
  memberName: string;
  centreCode: string;
  centreName: string;
  /** ডাটাবেজে থাকলে এগুলোও অনুসন্ধানে কাজে লাগে */
  bankName?: string;
  checkNo?: string;
  /** কোন উৎস থেকে এসেছে — 'db' = আমদানি করা ডাটাবেজ, 'auto' = Check এন্ট্রি থেকে তৈরি */
  source?: "db" | "auto";
  updatedAt?: string;
};

import { MEMBER_DB_CSV, MEMBER_DB_SEED_VERSION } from "@/data/memberDatabaseSeed";
import { isDefaultBranch } from "./branchScope";

const MEMBER_DB_KEY = "gobra_member_database";
const MEMBER_DB_SEED_KEY = "gobra_member_db_seed";

/* ───────────────────────── normalization ───────────────────────── */

export const normCode = (v: unknown): string =>
  String(v ?? "")
    .trim()
    .replace(/\s+/g, "")
    .toUpperCase();

const clean = (v: unknown): string => String(v ?? "").trim();

/* ───────────────────────── storage ───────────────────────── */

export function getMembers(): Member[] {
  try {
    const raw = localStorage.getItem(MEMBER_DB_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function persist(list: Member[]): void {
  try {
    localStorage.setItem(MEMBER_DB_KEY, JSON.stringify(list));
  } catch {}
  window.dispatchEvent(new Event("member-db-changed"));
}

export function saveMembers(list: Member[]): void {
  persist(list);
}

/** একক মেম্বার যোগ/আপডেট (কোড দিয়ে মেলানো) */
export function upsertMember(m: Omit<Member, "updatedAt">): Member {
  const list = getMembers();
  const key = normCode(m.memberCode);
  const rec: Member = { ...m, memberCode: clean(m.memberCode), updatedAt: new Date().toISOString() };
  const idx = list.findIndex((x) => normCode(x.memberCode) === key);
  if (idx >= 0) {
    list[idx] = { ...list[idx], ...rec };
  } else {
    list.unshift(rec);
  }
  persist(list);
  return rec;
}

export function deleteMember(memberCode: string): void {
  const key = normCode(memberCode);
  persist(getMembers().filter((m) => normCode(m.memberCode) !== key));
}

export function clearMembers(): void {
  persist([]);
}

/* ───────────── bundled seed ───────────── */

export function seedMemberDatabase(force = false): { added: number; updated: number; total: number } | null {
  try {
    // 🏢 গোবরার ৪,৭৬১ মেম্বার শুধু গোবরা শাখাতেই বসবে — নতুন অফিস খালি ডাটাবেজ নিয়ে শুরু করবে
    if (!isDefaultBranch()) {
      try { localStorage.setItem(MEMBER_DB_SEED_KEY, MEMBER_DB_SEED_VERSION); } catch {}
      return null;
    }
    if (!force && localStorage.getItem(MEMBER_DB_SEED_KEY) === MEMBER_DB_SEED_VERSION) return null;
    const { members } = parseMemberText(MEMBER_DB_CSV);
    if (!members.length) return null;
    const byKey = new Map<string, Member>();
    for (const m of getMembers()) { const k = normCode(m.memberCode); if (k) byKey.set(k, m); }
    let added = 0, updated = 0;
    const now = new Date().toISOString();
    for (const m of members) {
      const key = normCode(m.memberCode);
      if (!key) continue;
      const prev = byKey.get(key);
      if (!prev) added++;
      else if (normCode(prev.memberName) !== normCode(m.memberName) || prev.centreName !== m.centreName || normCode(prev.centreCode) !== normCode(m.centreCode)) updated++;
      byKey.set(key, { ...(prev || {}), memberCode: key, memberName: m.memberName, centreCode: m.centreCode, centreName: m.centreName, source: "db", updatedAt: now });
    }
    const list = Array.from(byKey.values());
    persist(list);
    try { localStorage.setItem(MEMBER_DB_SEED_KEY, MEMBER_DB_SEED_VERSION); } catch {}
    return { added, updated, total: list.length };
  } catch { return null; }
}

/* ───────────────────────── lookup ───────────────────────── */

export function findMemberByCode(code: string): Member | null {
  const key = normCode(code);
  if (!key) return null;
  return getMembers().find((m) => normCode(m.memberCode) === key) || null;
}

export function memberDbCount(): number {
  return getMembers().length;
}

/* ───────────────────────── import ───────────────────────── */

/** হেডার নাম থেকে কলাম চেনা (বাংলা ও ইংরেজি দুটোই) */
function detectColumns(headers: string[]): Record<string, number> {
  const map: Record<string, number> = {};
  headers.forEach((h, i) => {
    const t = clean(h).toLowerCase();
    if (!t) return;
    const has = (...keys: string[]) => keys.some((k) => t.includes(k));

    if (map.memberCode === undefined && has("member code", "membercode", "member_code", "মেম্বার কোড", "সদস্য কোড", "কোড"))
      map.memberCode = i;
    else if (map.memberName === undefined && has("member name", "membername", "member_name", "মেম্বার", "সদস্যের নাম", "নাম"))
      map.memberName = i;
    else if (map.centreCode === undefined && has("centre code", "center code", "centrecode", "centercode", "centre_code", "কেন্দ্র কোড", "সেন্টার কোড"))
      map.centreCode = i;
    else if (map.centreName === undefined && has("centre name", "center name", "centrename", "centre_name", "কেন্দ্র", "সেন্টার"))
      map.centreName = i;
    else if (map.bankName === undefined && has("bank name", "bankname", "ব্যাংক"))
      map.bankName = i;
    else if (map.checkNo === undefined && has("check no", "cheque no", "checkno", "check no:", "চেক"))
      map.checkNo = i;
  });
  return map;
}

/** CSV / TSV / কপি-পেস্ট করা টেক্সট → Member list */
export function parseMemberText(text: string): { members: Member[]; skipped: number } {
  const lines = String(text || "")
    .replace(/\r/g, "")
    .split("\n")
    .filter((l) => l.trim().length > 0);
  if (!lines.length) return { members: [], skipped: 0 };

  const split = (line: string): string[] => {
    if (line.includes("\t")) return line.split("\t");
    // comma CSV with quotes
    if (line.includes(",")) {
      const out: string[] = [];
      let cur = "";
      let inQ = false;
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') {
          if (inQ && line[i + 1] === '"') {
            cur += '"';
            i++;
          } else inQ = !inQ;
        } else if (c === "," && !inQ) {
          out.push(cur);
          cur = "";
        } else cur += c;
      }
      out.push(cur);
      return out;
    }
    return line.split(/\s{2,}|;/);
  };

  const first = split(lines[0]);
  const cols = detectColumns(first);
  const hasHeader = cols.memberCode !== undefined && Object.keys(cols).length >= 2;

  const get = (row: string[], key: string, fallback: number): string => {
    const idx = hasHeader ? cols[key] : fallback;
    return idx === undefined ? "" : clean(row[idx]);
  };

  const members: Member[] = [];
  let skipped = 0;

  for (const line of hasHeader ? lines.slice(1) : lines) {
    const row = split(line);
    const memberCode = get(row, "memberCode", 0);
    if (!memberCode) {
      skipped++;
      continue;
    }
    members.push({
      memberCode,
      memberName: get(row, "memberName", 1),
      centreCode: get(row, "centreCode", 2),
      centreName: get(row, "centreName", 3),
      bankName: get(row, "bankName", 4) || undefined,
      checkNo: get(row, "checkNo", 5) || undefined,
      source: "db",
      updatedAt: new Date().toISOString(),
    });
  }
  return { members, skipped };
}

/** আমদানি করা মেম্বারগুলো বিদ্যমান ডাটাবেজের সাথে মার্জ করে */
export function importMembers(incoming: Member[]): { added: number; updated: number; total: number } {
  const list = getMembers();
  const index = new Map(list.map((m, i) => [normCode(m.memberCode), i]));
  let added = 0;
  let updated = 0;

  for (const m of incoming) {
    const key = normCode(m.memberCode);
    if (!key) continue;
    const at = index.get(key);
    if (at === undefined) {
      list.push({ ...m, source: "db", updatedAt: new Date().toISOString() });
      index.set(key, list.length - 1);
      added++;
    } else {
      const prev = list[at];
      list[at] = {
        ...prev,
        memberName: m.memberName || prev.memberName,
        centreCode: m.centreCode || prev.centreCode,
        centreName: m.centreName || prev.centreName,
        bankName: m.bankName || prev.bankName,
        checkNo: m.checkNo || prev.checkNo,
        source: "db",
        updatedAt: new Date().toISOString(),
      };
      updated++;
    }
  }
  persist(list);
  return { added, updated, total: list.length };
}

/** CSV আকারে এক্সপোর্ট (ব্যাকআপ) */
export function membersToCsv(list?: Member[]): string {
  const rows = list || getMembers();
  const head = "Member Code,Member Name,Centre Code,Centre Name,Bank Name,Check No";
  const body = rows
    .map((m) =>
      [m.memberCode, m.memberName, m.centreCode, m.centreName, m.bankName || "", m.checkNo || ""]
        .map((v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v)))
        .join(",")
    )
    .join("\n");
  return body ? `${head}\n${body}` : head;
}

/* ───────────────────────── search ───────────────────────── */

export function searchMembers(q: string, limit = 300): Member[] {
  const key = clean(q).toLowerCase();
  const list = getMembers();
  if (!key) return list.slice(0, limit);
  const nk = normCode(q);
  return list
    .filter((m) => {
      if (nk && normCode(m.memberCode).includes(nk)) return true;
      if (normCode(m.centreCode).includes(nk)) return true;
      return (
        m.memberName.toLowerCase().includes(key) ||
        m.centreName.toLowerCase().includes(key)
      );
    })
    .slice(0, limit);
}

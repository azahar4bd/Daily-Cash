import { getMembers } from "./memberDb";
import { getDescHistory, type DescSug } from "./paymentDescSuggest";

export type { DescSug };

/**
 * 💡 v1.4.153: RECEIVE পেজের Description-সাজেশন — পেমেন্ট-পেজের (v1.4.128) একই আদলে
 * --------------------------------------------------------------
 *  ইউজার-নির্দেশ: "পেমেন্ট পেজের description ঘরের আদলে করো" — সেই প্যাটার্নই।
 *  ডাটা-উৎস (ইউজার-সংশোধন v1.4.150): মেম্বার কোড, মেম্বার নাম, সেন্টার কোড, সেন্টার নাম —
 *   এছাড়া চেক-পেজের অন্য কিছু (হিসাব/চেক/ব্যাংক) আসবে না;
 *   + নিজে লিখে সেভ-করা বিবরণ (rememberDescription হিস্টোরি — পেমেন্টের সাথে ভাগ করা)
 */

const MAX_SUG = 12;
const norm = (s: string) => String(s || "").trim().toLowerCase();

/** মেম্বার-সিলেক্টে Description-এ বসবে: নাম - কোড - সেন্টার নাম - সেন্টার কোড (পেমেন্টের ফরম্যাটেই) */
function memberInsert(m: { memberName?: string; centreName?: string; centreCode?: string }, code: string): string {
  return `${m.memberName || ""} - ${code} - ${m.centreName || ""} - ${m.centreCode || ""}`
    .replace(/\s+-\s+-(\s|$)/g, " -$1")
    .replace(/(\s+-\s+){2,}/g, " - ");
}

export function getReceiveDescSuggestions(query: string): DescSug[] {
  const q = norm(query);
  if (!q) return [];
  const digits = q.replace(/[^0-9]/g, "");
  const hasLetters = /[a-z\u0980-\u09FF]/i.test(q);

  const out: DescSug[] = [];
  const seen = new Set<string>();
  const push = (s: DescSug) => {
    const k = s.kind + "|" + norm(s.insert);
    if (seen.has(k) || out.length >= MAX_SUG) return;
    seen.add(k);
    out.push(s);
  };

  try {
    /* 👤 মেম্বার — কোডে (সংখ্যা) বা নামে মিলে */
    let n = 0;
    for (const m of getMembers()) {
      if (n >= 5) break;
      const code = String(m.memberCode || "");
      if (!code) continue;
      const codeOk = !!digits && code.includes(digits);
      const nameOk = hasLetters && norm(String(m.memberName || "")).includes(q);
      if (!codeOk && !nameOk) continue;
      n++;
      push({
        kind: "member",
        icon: "👤",
        insert: memberInsert(m, code),
        title: `${m.memberName || "—"} • ${code}`,
        sub: `${m.centreName || "—"} • সেন্টার কোড: ${m.centreCode || "—"}`,
      });
    }

    /* 🏛️ সেন্টার — ইউনিক কোড/নামে মিলে */
    const centres = new Map<string, { code: string; name: string }>();
    for (const m of getMembers()) {
      const cc = String(m.centreCode || "");
      const cn = String(m.centreName || "");
      if (!cc && !cn) continue;
      const key = (cc || cn).toLowerCase();
      if (!centres.has(key)) centres.set(key, { code: cc, name: cn });
    }
    let c = 0;
    for (const cen of centres.values()) {
      if (c >= 4) break;
      const codeOk = !!digits && cen.code.includes(digits);
      const nameOk = hasLetters && norm(cen.name).includes(q);
      if (!codeOk && !nameOk) continue;
      c++;
      push({
        kind: "part",
        icon: "🏛️",
        insert: cen.name && cen.code ? `${cen.name} - ${cen.code}` : cen.name || cen.code,
        title: cen.name || cen.code,
        sub: `সেন্টার${cen.code ? ` • কোড: ${cen.code}` : ""}`,
      });
    }
  } catch {}

  /* 🕘 নিজের আগে লিখে সেভ-করা বিবরণ */
  try {
    let n = 0;
    for (const t of getDescHistory()) {
      if (n >= 5) break;
      if (!norm(t).includes(q)) continue;
      n++;
      push({ kind: "history", icon: "🕘", insert: t, title: t, sub: "আগের এন্ট্রি থেকে" });
    }
  } catch {}

  return out.slice(0, MAX_SUG);
}

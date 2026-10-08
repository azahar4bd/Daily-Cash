import { getMembers } from "./memberDb";

/**
 * 💡 v1.4.128: PAYMENT পেজের Description-এর স্মার্ট সাজেশন
 * --------------------------------------------------------------
 *  ইউজার-নির্দেশ:
 *   ১) মেম্বার কোড লিখলে ওই সদস্যের নাম·মেম্বার কোড·সেন্টার নাম·সেন্টার কোড সাজেশনে — ট্যাপে সিলেক্ট
 *   ২) অফিসের হেড-তালিকার (ছবির) কোড/পার্টিকুলার-নামের ১-২ অক্ষর লিখলেই মিলে — ট্যাপে সিলেক্ট
 *   ৩) নতুন কিছু লিখে সেভ করলে পরের বার সেটাও সাজেশনে (হিস্টোরি)
 * --------------------------------------------------------------
 *  ডাটা-সোর্স: (ক) PART_HEADS নিচের বিল্ট-ইন তালিকা (স্ক্রিনশট থেকে)
 *             (খ) gobra_payment_desc_history লোকালস্টোরেজ-কী (সর্বাধিক ১৫০টা সাম্প্রতিক)
 *             (গ) gobra_member_database (মেম্বার তালিকা)
 */

export interface PaymentPartHead {
  name: string;
  code: string; // কমা ছাড়া নর্মালাইজড (যেমন "5001")
}

/** স্ক্রিনশটের "Particulars | Coad no" তালিকা (কমা বাদে নর্মালাইজড) */
export const PART_HEADS: PaymentPartHead[] = [
  { name: "Salary & Allowance", code: "5001" },
  { name: "Graututy", code: "7601" },
  { name: "Office Rent-Office", code: "6501" },
  { name: "Office Rent-Abashik", code: "6506" },
  { name: "Printing & Stationary", code: "6001" },
  { name: "Postage & Telephone", code: "5901" },
  { name: "Fuel & Lubricant", code: "5601" },
  { name: "Entertainment", code: "6801" },
  { name: "Water & Electricity", code: "5801" },
  { name: "Photocopy Bill", code: "6003" },
  { name: "Miscellaneous Exp.", code: "7011" },
  { name: "Bank charge", code: "5301" },
  { name: "Picnic", code: "7008" },
  { name: "Convayance", code: "5103" },
  { name: "Furniture & Fixture", code: "1504" },
  { name: "Electronics Good", code: "1505" },
  { name: "Crokeries / Leave Expense", code: "6004-5101" },
  { name: "Repair And Maintanance", code: "5707" },
  { name: "Legal Expen", code: "6101" },
  { name: "Food Bill", code: "7012" },
  { name: "Service Charge Jagoron", code: "5511" },
  { name: "Service Charge Agrossor", code: "5512" },
  { name: "Service Charge MDP", code: "5519" },
  { name: "Service Charge Buniyed", code: "5513" },
  { name: "Service Charge Sufolon", code: "5514" },
  { name: "Service Charge LRL", code: "5520" },
  { name: "MDP-AF", code: "5521" },
  { name: "LRL-2 S/C", code: "5524" },
  { name: "MFCE", code: "5525" },
  { name: "Miscellaneous Income", code: "9402" },
];

/* ─────────────── 🕘 ব্যবহারের হিস্টোরি (নিজের লেখা ডেসক্রিপশন) ─────────────── */

const DESC_HISTORY_KEY = "gobra_payment_desc_history";
const HISTORY_LIMIT = 150;

const norm = (s: string) => s.trim().toLowerCase();

export function getDescHistory(): string[] {
  try {
    const raw = localStorage.getItem(DESC_HISTORY_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list.filter((x) => typeof x === "string" && x.trim()) : [];
  } catch {
    return [];
  }
}

/** সেভ-সময়ে ডাকুন — নতুন/আগের ডেসক্রিপশন সর্বাধিক সাম্প্রতিক হিসেবে রাখে */
export function rememberDescription(text: string): void {
  const t = String(text || "").trim();
  if (!t || t.length < 2) return;
  try {
    let list = getDescHistory();
    // টাইপ-তে-টাইপ ডুপ্লিকেট: পার্টিকুলার সাজেশনের চূড়ান্ত মান হলে তোকে মেথসো দিচ্ছিনা — তবু তালিকায় ধরুন (পরিষ্কারে ফিল্টার হবে)
    list = [t, ...list.filter((x) => norm(x) !== norm(t))].slice(0, HISTORY_LIMIT);
    localStorage.setItem(DESC_HISTORY_KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent("payment-desc-history-changed"));
  } catch {}
}

/* ─────────────── সাজেশন টাইপ + তৈরি ─────────────── */

export type DescSugKind = "member" | "part" | "history";

export interface DescSug {
  kind: DescSugKind;
  icon: string;
  /** ডেসক্রিপশনে বসবে একটাই টেক্সট */
  insert: string;
  /** ড্রপডাউনে বড় করে */
  title: string;
  /** ছোট/dim লাইন */
  sub: string;
}

const MAX_SUG = 12;

/**
 * ডেসক্রিপশন-ক্যোয়ারি থেকে সাজেশন:
 *  - সংখ্যা আছে → 👤 মেম্বার (কোড মিলে) + 🔢 কোড মিলে পার্টিকুলার + নাম-মিল সব + 🕘 হিস্টোরি
 *  - শুধু অক্ষর → নাম-মিল পার্টিকুলার + 🕘 হিস্টোরি
 */
export function getDescSuggestions(query: string): DescSug[] {
  const q = norm(String(query || ""));
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

  /* 👤 মেম্বার কোড মিলে (সংখ্যা থাকলে) */
  if (digits.length >= 1) {
    let n = 0;
    for (const m of getMembers()) {
      if (n >= 4) break;
      const code = String(m.memberCode || "");
      if (!code) continue;
      if (!code.startsWith(digits) && !code.includes(digits)) continue;
      n++;
      push({
        kind: "member",
        icon: "👤",
        insert: `${m.memberName || ""} - ${code} - ${m.centreName || ""} - ${m.centreCode || ""}`
          .replace(/\s+-\s+-(\s|$)/g, " -$1")
          .replace(/(\s+-\s+){2,}/g, " - "),
        title: `${m.memberName || "—"} • ${code}`,
        sub: `${m.centreName || "—"} • সেন্টার কোড: ${m.centreCode || "—"}`,
      });
    }
  }

  /* 🧾 অফিস হেড — নামে (শুরুতে, তারপর যেকোনো অংশে) */
  const namePrefix = PART_HEADS.filter((h) => norm(h.name).startsWith(q));
  const nameMid = PART_HEADS.filter((h) => !norm(h.name).startsWith(q) && norm(h.name).includes(q));
  for (const h of [...namePrefix, ...nameMid]) {
    push({
      kind: "part",
      icon: "🧾",
      insert: `${h.name} (${h.code})`,
      title: h.name,
      sub: `কোড: ${h.code}`,
    });
  }

  /* 🔢 অফিস হেড — কোডে (নাম-মিলে যোগ হয়নি এমন) */
  if (digits.length >= 1) {
    for (const h of PART_HEADS) {
      const hc = h.code.replace(/-/g, "");
      if (!hc.includes(digits)) continue;
      push({
        kind: "part",
        icon: "🔢",
        insert: `${h.name} (${h.code})`,
        title: h.name,
        sub: `কোড: ${h.code}`,
      });
    }
  }

  /* 🕘 হিস্টোরি */
  if (hasLetters || digits.length) {
    let n = 0;
    for (const t of getDescHistory()) {
      if (n >= 5) break;
      if (!norm(t).includes(q)) continue;
      const already = PART_HEADS.some((h) => norm(`${h.name} (${h.code})`) === norm(t) || norm(h.name) === norm(t));
      if (already) continue;
      n++;
      push({ kind: "history", icon: "🕘", insert: t, title: t, sub: "আগের এন্ট্রি থেকে" });
    }
  }

  return out.slice(0, MAX_SUG);
}

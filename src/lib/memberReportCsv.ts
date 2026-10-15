/**
 * মাসিক "Savings & Loan Report" (স্যামিটি/MIS ফরমেট) CSV পার্সার
 * ------------------------------------------------------------
 * অফিসের MIS থেকে আসা মাসিক রিপোর্ট যেমন দেখতে:
 *   "S.L. No",Name of Member,Member ID,...(১৮+ কলাম, টাকার অংক)
 *   "Samity: 0001, GOBRA BAZAR   ",,,...
 *   1, Sattyajit Podder,02963,18177,0,...
 *
 * এই ফরমেট থেকে চেক-পেজের দরকারি ৪টা জিনিস বের করা হয়:
 *   memberCode (লিডিং জিরো বাদ), memberName, centreCode, centreName
 * টাকার কলামগুলো পুরোপুরি উপেক্ষিত — ডাটাবেজে যায় না।
 *
 * খাঁটি ফাংশন: কোনো localStorage/ব্রাউজার-নির্ভরতা নেই (নোডে টেস্টযোগ্য)।
 */

export type ReportMember = {
  memberCode: string;
  memberName: string;
  centreCode: string;
  centreName: string;
};

export type ReportParse = {
  /** ডুপ্লিকেট-মুক্ত মেম্বার তালিকা (মেম্বার কোড অনুযায়ী) */
  members: ReportMember[];
  /** রিপোর্টে পাওয়া সেন্টার/স্যামিটির তালিকা */
  centres: { code: string; name: string }[];
  /** মেম্বার-সারি মোট কত পড়া হয়েছে (ডুপ্লিকেটসহ) */
  memberRows: number;
  /** কত সারি বাদ/ডুপ্লিকেট পড়েছে */
  skipped: number;
};

/** কোট-সচেতন CSV লাইন-স্প্লিটার (এই ফরমেটে কমা সবসময় কোটের বাইরে) */
function splitCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQ = !inQ;
      }
    } else if (c === "," && !inQ) {
      out.push(cur);
      cur = "";
    } else {
      cur += c;
    }
  }
  out.push(cur);
  return out;
}

/** "02963" → "2963", "0001" → "1" — বিশুদ্ধ সংখ্যা হলেই লিডিং জিরো বাদ */
function stripLeadingZeros(v: string): string {
  const s = v.trim();
  return /^\d+$/.test(s) ? String(parseInt(s, 10)) : s;
}

/**
 * রিপোর্ট-ফরমেট শনাক্ত করে পার্স করে।
 * রিটার্ন `null` মানে ফাইলটা এই ফরমেটের নয় — তখন সাধারণ CSV-পার্সারে ফেলা যাবে।
 * ফরমেট মিলেছে কিন্তু মেম্বার পাওয়া না গেলে members:[] আসবে (null নয়)।
 */
export function parseSamityReport(text: string): ReportParse | null {
  const lines = String(text || "")
    .replace(/\r/g, "")
    .split("\n");

  let sawSamity = false;
  let curCode = "";
  let curName = "";
  const centres: { code: string; name: string }[] = [];
  const centreSeen = new Set<string>();
  const members: ReportMember[] = [];
  const memberSeen = new Set<string>();
  let memberRows = 0;
  let skipped = 0;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const cells = splitCsvLine(line);
    const c0 = (cells[0] || "").trim();

    // ── স্যামিটি/সেন্টার হেডার: "Samity: 0001, GOBRA BAZAR" ──
    const sm = /^samity\s*:\s*(.+)$/i.exec(c0);
    if (sm) {
      sawSamity = true;
      const rest = sm[1].trim();
      const comma = rest.indexOf(",");
      curCode = stripLeadingZeros(comma >= 0 ? rest.slice(0, comma) : rest);
      curName = (comma >= 0 ? rest.slice(comma + 1) : "").trim().replace(/\s+/g, " ");
      if (curCode && !centreSeen.has(curCode)) {
        centres.push({ code: curCode, name: curName });
        centreSeen.add(curCode);
      }
      continue;
    }

    // ── মেম্বার-সারি: প্রথম ঘর বিশুদ্ধ সিরিয়াল-সংখ্যা; ২য়=নাম, ৩য়=Member ID ──
    if (/^\d+$/.test(c0)) {
      const name = (cells[1] || "").trim().replace(/\s+/g, " ");
      const idRaw = (cells[2] || "").trim();
      // হেডারের ভাঙা টুকরো ("No",Name of Member,...) বা কোডহীন সারি বাদ
      if (/^name of member/i.test(name) || /^member id$/i.test(idRaw)) continue;
      if (!curCode || !name || !/^0*\d+$/.test(idRaw)) {
        skipped++;
        continue;
      }
      memberRows++;
      const memberCode = stripLeadingZeros(idRaw);
      if (memberSeen.has(memberCode)) {
        skipped++;
        continue; // একই রিপোর্টে ডুপ্লিকেট কোড — প্রথমটাই রাখা হয়
      }
      memberSeen.add(memberCode);
      members.push({ memberCode, memberName: name, centreCode: curCode, centreName: curName });
      continue;
    }

    // অন্য সব (খালি কলাম-সারি, মোট-লাইন ইত্যাদি) — গুনে রাখি শুধু
    skipped++;
  }

  if (!sawSamity) return null; // এই ফরমেট নয়
  return { members, centres, memberRows, skipped };
}

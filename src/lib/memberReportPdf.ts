import type { ReportMember, ReportParse } from "./memberReportCsv";

/**
 * 📄 "GenerateOrganizerRecoveryReport.pdf" (মাসিক Savings & Loan Collection Report) পার্সার
 * ------------------------------------------------------------------------------------------
 * PDF-এর সারি-লাইনে (y-গোষ্ঠিত, x-ক্রমে) থাকে:
 *   "Samity: 0001, GOBRA BAZAR"                    → সেন্টার
 *   "1 02963 17977 300 0 18277 ..."                → SL, মেম্বার ID, টাকার ১৫টি অংক
 *   "Sattyajit Podder"                             → নাম (সংখ্যা-লাইনের পরের টেক্সট-লাইন)
 * টাকার অংক পুরোপুরি উপেক্ষিত — চেক-পেজের দরকারি ৪টিই নেওয়া হয়।
 * খাঁটি ফাংশন — নোডে টেস্টযোগ্য।
 */

const SAMITY_RE = /^Samity:\s*0*(\d+)\s*,\s*(.+?)\s*$/i;
/* SL (১-৬ সংখ্যা) + ID (৩-৬ সংখ্যা) + অন্তত ৯টা আরো সংখ্যা (টাকার অংক — কমা-সহ হতে পারে) */
const DATA_RE = /^(\d{1,6})\s+(\d{3,7})((?:\s+[\d,]+){9,})\s*$/;
/* হেডার-আবর্জনা — নাম ভেবে ভুল করা যাবে না */
const HEADER_WORDS =
  /^(S\.L\.?$|No$|No |ID$|ID |Name of|Last|Savings|Loan|Service|Fine|Current|Over-|With-|Withdr|Disbursed|Recover|Repaid|Outstan|Total|Deposit|Monthly|Bandhu|Branch|S\.C\.|drawal|Balance|Charge|Paid|-ding|Samity)/i;

export function parseRecoveryPdfLines(lines: string[]): ReportParse | null {
  const all: ReportMember[] = [];
  const centres: { code: string; name: string }[] = [];
  const seenCodes = new Set<string>();
  const seenCentres = new Set<string>();
  let curCentre: { code: string; name: string } | null = null;
  let matchedRows = 0;
  let dupRows = 0;
  let nameless = 0;
  let hitData = false;

  for (const rawLine of lines) {
    const line = String(rawLine || "").replace(/\s+/g, " ").trim();
    if (!line) continue;

    const sm = line.match(SAMITY_RE);
    if (sm) {
      const code = String(parseInt(sm[1], 10));
      const name = sm[2].trim();
      curCentre = { code, name };
      if (!seenCentres.has(code)) {
        seenCentres.add(code);
        centres.push(curCentre);
      }
      continue;
    }

    const dm = line.match(DATA_RE);
    if (dm) {
      hitData = true;
      matchedRows++;
      const code = String(parseInt(dm[2], 10)); // লিডিং-০ বাদ
      if (seenCodes.has(code)) {
        dupRows++;
        continue;
      }
      seenCodes.add(code);
      all.push({
        memberCode: code,
        memberName: "",
        centreCode: curCentre ? curCentre.code : "",
        centreName: curCentre ? curCentre.name : "",
      });
      continue;
    }

    /* নাম-লাইন: সরাসরি আগের ডেটা-সারির নাম এখনও ফাঁকা থাকলে */
    if (
      all.length > 0 &&
      !all[all.length - 1].memberName &&
      !/^\d/.test(line) &&
      line.length >= 2 &&
      !HEADER_WORDS.test(line)
    ) {
      all[all.length - 1].memberName = line;
    }
  }

  if (!hitData || !all.length) return null;

  const members = all.filter((m) => {
    if (m.memberName) return true;
    nameless++;
    return false;
  });

  return {
    members,
    centres,
    memberRows: matchedRows,
    skipped: dupRows + nameless,
  };
}

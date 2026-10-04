import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import DatePicker, { todayISO } from "./DatePicker";
import {
  findMemberByCode,
  upsertMember,
  normCode,
  getMembers,
  importMembers,
  parseMemberText,
  memberDbCount,
} from "@/lib/memberDb";
import {
  getCheckEntries,
  getCheckEntriesSorted,
  saveCheckEntry,
  updateCheckEntry,
  deleteCheckEntry,
  isDuplicateCheck,
} from "@/lib/checkStore";
/** v1.4.82: চেক পেজ ডে-স্টেট থেকে সম্পূর্ণ স্বতন্ত্র — ইউজার-নির্দেশ:
 * "check page এর সাথে day open/closed এর কোন সম্পর্ক নেই"।
 * তাই এখানে ডে-ভিত্তিক কোনো গেট চলে না: এন্ট্রি সেভ, এডিট, ডিলিট, Return টিক, রি-ইস্যু —
 * সব যে-কোনো তারিখে চলে; 🔒/🚫 ডে-বার্তা বা ব্যাজও আসে না।
 * (isDayClosed ও isIntermediateBlockedDate — দুটোই লেনদেন-পেজের জন্য, চেকের নয়।) */
const isDayClosed = (_date: string): boolean => false;
const isIntermediateBlockedDate = (
  _date: string,
  _active?: string
): { blocked: boolean; prevWorkingDate?: string; nextWorkingDate?: string; reason?: string } => ({
  blocked: false,
});
import { formatDisplay } from "./DatePicker";
import type { CheckEntry } from "@/types";
import BankNameInput from "./BankNameInput";
import SearchSelect from "./SearchSelect";
import MemberDatabaseModal from "./MemberDatabaseModal";


/** Project ড্রপডাউনের নির্ধারিত তালিকা */
const PROJECT_OPTIONS = ["jagoron", "agrossor"];

/**
 * v1.4.45: project ঘরে ও তালিকায় দেখাবে বড় হাতের ইংরেজিতে (JAGORON, AGROSSOR) —
 * সংরক্ষিত মান আগের মতোই ছোট হাতের ইংরেজিতে থাকে।
 */
const projectOpts = (extra?: string): { value: string; label: string }[] => {
  const cur = (extra || "").trim().toLowerCase();
  const list =
    cur && !PROJECT_OPTIONS.includes(cur) ? [...PROJECT_OPTIONS, cur] : PROJECT_OPTIONS;
  return list.map((v) => ({ value: v, label: v.toUpperCase() }));
};

/** v1.4.47: চেক লিস্ট ও Return টেবিল — দুই টেবিলের কলাম হুবহু এক; Return কলামটি Action-এর ঠিক আগে */
/** 🏦 v1.4.76: ক্যাটাগরি অপশন — ছোট ড্রপডাউন প্যানেলে (নেটিভ ফুল-স্ক্রিন পিকার নয়) */
const ACCOUNT_TYPE_OPTS = [
  "মেম্বার",
  "জামিনদার-১",
  "জামিনদার-২",
  { value: "", label: "— ফাঁকা —" },
];

const TABLE_HEADERS = [
  "Sr",
  "Date",
  "মেম্বার কোড",
  "মেম্বার Name",
  "Centre Code",
  "Centre Name",
  "Bank Name",
  "হিসাব নং",
  "Check No.",
  "MICR",
  "Disbursse",
  "Project",
  "Return",
  "Action",
];
/** 📄 v1.4.92: PDF ভিউর প্রিন্ট-স্টাইল — শুধু PDF মোডাল খোলা থাকলেই কার্যকর (landscape A4);
 *  index.css-এ @media print-এ .fixed লুকিয়ে ফেলে, তাই এখানে উচ্চ-specificity দিয়ে আবার দেখানো হয়েছে */
const CHECK_PDF_PRINT_CSS = `
@media print {
  @page { size: A4 landscape; margin: 8mm; }
  div.fixed.check-pdf-modal {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    overflow: visible !important;
    background: #ffffff !important;
    backdrop-filter: none !important;
  }
  div.fixed.check-pdf-modal .check-pdf-shell {
    height: auto !important; max-height: none !important; margin: 0 !important;
    border-radius: 0 !important; box-shadow: none !important; overflow: visible !important;
  }
  div.fixed.check-pdf-modal .check-pdf-scroll {
    overflow: visible !important; height: auto !important; max-height: none !important;
    background: #ffffff !important; padding: 0 !important;
  }
  #check-pdf-document { max-width: none !important; box-shadow: none !important; padding: 0 !important; }
  #check-pdf-document table { font-size: 10px !important; }
  #check-pdf-document th, #check-pdf-document td { padding: 2px 4px !important; }
  #check-pdf-document tr { page-break-inside: avoid !important; }
}
`;

/** v1.4.48: এন্ট্রির সব ব্যাংক/চেক নম্বরের জোড়া — প্রথম জোড়া মূল ঘর থেকে, বাকিগুলো extraBanks থেকে */
const allBankPairs = (e: CheckEntry): { bankName: string; checkNo: string; micr: boolean; accountNo?: string; accountType?: string }[] => {
  const list = [{ bankName: e.bankName || "", checkNo: e.checkNo || "", micr: e.micr === true, accountNo: e.accountNo || "", accountType: e.accountType || "" }];
  for (const b of e.extraBanks || []) {
    if (b && ((b.bankName || "").trim() || (b.checkNo || "").trim())) {
      list.push({ bankName: b.bankName || "", checkNo: b.checkNo || "", micr: b.micr === true, accountNo: b.accountNo || "", accountType: b.accountType || "" });
    }
  }
  return list;
};

/** 🔎 v1.4.95: 👁 View-এর জন্য ডুপ্লিকেট-চিহ্ন — তারিখ/আইডি ভিন্ন হলেও বাকি তথ্য হুবহু এক হলে একই চেক */
const viewDedupeKey = (e: CheckEntry): string =>
  JSON.stringify({
    m: normCode(e.memberCode || ""),
    n: (e.memberName || "").trim().toLowerCase(),
    cc: normCode(e.centreCode || ""),
    cn: (e.centreName || "").trim().toLowerCase(),
    p: allBankPairs(e)
      .map((b) =>
        [
          (b.bankName || "").trim().toLowerCase(),
          String(b.checkNo || "").replace(/\s/g, ""),
          b.micr ? 1 : 0,
          String(b.accountNo || "").replace(/\s/g, ""),
          (b.accountType || "").trim(),
        ].join("|")
      )
      .sort(),
    d: String(e.disbursse || "").replace(/[^0-9.]/g, ""),
    pr: (e.project || "").trim().toLowerCase(),
    r: e.returned ? 1 : 0,
  });

/** 🔎 v1.4.95: 👁 View ডিসপ্লে-ডিডুপ — একই চেকের হুবহু একই তথ্য একবারই (সাম্প্রতিকতম তারিখের এন্ট্রি);
 *  স্টোর/টেবিল/📄 PDF-এর কিছুই বদলায় না — শুধু ভিউতে দেখার জন্য গ্রুপ করে */
const dedupeViewRows = (list: CheckEntry[]): { row: CheckEntry; dupes: CheckEntry[] }[] => {
  const seen = new Map<string, { row: CheckEntry; dupes: CheckEntry[] }>();
  for (const row of list) {
    const k = viewDedupeKey(row);
    const cur = seen.get(k);
    if (!cur) {
      seen.set(k, { row, dupes: [] });
      continue;
    }
    const newer =
      row.checkDate > cur.row.checkDate ||
      (row.checkDate === cur.row.checkDate && Number(row.id) > Number(cur.row.id));
    cur.dupes = [...cur.dupes, newer ? cur.row : row];
    cur.row = newer ? row : cur.row;
  }
  return [...seen.values()];
};

/**
 * সার্চের সাথে এন্ট্রি মেলে কি না — টেবিল ফিল্টার ও সেভ-পরবর্তী যাচাইয়ে একই নিয়ম।
 * (সেভ/এডিটের পর এন্ট্রিটি ফিল্টারের বাইরে চলে গেলে তা ধরা পড়ে, ফিল্টার সরিয়ে দেওয়া হয়)
 */
const entryMatches = (e: CheckEntry, rawQuery: string): boolean => {
  const q = String(rawQuery || "").trim().toLowerCase();
  if (!q) return true;
  const nq = normCode(rawQuery);
  if (nq && normCode(e.memberCode).includes(nq)) return true;
  if (nq && normCode(e.centreCode).includes(nq)) return true;
  if (nq && normCode(e.checkNo).includes(nq)) return true;
  // v1.4.91: হিসাব নং দিয়েও সার্চ — মূল হিসাব নং + ＋ জোড়ার হিসাব নং, দুটোতেই
  if (nq && normCode(e.accountNo).includes(nq)) return true;
  if (nq && (e.extraBanks || []).some((b) => normCode(b?.accountNo || "").includes(nq))) return true;
  if ((e.checkDate || "").includes(q)) return true;
  if ((e.memberName || "").toLowerCase().includes(q)) return true;
  if ((e.centreName || "").toLowerCase().includes(q)) return true;
  if ((e.bankName || "").toLowerCase().includes(q)) return true;
  if ((e.disbursse || "").toLowerCase().includes(q)) return true;
  if ((e.project || "").toLowerCase().includes(q)) return true;
  if (
    (e.extraBanks || []).some(
      (b) =>
        (b?.bankName || "").toLowerCase().includes(q) ||
        (b?.checkNo || "").toLowerCase().includes(q) ||
        (nq && normCode(b?.checkNo || "").includes(nq))
    )
  )
    return true;
  // v1.4.49: রি-ইস্যু লিংক — পুরনো চেক নম্বর দিয়ে নতুন এন্ট্রি (ও উল্টোটা) খোঁজে
  if (nq && normCode(e.reissuedTo?.checkNo || "").includes(nq)) return true;
  if (nq && normCode(e.reissuedFrom?.checkNo || "").includes(nq)) return true;
  if (q.includes("micr")) {
    const wantsNon = q.includes("non");
    const pairs = allBankPairs(e); // v1.4.50: যেকোনো জোড়ার MICR অবস্থানে মেলে
    if (wantsNon ? pairs.some((p) => !p.micr) : pairs.some((p) => p.micr)) return true;
  }
  return false;
};

/** ✅ v1.4.106: তারিখ 100% পূরণ হয়েছে কি না — সম্পূর্ণ YYYY-MM-DD ফরম্যাট + বাস্তব ক্যালেন্ডার-তারিখ। */
export const isFullDate = (s: string): boolean => {
  const v = String(s || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
  const y = Number(v.slice(0, 4));
  const m = Number(v.slice(5, 7));
  const d = Number(v.slice(8, 10));
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
};

/**
 * 🔁 v1.4.106: সার্চ চালু থাকলে রি-ইস্যু হয়ে যাওয়া পুরনো এন্ট্রি টেবিলে থাকবে না —
 * তার জায়গায় রি-ইস্যু চেইনের সর্বশেষ (নতুন) এন্ট্রিটিই দেখাবে।
 * (তবে রেকর্ডে অর্থাৎ স্টোরে পুরনো এন্ট্রিটিও অক্ষত থাকে — শুধু সার্চের টেবিল থেকে বাদ।)
 */
export const searchVisibleEntries = (list: CheckEntry[], search: string): CheckEntry[] => {
  const q = (search || "").trim();
  if (!q) return list;
  const hits = list.filter((e) => entryMatches(e, q));
  const byId = new Map(list.map((e) => [Number(e.id), e]));
  const show = new Map<number, CheckEntry>();
  for (const h of hits) {
    if (!h.reissuedTo) {
      show.set(Number(h.id), h);
      continue;
    }
    // পুরনো (রি-ইস্যুকৃত) এন্ট্রি → চেইন ধরে সর্বশেষ এন্ট্রিটি দেখাও
    let cur: CheckEntry | undefined = h;
    const seen = new Set<number>();
    while (cur && cur.reissuedTo && !seen.has(Number(cur.id))) {
      seen.add(Number(cur.id));
      cur = byId.get(Number(cur.reissuedTo.id));
    }
    if (cur) show.set(Number(cur.id), cur);
  }
  return list.filter((e) => show.has(Number(e.id)));
};

/**
 * ⌨️ v1.4.110: টেবিল-উইন্ডোর Arrow-স্ক্রল — ফোকাস-থাকা টেবিলের ওপরে Arrow চাপলে টেবিলটাই
 * ডানে/বামে/উপরে/নিচে স্ক্রল হয় (কোনো কার্সর বা ঘর-নেভিগেশন সিস্টেম নয়)।
 */
export const handleTableScrollKeys = (e: { key: string; currentTarget: EventTarget | null; preventDefault: () => void }) => {
  if (!e.key || !e.key.startsWith("Arrow")) return;
  const el = e.currentTarget as HTMLElement | null;
  if (!el) return;
  e.preventDefault();
  const STEP = 80;
  if (e.key === "ArrowLeft") el.scrollLeft -= STEP;
  else if (e.key === "ArrowRight") el.scrollLeft += STEP;
  else if (e.key === "ArrowUp") el.scrollTop -= STEP;
  else if (e.key === "ArrowDown") el.scrollTop += STEP;
};

const emptyForm = (date: string) => ({
  checkDate: date,
  memberCode: "",
  memberName: "",
  centreCode: "",
  centreName: "",
  bankName: "",
  checkNo: "",
  disbursse: "",
  project: "",
  /** ✔ MICR চেক কি না */
  micr: false,
  /** 🏦 v1.4.80: মূল জোড়ার হিসাব নং + ক্যাটাগরি — এখন সেভের পর রিসেটে খালিও হয় */
  accountNo: "",
  accountType: "",
  /** 📄 v1.4.108: Bank Statement টিক — হিসাব নং এর উপরে MICR-ধাঁচের */
  bankStatement: false,
  /** 🏦 অতিরিক্ত ব্যাংক + চেক নম্বরের জোড়া — প্রতিটিতে নিজস্ব MICR টিক (v1.4.48/50) */
  extraBanks: [] as { bankName: string; checkNo: string; micr: boolean; accountNo?: string; accountType?: string }[],
});

/** 📅 v1.4.55: ফিল্টার বাটনের সংক্ষিপ্ত তারিখ — "18-09" */
const shortDM = (iso: string) => (iso ? `${iso.slice(8, 10)}-${iso.slice(5, 7)}` : "");

export default function CheckPage({ selectedDate }: { selectedDate?: string }) {
  const baseDate = selectedDate || todayISO();

  const [entries, setEntries] = useState<CheckEntry[]>([]);
  const [form, setForm] = useState(emptyForm(baseDate));
  const [edit, setEdit] = useState<CheckEntry | null>(null);
  const [search, setSearch] = useState("");
  const [matchInfo, setMatchInfo] = useState<"idle" | "found" | "notfound">("idle");
  const [dbCount, setDbCount] = useState(0);
  const [status, setStatus] = useState<{ kind: "ok" | "warn" | "err"; text: string } | null>(null);
  const [importOpen, setImportOpen] = useState(false);
  /** 🗄️ মেম্বার ডাটাবেজ পপআপ উইন্ডো */
  const [dbBrowseOpen, setDbBrowseOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [lockPulse, setLockPulse] = useState(false);
  const [page, setPage] = useState(1);
  /** v1.4.47: Return টেবিলের নিজস্ব পেজ */
  const [retPage, setRetPage] = useState(1);
  /** v1.4.48 → v1.4.92: সার্চ/ফিল্টার ফলাফলের ফুল-স্ক্রিন ভিউ — এখন মূল টেবিলের মতো টেবিল আকারে (সারি উপর-নিচ) */
  const [viewOpen, setViewOpen] = useState(false);
  /** 📄 v1.4.92: তারিখ-হতে-তারিখ ফিল্টার প্রয়োগ-অবস্থায় PDF ভিউ — ফিল্টার না থাকলে কখনোই দেখা যাবে না */
  const [pdfOpen, setPdfOpen] = useState(false);
  /** 📅 v1.4.55: তারিখ হতে তারিখ ফিল্টার (সার্চের পাশের বাটন) */
  const [dateRange, setDateRange] = useState<{ from: string; to: string } | null>(null);
  const [rangeOpen, setRangeOpen] = useState(false);
  const [rangeFrom, setRangeFrom] = useState("");
  const [rangeTo, setRangeTo] = useState("");
  /** v1.4.106: Return টিকের তারিখ-মডাল — টিক দিলে তারিখ চাইবে; 100% পূরণ ছাড়া সেভ হয় না */
  const [returnFor, setReturnFor] = useState<CheckEntry | null>(null);
  const [returnDateInput, setReturnDateInput] = useState("");
  const [returnErr, setReturnErr] = useState("");
  const PAGE_SIZE = 25;

  const formRef = useRef<HTMLDivElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  /** v1.4.45: MICR টিকে চেক নম্বর ঘরের ফোকাস/কীবোর্ড হারাবে না */
  const checkNoRef = useRef<HTMLInputElement | null>(null);
  const micrFocusRef = useRef(false);

  // v1.4.64: MICR ঘরে টাচ — নেটিভ (নন-প্যাসিভ) লিসেনারে চুপ টগল।
  // React-এর রুট-লিসেনার প্যাসিভ, তাই onTouchStart-এ preventDefault কাজ করে নি —
  // এ কারণেই টিক দিতে গেলে ফোকাস সরে কীবোর্ড হারাত। এখন ডিফল্ট বন্ধ → ট্যাপে ফোকাস
  // বদলায় না, কীবোর্ড হারায় না/আসেও না — কোনো প্রতিক্রিয়া নেই। (পিসিতে ক্লিক/মাউস আগের মতোই)
  useEffect(() => {
    const root = formRef.current;
    if (!root) return;
    const onNativeTouch = (e: Event) => {
      const el = (e.target as HTMLElement | null)?.closest?.("[data-micr-toggle]") as
        | HTMLElement
        | null;
      if (!el) return;
      e.preventDefault();
      const key = el.getAttribute("data-micr-toggle");
      if (key === "main") {
        setForm((f) => ({ ...f, micr: !Boolean(f.micr) }));
      } else {
        const bi = Number(key);
        if (Number.isInteger(bi)) {
          setForm((f) => ({
            ...f,
            extraBanks: f.extraBanks.map((x, xi) =>
              xi === bi ? { ...x, micr: !Boolean(x.micr) } : x
            ),
          }));
        }
      }
    };
    root.addEventListener("touchstart", onNativeTouch, { passive: false });
    return () => root.removeEventListener("touchstart", onNativeTouch);
  }, []);

  const dayClosed = isDayClosed(form.checkDate);
  const blocked = isIntermediateBlockedDate(form.checkDate);

  const flashLock = () => {
    setLockPulse(true);
    window.setTimeout(() => setLockPulse(false), 900);
  };

  const reload = () => {
    setEntries(getCheckEntriesSorted());
    setDbCount(memberDbCount());
  };

  useEffect(() => {
    reload();
    const onChange = () => reload();
    window.addEventListener("check-changed", onChange);
    window.addEventListener("member-db-changed", onChange);
    window.addEventListener("tx-changed", onChange);
    window.addEventListener("day-close-changed", onChange);
    return () => {
      window.removeEventListener("check-changed", onChange);
      window.removeEventListener("member-db-changed", onChange);
      window.removeEventListener("tx-changed", onChange);
      window.removeEventListener("day-close-changed", onChange);
    };
  }, []);

  // তারিখ বদলালে ফর্মের তারিখও বদলাবে (এন্ট্রি না করা থাকলে)
  useEffect(() => {
    if (!edit) setForm((f) => (f.memberCode || f.checkNo ? f : { ...f, checkDate: baseDate }));
  }, [baseDate, edit]);

  /* ───────── মেম্বার কোড দিয়ে ডাটাবেজ lookup ───────── */
  const lookupMember = (code: string) => {
    const key = code.trim();
    if (!key) {
      setMatchInfo("idle");
      return;
    }
    const m = findMemberByCode(key);
    if (m) {
      setMatchInfo("found");
      setForm((f) => ({
        ...f,
        memberCode: key,
        memberName: m.memberName || "",
        centreCode: m.centreCode || "",
        centreName: m.centreName || "",
      }));
    } else {
      setMatchInfo("notfound");
      setForm((f) => ({
        ...f,
        memberCode: key,
        memberName: "",
        centreCode: "",
        centreName: "",
      }));
    }
  };

  const found = matchInfo === "found";
  const needsAll = matchInfo !== "found"; // ডাটাবেজে না থাকলে সব ঘর পূরণ করতে হবে

  /* ───────── v1.4.90: হিসাব নং আগের কোনো এন্ট্রির মিললে ওই মেম্বার কোড দেখায় ─────────
   * ইউজার-নির্দেশ: "নতুন এন্ট্রি দেব তখন পূর্বের কোন এন্ট্রির সাথে হিসাব নং মিল থাকলে
   * হিসাব নং এর উপরে সেই মেম্বার কোড দেখাবে"।
   * - শুধু নতুন এন্ট্রিতে (এডিটে নিজের আগের এন্ট্রিটিই মিলে যাবে — উপদ্রব)
   * - পূর্বের এন্ট্রির মূল হিসাব নং + জোড়ার (extraBanks) হিসাব নং — দুটোতেই মেলে
   * - একাধিক মিললে সবচেয়ে সাম্প্রতিক (বড় id) এন্ট্রির মেম্বার কোড */
  const findPrevMemberForAccount = (acc: string): string | null => {
    const key = normCode(acc);
    if (!key || edit) return null;
    let hit: CheckEntry | null = null;
    for (const e of entries) {
      const match =
        normCode(e.accountNo) === key ||
        (e.extraBanks || []).some((b) => normCode(b?.accountNo) === key);
      if (!match) continue;
      if (!hit || Number(e.id) > Number(hit.id)) hit = e;
    }
    return hit?.memberCode || null;
  };
  const prevAccountMember = useMemo(
    () => findPrevMemberForAccount(form.accountNo),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries, form.accountNo, edit]
  );

  /* ───────── কোড টাইপ করার সাথে সাথেই নিজে থেকে খোঁজ (blur-এর অপেক্ষা নয়) ───────── */
  const lookupTimer = useRef<number | null>(null);
  const handleMemberCodeChange = (raw: string) => {
    setForm((f) => ({ ...f, memberCode: raw }));
    // v1.4.84: টাইপ চলার সময় পুরনো ম্যাচের নাম যেন ভুল করে দেখা না যায় — আগে idle, ৩৫০ms ডিবাউন্সে আবার লুকআপ
    setMatchInfo("idle");
    if (lookupTimer.current) window.clearTimeout(lookupTimer.current);
    const val = raw.trim();
    if (!val) return;
    lookupTimer.current = window.setTimeout(() => lookupMember(val), 350);
  };

  useEffect(() => {
    return () => {
      if (lookupTimer.current) window.clearTimeout(lookupTimer.current);
    };
  }, []);

  /* ───────── সেভ ───────── */
  const handleSubmit = () => {
    if (dayClosed) {
      flashLock();
      setStatus({ kind: "err", text: `🔒 ${form.checkDate} তারিখের দিন সমাপ্ত (Day Closed) — কোনো এন্ট্রি করা যাবে না।` });
      return;
    }
    if (blocked.blocked) {
      setStatus({ kind: "err", text: `🚫 ${blocked.reason || "এই তারিখটি ব্লকড।"}` });
      return;
    }
    // v1.4.106: তারিখ 100% পূরণ না হলে এন্ট্রি সেভ হবে না
    if (!isFullDate(form.checkDate))
      return setStatus({
        kind: "err",
        text: "তারিখ 100% পূরণ করুন (সম্পূর্ণ তারিখ বাধ্যতামূলক) — না পূরণে এন্ট্রি সেভ হবে না।",
      });
    if (!form.memberCode.trim()) return setStatus({ kind: "err", text: "মেম্বার কোড দিন।" });
    if (!form.bankName.trim()) return setStatus({ kind: "err", text: "ব্যাংকের নাম দিন।" });
    if (!form.checkNo.trim()) return setStatus({ kind: "err", text: "চেক নম্বর দিন।" });

    if (needsAll) {
      if (!form.memberName.trim()) return setStatus({ kind: "err", text: "মেম্বার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।" });
      if (!form.centreCode.trim()) return setStatus({ kind: "err", text: "সেন্টার কোড দিন (ডাটাবেজে পাওয়া যায়নি)।" });
      if (!form.centreName.trim()) return setStatus({ kind: "err", text: "সেন্টার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।" });
    }

    // v1.4.48: অতিরিক্ত ব্যাংক জোড়া — আংশিক পূরণ করা জোড়া সেভ হবে না
    const cleanExtras = form.extraBanks
      .map((b) => ({
        bankName: (b.bankName || "").trim(),
        checkNo: (b.checkNo || "").trim(),
        micr: Boolean(b.micr),
        accountNo: (b.accountNo || "").trim(),
        accountType: b.accountType || "",
      }))
      .filter((b) => b.bankName || b.checkNo);
    for (let i = 0; i < cleanExtras.length; i++) {
      if (!cleanExtras[i].bankName)
        return setStatus({ kind: "err", text: `ব্যাংক #${i + 2}-এর নাম দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।` });
      if (!cleanExtras[i].checkNo)
        return setStatus({ kind: "err", text: `ব্যাংক #${i + 2}-এর চেক নম্বর দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।` });
    }

    const dupPair = [{ bankName: form.bankName, checkNo: form.checkNo }, ...cleanExtras].find(
      (p) =>
        p.bankName.trim() && p.checkNo.trim() && isDuplicateCheck(p.bankName, p.checkNo, edit?.id)
    );
    if (dupPair) {
      const ok = confirm(
        `⚠️ ${dupPair.bankName} ব্যাংকের ${dupPair.checkNo} নম্বর চেকটি আগেও এন্ট্রি করা আছে।\n\nতবুও সেভ করতে চান?`
      );
      if (!ok) return;
    }

    // ডাটাবেজে না থাকলে → নতুন মেম্বার হিসেবে ডাটাবেজেও সেভ হবে
    if (needsAll) {
      upsertMember({
        memberCode: form.memberCode,
        memberName: form.memberName,
        centreCode: form.centreCode,
        centreName: form.centreName,
        bankName: form.bankName,
        checkNo: form.checkNo,
        source: "auto",
      });
    }

    const payload = {
      checkDate: form.checkDate,
      memberCode: form.memberCode.trim(),
      memberName: form.memberName.trim(),
      centreCode: form.centreCode.trim(),
      centreName: form.centreName.trim(),
      bankName: form.bankName.trim(),
      checkNo: form.checkNo.trim(),
      disbursse: form.disbursse.trim(),
      project: form.project.trim().toLowerCase(),
      micr: Boolean(form.micr),
      accountNo: form.accountNo.trim(),
      accountType: form.accountType || "",
      bankStatement: Boolean(form.bankStatement), // v1.4.108
      extraBanks: cleanExtras,
      foundInDb: found,
    };

    const wasEdit = Boolean(edit);
    const savedEntry: CheckEntry = wasEdit
      ? updateCheckEntry({ ...edit!, ...payload })
      : saveCheckEntry(payload);
    if (wasEdit) setEdit(null);

    // সেভ/আপডেটের পর এন্ট্রিটি বর্তমান সার্চ ফিল্টারের বাইরে চলে গেলে ফিল্টার সরিয়ে দেওয়া হয় —
    // না হলে এন্ট্রিটি টেবিলে দেখা যায় না এবং "মুছে গেছে" বলে মনে হয়
    const hiddenBySearch = Boolean(search.trim()) && !entryMatches(savedEntry, search);
    if (hiddenBySearch) {
      setSearch("");
      setPage(1);
    }

    const totalNow = getCheckEntries().length;
    setStatus({
      kind: "ok",
      text: wasEdit
        ? `✓ চেক #${payload.checkNo} (${payload.memberCode}) আপডেট হয়েছে — আগের এন্ট্রিটি মুছে যায়নি, ওই এন্ট্রিটিই বদলেছে। মোট এন্ট্রি: ${totalNow.toLocaleString("en-IN")}${
            hiddenBySearch ? " • সার্চ ফিল্টার সরানো হয়েছে যাতে এন্ট্রিটি দেখা যায়" : ""
          }`
        : needsAll
        ? `✓ নতুন মেম্বার (${payload.memberCode}) ডাটাবেজে যোগ হয়েছে এবং চেক এন্ট্রি সেভ হয়েছে। মোট এন্ট্রি: ${totalNow.toLocaleString("en-IN")}`
        : `✓ চেক #${payload.checkNo} সেভ হয়েছে (ডাটাবেজ থেকে তথ্য আনা হয়েছে)। মোট এন্ট্রি: ${totalNow.toLocaleString("en-IN")}`,
    });

    setForm(emptyForm(form.checkDate));
    setMatchInfo("idle");
    reload();
  };

  const handleEdit = (row: CheckEntry) => {
    // যে দিনের এন্ট্রি — সেই দিন Day Closed হলে এডিট লক
    if (isDayClosed(row.checkDate)) {
      flashLock();
      setStatus({
        kind: "err",
        text: `🔒 ${formatDisplay(row.checkDate) || row.checkDate} তারিখের দিন সমাপ্ত (Day Closed) — এই এন্ট্রি এডিট করা যাবে না।`,
      });
      return;
    }
    setStatus(null);
    setViewOpen(false); // v1.4.92: 👁 View টেবিল থেকে এডিট চাপলে ভিউ-উইন্ডো আগে বন্ধ — ফর্ম সামনে আসবে
    setEdit(row);
    setForm({
      checkDate: row.checkDate,
      memberCode: row.memberCode,
      memberName: row.memberName,
      centreCode: row.centreCode,
      centreName: row.centreName,
      bankName: row.bankName,
      checkNo: row.checkNo,
      disbursse: row.disbursse || "",
      project: (row.project || "").trim().toLowerCase(),
      accountNo: row.accountNo || "",
      accountType: row.accountType || "",
      micr: Boolean(row.micr),
      bankStatement: Boolean(row.bankStatement), // v1.4.108: এডিটেও Bank Statement টিক ফিরে আসে
      extraBanks: (row.extraBanks || []).map((b) => ({
        bankName: b?.bankName || "",
        checkNo: b?.checkNo || "",
        micr: b?.micr === true,
        accountNo: b?.accountNo || "",
        accountType: b?.accountType || "",
      })),
    });
    // ডাটাবেজে আছে কি না যাচাই
    const m = findMemberByCode(row.memberCode);
    setMatchInfo(m ? "found" : "notfound");
    // কিছু পরিবেশে (পুরনো WebView) scrollIntoView নাও থাকতে পারে — নিরাপদে কল করুন
    const el = formRef.current;
    if (el && typeof (el as any).scrollIntoView === "function") {
      (el as any).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDelete = (row: CheckEntry) => {
    // যে দিনের এন্ট্রি — সেই দিন Day Closed হলে ডিলিট লক
    if (isDayClosed(row.checkDate)) {
      flashLock();
      setStatus({
        kind: "err",
        text: `🔒 ${formatDisplay(row.checkDate) || row.checkDate} তারিখের দিন সমাপ্ত (Day Closed) — এই এন্ট্রি মুছে ফেলা যাবে না।`,
      });
      return;
    }
    if (
      confirm(
        `চেক নম্বর ${row.checkNo} (${row.memberCode}) — ${
          formatDisplay(row.checkDate) || row.checkDate
        } তারিখের এন্ট্রিটি মুছে ফেলতে চান?`
      )
    ) {
      deleteCheckEntry(row.id);
      if (edit?.id === row.id) {
        setEdit(null);
        setForm(emptyForm(form.checkDate));
        setMatchInfo("idle");
      }
      setStatus({
        kind: "ok",
        text: `✓ চেক #${row.checkNo} (${row.memberCode}) মুছে ফেলা হয়েছে। বাকি মোট এন্ট্রি: ${getCheckEntries().length.toLocaleString("en-IN")}`,
      });
      reload();
    }
  };

  /* ───────── আমদানি (ডাটাবেজ) ───────── */
  const runImport = (text: string) => {
    const { members, skipped } = parseMemberText(text);
    if (!members.length) {
      setStatus({ kind: "err", text: "কোনো মেম্বার পাওয়া যায়নি — ফরম্যাট মিলিয়ে দেখুন।" });
      return;
    }
    const res = importMembers(members);
    setStatus({
      kind: "ok",
      text: `✓ ডাটাবেজ আমদানি — নতুন ${res.added}, আপডেট ${res.updated}, মোট ${res.total} মেম্বার${
        skipped ? ` (বাদ ${skipped})` : ""
      }`,
    });
    setImportOpen(false);
    setImportText("");
    reload();
  };

  const handleFile = async (file: File) => {
    const name = file.name.toLowerCase();
    try {
      if (name.endsWith(".csv") || name.endsWith(".txt") || name.endsWith(".tsv")) {
        runImport(await file.text());
      } else if (name.endsWith(".xlsx") || name.endsWith(".xls")) {
        setStatus({
          kind: "warn",
          text: "Excel ফাইল সরাসরি পড়া যায় না — ফাইলটি খুলে সব ঘর কপি করে ‘পেস্ট করে আমদানি’ করুন।",
        });
        setImportOpen(true);
      } else {
        setStatus({ kind: "err", text: "CSV / TXT ফাইল দিন।" });
      }
    } catch {
      setStatus({ kind: "err", text: "ফাইল পড়া যায়নি।" });
    }
  };

  /* ───────── সার্চ ফিল্টার (কোড / সেন্টার কোড / তারিখ / নাম / চেক নম্বর / হিসাব নং — v1.4.91) ───────── */
  /** আগের চেক-এন্ট্রিতে ব্যবহার করা ব্যাংকের নাম — সাজেশনেও আসবে */
  const pastBanks = useMemo(() => {
    const set = new Set<string>();
    for (const e of entries) if (e.bankName && e.bankName.trim()) set.add(e.bankName.trim());
    for (const m of getMembers()) if (m.bankName && m.bankName.trim()) set.add(m.bankName.trim());
    return Array.from(set);
  }, [entries]);

  const filtered = useMemo(
    // v1.4.106: সার্চে রি-ইস্যুকৃত পুরনো এন্ট্রি বাদ — নতুন (চেইনের সর্বশেষ) এন্ট্রিটিই দেখাবে
    () => searchVisibleEntries(entries, search),
    [entries, search]
  );

  /** 📅 v1.4.55: তারিখ হতে তারিখ — সার্চ ফলাফলের উপর প্রয়োগ হয় (দুই প্রান্তই অন্তর্ভুক্ত) */
  const rangedFiltered = useMemo(
    () =>
      dateRange
        ? filtered.filter((e) => e.checkDate >= dateRange.from && e.checkDate <= dateRange.to)
        : filtered,
    [filtered, dateRange]
  );

  /** ফর্মে লেখা মেম্বার কোডের সেভ করা চেক এন্ট্রি — সার্চ করলেই এডিট/ডিলিট করা যাবে */
  const memberEntries = useMemo(() => {
    const key = normCode(form.memberCode);
    if (!key) return [] as CheckEntry[];
    return entries.filter((e) => normCode(e.memberCode) === key);
  }, [entries, form.memberCode]);

  useEffect(() => {
    setPage(1);
    setRetPage(1);
  }, [search, dateRange]);

  /** 📅 তারিখ ফিল্টার প্রয়োগ — এক প্রান্ত খালি থাকলে সেই দিনটিই; উল্টো দিলে অটো-সয়াপ */
  const applyDateRange = () => {
    if (!rangeFrom && !rangeTo) {
      setStatus({ kind: "warn", text: "কমপক্ষে একটি তারিখ লিখুন (হতে বা পর্যন্ত)।" });
      return;
    }
    let from = rangeFrom || rangeTo;
    let to = rangeTo || rangeFrom;
    if (from > to) [from, to] = [to, from];
    setDateRange({ from, to });
    setRangeOpen(false);
  };

  /** 📅 তারিখ ফিল্টার মুছে ফেলা — পুরো তালিকা ফেরত */
  const clearDateRange = () => {
    setDateRange(null);
    setRangeFrom("");
    setRangeTo("");
    setRangeOpen(false);
  };

  /* v1.4.47: একই সার্চ-ফিল্টার করা তালিকা Return টিক অনুযায়ী দুই টেবিলে ভাগ হয় */
  const listFiltered = useMemo(() => rangedFiltered.filter((e) => !e.returned), [rangedFiltered]);
  const returnFiltered = useMemo(() => rangedFiltered.filter((e) => Boolean(e.returned)), [rangedFiltered]);
  /** 📄 v1.4.92: PDF ভিউ — সীমার সব এন্ট্রির Disbursse-এর মোট */
  const pdfDisbursseTotal = useMemo(
    () =>
      rangedFiltered.reduce((s, r) => {
        const n = Number(String(r.disbursse || "").replace(/[^0-9.-]/g, ""));
        return s + (Number.isFinite(n) ? n : 0);
      }, 0),
    [rangedFiltered]
  );
  const returnedCount = entries.reduce((n, e) => n + (e.returned ? 1 : 0), 0);
  // v1.4.60: চেক লিস্টে পেজ সিস্টেম বাদ — সব এন্ট্রি একসাথে; max-h স্ক্রল-উইন্ডোতে সব দেখা যায়
  const pageRows = listFiltered;
  const retTotalPages = Math.max(1, Math.ceil(returnFiltered.length / PAGE_SIZE));
  const retPageRows = returnFiltered.slice((retPage - 1) * PAGE_SIZE, retPage * PAGE_SIZE);
  /** 🔎 v1.4.95: 👁 View-এ হুবহু একই চেকের ডুপ্লিকেট তথ্য একবার — ডিসপ্লে-অনলি ডিডুপ (ডাটা অক্ষত) */
  const viewGroups = useMemo(() => dedupeViewRows(rangedFiltered), [rangedFiltered]);

  /** Return টিক টগল — v1.4.106: টিক দিলে তারিখ-মডাল চাইবে (100% পূরণ ছাড়া সেভ হয় না); টিক তুললে আগের মতোই ফিরে আসে। ডেটা অক্ষত থাকে */
  const toggleReturned = (row: CheckEntry) => {
    if (isDayClosed(row.checkDate)) {
      setStatus({
        kind: "err",
        text: `🔒 ${formatDisplay(row.checkDate) || row.checkDate} তারিখের দিন সমাপ্ত (Day Closed) — Return টিক বদলানো যাবে না।`,
      });
      return;
    }
    if (!row.returned) {
      // টিক দেওয়ার সময় — রিটার্নের তারিখ চাইবে
      setStatus(null);
      setReturnFor(row);
      setReturnDateInput("");
      setReturnErr("");
      return;
    }
    // টিক তোলার সময় — সরাসরি ফিরে আসে, রিটার্ন-তারিখ মুছে যায়
    updateCheckEntry({ ...row, returned: false, returnDate: "" });
    setStatus({
      kind: "ok",
      text: `✓ চেক #${row.checkNo} (${row.memberCode}) Return থেকে চেক লিস্টে ফিরে এসেছে।`,
    });
  };

  /** ↩ Return তারিখ কনফার্ম — v1.4.106: সম্পূর্ণ বৈধ তারিখ 100% বাধ্যতামূলক; না পূরণে এন্ট্রি সেভ হয় না */
  const confirmReturn = () => {
    const row = returnFor;
    if (!row) return;
    if (!isFullDate(returnDateInput)) {
      setReturnErr("রিটার্নের তারিখ 100% পূরণ করুন (সম্পূর্ণ তারিখ বাধ্যতামূলক) — না পূরণে এন্ট্রি সেভ হবে না।");
      return;
    }
    updateCheckEntry({ ...row, returned: true, returnDate: returnDateInput });
    setReturnFor(null);
    setReturnErr("");
    setStatus({
      kind: "ok",
      text: `↩ চেক #${row.checkNo} (${row.memberCode}) Return টেবিলে পাঠানো হয়েছে — তারিখ: ${
        formatDisplay(returnDateInput) || returnDateInput
      }। এন্ট্রিটি মুছে যায়নি।`,
    });
  };

  /** v1.4.106/107: নতুন রি-ইস্যু এন্ট্রিতে — পূর্বের প্রতি চেকের সিদ্ধান্ত (🔁 রি-ইস্যু / ↩ রিটার্ন) + নতুন অ্যাড (ব্যাজ) */
  const reissueChangeBadges = (row: CheckEntry) => {
    const rc = row.reissueChanges;
    if (!rc || (rc.cancelled.length === 0 && rc.added.length === 0)) return null;
    const dec = rc.decisions;
    const reissued = dec?.filter((d) => d.action === "reissued") || [];
    const returned = dec?.filter((d) => d.action === "returned") || [];
    return (
      <div className="mt-1 flex flex-col gap-0.5">
        {/* পূর্বের চেকের সিদ্ধান্ত থাকলে: কোনটি রি-ইস্যু হয়েছে, কোনটি রিটার্ন — আলাদা ব্যাজে */}
        {dec && reissued.length > 0 && (
          <span
            className="inline-block whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800"
            title="রি-ইস্যু হিসেবে ধরা পুরনো চেক — নতুন নম্বরে বদলে গেছে"
          >
            🔁 রি-ইস্যু: {reissued.map((p) => `#${p.checkNo || "—"}`).join(", ")}
          </span>
        )}
        {dec && returned.length > 0 && (
          <span
            className="inline-block whitespace-nowrap rounded border border-purple-300 bg-purple-50 px-1.5 py-0.5 text-[9px] font-black text-purple-800"
            title="রিটার্ন হিসেবে ধরা পুরনো চেক — রি-ইস্যু হয়নি, শুধু বাতিল"
          >
            ↩ রিটার্ন: {returned.map((p) => `#${p.checkNo || "—"}`).join(", ")}
          </span>
        )}
        {/* পুরনো রেকর্ডে (decisions ছাড়া) — আগের বাতিল লাইন */}
        {!dec && rc.cancelled.length > 0 && (
          <span
            className="inline-block whitespace-nowrap rounded border border-rose-300 bg-rose-50 px-1.5 py-0.5 text-[9px] font-black text-rose-800"
            title="রি-ইস্যুতে বাতিল হওয়া পুরনো চেক"
          >
            🚫 বাতিল: {rc.cancelled.map((p) => `#${p.checkNo || "—"}`).join(", ")}
          </span>
        )}
        {rc.added.length > 0 && (
          <span
            className="inline-block whitespace-nowrap rounded border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800"
            title="রি-ইস্যুতে নতুন অ্যাড হওয়া চেক"
          >
            ✨ নতুন: {rc.added.map((p) => `#${p.checkNo || "—"}`).join(", ")}
          </span>
        )}
      </div>
    );
  };

  /* v1.4.48: একাধিক ব্যাংক + চেক নম্বরের জোড়া — ＋ বাটনে যোগ, ✕ বাটনে বাদ */
  const addBankPair = () =>
    setForm((f) => ({ ...f, extraBanks: [...f.extraBanks, { bankName: "", checkNo: "", micr: false, accountNo: "", accountType: "" }] }));
  const updateExtraBank = (i: number, key: "bankName" | "checkNo" | "micr" | "accountNo" | "accountType", v: string | boolean) =>
    setForm((f) => ({
      ...f,
      extraBanks: f.extraBanks.map((b, bi) => (bi === i ? { ...b, [key]: v } : b)),
    }));
  const removeExtraBank = (i: number) =>
    setForm((f) => ({ ...f, extraBanks: f.extraBanks.filter((_, bi) => bi !== i) }));

  /* v1.4.108: 🔁 রি-ইস্যু সিস্টেই বাদ দেওয়া হয়েছে (ইউজার-নির্দেশ) — চেক লাগলে Return টিক (তারিখসহ) দিয়ে নতুন এন্ট্রি দেওয়া হয়।
   * পুরনো রি-ইস্যুকৃত এন্ট্রিগুলোর ব্যাজ/সার্চ-নিয়ম অক্ষত — শুধু নতুন রি-ইস্যু তৈরি বন্ধ। */

  /** দুই টেবিলের জন্য একই সারি-রেন্ডারার — চেহারা হুবহু এক */
  const renderCheckRow = (row: CheckEntry, sr: number, zebra: number) => {
    const rowLocked = isDayClosed(row.checkDate);
    return (
      <tr
        key={row.id}
        className={`border-b border-slate-200 last:border-b-0 ${
          zebra % 2 ? "bg-slate-50/70" : "bg-white"
        } hover:bg-blue-50/60`}
      >
        <td className="px-2 py-1.5 font-mono text-[11px] font-bold text-slate-500">{sr}</td>
        <td className="whitespace-nowrap px-2 py-1.5 font-mono text-xs font-bold text-slate-800">
          {formatDisplay(row.checkDate) || row.checkDate}
        </td>
        <td className="whitespace-nowrap px-2 py-1.5 font-mono text-xs font-black text-indigo-700">
          {row.memberCode}
          {row.foundInDb === false && (
            <span
              className="ml-1 rounded bg-amber-100 px-1 py-0.5 text-[9px] font-black text-amber-800"
              title="এই মেম্বারটি এন্ট্রির সময় ডাটাবেজে ছিল না — এন্ট্রি থেকেই ডাটাবেজে যোগ হয়েছে"
            >
              NEW
            </span>
          )}
        </td>
        <td className="px-2 py-1.5 text-xs font-semibold text-slate-900">{row.memberName}</td>
        <td className="whitespace-nowrap px-2 py-1.5 font-mono text-xs font-bold text-slate-700">
          {row.centreCode}
        </td>
        <td className="px-2 py-1.5 text-xs font-semibold text-slate-900">{row.centreName}</td>
        <td className="px-2 py-1.5 text-xs font-semibold text-slate-800">
          <div className="flex flex-col gap-0.5">
            {allBankPairs(row).map((b, bi) => (
              <span key={bi}>{b.bankName || "—"}</span>
            ))}
          </div>
        </td>
        {/* 🏦 v1.4.74/75: হিসাব নং + ক্যাটাগরি — ব্যাংক-জোড়ার স্ট্যাকের সাথে মিলিয়ে; পুরনো এন্ট্রিতে ফাঁকা (—) */}
        <td className="whitespace-nowrap px-2 py-1.5">
          {/* v1.4.108: Bank Statement ব্যাজ */}
          {row.bankStatement && (
            <div className="mb-0.5">
              <span
                className="inline-block rounded border border-sky-300 bg-sky-50 px-1.5 py-0.5 text-[9px] font-black text-sky-800"
                title="এই এন্ট্রি Bank Statement হিসেবে ধরা হয়েছে"
              >
                📄 Bank Stmt
              </span>
            </div>
          )}
          {allBankPairs(row).some((b) => b.accountNo || b.accountType) ? (
            <div className="flex flex-col gap-0.5">
              {allBankPairs(row).map((b, bi) =>
                b.accountNo || b.accountType ? (
                  <span key={bi} className="inline-flex items-center gap-1">
                    <span className="font-mono text-xs font-black text-slate-900">
                      {b.accountNo || "—"}
                    </span>
                    {b.accountType && (
                      <span
                        className={`rounded px-1 py-0.5 text-[9px] font-black ${
                          b.accountType === "মেম্বার"
                            ? "bg-indigo-100 text-indigo-800"
                            : "bg-teal-100 text-teal-800"
                        }`}
                      >
                        {b.accountType}
                      </span>
                    )}
                  </span>
                ) : null
              )}
            </div>
          ) : (
            <span className="text-slate-300">—</span>
          )}
        </td>
        <td className="px-2 py-1.5 font-mono text-xs font-black text-slate-900">
          <div className="flex flex-col gap-0.5">
            {allBankPairs(row).map((b, bi) => (
              <span key={bi} className="whitespace-nowrap">
                {b.checkNo || "—"}
              </span>
            ))}
          </div>
          {row.reissuedTo && (
            <span
              className="mt-1 inline-block rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800"
              title={`এই চেকটি রি-ইস্যু হয়েছে — নতুন চেক #${row.reissuedTo.checkNo} (এন্ট্রি #${row.reissuedTo.id})`}
            >
              🔁 Reissued {formatDisplay(row.reissuedTo.date) || row.reissuedTo.date} → #{row.reissuedTo.checkNo}
            </span>
          )}
          {row.reissuedFrom && (
            <span
              className="mt-1 inline-block rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800"
              title={`পুরনো চেক #${row.reissuedFrom.checkNo} (${formatDisplay(row.reissuedFrom.checkDate) || row.reissuedFrom.checkDate})-এর রি-ইস্যু`}
            >
              🔁 Reissue — পুরনো চেক #{row.reissuedFrom.checkNo} (
              {formatDisplay(row.reissuedFrom.checkDate) || row.reissuedFrom.checkDate})
            </span>
          )}
          {/* v1.4.106: রি-ইস্যু এন্ট্রিতে বাতিল/নতুন চেকের ব্যাজ */}
          {reissueChangeBadges(row)}
        </td>
        <td className="whitespace-nowrap px-2 py-1.5 text-center">
          {/* v1.4.50: প্রতি ব্যাংক-জোড়ার নিজস্ব MICR ব্যাজ — ব্যাংক/চেক নম্বরের স্ট্যাকের সাথে মিল রেখে */}
          <div className="flex flex-col items-center gap-0.5">
            {allBankPairs(row).map((b, bi) =>
              b.micr ? (
                <span
                  key={bi}
                  className="rounded border border-emerald-300 bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-800"
                >
                  MICR
                </span>
              ) : (
                <span
                  key={bi}
                  className="rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 text-[10px] font-black text-slate-600"
                >
                  NON MICR
                </span>
              )
            )}
          </div>
        </td>
        <td className="whitespace-nowrap px-2 py-1.5 text-right font-mono text-xs font-black text-slate-900">
          {row.disbursse ? (
            fmtAmt(row.disbursse)
          ) : (
            <span className="text-slate-300">—</span>
          )}
        </td>
        <td className="px-2 py-1.5 text-xs font-semibold text-slate-800">
          {row.project ? (
            <span className="uppercase">{String(row.project).trim().toUpperCase()}</span>
          ) : (
            <span className="text-slate-300">—</span>
          )}
        </td>
        <td className="whitespace-nowrap px-2 py-1.5 text-center">
          <input
            type="checkbox"
            checked={Boolean(row.returned)}
            disabled={rowLocked}
            onChange={() => toggleReturned(row)}
            title={
              rowLocked
                ? "দিন সমাপ্ত (Day Closed) — Return টিক বদলানো যাবে না"
                : row.returned
                ? `↩ রিটার্নের তারিখ: ${formatDisplay(row.returnDate || "") || row.returnDate || "—"} — টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে`
                : "টিক দিলে তারিখ চাইবে — তারিখসহ এন্ট্রিটি Return টেবিলে চলে যাবে"
            }
            className="h-4 w-4 cursor-pointer accent-amber-600 disabled:cursor-not-allowed disabled:opacity-40"
          />
          {/* v1.4.106: রিটার্নের তারিখ — টিকের নিচে ছোট অক্ষরে */}
          {row.returned && row.returnDate && (
            <div className="mt-0.5 text-[9px] font-black text-amber-700" title="রিটার্নের তারিখ">
              ↩ {formatDisplay(row.returnDate) || row.returnDate}
            </div>
          )}
        </td>
        <td className="whitespace-nowrap px-2 py-1.5">
          <div className="flex items-center gap-1">
            {rowLocked && (
              <span
                className="rounded border border-rose-300 bg-rose-100 px-1.5 py-0.5 text-[10px] font-black text-rose-700"
                title="দিন সমাপ্ত (Day Closed) — এই এন্ট্রি এডিট/ডিলিট করা যাবে না"
              >
                🔒
              </span>
            )}
            <button
              type="button"
              onClick={() => handleEdit(row)}
              disabled={rowLocked}
              title={rowLocked ? "দিন সমাপ্ত — এডিট করা যাবে না" : "এডিট করুন"}
              className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ✏️
            </button>
            <button
              type="button"
              onClick={() => handleDelete(row)}
              disabled={rowLocked}
              title={rowLocked ? "দিন সমাপ্ত — মুছে ফেলা যাবে না" : "মুছে ফেলুন"}
              className="rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              🗑️
            </button>
          </div>
        </td>
      </tr>
    );
  };

  const uniqueMembers = useMemo(
    () => new Set(entries.map((e) => normCode(e.memberCode))).size,
    [entries]
  );

  /** Disbursse amount সুন্দর করে দেখানোর জন্য */
  const fmtAmt = (v: string) => {
    const n = Number(v);
    return v.trim() !== "" && Number.isFinite(n) ? n.toLocaleString("en-IN") : v;
  };

  const inputCls =
    "w-full rounded-lg border border-slate-300 bg-orange-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"; // v1.4.100: হালকা বিস্কিট (ইউজার-নির্দেশ) — ফোকাস নীল, কন্ডিশনাল রঙ অক্ষত
  const labelCls = "mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black uppercase tracking-wide text-slate-600"; // v1.4.66: সব লেবেল-সারি সমানউচ্চ — ঘর এলোমেলো দেখাবে না
  const readOnlyCls =
    "w-full rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-900";

  return (
    <div className="space-y-4 lg:mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:space-y-3.5">
      {/* ══════════════ ENTRY FORM ══════════════ */}
      <div
        ref={formRef}
        className="rounded-2xl border border-slate-200 border-t-4 border-t-indigo-500 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 sm:mb-3 sm:pb-2">
          <h1 className="flex flex-wrap items-center gap-2 text-lg font-black text-slate-900 sm:text-lg">
            <span>🧾</span>
            <span>Check Entry</span>
            {dayClosed && (
              <span
                className={`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${
                  lockPulse ? "lock-pulse" : ""
                }`}
                title="দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে"
              >
                🔒 Day Closed
              </span>
            )}
            {edit && (
              <span className="shrink-0 rounded-lg border border-amber-300 bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800">
                ✏️ এডিট মোড — #{edit.checkNo}
              </span>
            )}
          </h1>
          <span className="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
            🗄️ মেম্বার ডাটাবেজ: <span className="font-mono">{dbCount.toLocaleString("en-IN")}</span>
          </span>
        </div>

        {/* Step 1 — মোবাইলে ২ ঘর প্রতি লাইনে: তারিখ+মেম্বার | ব্যাংক+চেকনং | ডিসবার্স+প্রকল্প (v1.4.63) */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          <div>
            <label className={labelCls}>Date (তারিখ)</label>
            <DatePicker
              value={form.checkDate}
              onChange={(v) => setForm((f) => ({ ...f, checkDate: v || f.checkDate }))}
              className="py-2 text-sm font-semibold"
              manualEntry
            />
          </div>

          <div>
            <div className="mb-1 flex h-[24px] items-center justify-between gap-2">
              <label className={`${labelCls} !mb-0`}>Member Code (মেম্বার কোড)</label>
              <button
                type="button"
                onClick={() => setDbBrowseOpen(true)}
                title="মেম্বার ডাটাবেজ থেকে খুঁজুন"
                className="flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-indigo-300 bg-indigo-50 text-xs transition hover:bg-indigo-100"
              >
                🗄️
              </button>
            </div>
            <div className="relative">
              <input
                value={form.memberCode}
                onChange={(e) => handleMemberCodeChange(e.target.value)}
                onBlur={(e) => {
                  if (lookupTimer.current) window.clearTimeout(lookupTimer.current);
                  lookupMember(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                }}
                className={inputCls}
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="off"
              />
              {matchInfo !== "idle" && (
                <span
                  className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded px-1.5 py-0.5 text-[10px] font-black ${
                    found
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-amber-100 text-amber-800 border border-amber-300"
                  }`}
                >
                  {found ? "✓ ডাটাবেজে আছে" : "⚠ পাওয়া যায়নি"}
                </span>
              )}
            </div>
            {/* v1.4.84: মেম্বার কোড মেলামাত্র সদস্যের নাম সাজেশন-স্টাইলে দেখায় — শুধু ডিসপ্লে, কোনো ঘর/বক্স নয় */}
            {found && form.memberName.trim() ? (
              <div className="mt-1 flex items-start gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-2 py-1">
                <span aria-hidden="true" className="leading-[18px]">👤</span>
                <span className="text-[12px] font-black leading-[18px] text-emerald-900">{form.memberName}</span>
              </div>
            ) : null}
          </div>

          <div>
            <div className="mb-1 flex h-[24px] items-center justify-between gap-2">
              <label className={`${labelCls} !mb-0`}>Bank Name (ব্যাংকের নাম)</label>
              {/* v1.4.65: এই ＋ শুধু অতিরিক্ত জোড়া না থাকলে — যোগ হলে ＋ সর্বশেষ জোড়ার উপরে সরে যায় */}
              {form.extraBanks.length === 0 && (
              <button
                type="button"
                onClick={addBankPair}
                title="আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)"
                className="flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200"
              >
                ＋
              </button>
              )}
            </div>
            <BankNameInput
              value={form.bankName}
              onChange={(v) => setForm((f) => ({ ...f, bankName: v }))}
              className={inputCls}
              extras={pastBanks}
            />
          </div>

          {/* 🏦 v1.4.74/83: হিসাব নং + ক্যাটাগরি — চেক নং-এর ঠিক আগে (ব্যাংকের পরপরই) */}
          <div>
            <div className="mb-1 flex h-[24px] items-center justify-between gap-2">
              <label className={`${labelCls} !mb-0`}>হিসাব নং</label>
              {/* v1.4.108: Bank Statement অপশন — MICR-টগলের ধাঁচে হিসাব নং এর উপরে */}
              <label
                className="flex cursor-pointer select-none items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-2 py-0.5 text-[10px] font-black text-sky-800 transition hover:bg-sky-100"
                title="টিক দিলে এই হিসাব Bank Statement হিসেবে ধরা হবে — টেবিলে 📄 ব্যাজ দেখাবে"
              >
                <input
                  type="checkbox"
                  checked={Boolean(form.bankStatement)}
                  onChange={(e) => setForm((f) => ({ ...f, bankStatement: e.target.checked }))}
                  className="h-3.5 w-3.5 cursor-pointer accent-sky-600"
                />
                <span className="whitespace-nowrap">Bank Stmt</span>
                <span className="rounded bg-white px-1 text-[9px] font-black text-slate-500">
                  {form.bankStatement ? "BS ✓" : "—"}
                </span>
              </label>
            </div>
            {/* v1.4.90: পূর্বের এন্ট্রিতে এই হিসাব নং মিললে ওই মেম্বার কোড হিসাব ঘরের উপরে দেখায় (শুধু নতুন এন্ট্রিতে) */}
            {prevAccountMember ? (
              <div className="mb-1 flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-900">
                <span aria-hidden="true">🔁</span>
                <span>
                  আগেই ব্যবহার হয়েছে — মেম্বার কোড: <span className="font-mono">{prevAccountMember}</span>
                </span>
              </div>
            ) : null}
            <input
              value={form.accountNo}
              onChange={(e) => setForm((f) => ({ ...f, accountNo: e.target.value }))}
              className={inputCls}
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="off"
              placeholder="অ্যাকাউন্ট নম্বর"
            />
          </div>

          <div>
            <label className={labelCls}>ক্যাটাগরি</label>
            {/* v1.4.76: পুরা স্ক্রিন জুড়ে নেটিভ পপআপ নয় — ঘরের ঠিক নিচে ছোট প্যানেলে আসে */}
            <SearchSelect
              value={form.accountType}
              onChange={(v) => setForm((f) => ({ ...f, accountType: v }))}
              options={ACCOUNT_TYPE_OPTS}
              placeholder="-- Select --"
              className={`${inputCls} cursor-pointer`}
              noKeyboardOnMobile
            />
          </div>

          <div>
            <div className="mb-1 flex h-[24px] items-center justify-between gap-2">
              <label className={`${labelCls} !mb-0`}>Check No.</label>
              <label
                data-micr-toggle="main"
                onMouseDown={(e) => {
                  if (document.activeElement === checkNoRef.current) micrFocusRef.current = true;
                  e.preventDefault();
                }}
                className="flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-800 transition hover:bg-emerald-100"
                title="টিক দিলে টেবিলে MICR, টিক না দিলে NON MICR দেখাবে"
              >
                <input
                  type="checkbox"
                  checked={Boolean(form.micr)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setForm((f) => ({ ...f, micr: checked }));
                    if (micrFocusRef.current) {
                      window.setTimeout(() => {
                        checkNoRef.current?.focus();
                        micrFocusRef.current = false;
                      }, 0);
                    }
                  }}
                  className="h-3.5 w-3.5 cursor-pointer accent-emerald-600"
                />
                <span>MICR</span>
                <span className="rounded bg-white px-1 text-[9px] font-black text-slate-500">
                  {form.micr ? "MICR" : "NON MICR"}
                </span>
              </label>
            </div>
            <input
              ref={checkNoRef}
              value={form.checkNo}
              onChange={(e) => setForm((f) => ({ ...f, checkNo: e.target.value }))}
              className={inputCls}
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="off"
            />
          </div>

          <div>
            <label className={labelCls}>Disbursse (Amount)</label>
            <input
              value={form.disbursse}
              onChange={(e) => {
                const v = e.target.value;
                if (/^-?\d*\.?\d*$/.test(v)) setForm((f) => ({ ...f, disbursse: v }));
              }}
              inputMode="numeric"
              pattern="[0-9]*"
              className={`${inputCls} text-right font-mono`}
              autoComplete="off"
            />
          </div>

          <div>
            <label className="mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black tracking-wide text-slate-600">
              project
            </label>
            <SearchSelect
              value={(form.project || "").trim().toLowerCase()}
              onChange={(v) => setForm((f) => ({ ...f, project: v.trim().toLowerCase() }))}
              options={projectOpts(form.project)}
              placeholder="-- select project --"
              className={`${inputCls} cursor-pointer uppercase`}
              noKeyboardOnMobile
            />
          </div>

        </div>

        {/* ══ v1.4.48: অতিরিক্ত ব্যাংক + চেক নম্বরের জোড়া — টেবিলে এক সারিতেই থাকবে ══ */}
        {form.extraBanks.length > 0 && (
          <div className="mt-3 space-y-2">
            {form.extraBanks.map((b, bi) => (
              <Fragment key={bi}>
                {/* v1.4.65: ＋ আইকন সবসময় সর্বশেষ যোগ-হওয়া জোড়ার ঠিক উপরে; ব্যাংক-নাম ও চেক-নং মোবাইলেও এক লাইনে */}
                {bi === form.extraBanks.length - 1 && (
                  <div className="mb-1 flex justify-end">
                    <button
                      type="button"
                      onClick={addBankPair}
                      title="আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)"
                      className="flex h-6 w-7 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200"
                    >
                      ＋
                    </button>
                  </div>
                )}
                <div
                  className="grid grid-cols-[1fr_1fr_auto] items-end gap-2 rounded-xl border border-emerald-300 bg-emerald-50/60 p-2"
                >
                <div>
                  <span className="mb-1 block text-[10px] font-black tracking-wide text-emerald-800">
                    ব্যাংক #{bi + 2}
                  </span>
                  <BankNameInput
                    value={b.bankName}
                    onChange={(v) => updateExtraBank(bi, "bankName", v)}
                    className={inputCls}
                    extras={pastBanks}
                    placeholder="Bank name"
                  />
                </div>
                {/* 🏦 v1.4.83: জোড়াতেও হিসাব নং ঘর চেক নং-এর আগে — ব্যাংকের পাশের ঘরেই */}
                <div>
                  <span className="mb-1 block text-[10px] font-black tracking-wide text-emerald-800">
                    হিসাব নং #{bi + 2}
                  </span>
                  {/* v1.4.90: জোড়ার হিসাবেও পূর্ব-মিল হলে মেম্বার কোড ঘরের উপরে */}
                  {(() => {
                    const pm = findPrevMemberForAccount(b.accountNo || "");
                    return pm ? (
                      <div className="mb-1 flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-900">
                        <span aria-hidden="true">🔁</span>
                        <span>
                          আগেই ব্যবহার হয়েছে — মেম্বার কোড: <span className="font-mono">{pm}</span>
                        </span>
                      </div>
                    ) : null;
                  })()}
                  <input
                    value={b.accountNo || ""}
                    onChange={(e) => updateExtraBank(bi, "accountNo", e.target.value)}
                    className={inputCls}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="অ্যাকাউন্ট নম্বর"
                    autoComplete="off"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeExtraBank(bi)}
                  title="এই ব্যাংক জোড়া মুছুন"
                  className="h-9 w-9 shrink-0 cursor-pointer rounded-lg border border-rose-300 bg-rose-50 text-sm font-black text-rose-700 transition hover:bg-rose-100"
                >
                  ✕
                </button>
                {/* 🏦 v1.4.75/83: ক্যাটাগরি #N (হিসাবের জোড়া) + চেক নম্বর #N নিচের সারিতে */}
                <div className="col-span-3 grid grid-cols-2 gap-2 border-t border-emerald-200/70 pt-2">
                  <div>
                    <span className="mb-1 block h-[24px] leading-[24px] text-[10px] font-black tracking-wide text-emerald-800">
                      ক্যাটাগরি #{bi + 2}
                    </span>
                    {/* v1.4.76: জোড়ার ক্যাটাগরিও ছোট প্যানেলে */}
                    <SearchSelect
                      value={b.accountType || ""}
                      onChange={(v) => updateExtraBank(bi, "accountType", v)}
                      options={ACCOUNT_TYPE_OPTS}
                      placeholder="-- Select --"
                      className={`${inputCls} cursor-pointer`}
                      noKeyboardOnMobile
                    />
                  </div>
                  <div>
                    <div className="mb-1 flex h-[24px] items-center justify-between gap-2">
                      <span className="block text-[10px] font-black tracking-wide text-emerald-800">
                        চেক নম্বর #{bi + 2}
                      </span>
                      {/* v1.4.50: প্রতি ব্যাংক জোড়ার নিজস্ব MICR চেকবক্স — চেক নম্বরের ঠিক উপরে */}
                      <label
                        data-micr-toggle={String(bi)}
                        onMouseDown={(e) => e.preventDefault()}
                        className="flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800 transition hover:bg-emerald-100"
                        title="টিক দিলে এই চেকটি MICR, টিক না দিলে NON MICR"
                      >
                        <input
                          type="checkbox"
                          checked={Boolean(b.micr)}
                          onChange={(e) => updateExtraBank(bi, "micr", e.target.checked)}
                          className="h-3.5 w-3.5 cursor-pointer accent-emerald-600"
                        />
                        <span>MICR</span>
                        <span className="rounded bg-white px-1 text-[8px] font-black text-slate-500">
                          {b.micr ? "MICR" : "NON MICR"}
                        </span>
                      </label>
                    </div>
                    <input
                      value={b.checkNo}
                      onChange={(e) => updateExtraBank(bi, "checkNo", e.target.value)}
                      className={inputCls}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Check No."
                      autoComplete="off"
                    />
                  </div>
                </div>
                </div>
              </Fragment>
            ))}
          </div>
        )}

        {/* ══ এই মেম্বার কোডের আগের চেক এন্ট্রি — এখানেই এডিট / ডিলিট ══ */}
        {memberEntries.length > 0 && (
          <div className="mt-3 rounded-xl border border-indigo-300 bg-indigo-50/70 p-3">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-[11px] font-black text-indigo-900">
                🔎 এই মেম্বার কোডের সেভ করা চেক এন্ট্রি
                <span className="rounded bg-indigo-100 px-1.5 py-0.5 font-mono">
                  {memberEntries.length}
                </span>
              </span>
            </div>
            <div className="space-y-1.5">
              {memberEntries.map((e) => {
                const rowLocked = isDayClosed(e.checkDate);
                const isEditing = edit?.id === e.id;
                return (
                  <div
                    key={e.id}
                    className={`flex flex-wrap items-center gap-2 rounded-lg border px-2.5 py-1.5 ${
                      rowLocked
                        ? "border-rose-200 bg-rose-50"
                        : isEditing
                        ? "border-amber-300 bg-amber-50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <span className="font-mono text-[11px] font-black text-slate-700">
                      {formatDisplay(e.checkDate) || e.checkDate}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600">{allBankPairs(e).map((b) => b.bankName).filter(Boolean).join(", ")}</span>
                    <span className="font-mono text-[11px] font-black text-slate-900">
                      {allBankPairs(e)
                        .map((b) => (b.checkNo ? `#${b.checkNo}` : ""))
                        .filter(Boolean)
                        .join(", ")}
                    </span>
                    {e.disbursse && (
                      <span className="font-mono text-[11px] font-bold text-emerald-700">
                        ৳{fmtAmt(e.disbursse)}
                      </span>
                    )}
                    {e.project && (
                      <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 uppercase">
                        {String(e.project).trim().toUpperCase()}
                      </span>
                    )}
                    <span
                      className={`rounded border px-1.5 py-0.5 text-[10px] font-black ${
                        e.micr
                          ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                          : "border-slate-300 bg-slate-100 text-slate-600"
                      }`}
                    >
                      {e.micr ? "MICR" : "NON MICR"}
                    </span>
                    <div className="ml-auto flex items-center gap-1">
                      {rowLocked && (
                        <span
                          className="rounded border border-rose-300 bg-rose-100 px-1.5 py-0.5 text-[10px] font-black text-rose-700"
                          title="দিন সমাপ্ত (Day Closed) — এডিট/ডিলিট করা যাবে না"
                        >
                          🔒 Day Closed
                        </span>
                      )}
                      {isEditing && (
                        <span className="rounded border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800">
                          ✏️ এডিট মোড
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => handleEdit(e)}
                        disabled={rowLocked || isEditing}
                        title={rowLocked ? "দিন সমাপ্ত — এডিট করা যাবে না" : "এই এন্ট্রি এডিট করুন"}
                        className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        ✏️ এডিট
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(e)}
                        disabled={rowLocked}
                        title={rowLocked ? "দিন সমাপ্ত — ডিলিট করা যাবে না" : "এই এন্ট্রি মুছে ফেলুন"}
                        className="rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        🗑️ ডিলিট
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2 — ম্যাচ হলে সবুজ তথ্য-বক্স, না মেলে অ্যাম্বার বক্স (v1.4.85: v1.4.84-এর 👤 নাম-সাজেশন ঘরের নিচে আছেই; এই বক্সও আগের মতোই ফিরল — ইউজার-নির্দেশ: "আগের সব থাকবে, নতুনটা শুধু add") */}
        {matchInfo === "idle" ? null : found ? (
          <div className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50 p-3">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-black text-emerald-900">
              <span>✓</span>
              <span>ডাটাবেজ থেকে তথ্য নেওয়া হয়েছে — শুধু তারিখ, মেম্বার কোড, ব্যাংক, চেক নম্বর, বিতরণ ও প্রকল্প এন্ট্রি করুন</span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800">
                  Member Name
                </label>
                <div className={readOnlyCls}>{form.memberName || "—"}</div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800">
                  Centre Code
                </label>
                <div className={readOnlyCls}>{form.centreCode || "—"}</div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800">
                  Centre Name
                </label>
                <div className={readOnlyCls}>{form.centreName || "—"}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-3 rounded-xl border-2 border-amber-400 bg-amber-50 p-3">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-black text-amber-900">
              <span>⚠️</span>
              <span>
                এই মেম্বার কোড ডাটাবেজে নেই — টেবিলের <u>সব ঘর</u> পূরণ করতে হবে। সেভ করলে মেম্বারটি
                ডাটাবেজেও যোগ হয়ে যাবে।
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800">
                  Member Name <span className="text-rose-600">*</span>
                </label>
                <input
                  value={form.memberName}
                  onChange={(e) => setForm((f) => ({ ...f, memberName: e.target.value }))}
                  placeholder="মেম্বারের নাম"
                  className={inputCls}
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800">
                  Centre Code <span className="text-rose-600">*</span>
                </label>
                <input
                  value={form.centreCode}
                  onChange={(e) => setForm((f) => ({ ...f, centreCode: e.target.value }))}
                  placeholder="সেন্টার কোড"
                  className={inputCls}
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800">
                  Centre Name <span className="text-rose-600">*</span>
                </label>
                <input
                  value={form.centreName}
                  onChange={(e) => setForm((f) => ({ ...f, centreName: e.target.value }))}
                  placeholder="সেন্টারের নাম"
                  className={inputCls}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={dayClosed}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {edit ? "💾 আপডেট করুন" : "＋ সেভ করুন"}
          </button>
          <button
            type="button"
            onClick={() => {
              setEdit(null);
              setForm(emptyForm(form.checkDate));
              setMatchInfo("idle");
              setStatus(null);
            }}
            className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-300"
          >
            রিসেট
          </button>

          {status && (
            <span
              className={`rounded-lg px-3 py-1.5 text-[11px] font-bold ${
                status.kind === "ok"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                  : status.kind === "warn"
                  ? "bg-amber-50 text-amber-800 border border-amber-300"
                  : "bg-rose-50 text-rose-800 border border-rose-300"
              }`}
            >
              {status.text}
            </span>
          )}
        </div>
      </div>

      {/* ══════════════ SEARCH + TABLE ══════════════ */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-black text-slate-900 sm:text-lg">🧾 Check List</h2>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600">
            <span className="rounded-lg border border-slate-200 bg-slate-100 px-2 py-1">
              মোট এন্ট্রি: <span className="font-mono">{entries.length.toLocaleString("en-IN")}</span>
            </span>
            <span className="rounded-lg border border-slate-200 bg-slate-100 px-2 py-1">
              মেম্বার: <span className="font-mono">{uniqueMembers.toLocaleString("en-IN")}</span>
            </span>
            <span className="rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 text-amber-800">
              ↩ Return: <span className="font-mono">{returnedCount.toLocaleString("en-IN")}</span>
            </span>
            {(search || dateRange) && (
              <span className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-blue-800">
                ফিল্টার: <span className="font-mono">{rangedFiltered.length}</span>
              </span>
            )}
          </div>
        </div>

        {/* Search box + 📅 তারিখ হতে তারিখ ফিল্টার — একই লাইনে (v1.4.55) */}
        <div className="mb-3 flex items-stretch gap-2">
          <div className="relative min-w-0 flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search — মেম্বার কোড, সেন্টার কোড, তারিখ, নাম, চেক নম্বর, হিসাব নং…"
            className="w-full rounded-xl border border-slate-300 bg-orange-50 py-2.5 pl-10 pr-28 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            autoComplete="off"
          />
          {(search.trim() || dateRange) && rangedFiltered.length > 0 && (
            <button
              type="button"
              onClick={() => setViewOpen(true)}
              title="মিলে যাওয়া এন্ট্রিগুলো টেবিল আকারে ফুল স্ক্রিনে দেখুন — একাধিক এন্ট্রি উপর-নিচ সারি হিসেবে, এডিট/ডিলিট/Return সহ"
              className="absolute right-11 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-blue-300 bg-blue-50 px-2 py-1 text-[11px] font-black text-blue-700 transition hover:bg-blue-100 cursor-pointer"
            >
              👁 View ({rangedFiltered.length})
            </button>
          )}
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          )}
          </div>
          {/* 📅 তারিখ হতে তারিখ ফিল্টার বাটন + পপ-আপ (v1.4.55) */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => {
                setRangeFrom(dateRange?.from || "");
                setRangeTo(dateRange?.to || "");
                setRangeOpen((v) => !v);
              }}
              title="তারিখ হতে তারিখ ফিল্টার — নির্দিষ্ট সীমার চেক এন্ট্রি দেখুন"
              className={`flex h-full cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${
                dateRange
                  ? "border-sky-600 bg-sky-600 text-white shadow"
                  : "border-slate-300 bg-orange-50 text-slate-700 hover:border-sky-400 hover:text-sky-700"
              }`}
            >
              📅 {dateRange ? `${shortDM(dateRange.from)} → ${shortDM(dateRange.to)}` : "তারিখ"}
            </button>
            {rangeOpen && (
              <div className="absolute right-0 top-full z-40 mt-1.5 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-black text-slate-800">📅 তারিখ হতে তারিখ</span>
                  <button
                    type="button"
                    onClick={() => setRangeOpen(false)}
                    className="rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="mb-2">
                  <label className="mb-1 block text-[10px] font-black text-slate-600">হতে</label>
                  <DatePicker
                    value={rangeFrom}
                    onChange={setRangeFrom}
                    manualEntry
                    className="px-2.5 py-1.5 text-xs"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-1 block text-[10px] font-black text-slate-600">পর্যন্ত</label>
                  <DatePicker
                    value={rangeTo}
                    onChange={setRangeTo}
                    manualEntry
                    className="px-2.5 py-1.5 text-xs"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={applyDateRange}
                    className="flex-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-black text-white transition hover:bg-emerald-700"
                  >
                    ✔ প্রয়োগ
                  </button>
                  <button
                    type="button"
                    onClick={clearDateRange}
                    disabled={!dateRange && !rangeFrom && !rangeTo}
                    className="rounded-lg bg-rose-50 px-3 py-1.5 text-[11px] font-black text-rose-700 transition hover:bg-rose-100 disabled:opacity-40"
                  >
                    ✕ মুছুন
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* 📄 v1.4.92: PDF ভিউ বাটন — তারিখ-হতে-তারিখ ফিল্টার প্রয়োগ থাকলেই শুধু আসে; না থাকলে নেই */}
          {dateRange && (
            <button
              type="button"
              onClick={() => setPdfOpen(true)}
              title="তারিখ-সীমার সব এন্ট্রি — সকল তথ্যসহ PDF/প্রিন্ট ভিউ"
              className="flex h-full shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border border-rose-600 bg-rose-600 px-3 py-2 text-[11px] font-black text-white shadow transition hover:border-rose-700 hover:bg-rose-700"
            >
              📄 PDF ({rangedFiltered.length})
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div tabIndex={0} onKeyDown={handleTableScrollKeys} className="max-h-[80vh] overflow-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 rounded-md" title="Arrow কি চাপলে টেবিল স্ক্রল হবে">
            <table className="w-full min-w-[980px] border-collapse text-sm">
              <thead className="sticky top-0 z-10 bg-slate-800 text-white">
                <tr>
                  {TABLE_HEADERS.map((h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pageRows.length === 0 ? (
                  <tr>
                    <td colSpan={14} className="px-4 py-10 text-center text-sm font-semibold text-slate-500">
                      {search
                        ? "🔍 এই অনুসন্ধানে চেক লিস্টে কোনো ডাটা পাওয়া যায়নি।"
                        : "এখনো কোনো চেক এন্ট্রি নেই — উপরের ফর্ম থেকে যোগ করুন।"}
                    </td>
                  </tr>
                ) : (
                  pageRows.map((row, i) => renderCheckRow(row, i + 1, i))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* v1.4.60: পেজিনেশন বাদ — মোট রেকর্ড-সংখ্যা + স্ক্রল-ইঙ্গিত */}
        {listFiltered.length > 0 && (
          <div className="mt-3 flex items-center justify-center">
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-600">
              মোট <span className="font-mono">{listFiltered.length}</span> টি চেক — ↕ স্ক্রল করে সব এন্ট্রি দেখুন
            </span>
          </div>
        )}
      </div>

      {/* ══════════════ ↩ RETURN TABLE — চেক লিস্টের ঠিক নিচে, হুবহু একই গঠন ══════════════ */}
      <div className="mt-5 lg:mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-black text-slate-900 sm:text-lg">↩ Return Table</h2>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600">
            <span className="rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 text-amber-800">
              রিটার্ন এন্ট্রি: <span className="font-mono">{returnFiltered.length.toLocaleString("en-IN")}</span>
            </span>
            <span className="rounded-lg border border-slate-200 bg-slate-100 px-2 py-1">
              Return ঘরের টিক তুললে এন্ট্রি চেক লিস্টে ফিরে যায়
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div tabIndex={0} onKeyDown={handleTableScrollKeys} className="max-h-[80vh] overflow-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 rounded-md" title="Arrow কি চাপলে টেবিল স্ক্রল হবে">
            <table className="w-full min-w-[980px] border-collapse text-sm">
              <thead className="sticky top-0 z-10 bg-slate-800 text-white">
                <tr>
                  {TABLE_HEADERS.map((h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {retPageRows.length === 0 ? (
                  <tr>
                    <td colSpan={14} className="px-4 py-10 text-center text-sm font-semibold text-slate-500">
                      {search
                        ? "🔍 এই অনুসন্ধানে Return টেবিলে কোনো ডাটা পাওয়া যায়নি।"
                        : "Return টেবিলে কোনো এন্ট্রি নেই — চেক লিস্টের Return ঘরে টিক দিন।"}
                    </td>
                  </tr>
                ) : (
                  retPageRows.map((row, i) => renderCheckRow(row, (retPage - 1) * PAGE_SIZE + i + 1, i))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {retTotalPages > 1 && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-slate-600">
              পেজ <span className="font-mono">{retPage}</span> / <span className="font-mono">{retTotalPages}</span> —{" "}
              মোট <span className="font-mono">{returnFiltered.length}</span> রেকর্ড
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setRetPage((p) => Math.max(1, p - 1))}
                disabled={retPage === 1}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
              >
                ‹ আগের
              </button>
              <button
                type="button"
                onClick={() => setRetPage((p) => Math.min(retTotalPages, p + 1))}
                disabled={retPage === retTotalPages}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
              >
                পরের ›
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ══════════════ 👁 VIEW — সার্চ/ফিল্টারের ফল টেবিল আকারে ফুল স্ক্রিন; একাধিক এন্ট্রি উপর-নিচ সারি (v1.4.92) ══════════════ */}
      {viewOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden bg-slate-950/80 backdrop-blur-sm">
          <div className="flex h-full flex-col overflow-hidden bg-slate-50 shadow-2xl sm:m-2 sm:rounded-2xl">
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4">
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-xl">👁</span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-black text-slate-900">
                    সার্চ ফলাফল — “{search.trim() || "তারিখ ফিল্টার"}”
                  </h3>
                  <p className="text-xs font-bold text-slate-500">
                    {filtered.length}টি এন্ট্রি • চেক লিস্ট: {listFiltered.length} • Return:{" "}
                    {returnFiltered.length}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setViewOpen(false)}
                className="shrink-0 cursor-pointer rounded-xl bg-rose-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-rose-700"
              >
                ✕ ক্লোজ
              </button>
            </div>

            {/* টেবিল ভিউ (v1.4.92) — মূল চেক লিস্টের হুবহু একই টেবিল-কলাম; একাধিক এন্ট্রি উপর-নিচ সারি আকারে */}
            <div className="min-h-0 flex-1 overflow-auto p-2 sm:p-3">
              {rangedFiltered.length === 0 ? (
                <div className="flex h-full items-center justify-center text-sm font-bold text-slate-500">
                  কোনো এন্ট্রি নেই
                </div>
              ) : (
                <>
                  {/* ডেস্কটপ/ট্যাবলেট (md+): মূল চেক লিস্টের হুবহু চওড়া টেবিল — হোরিজন্টাল স্ক্রলসহ */}
                  <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:block">
                    <table className="w-full min-w-[980px] border-collapse text-sm">
                      <thead className="sticky top-0 z-10 bg-slate-800 text-white">
                        <tr>
                          {TABLE_HEADERS.map((h) => (
                            <th
                              key={h}
                              className="whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>{viewGroups.map((g, i) => renderCheckRow(g.row, i + 1, i))}</tbody>
                    </table>
                    {viewGroups.some((g) => g.dupes.length > 0) && (
                      <p className="border-t border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-black text-amber-800">
                        ⚠️ একই চেকের হুবহু একই তথ্য একাধিক এন্ট্রিতে আছে — প্রতিটি একবারই দেখানো হয়েছে
                        (সাম্প্রতিকতম তারিখের এন্ট্রি)।
                      </p>
                    )}
                  </div>
                  {/* 📱 v1.4.93: মোবাইল (md-এর কম) — প্রতিটি এন্ট্রির সম্পূর্ণ ডিটেইলস একই স্ক্রিনে, লেবেল:মান সারি উপর-নিচ; হোরিজন্টাল স্ক্রল লাগে না */}
                  <div className="space-y-2 md:hidden">
                    {viewGroups.map((g, i) => {
                      const row = g.row;
                      const dupes = g.dupes;
                      const rowLocked = isDayClosed(row.checkDate);
                      const pairs = allBankPairs(row);
                      /** 🧩 v1.4.94: মেম্বার/জামিনদার আলাদা সেকশন — প্রতি জোড়ার ক্যাটাগরি অনুযায়ী গ্রুপ;
                       *  ক্যাটাগরি দেওয়া নেই এমন প্রথম জোড়া মেম্বারে ধরা হয় (পুরনো এন্ট্রি), বাকিগুলো "অন্যান্য"-তে */
                      type ViewGroup = {
                        key: "member" | "g1" | "g2" | "other";
                        title: string;
                        head: string;
                        box: string;
                        items: { b: (typeof pairs)[number]; bi: number }[];
                      };
                      const groups: ViewGroup[] = [];
                      pairs.forEach((b, bi) => {
                        const t = (b.accountType || "").trim();
                        const key: ViewGroup["key"] =
                          t === "মেম্বার" ? "member" : t === "জামিনদার-১" ? "g1" : t === "জামিনদার-২" ? "g2" : bi === 0 ? "member" : "other";
                        let g = groups.find((x) => x.key === key);
                        if (!g) {
                          const meta =
                            key === "member"
                              ? { title: "👤 মেম্বার তথ্য", head: "text-indigo-800", box: "border-indigo-200 bg-indigo-50/70" }
                              : key === "g1"
                              ? { title: "🤝 জামিনদার-১ তথ্য", head: "text-teal-800", box: "border-teal-200 bg-teal-50/70" }
                              : key === "g2"
                              ? { title: "🤝 জামিনদার-২ তথ্য", head: "text-amber-800", box: "border-amber-200 bg-amber-50/70" }
                              : { title: "ℹ️ অন্যান্য ব্যাংক তথ্য — ক্যাটাগরি দেওয়া নেই", head: "text-slate-700", box: "border-slate-200 bg-slate-50" };
                          g = { key, items: [], ...meta };
                          groups.push(g);
                        }
                        g.items.push({ b, bi });
                      });
                      const ORDER: Record<ViewGroup["key"], number> = { member: 0, g1: 1, g2: 2, other: 3 };
                      groups.sort((a, b) => ORDER[a.key] - ORDER[b.key]);
                      const viewHasMember = groups.some((g) => g.key === "member");
                      const DetailRow = ({ label, children }: { label: string; children: ReactNode }) => (
                        <div className="flex items-start justify-between gap-2 border-b border-slate-100 py-1 last:border-b-0">
                          <span className="shrink-0 pt-0.5 text-[10px] font-black uppercase tracking-wide text-slate-500">
                            {label}
                          </span>
                          <span className="min-w-0 max-w-[62%] text-right text-xs font-bold text-slate-900">
                            {children}
                          </span>
                        </div>
                      );
                      return (
                        <div
                          key={row.id}
                          className={`rounded-xl border p-2 shadow-sm ${
                            row.returned ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"
                          }`}
                        >
                          {/* শিরোলেখ — সিরিয়াল, মেম্বার কোড, তারিখ, ব্যাজ */}
                          <div className="mb-1 flex items-center justify-between gap-2 border-b border-slate-200 pb-1.5">
                            <span className="flex min-w-0 items-center gap-1.5">
                              <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-slate-800 font-mono text-[9px] font-black text-white">
                                {i + 1}
                              </span>
                              <span className="truncate font-mono text-sm font-black text-indigo-700">
                                {row.memberCode}
                              </span>
                              {row.foundInDb === false && (
                                <span className="shrink-0 rounded bg-amber-100 px-1 py-0.5 text-[9px] font-black text-amber-800">
                                  NEW
                                </span>
                              )}
                            </span>
                            <span className="flex shrink-0 items-center gap-1 text-[11px] font-bold text-slate-600">
                              {row.returned && (
                                <span className="rounded border border-amber-400 bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800">
                                  ↩ RETURN
                                  {/* v1.4.106: রিটার্নের তারিখসহ */}
                                  {row.returnDate ? ` (${formatDisplay(row.returnDate) || row.returnDate})` : ""}
                                </span>
                              )}
                              {rowLocked && <span title="দিন সমাপ্ত (Day Closed)">🔒</span>}
                              📅 {formatDisplay(row.checkDate) || row.checkDate}
                            </span>
                          </div>
                          {dupes.length > 0 && (
                            <p className="mb-1 rounded-md border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[9px] font-black text-amber-900">
                              ⚠️ একই চেকের হুবহু একই তথ্য {dupes.length + 1}টি এন্ট্রিতে আছে (তারিখ:{" "}
                              {[row.checkDate, ...dupes.map((d) => d.checkDate)]
                                .sort()
                                .map((d) => formatDisplay(d) || d)
                                .join(", ")}
                              ) — সাম্প্রতিকতমটি একবার দেখানো হয়েছে
                            </p>
                          )}
                          <DetailRow label="সদস্যের নাম">{row.memberName || "—"}</DetailRow>
                          <DetailRow label="সেন্টার কোড">
                            <span className="font-mono">{row.centreCode || "—"}</span>
                          </DetailRow>
                          <DetailRow label="সেন্টার নাম">{row.centreName || "—"}</DetailRow>
                          {groups.map((g) => (
                            <div key={g.key} className={`mt-1.5 rounded-lg border px-2 py-1 ${g.box}`}>
                              <p className={`text-[10px] font-black ${g.head}`}>{g.title}</p>
                              <DetailRow label="ব্যাংকের নাম">
                                <div className="flex flex-col items-end gap-0.5">
                                  {g.items.map(({ b, bi }) => (
                                    <span key={bi}>{b.bankName || "—"}</span>
                                  ))}
                                </div>
                              </DetailRow>
                              <DetailRow label="চেক নম্বর">
                                <div className="flex flex-col items-end gap-0.5">
                                  {g.items.map(({ b, bi }) => (
                                    <span key={bi} className="font-mono font-black">
                                      {b.checkNo || "—"}
                                    </span>
                                  ))}
                                  {g.key === "member" && row.reissuedTo && (
                                    <span
                                      className="whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800"
                                      title={`এই চেকটি রি-ইস্যু হয়েছে — নতুন চেক #${row.reissuedTo.checkNo}`}
                                    >
                                      🔁 Reissued {formatDisplay(row.reissuedTo.date) || row.reissuedTo.date} → #
                                      {row.reissuedTo.checkNo}
                                    </span>
                                  )}
                                  {g.key === "member" && row.reissuedFrom && (
                                    <span className="whitespace-nowrap rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800">
                                      🔁 Reissue — পুরনো #{row.reissuedFrom.checkNo} (
                                      {formatDisplay(row.reissuedFrom.checkDate) || row.reissuedFrom.checkDate})
                                    </span>
                                  )}
                                  {/* v1.4.106: বাতিল/নতুন অ্যাড ব্যাজ */}
                                  {g.key === "member" && reissueChangeBadges(row)}
                                </div>
                              </DetailRow>
                              <DetailRow label="MICR">
                                <div className="flex flex-col items-end gap-0.5">
                                  {g.items.map(({ b, bi }) => (
                                    <span
                                      key={bi}
                                      className={`rounded border px-1.5 py-0.5 text-[9px] font-black ${
                                        b.micr
                                          ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                                          : "border-slate-300 bg-slate-100 text-slate-600"
                                      }`}
                                    >
                                      {b.micr ? "MICR" : "NON MICR"}
                                    </span>
                                  ))}
                                </div>
                              </DetailRow>
                              <DetailRow label="হিসাব নং">
                                {g.items.some(({ b }) => b.accountNo || b.accountType) ? (
                                  <div className="flex flex-col items-end gap-0.5">
                                    {g.items.map(({ b, bi }) =>
                                      b.accountNo || b.accountType ? (
                                        <span key={bi} className="inline-flex items-center gap-1">
                                          <span className="font-mono font-black">{b.accountNo || "—"}</span>
                                          {b.accountType && (
                                            <span
                                              className={`rounded px-1 py-0.5 text-[9px] font-black ${
                                                b.accountType === "মেম্বার"
                                                  ? "bg-indigo-100 text-indigo-800"
                                                  : "bg-teal-100 text-teal-800"
                                              }`}
                                            >
                                              {b.accountType}
                                            </span>
                                          )}
                                        </span>
                                      ) : null
                                    )}
                                  </div>
                                ) : (
                                  "—"
                                )}
                              </DetailRow>
                            </div>
                          ))}
                          {(row.reissuedTo || row.reissuedFrom) && !viewHasMember && (
                            <DetailRow label="রি-ইস্যু">
                              <div className="flex flex-col items-end gap-0.5">
                                {row.reissuedTo && (
                                  <span className="whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800">
                                    🔁 Reissued {formatDisplay(row.reissuedTo.date) || row.reissuedTo.date} → #
                                    {row.reissuedTo.checkNo}
                                  </span>
                                )}
                                {row.reissuedFrom && (
                                  <span className="whitespace-nowrap rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800">
                                    🔁 Reissue — পুরনো #{row.reissuedFrom.checkNo} (
                                    {formatDisplay(row.reissuedFrom.checkDate) || row.reissuedFrom.checkDate})
                                  </span>
                                )}
                                {/* v1.4.106: বাতিল/নতুন অ্যাড ব্যাজ */}
                                {reissueChangeBadges(row)}
                              </div>
                            </DetailRow>
                          )}
                          <DetailRow label="Disbursse">
                            <span className="font-mono">{row.disbursse ? `৳${fmtAmt(row.disbursse)}` : "—"}</span>
                          </DetailRow>
                          <DetailRow label="Project">
                            <span className="uppercase">
                              {row.project ? String(row.project).trim().toUpperCase() : "—"}
                            </span>
                          </DetailRow>
                          {/* Return টগল + অ্যাকশন — মূল টেবিলের মতোই */}
                          <div className="mt-1.5 flex items-center justify-between gap-1.5 border-t border-slate-200 pt-1.5">
                            <label
                              className={`flex items-center gap-1.5 rounded-lg border px-2 py-1 text-[11px] font-black ${
                                row.returned
                                  ? "border-amber-400 bg-amber-100 text-amber-900"
                                  : "border-slate-300 bg-slate-100 text-slate-700"
                              } ${rowLocked ? "opacity-50" : "cursor-pointer"}`}
                              title={
                                rowLocked
                                  ? "দিন সমাপ্ত (Day Closed) — Return টিক বদলানো যাবে না"
                                  : row.returned
                                  ? "টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে"
                                  : "টিক দিলে এন্ট্রিটি Return টেবিলে চলে যাবে"
                              }
                            >
                              <input
                                type="checkbox"
                                checked={Boolean(row.returned)}
                                disabled={rowLocked}
                                onChange={() => toggleReturned(row)}
                                className="h-3.5 w-3.5 accent-amber-600 disabled:cursor-not-allowed"
                              />
                              ↩ Return
                            </label>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                disabled={rowLocked}
                                onClick={() => handleEdit(row)}
                                title={rowLocked ? "দিন সমাপ্ত — এডিট করা যাবে না" : "এডিট করুন"}
                                className="cursor-pointer rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40"
                              >
                                ✏️
                              </button>
                              <button
                                type="button"
                                disabled={rowLocked}
                                onClick={() => handleDelete(row)}
                                title={rowLocked ? "দিন সমাপ্ত — মুছে ফেলা যাবে না" : "মুছে ফেলুন"}
                                className="cursor-pointer rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════ 📄 PDF VIEW — তারিখ-হতে-তারিখ ফিল্টার প্রয়োগ-অবস্থায় (v1.4.92) ══════════════ */}
      {pdfOpen && dateRange && (
        <div className="check-pdf-modal fixed inset-0 z-[65] overflow-hidden bg-slate-950/80 backdrop-blur-sm">
          <div className="check-pdf-shell flex h-full flex-col overflow-hidden bg-white shadow-2xl sm:m-2 sm:rounded-2xl">
            {/* Header — প্রিন্টে বাদ পড়বে */}
            <div className="no-print flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4">
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-xl">📄</span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-black text-slate-900">
                    PDF ভিউ — তারিখ হতে তারিখ চেক এন্ট্রি
                  </h3>
                  <p className="text-xs font-bold text-slate-500">
                    📅 {formatDisplay(dateRange.from) || dateRange.from} হতে{" "}
                    {formatDisplay(dateRange.to) || dateRange.to} • মোট{" "}
                    <span className="font-mono">{rangedFiltered.length}</span>টি এন্ট্রি (চেক লিস্ট{" "}
                    <span className="font-mono">{listFiltered.length}</span> • Return{" "}
                    <span className="font-mono">{returnFiltered.length}</span>)
                    {search.trim() ? ` • 🔍 সার্চ: "${search.trim()}" প্রয়োগ আছে` : ""}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  title="প্রিন্ট / Save as PDF ডায়ালগ খুলবে"
                  className="cursor-pointer rounded-xl bg-emerald-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-emerald-700"
                >
                  🖨️ প্রিন্ট / PDF সেভ
                </button>
                <button
                  type="button"
                  onClick={() => setPdfOpen(false)}
                  className="cursor-pointer rounded-xl bg-rose-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-rose-700"
                >
                  ✕ ক্লোজ
                </button>
              </div>
            </div>
            {/* হিন্ট — প্রিন্টে বাদ */}
            <div className="no-print shrink-0 border-b border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-900 sm:px-4">
              💡 “🖨️ প্রিন্ট / PDF সেভ” চাপলে প্রিন্ট ডায়ালগ আসবে — সেখানে Destination হিসেবে{" "}
              <span className="font-black">“Save as PDF”</span> বেছে নিলেই PDF ফাইল ডাউনলোড হবে
              (ল্যান্ডস্কেপ আকারে)।
            </div>

            {/* ডকুমেন্ট — এটাই প্রিন্ট/PDF হবে */}
            <div className="check-pdf-scroll min-h-0 flex-1 overflow-auto bg-slate-100 p-2 sm:p-4">
              <style>{CHECK_PDF_PRINT_CSS}</style>
              <div
                id="check-pdf-document"
                className="mx-auto bg-white p-3 shadow sm:p-5"
                style={{ maxWidth: "1240px" }}
              >
                <div className="mb-3 text-center">
                  <h1 className="text-base font-black text-slate-900 sm:text-lg">চেক এন্ট্রি রিপোর্ট</h1>
                  <p className="mt-0.5 text-[11px] font-bold text-slate-600">
                    তারিখ: <span className="font-mono">{formatDisplay(dateRange.from) || dateRange.from}</span>{" "}
                    হতে <span className="font-mono">{formatDisplay(dateRange.to) || dateRange.to}</span> পর্যন্ত
                    • মোট এন্ট্রি: <span className="font-mono">{rangedFiltered.length}</span>
                    {search.trim() ? ` • সার্চ: "${search.trim()}"` : ""}
                    • মোট Disbursse: <span className="font-mono">৳{fmtAmt(String(pdfDisbursseTotal))}</span>
                  </p>
                </div>
                {rangedFiltered.length === 0 ? (
                  <p className="py-8 text-center text-xs font-bold text-slate-500">
                    এই তারিখ-সীমায় কোনো এন্ট্রি নেই
                  </p>
                ) : (
                  <table className="w-full border-collapse text-[11px]">
                    <thead>
                      <tr className="bg-slate-100">
                        {[
                          "Sr",
                          "তারিখ",
                          "মেম্বার কোড",
                          "সদস্যের নাম",
                          "সেন্টার কোড",
                          "সেন্টার নাম",
                          "ব্যাংকের নাম",
                          "চেক নম্বর",
                          "MICR",
                          "হিসাব নং",
                          "ক্যাটাগরি",
                          "Disbursse (৳)",
                          "Project",
                          "Return",
                          "রি-ইস্যু তথ্য",
                        ].map((h) => (
                          <th
                            key={h}
                            className="whitespace-nowrap border border-slate-300 px-1.5 py-1 text-left text-[10px] font-black text-slate-700"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rangedFiltered.map((row, i) => {
                        const pairs = allBankPairs(row);
                        return (
                          <tr key={row.id} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                            <td className="border border-slate-300 px-1.5 py-1 font-mono font-bold text-slate-500">
                              {i + 1}
                            </td>
                            <td className="whitespace-nowrap border border-slate-300 px-1.5 py-1 font-mono font-bold">
                              {formatDisplay(row.checkDate) || row.checkDate}
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1 font-mono font-black text-indigo-700">
                              {row.memberCode}
                              {row.foundInDb === false ? " (NEW)" : ""}
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1 font-semibold">{row.memberName}</td>
                            <td className="border border-slate-300 px-1.5 py-1 font-mono">{row.centreCode}</td>
                            <td className="border border-slate-300 px-1.5 py-1">{row.centreName}</td>
                            <td className="border border-slate-300 px-1.5 py-1">
                              <div className="flex flex-col">
                                {pairs.map((b, bi) => (
                                  <span key={bi}>{b.bankName || "—"}</span>
                                ))}
                              </div>
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1 font-mono font-black">
                              <div className="flex flex-col">
                                {pairs.map((b, bi) => (
                                  <span key={bi}>{b.checkNo || "—"}</span>
                                ))}
                              </div>
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1 text-center">
                              <div className="flex flex-col">
                                {pairs.map((b, bi) => (
                                  <span key={bi} className={b.micr ? "font-black text-emerald-700" : "font-bold text-slate-500"}>
                                    {b.micr ? "MICR" : "NON MICR"}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1 font-mono">
                              <div className="flex flex-col">
                                {pairs.map((b, bi) => (
                                  <span key={bi}>{b.accountNo || "—"}</span>
                                ))}
                              </div>
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1">
                              <div className="flex flex-col">
                                {pairs.map((b, bi) => (
                                  <span key={bi}>{b.accountType || "—"}</span>
                                ))}
                              </div>
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1 text-right font-mono font-black">
                              {row.disbursse ? fmtAmt(row.disbursse) : "—"}
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1 uppercase">
                              {row.project ? String(row.project).trim().toUpperCase() : "—"}
                            </td>
                            <td className="whitespace-nowrap border border-slate-300 px-1.5 py-1 text-center font-black">
                              {row.returned ? (
                                <span className="text-amber-700">
                                  ↩ RETURN
                                  {/* v1.4.106: রিটার্নের তারিখসহ */}
                                  {row.returnDate ? ` (${formatDisplay(row.returnDate) || row.returnDate})` : ""}
                                </span>
                              ) : (
                                "—"
                              )}
                            </td>
                            <td className="border border-slate-300 px-1.5 py-1 text-[10px] font-bold">
                              {row.reissuedTo && (
                                <span className="text-teal-700">
                                  → #{row.reissuedTo.checkNo} ({formatDisplay(row.reissuedTo.date) || row.reissuedTo.date})
                                </span>
                              )}
                              {row.reissuedFrom && (
                                <span className="text-orange-700">
                                  পুরনো #{row.reissuedFrom.checkNo} (
                                  {formatDisplay(row.reissuedFrom.checkDate) || row.reissuedFrom.checkDate})-এর রি-ইস্যু
                                </span>
                              )}
                              {/* v1.4.106/107: রি-ইস্যুতে প্রতি পূর্বের চেকের সিদ্ধান্ত + নতুন অ্যাড */}
                              {row.reissueChanges && (
                                <span className="block text-[9px]">
                                  {row.reissueChanges.decisions ? (
                                    <>
                                      <span className="text-teal-700">
                                        🔁 রি-ইস্যু:{" "}
                                        {row.reissueChanges.decisions
                                          .filter((d) => d.action === "reissued")
                                          .map((p) => `#${p.checkNo || "—"}`)
                                          .join(", ") || "—"}
                                      </span>{" "}
                                      <span className="text-purple-700">
                                        ↩ রিটার্ন:{" "}
                                        {row.reissueChanges.decisions
                                          .filter((d) => d.action === "returned")
                                          .map((p) => `#${p.checkNo || "—"}`)
                                          .join(", ") || "—"}
                                      </span>{" "}
                                    </>
                                  ) : (
                                    <span className="text-rose-700">
                                      🚫 বাতিল: {row.reissueChanges.cancelled.map((p) => `#${p.checkNo || "—"}`).join(", ") || "—"}
                                    </span>
                                  )}{" "}
                                  <span className="text-emerald-700">
                                    ✨ নতুন: {row.reissueChanges.added.map((p) => `#${p.checkNo || "—"}`).join(", ") || "—"}
                                  </span>
                                </span>
                              )}
                              {!row.reissuedTo && !row.reissuedFrom && !row.reissueChanges && "—"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="bg-slate-100">
                        <td
                          colSpan={11}
                          className="border border-slate-300 px-1.5 py-1 text-right text-[11px] font-black text-slate-800"
                        >
                          মোট Disbursse —
                        </td>
                        <td className="border border-slate-300 px-1.5 py-1 text-right font-mono text-[11px] font-black text-slate-900">
                          ৳{fmtAmt(String(pdfDisbursseTotal))}
                        </td>
                        <td colSpan={3} className="border border-slate-300 px-1.5 py-1" />
                      </tr>
                    </tfoot>
                  </table>
                )}
                <p className="mt-2 text-center text-[10px] font-bold text-slate-500">
                  — মোট <span className="font-mono">{rangedFiltered.length}</span>টি এন্ট্রি —
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════ v1.4.49: 🔁 CHECK REISSUE POPUP ══════════════ */}
      {/* ══════════════ v1.4.106: ↩ RETURN তারিখ-মডাল — টিক দিলে তারিখ চাইবে; 100% পূরণ ছাড়া সেভ হয় না ══════════════ */}
      {returnFor && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-amber-300 bg-white shadow-2xl">
            <div className="rounded-t-2xl border-b border-amber-200 bg-amber-50 px-4 py-3">
              <h3 className="flex items-center gap-2 text-base font-black text-amber-900">
                <span>↩</span> <span>চেক রিটার্ন — তারিখ দিন</span>
              </h3>
              <p className="mt-0.5 text-[11px] font-bold text-amber-800">
                চেক: <span className="font-mono">#{returnFor.checkNo}</span> • {returnFor.bankName || "—"} • মেম্বার{" "}
                <span className="font-mono">{returnFor.memberCode}</span>
              </p>
            </div>
            <div className="space-y-3 p-4">
              <div>
                <label className={labelCls}>রিটার্নের তারিখ (বাধ্যতামূলক)</label>
                <DatePicker
                  value={returnDateInput}
                  onChange={(v) => {
                    setReturnDateInput(v || "");
                    setReturnErr("");
                  }}
                  className="py-2 text-sm font-semibold"
                  manualEntry
                />
                <p className="mt-1 text-[10px] font-bold text-slate-500">
                  এই তারিখ 100% পূরণ না করলে এন্ট্রি সেভ হবে না।
                </p>
              </div>
              {returnErr && (
                <div className="rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-black text-rose-800">
                  ⚠️ {returnErr}
                </div>
              )}
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setReturnFor(null);
                    setReturnErr("");
                  }}
                  className="cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-xs transition hover:bg-slate-100"
                >
                  ✕ বাদ
                </button>
                <button
                  type="button"
                  onClick={confirmReturn}
                  title={isFullDate(returnDateInput) ? "রিটার্ন সেভ করুন" : "আগে সম্পূর্ণ তারিখ পূরণ করুন"}
                  className={`cursor-pointer rounded-xl px-5 py-2 text-sm font-black text-white shadow transition ${
                    isFullDate(returnDateInput) ? "bg-amber-600 hover:bg-amber-700" : "bg-slate-300"
                  }`}
                >
                  ✓ রিটার্ন সেভ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════ MEMBER DATABASE POPUP ══════════════ */}
      {dbBrowseOpen && (
        <MemberDatabaseModal
          open={dbBrowseOpen}
          onClose={() => setDbBrowseOpen(false)}
          onPick={(m) => {
            setForm((f) => ({
              ...f,
              memberCode: m.memberCode || "",
              memberName: m.memberName || "",
              centreCode: m.centreCode || "",
              centreName: m.centreName || "",
            }));
            setMatchInfo("found");
            setStatus(null);
          }}
        />
      )}

      {/* ══════════════ IMPORT MODAL ══════════════ */}
      {importOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg">
                  🗄️
                </span>
                <div>
                  <h3 className="text-base font-black">মেম্বার ডাটাবেজ আমদানি</h3>
                  <p className="text-[11px] text-emerald-100">
                    কলাম: Member Code, Member Name, Centre Code, Centre Name (Bank Name, Check No. ঐচ্ছিক)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setImportOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold hover:bg-white/30"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <input
                  ref={fileRef}
                  type="file"
                  accept=".csv,.txt,.tsv,.xlsx,.xls"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                    e.target.value = "";
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-700"
                >
                  📁 ফাইল বেছে নিন (CSV / TXT)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const sample =
                      "Member Code,Member Name,Centre Code,Centre Name,Bank Name,Check No\nM-1001,আব্দুল করিম,C-01,ধানমন্ডি শাখা,Sonali Bank,445566\nM-1002,রহিম উদ্দিন,C-02,মিরপুর শাখা,Janata Bank,778899";
                    setImportText(sample);
                  }}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
                >
                  নমুনা বসান
                </button>
                <span className="text-[11px] font-bold text-slate-500">
                  বর্তমানে ডাটাবেজে: <span className="font-mono">{dbCount.toLocaleString("en-IN")}</span> মেম্বার
                </span>
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600">
                  অথবা Excel / Google Sheet থেকে কপি করে এখানে পেস্ট করুন
                </label>
                <textarea
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  rows={9}
                  placeholder={"Member Code\tMember Name\tCentre Code\tCentre Name\nM-1001\tআব্দুল করিম\tC-01\tধানমন্ডি শাখা"}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 font-mono text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  ট্যাব বা কমা — দুইভাবেই আলাদা করা যায়। হেডার লাইন থাকলে কলাম নিজে থেকেই চেনা হবে।
                  একই কোড থাকলে আগের তথ্য আপডেট হয়ে যাবে।
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3.5">
              <button
                type="button"
                onClick={() => {
                  if (confirm("পুরো মেম্বার ডাটাবেজ মুছে ফেলতে চান?")) {
                    localStorage.removeItem("gobra_member_database");
                    reload();
                    setStatus({ kind: "warn", text: "মেম্বার ডাটাবেজ খালি করা হয়েছে।" });
                  }
                }}
                className="rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-700 transition hover:bg-rose-100"
              >
                🗑️ ডাটাবেজ খালি করুন
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setImportOpen(false)}
                  className="rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300"
                >
                  বাতিল
                </button>
                <button
                  type="button"
                  onClick={() => runImport(importText)}
                  disabled={!importText.trim()}
                  className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2 text-xs font-black text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50"
                >
                  ⬆️ আমদানি করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { getMembers };

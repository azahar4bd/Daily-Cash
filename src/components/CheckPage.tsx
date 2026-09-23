import { useEffect, useMemo, useRef, useState } from "react";
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
import { isDayClosed, isIntermediateBlockedDate } from "@/lib/storage";
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
const TABLE_HEADERS = [
  "Sr",
  "Date",
  "মেম্বার কোড",
  "মেম্বার Name",
  "Centre Code",
  "Centre Name",
  "Bank Name",
  "Check No.",
  "MICR",
  "Disbursse",
  "Project",
  "Return",
  "Action",
];

/** v1.4.48: এন্ট্রির সব ব্যাংক/চেক নম্বরের জোড়া — প্রথম জোড়া মূল ঘর থেকে, বাকিগুলো extraBanks থেকে */
const allBankPairs = (e: CheckEntry): { bankName: string; checkNo: string; micr: boolean }[] => {
  const list = [{ bankName: e.bankName || "", checkNo: e.checkNo || "", micr: e.micr === true }];
  for (const b of e.extraBanks || []) {
    if (b && ((b.bankName || "").trim() || (b.checkNo || "").trim())) {
      list.push({ bankName: b.bankName || "", checkNo: b.checkNo || "", micr: b.micr === true });
    }
  }
  return list;
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
  /** 🏦 অতিরিক্ত ব্যাংক + চেক নম্বরের জোড়া — প্রতিটিতে নিজস্ব MICR টিক (v1.4.48/50) */
  extraBanks: [] as { bankName: string; checkNo: string; micr: boolean }[],
});

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
  /** v1.4.48: সার্চ ফলাফলের ফুল-স্ক্রিন কার্ড ভিউ */
  const [viewOpen, setViewOpen] = useState(false);
  /** v1.4.49: 🔁 রি-ইস্যু পপআপ — কোন এন্ট্রিটি রি-ইস্যু হচ্ছে + তার ফর্ম */
  const [reissueFor, setReissueFor] = useState<CheckEntry | null>(null);
  const [rForm, setRForm] = useState(emptyForm(todayISO()));
  const [rMatchInfo, setRMatchInfo] = useState<"idle" | "found" | "notfound">("idle");
  const [rStatus, setRStatus] = useState<{ kind: "ok" | "warn" | "err"; text: string } | null>(null);
  const rLookupTimer = useRef<number | null>(null);
  const PAGE_SIZE = 25;

  const formRef = useRef<HTMLDivElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  /** v1.4.45: MICR টিকে চেক নম্বর ঘরের ফোকাস/কীবোর্ড হারাবে না */
  const checkNoRef = useRef<HTMLInputElement | null>(null);
  const micrFocusRef = useRef(false);

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

  /* ───────── কোড টাইপ করার সাথে সাথেই নিজে থেকে খোঁজ (blur-এর অপেক্ষা নয়) ───────── */
  const lookupTimer = useRef<number | null>(null);
  const handleMemberCodeChange = (raw: string) => {
    setForm((f) => ({ ...f, memberCode: raw }));
    if (lookupTimer.current) window.clearTimeout(lookupTimer.current);
    const val = raw.trim();
    if (!val) {
      setMatchInfo("idle");
      return;
    }
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
    if (!form.checkDate) return setStatus({ kind: "err", text: "তারিখ নির্বাচন করুন।" });
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
      micr: Boolean(row.micr),
      extraBanks: (row.extraBanks || []).map((b) => ({
        bankName: b?.bankName || "",
        checkNo: b?.checkNo || "",
        micr: b?.micr === true,
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

  /* ───────── সার্চ ফিল্টার (কোড / সেন্টার কোড / তারিখ / নাম) ───────── */
  /** আগের চেক-এন্ট্রিতে ব্যবহার করা ব্যাংকের নাম — সাজেশনেও আসবে */
  const pastBanks = useMemo(() => {
    const set = new Set<string>();
    for (const e of entries) if (e.bankName && e.bankName.trim()) set.add(e.bankName.trim());
    for (const m of getMembers()) if (m.bankName && m.bankName.trim()) set.add(m.bankName.trim());
    return Array.from(set);
  }, [entries]);

  const filtered = useMemo(
    () => (search.trim() ? entries.filter((e) => entryMatches(e, search)) : entries),
    [entries, search]
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
  }, [search]);

  /* v1.4.47: একই সার্চ-ফিল্টার করা তালিকা Return টিক অনুযায়ী দুই টেবিলে ভাগ হয় */
  const listFiltered = useMemo(() => filtered.filter((e) => !e.returned), [filtered]);
  const returnFiltered = useMemo(() => filtered.filter((e) => Boolean(e.returned)), [filtered]);
  const returnedCount = entries.reduce((n, e) => n + (e.returned ? 1 : 0), 0);
  const totalPages = Math.max(1, Math.ceil(listFiltered.length / PAGE_SIZE));
  const pageRows = listFiltered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const retTotalPages = Math.max(1, Math.ceil(returnFiltered.length / PAGE_SIZE));
  const retPageRows = returnFiltered.slice((retPage - 1) * PAGE_SIZE, retPage * PAGE_SIZE);

  /** Return টিক টগল — এন্ট্রিটি দুই টেবিলের মধ্যে সরে যায়; মুছে যায় না, ডেটা অক্ষত থাকে */
  const toggleReturned = (row: CheckEntry) => {
    if (isDayClosed(row.checkDate)) {
      setStatus({
        kind: "err",
        text: `🔒 ${formatDisplay(row.checkDate) || row.checkDate} তারিখের দিন সমাপ্ত (Day Closed) — Return টিক বদলানো যাবে না।`,
      });
      return;
    }
    const nowReturned = !row.returned;
    updateCheckEntry({ ...row, returned: nowReturned });
    setStatus({
      kind: "ok",
      text: nowReturned
        ? `↩ চেক #${row.checkNo} (${row.memberCode}) Return টেবিলে পাঠানো হয়েছে — এন্ট্রিটি মুছে যায়নি।`
        : `✓ চেক #${row.checkNo} (${row.memberCode}) Return থেকে চেক লিস্টে ফিরে এসেছে।`,
    });
  };

  /* v1.4.48: একাধিক ব্যাংক + চেক নম্বরের জোড়া — ＋ বাটনে যোগ, ✕ বাটনে বাদ */
  const addBankPair = () =>
    setForm((f) => ({ ...f, extraBanks: [...f.extraBanks, { bankName: "", checkNo: "", micr: false }] }));
  const updateExtraBank = (i: number, key: "bankName" | "checkNo" | "micr", v: string | boolean) =>
    setForm((f) => ({
      ...f,
      extraBanks: f.extraBanks.map((b, bi) => (bi === i ? { ...b, [key]: v } : b)),
    }));
  const removeExtraBank = (i: number) =>
    setForm((f) => ({ ...f, extraBanks: f.extraBanks.filter((_, bi) => bi !== i) }));

  /* ───────── v1.4.49: 🔁 চেক রি-ইস্যু ─────────
   * পুরনো চেক অপরিবর্তিত থাকে (শুধু রি-ইস্যুর সিল বসে) — নতুন এন্ট্রি তৈরি হয় পুরনো চেকের রেফারেন্সসহ।
   * পুরনো এন্ট্রির দিন Day Closed থাকলেও রি-ইস্যু করা যায় (পুরনো চেক রি-ইস্যুই তো সাধারণত পরে হয়);
   * তবে নতুন এন্ট্রির তারিখ অবশ্যই খোলা দিনের হতে হবে। */
  const openReissue = (row: CheckEntry) => {
    setStatus(null);
    setRForm({
      ...emptyForm(baseDate),
      memberCode: row.memberCode || "",
      memberName: row.memberName || "",
      centreCode: row.centreCode || "",
      centreName: row.centreName || "",
      bankName: row.bankName || "",
      checkNo: "", // নতুন চেক নম্বর লিখতে হবে
      disbursse: row.disbursse || "",
      project: (row.project || "").trim().toLowerCase(),
      micr: Boolean(row.micr),
      // একাধিক ব্যাংক থাকলে ব্যাংকের নামগুলো থেকে যাবে, চেক নম্বর ফাঁকা (নতুন নম্বর লাগবে)
      extraBanks: (row.extraBanks || [])
        .filter((b) => (b?.bankName || "").trim() || (b?.checkNo || "").trim())
        .map((b) => ({ bankName: b?.bankName || "", checkNo: "", micr: b?.micr === true })),
    });
    const m = findMemberByCode(row.memberCode);
    setRMatchInfo(m ? "found" : "notfound");
    setRStatus(null);
    setReissueFor(row);
  };

  /** পপআপে মেম্বার কোড বদলালে ডাটাবেজ লুকআপ (মূল ফর্মের মতোই ডিবাউন্স) */
  const handleRMemberCode = (raw: string) => {
    const val = String(raw || "").replace(/[^0-9]/g, "").slice(0, 20);
    setRForm((f) => ({ ...f, memberCode: val }));
    setRMatchInfo("idle");
    if (rLookupTimer.current) window.clearTimeout(rLookupTimer.current);
    if (!val) return;
    rLookupTimer.current = window.setTimeout(() => {
      const m = findMemberByCode(val);
      if (m) {
        setRMatchInfo("found");
        setRForm((f) => ({
          ...f,
          memberName: m.memberName || f.memberName,
          centreCode: m.centreCode || f.centreCode,
          centreName: m.centreName || f.centreName,
        }));
      } else {
        setRMatchInfo("notfound");
      }
    }, 350);
  };

  const addRBankPair = () =>
    setRForm((f) => ({ ...f, extraBanks: [...f.extraBanks, { bankName: "", checkNo: "", micr: false }] }));
  const updateRExtraBank = (i: number, key: "bankName" | "checkNo" | "micr", v: string | boolean) =>
    setRForm((f) => ({
      ...f,
      extraBanks: f.extraBanks.map((b, bi) => (bi === i ? { ...b, [key]: v } : b)),
    }));
  const removeRExtraBank = (i: number) =>
    setRForm((f) => ({ ...f, extraBanks: f.extraBanks.filter((_, bi) => bi !== i) }));

  const handleReissueSubmit = () => {
    const orig = reissueFor;
    if (!orig) return;
    if (!rForm.checkDate) {
      setRStatus({ kind: "err", text: "রি-ইস্যুর তারিখ নির্বাচন করুন।" });
      return;
    }
    if (isDayClosed(rForm.checkDate)) {
      setRStatus({
        kind: "err",
        text: `🔒 ${formatDisplay(rForm.checkDate) || rForm.checkDate} তারিখের দিন সমাপ্ত (Day Closed) — এই তারিখে রি-ইস্যু করা যাবে না।`,
      });
      return;
    }
    const rBlocked = isIntermediateBlockedDate(rForm.checkDate);
    if (rBlocked.blocked) {
      setRStatus({ kind: "err", text: `🚫 ${rBlocked.reason || "এই তারিখটি ব্লকড।"}` });
      return;
    }
    if (!rForm.memberCode.trim()) return setRStatus({ kind: "err", text: "মেম্বার কোড দিন।" });
    if (!rForm.bankName.trim()) return setRStatus({ kind: "err", text: "ব্যাংকের নাম দিন।" });
    if (!rForm.checkNo.trim())
      return setRStatus({ kind: "err", text: "নতুন চেক নম্বর দিন (পুরনো এন্ট্রিতে দেখানো চেক নম্বরটি নয়)।" });
    const rNeedsAll = rMatchInfo !== "found";
    if (rNeedsAll) {
      if (!rForm.memberName.trim()) return setRStatus({ kind: "err", text: "মেম্বার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।" });
      if (!rForm.centreCode.trim()) return setRStatus({ kind: "err", text: "সেন্টার কোড দিন (ডাটাবেজে পাওয়া যায়নি)।" });
      if (!rForm.centreName.trim()) return setRStatus({ kind: "err", text: "সেন্টার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।" });
    }
    const cleanExtras = rForm.extraBanks
      .map((b) => ({
        bankName: (b.bankName || "").trim(),
        checkNo: (b.checkNo || "").trim(),
        micr: Boolean(b.micr),
      }))
      .filter((b) => b.bankName || b.checkNo);
    for (let i = 0; i < cleanExtras.length; i++) {
      if (!cleanExtras[i].bankName)
        return setRStatus({ kind: "err", text: `ব্যাংক #${i + 2}-এর নাম দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।` });
      if (!cleanExtras[i].checkNo)
        return setRStatus({ kind: "err", text: `ব্যাংক #${i + 2}-এর নতুন চেক নম্বর দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।` });
    }
    const dupPair = [{ bankName: rForm.bankName, checkNo: rForm.checkNo }, ...cleanExtras].find(
      (p) => p.bankName.trim() && p.checkNo.trim() && isDuplicateCheck(p.bankName, p.checkNo)
    );
    if (dupPair) {
      const okDup = confirm(
        `⚠️ ${dupPair.bankName} ব্যাংকের ${dupPair.checkNo} নম্বর চেকটি আগেও এন্ট্রি করা আছে।\n\nতবুও রি-ইস্যু করতে চান?`
      );
      if (!okDup) return;
    }
    if (rNeedsAll) {
      upsertMember({
        memberCode: rForm.memberCode,
        memberName: rForm.memberName,
        centreCode: rForm.centreCode,
        centreName: rForm.centreName,
        bankName: rForm.bankName,
        checkNo: rForm.checkNo,
        source: "auto",
      });
    }
    // ১) নতুন এন্ট্রি — পুরনো চেকের রেফারেন্সসহ (reissuedFrom)
    const newEntry = saveCheckEntry({
      checkDate: rForm.checkDate,
      memberCode: rForm.memberCode.trim(),
      memberName: rForm.memberName.trim(),
      centreCode: rForm.centreCode.trim(),
      centreName: rForm.centreName.trim(),
      bankName: rForm.bankName.trim(),
      checkNo: rForm.checkNo.trim(),
      disbursse: rForm.disbursse.trim(),
      project: rForm.project.trim().toLowerCase(),
      micr: Boolean(rForm.micr),
      extraBanks: cleanExtras,
      foundInDb: rMatchInfo === "found",
      reissuedFrom: {
        id: Number(orig.id),
        checkNo: orig.checkNo || "",
        checkDate: orig.checkDate || "",
      },
    });
    // ২) পুরনো এন্ট্রিতে সিল — কোন তারিখে রি-ইস্যু হলো + নতুন চেক নম্বর (বাকি সব ডেটা অক্ষত)
    const latest =
      getCheckEntries().find((x) => Number(x.id) === Number(orig.id)) || orig;
    updateCheckEntry({
      ...latest,
      // v1.4.50: রি-ইস্যু হলে পুরনো এন্ট্রিটি Return টেবিলে চলে যাবে (নতুন এন্ট্রি চেক লিস্টেই থাকে)
      returned: true,
      reissuedTo: { id: Number(newEntry.id), date: newEntry.checkDate, checkNo: newEntry.checkNo },
    });
    setReissueFor(null);
    setViewOpen(false);
    if (search.trim() && !entryMatches(newEntry, search)) {
      setSearch("");
      setPage(1);
    }
    setStatus({
      kind: "ok",
      text: `✓ চেক #${orig.checkNo} রি-ইস্যু হয়েছে → নতুন চেক #${newEntry.checkNo} (${
        formatDisplay(newEntry.checkDate) || newEntry.checkDate
      }) — নতুন এন্ট্রি চেক লিস্টে আছে, পুরনো এন্ট্রিটি রি-ইস্যুর তারিখসহ Return টেবিলে পাঠানো হয়েছে। কোনো এন্ট্রি মুছে যায়নি.`,
    });
    reload();
  };

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
        <td className="px-3 py-2 font-mono text-[11px] font-bold text-slate-500">{sr}</td>
        <td className="whitespace-nowrap px-3 py-2 font-mono text-xs font-bold text-slate-800">
          {formatDisplay(row.checkDate) || row.checkDate}
        </td>
        <td className="whitespace-nowrap px-3 py-2 font-mono text-xs font-black text-indigo-700">
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
        <td className="px-3 py-2 text-xs font-semibold text-slate-900">{row.memberName}</td>
        <td className="whitespace-nowrap px-3 py-2 font-mono text-xs font-bold text-slate-700">
          {row.centreCode}
        </td>
        <td className="px-3 py-2 text-xs font-semibold text-slate-900">{row.centreName}</td>
        <td className="px-3 py-2 text-xs font-semibold text-slate-800">
          <div className="flex flex-col gap-0.5">
            {allBankPairs(row).map((b, bi) => (
              <span key={bi}>{b.bankName || "—"}</span>
            ))}
          </div>
        </td>
        <td className="px-3 py-2 font-mono text-xs font-black text-slate-900">
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
        </td>
        <td className="whitespace-nowrap px-3 py-2 text-center">
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
        <td className="whitespace-nowrap px-3 py-2 text-right font-mono text-xs font-black text-slate-900">
          {row.disbursse ? (
            fmtAmt(row.disbursse)
          ) : (
            <span className="text-slate-300">—</span>
          )}
        </td>
        <td className="px-3 py-2 text-xs font-semibold text-slate-800">
          {row.project ? (
            <span className="uppercase">{String(row.project).trim().toUpperCase()}</span>
          ) : (
            <span className="text-slate-300">—</span>
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-2 text-center">
          <input
            type="checkbox"
            checked={Boolean(row.returned)}
            disabled={rowLocked}
            onChange={() => toggleReturned(row)}
            title={
              rowLocked
                ? "দিন সমাপ্ত (Day Closed) — Return টিক বদলানো যাবে না"
                : row.returned
                ? "টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে"
                : "টিক দিলে এন্ট্রিটি Return টেবিলে চলে যাবে"
            }
            className="h-4 w-4 cursor-pointer accent-amber-600 disabled:cursor-not-allowed disabled:opacity-40"
          />
        </td>
        <td className="whitespace-nowrap px-3 py-2">
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
              onClick={() => openReissue(row)}
              title="চেক রি-ইস্যু করুন — নতুন এন্ট্রি হবে, পুরনো এন্ট্রিতে রি-ইস্যুর তারিখ দেখা যাবে (দিন সমাপ্ত থাকলেও রি-ইস্যু করা যায়)"
              className="rounded-lg border border-teal-300 bg-teal-50 px-2 py-1 text-xs text-teal-700 transition hover:bg-teal-100"
            >
              🔁
            </button>
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
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200";
  const labelCls = "mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600";
  const readOnlyCls =
    "w-full rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-900";

  return (
    <div className="space-y-4">
      {/* ══════════════ ENTRY FORM ══════════════ */}
      <div
        ref={formRef}
        className="rounded-2xl border border-slate-200 border-t-4 border-t-indigo-500 bg-white p-4 shadow-sm sm:p-5"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h1 className="flex flex-wrap items-center gap-2 text-lg font-black text-slate-900 sm:text-xl">
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

        {/* Step 1 — date + member code */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="mb-1 flex items-center justify-between gap-2">
              <label className={`${labelCls} mb-0`}>Member Code (মেম্বার কোড)</label>
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
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between gap-2">
              <label className={`${labelCls} mb-0`}>Bank Name (ব্যাংকের নাম)</label>
              <button
                type="button"
                onClick={addBankPair}
                title="আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)"
                className="flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200"
              >
                ＋
              </button>
            </div>
            <BankNameInput
              value={form.bankName}
              onChange={(v) => setForm((f) => ({ ...f, bankName: v }))}
              className={inputCls}
              extras={pastBanks}
            />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between gap-2">
              <label className={`${labelCls} mb-0`}>Check No.</label>
              <label
                onTouchStart={() => {
                  micrFocusRef.current = document.activeElement === checkNoRef.current;
                }}
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
            <label className="mb-1 block text-[11px] font-black tracking-wide text-slate-600">
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
              <div
                key={bi}
                className="grid grid-cols-1 items-end gap-2 rounded-xl border border-emerald-300 bg-emerald-50/60 p-2 sm:grid-cols-[1fr_1fr_auto]"
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
                <div>
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="block text-[10px] font-black tracking-wide text-emerald-800">
                      চেক নম্বর #{bi + 2}
                    </span>
                    {/* v1.4.50: প্রতি ব্যাংক জোড়ার নিজস্ব MICR চেকবক্স — চেক নম্বরের ঠিক উপরে */}
                    <label
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
                <button
                  type="button"
                  onClick={() => removeExtraBank(bi)}
                  title="এই ব্যাংক জোড়া মুছুন"
                  className="h-9 w-9 shrink-0 cursor-pointer rounded-lg border border-rose-300 bg-rose-50 text-sm font-black text-rose-700 transition hover:bg-rose-100"
                >
                  ✕
                </button>
              </div>
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
              <span className="text-[10px] font-bold text-slate-500">
                ✏️ এডিট / 🗑️ ডিলিট — Day Closed দিনের এন্ট্রি লক করা
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

        {/* Step 2 — extra fields when member is NOT in the database */}
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
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
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
            {search && (
              <span className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-blue-800">
                ফিল্টার: <span className="font-mono">{filtered.length}</span>
              </span>
            )}
          </div>
        </div>

        {/* Search box */}
        <div className="relative mb-3">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search — মেম্বার কোড, সেন্টার কোড, তারিখ, নাম, চেক নম্বর…"
            className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-28 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            autoComplete="off"
          />
          {search.trim() && filtered.length > 0 && (
            <button
              type="button"
              onClick={() => setViewOpen(true)}
              title="মিলে যাওয়া এন্ট্রিগুলো কার্ড আকারে ফুল স্ক্রিনে দেখুন — এডিট/ডিলিট/Return সহ"
              className="absolute right-11 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-blue-300 bg-blue-50 px-2 py-1 text-[11px] font-black text-blue-700 transition hover:bg-blue-100 cursor-pointer"
            >
              👁 View ({filtered.length})
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

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="max-h-[60vh] overflow-auto">
            <table className="w-full min-w-[1180px] border-collapse text-sm">
              <thead className="sticky top-0 z-10 bg-slate-800 text-white">
                <tr>
                  {TABLE_HEADERS.map((h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap border-r border-slate-700 px-3 py-2.5 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pageRows.length === 0 ? (
                  <tr>
                    <td colSpan={13} className="px-4 py-10 text-center text-sm font-semibold text-slate-500">
                      {search
                        ? "🔍 এই অনুসন্ধানে চেক লিস্টে কোনো ডাটা পাওয়া যায়নি।"
                        : "এখনো কোনো চেক এন্ট্রি নেই — উপরের ফর্ম থেকে যোগ করুন।"}
                    </td>
                  </tr>
                ) : (
                  pageRows.map((row, i) => renderCheckRow(row, (page - 1) * PAGE_SIZE + i + 1, i))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-slate-600">
              পেজ <span className="font-mono">{page}</span> / <span className="font-mono">{totalPages}</span> —{" "}
              মোট <span className="font-mono">{listFiltered.length}</span> রেকর্ড
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
              >
                ‹ আগের
              </button>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
              >
                পরের ›
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ══════════════ ↩ RETURN TABLE — চেক লিস্টের ঠিক নিচে, হুবহু একই গঠন ══════════════ */}
      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
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
          <div className="max-h-[60vh] overflow-auto">
            <table className="w-full min-w-[1180px] border-collapse text-sm">
              <thead className="sticky top-0 z-10 bg-slate-800 text-white">
                <tr>
                  {TABLE_HEADERS.map((h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap border-r border-slate-700 px-3 py-2.5 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {retPageRows.length === 0 ? (
                  <tr>
                    <td colSpan={13} className="px-4 py-10 text-center text-sm font-semibold text-slate-500">
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

      {/* ══════════════ 👁 VIEW — সার্চের ফল কার্ড আকারে ফুল স্ক্রিন, এক পৃষ্ঠায় (স্ক্রলিং নেই) ══════════════ */}
      {viewOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden bg-slate-950/80 backdrop-blur-sm">
          <div className="flex h-full flex-col overflow-hidden bg-slate-50 shadow-2xl sm:m-2 sm:rounded-2xl">
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4">
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-xl">👁</span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-black text-slate-900">
                    সার্চ ফলাফল — “{search}”
                  </h3>
                  <p className="text-[10px] font-bold text-slate-500">
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

            {/* Cards — অ্যাডাপটিভ গ্রিড, এক পৃষ্ঠায়, স্ক্রলিং নেই */}
            <div className="min-h-0 flex-1 overflow-hidden p-2 sm:p-3">
              {filtered.length === 0 ? (
                <div className="flex h-full items-center justify-center text-sm font-bold text-slate-500">
                  কোনো এন্ট্রি নেই
                </div>
              ) : (
                <div
                  className="grid h-full gap-2 sm:gap-2.5"
                  style={{
                    gridTemplateColumns: `repeat(${
                      filtered.length <= 1 ? 1 : filtered.length <= 4 ? 2 : filtered.length <= 9 ? 3 : 4
                    }, minmax(0, 1fr))`,
                    gridAutoRows: "minmax(0, 1fr)",
                  }}
                >
                  {filtered.map((row) => {
                    const rowLocked = isDayClosed(row.checkDate);
                    return (
                      <div
                        key={row.id}
                        className={`flex min-h-0 flex-col overflow-hidden rounded-xl border p-2 shadow-sm sm:p-2.5 ${
                          row.returned ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"
                        }`}
                      >
                        <div className="flex shrink-0 items-start justify-between gap-1">
                          <div className="min-w-0">
                            <p className="truncate text-xs font-black text-indigo-700">
                              {row.memberCode}
                              {row.foundInDb === false && (
                                <span className="ml-1 rounded bg-amber-100 px-1 text-[8px] font-black text-amber-800">
                                  NEW
                                </span>
                              )}
                            </p>
                            <p className="truncate text-[11px] font-bold text-slate-900">{row.memberName}</p>
                          </div>
                          <div className="flex shrink-0 items-center gap-1">
                            {row.returned && (
                              <span className="rounded border border-amber-400 bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800">
                                ↩ RETURN
                              </span>
                            )}
                            {rowLocked && (
                              <span className="text-xs" title="দিন সমাপ্ত (Day Closed)">
                                🔒
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="mt-1 min-h-0 flex-1 space-y-0.5 overflow-hidden text-[10px] font-semibold text-slate-600">
                          <p className="truncate">
                            📅 {formatDisplay(row.checkDate) || row.checkDate} • {row.centreCode} — {row.centreName}
                          </p>
                          {allBankPairs(row).map((b, bi) => (
                            <p key={bi} className="truncate">
                              🏦 {b.bankName || "—"} •{" "}
                              <span className="font-mono font-black text-slate-900">#{b.checkNo || "—"}</span>{" "}
                              <span
                                className={`rounded border px-1 text-[8px] font-black ${
                                  b.micr
                                    ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                                    : "border-slate-300 bg-slate-100 text-slate-600"
                                }`}
                              >
                                {b.micr ? "MICR" : "NON MICR"}
                              </span>
                            </p>
                          ))}
                          {row.reissuedTo && (
                            <p className="truncate font-black text-teal-700">
                              🔁 Reissued {formatDisplay(row.reissuedTo.date) || row.reissuedTo.date} → #
                              {row.reissuedTo.checkNo}
                            </p>
                          )}
                          {row.reissuedFrom && (
                            <p className="truncate font-black text-orange-700">
                              🔁 পুরনো চেক #{row.reissuedFrom.checkNo} (
                              {formatDisplay(row.reissuedFrom.checkDate) || row.reissuedFrom.checkDate})
                            </p>
                          )}
                          <p className="truncate">
                            💵 {row.disbursse ? `৳${fmtAmt(row.disbursse)}` : "—"}
                            {row.project ? ` • ${String(row.project).trim().toUpperCase()}` : ""}
                          </p>
                        </div>
                        <div className="mt-1.5 flex shrink-0 items-center justify-between gap-1">
                          <label
                            className={`flex items-center gap-1 rounded-lg border px-1.5 py-1 text-[10px] font-black ${
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
                              onClick={() => {
                                setViewOpen(false);
                                openReissue(row);
                              }}
                              title="চেক রি-ইস্যু করুন"
                              className="cursor-pointer rounded-lg border border-teal-300 bg-teal-50 px-2 py-1 text-xs text-teal-700 transition hover:bg-teal-100"
                            >
                              🔁
                            </button>
                            <button
                              type="button"
                              disabled={rowLocked}
                              onClick={() => {
                                setViewOpen(false);
                                handleEdit(row);
                              }}
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
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════ v1.4.49: 🔁 CHECK REISSUE POPUP ══════════════ */}
      {reissueFor && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-slate-950/70 p-2 backdrop-blur-sm sm:items-center sm:p-4">
          <div className="my-auto w-full max-w-3xl rounded-2xl border border-teal-300 bg-white shadow-2xl">
            {/* Header — পুরনো চেকের পরিচয় */}
            <div className="flex items-start justify-between gap-2 rounded-t-2xl border-b border-teal-200 bg-teal-50 px-4 py-3">
              <div className="min-w-0">
                <h3 className="flex items-center gap-2 text-base font-black text-teal-900">
                  <span>🔁</span> <span>চেক রি-ইস্যু</span>
                </h3>
                <p className="mt-0.5 text-[11px] font-bold text-teal-800">
                  পুরনো চেক: <span className="font-mono">#{reissueFor.checkNo}</span> •{" "}
                  {reissueFor.bankName || "—"} • তারিখ{" "}
                  {formatDisplay(reissueFor.checkDate) || reissueFor.checkDate} • মেম্বার{" "}
                  <span className="font-mono">{reissueFor.memberCode}</span>
                </p>
                {reissueFor.reissuedTo && (
                  <p className="mt-0.5 text-[10px] font-black text-orange-700">
                    ⚠ এই চেকটি আগেও রি-ইস্যু হয়েছে ({formatDisplay(reissueFor.reissuedTo.date) || reissueFor.reissuedTo.date} → #
                    {reissueFor.reissuedTo.checkNo}) — আবার রি-ইস্যু করলে সিলটি নতুন তথ্যে বদলে যাবে।
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setReissueFor(null)}
                className="shrink-0 cursor-pointer rounded-xl bg-rose-600 px-3 py-1.5 text-sm font-black text-white shadow transition hover:bg-rose-700"
              >
                ✕ ক্লোজ
              </button>
            </div>

            {/* ফর্ম — চেক এন্ট্রির সব ঘর */}
            <div className="max-h-[70vh] space-y-3 overflow-y-auto p-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className={labelCls}>রি-ইস্যুর তারিখ (Date)</label>
                  <DatePicker
                    value={rForm.checkDate}
                    onChange={(v) => setRForm((f) => ({ ...f, checkDate: v || f.checkDate }))}
                    className="py-2 text-sm font-semibold"
                    manualEntry
                  />
                </div>

                <div>
                  <label className={labelCls}>Member Code (মেম্বার কোড)</label>
                  <input
                    value={rForm.memberCode}
                    onChange={(e) => handleRMemberCode(e.target.value)}
                    className={inputCls}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete="off"
                  />
                  {rMatchInfo !== "idle" && (
                    <p
                      className={`mt-1 text-[10px] font-black ${
                        rMatchInfo === "found" ? "text-emerald-700" : "text-amber-700"
                      }`}
                    >
                      {rMatchInfo === "found"
                        ? "✓ ডাটাবেজে আছে — নাম/সেন্টার নিচেই আছে"
                        : "⚠ ডাটাবেজে নেই — নাম/সেন্টার ঘর পূরণ করুন"}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelCls}>Bank Name (ব্যাংকের নাম)</label>
                  <div className="flex items-start gap-1">
                    <BankNameInput
                      value={rForm.bankName}
                      onChange={(v) => setRForm((f) => ({ ...f, bankName: v }))}
                      className={inputCls}
                      extras={pastBanks}
                    />
                    <button
                      type="button"
                      onClick={addRBankPair}
                      title="আরেকটি ব্যাংক + চেক নম্বর যোগ করুন"
                      className="flex h-[38px] w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200"
                    >
                      ＋
                    </button>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>
                    নতুন Check No. <span className="text-rose-600">*</span>
                  </label>
                  <input
                    value={rForm.checkNo}
                    onChange={(e) => setRForm((f) => ({ ...f, checkNo: e.target.value }))}
                    className={inputCls}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="নতুন চেক নম্বর"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className={labelCls}>Member Name</label>
                  <input
                    value={rForm.memberName}
                    onChange={(e) => setRForm((f) => ({ ...f, memberName: e.target.value }))}
                    className={inputCls}
                    placeholder="মেম্বারের নাম"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className={labelCls}>Centre Code</label>
                  <input
                    value={rForm.centreCode}
                    onChange={(e) => setRForm((f) => ({ ...f, centreCode: e.target.value }))}
                    className={inputCls}
                    placeholder="সেন্টার কোড"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className={labelCls}>Centre Name</label>
                  <input
                    value={rForm.centreName}
                    onChange={(e) => setRForm((f) => ({ ...f, centreName: e.target.value }))}
                    className={inputCls}
                    placeholder="সেন্টারের নাম"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className={labelCls}>Disbursse (Amount)</label>
                  <input
                    value={rForm.disbursse}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (/^-?\d*\.?\d*$/.test(v)) setRForm((f) => ({ ...f, disbursse: v }));
                    }}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className={`${inputCls} text-right font-mono`}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-black tracking-wide text-slate-600">
                    project
                  </label>
                  <SearchSelect
                    value={(rForm.project || "").trim().toLowerCase()}
                    onChange={(v) => setRForm((f) => ({ ...f, project: v.trim().toLowerCase() }))}
                    options={projectOpts(rForm.project)}
                    placeholder="-- select project --"
                    className={`${inputCls} cursor-pointer uppercase`}
                    noKeyboardOnMobile
                  />
                </div>

                <div className="flex items-end pb-1">
                  <label className="flex cursor-pointer select-none items-center gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-2.5 py-2 text-[11px] font-black text-emerald-800">
                    <input
                      type="checkbox"
                      checked={Boolean(rForm.micr)}
                      onChange={(e) => setRForm((f) => ({ ...f, micr: e.target.checked }))}
                      className="h-4 w-4 cursor-pointer accent-emerald-600"
                    />
                    <span>MICR</span>
                    <span className="rounded bg-white px-1 text-[9px] font-black text-slate-500">
                      {rForm.micr ? "MICR" : "NON MICR"}
                    </span>
                  </label>
                </div>
              </div>

              {/* অতিরিক্ত ব্যাংক + নতুন চেক নম্বরের জোড়া */}
              {rForm.extraBanks.length > 0 && (
                <div className="space-y-2">
                  {rForm.extraBanks.map((b, bi) => (
                    <div
                      key={bi}
                      className="grid grid-cols-1 items-end gap-2 rounded-xl border border-emerald-300 bg-emerald-50/60 p-2 sm:grid-cols-[1fr_1fr_auto]"
                    >
                      <div>
                        <span className="mb-1 block text-[10px] font-black tracking-wide text-emerald-800">
                          ব্যাংক #{bi + 2}
                        </span>
                        <BankNameInput
                          value={b.bankName}
                          onChange={(v) => updateRExtraBank(bi, "bankName", v)}
                          className={inputCls}
                          extras={pastBanks}
                          placeholder="Bank name"
                        />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between gap-2">
                          <span className="block text-[10px] font-black tracking-wide text-emerald-800">
                            নতুন চেক নম্বর #{bi + 2}
                          </span>
                          {/* v1.4.50: পপআপের জোড়াতেও নিজস্ব MICR চেকবক্স */}
                          <label
                            className="flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800 transition hover:bg-emerald-100"
                            title="টিক দিলে এই চেকটি MICR, টিক না দিলে NON MICR"
                          >
                            <input
                              type="checkbox"
                              checked={Boolean(b.micr)}
                              onChange={(e) => updateRExtraBank(bi, "micr", e.target.checked)}
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
                          onChange={(e) => updateRExtraBank(bi, "checkNo", e.target.value)}
                          className={inputCls}
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="Check No."
                          autoComplete="off"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeRExtraBank(bi)}
                        title="এই ব্যাংক জোড়া মুছুন"
                        className="h-9 w-9 shrink-0 cursor-pointer rounded-lg border border-rose-300 bg-rose-50 text-sm font-black text-rose-700 transition hover:bg-rose-100"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {rStatus && (
                <p
                  className={`rounded-lg border px-3 py-2 text-xs font-black ${
                    rStatus.kind === "err"
                      ? "border-rose-300 bg-rose-50 text-rose-800"
                      : rStatus.kind === "warn"
                      ? "border-amber-300 bg-amber-50 text-amber-800"
                      : "border-emerald-300 bg-emerald-50 text-emerald-800"
                  }`}
                >
                  {rStatus.text}
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-b-2xl border-t border-teal-200 bg-teal-50/60 px-4 py-3">
              <p className="text-[10px] font-bold text-teal-800">
                রি-ইস্যু করলে নতুন এন্ট্রি তৈরি হবে (পুরনো চেকের রেফারেন্সসহ) এবং পুরনো এন্ট্রিতে রি-ইস্যুর
                তারিখ দেখা যাবে — কোনো এন্ট্রি মুছে যাবে না।
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setReissueFor(null)}
                  className="cursor-pointer rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-100"
                >
                  বাতিল
                </button>
                <button
                  type="button"
                  onClick={handleReissueSubmit}
                  className="cursor-pointer rounded-xl bg-teal-600 px-4 py-2 text-sm font-black text-white shadow transition hover:bg-teal-700"
                >
                  🔁 রি-ইস্যু সেভ করুন
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

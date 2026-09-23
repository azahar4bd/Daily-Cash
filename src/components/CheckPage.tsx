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
  if (q.includes("micr")) {
    const wantsNon = q.includes("non");
    if (wantsNon ? !e.micr : Boolean(e.micr)) return true;
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
  const PAGE_SIZE = 25;

  const formRef = useRef<HTMLDivElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

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

    if (isDuplicateCheck(form.bankName, form.checkNo, edit?.id)) {
      const ok = confirm(
        `⚠️ ${form.bankName} ব্যাংকের ${form.checkNo} নম্বর চেকটি আগেও এন্ট্রি করা আছে।\n\nতবুও সেভ করতে চান?`
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

  useEffect(() => setPage(1), [search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
            <label className={labelCls}>Bank Name (ব্যাংকের নাম)</label>
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
                className="flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-800 transition hover:bg-emerald-100"
                title="টিক দিলে টেবিলে MICR, টিক না দিলে NON MICR দেখাবে"
              >
                <input
                  type="checkbox"
                  checked={Boolean(form.micr)}
                  onChange={(e) => setForm((f) => ({ ...f, micr: e.target.checked }))}
                  className="h-3.5 w-3.5 cursor-pointer accent-emerald-600"
                />
                <span>MICR</span>
                <span className="rounded bg-white px-1 text-[9px] font-black text-slate-500">
                  {form.micr ? "MICR" : "NON MICR"}
                </span>
              </label>
            </div>
            <input
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
              options={(() => {
                const cur = (form.project || "").trim().toLowerCase();
                return cur && !PROJECT_OPTIONS.includes(cur)
                  ? [...PROJECT_OPTIONS, cur]
                  : PROJECT_OPTIONS;
              })()}
              placeholder="-- select project --"
              className={`${inputCls} cursor-pointer lowercase`}
            />
          </div>
        </div>

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
                    <span className="text-[11px] font-bold text-slate-600">{e.bankName}</span>
                    <span className="font-mono text-[11px] font-black text-slate-900">
                      #{e.checkNo}
                    </span>
                    {e.disbursse && (
                      <span className="font-mono text-[11px] font-bold text-emerald-700">
                        ৳{fmtAmt(e.disbursse)}
                      </span>
                    )}
                    {e.project && (
                      <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 lowercase">
                        {String(e.project).trim().toLowerCase()}
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
            className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            autoComplete="off"
          />
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
                  {[
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
                    "Action",
                  ].map((h) => (
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
                    <td colSpan={12} className="px-4 py-10 text-center text-sm font-semibold text-slate-500">
                      {search
                        ? "🔍 এই অনুসন্ধানে কোনো ডাটা পাওয়া যায়নি।"
                        : "এখনো কোনো চেক এন্ট্রি নেই — উপরের ফর্ম থেকে যোগ করুন।"}
                    </td>
                  </tr>
                ) : (
                  pageRows.map((row, i) => {
                    const sr = (page - 1) * PAGE_SIZE + i + 1;
                    return (
                      <tr
                        key={row.id}
                        className={`border-b border-slate-200 last:border-b-0 ${
                          i % 2 ? "bg-slate-50/70" : "bg-white"
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
                        <td className="px-3 py-2 text-xs font-semibold text-slate-800">{row.bankName}</td>
                        <td className="whitespace-nowrap px-3 py-2 font-mono text-xs font-black text-slate-900">
                          {row.checkNo}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          {row.micr ? (
                            <span className="rounded border border-emerald-300 bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-800">
                              MICR
                            </span>
                          ) : (
                            <span className="rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 text-[10px] font-black text-slate-600">
                              NON MICR
                            </span>
                          )}
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
                            <span className="lowercase">{String(row.project).trim().toLowerCase()}</span>
                          ) : (
                            <span className="text-slate-300">—</span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2">
                          {(() => {
                            const rowLocked = isDayClosed(row.checkDate);
                            return (
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
                            );
                          })()}
                        </td>
                      </tr>
                    );
                  })
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
              মোট <span className="font-mono">{filtered.length}</span> রেকর্ড
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

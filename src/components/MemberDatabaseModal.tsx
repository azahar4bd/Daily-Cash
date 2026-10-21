import { useEffect, useMemo, useRef, useState } from "react";
import { getMembers, normCode, parseMemberText, importMembers, deleteMember, getUploadHistory, addUploadRecord, deleteUploadRecord, undoUploadRecord } from "@/lib/memberDb";
import type { Member, MemberUploadRecord } from "@/lib/memberDb";
import { parseSamityReport } from "@/lib/memberReportCsv";

/* 🆕 v1.4.174: Excel (.xlsx/.xls) ফাইলও সরাসরি — আগের মাসিক রিপোর্টের হুবহু হেডার;
   SheetJS শুধু Excel ফাইল এলেই লোড হয় (মূল বান্ডল হালকা থাকে) */
async function readUploadText(f: File): Promise<string> {
  const nm = (f.name || "").toLowerCase();
  if (nm.endsWith(".xlsx") || nm.endsWith(".xls") || nm.endsWith(".xlsm") || nm.endsWith(".xlsb")) {
    const XLSX = await import("xlsx");
    const buf = await f.arrayBuffer();
    const wb = XLSX.read(buf, { type: "array" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    return XLSX.utils.sheet_to_csv(ws, { blankrows: false });
  }
  return f.text();
}

/**
 * 🗄️ মেম্বার ডাটাবেজ উইন্ডো (পপআপ)
 * ------------------------------------------------------------------
 * সার্চ ঘরে মেম্বার কোড / সেন্টার কোড / নাম লিখলে নিচে সেই সংশ্লিষ্ট
 * সব ডাটা দেখায়। যেকোনো সারিতে ট্যাপ/ক্লিক করলে সেই মেম্বারের কোড
 * Check ফর্মে বসে যায় (নাম, সেন্টার কোড ও সেন্টার নামসহ)।
 */
export default function MemberDatabaseModal({
  open,
  onClose,
  onPick,
}: {
  open: boolean;
  onClose: () => void;
  onPick?: (m: Member) => void;
}) {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(50);
  const searchRef = useRef<HTMLInputElement | null>(null);
  /** আপলোডের পর তালিকা নতুন করে পড়ার জন্য */
  const [reloadKey, setReloadKey] = useState(0);
  const [upBusy, setUpBusy] = useState(false);
  const [upDrag, setUpDrag] = useState(false);
  const [upMsg, setUpMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  /** v1.4.155: ডাটাবেজ থাকলেও CSV/রিপোর্ট দিয়ে আপডেট-ঘর (ভাঁজ করা যায়) */
  const [showUpdate, setShowUpdate] = useState(false);
  /** v1.4.157: ডুপ্লিকেট-মার্ক + নির্বাচন(মার্ক) মোড + ইনফিনিট-স্ক্রল + বড় উইন্ডো */
  const [dupeMode, setDupeMode] = useState(false);
  const [selectMode, setSelectMode] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set<string>());

  /** ডাটাবেজ একবারই পড়া হবে (৪,৭০০+ রো — বার বার পড়লে ধীর হবে) */
  const members = useMemo<Member[]>(() => (open ? getMembers() : []), [open, reloadKey]);

  /** আপলোড-হিস্টোরি (রিলোড-কী বদলালে নতুন করে পড়া হয়) */
  const upHistory = useMemo<MemberUploadRecord[]>(() => (open ? getUploadHistory() : []), [open, reloadKey]);

  /** 🔁 ডুপ্লিকেট শনাক্তকরণ — একই নাম+সেন্টার ২জন+ হলে "ডুপ্লিকেট" মার্ক (নিজে কিছু মুছে না) */
  const dupeInfo = useMemo(() => {
    const key = (m: Member) => `${normCode(m.memberName)}|${normCode(m.centreCode)}`;
    const cnt = new Map<string, number>();
    for (const m of members) cnt.set(key(m), (cnt.get(key(m)) || 0) + 1);
    const groups = new Set<string>();
    const rows = members.filter((m) => {
      if ((cnt.get(key(m)) || 0) > 1) {
        groups.add(key(m));
        return true;
      }
      return false;
    });
    return { rows, groups: groups.size };
  }, [members]);

  /** সফল বার্তা কিছুক্ষণ পর নিজে থেকেই সরে যাবে */
  useEffect(() => {
    if (!upMsg || !upMsg.ok) return;
    const t = window.setTimeout(() => setUpMsg(null), 12000);
    return () => window.clearTimeout(t);
  }, [upMsg]);

  /** 🗑️ v1.4.114: একক সদস্য মোছা — লোকাল + ক্লাউড সব ডিভাইস থেকে */
  const handleDelete = (m: Member) => {
    if (
      !confirm(
        `🗑️ মেম্বার কোড ${m.memberCode} — “${m.memberName || "—"}” স্থায়ীভাবে মুছে ফেলবেন?\n\n(এই অ্যাপের সব ডিভাইস ও ক্লাউড থেকে মুছে যাবে; ভুল হলে ডাটাবেজ আপডেটের সময় সিড থেকে ফিরতে পারে)`
      )
    )
      return;
    deleteMember(m.memberCode);
  };

  /** ডাটাবেজ বদলালে (আপলোড/ক্লাউড থেকে ফেরা/মুছে ফেলা) তালিকা নতুন করে পড়া হবে */
  useEffect(() => {
    if (!open) return;
    const h = () => setReloadKey((k) => k + 1);
    window.addEventListener("member-db-changed", h);
    return () => window.removeEventListener("member-db-changed", h);
  }, [open]);

  /**
   * 📤 CSV/রিপোর্ট আপলোড — বাকি সব নিজে থেকেই হয়:
   * ① আগে স্যামিটি-রিপোর্ট ফরমেট চেনার চেষ্টা (MIS-এর মাসিক রিপোর্ট,
   *    "Samity: 0001, ..." সহ) → মেম্বার কোড/নাম/সেন্টার নিজে বের হয়
   * ② না মিললে সাধারণ CSV-পার্সার (Member Code, Member Name, Centre Code, Centre Name)
   * দুটোতেই: আগে থেকে থাকা কোড বাদ (নাম/সেন্টার ঝালাই হয়), নতুন মেম্বারই বসে;
   * আপলোড-হিস্টোরিতে রেকর্ড থাকে (মোছা যায়; ১৫টির বেশি হলে পুরনোগুলো নিজেই মুছে যায়)।
   */
  const handleFiles = async (files: FileList | null) => {
    const f = files && files[0] ? files[0] : null;
    if (!f) return;
    setUpBusy(true);
    setUpMsg(null);
    try {
      /* 🆕 v1.4.174: Excel হলে CSV-বদল — পরের ধাপে স্যামিটি-পার্সার/CSV-পার্সার একইভাবে চলে */
      const text = await readUploadText(f);

      // ① স্যামিটি-রিপোর্ট ফরমেট?
      const report = parseSamityReport(text);
      if (report) {
        if (!report.members.length) {
          setUpMsg({
            ok: false,
            text: "ফাইলটা স্যামিটি-রিপোর্টের মতো মনে হচ্ছে, কিন্তু কোনো মেম্বার-সারি পাওয়া যায়নি — ফাইলটি ঠিক আছে কি না দেখুন।",
          });
          return;
        }
        const res = importMembers(report.members);
        addUploadRecord({
          fileName: f.name,
          added: res.added,
          updated: res.updated,
          skipped: report.skipped,
          total: res.total,
          centres: report.centres.length,
          format: "report",
          addedCodes: res.addedCodes,
        });
        setUpMsg({
          ok: true,
          text: `✓ স্যামিটি-রিপোর্ট পড়ে গেছে — ${report.centres.length.toLocaleString("en-IN")}টি সেন্টার থেকে নতুন ${res.added.toLocaleString("en-IN")} জন বসেছে, ${res.updated.toLocaleString("en-IN")} জনের নাম/সেন্টার ঝালাই হয়েছে (বাদ/ডুপ্লিকেট ${report.skipped.toLocaleString("en-IN")})। মোট ${res.total.toLocaleString("en-IN")} জন — ক্লাউডে সংরক্ষণ হচ্ছে…`,
        });
        setReloadKey((k) => k + 1);
        return;
      }

      // ② সাধারণ CSV ফরমেট
      const { members: parsed, skipped } = parseMemberText(text);
      if (!parsed.length) {
        setUpMsg({
          ok: false,
          text: "ফাইলে কোনো মেম্বার পাওয়া যায়নি। কলাম ঠিক আছে কি না দেখুন — Member Code, Member Name, Centre Code, Centre Name (হেডার না থাকলেও এই ক্রমেই পড়বে)। অথবা MIS-এর মাসিক স্যামিটি-রিপোর্ট সরাসরি দিন।",
        });
        return;
      }
      const res = importMembers(parsed);
      addUploadRecord({
        fileName: f.name,
        added: res.added,
        updated: res.updated,
        skipped,
        total: res.total,
        format: "csv",
        addedCodes: res.addedCodes,
      });
      setUpMsg({
        ok: true,
        text: `✓ ${res.total.toLocaleString("en-IN")} জন মেম্বার ডাটাবেজে বসে গেছে (নতুন ${res.added.toLocaleString("en-IN")}, আপডেট ${res.updated.toLocaleString("en-IN")}${skipped ? `, বাদ পড়েছে ${skipped.toLocaleString("en-IN")}` : ""})। ক্লাউডে সংরক্ষণ হচ্ছে…`,
      });
      setReloadKey((k) => k + 1);
    } catch (e: any) {
      setUpMsg({ ok: false, text: `ফাইল পড়া যায়নি: ${e?.message || "অজানা ত্রুটি"}` });
    } finally {
      setUpBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setLimit(200);
    setSelected(new Set<string>());
    setSelectMode(false);
    setDupeMode(false);
    const t = window.setTimeout(() => searchRef.current?.focus(), 60);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const matches = useMemo<Member[]>(() => {
    const base = dupeMode ? dupeInfo.rows : members;
    const q = query.trim().toLowerCase();
    if (!q) return base;
    const nq = normCode(query);
    return base.filter((m) => {
      if (nq && normCode(m.memberCode).includes(nq)) return true;
      if (nq && normCode(m.centreCode).includes(nq)) return true;
      if (nq && m.checkNo && normCode(m.checkNo).includes(nq)) return true;
      if ((m.memberName || "").toLowerCase().includes(q)) return true;
      if ((m.centreName || "").toLowerCase().includes(q)) return true;
      return false;
    });
  }, [members, query, dupeMode, dupeInfo]);

  useEffect(() => setLimit(200), [query, dupeMode]);

  if (!open) return null;

  const shown = matches.slice(0, limit);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="flex h-[94vh] w-[96vw] max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* ── Header ── */}
        <div className="flex items-center justify-between gap-2 border-b border-indigo-200 bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg">
              🗄️
            </span>
            <div>
              <h3 className="text-base font-black leading-tight">মেম্বার ডাটাবেজ</h3>
              <p className="text-[11px] text-indigo-100">
                মোট{" "}
                <span className="font-mono font-black">
                  {members.length.toLocaleString("en-IN")}
                </span>{" "}
                মেম্বার
              </p>
            </div>
          </div>
          {members.length > 0 && (
            <button
              type="button"
              onClick={() => setShowUpdate((s) => !s)}
              title="মাসিক রিপোর্ট/CSV দিয়ে ডাটাবেজ আপডেট করুন"
              className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-black transition cursor-pointer ${
                showUpdate
                  ? "bg-amber-300 text-slate-900 hover:bg-amber-200"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              {showUpdate ? "✕ আপডেট ঘর" : "📤 আপডেট"}
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            title="বন্ধ করুন"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white transition hover:bg-rose-700 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* ── Search ── */}
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="মেম্বার কোড, সেন্টার কোড বা নাম লিখুন…"
              autoComplete="off"
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm font-bold text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                title="সার্চ মুছুন"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-600">
            <span>
              {query.trim() ? (
                <>
                  মিলেছে:{" "}
                  <span className="font-mono text-indigo-700">
                    {matches.length.toLocaleString("en-IN")}
                  </span>{" "}
                  টি
                </>
              ) : (
                <>সব মেম্বার — খুঁজতে উপরে লিখুন</>
              )}
            </span>
            <span className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setDupeMode((d) => !d)}
              title="একই নাম+সেন্টারে ২জন+ আছে এমন সারিগুলোই দেখাবে"
              className={`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${
                dupeMode
                  ? "bg-amber-500 text-white shadow hover:bg-amber-600"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              🔁 ডুপ্লিকেট{dupeMode ? ` — ${dupeInfo.rows.length.toLocaleString("en-IN")}টি (${dupeInfo.groups.toLocaleString("en-IN")} গ্রুপ) ✕` : " খুঁজুন"}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectMode((v) => !v);
                setSelected(new Set<string>());
              }}
              title="সারি মার্ক (টিক) করে একসাথে মোছার মোড"
              className={`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${
                selectMode
                  ? "bg-indigo-600 text-white shadow hover:bg-indigo-700"
                  : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
              }`}
            >
              {selectMode ? "✕ নির্বাচন বন্ধ" : "☑️ নির্বাচন"}
            </button>
          </span>
          <span className="text-[10px] font-semibold text-slate-400">
              যেকোনো সারিতে ট্যাপ করলে কোডটি ফর্মে বসে যাবে
            </span>
          </div>
        </div>

        {/* ── v1.4.155: সবসময়ের আপডেট-ঘর (ডাটাবেজ থাকলেও মাসিক রিপোর্ট দিয়ে আপডেট) ── */}
        {showUpdate && members.length > 0 && (
          <div className="border-b border-indigo-100 bg-linear-to-b from-indigo-50/80 to-white px-4 py-3">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setUpDrag(true);
              }}
              onDragLeave={() => setUpDrag(false)}
              onDrop={(e) => {
                e.preventDefault();
                setUpDrag(false);
                handleFiles(e.dataTransfer.files);
              }}
              className={`rounded-xl border-2 border-dashed px-4 py-3 text-center transition ${
                upDrag ? "border-indigo-500 bg-indigo-100" : "border-indigo-300 bg-indigo-50/50"
              }`}
            >
              <p className="text-xs font-black text-indigo-950">
                📤 মাসিক স্যামিটি-রিপোর্ট (Excel/.xlsx) বা CSV ফাইল দিন
              </p>
              <p className="mx-auto mt-1 max-w-lg text-[10px] font-semibold leading-relaxed text-slate-600">
                MIS-এর মাসিক রিপোর্ট (<span className="font-mono">Samity: …</span> ফরমেট) দিলেই অ্যাপ
                নিজে মেম্বার-কোড, নাম ও সেন্টার চিনে <b>যা ডাটাবেজে নেই তাই যোগ</b> করবে — পুরনো ডেটা
                অক্ষত থাকে, নাম/সেন্টার বদলালে ঝালাই হয়। ফাইল এখানে টেনে ছাড়ুন বা বোতাম চাপুন।
              </p>
              <input
                ref={fileRef}
                type="file"
                accept=".csv,.txt,.xlsx,.xls,.xlsm,text/csv,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                onChange={(e) => handleFiles(e.target.files)}
                className="hidden"
              />
              <button
                type="button"
                disabled={upBusy}
                onClick={() => fileRef.current?.click()}
                className="mt-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-2 text-[11px] font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer"
              >
                {upBusy ? "⏳ ফাইল পড়া হচ্ছে…" : "📁 ফাইল বেছে নিন"}
              </button>
            </div>

            {upHistory.length > 0 && (
              <div className="mt-2.5 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-3 py-1.5">
                  <span className="text-[10px] font-black text-slate-700">📜 আপলোড-হিস্টোরি</span>
                  <span className="text-[9px] font-bold text-slate-400">
                    সর্বশেষ ১৫টি থাকে, পুরনোগুলো নিজেই মুছে যায়
                  </span>
                </div>
                <ul className="max-h-36 divide-y divide-slate-100 overflow-auto">
                  {upHistory.map((r) => (
                    <li key={r.id} className="flex items-center justify-between gap-2 px-3 py-1.5">
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-black text-slate-800">
                          {r.format === "report" ? "📊" : "🗂️"} {r.fileName}
                        </p>
                        <p className="text-[10px] font-semibold text-slate-500">
                          {new Date(r.at).toLocaleString("bn-BD", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                          {" — "}নতুন <span className="font-black text-emerald-700">{r.added}</span>,
                          ঝালাই <span className="font-black text-sky-700">{r.updated}</span>
                          {typeof r.centres === "number" ? `, সেন্টার ${r.centres}` : ""}
                        </p>
                      </div>
                      {r.undoneAt ? (
                        <span className="shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-black text-slate-500">
                          ↩️ ফেরত নেওয়া{typeof r.removed === "number" ? ` (−${r.removed})` : ""}
                        </span>
                      ) : r.addedCodes && r.addedCodes.length > 0 ? (
                        <button
                          type="button"
                          title="এই আপলোডের নতুন মেম্বাররা ডাটাবেজ থেকে সরে যাবে — ঝালাই হওয়া পুরনোরা অক্ষত"
                          onClick={() => {
                            if (
                              confirm(
                                `↩️ এই আপলোড ফেরত নেবেন?\n\nএই ফাইল দিয়ে নতুন বসে যাওয়া ${r.added} জন মেম্বার ডাটাবেজ থেকে সরে যাবে (এই অ্যাপের সব ডিভাইস ও ক্লাউড থেকে)।\n\nনাম/সেন্টার ঝালাই হওয়া পুরনো মেম্বার একদম অক্ষত থাকবে।`
                              )
                            ) {
                              const out = undoUploadRecord(r.id);
                              setReloadKey((k) => k + 1);
                              if (out) {
                                setUpMsg({
                                  ok: true,
                                  text: `↩️ ফেরত নেওয়া হয়েছে — ${out.removed.toLocaleString("en-IN")} জন মেম্বার সরে গেছে, এখন মোট ${out.total.toLocaleString("en-IN")} জন। ক্লাউডেও কাটছাঁট হচ্ছে…`,
                                });
                              }
                            }
                          }}
                          className="shrink-0 rounded-lg px-2 py-1 text-xs text-amber-600 transition hover:bg-amber-50 hover:text-amber-700 cursor-pointer"
                        >
                          ↩️
                        </button>
                      ) : null}
                      <button
                        type="button"
                        title="এই রেকর্ডটি মুছুন — ডাটাবেজের মেম্বার অক্ষত থাকবে"
                        onClick={() => {
                          if (
                            confirm(
                              "শুধু এই রেকর্ডটি মুছে যাবে — ডাটাবেজে বসে যাওয়া মেম্বাররা অক্ষত থাকবে। মুছে ফেলবেন?"
                            )
                          ) {
                            deleteUploadRecord(r.id);
                            setReloadKey((k) => k + 1);
                          }
                        }}
                        className="shrink-0 rounded-lg px-2 py-1 text-xs text-rose-500 transition hover:bg-rose-50 hover:text-rose-700 cursor-pointer"
                      >
                        🗑️
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ── আপলোডের ফল (ঘর বদলে গেলেও বার্তা থেকে যাবে) ── */}
        {upMsg && (
          <div
            className={`flex items-start justify-between gap-2 border-b px-4 py-2 text-[11px] font-bold leading-relaxed ${
              upMsg.ok
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : "border-rose-200 bg-rose-50 text-rose-800"
            }`}
          >
            <span>
              {upMsg.ok ? "✅" : "⚠️"} {upMsg.text}
            </span>
            <button
              type="button"
              onClick={() => setUpMsg(null)}
              title="বার্তা বন্ধ করুন"
              className="shrink-0 rounded px-1 text-xs font-black opacity-60 hover:opacity-100 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* ── Results ── */}
        <div
          className="flex-1 overflow-auto"
          onScroll={(e) => {
            const el = e.currentTarget;
            if (el.scrollTop + el.clientHeight >= el.scrollHeight - 300) {
              setLimit((l) => l + 200);
            }
          }}
        >
          {members.length === 0 ? (
            /* 📤 এই অফিসের ডাটাবেজ এখনো খালি → CSV আপলোড ঘর (একবার আপলোড হলে আর দেখাবে না) */
            <div className="px-4 py-8">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setUpDrag(true);
                }}
                onDragLeave={() => setUpDrag(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setUpDrag(false);
                  handleFiles(e.dataTransfer.files);
                }}
                className={`mx-auto max-w-xl rounded-2xl border-2 border-dashed p-6 text-center transition ${
                  upDrag ? "border-indigo-500 bg-indigo-50" : "border-indigo-300 bg-indigo-50/40"
                }`}
              >
                <div className="text-3xl">📤</div>
                <h4 className="mt-2 text-sm font-black text-indigo-950">
                  এই অফিসের মেম্বার ডাটাবেজ আপলোড করুন
                </h4>
                <p className="mx-auto mt-1.5 max-w-md text-[11px] font-semibold leading-relaxed text-slate-600">
                  Excel (.xlsx) বা CSV ফাইল দিলেই বাকি সব নিজে থেকেই হয়ে যাবে — ফাইল পড়া, কলাম শনাক্ত করা,
                  মেম্বার কোড অনুযায়ী ডুপ্লিকেট বাদ দেওয়া, ডাটাবেজে বসানো এবং ক্লাউডে এই
                  অফিসের নিজের ঘরে সংরক্ষণ। এরপর চেক এন্ট্রিতে কোড লিখলেই নাম ও সেন্টার
                  নিজে থেকে চলে আসবে।
                </p>

                <input
                  ref={fileRef}
                  type="file"
                  accept=".csv,.txt,.xlsx,.xls,.xlsm,text/csv,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                  onChange={(e) => handleFiles(e.target.files)}
                  className="hidden"
                />
                <button
                  type="button"
                  disabled={upBusy}
                  onClick={() => fileRef.current?.click()}
                  className="mt-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-xs font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer"
                >
                  {upBusy ? "⏳ ফাইল পড়া হচ্ছে…" : "📁 Excel/CSV ফাইল বেছে নিন"}
                </button>
                <p className="mt-1.5 text-[10px] font-bold text-slate-500">
                  অথবা ফাইলটি এখানে টেনে আনুন
                </p>

                <div className="mx-auto mt-3 max-w-md rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-[10px] font-semibold leading-relaxed text-slate-500">
                  MIS-এর মাসিক স্যামিটি-রিপোর্ট (<span className="font-mono">Samity: …</span> ফরমেট)
                  সরাসরি দিলেই চলবে — অ্যাপ নিজেই মেম্বার-কোড, নাম ও সেন্টার বের করবে। সাধারণ CSV-ও
                  চলে: <span className="font-mono">Member Code, Member Name, Centre Code, Centre
                  Name, Bank Name, Check No</span> (হেডার ছাড়াও এই ক্রমে)।
                </div>

                <p className="mt-2 text-[10px] font-black text-amber-700">
                  ⚠️ একবার ডাটাবেজ আপলোড হলে এই আপলোড ঘর আর দেখাবে না।
                </p>
              </div>
            </div>
          ) : shown.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <div className="text-3xl">🔍</div>
              <p className="mt-2 text-sm font-bold text-slate-600">কোনো মিল নেই</p>
              <p className="mt-1 text-[11px] font-semibold text-slate-400">
                কোড বা নামের বানান মিলিয়ে দেখুন।
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-200">
              {shown.map((m, i) => (
                <li key={`${m.memberCode}-${i}`} className="flex items-stretch">
                  {selectMode && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelected((prev) => {
                          const nx = new Set(prev);
                          if (nx.has(m.memberCode)) nx.delete(m.memberCode);
                          else nx.add(m.memberCode);
                          return nx;
                        });
                      }}
                      title={selected.has(m.memberCode) ? "নির্বাচন তুলুন" : "নির্বাচন করুন"}
                      className={`shrink-0 border-r px-3 text-base transition cursor-pointer ${
                        selected.has(m.memberCode)
                          ? "border-indigo-300 bg-indigo-600 text-white"
                          : "border-slate-200 bg-slate-100 text-slate-400 hover:bg-slate-200"
                      }`}
                    >
                      {selected.has(m.memberCode) ? "☑️" : "⬜"}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      if (selectMode) {
                        setSelected((prev) => {
                          const nx = new Set(prev);
                          if (nx.has(m.memberCode)) nx.delete(m.memberCode);
                          else nx.add(m.memberCode);
                          return nx;
                        });
                        return;
                      }
                      if (onPick) onPick(m);
                      onClose();
                    }}
                    title="এই মেম্বারটি বেছে নিন"
                    className={`block min-w-0 flex-1 cursor-pointer px-4 py-2.5 text-left transition hover:bg-indigo-50 ${
                      i % 2 ? "bg-slate-50/60" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-xs font-black text-indigo-700">
                        {m.memberCode}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {m.memberName || "—"}
                      </span>
                      {dupeMode && (
                        <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800 ring-1 ring-amber-300">
                          ডুপ্লিকেট
                        </span>
                      )}
                      <span className="ml-auto flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-bold text-slate-600">
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono">
                          {m.centreCode || "—"}
                        </span>
                        <span>{m.centreName || "—"}</span>
                      </span>
                    </div>
                    {(m.bankName || m.checkNo || m.source === "auto") && (
                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-semibold text-slate-500">
                        {m.bankName && <span>🏦 {m.bankName}</span>}
                        {m.checkNo && <span className="font-mono">চেক #{m.checkNo}</span>}
                        {m.source === "auto" && (
                          <span className="rounded bg-amber-100 px-1 py-0.5 font-black text-amber-800">
                            NEW
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                  {/* 🗑️ v1.4.114: সদস্য মোছার বাটন — প্রতিটি সারিতে */}
                  <button
                    type="button"
                    onClick={() => handleDelete(m)}
                    title={`মেম্বার ${m.memberCode} স্থায়ীভাবে মুছে ফেলুন (লোকাল + ক্লাউড)`}
                    className={`shrink-0 cursor-pointer border-l px-3 text-sm transition hover:bg-rose-100 hover:text-rose-700 ${
                      i % 2 ? "border-rose-200/60 bg-slate-50/60 text-slate-400" : "border-rose-200/60 bg-white text-slate-400"
                    }`}
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>
          )}

          {matches.length > shown.length && (
            <div className="p-3 text-center text-[10px] font-bold text-slate-400">
              ↓ নিচে স্ক্রল করলেই পরেরগুলো নিজে থেকে আসবে…
            </div>
          )}
        </div>

        {/* ── ☑️ নির্বাচন-অ্যাকশন-বার ── */}
        {selectMode && selected.size > 0 && (
          <div className="flex items-center justify-between gap-2 border-t border-indigo-200 bg-indigo-50 px-4 py-2">
            <span className="text-[11px] font-black text-indigo-900">
              ☑️ {selected.size.toLocaleString("en-IN")} জন নির্বাচিত
            </span>
            <span className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelected(new Set<string>())}
                className="rounded-lg bg-slate-200 px-3 py-1.5 text-[10px] font-black text-slate-700 transition hover:bg-slate-300 cursor-pointer"
              >
                নির্বাচন মুছুন
              </button>
              <button
                type="button"
                onClick={() => {
                  const codes = Array.from(selected) as string[];
                  if (
                    !confirm(
                      `🗑️ নির্বাচিত ${codes.length} জন মেম্বার স্থায়ীভাবে মুছে ফেলবেন?\n\n(সব ডিভাইস ও ক্লাউড থেকে মুছে যাবে; ভুল হলে পরের রিপোর্ট-আপডেটে প্রয়োজনীয় মেম্বার ফিরে আসবে)`
                    )
                  )
                    return;
                  for (const c of codes) {
                    try {
                      deleteMember(c);
                    } catch {}
                  }
                  setSelected(new Set<string>());
                  setReloadKey((k) => k + 1);
                  setUpMsg({
                    ok: true,
                    text: `🗑️ নির্বাচিত ${codes.length.toLocaleString("en-IN")} জন মেম্বার মুছে ফেলা হয়েছে — ক্লাউডেও কাটছাঁট হবে।`,
                  });
                }}
                className="rounded-lg bg-rose-600 px-3 py-1.5 text-[10px] font-black text-white shadow transition hover:bg-rose-700 cursor-pointer"
              >
                🗑️ মুছে ফেলুন
              </button>
            </span>
          </div>
        )}

        {/* ── Footer ── */}
        <div className="flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-4 py-3">
          <span className="text-[11px] font-bold text-slate-500">
            দেখানো হচ্ছে{" "}
            <span className="font-mono text-slate-700">
              {shown.length.toLocaleString("en-IN")}
            </span>{" "}
            /{" "}
            <span className="font-mono text-slate-700">
              {matches.length.toLocaleString("en-IN")}
            </span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300 cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}

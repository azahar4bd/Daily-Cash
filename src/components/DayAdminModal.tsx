import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import DatePicker, { formatDisplay } from "./DatePicker";
import { fmt } from "./DenominationPopup";
import {
  getSummary,
  isDayClosed,
  isDayOpen,
  saveDayClosure,
  reopenDay,
  openDay,
  getLocalDayClosures,
  getLocalDayOpens,
  getLocalTxs,
  getLocalStaffReports,
  getDayClosure,
  getDayOpen,
  prevUnclosedWorkingDay,
} from "@/lib/storage";
import { getReportDayBalances } from "@/lib/dayBalances";
import type { DayClosure } from "@/types";

/**
 * ⚙️ v1.4.119: DAY ADMIN — কর্মদিবসের পূর্ণ নিয়ন্ত্রণ এক জায়গায়
 * ------------------------------------------------------------------
 *  • সব কর্মদিবস (ওপেন/ক্লোজড) একসাথে দেখা
 *  • যেকোনো দিন **সরাসরি Day Close** (মডাল-গেট ছাড়া — আটকে যাওয়া দিন উদ্ধার)
 *  • 🔓 Re-open Day — পুরনো যেকোনো দিন আনলক
 *  • ✏️ এই দিনে এডিট — ক্লোজড দিন অটো আনলক করে সেই তারিখে ঝাঁপ
 *  • ☀️ অ্যাডমিন Day Open — সিকোয়েন্স-নিয়ম বাইপাস (ইচ্ছামতো দিন খোলা)
 *  • ℹ️ সিকোয়েন্স-স্ট্যাটাস — কোন দিন Close বাকি সেটা এক নজরে
 */

export interface DayAdminRow {
  date: string;
  closed: boolean;
  open: boolean;
  entries: number;
  closure: DayClosure | null;
}

/** সব কর্মদিবসের তালিকা (নতুনতম আগে) */
export const buildDayAdminRows = (): DayAdminRow[] => {
  const dates = new Set<string>();
  for (const c of getLocalDayClosures()) if (c.closeDate?.includes("-")) dates.add(c.closeDate);
  for (const o of getLocalDayOpens()) if (o.openDate?.includes("-")) dates.add(o.openDate);
  for (const t of getLocalTxs()) if (t.txDate?.includes("-")) dates.add(t.txDate);
  for (const s of getLocalStaffReports()) if (s.reportDate?.includes("-")) dates.add(s.reportDate);
  const countMap = new Map<string, number>();
  for (const t of getLocalTxs()) countMap.set(t.txDate, (countMap.get(t.txDate) || 0) + 1);
  for (const s of getLocalStaffReports())
    countMap.set(s.reportDate, (countMap.get(s.reportDate) || 0) + 1);
  return Array.from(dates)
    .sort()
    .reverse()
    .map((d) => ({
      date: d,
      closed: isDayClosed(d),
      open: isDayOpen(d),
      entries: countMap.get(d) || 0,
      closure: getDayClosure(d),
    }));
};

/** ⚙️ এডমিন Day Close — Day Close মডালের হুবহু সূত্রে, কিন্তু কোনো Open/ব্লক-গেট ছাড়া (v1.4.41 সূত্র) */
export const closeDayAsAdmin = (date: string, closedBy = "Admin"): DayClosure => {
  const sum = getSummary(date);
  const rt = getReportDayBalances(date);
  return saveDayClosure({
    closeDate: date,
    openingCash: sum.prevCash,
    openingBank: sum.prevBank,
    closingCash: rt.cash,
    closingBank: rt.bank,
    totalReceive: sum.receive,
    totalPayment: sum.expense,
    status: "closed",
    closedAt: new Date().toISOString(),
    closedBy,
    notes: "Closed from ⚙️ Day Admin",
  });
};

export default function DayAdminModal({
  isOpen,
  onClose,
  onJumpDate,
}: {
  isOpen: boolean;
  onClose: () => void;
  /** ওই তারিখে এডিট করতে যাওয়া — তারিখ বসে + Receive পেজে যাবে */
  onJumpDate?: (date: string) => void;
}) {
  const [tick, setTick] = useState(0);
  const [forceDate, setForceDate] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const rows = useMemo(() => (isOpen ? buildDayAdminRows() : []), [isOpen, tick]);

  /** সিকোয়েন্স-স্ট্যাটাস: সবচেয়ে পুরনো অক্লোজড কর্মদিবস */
  const earliestUnclosed = useMemo(() => {
    const openDays = rows.filter((r) => r.open && !r.closed).map((r) => r.date).sort();
    return openDays.length ? openDays[0] : null;
  }, [rows]);

  useEffect(() => {
    if (isOpen) {
      setTick((t) => t + 1);
      setMsg(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const reload = () => setTick((t) => t + 1);

  const handleClose = (date: string) => {
    if (
      !confirm(
        `🔒 ${formatDisplay(date) || date} — এই কর্মদিবসটি ক্লোজ (লক) করবেন?\n\nক্লোজ হলে এই তারিখের সব এন্ট্রি লক হয়ে যাবে (প্রয়োজনে এখান থেকেই Re-open করা যাবে)।`
      )
    )
      return;
    try {
      closeDayAsAdmin(date);
      setMsg({ ok: true, text: `✅ ${formatDisplay(date) || date} — Day Closed হয়েছে।` });
    } catch (e: any) {
      setMsg({ ok: false, text: e?.message || "ক্লোজ করা গেল না।" });
    }
    reload();
  };

  const handleReopen = (date: string) => {
    if (
      !confirm(
        `🔓 ${formatDisplay(date) || date} — এই দিনটি আবার আনলক (Re-open) করবেন?\n\nআনলক হলে এই তারিখে আবার এন্ট্রি/এডিট করা যাবে।`
      )
    )
      return;
    try {
      reopenDay(date);
      setMsg({ ok: true, text: `🔓 ${formatDisplay(date) || date} — আবার খোলা হয়েছে।` });
    } catch (e: any) {
      setMsg({ ok: false, text: e?.message || "Re-open করা গেল না।" });
    }
    reload();
  };

  const handleJump = (date: string) => {
    const wasClosed = isDayClosed(date);
    if (
      wasClosed &&
      !confirm(
        `🔓 ${formatDisplay(date) || date} দিনটি ক্লোজড।\n\nএডিট করতে হলে আগে আনলক (Re-open) করতে হবে — আনলক করে সেই দিনে যাবেন?`
      )
    )
      return;
    try {
      if (wasClosed) reopenDay(date);
    } catch {}
    reload();
    if (onJumpDate) onJumpDate(date);
  };

  const handleForceOpen = () => {
    const d = forceDate;
    if (!d) return setMsg({ ok: false, text: "আগে একটি তারিখ বেছে নিন।" });
    if (isDayClosed(d)) return setMsg({ ok: false, text: `${d} ক্লোজড — Day Open না, আগে Re-open করুন।` });
    if (isDayOpen(d)) return setMsg({ ok: false, text: `${d} ইতিমধ্যেই খোলা আছে।` });
    try {
      openDay(d, "Admin", null, { force: true });
      setMsg({ ok: true, text: `☀️ ${formatDisplay(d) || d} — Day Open হয়েছে (অ্যাডমিন)।` });
      setForceDate("");
    } catch (e: any) {
      setMsg({ ok: false, text: e?.message || "Day Open করা গেল না।" });
    }
    reload();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-violet-200 bg-linear-to-r from-violet-700 to-indigo-600 px-5 py-3.5 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs">
              ⚙️
            </span>
            <div>
              <h3 className="text-base font-black tracking-tight">Day Admin — কর্মদিবস নিয়ন্ত্রণ</h3>
              <p className="text-[11px] text-violet-100">
                যেকোনো দিন Close / Re-open / এডিট — এখান থেকেই
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Sequence status strip */}
        <div
          className={`border-b px-4 py-2 text-[11px] font-black ${
            earliestUnclosed
              ? "border-amber-300 bg-amber-50 text-amber-900"
              : "border-emerald-300 bg-emerald-50 text-emerald-900"
          }`}
        >
          {earliestUnclosed ? (
            <>
              ⚠️ সিকোয়েন্স-নিয়ম: <span className="font-mono">{formatDisplay(earliestUnclosed) || earliestUnclosed}</span>{" "}
              খোলা আছে — এটা Close না করলে পরের দিন Day Open হবে না।
            </>
          ) : (
            <>✓ সব কর্মদিবস ধারাবাহিক — কোনো দিন আটকে নেই।</>
          )}
        </div>

        {msg && (
          <div
            className={`border-b px-4 py-2 text-[11px] font-bold ${
              msg.ok ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-rose-200 bg-rose-50 text-rose-800"
            }`}
          >
            {msg.text}
          </div>
        )}

        {/* Force open (admin) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
          <span className="text-[11px] font-black text-slate-700">☀️ অ্যাডমিন Day Open:</span>
          <DatePicker value={forceDate} onChange={setForceDate} manualEntry className="w-36 px-2 py-1 text-xs" />
          <button
            type="button"
            onClick={handleForceOpen}
            className="rounded-lg bg-linear-to-r from-amber-600 to-orange-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:from-amber-700 hover:to-orange-700 cursor-pointer"
            title="সিকোয়েন্স-নিয়ম বাইপাস করে যেকোনো দিন খুলুন"
          >
            ☀️ Day Open (নিয়ম-বাইপাস)
          </button>
        </div>

        {/* Day list */}
        <div className="flex-1 space-y-2 overflow-auto p-3.5">
          {rows.length === 0 ? (
            <p className="py-10 text-center text-xs font-semibold text-slate-400">
              এখনো কোনো কর্মদিবসের রেকর্ড নেই।
            </p>
          ) : (
            rows.map((r) => (
              <div
                key={r.date}
                className={`rounded-xl border p-3 ${
                  r.closed
                    ? "border-rose-200 bg-rose-50/50"
                    : "border-emerald-300 bg-emerald-50/40"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base">{r.closed ? "🔒" : "☀️"}</span>
                  <span className="font-mono text-sm font-black text-slate-900">{r.date}</span>
                  <span className="text-[11px] font-bold text-slate-500">{formatDisplay(r.date)}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                      r.closed ? "bg-rose-600 text-white" : "bg-emerald-600 text-white"
                    }`}
                  >
                    {r.closed ? "Day Closed" : "Open"}
                  </span>
                  <span className="ml-auto text-[10px] font-bold text-slate-500">
                    এন্ট্রি: <span className="font-mono">{r.entries}</span>
                  </span>
                </div>

                {r.closure && (
                  <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] font-bold text-slate-600">
                    <span>ওপেনিং: ৳{fmt(r.closure.openingCash)} / ব্যাংক ৳{fmt(r.closure.openingBank)}</span>
                    <span>ক্লোজিং: ৳{fmt(r.closure.closingCash)} / ব্যাংক ৳{fmt(r.closure.closingBank)}</span>
                    {r.closure.closedAt && (
                      <span className="text-slate-400">
                        ক্লোজ: {new Date(r.closure.closedAt).toLocaleString("en-GB")}
                      </span>
                    )}
                  </div>
                )}

                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {!r.closed ? (
                    <button
                      type="button"
                      onClick={() => handleClose(r.date)}
                      className="rounded-lg bg-linear-to-r from-emerald-600 to-teal-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:from-emerald-700 hover:to-teal-700 cursor-pointer"
                      title="এই দিনটি শুধু এখানেই সরাসরি ক্লোজ করুন"
                    >
                      🔒 Day Close
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleReopen(r.date)}
                      className="rounded-lg bg-amber-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:bg-amber-700 cursor-pointer"
                      title="দিনটি আবার আনলক করুন"
                    >
                      🔓 Re-open Day
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleJump(r.date)}
                    className="rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-[11px] font-black text-indigo-700 transition hover:bg-indigo-100 cursor-pointer"
                    title={
                      r.closed
                        ? "আনলক করে সেই তারিখে এডিট করতে যান"
                        : "সেই তারিখে গিয়ে এন্ট্রি/এডিট করুন"
                    }
                  >
                    ✏️ এই দিনে এডিট
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[10px] font-semibold text-slate-500">
          ℹ️ Day Close/এডিট সব ডিভাইসে ক্লাউডের মাধ্যমে সিঙ্ক হয়। পুরনো দিন এডিট শেষ হলে মনে রাখবেন — দিনটি আবার
          Close করে দিন (না করলে পরের দিন খোলা যাবে না)।
        </div>
      </div>
    </div>,
    document.body
  );
}

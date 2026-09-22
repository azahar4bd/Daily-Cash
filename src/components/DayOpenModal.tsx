import { useState, useEffect } from "react";
import {
  getSummary,
  openDay,
  isDayClosed,
  isDayOpen,
  getDayOpen,
} from "@/lib/storage";
import { formatDisplay } from "./DatePicker";
import { fmt } from "./DenominationPopup";

/** শুধু সংখ্যা (ঋণাত্মক ও দশমিক সহ) */
const NUM_RE = /^-?\d*\.?\d*$/;

export default function DayOpenModal({
  isOpen,
  onClose,
  selectedDate,
  onDayOpened,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  onDayOpened?: () => void;
}) {
  /** অ্যাপের নিজের হিসাব (সিস্টেম ওপেনিং) */
  const [sys, setSys] = useState<{
    cash: number;
    bank: number;
    prevDate?: string;
    dayName: string;
  }>({ cash: 0, bank: 0, dayName: "" });

  /** ✍️ হাতে টাইপ করা ওপেনিং */
  const [cashInput, setCashInput] = useState("0");
  const [bankInput, setBankInput] = useState("0");
  const [note, setNote] = useState("");

  const [alreadyOpen, setAlreadyOpen] = useState(false);
  const [savedManual, setSavedManual] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!isOpen || !selectedDate) return;
    try {
      // এই দিনের পুরনো ম্যানুয়াল ওপেনিং বাদ দিয়ে সিস্টেমের আসল হিসাব দেখা হবে
      const sum = getSummary(selectedDate, { skipManualOpeningFor: selectedDate });
      const [y, m, d] = selectedDate.split("-").map(Number);
      const dayObj = new Date(y, m - 1, d);
      const dayNames = [
        "রবিবার",
        "সোমবার",
        "মঙ্গলবার",
        "বুধবার",
        "বৃহস্পতিবার",
        "শুক্রবার",
        "শনিবার",
      ];
      const dayName = !isNaN(dayObj.getDay()) ? dayNames[dayObj.getDay()] : "";
      const sysCash = Math.round(Number(sum.prevCash) || 0);
      const sysBank = Math.round(Number(sum.prevBank) || 0);

      setSys({ cash: sysCash, bank: sysBank, prevDate: sum.prevDate, dayName });
      setAlreadyOpen(isDayOpen(selectedDate) || Boolean(getDayOpen(selectedDate)));

      const rec = getDayOpen(selectedDate);
      if (rec && rec.manualOpening) {
        setCashInput(String(Math.round(Number(rec.openingCash) || 0)));
        setBankInput(String(Math.round(Number(rec.openingBank) || 0)));
        setNote(rec.openingNote || "");
        setSavedManual(true);
      } else {
        setCashInput(String(sysCash));
        setBankInput(String(sysBank));
        setNote("");
        setSavedManual(false);
      }
      setErr("");
    } catch (e) {
      console.error(e);
    }
  }, [isOpen, selectedDate]);

  if (!isOpen) return null;

  const cashVal = Math.round(Number(cashInput) || 0);
  const bankVal = Math.round(Number(bankInput) || 0);
  const cashDiff = cashVal - sys.cash;
  const bankDiff = bankVal - sys.bank;
  const isManual = cashDiff !== 0 || bankDiff !== 0;

  const resetToSystem = () => {
    setCashInput(String(sys.cash));
    setBankInput(String(sys.bank));
    setNote("");
    setErr("");
  };

  const handleConfirm = () => {
    if (isDayClosed(selectedDate)) {
      setErr(
        `🔒 ${formatDisplay(selectedDate) || selectedDate} তারিখের দিন সমাপ্ত (Day Closed) — ওপেনিং বদলানো যাবে না।`
      );
      return;
    }
    if (!NUM_RE.test(String(cashInput).trim()) || !NUM_RE.test(String(bankInput).trim())) {
      setErr("⚠️ সঠিক সংখ্যা দিন (যেমন: 50000 বা 50000.50)");
      return;
    }

    if (isManual) {
      const ok = window.confirm(
        `✍️ ওপেনিং হাতে বসানো হচ্ছে:\n\n` +
          `হাতে নগদ: ৳${fmt(sys.cash)}  →  ৳${fmt(cashVal)}   (${
            cashDiff >= 0 ? "+" : "−"
          }৳${fmt(Math.abs(cashDiff))})\n` +
          `ব্যাংক: ৳${fmt(sys.bank)}  →  ৳${fmt(bankVal)}   (${
            bankDiff >= 0 ? "+" : "−"
          }৳${fmt(Math.abs(bankDiff))})\n\n` +
          `এই সংখ্যা থেকেই আজকের হিসাব এবং পরের কর্মদিবসগুলোর ওপেনিং চলবে।\nনিশ্চিত করুন?`
      );
      if (!ok) return;
    }

    setLoading(true);
    try {
      openDay(
        selectedDate,
        "Cashier",
        isManual ? { cash: cashVal, bank: bankVal, note } : null
      );
      if (onDayOpened) onDayOpened();
      onClose();
    } catch (e: any) {
      setErr(e?.message || "দিন শুরু করতে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  const diffChip = (diff: number) =>
    diff === 0 ? null : (
      <span
        className={`mt-1 inline-block rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-black ${
          diff > 0
            ? "border-emerald-300 bg-emerald-100 text-emerald-800"
            : "border-rose-300 bg-rose-100 text-rose-800"
        }`}
      >
        পার্থক্য {diff > 0 ? "+" : "−"}৳{fmt(Math.abs(diff))}
      </span>
    );

  const inputCls =
    "w-full rounded-lg border-2 bg-white px-2.5 py-2 text-right font-mono text-base font-black text-slate-900 outline-none focus:ring-2";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-auto rounded-2xl bg-white shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-200 bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3.5 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs">
              {alreadyOpen ? "✏️" : "☀️"}
            </span>
            <div>
              <h3 className="text-base font-black tracking-tight">
                {alreadyOpen ? "ওপেনিং সংশোধন (Opening Edit)" : "কর্মদিবস শুরু (Day Open)"}
              </h3>
              <p className="text-[11px] text-amber-100">
                প্রারম্ভিক হাতে নগদ ও ব্যাংক স্থিতি — প্রয়োজনে হাতে টাইপ করে বসানো যাবে
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-slate-800">
          {/* Date info card */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                {alreadyOpen ? "কর্মদিবস (Working Date)" : "শুরু করার তারিখ (Working Date)"}
              </span>
              <span className="font-mono text-lg font-black text-slate-900 mt-0.5 block">
                {selectedDate}{" "}
                <span className="text-sm font-sans font-bold text-amber-900">
                  ({sys.dayName})
                </span>
              </span>
            </div>
            <span className="rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-black text-white shadow-xs">
              {formatDisplay(selectedDate)}
            </span>
          </div>

          {/* Opening Balances — সিস্টেম হিসাব + ✍️ ম্যানুয়াল এন্ট্রি */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-600">পূর্ববর্তী সমাপ্ত কর্মদিবস:</span>
              <div className="flex items-center gap-2">
                {savedManual && (
                  <span
                    className="rounded border border-fuchsia-300 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-black text-fuchsia-700"
                    title="এই দিনের ওপেনিং আগে হাতে বসানো হয়েছিল"
                  >
                    ✍️ ম্যানুয়াল ওপেনিং বসানো আছে
                  </span>
                )}
                <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {sys.prevDate ? formatDisplay(sys.prevDate) : "প্রারম্ভিক দিন"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Opening Cash */}
              <div className="rounded-xl bg-emerald-50 border border-emerald-300 p-3">
                <span className="text-[11px] font-bold text-emerald-800 block text-center">
                  প্রারম্ভিক ক্যাশ (Cash in Hand)
                </span>
                <span className="mt-1 block text-center text-[10px] font-bold text-emerald-700">
                  অ্যাপের হিসাব:{" "}
                  <span className="font-mono font-black">৳{fmt(sys.cash)}</span>
                </span>
                <div className="mt-1.5 flex items-center gap-1">
                  <span className="text-sm font-black text-emerald-800">৳</span>
                  <input
                    value={cashInput}
                    onChange={(e) => {
                      if (NUM_RE.test(e.target.value)) {
                        setCashInput(e.target.value);
                        setErr("");
                      }
                    }}
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="0"
                    className={`${inputCls} border-emerald-400 focus:border-emerald-600 focus:ring-emerald-200`}
                  />
                </div>
                <div className="text-center">{diffChip(cashDiff)}</div>
              </div>

              {/* Opening Bank */}
              <div className="rounded-xl bg-indigo-50 border border-indigo-300 p-3">
                <span className="text-[11px] font-bold text-indigo-800 block text-center">
                  প্রারম্ভিক ব্যাংক স্থিতি (Bank)
                </span>
                <span className="mt-1 block text-center text-[10px] font-bold text-indigo-700">
                  অ্যাপের হিসাব:{" "}
                  <span className="font-mono font-black">৳{fmt(sys.bank)}</span>
                </span>
                <div className="mt-1.5 flex items-center gap-1">
                  <span className="text-sm font-black text-indigo-800">৳</span>
                  <input
                    value={bankInput}
                    onChange={(e) => {
                      if (NUM_RE.test(e.target.value)) {
                        setBankInput(e.target.value);
                        setErr("");
                      }
                    }}
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="0"
                    className={`${inputCls} border-indigo-400 focus:border-indigo-600 focus:ring-indigo-200`}
                  />
                </div>
                <div className="text-center">{diffChip(bankDiff)}</div>
              </div>
            </div>

            {/* ম্যানুয়াল বদলালে নোট + রিসেট */}
            {isManual && (
              <div className="space-y-2 rounded-xl border-2 border-fuchsia-300 bg-fuchsia-50/70 p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-black text-fuchsia-900">
                    ✍️ ম্যানুয়াল ওপেনিং — এই সংখ্যাই আজকের ওপেনিং এবং পরের কর্মদিবসের ওপেনিং হিসেবে চলবে
                  </span>
                  <button
                    type="button"
                    onClick={resetToSystem}
                    className="shrink-0 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 transition hover:bg-slate-100 cursor-pointer"
                    title="অ্যাপের নিজের হিসাবে ফিরে যান"
                  >
                    ↺ সিস্টেম মান
                  </button>
                </div>
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="কারণ / নোট (ঐচ্ছিক) — যেমন: গত ছুটির দিনের হাতে নগদ সমন্বয়"
                  autoComplete="off"
                  className="w-full rounded-lg border border-fuchsia-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"
                />
              </div>
            )}
          </div>

          {err && (
            <div className="rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-800">
              {err}
            </div>
          )}

          <div className="rounded-xl bg-blue-50 border border-blue-200 p-3 text-xs text-blue-900 flex items-start gap-2">
            <span className="text-base shrink-0">ℹ️</span>
            <p className="leading-relaxed font-medium text-[11px] sm:text-xs">
              সাধারণত অ্যাপের দেখানো সংখ্যাটাই ঠিক থাকে — সেটা আগের কর্মদিবসের ক্লোজিং। ছুটির দিন
              বা হাতের হিসাবে মিল না থাকলে উপরের ঘরে <strong>হাতে টাইপ করে</strong> ওপেনিং বসিয়ে দিন।
              দিন শুরু করার পরেও <strong>Working-Day বারের ✏️ ওপেনিং</strong> বাটন থেকে যেকোনো সময়
              সংশোধন করা যাবে (Day Close করার আগ পর্যন্ত)।
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 text-xs font-bold transition cursor-pointer"
          >
            বাতিল
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={loading}
            className="rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-5 py-2 text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <span>{alreadyOpen ? "💾" : "☀️"}</span>
            <span>
              {loading
                ? "সেভ হচ্ছে..."
                : alreadyOpen
                ? isManual
                  ? "ওপেনিং সংশোধন করুন"
                  : "সেভ করুন"
                : isManual
                ? "ম্যানুয়াল ওপেনিং দিয়ে দিন শুরু করুন"
                : "নিশ্চিত করুন ও দিন শুরু করুন"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

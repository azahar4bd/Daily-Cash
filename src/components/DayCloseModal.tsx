import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { fmt } from "./DenominationPopup";
import { formatDisplay } from "./DatePicker";
import {
  getSummary,
  getReportPageFigures,
  isDayClosed,
  isDayOpen,
  saveDayClosure,
  isIntermediateBlockedDate,
} from "@/lib/storage";
import type { DayClosure } from "@/types";

const NOTES_LIST = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] as const;
const CASH_SHEET_DENOM_PREFIX = "cash_sheet_denom_";

const readQuantities = (date: string): Record<string, string> => {
  try {
    const raw = localStorage.getItem(`${CASH_SHEET_DENOM_PREFIX}${date}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch {}
  return {};
};

export default function DayCloseModal({
  isOpen,
  onClose,
  selectedDate,
  onDayClosed,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  onDayClosed?: () => void;
}) {
  const [closingCash, setClosingCash] = useState(0);
  const [closingBank, setClosingBank] = useState(0);
  const [denomTotal, setDenomTotal] = useState(0);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isOpen || !selectedDate) return;
    try {
      const rep = getReportPageFigures(selectedDate);
      setClosingCash(rep.reportCashInHand);
      setClosingBank(rep.reportBankBalance);

      const q = readQuantities(selectedDate);
      let total = 0;
      for (const n of NOTES_LIST) {
        const qty = parseInt(String(q[String(n)] || "0"), 10) || 0;
        total += qty * n;
      }
      total += Math.round(Number(q.coins || 0));
      total += Math.round(Number(q.revenueStamp || 0));
      total += Math.round(Number(q.pendingSlip || 0));
      setDenomTotal(total);
    } catch (e) {
      console.error(e);
    }
  }, [isOpen, selectedDate]);

  if (!isOpen) return null;

  const diff = denomTotal - closingCash;
  const blockedCheck = isIntermediateBlockedDate(selectedDate);

  const handleConfirm = () => {
    if (!isDayOpen(selectedDate)) {
      alert(`⚠️ ${selectedDate} তারিখে কোনো চলমান কর্মদিবস নেই। আগে Day Open করুন।`);
      onClose();
      return;
    }
    if (blockedCheck.blocked) {
      alert(blockedCheck.reason || "এই তারিখটি ব্লকড।");
      onClose();
      return;
    }

    setSaving(true);
    try {
      const sum = getSummary(selectedDate);
      const closure: DayClosure = {
        closeDate: selectedDate,
        openingCash: sum.prevCash,
        openingBank: sum.prevBank,
        closingCash,
        closingBank,
        totalReceive: sum.receive,
        totalPayment: sum.expense,
        denomination: readQuantities(selectedDate) as any,
        status: "closed",
        closedAt: new Date().toISOString(),
        closedBy: "Cashier",
        notes: diff === 0 ? "Matched" : `Difference: ${diff}`,
      };
      saveDayClosure(closure);
      if (onDayClosed) onDayClosed();
      onClose();
    } catch (err: any) {
      alert(err.message || "দিন ক্লোজ করতে সমস্যা হয়েছে।");
    } finally {
      setSaving(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-200 bg-linear-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs">
              🔒
            </span>
            <div>
              <h3 className="text-base font-black tracking-tight">Day Close (দিন সমাপ্তি)</h3>
              <p className="text-[11px] text-emerald-100">
                কর্মদিবসের হিসাব চূড়ান্তভাবে বন্ধ ও লক করা হবে
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
        <div className="p-5 space-y-3.5 text-slate-800">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                সমাপ্ত করার তারিখ (Working Date)
              </span>
              <span className="font-mono text-lg font-black text-slate-900 mt-0.5 block">
                {selectedDate}
              </span>
            </div>
            <span className="rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-black text-white shadow-xs">
              {formatDisplay(selectedDate)}
            </span>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 font-semibold">হাতে নগদ (Cash in Hand):</span>
              <span className="font-mono font-black text-emerald-700">{fmt(closingCash)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 font-semibold">ব্যাংক স্থিতি (Bank):</span>
              <span className="font-mono font-black text-indigo-700">{fmt(closingBank)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 font-semibold">নোট গণনা (Denomination):</span>
              <span className="font-mono font-black text-cyan-800">{fmt(denomTotal)}</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-1.5 font-bold">
              <span className="text-slate-700">পার্থক্য (Difference):</span>
              <span
                className={`font-mono font-black ${
                  diff === 0 ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {diff === 0 ? "0 (মিল আছে ✓)" : `${diff > 0 ? "+" : ""}${fmt(diff)}`}
              </span>
            </div>
          </div>

          {diff !== 0 ? (
            <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900">
              <div className="font-bold flex items-center gap-1.5 mb-1 text-rose-800">
                <span>⚠️</span>
                <span>সতর্কতা: ক্যাশ ও নোটের মধ্যে অমিল রয়েছে!</span>
              </div>
              <div>
                হাতে নগদ ও নোটের মোট গণনায় ৳{fmt(Math.abs(diff))} অমিল রয়েছে। আপনি কি নিশ্চিত যে এই
                অমিল রেখেই দিনটি ক্লোজ করতে চান?
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-900 font-medium">
              ✓ ক্যাশ ইন হ্যান্ড এবং ডেনোমিনেশন হিসাব শতভাগ মিলেছে। দিন ক্লোজ করার পর এই তারিখের
              হিসাব সম্পূর্ণ লক থাকবে।
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5">
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 text-xs font-bold transition cursor-pointer"
          >
            বাতিল
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={saving}
            className="rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2 text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <span>🔒</span>
            <span>{saving ? "ক্লোজ হচ্ছে..." : "হ্যাঁ, ডে ক্লোজ করুন"}</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

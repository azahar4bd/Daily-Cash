import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { fmt } from "./DenominationPopup";
import { formatDisplay } from "./DatePicker";
import {
  getSummary,
  isDayOpen,
  saveDayClosure,
  isIntermediateBlockedDate,
} from "@/lib/storage";
import type { DayClosure } from "@/types";

/**
 * 🔒 Day Close Modal
 * -----------------------------------------------------------
 * ⚠️ ক্যাশবুক / ডিনোমিনেশন / টাকা মেলানোর সাথে এর কোনো সম্পর্ক নেই।
 * ক্যাশবুক শুধু ফর্মালিটি ও প্রিন্টের জন্য — ক্যাশ সবসময় ১০০% মেলে।
 * এখানে শুধু কর্মদিবসটি বন্ধ (লক) করা হয়।
 */
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
  const [totalReceive, setTotalReceive] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isOpen || !selectedDate) return;
    try {
      const sum = getSummary(selectedDate);
      setTotalReceive(sum.receive || 0);
      setTotalPayment(sum.expense || 0);
    } catch (e) {
      console.error(e);
    }
  }, [isOpen, selectedDate]);

  if (!isOpen) return null;

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
        closingCash: sum.cash,
        closingBank: sum.bank,
        totalReceive: sum.receive,
        totalPayment: sum.expense,
        status: "closed",
        closedAt: new Date().toISOString(),
        closedBy: "Cashier",
        notes: "Day closed from Working-Day control",
      };
      saveDayClosure(closure);
      if (onDayClosed) onDayClosed();
      onClose();
    } catch (err: any) {
      alert(err.message || "দিন ক্লোজ করতে সমস্যা হয়েছে।");
    } finally {
      setSaving(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-200 bg-linear-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs">
              🔒
            </span>
            <div>
              <h3 className="text-base font-black tracking-tight">Day Close (দিন সমাপ্তি)</h3>
              <p className="text-[11px] text-emerald-100">কর্মদিবসটি বন্ধ ও লক করা হবে</p>
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
              <span className="text-slate-600 font-semibold">মোট রিসিভ:</span>
              <span className="font-mono font-black text-emerald-700">{fmt(totalReceive)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 font-semibold">মোট পেমেন্ট:</span>
              <span className="font-mono font-black text-rose-700">{fmt(totalPayment)}</span>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-900 font-medium leading-relaxed">
            ✓ নিশ্চিত করলে এই তারিখের কর্মদিবসটি বন্ধ (Day Closed) হয়ে যাবে এবং এই তারিখের
            রিসিভ, পেমেন্ট ও স্টাফ কালেকশন — সব এন্ট্রি সম্পূর্ণ লক হয়ে যাবে।
            <span className="block mt-1 text-emerald-800">
              পুনরায় কাজ করার প্রয়োজন হলে <strong>Working-Day বার</strong> থেকে{" "}
              <strong>Re-open Day</strong> করবেন।
            </span>
          </div>
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

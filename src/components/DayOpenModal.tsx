import { useState, useEffect } from "react";
import { getSummary, openDay, isDayClosed, getLocalDayClosures } from "@/lib/storage";
import { formatDisplay } from "./DatePicker";

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
  const [openingFigures, setOpeningFigures] = useState<{
    prevCash: number;
    prevBank: number;
    prevDate?: string;
    dayName: string;
  }>({
    prevCash: 0,
    prevBank: 0,
    dayName: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen || !selectedDate) return;
    try {
      const sum = getSummary(selectedDate);
      const [y, m, d] = selectedDate.split("-").map(Number);
      const dayObj = new Date(y, m - 1, d);
      const dayNames = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
      const dayName = !isNaN(dayObj.getDay()) ? dayNames[dayObj.getDay()] : "";

      setOpeningFigures({
        prevCash: sum.prevCash,
        prevBank: sum.prevBank,
        prevDate: sum.prevDate,
        dayName,
      });
    } catch (e) {
      console.error(e);
    }
  }, [isOpen, selectedDate]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (isDayClosed(selectedDate)) {
      alert(`⚠️ এই তারিখের (${selectedDate}) দিন সমাপ্ত (Day Closed) রয়েছে।`);
      onClose();
      return;
    }

    setLoading(true);
    try {
      openDay(selectedDate, "Cashier");
      if (onDayOpened) onDayOpened();
      onClose();
    } catch (err: any) {
      alert(err.message || "দিন শুরু করতে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-200 bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3.5 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs">
              ☀️
            </span>
            <div>
              <h3 className="text-base font-black tracking-tight">কর্মদিবস শুরু (Day Open)</h3>
              <p className="text-[11px] text-amber-100">
                নতুন কর্মদিবসের লেনদেন শুরু করার জন্য প্রারম্ভিক অনুমোদন
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
                শুরু করার তারিখ (Working Date)
              </span>
              <span className="font-mono text-lg font-black text-slate-900 mt-0.5 block">
                {selectedDate}{" "}
                <span className="text-sm font-sans font-bold text-amber-900">
                  ({openingFigures.dayName})
                </span>
              </span>
            </div>
            <span className="rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-black text-white shadow-xs">
              {formatDisplay(selectedDate)}
            </span>
          </div>

          {/* Opening Balances Breakdown */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-600">পূর্ববর্তী সমাপ্ত কর্মদিবস:</span>
              <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {openingFigures.prevDate || "প্রারম্ভিক দিন"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              {/* Opening Cash */}
              <div className="rounded-xl bg-emerald-50 border border-emerald-300 p-3 text-center">
                <span className="text-[11px] font-bold text-emerald-800 block">
                  প্রারম্ভিক ক্যাশ (Cash in Hand)
                </span>
                <span className="font-mono text-lg sm:text-xl font-black text-emerald-950 mt-1 block">
                  ৳ {Number(openingFigures.prevCash || 0).toLocaleString("en-IN")}
                </span>
              </div>

              {/* Opening Bank */}
              <div className="rounded-xl bg-indigo-50 border border-indigo-300 p-3 text-center">
                <span className="text-[11px] font-bold text-indigo-800 block">
                  প্রারম্ভিক ব্যাংক স্থিতি (Bank)
                </span>
                <span className="font-mono text-lg sm:text-xl font-black text-indigo-950 mt-1 block">
                  ৳ {Number(openingFigures.prevBank || 0).toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-blue-50 border border-blue-200 p-3 text-xs text-blue-900 flex items-start gap-2">
            <span className="text-base shrink-0">ℹ️</span>
            <p className="leading-relaxed font-medium text-[11px] sm:text-xs">
              দিন শুরু (Day Open) করার পর এই তারিখে স্বাভাবিকভাবে সকল রিসিভ, পেমেন্ট ও স্টাফ কালেকশন
              এন্ট্রি করা যাবে। কাজ শেষে ক্যাশবুক পেজ থেকে যথারীতি <strong>Day Close</strong> করবেন।
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5">
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
            <span>☀️</span>
            <span>{loading ? "ওপেন হচ্ছে..." : "নিশ্চিত করুন ও দিন শুরু করুন"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

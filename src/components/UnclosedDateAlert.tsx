import { useState, useEffect } from "react";
import { getAllDatesActivity } from "@/lib/storage";
import { formatDisplay } from "./DatePicker";
import type { DateActivity } from "@/types";

export default function UnclosedDateAlert({
  selectedDate,
  onSelectDate,
  onOpenTracker,
}: {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  onOpenTracker: () => void;
}) {
  const [unclosedDates, setUnclosedDates] = useState<DateActivity[]>([]);
  const [dismissed, setDismissed] = useState(false);

  const checkUnclosed = () => {
    try {
      const all = getAllDatesActivity();
      // Find past dates strictly before selectedDate that have transactions/reports but are not closed
      const unclosedPast = all.filter(
        (a) => a.date < selectedDate && !a.isClosed && (a.txCount > 0 || a.srCount > 0)
      );
      setUnclosedDates(unclosedPast);
    } catch {
      setUnclosedDates([]);
    }
  };

  useEffect(() => {
    setDismissed(false);
    checkUnclosed();
  }, [selectedDate]);

  useEffect(() => {
    const handleUpdate = () => {
      checkUnclosed();
    };
    window.addEventListener("tx-changed", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("tx-changed", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, [selectedDate]);

  if (dismissed || unclosedDates.length === 0) return null;

  const firstUnclosed = unclosedDates[0];

  return (
    <div className="mb-3 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3 sm:p-4 text-amber-950 shadow-md animate-in fade-in slide-in-from-top duration-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Left icon & text */}
        <div className="flex items-start gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs text-lg font-black animate-pulse">
            ⚠️
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-black text-amber-950 text-xs sm:text-sm">
                অসমাপ্ত দিনের লেনদেন সতর্কবার্তা!
              </span>
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-400">
                {unclosedDates.length} টি কর্মদিবস অমিল
              </span>
            </div>
            <p className="mt-1 text-[11px] sm:text-xs text-amber-900 leading-relaxed font-medium">
              আপনার বর্তমান তারিখ{" "}
              <strong className="font-mono text-blue-800">
                {formatDisplay(selectedDate) || selectedDate}
              </strong>
              -এর পূর্বে{" "}
              <strong className="font-mono text-rose-700 underline">
                {firstUnclosed.date} ({firstUnclosed.dayName})
              </strong>{" "}
              তারিখে লেনদেন রয়েছে কিন্তু <strong>দিন সমাপ্ত (Day Close)</strong> করা হয়নি। এটি কোনো ভুল
              এন্ট্রি হলে মুছে ফেলুন, অথবা কাজ হয়ে থাকলে দিন সমাপ্ত করুন।
            </p>
          </div>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
          <button
            type="button"
            onClick={() => onSelectDate(firstUnclosed.date)}
            className="rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 px-3.5 py-1.5 text-xs font-black text-white shadow-xs transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>📅</span>
            <span>{firstUnclosed.date} তারিখে যান</span>
          </button>
          <button
            type="button"
            onClick={onOpenTracker}
            className="rounded-xl border border-amber-400 bg-white hover:bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-950 shadow-2xs transition cursor-pointer"
            title="সকল তারিখের বিস্তারিত তালিকা"
          >
            📋 ট্র্যাকার
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-amber-700 hover:bg-amber-200/60 transition cursor-pointer font-bold text-xs"
            title="লুকিয়ে রাখুন"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

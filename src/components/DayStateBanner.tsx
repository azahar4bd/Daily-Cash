import { useState, useEffect } from "react";
import { getDayState, isIntermediateBlockedDate } from "@/lib/storage";
import type { DayState } from "@/types";
import { formatDisplay } from "./DatePicker";

export default function DayStateBanner({
  selectedDate,
  onOpenDayModal,
  onNavigateTab,
}: {
  selectedDate: string;
  onOpenDayModal: () => void;
  onNavigateTab?: (tab: string) => void;
}) {
  const [dayState, setDayState] = useState<DayState>("not_opened");

  const checkState = () => {
    setDayState(getDayState(selectedDate));
  };

  useEffect(() => {
    checkState();
  }, [selectedDate]);

  useEffect(() => {
    const handleUpdate = () => checkState();
    window.addEventListener("tx-changed", handleUpdate);
    window.addEventListener("day-close-changed", handleUpdate);
    window.addEventListener("day-open-changed", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("tx-changed", handleUpdate);
      window.removeEventListener("day-close-changed", handleUpdate);
      window.removeEventListener("day-open-changed", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, [selectedDate]);

  const blockedCheck = isIntermediateBlockedDate(selectedDate);

  if (dayState === "not_opened") {
    return (
      <div className="mb-4 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3.5 sm:p-4 text-amber-950 shadow-sm animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-lg font-black shadow-xs">
              ☀️
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-amber-950 text-xs sm:text-sm">
                  কর্মদিবস এখনও শুরু (Day Open) করা হয়নি!
                </span>
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-300">
                  Not Opened
                </span>
              </div>
              <p className="mt-0.5 text-[11px] sm:text-xs text-amber-800 font-medium leading-relaxed">
                <strong className="font-mono text-slate-900">{selectedDate}</strong> (
                {formatDisplay(selectedDate)})-এ কোনো রিসিভ, পেমেন্ট বা স্টাফ রিপোর্ট এন্ট্রি করার
                পূর্বে কর্মদিবসটি শুরু (Day Open) করুন।
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenDayModal}
            disabled={blockedCheck.blocked}
            className="self-end sm:self-center shrink-0 rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 active:scale-98 text-white px-4 py-2 text-xs font-black shadow-sm transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>☀️</span>
            <span>কর্মদিবস শুরু (Day Open) করুন</span>
          </button>
        </div>
      </div>
    );
  }

  if (dayState === "closed") {
    return (
      <div className="mb-4 rounded-2xl border border-rose-300 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">🔒</span>
          <span>
            এই তারিখের ({selectedDate}) দিন সমাপ্ত (Day Closed) রয়েছে। হিসাব লক ও সুরক্ষিত আছে।
          </span>
        </div>
        {onNavigateTab && (
          <button
            type="button"
            onClick={() => onNavigateTab("cashbook")}
            className="text-xs text-rose-700 hover:text-rose-900 hover:underline font-bold cursor-pointer whitespace-nowrap ml-2"
          >
            ক্যাশবুকে Re-open করুন ➔
          </button>
        )}
      </div>
    );
  }

  // dayState === 'open'
  return (
    <div className="mb-4 rounded-xl border border-emerald-300 bg-emerald-50/70 px-3.5 py-1.5 text-xs text-emerald-900 shadow-2xs flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-bold">
          ☀️ {selectedDate} কর্মদিবস চালু রয়েছে (Day Open)
        </span>
        <span className="text-slate-500 text-[11px] hidden sm:inline">
          — সারাদিনের কাজ শেষে ক্যাশবুক পেজ থেকে Day Close করবেন
        </span>
      </div>
      <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase">
        Open ✓
      </span>
    </div>
  );
}

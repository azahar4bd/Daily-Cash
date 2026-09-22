import { useState, useEffect, useRef } from "react";
import { getDayState, isIntermediateBlockedDate, reopenDay, getSummary, getDayOpen } from "@/lib/storage";
import type { DayState } from "@/types";
import { formatDisplay } from "./DatePicker";
import { fmt } from "./DenominationPopup";

/**
 * ⭐ SINGLE CONTROL POINT for the Working Day (কর্মদিবস)
 * ----------------------------------------------------
 * Day Open ➜ Day Close ➜ Re-open — সবকটি কন্ট্রোল একটিই জায়গায়।
 * ক্যাশবুক পেজে কোনো Open/Close বাটন নেই; শুধু Lock টা কার্যকর থাকে।
 */
export default function DayStateBanner({
  selectedDate,
  onOpenDayModal,
}: {
  selectedDate: string;
  onOpenDayModal: () => void;
}) {
  const [dayState, setDayState] = useState<DayState>("not_opened");
  const [openingCash, setOpeningCash] = useState(0);
  const [openingBank, setOpeningBank] = useState(0);
  /** ✍️ ওপেনিং হাতে বসানো হয়েছে কি না */
  const [manualOpen, setManualOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  const refresh = () => {
    setDayState(getDayState(selectedDate));
    try {
      const sum = getSummary(selectedDate);
      setOpeningCash(sum.prevCash || 0);
      setOpeningBank(sum.prevBank || 0);
      setManualOpen(Boolean(getDayOpen(selectedDate)?.manualOpening));
    } catch {}
  };

  useEffect(() => {
    refresh();
  }, [selectedDate]);

  useEffect(() => {
    const handleUpdate = () => refresh();
    window.addEventListener("tx-changed", handleUpdate);
    window.addEventListener("day-close-changed", handleUpdate);
    window.addEventListener("day-open-changed", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    const jumpHere = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setFlash(true);
      window.setTimeout(() => setFlash(false), 2400);
    };
    window.addEventListener("scroll-to-day-bar", jumpHere);

    return () => {
      window.removeEventListener("tx-changed", handleUpdate);
      window.removeEventListener("day-close-changed", handleUpdate);
      window.removeEventListener("day-open-changed", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
      window.removeEventListener("scroll-to-day-bar", jumpHere);
    };
  }, [selectedDate]);

  const blockedCheck = isIntermediateBlockedDate(selectedDate);

  const handleReopen = () => {
    if (
      confirm(
        `আপনি কি নিশ্চিত যে ${selectedDate} তারিখের হিসাবটি পুনরায় আনলক/ওপেন (Re-open) করতে চান?`
      )
    ) {
      reopenDay(selectedDate);
      refresh();
      window.dispatchEvent(new Event("day-open-changed"));
      window.dispatchEvent(new Event("day-close-changed"));
    }
  };

  /* ───────────────────────── A. NOT OPENED ───────────────────────── */
  if (dayState === "not_opened") {
    return (
      <div ref={barRef} className={`mb-4 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3.5 sm:p-4 text-amber-950 shadow-sm animate-in fade-in duration-200 ${flash ? "day-bar-flash" : ""}`}>
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
              <p className="mt-1 text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-0.5 inline-block font-mono">
                {formatDisplay(selectedDate)} • প্রারম্ভিক ক্যাশ: ৳ {fmt(openingCash)} • প্রারম্ভিক ব্যাংক: ৳ {fmt(openingBank)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenDayModal}
            disabled={blockedCheck.blocked}
            className="self-end sm:self-center shrink-0 rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 active:scale-98 text-white px-4 py-2 text-xs font-black shadow-sm transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed animate-pulse"
            title={
              blockedCheck.blocked
                ? blockedCheck.reason || "এই তারিখে Day Open করা যাবে না"
                : "কর্মদিবস শুরু করুন"
            }
          >
            <span>☀️</span>
            <span>
              {blockedCheck.blocked ? "তারিখ ব্লকড" : "কর্মদিবস শুরু (Day Open) করুন"}
            </span>
          </button>
        </div>
      </div>
    );
  }

  /* ───────────────────────── B. CLOSED ───────────────────────── */
  if (dayState === "closed") {
    return (
      <div ref={barRef} className={`mb-4 rounded-2xl border border-rose-300 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 ${flash ? "day-bar-flash" : ""}`}>
        <div className="flex items-center gap-2">
          <span className="text-base">🔒</span>
          <span>
            এই তারিখের ({selectedDate}) দিন সমাপ্ত (Day Closed) রয়েছে। হিসাব লক ও সুরক্ষিত আছে —
            কোনো এন্ট্রি বা পরিবর্তন করা যাবে না।
          </span>
        </div>
        <button
          type="button"
          onClick={handleReopen}
          className="shrink-0 self-end sm:self-center rounded-xl bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 text-xs font-black shadow-xs transition cursor-pointer flex items-center gap-1.5"
          title="দিনটি পুনরায় আনলক/ওপেন করুন"
        >
          <span>🔓</span>
          <span>Re-open Day</span>
        </button>
      </div>
    );
  }

  /* ───────────────────────── C. OPEN ───────────────────────── */
  return (
    <div ref={barRef} className={`mb-4 rounded-xl border border-emerald-300 bg-emerald-50/70 px-3.5 py-2 text-xs text-emerald-900 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${flash ? "day-bar-flash" : ""}`}>
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-bold">
          ☀️ {selectedDate} কর্মদিবস চালু রয়েছে (Day Open)
        </span>
        <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase">
          Open ✓
        </span>
        {manualOpen && (
          <span
            className="rounded border border-fuchsia-300 bg-fuchsia-50 px-1.5 py-0.5 text-[10px] font-black text-fuchsia-700"
            title="এই দিনের প্রারম্ভিক ক্যাশ/ব্যাংক হাতে টাইপ করে বসানো হয়েছে"
          >
            ✍️ ম্যানুয়াল ওপেনিং
          </span>
        )}
        <span className="text-slate-500 text-[11px] hidden md:inline">
          — দিনের কাজ শেষে এখান থেকেই Day Close করুন
        </span>
      </div>
      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-day-open-modal"))}
          className="rounded-xl border border-emerald-400 bg-white px-3 py-1.5 text-xs font-black text-emerald-800 shadow-xs transition hover:bg-emerald-100 cursor-pointer flex items-center gap-1.5"
          title="প্রারম্ভিক ক্যাশ/ব্যাংক দেখুন বা হাতে টাইপ করে সংশোধন করুন"
        >
          <span>✏️</span>
          <span>ওপেনিং</span>
        </button>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-day-close-modal"))}
          disabled={blockedCheck.blocked}
          className="rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3.5 py-1.5 text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
          title={
            blockedCheck.blocked
              ? "মধ্যবর্তী বন্ধের দিন (Day Close করা যাবে না)"
              : "এই তারিখের হিসাব চূড়ান্তভাবে বন্ধ ও লক করুন"
          }
        >
          <span>{blockedCheck.blocked ? "🚫" : "🔒"}</span>
          <span>{blockedCheck.blocked ? "তারিখ ব্লকড" : "Day Close করুন"}</span>
        </button>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { getAllDatesActivity, isIntermediateBlockedDate } from "@/lib/storage";
import { formatDisplay } from "./DatePicker";
import type { DateActivity } from "@/types";

export default function DateAuditTrackerModal({
  isOpen,
  onClose,
  selectedDate,
  onSelectDate,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  onSelectDate: (date: string) => void;
}) {
  const [activities, setActivities] = useState<DateActivity[]>([]);

  const refresh = () => {
    setActivities(getAllDatesActivity());
  };

  useEffect(() => {
    if (isOpen) {
      refresh();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => {
      if (isOpen) refresh();
    };
    window.addEventListener("tx-changed", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("tx-changed", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700 text-lg shadow-xs">
              📅
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-black text-slate-900">
                কর্মদিবস ও লেনদেন অডিট ট্র্যাকার (Date Status Tracker)
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500">
                কোনো তারিখে ভুল এন্ট্রি হয়েছে কি না বা দিন সমাপ্ত (Day Close) বাকি আছে কি না তা সহজে যাচাই করুন
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-rose-100 hover:text-rose-700 transition font-bold text-sm cursor-pointer"
            title="বন্ধ করুন"
          >
            ✕
          </button>
        </div>

        {/* Legend / Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-amber-50/60 px-4 py-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1 font-bold text-emerald-800">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block"></span>
              সবুজ = দিন সমাপ্ত (Day Closed)
            </span>
            <span className="flex items-center gap-1 font-bold text-amber-800">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block animate-pulse"></span>
              কমলা = অসমাপ্ত লেনদেন (Unclosed)
            </span>
          </div>
          <span className="text-slate-600 font-medium">
            বর্তমান সিলেক্ট করা তারিখ:{" "}
            <span className="font-mono font-bold text-blue-700">{selectedDate}</span>
          </span>
        </div>

        {/* Scrollable Table Area */}
        <div className="flex-1 overflow-auto p-3 sm:p-4">
          {activities.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs sm:text-sm">
              এখনও কোনো লেনদেনের তথ্য পাওয়া যায়নি।
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px]">
                    <th className="p-2.5 text-center w-12">ক্র.</th>
                    <th className="p-2.5">তারিখ ও বার</th>
                    <th className="p-2.5 text-center">লেনদেন সংখ্যা</th>
                    <th className="p-2.5 text-right">মোট জমা (রিসিভ)</th>
                    <th className="p-2.5 text-right">মোট খরচ (পেমেন্ট)</th>
                    <th className="p-2.5 text-center">স্ট্যাটাস</th>
                    <th className="p-2.5 text-center w-28">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {activities.map((act, idx) => {
                    const isCurrent = act.date === selectedDate;
                    const isUnclosedWarning = !act.isClosed && (act.txCount > 0 || act.srCount > 0);

                    return (
                      <tr
                        key={act.date}
                        className={`transition ${
                          isCurrent
                            ? "bg-blue-50/80 font-semibold"
                            : isUnclosedWarning
                            ? "bg-amber-50/40 hover:bg-amber-50"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <td className="p-2.5 text-center text-slate-400 font-mono text-[11px]">
                          {idx + 1}
                        </td>
                        <td className="p-2.5 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono font-bold text-slate-900">
                              {act.date}
                            </span>
                            <span className="text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                              {act.dayName}
                            </span>
                            {isCurrent && (
                              <span className="rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                Active
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-2.5 text-center whitespace-nowrap font-mono">
                          <span className="text-emerald-700 font-bold">{act.receiveCount} Rec</span>
                          {" / "}
                          <span className="text-rose-700 font-bold">{act.paymentCount} Pay</span>
                          {act.srCount > 0 && (
                            <span className="text-purple-700 text-[10px] ml-1">
                              ({act.srCount} SR)
                            </span>
                          )}
                        </td>
                        <td className="p-2.5 text-right font-mono font-bold text-emerald-700 whitespace-nowrap">
                          {act.receiveTotal > 0
                            ? Number(act.receiveTotal).toLocaleString("en-IN")
                            : "—"}
                        </td>
                        <td className="p-2.5 text-right font-mono font-bold text-rose-700 whitespace-nowrap">
                          {act.paymentTotal > 0
                            ? Number(act.paymentTotal).toLocaleString("en-IN")
                            : "—"}
                        </td>
                        <td className="p-2.5 text-center whitespace-nowrap">
                          {act.isClosed ? (
                            <div className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                              <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                              <span>সমাপ্ত (Closed)</span>
                            </div>
                          ) : act.isOpen ? (
                            <div className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-900 border border-blue-300">
                              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                              <span>☀️ চলমান (Day Open)</span>
                            </div>
                          ) : isIntermediateBlockedDate(act.date).blocked ? (
                            <div className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-900 border border-rose-300">
                              <span className="h-2 w-2 rounded-full bg-rose-600"></span>
                              <span>🚫 ব্লকড দিন</span>
                            </div>
                          ) : isUnclosedWarning ? (
                            <div className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-900 border border-amber-300">
                              <span className="h-2 w-2 rounded-full bg-amber-600 animate-ping"></span>
                              <span>অসমাপ্ত (Unclosed)</span>
                            </div>
                          ) : (
                            <span className="text-slate-400 text-[11px]">শুরু হয়নি (Not Opened)</span>
                          )}
                        </td>
                        <td className="p-2.5 text-center whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => {
                              onSelectDate(act.date);
                              onClose();
                            }}
                            className={`rounded-lg px-2.5 py-1 text-xs font-bold transition shadow-xs cursor-pointer ${
                              isCurrent
                                ? "bg-slate-200 text-slate-700 cursor-default"
                                : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
                            }`}
                          >
                            {isCurrent ? "চলমান" : "এই তারিখে যান ➔"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
          <p className="text-[11px] text-slate-500">
            টিপস: কোনো বন্ধের দিনে ভুল এন্ট্রি হলে সেই তারিখে গিয়ে সহজেই লেনদেনগুলো দেখে নিশ্চিত বা ডিলিট করতে পারবেন।
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-800 px-4 py-1.5 text-xs font-bold text-white hover:bg-slate-700 transition cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}

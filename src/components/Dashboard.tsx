import { useEffect, useState } from "react";
import { fmt } from "./DenominationPopup";
import { formatDisplay } from "./DatePicker";
import { getSummary } from "@/lib/storage";
import type { Summary } from "@/types";

export default function Dashboard({ selectedDate }: { selectedDate: string }) {
  const [s, setS] = useState<Summary | null>(null);

  const load = () => {
    const data = getSummary(selectedDate);
    setS(data);
  };

  useEffect(() => {
    load();
    window.addEventListener("tx-changed", load);
    return () => window.removeEventListener("tx-changed", load);
  }, [selectedDate]);

  const Card = ({
    label,
    bengaliLabel,
    value,
    cls,
    subText,
  }: {
    label: string;
    bengaliLabel?: string;
    value: number;
    cls: string;
    subText?: string;
  }) => (
    <div className={`rounded-xl p-2 text-white shadow-xs sm:p-2.5 ${cls}`}>
      <div className="flex items-center justify-between text-[11px] font-semibold opacity-90 truncate">
        <span className="truncate">{label}</span>
        {bengaliLabel && (
          <span className="text-[10px] opacity-80 ml-1 hidden sm:inline">
            ({bengaliLabel})
          </span>
        )}
      </div>
      <div className="mt-0.5 truncate font-mono text-sm font-black sm:text-base">
        {fmt(value)}
      </div>
      {subText && <div className="text-[9px] opacity-75 truncate">{subText}</div>}
    </div>
  );

  const staffList = ["monir", "sakib", "mintu", "alamgir"];
  const totalStaffReceive = staffList.reduce(
    (acc, p) => acc + (s?.persons?.[p] ?? 0),
    0
  );

  return (
    <div className="mb-4 rounded-2xl bg-white p-3 shadow-sm border border-slate-200">
      {/* Top 5 Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {/* Box 1: Display Date Only */}
        <div className="col-span-2 sm:col-span-1 flex flex-col justify-center rounded-xl border border-slate-300 bg-slate-50 p-2 sm:p-2.5">
          <div className="text-[11px] font-semibold text-slate-500">Date</div>
          <div className="truncate font-mono text-xs font-black text-slate-900 sm:text-sm">
            {formatDisplay(selectedDate) || selectedDate}
          </div>
        </div>

        {/* Box 2: Cash in Hand (গত দিনের হাতে নগদ + আজ রিসিভ কৃত টাকা - আজ পেমেন্ট কৃত টাকা) */}
        <Card
          label="Cash in Hand"
          bengaliLabel="হাতে নগদ"
          value={s?.cash ?? 0}
          cls="bg-emerald-600"
          subText={`Prev: ${fmt(s?.prevCash ?? 0)}`}
        />

        {/* Box 3: Bank Balance (গতদিনের ব্যাংক ব্যালেন্স + আজকে ব্যাংকে জমা - আজকে ব্যাংক থেকে উত্তোলন) */}
        <Card
          label="Bank Balance"
          bengaliLabel="ব্যাংক ব্যালেন্স"
          value={s?.bank ?? 0}
          cls="bg-indigo-600"
          subText={`Prev: ${fmt(s?.prevBank ?? 0)}`}
        />

        {/* Box 4: Total Receive (গত দিনের হাতে নগদ সহ মোট রিসিবকৃত টাকা) */}
        <Card
          label="Total Receive"
          bengaliLabel="মোট রিসিভ"
          value={s?.receive ?? 0}
          cls="bg-green-700"
          subText={`Today: ${fmt(s?.todayReceiveOnly ?? 0)}`}
        />

        {/* Box 5: Total Payment (আজকে মোট পেমেন্ট কৃত টাকা) */}
        <Card
          label="Total Payment"
          bengaliLabel="মোট পেমেন্ট"
          value={s?.expense ?? 0}
          cls="bg-rose-600"
          subText={`Today: ${fmt(s?.todayPayment ?? 0)}`}
        />
      </div>

      {/* Staff wise row: আজকের রিসিভ কৃত মোট টাকা */}
      <div className="mt-2.5 pt-2 border-t border-slate-100">
        <div className="mb-1.5 flex items-center justify-between px-1">
          <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
            <span>👥 Staff Wise</span>
            <span className="text-[10px] font-normal text-slate-500 hidden sm:inline">
              (আজকের রিসিভকৃত মোট টাকা)
            </span>
          </div>
          <div className="text-xs font-mono font-black text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
            Total: {fmt(totalStaffReceive)}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Card label="Monir" value={s?.persons?.monir ?? 0} cls="bg-sky-600" />
          <Card label="Sakib" value={s?.persons?.sakib ?? 0} cls="bg-sky-600" />
          <Card label="Mintu" value={s?.persons?.mintu ?? 0} cls="bg-sky-600" />
          <Card label="Alamgir" value={s?.persons?.alamgir ?? 0} cls="bg-sky-600" />
        </div>
      </div>
    </div>
  );
}

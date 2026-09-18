import { useEffect, useState } from "react";
import { fmt } from "./DenominationPopup";
import { formatDisplay } from "./DatePicker";
import { getSummary, isDayClosed } from "@/lib/storage";
import type { Summary } from "@/types";

export default function Dashboard({ selectedDate }: { selectedDate: string }) {
  const [s, setS] = useState<Summary | null>(null);
  const [closed, setClosed] = useState(false);

  const load = () => {
    const data = getSummary(selectedDate);
    setS(data);
    setClosed(isDayClosed(selectedDate));
  };

  useEffect(() => {
    load();
    const onTx = () => load();
    const onDayClose = () => load();
    window.addEventListener("tx-changed", onTx);
    window.addEventListener("day-close-changed", onDayClose);
    return () => {
      window.removeEventListener("tx-changed", onTx);
      window.removeEventListener("day-close-changed", onDayClose);
    };
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
    <div className={`rounded-xl px-2.5 py-1.5 text-white shadow-xs flex items-center justify-between gap-2 ${cls}`}>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1 text-[11px] font-bold opacity-95 truncate">
          <span className="truncate">{label}</span>
          {bengaliLabel && (
            <span className="text-[10px] opacity-80 hidden md:inline font-normal">
              ({bengaliLabel})
            </span>
          )}
        </div>
        {subText && <div className="text-[9px] opacity-80 truncate">{subText}</div>}
      </div>
      <div className="shrink-0 font-mono text-xs sm:text-sm font-black text-right">
        {fmt(value)}
      </div>
    </div>
  );

  const StaffCard = ({ name, value }: { name: string; value: number }) => (
    <div className="rounded-lg bg-sky-600 px-2.5 py-1 text-white shadow-xs flex items-center justify-between gap-1.5">
      <span className="text-[11px] font-bold truncate opacity-95">{name}</span>
      <span className="font-mono text-xs font-black text-right">{fmt(value)}</span>
    </div>
  );

  const staffList = ["monir", "sakib", "mintu", "alamgir"];
  const totalStaffReceive = staffList.reduce(
    (acc, p) => acc + (s?.persons?.[p] ?? 0),
    0
  );

  return (
    <div className="mb-3 rounded-2xl bg-white p-2.5 sm:p-3 shadow-sm border border-slate-200">
      {/* Top 5 Compact Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2">
        {/* Box 1: Display Date Only + Day Close Badge */}
        <div className="col-span-2 sm:col-span-1 flex items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-2.5 py-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-500">Date</span>
            {closed && (
              <span className="rounded bg-rose-100 px-1.5 py-0.2 text-[9px] font-black text-rose-700 border border-rose-300">
                🔒 Closed
              </span>
            )}
          </div>
          <div className="truncate font-mono text-xs font-black text-slate-900">
            {formatDisplay(selectedDate) || selectedDate}
          </div>
        </div>

        {/* Box 2: Cash in Hand */}
        <Card
          label="Cash in Hand"
          bengaliLabel="হাতে নগদ"
          value={s?.cash ?? 0}
          cls="bg-emerald-600"
          subText={`Prev: ${fmt(s?.prevCash ?? 0)}`}
        />

        {/* Box 3: Bank Balance */}
        <Card
          label="Bank Balance"
          bengaliLabel="ব্যাংক ব্যালেন্স"
          value={s?.bank ?? 0}
          cls="bg-indigo-600"
          subText={`Prev: ${fmt(s?.prevBank ?? 0)}`}
        />

        {/* Box 4: Total Receive */}
        <Card
          label="Total Receive"
          bengaliLabel="মোট রিসিভ"
          value={s?.receive ?? 0}
          cls="bg-green-700"
          subText={`Today: ${fmt(s?.todayReceiveOnly ?? 0)}`}
        />

        {/* Box 5: Total Payment */}
        <Card
          label="Total Payment"
          bengaliLabel="মোট পেমেন্ট"
          value={s?.expense ?? 0}
          cls="bg-rose-600"
          subText={`Today: ${fmt(s?.todayPayment ?? 0)}`}
        />
      </div>

      {/* Staff wise row: আজকের রিসিভ কৃত মোট টাকা */}
      <div className="mt-2 pt-1.5 border-t border-slate-100">
        <div className="mb-1 flex items-center justify-between px-1">
          <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
            <span>👥 Staff Wise</span>
            <span className="text-[10px] font-normal text-slate-500 hidden sm:inline">
              (আজকের রিসিভকৃত মোট টাকা)
            </span>
          </div>
          <div className="text-[11px] font-mono font-black text-sky-800 bg-sky-50 px-2 py-0.2 rounded border border-sky-200">
            Total: {fmt(totalStaffReceive)}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          <StaffCard name="Monir" value={s?.persons?.monir ?? 0} />
          <StaffCard name="Sakib" value={s?.persons?.sakib ?? 0} />
          <StaffCard name="Mintu" value={s?.persons?.mintu ?? 0} />
          <StaffCard name="Alamgir" value={s?.persons?.alamgir ?? 0} />
        </div>
      </div>
    </div>
  );
}

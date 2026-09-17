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

  const Card = ({ label, value, cls }: { label: string; value: number; cls: string }) => (
    <div className={`rounded-xl p-2 text-white shadow-xs sm:p-2.5 ${cls}`}>
      <div className="text-[11px] font-semibold opacity-90 truncate">{label}</div>
      <div className="mt-0.5 truncate font-mono text-sm font-black sm:text-base">{fmt(value)}</div>
    </div>
  );

  return (
    <div className="mb-4 rounded-2xl bg-white p-3 shadow-sm border border-slate-200">
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {/* Box 1: Display Date Only */}
        <div className="flex flex-col justify-center rounded-xl border border-slate-300 bg-slate-50 p-2 sm:p-2.5">
          <div className="text-[11px] font-semibold text-slate-500">Date</div>
          <div className="truncate font-mono text-xs font-black text-slate-900 sm:text-sm">
            {formatDisplay(selectedDate) || selectedDate}
          </div>
        </div>
        <Card label="Cash in Hand" value={s?.cash ?? 0} cls="bg-emerald-600" />
        <Card label="Bank Balance" value={s?.bank ?? 0} cls="bg-indigo-600" />
        <Card label="Total Received" value={s?.receive ?? 0} cls="bg-green-700" />
        <Card label="Total Expense" value={s?.expense ?? 0} cls="bg-rose-600" />
      </div>
      {/* Officer collection row */}
      <div className="grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-slate-100">
        <Card label="Monir" value={s?.persons?.monir ?? 0} cls="bg-sky-600" />
        <Card label="Sakib" value={s?.persons?.sakib ?? 0} cls="bg-sky-600" />
        <Card label="Mintu" value={s?.persons?.mintu ?? 0} cls="bg-sky-600" />
        <Card label="Alamgir" value={s?.persons?.alamgir ?? 0} cls="bg-sky-600" />
      </div>
    </div>
  );
}

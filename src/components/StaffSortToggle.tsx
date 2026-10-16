import { useState } from "react";
import { STAFF_SORT_KEY } from "@/lib/sortOrder";
import type { StaffSortMode } from "@/lib/sortOrder";

/** 🆕 v1.4.167: স্টাফ-সর্ট শেয়ার্ড টগল — CategoryManager + Dashboard একই পছন্দ শেয়ার করে (localStorage) */
export function useStaffSort(): [StaffSortMode, (m: StaffSortMode) => void] {
  const [mode, setMode] = useState<StaffSortMode>(() => {
    try {
      const v = localStorage.getItem(STAFF_SORT_KEY);
      return v === "manual" || v === "name-asc" || v === "name-desc" ? v : "manual";
    } catch {
      return "manual";
    }
  });
  const update = (m: StaffSortMode) => {
    setMode(m);
    try { localStorage.setItem(STAFF_SORT_KEY, m); } catch {}
  };
  return [mode, update];
}

const MODES: { v: StaffSortMode; label: string; hint: string }[] = [
  { v: "manual", label: "🖐️ ম্যানুয়াল", hint: "ফিক্সড/আপনার ক্রম" },
  { v: "name-asc", label: "A→Z", hint: "নাম আগে→পরে" },
  { v: "name-desc", label: "Z→A", hint: "নাম পরে→আগে" },
];

export default function StaffSortToggle({
  mode,
  onChange,
  compact = false,
}: {
  mode: StaffSortMode;
  onChange: (m: StaffSortMode) => void;
  compact?: boolean;
}) {
  return (
    <div className="inline-flex rounded-md border border-indigo-300 bg-white overflow-hidden shadow-xs" title="স্টাফ সাজানোর ক্রম">
      {MODES.map((m) => (
        <button
          key={m.v}
          title={m.hint}
          onClick={() => onChange(m.v)}
          className={`${compact ? "px-1 py-[1px] text-[8.5px]" : "px-1.5 py-0.5 text-[10px]"} font-bold transition-colors ${
            mode === m.v ? "bg-indigo-600 text-white" : "bg-white text-indigo-700 hover:bg-indigo-50"
          }`}
        >
          {compact ? m.label.replace(" ম্যানুয়াল", "") : m.label}
        </button>
      ))}
    </div>
  );
}

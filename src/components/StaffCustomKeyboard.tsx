import React from "react";
import { fmt } from "./DenominationPopup";

export type StaffFieldKey =
  | "staffName"
  | "loan"
  | "rebate"
  | "savings"
  | "dps"
  | "admission"
  | "passbook"
  | "savingsAdjust"
  | "nogodReturn";

export interface StaffFieldDef {
  key: StaffFieldKey;
  label: string;
  bn: string;
  isNumeric: boolean;
  color?: string;
}

export const STAFF_FIELDS: StaffFieldDef[] = [
  { key: "staffName", label: "Staff Name", bn: "স্টাফ", isNumeric: false },
  { key: "loan", label: "Loan", bn: "ঋণ", isNumeric: true, color: "text-amber-300" },
  { key: "rebate", label: "Rebate", bn: "রিবেট", isNumeric: true, color: "text-amber-200" },
  { key: "savings", label: "Savings", bn: "সঞ্চয়", isNumeric: true, color: "text-emerald-300" },
  { key: "dps", label: "DPS", bn: "ডিপিএস", isNumeric: true, color: "text-sky-300" },
  { key: "admission", label: "Admission", bn: "ভর্তি", isNumeric: true, color: "text-cyan-300" },
  { key: "passbook", label: "Passbook", bn: "পাশবই", isNumeric: true, color: "text-indigo-300" },
  { key: "savingsAdjust", label: "Savings Adjust", bn: "সঞ্চয় ফেরত", isNumeric: true, color: "text-rose-300" },
  { key: "nogodReturn", label: "Nogod Return", bn: "নগদ ফেরত", isNumeric: true, color: "text-rose-400" },
];

interface StaffCustomKeyboardProps {
  open: boolean;
  activeField: StaffFieldKey;
  values: Record<StaffFieldKey, string>;
  staffList: string[];
  onFieldSelect: (field: StaffFieldKey) => void;
  onValueChange: (field: StaffFieldKey, val: string) => void;
  onSave: () => void;
  onReset: () => void;
  onClose: () => void;
}

export default function StaffCustomKeyboard({
  open,
  activeField,
  values,
  staffList,
  onFieldSelect,
  onValueChange,
  onSave,
  onReset,
  onClose,
}: StaffCustomKeyboardProps) {
  if (!open) return null;

  const currentIndex = STAFF_FIELDS.findIndex((f) => f.key === activeField);
  const currentDef = STAFF_FIELDS[currentIndex] || STAFF_FIELDS[0];
  const currentValue = values[activeField] || "";

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + STAFF_FIELDS.length) % STAFF_FIELDS.length;
    onFieldSelect(STAFF_FIELDS[prevIndex].key);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % STAFF_FIELDS.length;
    onFieldSelect(STAFF_FIELDS[nextIndex].key);
  };

  const handleDigit = (d: string) => {
    if (activeField === "staffName") return;
    if (!currentValue || currentValue === "0") {
      onValueChange(activeField, d);
    } else {
      onValueChange(activeField, currentValue + d);
    }
  };

  const handleDoubleZero = () => {
    if (activeField === "staffName") return;
    if (!currentValue || currentValue === "0") {
      onValueChange(activeField, "0");
    } else {
      onValueChange(activeField, currentValue + "00");
    }
  };

  const handleTripleZero = () => {
    if (activeField === "staffName") return;
    if (!currentValue || currentValue === "0") {
      onValueChange(activeField, "0");
    } else {
      onValueChange(activeField, currentValue + "000");
    }
  };

  const handleBackspace = () => {
    if (activeField === "staffName") {
      onValueChange("staffName", "");
      return;
    }
    if (currentValue.length <= 1) {
      onValueChange(activeField, "");
    } else {
      onValueChange(activeField, currentValue.slice(0, -1));
    }
  };

  const handleClear = () => {
    onValueChange(activeField, "");
  };

  const handleStaffSelect = (staff: string) => {
    onValueChange("staffName", staff);
    // Auto jump to loan
    onFieldSelect("loan");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 text-white shadow-2xl border-t-4 border-indigo-600 backdrop-blur-md animate-in slide-in-from-bottom duration-200">
      <div className="mx-auto max-w-xl px-2 sm:px-3 pt-2 pb-3">
        {/* Top Control Bar: Active Field Info + Quick Navigation & Close */}
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-xs sm:text-sm font-black text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30 whitespace-nowrap">
              ⌨️ {currentDef.label} ({currentDef.bn})
            </span>
            <div className="text-sm sm:text-base font-mono font-black text-emerald-400 truncate">
              {currentDef.isNumeric
                ? currentValue
                  ? fmt(Number(currentValue))
                  : "0"
                : currentValue || "(None)"}
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-lg bg-slate-800 hover:bg-slate-700 active:scale-95 px-2 py-1 text-xs font-bold text-slate-200 border border-slate-700 flex items-center gap-1 cursor-pointer transition"
              title="পূর্বের ঘরে যান"
            >
              ◀ Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-95 px-2 py-1 text-xs font-bold text-white shadow flex items-center gap-1 cursor-pointer transition"
              title="পরের ঘরে যান"
            >
              Next ▶
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-rose-600 hover:bg-rose-500 active:scale-95 px-2 py-1 text-xs font-bold text-white shadow flex items-center gap-1 cursor-pointer transition"
              title="কিবোর্ড বন্ধ করুন"
            >
              ✖
            </button>
          </div>
        </div>

        {/* Field Switcher Bar (এক ঘর থেকে অন্য ঘরে সহজে সুইজ করার জন্য স্ক্রলেবল ট্যাব) */}
        <div className="py-1.5 overflow-x-auto no-scrollbar flex items-center gap-1">
          {STAFF_FIELDS.map((f, idx) => {
            const isActive = f.key === activeField;
            const val = values[f.key];
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => onFieldSelect(f.key)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold whitespace-nowrap shrink-0 transition cursor-pointer border ${
                  isActive
                    ? "bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-300/40"
                    : "bg-slate-800/90 text-slate-300 hover:bg-slate-700 border-slate-700"
                }`}
              >
                <span>{f.label}</span>
                {val && f.isNumeric && Number(val) > 0 && (
                  <span className="ml-1 opacity-90 font-mono text-[10px]">
                    ({fmt(Number(val))})
                  </span>
                )}
                {val && !f.isNumeric && (
                  <span className="ml-1 opacity-90 text-[10px]">({val})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Keyboard Input Body */}
        {activeField === "staffName" ? (
          /* Staff Selection Panel when Staff Name is active */
          <div className="my-2 rounded-xl bg-slate-900 p-2.5 border border-slate-800">
            <div className="mb-2 text-xs font-bold text-slate-400">
              Select Staff Member (স্টাফ নির্বাচন করুন):
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {staffList.map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => handleStaffSelect(st)}
                  className={`rounded-xl py-2.5 text-xs sm:text-sm font-bold text-center border transition cursor-pointer active:scale-95 ${
                    values.staffName.toLowerCase() === st.toLowerCase()
                      ? "bg-emerald-600 text-white border-emerald-400 shadow-lg ring-2 ring-emerald-400"
                      : "bg-slate-800 text-slate-200 hover:bg-slate-700 border-slate-700"
                  }`}
                >
                  👤 {st}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Numeric Keypad for Loan, Rebate, Savings, DPS, etc. */
          <div className="grid grid-cols-4 gap-1.5 my-1.5">
            {/* Row 1 */}
            <button
              type="button"
              onClick={() => handleDigit("7")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              7
            </button>
            <button
              type="button"
              onClick={() => handleDigit("8")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              8
            </button>
            <button
              type="button"
              onClick={() => handleDigit("9")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              9
            </button>
            <button
              type="button"
              onClick={handleBackspace}
              className="rounded-xl bg-rose-900/80 hover:bg-rose-800 active:bg-rose-700 active:scale-95 py-2.5 sm:py-3 text-base sm:text-lg font-bold text-rose-200 shadow border border-rose-700 transition cursor-pointer flex items-center justify-center gap-1"
              title="মুছুন"
            >
              ⌫
            </button>

            {/* Row 2 */}
            <button
              type="button"
              onClick={() => handleDigit("4")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              4
            </button>
            <button
              type="button"
              onClick={() => handleDigit("5")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              5
            </button>
            <button
              type="button"
              onClick={() => handleDigit("6")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              6
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-amber-300 shadow border border-slate-700 transition cursor-pointer"
              title="সম্পূর্ণ ক্লিয়ার"
            >
              C
            </button>

            {/* Row 3 */}
            <button
              type="button"
              onClick={() => handleDigit("1")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              1
            </button>
            <button
              type="button"
              onClick={() => handleDigit("2")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              2
            </button>
            <button
              type="button"
              onClick={() => handleDigit("3")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              3
            </button>
            <button
              type="button"
              onClick={handleDoubleZero}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-sm sm:text-base font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer"
            >
              00
            </button>

            {/* Row 4 */}
            <button
              type="button"
              onClick={() => handleDigit("0")}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleTripleZero}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-xs sm:text-sm font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer"
            >
              000
            </button>
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center gap-1"
            >
              ◀ Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-xl bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 active:scale-95 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow border border-indigo-500 transition cursor-pointer flex items-center justify-center gap-1"
            >
              Next ▶
            </button>
          </div>
        )}

        {/* Bottom Action Row: Save (সেভ), Reset (রিসেট), Close (ক্লোজ) */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800">
          <button
            type="button"
            onClick={onSave}
            className="rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 py-2.5 text-xs sm:text-sm font-black text-white shadow-lg flex items-center justify-center gap-1.5 cursor-pointer transition ring-2 ring-emerald-500/40"
          >
            <span>💾</span>
            <span>সেভ (Save)</span>
          </button>
          <button
            type="button"
            onClick={onReset}
            className="rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 py-2.5 text-xs sm:text-sm font-black text-white shadow-lg flex items-center justify-center gap-1.5 cursor-pointer transition ring-2 ring-amber-500/40"
          >
            <span>🔄</span>
            <span>রিসেট (Reset)</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-700 hover:bg-slate-600 active:bg-slate-800 active:scale-95 py-2.5 text-xs sm:text-sm font-black text-slate-200 shadow flex items-center justify-center gap-1.5 cursor-pointer transition border border-slate-600"
          >
            <span>✖</span>
            <span>ক্লোজ (Close)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

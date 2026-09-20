import React from "react";
import { fmt } from "./DenominationPopup";
import { evaluateMathExpression } from "@/lib/storage";

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
  isEdit?: boolean;
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
  isEdit = false,
}: StaffCustomKeyboardProps) {
  if (!open) return null;

  const currentIndex = STAFF_FIELDS.findIndex((f) => f.key === activeField);
  const currentDef = STAFF_FIELDS[currentIndex] || STAFF_FIELDS[0];
  const currentValue = values[activeField] || "";

  const handlePrev = () => {
    if (activeField !== "staffName" && /[+\-*/]/.test(currentValue)) {
      onValueChange(activeField, evaluateMathExpression(currentValue));
    }
    const prevIndex = (currentIndex - 1 + STAFF_FIELDS.length) % STAFF_FIELDS.length;
    onFieldSelect(STAFF_FIELDS[prevIndex].key);
  };

  const handleNext = () => {
    if (activeField !== "staffName" && /[+\-*/]/.test(currentValue)) {
      onValueChange(activeField, evaluateMathExpression(currentValue));
    }
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

  const handleOperator = (op: string) => {
    if (activeField === "staffName") return;
    if (!currentValue || currentValue === "0") {
      if (op === "-") onValueChange(activeField, "-");
      return;
    }
    // If it already ends with an operator, replace it
    if (/[+\-*/]$/.test(currentValue)) {
      onValueChange(activeField, currentValue.slice(0, -1) + op);
      return;
    }
    onValueChange(activeField, currentValue + op);
  };

  const handleEquals = () => {
    if (activeField === "staffName") return;
    const evaluated = evaluateMathExpression(currentValue);
    onValueChange(activeField, evaluated);
  };

  const handleDoubleZero = () => {
    if (activeField === "staffName") return;
    if (!currentValue || currentValue === "0") {
      onValueChange(activeField, "0");
    } else if (/[+\-*/]$/.test(currentValue)) {
      onValueChange(activeField, currentValue + "0");
    } else {
      onValueChange(activeField, currentValue + "00");
    }
  };

  const handleTripleZero = () => {
    if (activeField === "staffName") return;
    if (!currentValue || currentValue === "0") {
      onValueChange(activeField, "0");
    } else if (/[+\-*/]$/.test(currentValue)) {
      onValueChange(activeField, currentValue + "0");
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
    onFieldSelect("loan");
  };

  // Support physical keyboard keys on desktop
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement ||
        (e.target instanceof HTMLInputElement && !e.target.readOnly)
      ) {
        return;
      }

      if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        handleDigit(e.key);
      } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        e.preventDefault();
        handleOperator(e.key);
      } else if (e.key === "=") {
        e.preventDefault();
        handleEquals();
      } else if (e.key === "Backspace") {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) handlePrev();
        else handleNext();
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (/[+\-*/]/.test(currentValue)) {
          handleEquals();
        } else if (activeField === "nogodReturn") {
          onSave();
        } else {
          handleNext();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, activeField, currentValue, currentIndex]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 text-white shadow-2xl border-t-4 border-indigo-600 backdrop-blur-md animate-in slide-in-from-bottom duration-200">
      <div className="mx-auto max-w-xl px-2 sm:px-3 pt-2 pb-3">
        {/* Field Switcher Bar */}
        <div className="pb-1.5 overflow-x-auto no-scrollbar flex items-center gap-1">
          {STAFF_FIELDS.map((f) => {
            const isActive = f.key === activeField;
            const val = values[f.key];
            const displayVal = val && f.isNumeric ? evaluateMathExpression(val) : val;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => {
                  if (activeField !== "staffName" && /[+\-*/]/.test(currentValue)) {
                    onValueChange(activeField, evaluateMathExpression(currentValue));
                  }
                  onFieldSelect(f.key);
                }}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold whitespace-nowrap shrink-0 transition cursor-pointer border ${
                  isActive
                    ? "bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-300/40"
                    : "bg-slate-800/90 text-slate-300 hover:bg-slate-700 border-slate-700"
                }`}
              >
                <span>{f.label}</span>
                {displayVal && f.isNumeric && Number(displayVal) > 0 && (
                  <span className="ml-1 opacity-90 font-mono text-[10px]">
                    ({fmt(Number(displayVal))})
                  </span>
                )}
                {displayVal && !f.isNumeric && (
                  <span className="ml-1 opacity-90 text-[10px]">({displayVal})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Keyboard Input Body */}
        {activeField === "staffName" ? (
          /* Staff Selection Panel */
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
          /* Numeric & Operator Keypad */
          <div className="flex gap-2 my-1.5">
            {/* Left 3 Columns: Numbers & Clear */}
            <div className="flex-1 grid grid-cols-3 gap-1.5">
              {/* Row 1 */}
              <button
                type="button"
                onClick={() => handleDigit("7")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                7
              </button>
              <button
                type="button"
                onClick={() => handleDigit("8")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                8
              </button>
              <button
                type="button"
                onClick={() => handleDigit("9")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                9
              </button>

              {/* Row 2 */}
              <button
                type="button"
                onClick={() => handleDigit("4")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                4
              </button>
              <button
                type="button"
                onClick={() => handleDigit("5")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                5
              </button>
              <button
                type="button"
                onClick={() => handleDigit("6")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                6
              </button>

              {/* Row 3 */}
              <button
                type="button"
                onClick={() => handleDigit("1")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                1
              </button>
              <button
                type="button"
                onClick={() => handleDigit("2")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                2
              </button>
              <button
                type="button"
                onClick={() => handleDigit("3")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                3
              </button>

              {/* Row 4 */}
              <button
                type="button"
                onClick={() => handleDigit("0")}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer"
              >
                0
              </button>
              <button
                type="button"
                onClick={handleDoubleZero}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-sm sm:text-base font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer"
              >
                00
              </button>
              <button
                type="button"
                onClick={handleTripleZero}
                className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-xs sm:text-sm font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer"
              >
                000
              </button>
            </div>

            {/* Right Column: 6 Operators from Bottom to Top (=, +, -, *, /, ⌫) */}
            <div className="w-16 sm:w-20 flex flex-col gap-1.5">
              {/* Top: Backspace */}
              <button
                type="button"
                onClick={handleBackspace}
                className="flex-1 rounded-xl bg-rose-900/80 hover:bg-rose-800 active:bg-rose-700 active:scale-95 text-base sm:text-lg font-bold text-rose-200 shadow border border-rose-700 transition cursor-pointer flex items-center justify-center"
                title="একটি অক্ষর মুছুন"
              >
                ⌫
              </button>

              {/* / (ভাগ) */}
              <button
                type="button"
                onClick={() => handleOperator("/")}
                className="flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center"
                title="ভাগ (/)"
              >
                ÷
              </button>

              {/* * (গুণ) */}
              <button
                type="button"
                onClick={() => handleOperator("*")}
                className="flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center"
                title="গুণ (*)"
              >
                ×
              </button>

              {/* - (বিয়োগ) */}
              <button
                type="button"
                onClick={() => handleOperator("-")}
                className="flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center"
                title="বিয়োগ (-)"
              >
                −
              </button>

              {/* + (যোগ) */}
              <button
                type="button"
                onClick={() => handleOperator("+")}
                className="flex-1 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 text-lg sm:text-xl font-black text-white shadow border border-amber-500 transition cursor-pointer flex items-center justify-center"
                title="যোগ (+)"
              >
                +
              </button>

              {/* Bottom: = (সমান / হিসাব) */}
              <button
                type="button"
                onClick={handleEquals}
                className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 text-lg sm:text-xl font-black text-white shadow border border-emerald-500 transition cursor-pointer flex items-center justify-center ring-2 ring-emerald-400/30"
                title="যোগফল হিসাব করতে সমান (=)"
              >
                =
              </button>
            </div>
          </div>
        )}

        {/* Bottom Action Row: ডান থেকে বামে সবার নিচে ইউনিভার্সাল অ্যারো কী এক ঘর হতে অন্য ঘর, ক্লোজ, save, reset */}
        <div className="grid grid-cols-5 gap-1.5 pt-1.5 border-t border-slate-800">
          <button
            type="button"
            onClick={onReset}
            className="rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow flex items-center justify-center gap-1 cursor-pointer transition ring-1 ring-amber-400/40"
            title="সব রিসেট করুন"
          >
            <span>🔄</span>
            <span>রিসেট</span>
          </button>
          <button
            type="button"
            onClick={onSave}
            className="rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow flex items-center justify-center gap-1 cursor-pointer transition ring-1 ring-emerald-400/40"
            title={isEdit ? "রিপোর্ট আপডেট করুন" : "রিপোর্ট সেভ করুন"}
          >
            <span>💾</span>
            <span>{isEdit ? "আপডেট" : "সেভ"}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow-lg flex items-center justify-center gap-1 cursor-pointer transition border border-red-500 ring-2 ring-red-500/40"
            title="কিবোর্ড ক্লোজ করুন"
          >
            <span>✖</span>
            <span>ক্লোজ</span>
          </button>
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-[11px] sm:text-xs font-bold text-slate-200 border border-slate-700 flex items-center justify-center gap-1 cursor-pointer transition"
            title="এক ঘর পূর্বের (Prev)"
          >
            <span>◀</span>
            <span>পূর্বের</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:scale-95 py-2 text-[11px] sm:text-xs font-bold text-white shadow flex items-center justify-center gap-1 cursor-pointer transition"
            title="এক ঘর পরের (Next)"
          >
            <span>পরের</span>
            <span>▶</span>
          </button>
        </div>
      </div>
    </div>
  );
}

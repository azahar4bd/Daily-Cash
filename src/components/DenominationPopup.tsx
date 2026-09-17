import { useEffect, useRef, useState } from "react";
import type { Denom } from "@/types";

export const NOTES = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] as const;

export function denomTotal(d: Denom, other: number) {
  return NOTES.reduce((s, n) => s + n * (d[String(n)] || 0), 0) + (Number(other) || 0);
}

export const fmt = (n: number | string) =>
  Math.round(Number(n) || 0).toLocaleString("en-IN");

const FIELD_COUNT = NOTES.length + 1; // last = Other

function detectMobile() {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || "";
  const uaMobile = /Android|iPhone|iPad|iPod|Mobile|Windows Phone|Opera Mini/i.test(ua);
  const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const small = window.innerWidth < 768;
  return uaMobile || (touch && small);
}

export default function DenominationPopup({
  open,
  initial,
  initialOther,
  onClose,
  onDone,
}: {
  open: boolean;
  initial: Denom;
  initialOther: number;
  onClose: () => void;
  onDone: (d: Denom, other: number, total: number) => void;
}) {
  const [showKeypad, setShowKeypad] = useState(false);
  const [vals, setVals] = useState<string[]>(Array(FIELD_COUNT).fill(""));
  const [active, setActive] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      const m = detectMobile();
      setShowKeypad(m);
      const v = NOTES.map((n) => (initial[String(n)] ? String(initial[String(n)]) : ""));
      v.push(initialOther ? String(initialOther) : "");
      setVals(v);
      setActive(0);
      setTimeout(() => inputRefs.current[0]?.focus(), 50);
    }
  }, [open, initial, initialOther]);

  if (!open) return null;

  const d: Denom = {};
  NOTES.forEach((n, i) => {
    d[String(n)] = parseInt(vals[i] || "0", 10) || 0;
  });
  const other = Number(vals[FIELD_COUNT - 1]) || 0;
  const total = denomTotal(d, other);

  const amountOf = (i: number) => (i === FIELD_COUNT - 1 ? other : NOTES[i] * d[String(NOTES[i])]);
  const labelOf = (i: number) => (i === FIELD_COUNT - 1 ? "Other" : String(NOTES[i]));
  const setVal = (i: number, v: string) => setVals((p) => p.map((x, k) => (k === i ? v : x)));
  const reset = () => setVals(Array(FIELD_COUNT).fill(""));
  const save = () => onDone(d, other, total);

  const focusIdx = (i: number) => {
    const c = ((i % FIELD_COUNT) + FIELD_COUNT) % FIELD_COUNT;
    setActive(c);
    const el = inputRefs.current[c];
    if (el) {
      el.focus();
      if (!showKeypad) el.select();
      el.scrollIntoView({ block: "nearest" });
    }
  };

  const press = (key: string) => {
    const isOther = active === FIELD_COUNT - 1;
    const cur = vals[active];
    if (key === "⌫") return setVal(active, cur.slice(0, -1));
    if (key === "C") return setVal(active, "");
    if (key === ".") {
      if (isOther && !cur.includes(".")) setVal(active, (cur || "0") + ".");
      return;
    }
    const next = (cur + key).replace(/^0+(?=\d)/, "");
    if (next.length > 9) return;
    setVal(active, next);
  };

  const Key = ({
    label,
    onClick,
    className = "",
  }: {
    label: string;
    onClick: () => void;
    className?: string;
    key?: string | number;
  }) => (
    <button
      type="button"
      onPointerDown={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`h-11 select-none rounded-lg text-lg font-bold shadow-sm active:scale-95 active:bg-slate-300 transition ${className}`}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4">
      <div className="flex flex-col bg-white max-h-[96vh] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        {/* header */}
        <div className="flex items-center justify-between border-b bg-slate-900 px-4 py-2.5 text-white">
          <h3 className="text-base sm:text-lg font-bold">Denomination</h3>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                setShowKeypad((k) => !k);
                setTimeout(() => inputRefs.current[active]?.focus(), 0);
              }}
              title="Toggle keypad"
              className={`rounded-lg px-2 py-1 text-sm font-semibold ${
                showKeypad ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              ⌨ Keypad
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full text-2xl text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
        {/* fields */}
        <div className="flex-1 overflow-auto px-3 py-3 sm:px-4">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {Array.from({ length: FIELD_COUNT }, (_, i) => {
              const isOther = i === FIELD_COUNT - 1;
              const on = i === active;
              return (
                <div
                  key={i}
                  onClick={() => focusIdx(i)}
                  className={`flex items-center gap-2 rounded-lg border-2 px-3 py-1.5 ${
                    on ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white"
                  } ${isOther ? "mt-1" : ""}`}
                >
                  <span className={`w-14 shrink-0 text-right font-mono text-base sm:text-lg font-bold ${isOther ? "text-xs sm:text-sm" : ""}`}>
                    {labelOf(i)}
                  </span>
                  <span className="text-slate-400">×</span>
                  <input
                    ref={(el) => {
                      inputRefs.current[i] = el;
                    }}
                    type="text"
                    inputMode={showKeypad ? "none" : isOther ? "decimal" : "numeric"}
                    readOnly={showKeypad}
                    value={vals[i]}
                    placeholder={isOther ? "Any" : "0"}
                    onFocus={() => setActive(i)}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (isOther ? /^\d*\.?\d*$/.test(v) : /^\d*$/.test(v)) setVal(i, v);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" || e.key === "Enter") {
                        e.preventDefault();
                        if (e.key === "Enter" && i === FIELD_COUNT - 1) save();
                        else focusIdx(i + 1);
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        focusIdx(i - 1);
                      }
                    }}
                    className={`min-w-0 flex-1 rounded border px-2 py-0.5 text-right font-mono text-base sm:text-lg font-bold focus:border-blue-500 focus:outline-none ${
                      showKeypad ? "caret-transparent" : ""
                    } ${on && showKeypad ? "bg-white text-blue-900" : ""}`}
                  />
                  <span className="text-slate-400">=</span>
                  <span className="w-20 shrink-0 text-right font-mono text-xs sm:text-sm text-slate-800 font-bold">
                    {fmt(amountOf(i))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {/* Total Balance - ALWAYS VISIBLE, never covered by scrolling */}
        <div className="shrink-0 z-10 border-t-2 border-blue-900 bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-2.5 text-white shadow-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-100">
              Total Balance
            </span>
            <span className="text-[10px] bg-blue-900/60 rounded px-1.5 py-0.5 text-blue-200 font-mono">
              TK
            </span>
          </div>
          <span className="font-mono text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-xs">
            {fmt(total)}
          </span>
        </div>
        {/* footer: keypad or action buttons */}
        {showKeypad ? (
          <div className="border-t bg-slate-100 p-2.5">
            <div className="grid grid-cols-5 gap-1.5">
              <div className="col-span-4 grid grid-cols-4 gap-1.5">
                {["7", "8", "9"].map((k) => (
                  <Key key={k} label={k} onClick={() => press(k)} className="bg-white" />
                ))}
                <Key label="⌫" onClick={() => press("⌫")} className="bg-amber-100 text-amber-900" />
                {["4", "5", "6"].map((k) => (
                  <Key key={k} label={k} onClick={() => press(k)} className="bg-white" />
                ))}
                <Key label="C" onClick={() => press("C")} className="bg-rose-100 text-rose-800" />
                {["1", "2", "3"].map((k) => (
                  <Key key={k} label={k} onClick={() => press(k)} className="bg-white" />
                ))}
                <Key label="." onClick={() => press(".")} className="bg-white" />
                <Key label="0" onClick={() => press("0")} className="bg-white" />
                <Key label="00" onClick={() => press("00")} className="bg-white" />
                <Key label="Reset" onClick={reset} className="bg-slate-500 !text-xs text-white" />
                <Key label="Save" onClick={save} className="bg-emerald-600 !text-xs text-white" />
              </div>
              <div className="grid grid-cols-1 grid-rows-4 gap-1.5">
                <Key label="▲" onClick={() => focusIdx(active - 1)} className="bg-blue-100 text-blue-900" />
                <div className="grid grid-cols-2 gap-1">
                  <Key label="◄" onClick={() => focusIdx(active - 1)} className="bg-blue-100 text-blue-900 !text-sm" />
                  <Key label="►" onClick={() => focusIdx(active + 1)} className="bg-blue-100 text-blue-900 !text-sm" />
                </div>
                <Key label="▼" onClick={() => focusIdx(active + 1)} className="bg-blue-100 text-blue-900" />
                <Key label="⏎" onClick={save} className="bg-blue-600 text-white" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end gap-2 border-t px-4 py-2.5 bg-slate-50">
            <button
              type="button"
              onClick={save}
              className="rounded-lg bg-green-600 px-6 py-2 text-sm font-bold text-white shadow hover:bg-green-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-lg bg-slate-500 px-6 py-2 text-sm font-semibold text-white hover:bg-slate-600"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

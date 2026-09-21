import { useEffect, useRef, useState } from "react";
import type { Denom } from "@/types";

export const NOTES = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] as const;

export function denomTotal(d: Denom, other: number) {
  return NOTES.reduce((s, n) => s + n * (d[String(n)] || 0), 0) + (Number(other) || 0);
}

export const fmt = (n: number | string) =>
  Math.round(Number(n) || 0).toLocaleString("en-IN");

// Index 0 = Manual Entry (সরাসরি টাকা / Other), Index 1..10 = Notes (1000 down to 1)
const FIELD_COUNT = 1 + NOTES.length;

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
      // Index 0: Manual Entry (Other amount)
      // Index 1..10: Notes
      const v = [
        initialOther ? String(initialOther) : "",
        ...NOTES.map((n) => (initial[String(n)] ? String(initial[String(n)]) : "")),
      ];
      setVals(v);
      setActive(0);
      if (!m) {
        setTimeout(() => inputRefs.current[0]?.focus(), 50);
      }
    }
  }, [open, initial, initialOther]);

  if (!open) return null;

  const d: Denom = {};
  const other = Number(vals[0]) || 0;
  NOTES.forEach((n, idx) => {
    d[String(n)] = parseInt(vals[idx + 1] || "0", 10) || 0;
  });
  const total = denomTotal(d, other);

  const amountOf = (i: number) =>
    i === 0 ? other : NOTES[i - 1] * (d[String(NOTES[i - 1])] || 0);
  const labelOf = (i: number) =>
    i === 0 ? "Manual" : String(NOTES[i - 1]);
  const setVal = (i: number, v: string) => setVals((p) => p.map((x, k) => (k === i ? v : x)));
  const reset = () => setVals(Array(FIELD_COUNT).fill(""));
  const save = () => onDone(d, other, total);

  const focusIdx = (i: number) => {
    const c = ((i % FIELD_COUNT) + FIELD_COUNT) % FIELD_COUNT;
    setActive(c);
    const el = inputRefs.current[c];
    if (el) {
      if (showKeypad) {
        el.blur();
      } else {
        el.focus();
        el.select();
      }
      el.scrollIntoView({ block: "nearest" });
    }
  };

  const press = (key: string) => {
    const isManual = active === 0;
    const cur = vals[active];
    if (key === "⌫") return setVal(active, cur.slice(0, -1));
    if (key === "C") return setVal(active, "");
    // ± : প্লাস/মাইনাস — ফেরত ( refund ) পোস্টিংয়ের জন্য
    if (key === "±") {
      if (!cur) return setVal(active, "-");
      if (cur.startsWith("-")) return setVal(active, cur.slice(1));
      return setVal(active, "-" + cur);
    }
    if (key === ".") {
      if (isManual && !cur.includes(".")) setVal(active, (cur || "0") + ".");
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
      className={`h-10 select-none rounded-lg text-base sm:text-lg font-bold shadow-xs active:scale-95 active:bg-slate-300 transition cursor-pointer flex items-center justify-center ${className}`}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4">
      <div className="flex flex-col bg-white max-h-[96vh] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-slate-900 px-3.5 py-2 text-white">
          <div className="flex items-center gap-1.5">
            <span className="text-base">💰</span>
            <h3 className="text-sm sm:text-base font-bold">Denomination</h3>
          </div>
          <div className="flex items-center gap-1.5">
            {detectMobile() && (
              <button
                type="button"
                onClick={() => {
                  setShowKeypad((k) => !k);
                  setTimeout(() => inputRefs.current[active]?.focus(), 0);
                }}
                title="Toggle keypad"
                className={`rounded-lg px-2 py-0.5 text-xs font-semibold cursor-pointer ${
                  showKeypad ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                ⌨ Keypad
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="flex h-7 w-7 items-center justify-center rounded-full text-xl text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>

        {/* Total Balance - MOVED TO THE VERY TOP (নিচে থেকে সবার উপরে) */}
        <div
          className={`shrink-0 z-10 border-b-2 px-3.5 py-2 text-white shadow-xs flex items-center justify-between ${
            total < 0
              ? "border-rose-900 bg-gradient-to-r from-rose-700 to-red-700"
              : "border-blue-900 bg-gradient-to-r from-blue-700 to-indigo-700"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-black uppercase tracking-wider text-blue-100">
              {total < 0 ? "ফেরত (মাইনাস)" : "Total Balance"}
            </span>
            <span className="text-[10px] bg-blue-900/60 rounded px-1.5 py-0.2 text-blue-200 font-mono">
              TK
            </span>
          </div>
          <span
            className={`font-mono text-lg sm:text-xl font-black tracking-tight drop-shadow-xs ${
              total < 0 ? "text-rose-100" : "text-white"
            }`}
          >
            {fmt(total)}
          </span>
        </div>
        <div className="shrink-0 border-b bg-slate-50 px-3.5 py-1 text-[10px] font-bold text-slate-500">
          💡 মাইনাস (ফেরত) লিখতে চাইলে চিহ্ন বাটন <span className="font-mono text-slate-700">±</span> চাপুন —
          যেমন <span className="font-mono text-rose-700">1</span> → <span className="font-mono text-rose-700">±</span> ={" "}
          <span className="font-mono text-rose-700">-1</span> (৫০০ টাকা ফেরত)
        </div>

        {/* Denomination Rows: Manual Entry AT THE VERY TOP (নিচে থেকে সবার উপরে দেওয়া হলো) */}
        <div className="flex-1 overflow-auto px-2.5 py-2 sm:px-3">
          <div className="flex flex-col gap-1">
            
            {/* ROW 0: Manual Entry Box (সবার উপরে) */}
            {/* ROW 0: Manual Entry (সবার উপরে, বড় ও অন্য ঘরের মতো সুবিন্যস্ত) */}
            {(() => {
              const on = active === 0;
              return (
                <div
                  key="manual-entry-top"
                  onClick={() => focusIdx(0)}
                  className={`flex items-center gap-2 rounded-lg border-2 px-3 py-1.5 sm:py-2 cursor-pointer transition shadow-xs mb-1.5 ${
                    on
                      ? "border-blue-600 bg-blue-50/90 ring-2 ring-blue-400/40"
                      : "border-slate-300 bg-slate-50 hover:bg-slate-100/80"
                  }`}
                >
                  <span className="w-16 sm:w-20 shrink-0 text-left sm:text-right font-bold text-xs sm:text-sm text-slate-800">
                    Manual
                  </span>
                  <span className="text-slate-400 text-xs font-bold">৳</span>
                  <input
                    ref={(el) => {
                      inputRefs.current[0] = el;
                    }}
                    type="text"
                    inputMode={showKeypad ? "none" : "decimal"}
                    readOnly={showKeypad}
                    value={vals[0]}
                    placeholder=""
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    onFocus={(e) => {
                      setActive(0);
                      if (showKeypad) e.target.blur();
                    }}
                    onTouchStart={(e) => {
                      if (showKeypad) {
                        e.preventDefault();
                        setActive(0);
                      }
                    }}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (/^-?\d*\.?\d*$/.test(v)) setVal(0, v);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" || e.key === "Enter") {
                        e.preventDefault();
                        focusIdx(1);
                      }
                    }}
                    className={`min-w-0 flex-1 rounded border border-slate-300 bg-white px-2.5 py-1 text-right font-mono text-sm sm:text-base font-bold text-slate-900 focus:border-blue-500 focus:outline-none select-text ${
                      on && showKeypad ? "ring-2 ring-blue-400 bg-white" : ""
                    }`}
                  />
                  <span className="text-slate-400 text-xs">=</span>
                  <span
                    className={`w-16 sm:w-20 shrink-0 text-right font-mono text-xs sm:text-sm font-bold ${
                      other < 0 ? "text-rose-700" : "text-slate-900"
                    }`}
                  >
                    {other !== 0 ? fmt(other) : ""}
                  </span>
                </div>
              );
            })()}

            {/* Note Rows: 1000 down to 1 */}
            {NOTES.map((note, noteIdx) => {
              const i = noteIdx + 1;
              const on = active === i;
              return (
                <div
                  key={note}
                  onClick={() => focusIdx(i)}
                  className={`flex items-center gap-1.5 rounded-md border px-2 py-0.5 sm:py-1 cursor-pointer transition ${
                    on ? "border-blue-600 bg-blue-50 ring-1 ring-blue-400" : "border-slate-200 bg-white hover:bg-slate-50"
                  }`}
                >
                  <span className="w-11 shrink-0 text-right font-mono text-xs sm:text-sm font-bold text-slate-800">
                    {note}
                  </span>
                  <span className="text-slate-400 text-xs">×</span>
                  <input
                    ref={(el) => {
                      inputRefs.current[i] = el;
                    }}
                    type="text"
                    inputMode={showKeypad ? "none" : "numeric"}
                    readOnly={showKeypad}
                    value={vals[i]}
                    placeholder=""
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    onFocus={(e) => {
                      setActive(i);
                      if (showKeypad) e.target.blur();
                    }}
                    onTouchStart={(e) => {
                      if (showKeypad) {
                        e.preventDefault();
                        setActive(i);
                      }
                    }}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (/^-?\d*$/.test(v)) setVal(i, v);
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
                    className={`min-w-0 flex-1 rounded border border-slate-200 px-2 py-0.5 text-right font-mono text-xs sm:text-sm font-bold focus:border-blue-500 focus:outline-none select-text ${
                      on && showKeypad ? "bg-white text-blue-900 border-blue-400" : ""
                    }`}
                  />
                  <span className="text-slate-400 text-xs">=</span>
                  <span
                    className={`w-16 shrink-0 text-right font-mono text-xs font-bold ${
                      amountOf(i) < 0 ? "text-rose-700" : "text-slate-800"
                    }`}
                  >
                    {fmt(amountOf(i))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer: Keypad or Action Buttons (with CLOSE button on keyboard) */}
        {showKeypad ? (
          <div className="border-t bg-slate-100 p-2">
            <div className="grid grid-cols-5 gap-1">
              <div className="col-span-4 grid grid-cols-4 gap-1">
                {["7", "8", "9"].map((k) => (
                  <Key key={k} label={k} onClick={() => press(k)} className="bg-white hover:bg-slate-50" />
                ))}
                <Key label="⌫" onClick={() => press("⌫")} className="bg-amber-100 text-amber-900 hover:bg-amber-200" />

                {["4", "5", "6"].map((k) => (
                  <Key key={k} label={k} onClick={() => press(k)} className="bg-white hover:bg-slate-50" />
                ))}
                <Key label="C" onClick={() => press("C")} className="bg-rose-100 text-rose-800 hover:bg-rose-200" />

                {["1", "2", "3"].map((k) => (
                  <Key key={k} label={k} onClick={() => press(k)} className="bg-white hover:bg-slate-50" />
                ))}
                <Key label="." onClick={() => press(".")} className="bg-white hover:bg-slate-50" />

                <Key label="0" onClick={() => press("0")} className="bg-white hover:bg-slate-50" />
                <Key label="00" onClick={() => press("00")} className="bg-white hover:bg-slate-50" />
                <Key
                  label="±"
                  onClick={() => press("±")}
                  className="bg-rose-50 text-rose-700 ring-1 ring-rose-300 hover:bg-rose-100"
                />
                <Key label="Reset" onClick={reset} className="bg-slate-500 !text-xs text-white hover:bg-slate-600" />
              </div>

              {/* Close Button at TOP RIGHT + Navigation Arrows BELOW */}
              <div className="grid grid-cols-1 grid-rows-5 gap-1">
                {/* Close Button on Top Right Corner of Keyboard */}
                <Key
                  label="✕ Close"
                  onClick={onClose}
                  className="bg-rose-600 hover:bg-rose-700 text-white !text-xs font-black shadow-xs ring-1 ring-rose-400"
                />
                <Key label="▲" onClick={() => focusIdx(active - 1)} className="bg-blue-100 text-blue-900 hover:bg-blue-200" />
                <div className="grid grid-cols-2 gap-0.5">
                  <Key label="◄" onClick={() => focusIdx(active - 1)} className="bg-blue-100 text-blue-900 !text-xs" />
                  <Key label="►" onClick={() => focusIdx(active + 1)} className="bg-blue-100 text-blue-900 !text-xs" />
                </div>
                <Key label="▼" onClick={() => focusIdx(active + 1)} className="bg-blue-100 text-blue-900 hover:bg-blue-200" />
                <Key
                  label="Save"
                  onClick={save}
                  className="bg-emerald-600 text-white hover:bg-emerald-700 !text-xs font-black"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end gap-2 border-t px-3.5 py-2 bg-slate-50">
            <button
              type="button"
              onClick={save}
              className="rounded-lg bg-green-600 px-5 py-1.5 text-xs font-bold text-white shadow hover:bg-green-700 cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-lg bg-slate-500 px-5 py-1.5 text-xs font-semibold text-white hover:bg-slate-600 cursor-pointer"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-rose-600 px-5 py-1.5 text-xs font-bold text-white hover:bg-rose-700 cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

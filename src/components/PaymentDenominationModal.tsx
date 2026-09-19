import { useEffect, useRef, useState } from "react";
import { fmt } from "./DenominationPopup";

export const NOTES = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] as const;
const FIELD_COUNT = NOTES.length + 1; // 10 notes + 1 other

function detectMobile() {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || "";
  const uaMobile = /Android|iPhone|iPad|iPod|Mobile|Windows Phone|Opera Mini/i.test(ua);
  const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const small = window.innerWidth < 768;
  return uaMobile || (touch && small);
}

export default function PaymentDenominationModal({
  open,
  onClose,
  targetAmount,
  date,
  onApplyAmount,
}: {
  open: boolean;
  onClose: () => void;
  targetAmount: number;
  date: string;
  onApplyAmount?: (amt: number) => void;
}) {
  const [showKeypad, setShowKeypad] = useState(false);
  const [qtyVals, setQtyVals] = useState<string[]>(Array(FIELD_COUNT).fill(""));
  const [creditVals, setCreditVals] = useState<string[]>(Array(FIELD_COUNT).fill(""));
  const [debitVals, setDebitVals] = useState<string[]>(Array(FIELD_COUNT).fill(""));
  const [activeCell, setActiveCell] = useState<{
    row: number;
    col: "qty" | "credit" | "debit";
  }>({ row: 0, col: "qty" });
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    if (open) {
      const m = detectMobile();
      setShowKeypad(m);
      setQtyVals(Array(FIELD_COUNT).fill(""));
      setCreditVals(Array(FIELD_COUNT).fill(""));
      setDebitVals(Array(FIELD_COUNT).fill(""));
      setActiveCell({ row: 0, col: "qty" });
      if (!m) {
        setTimeout(() => {
          inputRefs.current["0-qty"]?.focus();
        }, 60);
      }
    }
  }, [open]);

  if (!open) return null;

  const noteOnlyTotal = NOTES.reduce((acc, note, i) => {
    const qty = parseInt(qtyVals[i] || "0", 10) || 0;
    return acc + qty * note;
  }, 0);
  const otherAmt = Number(qtyVals[FIELD_COUNT - 1]) || 0;
  const totalNotesAmount = noteOnlyTotal + otherAmt;

  const totalCredit = creditVals.reduce((acc, v) => acc + (Number(v) || 0), 0);
  const totalDebit = debitVals.reduce((acc, v) => acc + (Number(v) || 0), 0);

  const denominationTotalCash = totalNotesAmount + totalCredit - totalDebit;
  const different = denominationTotalCash - targetAmount;

  const handleQtyChange = (i: number, val: string) => {
    setQtyVals((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const handleCreditChange = (i: number, val: string) => {
    setCreditVals((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const handleDebitChange = (i: number, val: string) => {
    setDebitVals((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const handleReset = () => {
    setQtyVals(Array(FIELD_COUNT).fill(""));
    setCreditVals(Array(FIELD_COUNT).fill(""));
    setDebitVals(Array(FIELD_COUNT).fill(""));
    setActiveCell({ row: 0, col: "qty" });
  };

  const focusCell = (row: number, col: "qty" | "credit" | "debit") => {
    setActiveCell({ row, col });
    const key = `${row}-${col}`;
    const el = inputRefs.current[key];
    if (el) {
      if (showKeypad) {
        el.blur();
      } else {
        el.focus();
        el.select();
      }
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  };

  const move = (dir: "up" | "down" | "left" | "right") => {
    const colsOrder: ("qty" | "credit" | "debit")[] = ["qty", "credit", "debit"];
    let { row, col } = activeCell;
    let colIdx = colsOrder.indexOf(col);
    if (dir === "up") {
      row = row > 0 ? row - 1 : FIELD_COUNT - 1;
    } else if (dir === "down") {
      row = row < FIELD_COUNT - 1 ? row + 1 : 0;
    } else if (dir === "left") {
      if (colIdx > 0) colIdx--;
      else {
        colIdx = 2;
        row = row > 0 ? row - 1 : FIELD_COUNT - 1;
      }
      col = colsOrder[colIdx];
    } else if (dir === "right") {
      if (colIdx < 2) colIdx++;
      else {
        colIdx = 0;
        row = row < FIELD_COUNT - 1 ? row + 1 : 0;
      }
      col = colsOrder[colIdx];
    }
    focusCell(row, col);
  };

  const press = (k: string) => {
    const { row, col } = activeCell;
    let cur = "";
    if (col === "qty") cur = qtyVals[row] || "";
    else if (col === "credit") cur = creditVals[row] || "";
    else if (col === "debit") cur = debitVals[row] || "";

    const isDecimalAllowed = col === "credit" || col === "debit" || row === FIELD_COUNT - 1;
    let next = cur;
    if (k === "⌫") {
      next = cur.slice(0, -1);
    } else if (k === "C") {
      next = "";
    } else if (k === ".") {
      if (isDecimalAllowed && !cur.includes(".")) {
        next = (cur || "0") + ".";
      }
    } else {
      next = (cur + k).replace(/^0+(?=\d)/, "");
      if (next.length > 9) return;
    }
    if (col === "qty") handleQtyChange(row, next);
    else if (col === "credit") handleCreditChange(row, next);
    else if (col === "debit") handleDebitChange(row, next);
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

  const labelOf = (i: number) => (i === FIELD_COUNT - 1 ? "Other" : String(NOTES[i]));
  const rowAmountOf = (i: number) => {
    if (i === FIELD_COUNT - 1) return otherAmt;
    const qty = parseInt(qtyVals[i] || "0", 10) || 0;
    return qty * NOTES[i];
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden w-full h-[100dvh]">
      {/* Modal Header */}
      <div className="flex items-center justify-between border-b bg-slate-900 px-4 py-2.5 sm:px-6 sm:py-3 text-white shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">💳</span>
          <div>
            <h3 className="font-bold text-base sm:text-lg leading-tight">Payment Denomination</h3>
            <p className="text-xs text-slate-300 font-mono">Date: {date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {detectMobile() && (
            <button
              type="button"
              onClick={() => {
                setShowKeypad((k) => !k);
                setTimeout(() => {
                  inputRefs.current[`${activeCell.row}-${activeCell.col}`]?.focus();
                }, 0);
              }}
              className={`rounded-lg px-2.5 py-1 text-sm font-bold transition flex items-center gap-1 ${
                showKeypad ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              ⌨ Keypad
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-2xl text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            ×
          </button>
        </div>
      </div>
      {/* 3-Box Dashboard */}
      <div className="border-b bg-slate-100 p-2 sm:p-3 shrink-0">
        <div className="grid grid-cols-3 gap-2 max-w-5xl mx-auto">
          <div className="flex flex-col justify-center rounded-xl border border-slate-300 bg-white p-2 sm:p-2.5 shadow-xs">
            <span className="text-[11px] sm:text-xs font-bold text-slate-700 truncate">
              Disburse/Expense
            </span>
            <div className="mt-0.5 font-mono text-sm sm:text-xl font-black text-slate-900 truncate">
              {fmt(targetAmount)}
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-xl border border-indigo-300 bg-indigo-50/90 p-2 sm:p-2.5 shadow-xs">
            <span className="text-[11px] sm:text-xs font-bold text-indigo-950 truncate">
              Total Cash
            </span>
            <div className="mt-0.5 font-mono text-sm sm:text-xl font-black text-indigo-950 truncate">
              {fmt(denominationTotalCash)}
            </div>
          </div>
          <div
            className={`flex flex-col justify-center rounded-xl border p-2 sm:p-2.5 shadow-xs ${
              different > 0
                ? "border-emerald-500 bg-emerald-50"
                : different < 0
                ? "border-rose-500 bg-rose-50"
                : "border-blue-400 bg-blue-50"
            }`}
          >
            <div className="flex items-center justify-between gap-1">
              <span className="text-[11px] sm:text-xs font-bold text-slate-800 truncate">
                Different
              </span>
            </div>
            <div
              className={`mt-0.5 font-mono text-sm sm:text-xl font-black truncate ${
                different > 0 ? "text-emerald-700" : different < 0 ? "text-rose-700" : "text-blue-700"
              }`}
            >
              {different > 0 ? `+${fmt(different)}` : different < 0 ? `-${fmt(Math.abs(different))}` : "0"}
            </div>
          </div>
        </div>
      </div>
      {/* Denomination Table */}
      <div className="flex-1 overflow-auto p-2 sm:p-4">
        <div className="max-w-5xl mx-auto">
          <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm">
            <thead className="sticky top-0 bg-slate-800 text-white z-10 shadow-xs">
              <tr>
                <th className="border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-14 sm:w-20">Note</th>
                <th className="border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-16 sm:w-24">Qty</th>
                <th className="border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold w-20 sm:w-28">Amount</th>
                <th className="border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-emerald-900 text-emerald-100 w-24 sm:w-32">Credit (+)</th>
                <th className="border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-rose-900 text-rose-100 w-24 sm:w-32">Debit (-)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: FIELD_COUNT }, (_, i) => {
                const isOther = i === FIELD_COUNT - 1;
                const rowAmt = rowAmountOf(i);
                const isQtyActive = activeCell.row === i && activeCell.col === "qty";
                const isCreditActive = activeCell.row === i && activeCell.col === "credit";
                const isDebitActive = activeCell.row === i && activeCell.col === "debit";
                return (
                  <tr key={i} className={`border-b hover:bg-slate-50 transition ${isOther ? "bg-slate-50 font-bold border-t-2 border-slate-300" : ""}`}>
                    <td className="border border-slate-300 px-2 py-1 text-center font-mono font-bold text-slate-900 sm:text-base">
                      {labelOf(i)}
                    </td>
                    <td className="border border-slate-300 px-1 py-1 text-center">
                      <input
                        ref={(el) => {
                          inputRefs.current[`${i}-qty`] = el;
                        }}
                        type="text"
                        inputMode={showKeypad ? "none" : (isOther ? "decimal" : "numeric")}
                        readOnly={showKeypad}
                        value={qtyVals[i]}
                        placeholder={isOther ? "Any" : "0"}
                        onFocus={(e) => {
                          if (showKeypad) e.target.blur();
                          focusCell(i, "qty");
                        }}
                        onTouchStart={(e) => {
                          if (showKeypad) {
                            e.preventDefault();
                            focusCell(i, "qty");
                          }
                        }}
                        onClick={() => focusCell(i, "qty")}
                        onChange={(e) => handleQtyChange(i, e.target.value)}
                        className={`w-full rounded border px-1.5 py-1 text-center font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${
                          isQtyActive
                            ? "border-blue-600 bg-blue-100/60 ring-2 ring-blue-400 text-blue-950 font-black"
                            : "border-slate-300 bg-yellow-50"
                        }`}
                      />
                    </td>
                    <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-slate-900 sm:text-sm">
                      {rowAmt > 0 ? fmt(rowAmt) : "-"}
                    </td>
                    <td className="border border-slate-300 px-1 py-1 text-right bg-emerald-50/30">
                      <input
                        ref={(el) => {
                          inputRefs.current[`${i}-credit`] = el;
                        }}
                        type="text"
                        inputMode={showKeypad ? "none" : "decimal"}
                        readOnly={showKeypad}
                        value={creditVals[i]}
                        placeholder="0"
                        onFocus={(e) => {
                          if (showKeypad) e.target.blur();
                          focusCell(i, "credit");
                        }}
                        onTouchStart={(e) => {
                          if (showKeypad) {
                            e.preventDefault();
                            focusCell(i, "credit");
                          }
                        }}
                        onClick={() => focusCell(i, "credit")}
                        onChange={(e) => handleCreditChange(i, e.target.value)}
                        className={`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${
                          isCreditActive
                            ? "border-emerald-600 bg-emerald-100/60 ring-2 ring-emerald-400 text-emerald-950 font-black"
                            : "border-emerald-300 bg-white text-emerald-900"
                        }`}
                      />
                    </td>
                    <td className="border border-slate-300 px-1 py-1 text-right bg-rose-50/30">
                      <input
                        ref={(el) => {
                          inputRefs.current[`${i}-debit`] = el;
                        }}
                        type="text"
                        inputMode={showKeypad ? "none" : "decimal"}
                        readOnly={showKeypad}
                        value={debitVals[i]}
                        placeholder="0"
                        onFocus={(e) => {
                          if (showKeypad) e.target.blur();
                          focusCell(i, "debit");
                        }}
                        onTouchStart={(e) => {
                          if (showKeypad) {
                            e.preventDefault();
                            focusCell(i, "debit");
                          }
                        }}
                        onClick={() => focusCell(i, "debit")}
                        onChange={(e) => handleDebitChange(i, e.target.value)}
                        className={`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${
                          isDebitActive
                            ? "border-rose-600 bg-rose-100/60 ring-2 ring-rose-400 text-rose-950 font-black"
                            : "border-rose-300 bg-white text-rose-900"
                        }`}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-400 z-10">
              <tr>
                <td colSpan={2} className="border border-slate-300 px-2 py-1 text-right font-bold text-slate-800 text-xs">
                  Sub-Total :
                </td>
                <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-indigo-950 text-xs">
                  {fmt(totalNotesAmount)}
                </td>
                <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-emerald-800 text-xs">
                  +{fmt(totalCredit)}
                </td>
                <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-rose-800 text-xs">
                  -{fmt(totalDebit)}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-2 flex items-center justify-between rounded-lg bg-blue-700 px-3.5 py-1.5 text-white shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider">Total Denomination Cash:</span>
            <span className="font-mono text-base sm:text-xl font-black">{fmt(denominationTotalCash)}</span>
          </div>
        </div>
      </div>
      {/* Footer Keypad / Buttons */}
      {showKeypad ? (
        <div className="border-t bg-slate-50 px-2.5 py-2 sm:px-4 sm:py-2.5 shrink-0 shadow-lg">
          <div className="max-w-2xl mx-auto grid grid-cols-5 gap-1.5 sm:gap-2">
            <div className="col-span-4 grid grid-cols-4 gap-1.5 sm:gap-2">
              {["7", "8", "9"].map((k) => (
                <Key key={k} label={k} onClick={() => press(k)} className="bg-white" />
              ))}
              <Key label="⌫" onClick={() => press("⌫")} className="bg-amber-100 text-amber-800 hover:bg-amber-200" />
              {["4", "5", "6"].map((k) => (
                <Key key={k} label={k} onClick={() => press(k)} className="bg-white" />
              ))}
              <Key label="C" onClick={() => press("C")} className="bg-red-100 text-red-700 hover:bg-red-200" />
              {["1", "2", "3"].map((k) => (
                <Key key={k} label={k} onClick={() => press(k)} className="bg-white" />
              ))}
              <Key label="." onClick={() => press(".")} className="bg-white" />
              <Key label="0" onClick={() => press("0")} className="bg-white" />
              <Key label="00" onClick={() => press("00")} className="bg-white" />
              <Key label="Reset" onClick={handleReset} className="bg-slate-500 !text-xs sm:!text-sm text-white hover:bg-slate-600" />
              {onApplyAmount && denominationTotalCash > 0 ? (
                <Key
                  label="Apply"
                  onClick={() => {
                    onApplyAmount(denominationTotalCash);
                    onClose();
                  }}
                  className="bg-emerald-600 !text-xs sm:!text-sm text-white hover:bg-emerald-700"
                />
              ) : (
                <Key label="Close" onClick={onClose} className="bg-slate-900 !text-xs sm:!text-sm text-white hover:bg-slate-800" />
              )}
            </div>
            <div className="grid grid-cols-1 grid-rows-4 gap-1.5 sm:gap-2">
              <Key label="▲" onClick={() => move("up")} className="bg-blue-100 text-blue-800 hover:bg-blue-200" />
              <div className="grid grid-cols-2 gap-1">
                <Key label="◄" onClick={() => move("left")} className="bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200" />
                <Key label="►" onClick={() => move("right")} className="bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200" />
              </div>
              <Key label="▼" onClick={() => move("down")} className="bg-blue-100 text-blue-800 hover:bg-blue-200" />
              <Key label="⏎" onClick={() => move("down")} className="bg-blue-600 text-white hover:bg-blue-700" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between border-t bg-slate-50 px-4 py-2.5 sm:px-6 shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg bg-slate-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-600 transition"
            >
              Reset
            </button>
            {onApplyAmount && denominationTotalCash > 0 && (
              <button
                type="button"
                onClick={() => {
                  onApplyAmount(denominationTotalCash);
                  onClose();
                }}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 transition"
              >
                Apply ({fmt(denominationTotalCash)})
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-8 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

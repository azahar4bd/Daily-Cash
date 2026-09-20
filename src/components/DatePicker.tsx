import React, { useEffect, useRef, useState } from "react";
import { getAllDatesActivity, isIntermediateBlockedDate } from "@/lib/storage";

const pad = (n: number) => String(n).padStart(2, "0");
const toISO = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;
export const todayISO = () => {
  const t = new Date();
  return toISO(t.getFullYear(), t.getMonth(), t.getDate());
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function formatDisplay(iso: string) {
  if (!iso || !iso.includes("-")) return "";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d || m < 1 || m > 12) return iso;
  return `${pad(d)} ${MONTHS[m - 1]} ${y}`;
}

export default function DatePicker({
  value,
  onChange,
  className = "",
  dropUp = false,
  onOpenTracker,
}: {
  value: string;
  onChange: (iso: string) => void;
  className?: string;
  dropUp?: boolean;
  onOpenTracker?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({});
  const [dateStatusMap, setDateStatusMap] = useState<Record<string, "closed" | "unclosed" | "blocked">>({});
  const init = value && value.includes("-") ? value : todayISO();
  const [vy, setVy] = useState(Number(init.slice(0, 4)) || new Date().getFullYear());
  const [vm, setVm] = useState((Number(init.slice(5, 7)) || new Date().getMonth() + 1) - 1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    try {
      const all = getAllDatesActivity();
      const map: Record<string, "closed" | "unclosed" | "blocked"> = {};
      all.forEach((a) => {
        if (a.isClosed) {
          map[a.date] = "closed";
        } else if (a.isOpen || a.txCount > 0 || a.srCount > 0) {
          map[a.date] = "unclosed";
        }
      });

      // Scan days in current month view to find intermediate blocked days
      const daysCount = new Date(vy, vm + 1, 0).getDate();
      for (let dayNum = 1; dayNum <= daysCount; dayNum++) {
        const iso = toISO(vy, vm, dayNum);
        if (!map[iso]) {
          const check = isIntermediateBlockedDate(iso);
          if (check.blocked) {
            map[iso] = "blocked";
          }
        }
      }

      setDateStatusMap(map);
    } catch {
      setDateStatusMap({});
    }
  }, [open, vy, vm]);

  useEffect(() => {
    if (!open || !ref.current) return;
    const updatePosition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const calWidth = Math.min(288, screenWidth - 16);

      if (dropUp) {
        if (screenWidth < 640) {
          // On mobile: calculate exact left offset relative to container so it stays fully inside viewport [8px, screenWidth - 8px]
          let targetLeft = rect.left;
          if (targetLeft + calWidth > screenWidth - 8) {
            targetLeft = screenWidth - 8 - calWidth;
          }
          if (targetLeft < 8) {
            targetLeft = 8;
          }
          const relLeft = targetLeft - rect.left;
          setPopupStyle({
            left: `${relLeft}px`,
            right: "auto",
            width: `${calWidth}px`,
          });
        } else {
          // On PC: align to right or left cleanly as before
          setPopupStyle({
            right: 0,
            left: "auto",
            width: "18rem",
          });
        }
      } else {
        // Standard dropdown: ensure it doesn't overflow right
        if (rect.left + calWidth > screenWidth - 8) {
          const shift = screenWidth - 8 - (rect.left + calWidth);
          setPopupStyle({
            left: `${shift}px`,
            width: `${calWidth}px`,
          });
        } else {
          setPopupStyle({
            left: 0,
            width: `${calWidth}px`,
          });
        }
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [open, dropUp]);

  useEffect(() => {
    if (open && value && value.includes("-")) {
      const parts = value.split("-").map(Number);
      if (parts[0]) setVy(parts[0]);
      if (parts[1]) setVm(parts[1] - 1);
    }
  }, [open, value]);

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    document.addEventListener("touchstart", h);
    return () => {
      document.removeEventListener("mousedown", h);
      document.removeEventListener("touchstart", h);
    };
  }, [open]);

  const firstDow = new Date(vy, vm, 1).getDay();
  const daysIn = new Date(vy, vm + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstDow).fill(null), ...Array.from({ length: daysIn }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);

  const prevMonth = () => {
    if (vm === 0) {
      setVm(11);
      setVy(vy - 1);
    } else setVm(vm - 1);
  };
  const nextMonth = () => {
    if (vm === 11) {
      setVm(0);
      setVy(vy + 1);
    } else setVm(vm + 1);
  };
  const pick = (iso: string) => {
    onChange(iso);
    setOpen(false);
  };

  const t = todayISO();

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded border border-slate-300 bg-white px-2.5 py-1.5 text-left font-semibold text-slate-800 focus:border-blue-500 focus:outline-none ${className}`}
      >
        <span className="truncate">{formatDisplay(value) || "Select Date"}</span>
        <span className="ml-1 text-slate-400">▼</span>
      </button>
      {open && (
        <div
          style={popupStyle}
          className={`absolute z-50 rounded-xl border border-slate-300 bg-white p-2.5 sm:p-3 shadow-2xl text-slate-900 ${
            dropUp ? "bottom-full mb-2" : "mt-1"
          }`}
        >
          <div className="mb-2 flex items-center justify-between">
            <button type="button" onClick={prevMonth} className="h-8 w-8 rounded-full text-lg hover:bg-slate-100 cursor-pointer">
              ‹
            </button>
            <div className="flex items-center gap-1 font-semibold">
              <select
                value={vm}
                onChange={(e) => setVm(Number(e.target.value))}
                className="rounded border border-slate-300 px-1 py-0.5 text-xs font-bold"
              >
                {MONTHS.map((m, i) => (
                  <option key={m} value={i}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                value={vy}
                onChange={(e) => setVy(Number(e.target.value))}
                className="rounded border border-slate-300 px-1 py-0.5 text-xs font-bold"
              >
                {Array.from({ length: 11 }, (_, i) => vy - 5 + i).map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <button type="button" onClick={nextMonth} className="h-8 w-8 rounded-full text-lg hover:bg-slate-100 cursor-pointer">
              ›
            </button>
          </div>
          <div className="grid grid-cols-7 text-center text-xs font-semibold text-slate-500">
            {DAYS.map((d, idx) => (
              <div key={d} className={`py-1 ${idx === 0 ? "text-rose-600 font-bold" : ""}`}>
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center text-sm">
            {cells.map((d, i) => {
              if (!d) return <div key={i} />;
              const iso = toISO(vy, vm, d);
              const sel = iso === value;
              const isT = iso === t;
              const isSunday = i % 7 === 0;
              const status = dateStatusMap[iso];

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => pick(iso)}
                  className={`h-9.5 rounded-lg transition relative flex flex-col items-center justify-center cursor-pointer ${
                    sel
                      ? "bg-blue-600 font-bold text-white shadow-sm"
                      : isT
                      ? "border border-blue-500 font-semibold text-blue-700 hover:bg-blue-50"
                      : isSunday
                      ? "hover:bg-rose-50 text-rose-600 font-bold"
                      : "hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  <span className="leading-none text-xs sm:text-sm">{d}</span>
                  {status && (
                    <span
                      className={`h-1.5 w-1.5 rounded-full mt-0.5 ${
                        status === "closed"
                          ? sel
                            ? "bg-emerald-300"
                            : "bg-emerald-500"
                          : status === "unclosed"
                          ? sel
                            ? "bg-amber-300 animate-pulse"
                            : "bg-amber-500 animate-pulse"
                          : sel
                          ? "bg-rose-300"
                          : "bg-rose-500"
                      }`}
                      title={
                        status === "closed"
                          ? "দিন সমাপ্ত (Day Closed)"
                          : status === "unclosed"
                          ? "অসমাপ্ত লেনদেন (Unclosed)"
                          : "মধ্যবর্তী বন্ধের দিন (এন্ট্রি ব্লকড)"
                      }
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => pick(t)}
              className="flex-1 rounded-lg bg-slate-100 py-1.5 text-xs font-semibold hover:bg-slate-200 cursor-pointer text-slate-700"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                if (onOpenTracker) onOpenTracker();
                else window.dispatchEvent(new CustomEvent("open-date-tracker"));
              }}
              className="rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1.5 text-xs font-bold transition cursor-pointer"
              title="সকল তারিখের অডিট ট্র্যাকার"
            >
              📋 ট্র্যাকার
            </button>
          </div>

          {/* Mini Legend */}
          <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium px-1">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              সমাপ্ত
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              অসমাপ্ত
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
              ব্লকড
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              আজ
            </span>
          </div>
        </div>
      )}
    </div>
  );
}


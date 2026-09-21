import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import DatePicker from "./DatePicker";
import { fmt } from "./DenominationPopup";
import { BKF_LOGO } from "@/assets/logoBase64";
import { CASH_BANK_BANNER } from "@/assets/bannerBase64";
import {
  getLocalTxs,
  getCategories,
  getReportPageFigures,
  isDayClosed,
  isIntermediateBlockedDate,
} from "@/lib/storage";
import type { Tx } from "@/types";

const NOTES_LIST = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] as const;
const CASH_SHEET_DENOM_PREFIX = "cash_sheet_denom_";

export function normalizeDigits(input: string): string {
  const bnToEnMap: Record<string, string> = {
    "০": "0", "১": "1", "২": "2", "৩": "3", "৪": "4",
    "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9",
  };
  return String(input || "")
    .replace(/[০-৯]/g, (d) => bnToEnMap[d] || d)
    .replace(/[^0-9]/g, "");
}

const getSavedQuantities = (date: string): Record<string, string> => {
  try {
    const raw = localStorage.getItem(`${CASH_SHEET_DENOM_PREFIX}${date}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch {}
  return {
    "1000": "",
    "500": "",
    "200": "",
    "100": "",
    "50": "",
    "20": "",
    "10": "",
    "5": "",
    "2": "",
    "1": "",
    coins: "",
    revenueStamp: "",
    pendingSlip: "",
  };
};

export function numberToWords(num: number): string {
  num = Math.round(Math.abs(num));
  if (num === 0) return "Taka Zero Only";
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen",
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function convertHundreds(n: number): string {
    let str = "";
    if (n >= 100) {
      str += a[Math.floor(n / 100)] + " Hundred ";
      n %= 100;
    }
    if (n >= 20) {
      str += b[Math.floor(n / 10)] + " ";
      n %= 10;
    }
    if (n > 0) {
      str += a[n] + " ";
    }
    return str.trim();
  }

  let result = "";
  const crore = Math.floor(num / 10000000);
  num %= 10000000;
  const lakh = Math.floor(num / 100000);
  num %= 100000;
  const thousand = Math.floor(num / 1000);
  num %= 1000;
  const remainder = num;

  if (crore > 0) result += convertHundreds(crore) + " Crore ";
  if (lakh > 0) result += convertHundreds(lakh) + " Lakh ";
  if (thousand > 0) result += convertHundreds(thousand) + " Thousand ";
  if (remainder > 0) result += convertHundreds(remainder);
  return "Taka " + result.trim() + " Only";
}

const getDayName = (isoDate: string) => {
  if (!isoDate) return "";
  const d = new Date(isoDate + "T00:00:00");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[d.getDay()];
};

const formatDisplayDate = (isoDate: string): string => {
  if (!isoDate) return "";
  const d = new Date(isoDate + "T00:00:00");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${d.getDate()}-${months[d.getMonth()]}-${d.getFullYear()}`;
};

export default function CashSheet({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: string;
  setSelectedDate: (d: string) => void;
}) {
  const [closingCash, setClosingCash] = useState(0);
  const [closingBank, setClosingBank] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, string>>(() =>
    getSavedQuantities(selectedDate)
  );
  const [officerAmounts, setOfficerAmounts] = useState({
    monir: 0,
    sakib: 0,
    mintu: 0,
    alamgir: 0,
    loanForms: 0,
    memberWelfare: 0,
  });
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [dayClosed, setDayClosed] = useState(false);
  const [lockPulse, setLockPulse] = useState(false);
  const flashLock = () => {
    setLockPulse(true);
    window.setTimeout(() => setLockPulse(false), 900);
  };
  const [position, setPosition] = useState<{ x: number; y: number } | null>(() => {
    try {
      const saved = localStorage.getItem("gobra_floating_pos_cashbook");
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });
  const documentRef = useRef<HTMLDivElement>(null);
  const trackerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, elemX: 0, elemY: 0, w: 50, h: 50, hasMoved: false });
  const lastToggleTime = useRef(0);

  const toggleCollapse = () => {
    const now = Date.now();
    if (now - lastToggleTime.current < 250) return;
    lastToggleTime.current = now;
    setIsCollapsed((prev) => !prev);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    const rect = trackerRef.current?.getBoundingClientRect();
    if (!rect) return;

    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      elemX: rect.left,
      elemY: rect.top,
      w: rect.width,
      h: rect.height,
      hasMoved: false,
    };
    isDragging.current = true;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    const dist = Math.hypot(dx, dy);

    if (!dragStart.current.hasMoved && dist > 6) {
      dragStart.current.hasMoved = true;
    }

    if (dragStart.current.hasMoved) {
      const maxX = Math.max(10, window.innerWidth - dragStart.current.w - 6);
      const maxY = Math.max(10, window.innerHeight - dragStart.current.h - 6);
      const newX = Math.max(6, Math.min(maxX, dragStart.current.elemX + dx));
      const newY = Math.max(6, Math.min(maxY, dragStart.current.elemY + dy));
      setPosition({ x: newX, y: newY });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    if (dragStart.current.hasMoved) {
      const rect = trackerRef.current?.getBoundingClientRect();
      if (rect) {
        const finalPos = { x: Math.round(rect.left), y: Math.round(rect.top) };
        try {
          localStorage.setItem("gobra_floating_pos_cashbook", JSON.stringify(finalPos));
        } catch {}
      }
    } else {
      toggleCollapse();
    }
  };

  const handleTrackerClick = (e: React.MouseEvent) => {
    if (dragStart.current.hasMoved) {
      e.stopPropagation();
      dragStart.current.hasMoved = false;
      return;
    }
    toggleCollapse();
  };

  const loadData = () => {
    // Exact Report Page figures for Cash in Hand and Bank Balance
    const rep = getReportPageFigures(selectedDate);
    setClosingCash(rep.reportCashInHand);
    setClosingBank(rep.reportBankBalance);
    const closed = isDayClosed(selectedDate);
    setDayClosed(closed);

    const allTx: Tx[] = getLocalTxs();
    const dCats = getCategories("disburse").map((c) => c.name.toLowerCase().trim());

    const dateReceive = allTx.filter((t) => t.txDate === selectedDate && t.type === "receive");
    const datePayment = allTx.filter((t) => t.txDate === selectedDate && t.type === "payment");

    let monirSum = 0;
    let sakibSum = 0;
    let mintuSum = 0;
    let alamgirSum = 0;
    let manualLoanFormsReceive = 0;
    let manualWelfareReceive = 0;

    for (const t of dateReceive) {
      const cat = t.category.toLowerCase().trim();
      const amt = Math.round(Number(t.amount) || 0);
      if (cat.includes("monir")) monirSum += amt;
      else if (cat.includes("sakib")) sakibSum += amt;
      else if (cat.includes("mintu")) mintuSum += amt;
      else if (cat.includes("alamgir")) alamgirSum += amt;
      else if (cat.includes("loan form") || cat.includes("sale")) manualLoanFormsReceive += amt;
      else if (cat.includes("welfare") || cat.includes("kallayan") || cat.includes("member")) manualWelfareReceive += amt;
    }

    const disburseLoans = datePayment.filter((t) => {
      const cat = t.category.toLowerCase().trim();
      return dCats.includes(cat) || Boolean(t.subCategory && t.subCategory.trim().length > 0);
    });

    const disburseCount = disburseLoans.length;
    const loanFormsCalculated = disburseCount * 5;
    const loanFormsFinal = disburseCount > 0 ? loanFormsCalculated : manualLoanFormsReceive;

    let buniyadDisburseTotal = 0;
    let otherDisburseTotal = 0;
    for (const t of disburseLoans) {
      const amt = Number(t.amount) || 0;
      const cat = t.category.toLowerCase().trim();
      if (cat.includes("buni")) buniyadDisburseTotal += amt;
      else otherDisburseTotal += amt;
    }

    const welfareCalculated = Math.round(otherDisburseTotal * 0.01 + buniyadDisburseTotal * 0.005);
    const welfareFinal = disburseLoans.length > 0 ? welfareCalculated : manualWelfareReceive;

    setOfficerAmounts({
      monir: monirSum,
      sakib: sakibSum,
      mintu: mintuSum,
      alamgir: alamgirSum,
      loanForms: loanFormsFinal,
      memberWelfare: welfareFinal,
    });
  };

  // Only load quantities when the selected date changes (never on tx background events)
  useEffect(() => {
    setQuantities(getSavedQuantities(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    loadData();
    const onTx = () => loadData();
    const onDayClose = () => loadData();
    window.addEventListener("tx-changed", onTx);
    window.addEventListener("day-close-changed", onDayClose);
    return () => {
      window.removeEventListener("tx-changed", onTx);
      window.removeEventListener("day-close-changed", onDayClose);
    };
  }, [selectedDate]);

  const noteTotal = NOTES_LIST.reduce((acc, n) => {
    const qty = parseInt(quantities[String(n)] || "0", 10) || 0;
    return acc + qty * n;
  }, 0);
  const coinsAmt = Math.round(Number(quantities.coins || 0));
  // প্রতি Revenue Stamp = ১০ টাকা → সংখ্যা × ১০ (যেমন 20 → 200)
  const revenueStampAmt = Math.round(Number(quantities.revenueStamp || 0)) * 10;
  const pendingSlipAmt = Math.round(Number(quantities.pendingSlip || 0));
  const totalDenomination = noteTotal + coinsAmt + revenueStampAmt + pendingSlipAmt;

  const totalOfficersReceived =
    officerAmounts.monir +
    officerAmounts.sakib +
    officerAmounts.mintu +
    officerAmounts.alamgir +
    officerAmounts.loanForms +
    officerAmounts.memberWelfare;

  const handleQtyChange = (key: string, rawVal: string) => {
    if (dayClosed) {
      flashLock();
      return;
    }
    const val = normalizeDigits(rawVal);
    setQuantities((prev) => {
      const next = { ...prev, [key]: val };
      try {
        localStorage.setItem(`${CASH_SHEET_DENOM_PREFIX}${selectedDate}`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleClearQuantities = () => {
    if (dayClosed) {
      flashLock();
      return;
    }
    const empty: Record<string, string> = {
      "1000": "",
      "500": "",
      "200": "",
      "100": "",
      "50": "",
      "20": "",
      "10": "",
      "5": "",
      "2": "",
      "1": "",
      coins: "",
      revenueStamp: "",
      pendingSlip: "",
    };
    setQuantities(empty);
    try {
      localStorage.setItem(`${CASH_SHEET_DENOM_PREFIX}${selectedDate}`, JSON.stringify(empty));
    } catch {}
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    setPdfGenerating(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");
      const element = document.getElementById("cash-sheet-document");
      if (!element) return;
      const canvas = await html2canvas(element, { scale: 2, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm
      const margin = 5;
      const maxW = pageWidth - margin * 2; // 200mm
      const maxH = pageHeight - margin * 2; // 287mm

      let finalW = maxW;
      let finalH = (canvas.height * finalW) / canvas.width;
      if (finalH > maxH) {
        finalH = maxH;
        finalW = (canvas.width * finalH) / canvas.height;
      }
      const posX = (pageWidth - finalW) / 2;
      const posY = (pageHeight - finalH) / 2;
      pdf.addImage(imgData, "JPEG", posX, posY, finalW, finalH);
      pdf.save(`Cash_Sheet_GOBRA_${selectedDate}.pdf`);
    } catch {
      window.print();
    } finally {
      setPdfGenerating(false);
    }
  };

  const renderContent = (isInteractive: boolean = true) => (
    <div className="cash-sheet-print-container w-full bg-white p-4 sm:p-6 print:p-0 text-slate-950 font-serif flex flex-col justify-between print:h-auto print:justify-start box-border">
      <div className="flex-1 flex flex-col justify-start">
        {/* Document Header (Logo + Title, centered) */}
        <div className="flex items-center justify-center gap-3 mb-1 print:mb-0.5">
          <img
            src={BKF_LOGO}
            alt="BKF Logo"
            className="h-14 sm:h-16 w-auto object-contain print:h-9"
          />
          <div className="text-left">
            <h1 className="text-2xl sm:text-4xl print:text-lg font-black font-serif text-slate-900 leading-tight tracking-wide sm:whitespace-nowrap">
              Bandhu Kallyan Foundation
            </h1>
            <p className="text-sm sm:text-base print:text-[10px] font-bold font-serif text-slate-800 tracking-wide mt-0.5">
              GOBRA BRANCH-0014 Branch.
            </p>
          </div>
        </div>

        {/* Stylized Scroll Banner: Cash & Bank Information (लाल চিহ্নিত অংশ) */}
        <div className="flex justify-center my-1 print:my-0.5">
          <img
            src={CASH_BANK_BANNER}
            alt="Cash & Bank Information"
            className="h-12 sm:h-16 print:h-8 w-auto object-contain"
          />
        </div>

        {/* Date Box (Right Aligned Rectangle) */}
        <div className="flex justify-end mb-2 print:mb-1">
          <div className="border border-black px-4 py-0.5 print:py-0.5 text-xs sm:text-sm print:text-xs font-bold font-serif text-center w-48 sm:w-52">
            {formatDisplayDate(selectedDate)}
          </div>
        </div>

        {/* Section A: Cash & Bank Information */}
        <div className="mb-3 print:mb-1.5">
          <div className="mb-1 print:mb-0.5 flex items-center justify-between text-xs sm:text-sm print:text-xs font-bold text-slate-900">
            <span>A. Cash &amp; Bank Information:</span>
            <span className="pr-16 sm:pr-20 print:pr-16">Day: {getDayName(selectedDate)}</span>
          </div>
          <table className="w-full border-collapse border-spacing-0 text-xs sm:text-sm print:text-xs">
            <tbody>
              <tr>
                <td className="border border-black px-3 py-1.5 sm:py-2 print:py-0.5 font-medium">
                  Closing Cash in Hand: TK (BDT)
                </td>
                <td className="w-48 sm:w-56 print:w-56 border border-black px-3 py-1.5 sm:py-2 print:py-0.5 text-right font-mono font-bold">
                  {fmt(closingCash)}
                </td>
                <td className="w-16 sm:w-20 print:w-16 border-0 border-transparent p-0"></td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-1.5 sm:py-2 print:py-0.5 font-medium">
                  Closing Cash at Bank: TK (BDT)
                </td>
                <td className="w-48 sm:w-56 print:w-56 border border-black px-3 py-1.5 sm:py-2 print:py-0.5 text-right font-mono font-bold">
                  {fmt(closingBank)}
                </td>
                <td className="w-16 sm:w-20 print:w-16 border-0 border-transparent p-0"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section B: Denominations */}
        <div className="mb-3 print:mb-1.5">
          <div className="mb-1 print:mb-0.5 flex items-center justify-between text-xs sm:text-sm print:text-xs font-bold text-slate-900">
            <span>B. Denominations of Cash / Notes :</span>
            {isInteractive && (
              <button
                type="button"
                disabled={dayClosed}
                onClick={handleClearQuantities}
                className={`print:hidden rounded px-2 py-0.5 text-[11px] font-bold text-white transition ${
                  dayClosed
                    ? "bg-slate-400 cursor-not-allowed opacity-50"
                    : "bg-slate-500 hover:bg-slate-600 cursor-pointer"
                }`}
                title={dayClosed ? "দিন সমাপ্ত (Locked) — উপরের Working-Day বার থেকে Re-open করুন" : "সকল নোট খালি করুন"}
              >
                Reset
              </button>
            )}
          </div>
          <table className="w-full border-collapse border border-black text-xs sm:text-sm print:text-[11px]">
            <thead>
              <tr className="bg-slate-50 print:bg-transparent">
                <th colSpan={2} className="border border-black px-2 py-1 print:py-0.5 text-center font-bold">
                  Particulars
                </th>
                <th rowSpan={2} className="w-28 sm:w-32 print:w-32 border border-black px-2 py-1 print:py-0.5 text-center font-bold">
                  TK (BDT)
                </th>
                <th rowSpan={2} className="w-16 sm:w-20 print:w-16 border border-black px-2 py-1 print:py-0.5 text-center font-bold">
                  Ps
                </th>
              </tr>
              <tr className="bg-slate-50 print:bg-transparent">
                <th className="border border-black px-2 py-0.5 print:py-0.5 text-center font-semibold">
                  Notes / Others
                </th>
                <th className="w-20 sm:w-24 print:w-24 border border-black px-2 py-0.5 print:py-0.5 text-center font-semibold">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {NOTES_LIST.map((note) => {
                const qty = parseInt(quantities[String(note)] || "0", 10) || 0;
                const rowTk = qty * note;
                return (
                  <tr key={note}>
                    <td className="border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-mono font-bold">
                      {note}
                    </td>
                    <td className="border border-black px-1.5 py-0.5 print:py-0.5 text-center">
                      {isInteractive ? (
                        <>
                          <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck={false}
                            disabled={dayClosed}
                            readOnly={dayClosed}
                            value={quantities[String(note)] || ""}
                            onChange={(e) => handleQtyChange(String(note), e.target.value)}
                            onFocus={(e) => {
                              if (dayClosed) return;
                              e.target.select();
                            }}
                            placeholder="0"
                            className={`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${
                              dayClosed
                                ? "bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70"
                                : "bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"
                            }`}
                          />
                          <span className="hidden print:inline font-mono font-bold">
                            {qty > 0 ? qty : "-"}
                          </span>
                        </>
                      ) : (
                        <span className="font-mono font-bold">{qty > 0 ? qty : "-"}</span>
                      )}
                    </td>
                    <td className="border border-black px-2.5 py-0.5 sm:py-1 print:py-1 text-right font-mono font-semibold">
                      {rowTk > 0 ? fmt(rowTk) : "-"}
                    </td>
                    <td className="border border-black px-1.5 py-0.5 print:py-1 text-center font-mono text-slate-400">-</td>
                  </tr>
                );
              })}
              <tr>
                <td className="border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium">
                  Coins (1+2+5) Taka
                </td>
                <td className="border border-black px-1.5 py-0.5 print:py-0.5 text-center">
                  {isInteractive ? (
                    <>
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        disabled={dayClosed}
                        readOnly={dayClosed}
                        value={quantities.coins || ""}
                        onChange={(e) => handleQtyChange("coins", e.target.value)}
                        onFocus={(e) => {
                          if (dayClosed) return;
                          e.target.select();
                        }}
                        placeholder="0"
                        className={`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${
                          dayClosed
                            ? "bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70"
                            : "bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"
                        }`}
                      />
                      <span className="hidden print:inline font-mono font-bold">
                        {quantities.coins || "-"}
                      </span>
                    </>
                  ) : (
                    <span>{quantities.coins || "-"}</span>
                  )}
                </td>
                <td className="border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold">
                  {coinsAmt > 0 ? fmt(coinsAmt) : "-"}
                </td>
                <td className="border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400">-</td>
              </tr>
              <tr>
                <td className="border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium">
                  Revenue Stamp
                  <span className="print:hidden ml-1 text-[9px] font-black text-indigo-600">×১০</span>
                </td>
                <td className="border border-black px-1.5 py-0.5 print:py-0.5 text-center">
                  {isInteractive ? (
                    <>
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        disabled={dayClosed}
                        readOnly={dayClosed}
                        value={quantities.revenueStamp || ""}
                        onChange={(e) => handleQtyChange("revenueStamp", e.target.value)}
                        onFocus={(e) => {
                          if (dayClosed) return;
                          e.target.select();
                        }}
                        placeholder="0"
                        className={`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${
                          dayClosed
                            ? "bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70"
                            : "bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"
                        }`}
                      />
                      <span className="hidden print:inline font-mono font-bold">
                        {quantities.revenueStamp ? quantities.revenueStamp : "-"}
                      </span>
                    </>
                  ) : (
                    <span>{quantities.revenueStamp || "-"}</span>
                  )}
                </td>
                <td className="border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold">
                  {revenueStampAmt > 0 ? fmt(revenueStampAmt) : "-"}
                </td>
                <td className="border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400">-</td>
              </tr>
              <tr>
                <td className="border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium">
                  Pending Slip
                </td>
                <td className="border border-black px-1.5 py-0.5 print:py-0.5 text-center">
                  {isInteractive ? (
                    <>
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        disabled={dayClosed}
                        readOnly={dayClosed}
                        value={quantities.pendingSlip || ""}
                        onChange={(e) => handleQtyChange("pendingSlip", e.target.value)}
                        onFocus={(e) => {
                          if (dayClosed) return;
                          e.target.select();
                        }}
                        placeholder="0"
                        className={`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${
                          dayClosed
                            ? "bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70"
                            : "bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"
                        }`}
                      />
                      <span className="hidden print:inline font-mono font-bold">
                        {quantities.pendingSlip ? quantities.pendingSlip : "-"}
                      </span>
                    </>
                  ) : (
                    <span>{quantities.pendingSlip || "-"}</span>
                  )}
                </td>
                <td className="border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold">
                  {pendingSlipAmt > 0 ? fmt(pendingSlipAmt) : "-"}
                </td>
                <td className="border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400">-</td>
              </tr>
              <tr className="font-bold bg-slate-50 print:bg-transparent">
                <td colSpan={2} className="border border-black px-2.5 py-1 print:py-0.5 text-right font-bold">
                  Total :
                </td>
                <td className="border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold">
                  {totalDenomination > 0 ? fmt(totalDenomination) : "-"}
                </td>
                <td className="border border-black px-1.5 py-1 print:py-0.5 text-center font-mono text-slate-400">-</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-1 print:mt-0.5 text-xs print:text-[10.5px] font-semibold text-slate-800">
            <span className="font-bold">In Word:</span> {numberToWords(totalDenomination)}
          </div>
        </div>

        {/* Section C: Credit Officer & Others Cash Received Information */}
        <div className="mb-2 print:mb-1">
          <div className="mb-1 print:mb-0.5 text-xs sm:text-sm print:text-xs font-bold text-slate-900">
            C. Credit Officer &amp; Others Cash Received Information.
          </div>
          <table className="w-full border-collapse border border-black text-xs sm:text-sm print:text-[11px]">
            <thead>
              <tr className="bg-slate-50 print:bg-transparent">
                <th className="w-10 sm:w-12 print:w-12 border border-black px-2 py-1 print:py-0.5 text-center font-bold">
                  S.L
                </th>
                <th className="border border-black px-2.5 py-1 print:py-0.5 text-left font-bold">
                  Employee Name
                </th>
                <th className="w-16 sm:w-20 print:w-20 border border-black px-2 py-1 print:py-0.5 text-center font-bold">
                  PIN
                </th>
                <th className="w-28 sm:w-32 print:w-32 border border-black px-2 py-1 print:py-0.5 text-right font-bold">
                  TK (BDT)
                </th>
                <th className="w-28 sm:w-36 print:w-36 border border-black px-2 py-1 print:py-0.5 text-center font-bold">
                  Employee Signature
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-2 py-1 print:py-0.5 text-center font-mono">1</td>
                <td className="border border-black px-2.5 py-1 print:py-0.5 font-medium">Md Monirul Islam</td>
                <td className="border border-black px-2 py-1 print:py-0.5 text-center font-mono">621</td>
                <td className="border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold">
                  {fmt(officerAmounts.monir)}
                </td>
                <td className="border border-black px-2 py-1 print:py-0.5"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 print:py-1.5 text-center font-mono">2</td>
                <td className="border border-black px-2.5 py-1 print:py-1.5 font-medium">Ezaz Sakib</td>
                <td className="border border-black px-2 py-1 print:py-1.5 text-center font-mono">1086</td>
                <td className="border border-black px-2.5 py-1 print:py-1.5 text-right font-mono font-bold">
                  {fmt(officerAmounts.sakib)}
                </td>
                <td className="border border-black px-2 py-1 print:py-1.5"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 print:py-1.5 text-center font-mono">3</td>
                <td className="border border-black px-2.5 py-1 print:py-1.5 font-medium">Md:Mintu Moholdar</td>
                <td className="border border-black px-2 py-1 print:py-1.5 text-center font-mono">1189</td>
                <td className="border border-black px-2.5 py-1 print:py-1.5 text-right font-mono font-bold">
                  {fmt(officerAmounts.mintu)}
                </td>
                <td className="border border-black px-2 py-1 print:py-1.5"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 print:py-1.5 text-center font-mono">4</td>
                <td className="border border-black px-2.5 py-1 print:py-1.5 font-medium">Md Alamgir Hossain</td>
                <td className="border border-black px-2 py-1 print:py-1.5 text-center font-mono">1224</td>
                <td className="border border-black px-2.5 py-1 print:py-1.5 text-right font-mono font-bold">
                  {fmt(officerAmounts.alamgir)}
                </td>
                <td className="border border-black px-2 py-1 print:py-1.5"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 print:py-1.5 text-center font-mono">5</td>
                <td className="border border-black px-2.5 py-1 print:py-1.5 font-medium">Sales of Loan Forms</td>
                <td className="border border-black px-2 py-1 print:py-1.5 text-center font-mono">-</td>
                <td className="border border-black px-2.5 py-1 print:py-1.5 text-right font-mono font-bold">
                  {fmt(officerAmounts.loanForms)}
                </td>
                <td className="border border-black px-2 py-1 print:py-1.5"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 print:py-0.5 text-center font-mono">6</td>
                <td className="border border-black px-2.5 py-1 print:py-0.5 font-medium">Member Welfare Fund</td>
                <td className="border border-black px-2 py-1 print:py-0.5 text-center font-mono">-</td>
                <td className="border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold">
                  {fmt(officerAmounts.memberWelfare)}
                </td>
                <td className="border border-black px-2 py-1 print:py-0.5"></td>
              </tr>
              <tr className="font-bold bg-slate-50 print:bg-transparent">
                <td colSpan={3} className="border border-black px-2.5 py-1.5 print:py-0.5 text-right font-bold">
                  Total :
                </td>
                <td className="border border-black px-2.5 py-1.5 print:py-0.5 text-right font-mono font-bold">
                  {fmt(totalOfficersReceived)}
                </td>
                <td className="border border-black px-2.5 py-1.5 print:py-0.5"></td>
              </tr>
            </tbody>
          </table>
          <div className="mt-1 print:mt-0.5 text-xs print:text-[10.5px] font-semibold text-slate-800">
            <span className="font-bold">In Word:</span> {numberToWords(totalOfficersReceived)}
          </div>
        </div>
      </div>

      {/* Signatures */}
      <div className="signatures-block mt-6 sm:mt-8 print:mt-6 pt-3 print:pt-3 pb-1 flex items-center justify-between px-16 print:px-14 text-xs sm:text-sm print:text-xs font-bold font-serif">
        <div className="text-center">
          <div className="h-10 sm:h-12 print:h-10"></div>
          <div className="w-32 sm:w-36 border-t border-black pt-1">Accountant</div>
        </div>
        <div className="text-center">
          <div className="h-10 sm:h-12 print:h-10"></div>
          <div className="w-32 sm:w-36 border-t border-black pt-1">Manager</div>
        </div>
      </div>
    </div>
  );
  const diffDenomVsCash = totalDenomination - closingCash;

  return (
    <div className="space-y-4">
      {/* Print Styles for Guaranteed Single Page */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 4mm 8mm;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            overflow: hidden !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: white !important;
          }
          #cash-sheet-document {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            max-height: 288mm !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            box-sizing: border-box !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
            page-break-before: avoid !important;
            break-inside: avoid !important;
            break-after: avoid !important;
          }
          .cash-sheet-print-container {
            width: 100% !important;
            height: auto !important;
            max-height: 288mm !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            box-sizing: border-box !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .signatures-block {
            page-break-before: avoid !important;
            page-break-inside: avoid !important;
            break-before: avoid !important;
            break-inside: avoid !important;
          }
          table {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>

      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-200 print:hidden">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-700">Date:</label>
          <div className="w-44">
            <DatePicker
              value={selectedDate}
              onChange={(v) => setSelectedDate(v)}
              className="px-3 py-1.5 text-xs sm:text-sm"
            />
          </div>
          {dayClosed && (
            <span
              className={`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-1 text-[10px] font-black text-rose-700 ${
                lockPulse ? "lock-pulse" : ""
              }`}
              title="দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে"
            >
              🔒 Day Closed
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* ℹ️ Day Open / Day Close কন্ট্রোল একটিই জায়গায় (উপরের Working-Day বার) — ক্যাশবুকে কোনো বাটন নেই */}

          <button
            type="button"
            onClick={() => setPdfModalOpen(true)}
            className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-blue-700"
          >
            👁 PDF View
          </button>
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={pdfGenerating}
            className="rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-emerald-700 disabled:opacity-50"
          >
            {pdfGenerating ? "Generating..." : "⬇ Download PDF"}
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="rounded-lg bg-slate-900 px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-slate-800"
          >
            🖨 Print
          </button>
        </div>
      </div>

      {/* Intermediate Blocked Notice Banner */}
      {!dayClosed && isIntermediateBlockedDate(selectedDate).blocked && (
        <div className="rounded-2xl border border-rose-400 bg-rose-50 p-3.5 text-xs sm:text-sm font-bold text-rose-950 shadow-xs flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-base">🚫</span>
            <span>{isIntermediateBlockedDate(selectedDate).reason}</span>
          </div>
        </div>
      )}

      {/* Main Document */}
      <div
        id="cash-sheet-document"
        ref={documentRef}
        className="w-full bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden print:border-none print:shadow-none print:rounded-none print:m-0 print:p-0"
      >
        {renderContent(true)}
      </div>

      {/* Moveable Difference Window - Attached to body via Portal to stay 100% fixed on screen scrolling */}
      {typeof document !== "undefined" && createPortal(
        <div
          ref={trackerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClick={handleTrackerClick}
          style={
            position
              ? {
                  transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                  left: 0,
                  top: 0,
                  right: "auto",
                  bottom: "auto",
                  touchAction: "none",
                }
              : {
                  right: "16px",
                  bottom: "75px",
                  touchAction: "none",
                }
          }
          className="fixed z-40 print:hidden select-none drop-shadow-2xl cursor-grab active:cursor-grabbing touch-none"
        >
          {isCollapsed ? (
            /* কলাপ্স অবস্থা: ছোট গোল ফ্লোটিং বাটন - Moveable & Clickable */
            <div
              onClick={handleTrackerClick}
              className={`relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full shadow-2xl border backdrop-blur-md cursor-grab active:cursor-grabbing touch-none select-none ${
                diffDenomVsCash === 0
                  ? "bg-slate-900/95 border-emerald-500/80 text-emerald-300 ring-2 ring-emerald-500/30"
                  : "bg-slate-900/95 border-rose-500/80 text-rose-300 ring-2 ring-rose-500/30"
              }`}
              title="পার্থক্য ট্র্যাকার (টেনে যেকোনো দিকে সরানো যাবে / ট্যাপ করলে খুলবে)"
            >
              <span className="text-lg sm:text-xl leading-none select-none pointer-events-none">⚖️</span>
              <span
                className={`absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-4.5 sm:min-w-[18px] items-center justify-center rounded-full px-1 text-[9px] font-mono font-black shadow pointer-events-none ${
                  diffDenomVsCash === 0
                    ? "bg-emerald-400 text-slate-950"
                    : "bg-rose-500 text-white"
                }`}
              >
                {diffDenomVsCash === 0
                  ? "0"
                  : diffDenomVsCash > 0
                  ? `+${fmt(diffDenomVsCash)}`
                  : `-${fmt(Math.abs(diffDenomVsCash))}`}
              </span>
            </div>
          ) : (
            /* এক্সপান্ড অবস্থা: ছোট উইন্ডো - Moveable & Clickable */
            <div
              className={`rounded-xl px-2.5 py-1.5 shadow-2xl border backdrop-blur-md w-auto min-w-[105px] max-w-[145px] touch-none select-none ${
                diffDenomVsCash === 0
                  ? "bg-slate-900/95 border-emerald-500/80 text-white ring-2 ring-emerald-500/30"
                  : "bg-slate-900/95 border-rose-500/80 text-white ring-2 ring-rose-500/30"
              }`}
              title="টেনে যেকোনো জায়গায় সরানো যাবে"
            >
              {/* ছোট হেডার ও ড্র্যাগ বার */}
              <div
                onClick={handleTrackerClick}
                className="flex items-center justify-between gap-1 pb-1 border-b border-slate-800 text-[10px] cursor-grab active:cursor-grabbing"
              >
                <span className="flex items-center gap-1 font-bold text-amber-400">
                  <span className="text-slate-400 text-[10px]">⠿</span>
                  <span>⚖️ ডিফারেন্স</span>
                </span>
                <span
                  onPointerDown={(e) => e.stopPropagation()}
                  onPointerUp={(e) => {
                    e.stopPropagation();
                    setIsCollapsed(true);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCollapsed(true);
                  }}
                  className="text-[10px] text-slate-400 hover:text-white cursor-pointer font-bold px-1 rounded hover:bg-slate-800"
                  title="কোলাপ্স করুন"
                >
                  ✕
                </span>
              </div>

              {/* শুধু ডিফারেন্স সংখ্যা */}
              <div
                onClick={handleTrackerClick}
                className="text-center py-1 cursor-grab active:cursor-grabbing"
              >
                <div
                  className={`font-mono font-black text-sm sm:text-base leading-tight tracking-tight ${
                    diffDenomVsCash === 0 ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {diffDenomVsCash === 0
                    ? "0"
                    : diffDenomVsCash > 0
                    ? `+${fmt(diffDenomVsCash)}`
                    : `-${fmt(Math.abs(diffDenomVsCash))}`}
                </div>
              </div>
            </div>
          )}
        </div>,
        document.body
      )}

      {/* PDF View Modal */}
      {pdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-2 sm:p-4">
          <div className="flex h-[94vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white">
              <h3 className="font-bold text-sm sm:text-base">PDF View - Cash &amp; Bank Information</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white"
                >
                  Download
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white"
                >
                  Print
                </button>
                <button
                  type="button"
                  onClick={() => setPdfModalOpen(false)}
                  className="text-2xl text-slate-300 hover:text-white"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-200 p-3 sm:p-6 overflow-auto flex justify-center">
              <div className="w-full max-w-[820px] shadow-2xl rounded border bg-white">
                {renderContent(false)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import DatePicker from "./DatePicker";
import { fmt } from "./DenominationPopup";
import { getSummary, getLocalTxs, getCategories } from "@/lib/storage";
import type { Tx } from "@/types";

const NOTES_LIST = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] as const;

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

export default function CashSheet({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: string;
  setSelectedDate: (d: string) => void;
}) {
  const [closingCash, setClosingCash] = useState(0);
  const [closingBank, setClosingBank] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, string>>({
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
  });
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
  const documentRef = useRef<HTMLDivElement>(null);

  const loadData = () => {
    const sum = getSummary(selectedDate);
    setClosingCash(Math.round(sum.todayCashInHand || sum.cash || 0));
    setClosingBank(Math.round(sum.todayBankBalance || sum.bank || 0));

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
    const aggregatedNotes: Record<string, number> = {};

    for (const t of dateReceive) {
      const cat = t.category.toLowerCase().trim();
      const amt = Math.round(Number(t.amount) || 0);
      if (cat.includes("monir")) monirSum += amt;
      else if (cat.includes("sakib")) sakibSum += amt;
      else if (cat.includes("mintu")) mintuSum += amt;
      else if (cat.includes("alamgir")) alamgirSum += amt;
      else if (cat.includes("loan form") || cat.includes("sale")) manualLoanFormsReceive += amt;
      else if (cat.includes("welfare") || cat.includes("kallayan") || cat.includes("member")) manualWelfareReceive += amt;

      if (t.denomination) {
        for (const [k, v] of Object.entries(t.denomination)) {
          aggregatedNotes[k] = (aggregatedNotes[k] || 0) + (Number(v) || 0);
        }
      }
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

    if (Object.keys(aggregatedNotes).length > 0) {
      setQuantities((prev) => {
        const next = { ...prev };
        for (const n of NOTES_LIST) {
          const count = aggregatedNotes[String(n)];
          if (count) next[String(n)] = String(count);
        }
        return next;
      });
    }
  };

  useEffect(() => {
    loadData();
    window.addEventListener("tx-changed", loadData);
    return () => window.removeEventListener("tx-changed", loadData);
  }, [selectedDate]);

  const noteTotal = NOTES_LIST.reduce((acc, n) => {
    const qty = parseInt(quantities[String(n)] || "0", 10) || 0;
    return acc + qty * n;
  }, 0);
  const coinsAmt = Math.round(Number(quantities.coins || 0));
  const revenueStampAmt = Math.round(Number(quantities.revenueStamp || 0));
  const pendingSlipAmt = Math.round(Number(quantities.pendingSlip || 0));
  const totalDenomination = noteTotal + coinsAmt + revenueStampAmt + pendingSlipAmt;

  const totalOfficersReceived =
    officerAmounts.monir +
    officerAmounts.sakib +
    officerAmounts.mintu +
    officerAmounts.alamgir +
    officerAmounts.loanForms +
    officerAmounts.memberWelfare;

  const handleQtyChange = (key: string, val: string) => {
    setQuantities((prev) => ({ ...prev, [key]: val }));
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
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save(`Cash_Sheet_GOBRA_${selectedDate}.pdf`);
    } catch {
      window.print();
    } finally {
      setPdfGenerating(false);
    }
  };

  const renderContent = (isInteractive: boolean = true) => (
    <div className="w-full bg-white p-6 sm:p-10 text-slate-950 font-sans flex flex-col justify-between min-h-[950px]">
      <div>
        {/* Document Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-black font-serif text-slate-900">
            Bandhu Kallyan Foundation
          </h1>
          <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
            GOBRA BRANCH-0014 Branch.
          </p>
          <div className="my-2 inline-block border-2 border-blue-900 bg-white px-6 py-0.5 rounded-sm">
            <span className="font-serif italic font-extrabold text-base sm:text-lg text-blue-950">
              Cash &amp; Bank Information
            </span>
          </div>
          <div className="flex justify-end mt-1">
            <div className="border border-slate-800 px-3 py-0.5 text-xs font-bold font-mono">
              Date: {selectedDate}
            </div>
          </div>
        </div>

        {/* Section A: Cash & Bank Information */}
        <div className="mb-4">
          <div className="mb-1 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
            <span>A. Cash &amp; Bank Information:</span>
            <span>Day: {getDayName(selectedDate)}</span>
          </div>
          <table className="w-full border-collapse border-2 border-black text-xs sm:text-sm">
            <tbody>
              <tr>
                <td className="w-2/3 border border-black px-4 py-1.5 font-medium">
                  Closing Cash in Hand: TK (BDT)
                </td>
                <td className="w-1/3 border border-black px-4 py-1.5 text-right font-mono font-bold">
                  {fmt(closingCash)}
                </td>
              </tr>
              <tr>
                <td className="w-2/3 border border-black px-4 py-1.5 font-medium">
                  Closing Cash at Bank: TK (BDT)
                </td>
                <td className="w-1/3 border border-black px-4 py-1.5 text-right font-mono font-bold">
                  {fmt(closingBank)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section B: Denominations */}
        <div className="mb-4">
          <div className="mb-1 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
            <span>B. Denominations of Cash / Notes :</span>
            {isInteractive && (
              <button
                type="button"
                onClick={() =>
                  setQuantities({
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
                  })
                }
                className="print:hidden rounded bg-slate-500 px-2.5 py-0.5 text-xs text-white"
              >
                Reset
              </button>
            )}
          </div>
          <table className="w-full border-collapse border-2 border-black text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th colSpan={2} className="border border-black px-2 py-1 text-center font-bold">Particulars</th>
                <th rowSpan={2} className="w-32 border border-black px-2 py-1 text-center font-bold">TK (BDT)</th>
                <th rowSpan={2} className="w-16 border border-black px-2 py-1 text-center font-bold">Ps</th>
              </tr>
              <tr className="bg-slate-100">
                <th className="border border-black px-2 py-1 text-center font-semibold">Notes</th>
                <th className="w-24 border border-black px-2 py-1 text-center font-semibold">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {NOTES_LIST.map((note) => {
                const qty = parseInt(quantities[String(note)] || "0", 10) || 0;
                const rowTk = qty * note;
                return (
                  <tr key={note}>
                    <td className="border border-black px-3 py-1 text-center font-mono font-bold">{note}</td>
                    <td className="border border-black px-2 py-0.5 text-center">
                      {isInteractive ? (
                        <input
                          type="number"
                          min="0"
                          value={quantities[String(note)]}
                          onChange={(e) => handleQtyChange(String(note), e.target.value)}
                          placeholder="-"
                          className="w-full text-center font-mono text-xs sm:text-sm font-bold focus:outline-none"
                        />
                      ) : (
                        <span className="font-mono font-bold">{qty > 0 ? qty : "-"}</span>
                      )}
                    </td>
                    <td className="border border-black px-3 py-1 text-right font-mono font-semibold">
                      {rowTk > 0 ? fmt(rowTk) : "-"}
                    </td>
                    <td className="border border-black px-2 py-1 text-center font-mono text-slate-400">-</td>
                  </tr>
                );
              })}
              <tr>
                <td className="border border-black px-3 py-1 text-center">Coins (1+2+5)</td>
                <td className="border border-black px-2 py-0.5 text-center">
                  {isInteractive ? (
                    <input
                      type="number"
                      value={quantities.coins}
                      onChange={(e) => handleQtyChange("coins", e.target.value)}
                      placeholder="-"
                      className="w-full text-center font-mono text-xs sm:text-sm font-bold focus:outline-none"
                    />
                  ) : (
                    <span>{quantities.coins || "-"}</span>
                  )}
                </td>
                <td className="border border-black px-3 py-1 text-right font-mono font-semibold">
                  {coinsAmt > 0 ? fmt(coinsAmt) : "-"}
                </td>
                <td className="border border-black px-2 py-1 text-center font-mono text-slate-400">-</td>
              </tr>
              <tr className="font-bold bg-slate-100">
                <td colSpan={2} className="border border-black px-3 py-1.5 text-right font-bold">Total :</td>
                <td className="border border-black px-3 py-1.5 text-right font-mono font-bold">
                  {totalDenomination > 0 ? fmt(totalDenomination) : "-"}
                </td>
                <td className="border border-black px-2 py-1.5 text-center">-</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-800">
            <span className="font-bold">In Word:</span> {numberToWords(totalDenomination)}
          </div>
        </div>

        {/* Section C: Credit Officers */}
        <div className="mb-4">
          <div className="mb-1 text-xs sm:text-sm font-bold text-slate-900">
            C. Credit Officer &amp; Others Cash Received Information.
          </div>
          <table className="w-full border-collapse border-2 border-black text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="w-12 border border-black px-2 py-1 text-center">S.L</th>
                <th className="border border-black px-3 py-1 text-left">Employee Name</th>
                <th className="w-20 border border-black px-2 py-1 text-center">PIN</th>
                <th className="w-32 border border-black px-3 py-1 text-right">TK (BDT)</th>
                <th className="w-32 border border-black px-2 py-1 text-center">Signature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-2 py-1 text-center">1</td>
                <td className="border border-black px-3 py-1 font-medium">Md Monirul Islam</td>
                <td className="border border-black px-2 py-1 text-center font-mono">621</td>
                <td className="border border-black px-3 py-1 text-right font-mono font-bold">{fmt(officerAmounts.monir)}</td>
                <td className="border border-black px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 text-center">2</td>
                <td className="border border-black px-3 py-1 font-medium">Ezaz Sakib</td>
                <td className="border border-black px-2 py-1 text-center font-mono">1056</td>
                <td className="border border-black px-3 py-1 text-right font-mono font-bold">{fmt(officerAmounts.sakib)}</td>
                <td className="border border-black px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 text-center">3</td>
                <td className="border border-black px-3 py-1 font-medium">Md Mintu Moholder</td>
                <td className="border border-black px-2 py-1 text-center font-mono">1189</td>
                <td className="border border-black px-3 py-1 text-right font-mono font-bold">{fmt(officerAmounts.mintu)}</td>
                <td className="border border-black px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 text-center">4</td>
                <td className="border border-black px-3 py-1 font-medium">Md Alamgir Hossain</td>
                <td className="border border-black px-2 py-1 text-center font-mono">1224</td>
                <td className="border border-black px-3 py-1 text-right font-mono font-bold">{fmt(officerAmounts.alamgir)}</td>
                <td className="border border-black px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 text-center">5</td>
                <td className="border border-black px-3 py-1 font-medium">Sales of Loan Forms</td>
                <td className="border border-black px-2 py-1 text-center font-mono">-</td>
                <td className="border border-black px-3 py-1 text-right font-mono font-bold">{fmt(officerAmounts.loanForms)}</td>
                <td className="border border-black px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border border-black px-2 py-1 text-center">6</td>
                <td className="border border-black px-3 py-1 font-medium">Member Welfare Fund</td>
                <td className="border border-black px-2 py-1 text-center font-mono">-</td>
                <td className="border border-black px-3 py-1 text-right font-mono font-bold">{fmt(officerAmounts.memberWelfare)}</td>
                <td className="border border-black px-2 py-1"></td>
              </tr>
              <tr className="font-bold bg-slate-100">
                <td colSpan={3} className="border border-black px-3 py-1.5 text-right font-bold">Total :</td>
                <td className="border border-black px-3 py-1.5 text-right font-mono font-black">{fmt(totalOfficersReceived)}</td>
                <td className="border border-black px-2 py-1.5"></td>
              </tr>
            </tbody>
          </table>
          <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-800">
            <span className="font-bold">In Word:</span> {numberToWords(totalOfficersReceived)}
          </div>
        </div>
      </div>

      {/* Signatures */}
      <div className="mt-10 flex items-center justify-between px-10 text-xs sm:text-sm font-bold">
        <div className="w-32 border-t-2 border-slate-900 pt-1 text-center">Accountant</div>
        <div className="w-32 border-t-2 border-slate-900 pt-1 text-center">Manager</div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
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
        </div>
        <div className="flex flex-wrap items-center gap-2">
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

      {/* Main Document */}
      <div
        id="cash-sheet-document"
        ref={documentRef}
        className="mx-auto max-w-[820px] shadow-lg border border-slate-300 print:border-none print:shadow-none"
      >
        {renderContent(true)}
      </div>

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

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import CategoryInput from "./CategoryInput";
import { fmt } from "./DenominationPopup";
import ReportDenominationModal from "./ReportDenominationModal";
import StaffCustomKeyboard, { StaffFieldKey, STAFF_FIELDS } from "./StaffCustomKeyboard";
import { titleCase } from "@/lib/categories";
import {
  getLocalStaffReports,
  saveStaffReport,
  updateStaffReport,
  deleteStaffReport,
  getLocalTxs,
  getSummary,
  getCategories,
  isDayClosed,
  evaluateMathExpression,
} from "@/lib/storage";
import type { StaffReportItem, Tx } from "@/types";

const DEFAULT_STAFF = ["Sakib", "Mintu", "Alamgir", "Monir"];

const matchStaffCategory = (cat: string, staffName: string) => {
  const c = cat.toLowerCase().trim();
  const s = staffName.toLowerCase().trim();
  return c === s || c.includes(s) || s.includes(c);
};

export default function StaffReportManager({ selectedDate }: { selectedDate: string }) {
  const [reports, setReports] = useState<StaffReportItem[]>([]);
  const [form, setForm] = useState({
    staffName: "",
    loan: "",
    rebate: "",
    savings: "",
    dps: "",
    admission: "",
    passbook: "",
    savingsAdjust: "",
    nogodReturn: "",
  });
  const [edit, setEdit] = useState<StaffReportItem | null>(null);
  const [originalEditReport, setOriginalEditReport] = useState<StaffReportItem | null>(null);
  const [filterStaff, setFilterStaff] = useState<string>("");
  const [denomModalOpen, setDenomModalOpen] = useState(false);
  const [staffPopupOpen, setStaffPopupOpen] = useState(false);
  const [staffPopupMinimized, setStaffPopupMinimized] = useState(false);
  const [floatingPos, setFloatingPos] = useState<{ x: number; y: number } | null>(() => {
    try {
      const saved = localStorage.getItem("gobra_floating_pos_report");
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });
  const floatingRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, elemX: 0, elemY: 0, w: 50, h: 50, hasMoved: false });

  const handleFloatingPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    const rect = floatingRef.current?.getBoundingClientRect();
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

  const handleFloatingPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;

    if (!dragStart.current.hasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      dragStart.current.hasMoved = true;
    }

    if (dragStart.current.hasMoved) {
      const maxX = Math.max(10, window.innerWidth - dragStart.current.w - 6);
      const maxY = Math.max(10, window.innerHeight - dragStart.current.h - 6);
      const newX = Math.max(6, Math.min(maxX, dragStart.current.elemX + dx));
      const newY = Math.max(6, Math.min(maxY, dragStart.current.elemY + dy));
      setFloatingPos({ x: newX, y: newY });
    }
  };

  const handleFloatingPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    if (dragStart.current.hasMoved) {
      const rect = floatingRef.current?.getBoundingClientRect();
      if (rect) {
        const finalPos = { x: Math.round(rect.left), y: Math.round(rect.top) };
        try {
          localStorage.setItem("gobra_floating_pos_report", JSON.stringify(finalPos));
        } catch {}
      }
    }
  };

  const handleFloatingClick = (e: React.MouseEvent) => {
    if (dragStart.current.hasMoved) {
      e.stopPropagation();
      dragStart.current.hasMoved = false;
      return;
    }
    setStaffPopupOpen((prev) => !prev);
    setStaffPopupMinimized(false);
  };

  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [activeKeyboardField, setActiveKeyboardField] = useState<StaffFieldKey>("loan");
  const [prevCash, setPrevCash] = useState(0);
  const [prevBank, setPrevBank] = useState(0);
  const [dashboardCashInHand, setDashboardCashInHand] = useState(0);
  const [allTxList, setAllTxList] = useState<Tx[]>([]);
  const [disburseCatList, setDisburseCatList] = useState<string[]>([]);
  const [dayClosed, setDayClosed] = useState(false);

  const loadData = () => {
    const sReports = getLocalStaffReports(selectedDate);
    setReports(sReports);

    const sumData = getSummary(selectedDate);
    setPrevCash(sumData.prevCash);
    setPrevBank(sumData.prevBank);
    setDashboardCashInHand(sumData.cash);

    const dCats = getCategories("disburse");
    setDisburseCatList(dCats.map((c) => c.name.toLowerCase().trim()));

    setAllTxList(getLocalTxs());
    const closed = isDayClosed(selectedDate);
    setDayClosed(closed);
    if (closed) {
      setKeyboardOpen(false);
      setEdit(null);
    }
  };

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

  // Auto-scroll screen when switching fields so the active field stays in front
  useEffect(() => {
    if (!keyboardOpen) return;
    const timer = setTimeout(() => {
      const fieldId = edit ? `edit-field-${activeKeyboardField}` : `field-${activeKeyboardField}`;
      const el = document.getElementById(fieldId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [activeKeyboardField, keyboardOpen, edit]);

  const handleFieldClick = (field: StaffFieldKey) => {
    if (dayClosed) {
      alert("⚠️ এই তারিখের দিন সমাপ্ত (Day Closed) রয়েছে। হিসাবটি লক করা আছে। পরিবর্তন করতে চাইলে ক্যাশবুক পেজ থেকে দিনটি Re-open করুন।");
      return;
    }
    setActiveKeyboardField(field);
    setKeyboardOpen(true);
  };

  const handleSave = () => {
    if (dayClosed) {
      alert("⚠️ এই তারিখের দিন সমাপ্ত (Day Closed) রয়েছে। কোনো নতুন এন্ট্রি করা যাবে না। পরিবর্তন করতে চাইলে ক্যাশবুক পেজ থেকে দিনটি Re-open করুন।");
      return;
    }
    if (!form.staffName.trim()) {
      alert("দয়া করে স্টাফ নির্বাচন করুন");
      setActiveKeyboardField("staffName");
      setKeyboardOpen(true);
      return;
    }

    saveStaffReport({
      reportDate: selectedDate,
      staffName: form.staffName.trim(),
      loan: evaluateMathExpression(form.loan) || "0",
      rebate: evaluateMathExpression(form.rebate) || "0",
      savings: evaluateMathExpression(form.savings) || "0",
      dps: evaluateMathExpression(form.dps) || "0",
      admission: evaluateMathExpression(form.admission) || "0",
      passbook: evaluateMathExpression(form.passbook) || "0",
      savingsAdjust: evaluateMathExpression(form.savingsAdjust) || "0",
      nogodReturn: evaluateMathExpression(form.nogodReturn) || "0",
    });

    setForm({
      staffName: "",
      loan: "",
      rebate: "",
      savings: "",
      dps: "",
      admission: "",
      passbook: "",
      savingsAdjust: "",
      nogodReturn: "",
    });
    setActiveKeyboardField("staffName");
    loadData();
  };

  const handleReset = () => {
    if (dayClosed) {
      alert(`⚠️ এই তারিখের (${selectedDate}) দিন সমাপ্ত (Day Closed) রয়েছে। কোনো পরিবর্তন করা যাবে না।`);
      return;
    }
    setForm({
      staffName: "",
      loan: "",
      rebate: "",
      savings: "",
      dps: "",
      admission: "",
      passbook: "",
      savingsAdjust: "",
      nogodReturn: "",
    });
    setActiveKeyboardField("staffName");
  };

  const handleUpdate = () => {
    if (!edit || !edit.id) return;
    if (dayClosed) {
      alert("⚠️ দিন ক্লোজ থাকায় এই রিপোর্টটি এডিট করা যাবে না। ক্যাশবুক থেকে Re-open করুন।");
      return;
    }
    updateStaffReport({
      ...edit,
      loan: evaluateMathExpression(String(edit.loan || "0")) || "0",
      rebate: evaluateMathExpression(String(edit.rebate || "0")) || "0",
      savings: evaluateMathExpression(String(edit.savings || "0")) || "0",
      dps: evaluateMathExpression(String(edit.dps || "0")) || "0",
      admission: evaluateMathExpression(String(edit.admission || "0")) || "0",
      passbook: evaluateMathExpression(String(edit.passbook || "0")) || "0",
      savingsAdjust: evaluateMathExpression(String(edit.savingsAdjust || "0")) || "0",
      nogodReturn: evaluateMathExpression(String(edit.nogodReturn || "0")) || "0",
    });
    setEdit(null);
    setOriginalEditReport(null);
    setKeyboardOpen(false);
    loadData();
  };

  const handleDelete = (id: number) => {
    if (dayClosed) {
      alert("⚠️ দিন ক্লোজ থাকায় এই রিপোর্টটি মুছে ফেলা যাবে না। ক্যাশবুক থেকে Re-open করুন।");
      return;
    }
    if (!confirm("Delete this staff report?")) return;
    deleteStaffReport(id);
    loadData();
  };

  // Grand totals across all reports (Table 1)
  const reportsForTable = filterStaff
    ? reports.filter((r) => r.staffName.toLowerCase() === filterStaff.toLowerCase())
    : reports;

  const totalLoanBase = reportsForTable.reduce((s, r) => s + Number(r.loan || 0), 0);
  const totalRebate = reportsForTable.reduce((s, r) => s + Number(r.rebate || 0), 0);
  const totalLoanGross = totalLoanBase + totalRebate;
  const totalSavings = reportsForTable.reduce((s, r) => s + Number(r.savings || 0), 0);
  const totalDps = reportsForTable.reduce((s, r) => s + Number(r.dps || 0), 0);
  const totalSavingsCombined = totalSavings + totalDps;
  const totalPassbook = reportsForTable.reduce((s, r) => s + Number(r.passbook || 0), 0);
  const totalAdmission = reportsForTable.reduce((s, r) => s + Number(r.admission || 0), 0);
  // Rebate loan-er sathe jog holeo grant total-e jog hobe na:
  const totalGrantTotal = totalLoanBase + totalSavingsCombined + totalPassbook + totalAdmission;
  const totalAdjust = reportsForTable.reduce((s, r) => s + Number(r.savingsAdjust || 0), 0);
  const totalNogod = reportsForTable.reduce((s, r) => s + Number(r.nogodReturn || 0), 0);
  const totalReturnCombined = totalAdjust + totalNogod;

  // Dena / Poana calculations
  const allStaffNames = Array.from(
    new Set([...DEFAULT_STAFF, ...reports.map((r) => r.staffName.trim())])
  );
  const receiveTxs = allTxList.filter((t) => t.type === "receive" && t.txDate === selectedDate);

  let totalDenaPoanaAday = 0;
  let totalDenaPoanaDeposite = 0;
  let totalDenaPoanaReturn = 0;

  const denaPoanaRows = allStaffNames.map((name) => {
    const staffReports = reports.filter(
      (r) => r.staffName.toLowerCase() === name.toLowerCase()
    );
    const stLoan = staffReports.reduce((s, r) => s + Number(r.loan || 0), 0);
    const stRebate = staffReports.reduce((s, r) => s + Number(r.rebate || 0), 0);
    const stSavings = staffReports.reduce((s, r) => s + Number(r.savings || 0), 0);
    const stDps = staffReports.reduce((s, r) => s + Number(r.dps || 0), 0);
    const stPassbook = staffReports.reduce((s, r) => s + Number(r.passbook || 0), 0);
    const stAdmission = staffReports.reduce((s, r) => s + Number(r.admission || 0), 0);

    // Rebate is not added to cash collection aday:
    const todayAday = stLoan + stSavings + stDps + stPassbook + stAdmission;
    const savingsReturn = staffReports.reduce((s, r) => s + Number(r.savingsAdjust || 0), 0);

    const todayDeposite = receiveTxs
      .filter((t) => matchStaffCategory(t.category, name))
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

    const diff = todayDeposite + savingsReturn - todayAday;
    totalDenaPoanaAday += todayAday;
    totalDenaPoanaDeposite += todayDeposite;
    totalDenaPoanaReturn += savingsReturn;

    return { name, todayAday, todayDeposite, savingsReturn, diff };
  });

  const totalDenaPoanaDiff = totalDenaPoanaDeposite + totalDenaPoanaReturn - totalDenaPoanaAday;

  // Today All Report (Table 3)
  const targetDateTxs = allTxList.filter((t) => t.txDate === selectedDate);
  const targetReceives = targetDateTxs.filter((t) => t.type === "receive");
  const targetPayments = targetDateTxs.filter((t) => t.type === "payment");

  const incomeAday = totalGrantTotal;
  const incomeHandCash = prevCash;
  const incomeBankWithdraw = targetReceives
    .filter((t) => t.category.toLowerCase().includes("bank withdraw"))
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

  const disburseLoans = targetPayments.filter((t) => {
    const cat = t.category.toLowerCase().trim();
    return (
      disburseCatList.includes(cat) ||
      cat.includes("jagoron") ||
      cat.includes("agrossor") ||
      cat.includes("buni") ||
      cat.includes("sufolon") ||
      cat.includes("mfce") ||
      Boolean(t.subCategory && t.subCategory.trim().length > 0)
    );
  });

  let buniyadDisburseSum = 0;
  let otherDisburseSum = 0;
  for (const t of disburseLoans) {
    const amt = Number(t.amount) || 0;
    const cat = t.category.toLowerCase().trim();
    if (cat.includes("buni")) buniyadDisburseSum += amt;
    else otherDisburseSum += amt;
  }
  const incomeKallayan = Math.round(otherDisburseSum * 0.01 + buniyadDisburseSum * 0.005);
  const incomeLoanForm = disburseLoans.length * 5;

  const incomeOthers = targetReceives
    .filter((t) => {
      const c = t.category.toLowerCase().trim();
      if (c.includes("bank withdraw") || c.includes("fund receive")) return false;
      if (c.includes("welfare") || c.includes("kallayan") || c.includes("loan form")) return false;
      if (DEFAULT_STAFF.some((st) => matchStaffCategory(c, st))) return false;
      return true;
    })
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

  const expDisburse = disburseLoans.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const expBankDeposit = targetPayments
    .filter((t) => t.category.toLowerCase().includes("bank deposit"))
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const expSavingsReturn = totalReturnCombined;
  const expOthers = targetPayments
    .filter((t) => t.category.toLowerCase().includes("others expense"))
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

  const incomeList = [
    { label: "Today All Aday", amount: incomeAday },
    { label: "Hand Cash", amount: incomeHandCash },
    { label: "Bank Withdraw", amount: incomeBankWithdraw },
    { label: "Kallayan", amount: incomeKallayan },
    { label: "Loan Form", amount: incomeLoanForm },
    { label: "Others Income", amount: incomeOthers },
  ].filter((x) => x.amount > 0);

  const expenditureList = [
    { label: "Disburse", amount: expDisburse },
    { label: "Bank Deposit", amount: expBankDeposit },
    { label: "Savings Return", amount: expSavingsReturn },
    { label: "Others Expense", amount: expOthers },
  ].filter((x) => x.amount > 0);

  const todayAllReportTotalIncome = incomeList.reduce((s, x) => s + x.amount, 0);
  const todayAllReportTotalExpenditure = expenditureList.reduce((s, x) => s + x.amount, 0);
  const maxRowsCount = Math.max(incomeList.length, expenditureList.length);

  const todayCashInHand = todayAllReportTotalIncome - todayAllReportTotalExpenditure;
  const fundReceiveToday = targetReceives
    .filter((t) => t.category.toLowerCase().includes("fund receive"))
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const todayBankBalance =
    prevBank - incomeBankWithdraw + expBankDeposit + fundReceiveToday;

  const checkExpens = todayAllReportTotalExpenditure - expBankDeposit;
  const checkWithdraw = incomeBankWithdraw;
  const checkDiferent = checkWithdraw - checkExpens;

  const topStaffDiffs = ["Sakib", "Monir", "Mintu", "Alamgir"].map((name) => {
    const found = denaPoanaRows.find((r) => r.name.toLowerCase() === name.toLowerCase());
    return { name, diff: found ? Math.round(found.diff) : 0 };
  });

  return (
    <div className={`space-y-6 ${keyboardOpen ? "pb-80" : ""}`}>
      {/* Moveable Floating Widget - Attached to body via Portal to stay 100% fixed on screen scrolling */}
      {typeof document !== "undefined" && createPortal(
        <div
          ref={floatingRef}
          onPointerDown={handleFloatingPointerDown}
          onPointerMove={handleFloatingPointerMove}
          onPointerUp={handleFloatingPointerUp}
          onPointerCancel={handleFloatingPointerUp}
          style={
            floatingPos
              ? {
                  transform: `translate3d(${floatingPos.x}px, ${floatingPos.y}px, 0)`,
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
          className={`fixed z-40 select-none print:hidden drop-shadow-2xl cursor-grab active:cursor-grabbing touch-none ${
            keyboardOpen ? "hidden" : "block"
          }`}
        >
          {staffPopupOpen ? (
            <div className="bg-white shadow-2xl rounded-2xl border-2 border-purple-900 overflow-hidden min-w-[240px] touch-none">
              <div
                className="bg-purple-900 text-white px-3.5 py-2 flex items-center justify-between gap-3 text-xs font-bold cursor-grab active:cursor-grabbing select-none"
                onClick={handleFloatingClick}
                title="ধরে যেকোনো জায়গায় সরানো যাবে / ক্লিক করলে বন্ধ হবে"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-300">⠿</span>
                  <span>👥</span>
                  <span>Staff Dena / Poana</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setStaffPopupOpen(false);
                    }}
                    className="hover:bg-purple-800 rounded px-1.5 py-0.5 text-xs cursor-pointer"
                    title="বক্স বন্ধ করুন"
                  >
                    ✕
                  </button>
                </div>
              </div>
              {!staffPopupMinimized && (
                <div className="p-1 bg-[#fdecd2]">
                  <table className="border-collapse text-center text-xs font-sans w-full">
                    <thead>
                      <tr className="bg-[#fdecd2] border-b border-amber-300">
                        {topStaffDiffs.map((s) => (
                          <th key={s.name} className="border border-amber-300 px-3 py-1 font-bold text-indigo-950">
                            {s.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-emerald-400">
                        {topStaffDiffs.map((s) => (
                          <td key={s.name} className="border border-amber-300 px-3 py-1.5 font-black text-black font-mono">
                            {s.diff}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : (
            /* Persistent Floating Action Button - Moveable & Clickable */
            <div
              onClick={handleFloatingClick}
              className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-900 active:bg-purple-950 text-white shadow-2xl ring-2 ring-purple-400/50 cursor-grab active:cursor-grabbing touch-none select-none"
              title="Staff Dena / Poana (টেনে যেকোনো দিকে সরানো যাবে / ক্লিক করলে খুলবে)"
            >
              <span className="text-xl sm:text-2xl leading-none select-none pointer-events-none">👥</span>
              <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-5 sm:min-w-[20px] items-center justify-center rounded-full bg-amber-400 px-1 text-[9px] sm:text-[10px] font-mono font-black text-purple-950 shadow pointer-events-none">
                {topStaffDiffs.length}
              </span>
            </div>
          )}
        </div>,
        document.body
      )}

      {/* Entry Form */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        {dayClosed && (
          <div className="mb-4 rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-800 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span>🔒</span>
              <span>এই তারিখের ({selectedDate}) দিন সমাপ্ত (Day Closed) রয়েছে। হিসাবটি লক করা আছে।</span>
            </span>
            <span className="text-xs text-rose-600 font-semibold">ক্যাশবুকে Re-open করুন</span>
          </div>
        )}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b pb-3">
          <h2 className="text-xl font-bold text-slate-900">Staff Collection Report Entry</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={dayClosed}
              onClick={() => {
                if (dayClosed) {
                  alert("⚠️ এই তারিখের দিন সমাপ্ত (Day Closed) রয়েছে। হিসাবটি লক করা আছে। ক্যাশবুক থেকে দিনটি Re-open করুন।");
                  return;
                }
                setKeyboardOpen(!keyboardOpen);
              }}
              className={`rounded-xl px-3 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${
                dayClosed
                  ? "bg-slate-200 text-slate-500 border-slate-300 cursor-not-allowed opacity-60"
                  : keyboardOpen
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40"
                  : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"
              }`}
              title={dayClosed ? "দিন সমাপ্ত (Locked)" : "কাস্টম কিবোর্ড অন/অফ করুন"}
            >
              <span>{dayClosed ? "🔒 লক করা" : "⌨️ কাস্টম কিবোর্ড"}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                  dayClosed
                    ? "bg-slate-300 text-slate-600"
                    : keyboardOpen
                    ? "bg-indigo-900 text-white"
                    : "bg-indigo-200 text-indigo-900"
                }`}
              >
                {dayClosed ? "LOCKED" : keyboardOpen ? "ON" : "OFF"}
              </span>
            </button>
            <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
              Date: {selectedDate}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          <div
            id="field-staffName"
            onClick={() => handleFieldClick("staffName")}
            className={`rounded-lg transition ${
              keyboardOpen && activeKeyboardField === "staffName"
                ? "ring-2 ring-indigo-500 p-0.5 bg-amber-50"
                : ""
            }`}
          >
            <label className="mb-1 block text-xs font-bold text-slate-700">Staff Name</label>
            <CategoryInput
              value={form.staffName}
              disabled={dayClosed}
              readOnly={true}
              onChange={(v) => {
                if (dayClosed) return;
                setForm({ ...form, staffName: v });
                setActiveKeyboardField("loan");
              }}
              options={DEFAULT_STAFF}
            />
          </div>
          <div id="field-loan">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Loan</label>
              {/[+\-*/]/.test(form.loan) && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300">
                  ={fmt(Number(evaluateMathExpression(form.loan)) || 0)}
                </span>
              )}
            </div>
            <input
              type="text"
              inputMode="none"
              readOnly={true}
              disabled={dayClosed}
              value={form.loan}
              onFocus={(e) => { e.target.blur(); handleFieldClick("loan"); }}
              onTouchStart={(e) => { e.preventDefault(); handleFieldClick("loan"); }}
              onClick={() => handleFieldClick("loan")}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, loan: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, loan: val });
                }
              }}
              onBlur={() => {
                if (form.loan && /[+\-*/]/.test(form.loan)) {
                  setForm({ ...form, loan: evaluateMathExpression(form.loan) });
                }
              }}
              placeholder="0 (উদা: ১+২+৩=৬)"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                dayClosed
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : keyboardOpen && activeKeyboardField === "loan"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 bg-yellow-50 text-slate-900"
              }`}
            />
          </div>
          <div id="field-rebate">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Rebate</label>
              {/[+\-*/]/.test(form.rebate) && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300">
                  ={fmt(Number(evaluateMathExpression(form.rebate)) || 0)}
                </span>
              )}
            </div>
            <input
              type="text"
              inputMode="none"
              readOnly={true}
              disabled={dayClosed}
              value={form.rebate}
              onFocus={(e) => { e.target.blur(); handleFieldClick("rebate"); }}
              onTouchStart={(e) => { e.preventDefault(); handleFieldClick("rebate"); }}
              onClick={() => handleFieldClick("rebate")}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, rebate: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, rebate: val });
                }
              }}
              onBlur={() => {
                if (form.rebate && /[+\-*/]/.test(form.rebate)) {
                  setForm({ ...form, rebate: evaluateMathExpression(form.rebate) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                dayClosed
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : keyboardOpen && activeKeyboardField === "rebate"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 bg-amber-50 text-slate-900"
              }`}
            />
          </div>
          <div id="field-savings">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Savings</label>
              {/[+\-*/]/.test(form.savings) && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300">
                  ={fmt(Number(evaluateMathExpression(form.savings)) || 0)}
                </span>
              )}
            </div>
            <input
              type="text"
              inputMode="none"
              readOnly={true}
              disabled={dayClosed}
              value={form.savings}
              onFocus={(e) => { e.target.blur(); handleFieldClick("savings"); }}
              onTouchStart={(e) => { e.preventDefault(); handleFieldClick("savings"); }}
              onClick={() => handleFieldClick("savings")}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, savings: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, savings: val });
                }
              }}
              onBlur={() => {
                if (form.savings && /[+\-*/]/.test(form.savings)) {
                  setForm({ ...form, savings: evaluateMathExpression(form.savings) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                dayClosed
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : keyboardOpen && activeKeyboardField === "savings"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 bg-yellow-50 text-slate-900"
              }`}
            />
          </div>
          <div id="field-dps">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">DPS</label>
              {/[+\-*/]/.test(form.dps) && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300">
                  ={fmt(Number(evaluateMathExpression(form.dps)) || 0)}
                </span>
              )}
            </div>
            <input
              type="text"
              inputMode="none"
              readOnly={true}
              disabled={dayClosed}
              value={form.dps}
              onFocus={(e) => { e.target.blur(); handleFieldClick("dps"); }}
              onTouchStart={(e) => { e.preventDefault(); handleFieldClick("dps"); }}
              onClick={() => handleFieldClick("dps")}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, dps: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, dps: val });
                }
              }}
              onBlur={() => {
                if (form.dps && /[+\-*/]/.test(form.dps)) {
                  setForm({ ...form, dps: evaluateMathExpression(form.dps) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                dayClosed
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : keyboardOpen && activeKeyboardField === "dps"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 text-slate-900"
              }`}
            />
          </div>
          <div id="field-admission">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Admission</label>
              {/[+\-*/]/.test(form.admission) && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300">
                  ={fmt(Number(evaluateMathExpression(form.admission)) || 0)}
                </span>
              )}
            </div>
            <input
              type="text"
              inputMode="none"
              readOnly={true}
              disabled={dayClosed}
              value={form.admission}
              onFocus={(e) => { e.target.blur(); handleFieldClick("admission"); }}
              onTouchStart={(e) => { e.preventDefault(); handleFieldClick("admission"); }}
              onClick={() => handleFieldClick("admission")}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, admission: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, admission: val });
                }
              }}
              onBlur={() => {
                if (form.admission && /[+\-*/]/.test(form.admission)) {
                  setForm({ ...form, admission: evaluateMathExpression(form.admission) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                dayClosed
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : keyboardOpen && activeKeyboardField === "admission"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 text-slate-900"
              }`}
            />
          </div>
          <div id="field-passbook">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Passbook</label>
              {/[+\-*/]/.test(form.passbook) && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300">
                  ={fmt(Number(evaluateMathExpression(form.passbook)) || 0)}
                </span>
              )}
            </div>
            <input
              type="text"
              inputMode="none"
              readOnly={true}
              disabled={dayClosed}
              value={form.passbook}
              onFocus={(e) => { e.target.blur(); handleFieldClick("passbook"); }}
              onTouchStart={(e) => { e.preventDefault(); handleFieldClick("passbook"); }}
              onClick={() => handleFieldClick("passbook")}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, passbook: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, passbook: val });
                }
              }}
              onBlur={() => {
                if (form.passbook && /[+\-*/]/.test(form.passbook)) {
                  setForm({ ...form, passbook: evaluateMathExpression(form.passbook) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                dayClosed
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : keyboardOpen && activeKeyboardField === "passbook"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 text-slate-900"
              }`}
            />
          </div>
          <div id="field-savingsAdjust">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Savings Adjust</label>
              {/[+\-*/]/.test(form.savingsAdjust) && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300">
                  ={fmt(Number(evaluateMathExpression(form.savingsAdjust)) || 0)}
                </span>
              )}
            </div>
            <input
              type="text"
              inputMode="none"
              readOnly={true}
              disabled={dayClosed}
              value={form.savingsAdjust}
              onFocus={(e) => { e.target.blur(); handleFieldClick("savingsAdjust"); }}
              onTouchStart={(e) => { e.preventDefault(); handleFieldClick("savingsAdjust"); }}
              onClick={() => handleFieldClick("savingsAdjust")}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, savingsAdjust: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, savingsAdjust: val });
                }
              }}
              onBlur={() => {
                if (form.savingsAdjust && /[+\-*/]/.test(form.savingsAdjust)) {
                  setForm({ ...form, savingsAdjust: evaluateMathExpression(form.savingsAdjust) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                dayClosed
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : keyboardOpen && activeKeyboardField === "savingsAdjust"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-rose-300 bg-rose-50 text-rose-900"
              }`}
            />
          </div>
          <div id="field-nogodReturn">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Nogod Return</label>
              {/[+\-*/]/.test(form.nogodReturn) && (
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300">
                  ={fmt(Number(evaluateMathExpression(form.nogodReturn)) || 0)}
                </span>
              )}
            </div>
            <input
              type="text"
              inputMode="none"
              readOnly={true}
              disabled={dayClosed}
              value={form.nogodReturn}
              onFocus={(e) => { e.target.blur(); handleFieldClick("nogodReturn"); }}
              onTouchStart={(e) => { e.preventDefault(); handleFieldClick("nogodReturn"); }}
              onClick={() => handleFieldClick("nogodReturn")}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, nogodReturn: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, nogodReturn: val });
                }
              }}
              onBlur={() => {
                if (form.nogodReturn && /[+\-*/]/.test(form.nogodReturn)) {
                  setForm({ ...form, nogodReturn: evaluateMathExpression(form.nogodReturn) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                dayClosed
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : keyboardOpen && activeKeyboardField === "nogodReturn"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-rose-300 bg-rose-50 text-rose-900"
              }`}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleSave}
            disabled={dayClosed}
            className="rounded-lg bg-green-600 px-6 py-2 text-sm font-bold text-white shadow hover:bg-green-700 cursor-pointer disabled:opacity-50"
          >
            Save Report
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={dayClosed}
            className="rounded-lg bg-slate-500 px-6 py-2 text-sm font-bold text-white hover:bg-slate-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </div>
      </div>

      {/* 3-Box Dashboard */}
      <div className="rounded-2xl border border-slate-200 bg-white p-2.5 sm:p-3 shadow-sm">
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col justify-center rounded-xl bg-emerald-50 border border-emerald-300 p-2 sm:p-3 text-center">
            <span className="text-[10px] sm:text-xs font-bold text-emerald-800">Today Cash</span>
            <span className="font-mono text-sm sm:text-xl font-black text-emerald-950 mt-0.5">
              {fmt(todayCashInHand)}
            </span>
          </div>
          <div className="flex flex-col justify-center rounded-xl bg-indigo-50 border border-indigo-300 p-2 sm:p-3 text-center">
            <span className="text-[10px] sm:text-xs font-bold text-indigo-800">Today Bank</span>
            <span className="font-mono text-sm sm:text-xl font-black text-indigo-950 mt-0.5">
              {fmt(todayBankBalance)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setDenomModalOpen(true)}
            className="flex flex-col items-center justify-center rounded-xl bg-amber-500 hover:bg-amber-600 border border-amber-600 p-2 sm:p-3 text-slate-950 shadow-xs cursor-pointer text-center"
          >
            <span className="text-[10px] sm:text-xs font-bold">💰 Denomination</span>
            <span className="text-[9px] sm:text-xs font-bold text-amber-950 mt-0.5">Check Diff</span>
          </button>
        </div>
      </div>

      {/* Staff Collection Report Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-[#d4a373]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d4a373] px-4 py-2.5 bg-[#fdecd2]">
          <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
            Staff Collection Report Table
          </h3>
          <div className="flex items-center gap-2">
            <select
              value={filterStaff}
              onChange={(e) => setFilterStaff(e.target.value)}
              className="rounded bg-white border border-[#d4a373] px-2 py-0.5 text-xs font-semibold text-slate-800"
            >
              <option value="">All Staff</option>
              {DEFAULT_STAFF.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[#d4a373] text-center text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#fdecd2] text-slate-950 font-bold border-b border-[#d4a373]">
                <th className="border border-[#d4a373] px-2.5 py-2">Name</th>
                <th className="border border-[#d4a373] px-2 py-2">Loan</th>
                <th className="border border-[#d4a373] px-2 py-2">Rebate</th>
                <th className="border border-[#d4a373] px-2 py-2">Total Loan</th>
                <th className="border border-[#d4a373] px-2 py-2">Savings</th>
                <th className="border border-[#d4a373] px-2 py-2">DPS</th>
                <th className="border border-[#d4a373] px-2 py-2">Total Sav</th>
                <th className="border border-[#d4a373] px-2 py-2">Passbook</th>
                <th className="border border-[#d4a373] px-2 py-2">Admission</th>
                <th className="border border-[#d4a373] px-2 py-2">Grant Total</th>
                <th className="border border-[#d4a373] px-2 py-2">Adjust</th>
                <th className="border border-[#d4a373] px-2 py-2">Nogod</th>
                <th className="border border-[#d4a373] px-2 py-2">Total Ret</th>
                <th className="border border-[#d4a373] px-2 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {reportsForTable.length === 0 ? (
                <tr>
                  <td colSpan={14} className="border border-[#d4a373] px-3 py-6 text-center text-slate-400">
                    No staff reports on {selectedDate}
                  </td>
                </tr>
              ) : (
                reportsForTable.map((r) => {
                  const baseLoan = Number(r.loan) || 0;
                  const rebateVal = Number(r.rebate) || 0;
                  const grossLoan = baseLoan + rebateVal;
                  const savingsVal = Number(r.savings) || 0;
                  const dpsVal = Number(r.dps) || 0;
                  const totalSavingsRow = savingsVal + dpsVal;
                  const passbookVal = Number(r.passbook) || 0;
                  const admissionVal = Number(r.admission) || 0;
                  // Rebate loan-er sathe jog holeo grant total-e jog hobe na:
                  const grantTotalRow = baseLoan + totalSavingsRow + passbookVal + admissionVal;
                  const adjustVal = Number(r.savingsAdjust) || 0;
                  const nogodVal = Number(r.nogodReturn) || 0;
                  const totalReturnRow = adjustVal + nogodVal;
                  return (
                    <tr key={r.id} className="border-b border-[#d4a373] hover:bg-[#fff9f2] bg-white">
                      <td className="border border-[#d4a373] px-2 py-1.5 font-bold text-left text-slate-900">
                        {r.staffName}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono">
                        {baseLoan > 0 ? fmt(baseLoan) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono">
                        {rebateVal > 0 ? fmt(rebateVal) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono font-bold bg-[#fdf5ea]">
                        {grossLoan > 0 ? fmt(grossLoan) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono">
                        {savingsVal > 0 ? fmt(savingsVal) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono">
                        {dpsVal > 0 ? fmt(dpsVal) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono font-bold bg-[#fdf5ea]">
                        {totalSavingsRow > 0 ? fmt(totalSavingsRow) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono">
                        {passbookVal > 0 ? fmt(passbookVal) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono">
                        {admissionVal > 0 ? fmt(admissionVal) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono font-black bg-[#fdf5ea]">
                        {grantTotalRow > 0 ? fmt(grantTotalRow) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono">
                        {adjustVal > 0 ? fmt(adjustVal) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono">
                        {nogodVal > 0 ? fmt(nogodVal) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-2 py-1.5 text-right font-mono font-black bg-[#fdf5ea]">
                        {totalReturnRow > 0 ? fmt(totalReturnRow) : ""}
                      </td>
                      <td className="border border-[#d4a373] px-1 py-1 text-center whitespace-nowrap">
                        <button
                          type="button"
                          disabled={dayClosed}
                          onClick={() => {
                            if (dayClosed) {
                              alert("⚠️ দিন সমাপ্ত (Day Closed) থাকায় এই রিপোর্টটি এডিট করা যাবে না। ক্যাশবুক থেকে দিনটি Re-open করুন।");
                              return;
                            }
                            setOriginalEditReport({ ...r });
                            setEdit({
                              ...r,
                              loan: String(r.loan ?? ""),
                              rebate: String(r.rebate ?? ""),
                              savings: String(r.savings ?? ""),
                              dps: String(r.dps ?? ""),
                              admission: String(r.admission ?? ""),
                              passbook: String(r.passbook ?? ""),
                              savingsAdjust: String(r.savingsAdjust ?? ""),
                              nogodReturn: String(r.nogodReturn ?? ""),
                            });
                            setActiveKeyboardField("loan");
                            setKeyboardOpen(true);
                          }}
                          className={`mr-1 rounded px-2.5 py-1 text-xs font-bold text-white shadow-xs transition ${
                            dayClosed
                              ? "bg-slate-400 cursor-not-allowed opacity-50"
                              : "bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95"
                          }`}
                          title={dayClosed ? "দিন সমাপ্ত (Locked) - ক্যাশবুক থেকে Re-open করুন" : "এই স্টাফের রিপোর্ট এডিট করুন"}
                        >
                          {dayClosed ? "🔒 Edit" : "✏️ Edit"}
                        </button>
                        <button
                          type="button"
                          disabled={dayClosed}
                          onClick={() => {
                            if (dayClosed) {
                              alert("⚠️ দিন সমাপ্ত (Day Closed) থাকায় এই রিপোর্টটি মুছে ফেলা যাবে না। ক্যাশবুক থেকে দিনটি Re-open করুন।");
                              return;
                            }
                            handleDelete(r.id);
                          }}
                          className={`rounded px-2 py-1 text-xs font-bold text-white shadow-xs transition ${
                            dayClosed
                              ? "bg-slate-400 cursor-not-allowed opacity-50"
                              : "bg-rose-600 hover:bg-rose-700 cursor-pointer active:scale-95"
                          }`}
                          title={dayClosed ? "দিন সমাপ্ত (Locked) - ক্যাশবুক থেকে Re-open করুন" : "এই রিপোর্ট মুছুন"}
                        >
                          {dayClosed ? "🔒 Del" : "Del"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            {reportsForTable.length > 0 && (
              <tfoot className="bg-[#fdecd2] text-slate-950 font-bold border-t-2 border-[#d4a373]">
                <tr>
                  <td className="border border-[#d4a373] px-2 py-2">Total</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono">{fmt(totalLoanBase)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono">{fmt(totalRebate)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono font-black">{fmt(totalLoanGross)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono">{fmt(totalSavings)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono">{fmt(totalDps)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono font-black">{fmt(totalSavingsCombined)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono">{fmt(totalPassbook)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono">{fmt(totalAdmission)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono font-black">{fmt(totalGrantTotal)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono">{fmt(totalAdjust)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono">{fmt(totalNogod)}</td>
                  <td className="border border-[#d4a373] px-2 py-2 text-right font-mono font-black">{fmt(totalReturnCombined)}</td>
                  <td className="border border-[#d4a373]" />
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>

      {/* Dena / Poana Table */}
      <div className="rounded-2xl border-2 border-blue-900 bg-white shadow-sm overflow-hidden max-w-2xl mx-auto">
        <div className="bg-[#fdecd2] py-2 text-center border-b-2 border-blue-900">
          <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-900">Dena / Poana</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-amber-200 text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#eedbc9] text-slate-900 font-bold text-center">
                <th className="border border-amber-200 px-3 py-2">Staff Name</th>
                <th className="border border-amber-200 px-3 py-2">Today Aday</th>
                <th className="border border-amber-200 px-3 py-2">Today Deposit</th>
                <th className="border border-amber-200 px-3 py-2">Savings Return</th>
                <th className="border border-amber-200 px-3 py-2">Dena / Poana</th>
              </tr>
            </thead>
            <tbody>
              {denaPoanaRows.map((row) => (
                <tr key={row.name} className="border-b border-amber-200">
                  <td className="border border-amber-200 px-3 py-2 font-bold bg-[#eedbc9] text-left">{row.name}</td>
                  <td className="border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]">
                    {fmt(row.todayAday)}
                  </td>
                  <td className="border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]">
                    {fmt(row.todayDeposite)}
                  </td>
                  <td className="border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]">
                    {fmt(row.savingsReturn)}
                  </td>
                  <td className="border border-amber-200 px-3 py-2 text-right font-mono font-black bg-[#f0f6ff]">
                    {Math.round(row.diff)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#dfbf9f] font-black border-t-2 border-amber-300">
              <tr>
                <td className="border border-amber-200 px-3 py-2 text-center">Total</td>
                <td className="border border-amber-200 px-3 py-2 text-right font-mono">{fmt(totalDenaPoanaAday)}</td>
                <td className="border border-amber-200 px-3 py-2 text-right font-mono">{fmt(totalDenaPoanaDeposite)}</td>
                <td className="border border-amber-200 px-3 py-2 text-right font-mono">{fmt(totalDenaPoanaReturn)}</td>
                <td className="border border-amber-200 px-3 py-2 text-right font-mono">{fmt(totalDenaPoanaDiff)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Today All Report */}
      <div className="rounded-2xl border-2 border-blue-900 bg-white shadow-sm overflow-hidden max-w-3xl mx-auto">
        <div className="bg-[#fdecd2] py-2 text-center border-b-2 border-blue-900">
          <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-900">Today All Report</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-amber-200 text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#fdecd2] text-slate-900 font-black text-center">
                <th colSpan={2} className="border border-amber-200 px-4 py-2 w-1/2">Income</th>
                <th colSpan={2} className="border border-amber-200 px-4 py-2 w-1/2">Expenditure</th>
              </tr>
            </thead>
            <tbody>
              {maxRowsCount === 0 ? (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-slate-400">No data on {selectedDate}</td>
                </tr>
              ) : (
                Array.from({ length: maxRowsCount }, (_, i) => {
                  const inc = incomeList[i];
                  const exp = expenditureList[i];
                  return (
                    <tr key={i} className="border-b border-amber-200">
                      <td className="border border-amber-200 px-3 py-1.5 font-bold bg-[#fdecd2] w-1/3">
                        {inc ? inc.label : ""}
                      </td>
                      <td className="border border-amber-200 px-3 py-1.5 text-right font-mono font-bold w-1/6">
                        {inc ? fmt(inc.amount) : ""}
                      </td>
                      <td className="border border-amber-200 px-3 py-1.5 font-bold bg-[#fdecd2] w-1/3">
                        {exp ? exp.label : ""}
                      </td>
                      <td className="border border-amber-200 px-3 py-1.5 text-right font-mono font-bold w-1/6">
                        {exp ? fmt(exp.amount) : ""}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            <tfoot className="bg-[#dfbf9f] font-black border-t-2 border-amber-300">
              <tr>
                <td className="border border-amber-200 px-3 py-2 text-center">Total</td>
                <td className="border border-amber-200 px-3 py-2 text-right font-mono">{fmt(todayAllReportTotalIncome)}</td>
                <td className="border border-amber-200 px-3 py-2 text-center">Total</td>
                <td className="border border-amber-200 px-3 py-2 text-right font-mono">{fmt(todayAllReportTotalExpenditure)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="flex justify-center p-2">
        <div className="rounded-xl border-2 border-purple-900 bg-white shadow-sm overflow-hidden inline-block">
          <table className="border-collapse text-center text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#fdecd2] border-b-2 border-purple-900">
                <th className="px-4 py-1.5 font-bold text-black min-w-[90px]">Expens</th>
                <th className="px-4 py-1.5 font-bold text-black min-w-[90px]">Check</th>
                <th className="px-4 py-1.5 font-bold text-black min-w-[110px]">Check Diferent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-emerald-400">
                <td className="px-4 py-2 font-black text-black font-mono text-right">{fmt(checkExpens)}</td>
                <td className="px-4 py-2 font-black text-black font-mono text-right">{fmt(checkWithdraw)}</td>
                <td className="px-4 py-2 font-black text-black font-mono text-right border-2 border-blue-600">
                  {fmt(checkDiferent)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {denomModalOpen && (
        <ReportDenominationModal
          open={denomModalOpen}
          onClose={() => setDenomModalOpen(false)}
          cashInHand={dashboardCashInHand}
          date={selectedDate}
        />
      )}

      {/* Staff Report Edit Modal (Staff wise Edit with Custom Keyboard) */}
      {edit && (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/60 p-2 sm:p-4 pt-3 sm:pt-6 pb-88 overflow-y-auto">
          <div className="w-full max-w-xl rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 my-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">✏️</span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    Edit Staff Report ({titleCase(edit.staffName)})
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">Date: {selectedDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setKeyboardOpen(!keyboardOpen)}
                  className={`rounded-xl px-2.5 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${
                    keyboardOpen
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40"
                      : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"
                  }`}
                  title="কাস্টম কিবোর্ড অন/অফ করুন"
                >
                  <span>⌨️ কিবোর্ড</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                      keyboardOpen ? "bg-indigo-900 text-white" : "bg-indigo-200 text-indigo-900"
                    }`}
                  >
                    {keyboardOpen ? "ON" : "OFF"}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEdit(null);
                    setOriginalEditReport(null);
                    setKeyboardOpen(false);
                  }}
                  className="text-2xl text-slate-400 hover:text-rose-600 cursor-pointer leading-none p-1"
                  title="বন্ধ করুন"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {/* Staff Name */}
              <div
                id="edit-field-staffName"
                onClick={() => {
                  setActiveKeyboardField("staffName");
                  setKeyboardOpen(true);
                }}
                className={`col-span-2 sm:col-span-3 rounded-xl transition p-2 cursor-pointer border ${
                  keyboardOpen && activeKeyboardField === "staffName"
                    ? "ring-2 ring-indigo-500 bg-amber-50 border-indigo-400"
                    : "border-slate-200 bg-slate-50/50"
                }`}
              >
                <label className="mb-1 block text-xs font-bold text-slate-700">
                  Staff Name <span className="text-[10px] text-slate-500 font-normal">(স্টাফ নির্বাচন)</span>
                </label>
                <select
                  value={edit.staffName}
                  onChange={(e) => {
                    setEdit({ ...edit, staffName: e.target.value });
                    setActiveKeyboardField("loan");
                  }}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  {allStaffNames.map((st) => (
                    <option key={st} value={st}>
                      {titleCase(st)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Numeric Fields */}
              {STAFF_FIELDS.filter((f) => f.isNumeric).map((f) => {
                const key = f.key;
                const isActive = keyboardOpen && activeKeyboardField === key;
                const rawVal = edit[key] || "";
                const hasFormula = /[+\-*/]/.test(rawVal);
                const evalVal = hasFormula ? evaluateMathExpression(rawVal) : "";
                const isDeduction = key === "savingsAdjust" || key === "nogodReturn";

                return (
                  <div
                    key={key}
                    id={`edit-field-${key}`}
                    onClick={() => {
                      setActiveKeyboardField(key);
                      setKeyboardOpen(true);
                    }}
                    className={`rounded-xl transition cursor-pointer p-1.5 border ${
                      isActive
                        ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-50/90 scale-[1.02] shadow-sm"
                        : isDeduction
                        ? "border-rose-200 bg-rose-50/50"
                        : "border-slate-200 bg-slate-50/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-slate-700 truncate">
                        {f.label} <span className="text-[10px] text-slate-500 font-normal">({f.bn})</span>
                      </label>
                      {hasFormula && (
                        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300">
                          ={fmt(Number(evalVal) || 0)}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      inputMode="none"
                      readOnly={true}
                      value={rawVal}
                      onFocus={(e) => {
                        e.target.blur();
                        setActiveKeyboardField(key);
                        setKeyboardOpen(true);
                      }}
                      onTouchStart={(e) => {
                        e.preventDefault();
                        setActiveKeyboardField(key);
                        setKeyboardOpen(true);
                      }}
                      onClick={() => {
                        setActiveKeyboardField(key);
                        setKeyboardOpen(true);
                      }}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val.endsWith("=")) {
                          setEdit({ ...edit, [key]: evaluateMathExpression(val) });
                        } else {
                          setEdit({ ...edit, [key]: val });
                        }
                      }}
                      onBlur={() => {
                        if (rawVal && /[+\-*/]/.test(rawVal)) {
                          setEdit({ ...edit, [key]: evaluateMathExpression(rawVal) });
                        }
                      }}
                      placeholder={key === "loan" ? "0 (উদা: ১২+১২=২৪)" : "0"}
                      className={`w-full rounded-lg border px-3 py-1.5 text-right font-mono text-sm font-bold transition focus:outline-none cursor-pointer ${
                        isActive
                          ? "border-indigo-600 bg-amber-100 text-slate-950 font-black shadow-inner"
                          : isDeduction
                          ? "border-rose-300 bg-white text-rose-900"
                          : "border-slate-300 bg-white text-slate-900"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Live Totals summary inside edit modal */}
            {(() => {
              const editBaseLoan = Number(evaluateMathExpression(edit.loan || "0")) || 0;
              const editRebate = Number(evaluateMathExpression(edit.rebate || "0")) || 0;
              const editGrossLoan = editBaseLoan + editRebate;
              const editSavings = Number(evaluateMathExpression(edit.savings || "0")) || 0;
              const editDps = Number(evaluateMathExpression(edit.dps || "0")) || 0;
              const editTotalSav = editSavings + editDps;
              const editPassbook = Number(evaluateMathExpression(edit.passbook || "0")) || 0;
              const editAdmission = Number(evaluateMathExpression(edit.admission || "0")) || 0;
              const editGrantTotal = editBaseLoan + editTotalSav + editPassbook + editAdmission;
              const editAdjust = Number(evaluateMathExpression(edit.savingsAdjust || "0")) || 0;
              const editNogod = Number(evaluateMathExpression(edit.nogodReturn || "0")) || 0;
              const editTotalReturn = editAdjust + editNogod;

              return (
                <div className="mt-4 rounded-xl bg-amber-50/70 border border-amber-200 p-2.5 text-xs">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-center">
                    <div className="bg-white p-1.5 rounded border border-amber-100">
                      <div className="text-[10px] text-slate-500 font-sans">Total Loan</div>
                      <div className="font-bold text-slate-900">{fmt(editGrossLoan)}</div>
                    </div>
                    <div className="bg-white p-1.5 rounded border border-amber-100">
                      <div className="text-[10px] text-slate-500 font-sans">Total Savings</div>
                      <div className="font-bold text-slate-900">{fmt(editTotalSav)}</div>
                    </div>
                    <div className="bg-white p-1.5 rounded border border-amber-200">
                      <div className="text-[10px] text-amber-900 font-sans font-bold">Grant Total</div>
                      <div className="font-black text-amber-700 text-sm">{fmt(editGrantTotal)}</div>
                    </div>
                    <div className="bg-white p-1.5 rounded border border-rose-200">
                      <div className="text-[10px] text-rose-700 font-sans font-bold">Total Return</div>
                      <div className="font-black text-rose-700 text-sm">{fmt(editTotalReturn)}</div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Modal Actions */}
            <div className="flex items-center justify-between gap-3 mt-4 border-t pt-3">
              <button
                type="button"
                onClick={() => {
                  if (originalEditReport) setEdit({ ...originalEditReport });
                }}
                className="rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-3 py-2 font-bold text-xs transition cursor-pointer"
                title="এডিটের পরিবর্তনগুলো বাতিল করে মূল মানে ফিরে যান"
              >
                🔄 মূল মানে রিসেট
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setEdit(null);
                    setOriginalEditReport(null);
                    setKeyboardOpen(false);
                  }}
                  className="rounded-xl bg-slate-200 px-4 py-2 font-bold text-xs text-slate-700 hover:bg-slate-300 transition cursor-pointer"
                >
                  বাতিল (Cancel)
                </button>
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="rounded-xl bg-blue-600 px-5 py-2 font-bold text-xs text-white hover:bg-blue-700 transition cursor-pointer flex items-center gap-1.5 shadow"
                >
                  <span>💾</span>
                  <span>Update Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Keyboard for Staff Collection Report Entry & Edit */}
      <StaffCustomKeyboard
        open={keyboardOpen}
        activeField={activeKeyboardField}
        values={
          edit
            ? {
                staffName: edit.staffName || "",
                loan: edit.loan || "",
                rebate: edit.rebate || "",
                savings: edit.savings || "",
                dps: edit.dps || "",
                admission: edit.admission || "",
                passbook: edit.passbook || "",
                savingsAdjust: edit.savingsAdjust || "",
                nogodReturn: edit.nogodReturn || "",
              }
            : form
        }
        staffList={allStaffNames}
        onFieldSelect={(field) => setActiveKeyboardField(field)}
        onValueChange={(field, val) => {
          if (edit) {
            setEdit((prev) => (prev ? { ...prev, [field]: val } : null));
          } else {
            setForm((prev) => ({ ...prev, [field]: val }));
          }
        }}
        onSave={edit ? handleUpdate : handleSave}
        onReset={
          edit
            ? () => {
                if (originalEditReport) setEdit({ ...originalEditReport });
              }
            : handleReset
        }
        onClose={() => setKeyboardOpen(false)}
        isEdit={!!edit}
      />
    </div>
  );
}

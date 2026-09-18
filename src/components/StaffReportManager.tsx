import { useEffect, useState } from "react";
import CategoryInput from "./CategoryInput";
import { fmt } from "./DenominationPopup";
import ReportDenominationModal from "./ReportDenominationModal";
import StaffCustomKeyboard, { StaffFieldKey } from "./StaffCustomKeyboard";
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
  const [filterStaff, setFilterStaff] = useState<string>("");
  const [denomModalOpen, setDenomModalOpen] = useState(false);
  const [staffPopupOpen, setStaffPopupOpen] = useState(false);
  const [staffPopupMinimized, setStaffPopupMinimized] = useState(false);
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
    setDayClosed(isDayClosed(selectedDate));
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
      const el = document.getElementById(`field-${activeKeyboardField}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [activeKeyboardField, keyboardOpen]);

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
      loan: evaluateMathExpression(edit.loan) || "0",
      rebate: evaluateMathExpression(edit.rebate) || "0",
      savings: evaluateMathExpression(edit.savings) || "0",
      dps: evaluateMathExpression(edit.dps) || "0",
      admission: evaluateMathExpression(edit.admission) || "0",
      passbook: evaluateMathExpression(edit.passbook) || "0",
      savingsAdjust: evaluateMathExpression(edit.savingsAdjust) || "0",
      nogodReturn: evaluateMathExpression(edit.nogodReturn) || "0",
    });
    setEdit(null);
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
      {/* Floating Popup & Persistent Floating Button */}
      {staffPopupOpen ? (
        <div
          className={`fixed ${
            keyboardOpen ? "bottom-80 sm:bottom-84" : "bottom-16 sm:bottom-20"
          } right-4 sm:right-6 z-40 bg-white shadow-2xl rounded-2xl border-2 border-purple-900 overflow-hidden animate-in fade-in zoom-in-95 duration-150`}
        >
          <div
            className="bg-purple-900 text-white px-3.5 py-2 flex items-center justify-between gap-3 text-xs font-bold cursor-pointer select-none"
            onClick={() => setStaffPopupOpen(false)}
            title="ক্লিক করলে ছোট / কোলাপ্স হবে"
          >
            <div className="flex items-center gap-1.5">
              <span>👥</span>
              <span>Staff Dena / Poana</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setStaffPopupOpen(false);
                }}
                className="hover:bg-purple-800 rounded px-1.5 py-0.5 text-xs transition cursor-pointer"
                title="বক্স ছোট / কোলাপ্স করুন"
              >
                ▼
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setStaffPopupOpen(false);
                }}
                className="hover:bg-rose-600 rounded px-2 py-0.5 text-xs transition cursor-pointer font-bold"
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
        /* Persistent Floating Action Button (Small Icon) when box is closed */
        <div
          className={`fixed ${
            keyboardOpen ? "bottom-80 sm:bottom-84" : "bottom-16 sm:bottom-20"
          } right-4 sm:right-6 z-40 animate-in fade-in zoom-in-95 duration-150`}
        >
          <button
            type="button"
            onClick={() => {
              setStaffPopupOpen(true);
              setStaffPopupMinimized(false);
            }}
            className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-900 hover:bg-purple-800 active:bg-purple-950 text-white shadow-2xl ring-2 ring-purple-400/50 hover:ring-purple-300 transition-all cursor-pointer hover:scale-110 active:scale-95"
            title="Staff Dena / Poana (দেনা / পাওনা বক্স খুলুন)"
          >
            <span className="text-xl sm:text-2xl leading-none select-none">👥</span>
            <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-5 sm:min-w-[20px] items-center justify-center rounded-full bg-amber-400 px-1 text-[9px] sm:text-[10px] font-mono font-black text-purple-950 shadow">
              {topStaffDiffs.length}
            </span>
          </button>
        </div>
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
              onClick={() => setKeyboardOpen(!keyboardOpen)}
              className={`rounded-xl px-3 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${
                keyboardOpen
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40"
                  : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"
              }`}
              title="কাস্টম কিবোর্ড অন/অফ করুন"
            >
              <span>⌨️ কাস্টম কিবোর্ড</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                  keyboardOpen ? "bg-indigo-900 text-white" : "bg-indigo-200 text-indigo-900"
                }`}
              >
                {keyboardOpen ? "ON" : "OFF"}
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
            onClick={() => {
              setActiveKeyboardField("staffName");
              setKeyboardOpen(true);
            }}
            className={`rounded-lg transition ${
              keyboardOpen && activeKeyboardField === "staffName"
                ? "ring-2 ring-indigo-500 p-0.5 bg-amber-50"
                : ""
            }`}
          >
            <label className="mb-1 block text-xs font-bold text-slate-700">Staff Name</label>
            <CategoryInput
              value={form.staffName}
              onChange={(v) => {
                setForm({ ...form, staffName: v });
                setActiveKeyboardField("loan");
              }}
              options={DEFAULT_STAFF}
            />
          </div>
          <div id="field-loan">
            <label className="mb-1 block text-xs font-bold text-slate-700">Loan</label>
            <input
              type="text"
              inputMode={keyboardOpen ? "none" : "text"}
              readOnly={keyboardOpen}
              value={form.loan}
              onFocus={() => {
                setActiveKeyboardField("loan");
              }}
              onClick={() => {
                setActiveKeyboardField("loan");
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, loan: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, loan: val });
                }
              }}
              onBlur={() => {
                if (form.loan && form.loan.includes("+")) {
                  setForm({ ...form, loan: evaluateMathExpression(form.loan) });
                }
              }}
              placeholder="0 (উদা: ১+২+৩=৬)"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                keyboardOpen && activeKeyboardField === "loan"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 bg-yellow-50 text-slate-900"
              }`}
            />
          </div>
          <div id="field-rebate">
            <label className="mb-1 block text-xs font-bold text-slate-700">Rebate</label>
            <input
              type="text"
              inputMode={keyboardOpen ? "none" : "text"}
              readOnly={keyboardOpen}
              value={form.rebate}
              onFocus={() => {
                setActiveKeyboardField("rebate");
              }}
              onClick={() => {
                setActiveKeyboardField("rebate");
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, rebate: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, rebate: val });
                }
              }}
              onBlur={() => {
                if (form.rebate && form.rebate.includes("+")) {
                  setForm({ ...form, rebate: evaluateMathExpression(form.rebate) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                keyboardOpen && activeKeyboardField === "rebate"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 bg-amber-50 text-slate-900"
              }`}
            />
          </div>
          <div id="field-savings">
            <label className="mb-1 block text-xs font-bold text-slate-700">Savings</label>
            <input
              type="text"
              inputMode={keyboardOpen ? "none" : "text"}
              readOnly={keyboardOpen}
              value={form.savings}
              onFocus={() => {
                setActiveKeyboardField("savings");
              }}
              onClick={() => {
                setActiveKeyboardField("savings");
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, savings: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, savings: val });
                }
              }}
              onBlur={() => {
                if (form.savings && form.savings.includes("+")) {
                  setForm({ ...form, savings: evaluateMathExpression(form.savings) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                keyboardOpen && activeKeyboardField === "savings"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 bg-yellow-50 text-slate-900"
              }`}
            />
          </div>
          <div id="field-dps">
            <label className="mb-1 block text-xs font-bold text-slate-700">DPS</label>
            <input
              type="text"
              inputMode={keyboardOpen ? "none" : "text"}
              readOnly={keyboardOpen}
              value={form.dps}
              onFocus={() => {
                setActiveKeyboardField("dps");
              }}
              onClick={() => {
                setActiveKeyboardField("dps");
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, dps: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, dps: val });
                }
              }}
              onBlur={() => {
                if (form.dps && form.dps.includes("+")) {
                  setForm({ ...form, dps: evaluateMathExpression(form.dps) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                keyboardOpen && activeKeyboardField === "dps"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 text-slate-900"
              }`}
            />
          </div>
          <div id="field-admission">
            <label className="mb-1 block text-xs font-bold text-slate-700">Admission</label>
            <input
              type="text"
              inputMode={keyboardOpen ? "none" : "text"}
              readOnly={keyboardOpen}
              value={form.admission}
              onFocus={() => {
                setActiveKeyboardField("admission");
              }}
              onClick={() => {
                setActiveKeyboardField("admission");
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, admission: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, admission: val });
                }
              }}
              onBlur={() => {
                if (form.admission && form.admission.includes("+")) {
                  setForm({ ...form, admission: evaluateMathExpression(form.admission) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                keyboardOpen && activeKeyboardField === "admission"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 text-slate-900"
              }`}
            />
          </div>
          <div id="field-passbook">
            <label className="mb-1 block text-xs font-bold text-slate-700">Passbook</label>
            <input
              type="text"
              inputMode={keyboardOpen ? "none" : "text"}
              readOnly={keyboardOpen}
              value={form.passbook}
              onFocus={() => {
                setActiveKeyboardField("passbook");
              }}
              onClick={() => {
                setActiveKeyboardField("passbook");
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, passbook: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, passbook: val });
                }
              }}
              onBlur={() => {
                if (form.passbook && form.passbook.includes("+")) {
                  setForm({ ...form, passbook: evaluateMathExpression(form.passbook) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                keyboardOpen && activeKeyboardField === "passbook"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-slate-300 text-slate-900"
              }`}
            />
          </div>
          <div id="field-savingsAdjust">
            <label className="mb-1 block text-xs font-bold text-slate-700">Savings Adjust</label>
            <input
              type="text"
              inputMode={keyboardOpen ? "none" : "text"}
              readOnly={keyboardOpen}
              value={form.savingsAdjust}
              onFocus={() => {
                setActiveKeyboardField("savingsAdjust");
              }}
              onClick={() => {
                setActiveKeyboardField("savingsAdjust");
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, savingsAdjust: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, savingsAdjust: val });
                }
              }}
              onBlur={() => {
                if (form.savingsAdjust && form.savingsAdjust.includes("+")) {
                  setForm({ ...form, savingsAdjust: evaluateMathExpression(form.savingsAdjust) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                keyboardOpen && activeKeyboardField === "savingsAdjust"
                  ? "border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]"
                  : "border-rose-300 bg-rose-50 text-rose-900"
              }`}
            />
          </div>
          <div id="field-nogodReturn">
            <label className="mb-1 block text-xs font-bold text-slate-700">Nogod Return</label>
            <input
              type="text"
              inputMode={keyboardOpen ? "none" : "text"}
              readOnly={keyboardOpen}
              value={form.nogodReturn}
              onFocus={() => {
                setActiveKeyboardField("nogodReturn");
              }}
              onClick={() => {
                setActiveKeyboardField("nogodReturn");
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val.endsWith("=")) {
                  setForm({ ...form, nogodReturn: evaluateMathExpression(val) });
                } else {
                  setForm({ ...form, nogodReturn: val });
                }
              }}
              onBlur={() => {
                if (form.nogodReturn && form.nogodReturn.includes("+")) {
                  setForm({ ...form, nogodReturn: evaluateMathExpression(form.nogodReturn) });
                }
              }}
              placeholder="0"
              className={`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none cursor-pointer ${
                keyboardOpen && activeKeyboardField === "nogodReturn"
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
            className="rounded-lg bg-slate-500 px-6 py-2 text-sm font-bold text-white hover:bg-slate-600 cursor-pointer"
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
                          onClick={() => setEdit(r)}
                          className="mr-1 rounded bg-blue-600 px-2 py-0.5 text-xs text-white"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(r.id)}
                          className="rounded bg-rose-600 px-2 py-0.5 text-xs text-white"
                        >
                          Del
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

      {/* Staff Report Edit Modal (Staff wise Edit working) */}
      {edit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[95vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">✏️</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Edit Staff Report ({titleCase(edit.staffName)})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEdit(null)}
                className="text-2xl text-slate-400 hover:text-rose-600 cursor-pointer"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="col-span-2 sm:col-span-3">
                <label className="mb-1 block text-xs font-bold text-slate-700">Staff Name</label>
                <select
                  value={edit.staffName}
                  onChange={(e) => setEdit({ ...edit, staffName: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800"
                >
                  {allStaffNames.map((st) => (
                    <option key={st} value={st}>
                      {titleCase(st)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Loan</label>
                <input
                  type="number"
                  value={edit.loan}
                  onChange={(e) => setEdit({ ...edit, loan: e.target.value })}
                  placeholder="0"
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-right font-mono text-sm font-bold"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Rebate</label>
                <input
                  type="number"
                  value={edit.rebate}
                  onChange={(e) => setEdit({ ...edit, rebate: e.target.value })}
                  placeholder="0"
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-right font-mono text-sm font-bold"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Savings</label>
                <input
                  type="number"
                  value={edit.savings}
                  onChange={(e) => setEdit({ ...edit, savings: e.target.value })}
                  placeholder="0"
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-right font-mono text-sm font-bold"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">DPS</label>
                <input
                  type="number"
                  value={edit.dps}
                  onChange={(e) => setEdit({ ...edit, dps: e.target.value })}
                  placeholder="0"
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-right font-mono text-sm font-bold"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Admission</label>
                <input
                  type="number"
                  value={edit.admission}
                  onChange={(e) => setEdit({ ...edit, admission: e.target.value })}
                  placeholder="0"
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-right font-mono text-sm font-bold"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Passbook</label>
                <input
                  type="number"
                  value={edit.passbook}
                  onChange={(e) => setEdit({ ...edit, passbook: e.target.value })}
                  placeholder="0"
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-right font-mono text-sm font-bold"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Savings Adjust</label>
                <input
                  type="number"
                  value={edit.savingsAdjust}
                  onChange={(e) => setEdit({ ...edit, savingsAdjust: e.target.value })}
                  placeholder="0"
                  className="w-full rounded-lg border border-rose-300 bg-rose-50 px-3 py-1.5 text-right font-mono text-sm font-bold text-rose-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Nogod Return</label>
                <input
                  type="number"
                  value={edit.nogodReturn}
                  onChange={(e) => setEdit({ ...edit, nogodReturn: e.target.value })}
                  placeholder="0"
                  className="w-full rounded-lg border border-rose-300 bg-rose-50 px-3 py-1.5 text-right font-mono text-sm font-bold text-rose-900"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 border-t pt-3">
              <button
                type="button"
                onClick={() => setEdit(null)}
                className="min-h-[44px] rounded-xl bg-slate-200 px-5 py-2 font-bold text-sm text-slate-700 hover:bg-slate-300 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpdate}
                className="min-h-[44px] rounded-xl bg-blue-600 px-6 py-2 font-bold text-sm text-white hover:bg-blue-700 transition cursor-pointer"
              >
                Update Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Keyboard for Staff Collection Report Entry */}
      <StaffCustomKeyboard
        open={keyboardOpen}
        activeField={activeKeyboardField}
        values={form}
        staffList={allStaffNames}
        onFieldSelect={(field) => setActiveKeyboardField(field)}
        onValueChange={(field, val) => setForm((prev) => ({ ...prev, [field]: val }))}
        onSave={handleSave}
        onReset={handleReset}
        onClose={() => setKeyboardOpen(false)}
      />
    </div>
  );
}

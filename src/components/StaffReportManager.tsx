import { useEffect, useState } from "react";
import CategoryInput from "./CategoryInput";
import { fmt } from "./DenominationPopup";
import ReportDenominationModal from "./ReportDenominationModal";
import {
  getLocalStaffReports,
  saveStaffReport,
  updateStaffReport,
  deleteStaffReport,
  getLocalTxs,
  getSummary,
  getCategories,
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
  const [staffPopupOpen, setStaffPopupOpen] = useState(true);
  const [staffPopupMinimized, setStaffPopupMinimized] = useState(false);
  const [prevCash, setPrevCash] = useState(0);
  const [prevBank, setPrevBank] = useState(0);
  const [allTxList, setAllTxList] = useState<Tx[]>([]);
  const [disburseCatList, setDisburseCatList] = useState<string[]>([]);

  const loadData = () => {
    const sReports = getLocalStaffReports(selectedDate);
    setReports(sReports);

    const sumData = getSummary(selectedDate);
    setPrevCash(sumData.prevCash);
    setPrevBank(sumData.prevBank);

    const dCats = getCategories("disburse");
    setDisburseCatList(dCats.map((c) => c.name.toLowerCase().trim()));

    setAllTxList(getLocalTxs());
  };

  useEffect(() => {
    loadData();
    window.addEventListener("tx-changed", loadData);
    return () => window.removeEventListener("tx-changed", loadData);
  }, [selectedDate]);

  const handleSave = () => {
    if (!form.staffName.trim()) return alert("Staff Name required");

    saveStaffReport({
      ...form,
      reportDate: selectedDate,
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
    loadData();
  };

  const handleUpdate = () => {
    if (!edit || !edit.id) return;
    updateStaffReport(edit);
    setEdit(null);
    loadData();
  };

  const handleDelete = (id: number) => {
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
  const totalGrantTotal = totalLoanGross + totalSavingsCombined + totalPassbook + totalAdmission;
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

    const todayAday = stLoan + stRebate + stSavings + stDps + stPassbook + stAdmission;
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
  const todayBankBalance = prevBank + expBankDeposit + fundReceiveToday - incomeBankWithdraw;

  const checkExpens = todayAllReportTotalExpenditure - expBankDeposit;
  const checkWithdraw = incomeBankWithdraw;
  const checkDiferent = checkWithdraw - checkExpens;

  const topStaffDiffs = ["Sakib", "Monir", "Mintu", "Alamgir"].map((name) => {
    const found = denaPoanaRows.find((r) => r.name.toLowerCase() === name.toLowerCase());
    return { name, diff: found ? Math.round(found.diff) : 0 };
  });

  return (
    <div className="space-y-6">
      {/* Floating Popup */}
      {staffPopupOpen && (
        <div className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-40 bg-white shadow-2xl rounded-2xl border-2 border-purple-900 overflow-hidden">
          <div
            className="bg-purple-900 text-white px-3 py-1.5 flex items-center justify-between gap-3 text-xs font-bold cursor-pointer"
            onClick={() => setStaffPopupMinimized(!staffPopupMinimized)}
          >
            <span>Staff Dena / Poana</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setStaffPopupMinimized(!staffPopupMinimized);
                }}
                className="hover:bg-purple-800 rounded px-1.5"
              >
                {staffPopupMinimized ? "▲" : "▼"}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setStaffPopupOpen(false);
                }}
                className="hover:bg-rose-600 rounded px-1.5"
              >
                ×
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
      )}

      {/* Entry Form */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between border-b pb-3">
          <h2 className="text-xl font-bold text-slate-900">Staff Collection Report Entry</h2>
          <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
            Date: {selectedDate}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Staff Name</label>
            <CategoryInput
              value={form.staffName}
              onChange={(v) => setForm({ ...form, staffName: v })}
              options={DEFAULT_STAFF}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Loan</label>
            <input
              type="number"
              value={form.loan}
              onChange={(e) => setForm({ ...form, loan: e.target.value })}
              placeholder="0"
              className="w-full rounded border border-slate-300 bg-yellow-50 px-2.5 py-1.5 text-right font-mono text-xs font-bold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Rebate</label>
            <input
              type="number"
              value={form.rebate}
              onChange={(e) => setForm({ ...form, rebate: e.target.value })}
              placeholder="0"
              className="w-full rounded border border-slate-300 bg-amber-50 px-2.5 py-1.5 text-right font-mono text-xs font-bold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Savings</label>
            <input
              type="number"
              value={form.savings}
              onChange={(e) => setForm({ ...form, savings: e.target.value })}
              placeholder="0"
              className="w-full rounded border border-slate-300 bg-yellow-50 px-2.5 py-1.5 text-right font-mono text-xs font-bold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">DPS</label>
            <input
              type="number"
              value={form.dps}
              onChange={(e) => setForm({ ...form, dps: e.target.value })}
              placeholder="0"
              className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-right font-mono text-xs font-bold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Admission</label>
            <input
              type="number"
              value={form.admission}
              onChange={(e) => setForm({ ...form, admission: e.target.value })}
              placeholder="0"
              className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-right font-mono text-xs font-bold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Passbook</label>
            <input
              type="number"
              value={form.passbook}
              onChange={(e) => setForm({ ...form, passbook: e.target.value })}
              placeholder="0"
              className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-right font-mono text-xs font-bold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Savings Adjust</label>
            <input
              type="number"
              value={form.savingsAdjust}
              onChange={(e) => setForm({ ...form, savingsAdjust: e.target.value })}
              placeholder="0"
              className="w-full rounded border border-rose-300 bg-rose-50 px-2.5 py-1.5 text-right font-mono text-xs font-bold text-rose-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Nogod Return</label>
            <input
              type="number"
              value={form.nogodReturn}
              onChange={(e) => setForm({ ...form, nogodReturn: e.target.value })}
              placeholder="0"
              className="w-full rounded border border-rose-300 bg-rose-50 px-2.5 py-1.5 text-right font-mono text-xs font-bold text-rose-900 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-green-600 px-6 py-2 text-sm font-bold text-white shadow hover:bg-green-700"
          >
            Save Report
          </button>
          <button
            type="button"
            onClick={() =>
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
              })
            }
            className="rounded-lg bg-slate-500 px-6 py-2 text-sm font-bold text-white hover:bg-slate-600"
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
                  const grantTotalRow = grossLoan + totalSavingsRow + passbookVal + admissionVal;
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
          cashInHand={todayCashInHand}
          date={selectedDate}
        />
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   dayBalances.ts (v1.4.41) — রিপোর্ট পেজের "Today Cash" ও
   "Today Bank" বক্সের একই সূত্র শেয়ার্ড ফাংশনে।

   কেন: আগে Day Close মডাল getSummary()-এর চলতি খতিয়ান-মান
   (sum.cash/sum.bank) ক্লোজিং হিসেবে সেভ করত, আর রিপোর্ট পেজের
   Today Cash/Bank বক্স ভিন্ন সূত্রে হিসাব করত → একই দিনে দুই
   জায়গায় দুই সংখ্যা (যেমন 520 বনাম 1,075) দেখাত। এখন ডে ক্লোজ
   ওই একই সূত্র ব্যবহার করে, তাই Closing = Today ব্যালেন্স সবসময় মিলবে।
   ────────────────────────────────────────────────────────────── */
import { getLocalTxs, getLocalStaffReports, getSummary, getCategories } from "./storage";

const DEFAULT_STAFF = ["Sakib", "Mintu", "Alamgir", "Monir"];

const matchStaffCategory = (cat: string, staffName: string) => {
  const c = cat.toLowerCase().trim();
  const s = staffName.toLowerCase().trim();
  return c === s || c.includes(s) || s.includes(c);
};

export interface ReportDayBalances {
  /** রিপোর্ট পেজের Today Cash (StaffReportManager-এর হুবহু সূত্র) */
  cash: number;
  /** রিপোর্ট পেজের Today Bank (StaffReportManager-এর হুবহু সূত্র) */
  bank: number;
}

/**
 * নির্দিষ্ট তারিখের রিপোর্ট-পেজ ব্যালেন্স (সব কর্মীর মোট — ফিল্টারবিহীন)।
 * সূত্র StaffReportManager-এর open-day হিসাবের হুবহু কপি।
 */
export function getReportDayBalances(date: string): ReportDayBalances {
  const reports = getLocalStaffReports(date);
  const allTxList = getLocalTxs();
  const sumData = getSummary(date);
  const prevCash = sumData.prevCash;
  const prevBank = sumData.prevBank;
  const disburseCatList = getCategories("disburse").map((c) => c.name.toLowerCase().trim());

  const targetDateTxs = allTxList.filter((t) => t.txDate === date);
  const targetReceives = targetDateTxs.filter((t) => t.type === "receive");
  const targetPayments = targetDateTxs.filter((t) => t.type === "payment");

  // Rebate loan-er sathe jog holeo grant total-e jog hobe na:
  const totalLoanBase = reports.reduce((s, r) => s + Number(r.loan || 0), 0);
  const totalSavings = reports.reduce((s, r) => s + Number(r.savings || 0), 0);
  const totalDps = reports.reduce((s, r) => s + Number(r.dps || 0), 0);
  const totalSavingsCombined = totalSavings + totalDps;
  const totalPassbook = reports.reduce((s, r) => s + Number(r.passbook || 0), 0);
  const totalAdmission = reports.reduce((s, r) => s + Number(r.admission || 0), 0);
  const totalGrantTotal = totalLoanBase + totalSavingsCombined + totalPassbook + totalAdmission;
  const totalAdjust = reports.reduce((s, r) => s + Number(r.savingsAdjust || 0), 0);
  const totalNogod = reports.reduce((s, r) => s + Number(r.nogodReturn || 0), 0);
  const totalReturnCombined = totalAdjust + totalNogod;

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
    .filter(
      (t) =>
        t.category.toLowerCase().includes("bank deposit") ||
        t.category.toLowerCase().includes("bank deposite")
    )
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const expSavingsReturn = totalReturnCombined;
  const expFundPayment = targetPayments
    .filter((t) => {
      const c = t.category.toLowerCase().trim();
      return (
        c.includes("fund payment") ||
        c.includes("fund transfer") ||
        (c.includes("fund") && !c.includes("receive"))
      );
    })
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const expOthers = targetPayments
    .filter((t) => {
      const c = t.category.toLowerCase().trim();
      if (disburseLoans.some((d) => d.id === t.id)) return false;
      if (c.includes("bank deposit") || c.includes("bank deposite")) return false;
      if (
        c.includes("fund payment") ||
        c.includes("fund transfer") ||
        (c.includes("fund") && !c.includes("receive"))
      ) {
        return false;
      }
      return true;
    })
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
    { label: "Fund Payment", amount: expFundPayment },
    { label: "Others Expense", amount: expOthers },
  ].filter((x) => x.amount > 0);

  const todayAllReportTotalIncome = incomeList.reduce((s, x) => s + x.amount, 0);
  const todayAllReportTotalExpenditure = expenditureList.reduce((s, x) => s + x.amount, 0);

  const fundReceiveToday = targetReceives
    .filter((t) => t.category.toLowerCase().includes("fund receive"))
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

  return {
    cash: todayAllReportTotalIncome - todayAllReportTotalExpenditure,
    bank: prevBank - incomeBankWithdraw + expBankDeposit + fundReceiveToday,
  };
}

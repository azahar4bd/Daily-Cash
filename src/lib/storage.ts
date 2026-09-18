import type {
  Tx,
  StaffReportItem,
  Cat,
  ScRate,
  SubCategoryRule,
  RebateRateItem,
  Summary,
  KallyanRule,
  DayClosure,
} from "@/types";
import { DEFAULT_CATEGORIES, DEFAULT_SUBCAT_RULES, DEFAULT_KALLYAN_RULE } from "./categories";
import { DEFAULT_REBATE_RATES } from "./defaultRebateRates";
import { enqueueNeonAction } from "./neonSync";

const TX_KEY = "gobra_local_transactions";
const SR_KEY = "gobra_local_staff_reports";
const CAT_KEY = "gobra_local_categories";
const SC_KEY = "gobra_local_sc_rates";
const SUBCAT_RULE_KEY = "gobra_local_subcat_rules";
const REBATE_KEY = "gobra_local_rebate_rates";
const G_SHEET_KEY = "gobra_google_sheet_script_url";
const KALLYAN_RULE_KEY = "gobra_local_kallyan_rule";
const DAY_CLOSURES_KEY = "gobra_local_day_closures";

/**
 * Safely evaluates math expressions like "1+2+3" or "500+700+300"
 * Returns the computed integer/number as string, or original string if invalid
 */
export function evaluateMathExpression(input: string): string {
  if (!input) return "";
  let expr = String(input).trim();
  // Strip trailing '='
  if (expr.endsWith("=")) {
    expr = expr.slice(0, -1).trim();
  }
  if (!expr) return "";

  // If already a plain number
  if (/^-?\d+(\.\d+)?$/.test(expr)) return expr;

  // If contains simple additions or math (+, -, *, /)
  if (/^[0-9+\-*/. ]+$/.test(expr)) {
    try {
      // Split additions first (most common microfinance use case)
      if (expr.includes("+") && !expr.includes("*") && !expr.includes("/")) {
        const parts = expr.split("+").map((p) => p.trim()).filter(Boolean);
        const sum = parts.reduce((acc, p) => acc + (Number(p) || 0), 0);
        return String(Math.round(sum));
      }

      // Safe JS evaluation for expressions like "500+200-50"
      const sanitized = expr.replace(/[^0-9+\-*/.]/g, "");
      if (sanitized) {
        // eslint-disable-next-line no-new-func
        const res = Function(`'use strict'; return (${sanitized})`)();
        if (typeof res === "number" && !isNaN(res) && isFinite(res)) {
          return String(Math.round(res));
        }
      }
    } catch {}
  }
  return input;
}

export function getLocalDayClosures(): DayClosure[] {
  try {
    const raw = localStorage.getItem(DAY_CLOSURES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getDayClosure(date: string): DayClosure | null {
  const list = getLocalDayClosures();
  return list.find((c) => c.closeDate === date) || null;
}

export function isDayClosed(date: string): boolean {
  const c = getDayClosure(date);
  return c !== null && c.status === "closed";
}

export function saveDayClosure(payload: DayClosure): DayClosure {
  const list = getLocalDayClosures().filter((c) => c.closeDate !== payload.closeDate);
  const updated = [payload, ...list];
  localStorage.setItem(DAY_CLOSURES_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent("day-close-changed", { detail: payload }));
  window.dispatchEvent(new Event("tx-changed"));
  enqueueNeonAction({ type: "day_close", payload });
  return payload;
}

export function reopenDay(date: string): void {
  const list = getLocalDayClosures().filter((c) => c.closeDate !== date);
  localStorage.setItem(DAY_CLOSURES_KEY, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent("day-close-changed", { detail: { closeDate: date, status: "reopened" } }));
  window.dispatchEvent(new Event("tx-changed"));
  enqueueNeonAction({ type: "day_reopen", payload: date });
}

export function getLocalTxs(): Tx[] {
  try {
    const raw = localStorage.getItem(TX_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTx(payload: Omit<Tx, "id"> & { id?: number }): Tx {
  const list = getLocalTxs();
  const newTx: Tx = {
    ...payload,
    id: payload.id || Date.now(),
  };
  const updated = [newTx, ...list.filter((t) => t.id !== newTx.id)];
  localStorage.setItem(TX_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("tx-changed"));
  enqueueNeonAction({ type: "tx", payload: newTx });
  return newTx;
}

export function updateTx(item: Tx): Tx {
  const list = getLocalTxs();
  const idx = list.findIndex((t) => t.id === item.id);
  if (idx !== -1) list[idx] = item;
  else list.unshift(item);
  localStorage.setItem(TX_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("tx-changed"));
  enqueueNeonAction({ type: "tx", payload: item });
  return item;
}

export function deleteTx(id: number): void {
  const list = getLocalTxs().filter((t) => t.id !== id);
  localStorage.setItem(TX_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("tx-changed"));
  enqueueNeonAction({ type: "tx_del", payload: id });
}

export function getLocalStaffReports(date?: string): StaffReportItem[] {
  try {
    const raw = localStorage.getItem(SR_KEY);
    const list: StaffReportItem[] = raw ? JSON.parse(raw) : [];
    return date ? list.filter((r) => r.reportDate === date) : list;
  } catch {
    return [];
  }
}

export function saveStaffReport(item: Omit<StaffReportItem, "id"> & { id?: number }): StaffReportItem {
  const list = getLocalStaffReports();
  const newSr: StaffReportItem = {
    ...item,
    id: item.id || Date.now(),
    createdAt: new Date().toISOString(),
  };
  const updated = [newSr, ...list.filter((r) => r.id !== newSr.id)];
  localStorage.setItem(SR_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("tx-changed"));
  enqueueNeonAction({ type: "sr", payload: newSr });
  return newSr;
}

export function updateStaffReport(item: StaffReportItem): StaffReportItem {
  const list = getLocalStaffReports();
  const idx = list.findIndex((r) => r.id === item.id);
  if (idx !== -1) list[idx] = item;
  else list.unshift(item);
  localStorage.setItem(SR_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("tx-changed"));
  enqueueNeonAction({ type: "sr", payload: item });
  return item;
}

export function deleteStaffReport(id: number): void {
  const list = getLocalStaffReports().filter((r) => r.id !== id);
  localStorage.setItem(SR_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("tx-changed"));
  enqueueNeonAction({ type: "sr_del", payload: id });
}

export function getCategories(type: string): Cat[] {
  try {
    const raw = localStorage.getItem(CAT_KEY);
    let all: Cat[] = raw ? JSON.parse(raw) : [];
    if (all.length === 0) {
      let idCounter = 1;
      const initial: Cat[] = [];
      for (const [t, names] of Object.entries(DEFAULT_CATEGORIES)) {
        for (const name of names) {
          initial.push({ id: idCounter++, type: t, name });
        }
      }
      localStorage.setItem(CAT_KEY, JSON.stringify(initial));
      all = initial;
    }
    return all.filter((c) => c.type === type);
  } catch {
    return (DEFAULT_CATEGORIES[type] || []).map((name, i) => ({
      id: i + 1,
      type,
      name,
    }));
  }
}

export function addCategory(type: string, name: string): Cat {
  const raw = localStorage.getItem(CAT_KEY);
  const all: Cat[] = raw ? JSON.parse(raw) : [];
  const clean = name.trim().toLowerCase();
  const newCat: Cat = { id: Date.now(), type, name: clean };
  all.push(newCat);
  localStorage.setItem(CAT_KEY, JSON.stringify(all));
  enqueueNeonAction({ type: "cat", payload: newCat });
  return newCat;
}

export function updateCategory(id: number, name: string): void {
  const raw = localStorage.getItem(CAT_KEY);
  const all: Cat[] = raw ? JSON.parse(raw) : [];
  const item = all.find((c) => c.id === id);
  if (item) {
    item.name = name.trim().toLowerCase();
    localStorage.setItem(CAT_KEY, JSON.stringify(all));
    enqueueNeonAction({ type: "cat", payload: item });
  }
}

export function deleteCategory(id: number): void {
  const raw = localStorage.getItem(CAT_KEY);
  const all: Cat[] = raw ? JSON.parse(raw) : [];
  const filtered = all.filter((c) => c.id !== id);
  localStorage.setItem(CAT_KEY, JSON.stringify(filtered));
  enqueueNeonAction({ type: "cat_del", payload: id });
}

export const DEFAULT_SC_RATES: ScRate[] = [
  { id: 1, category: "jagoron", subCategory: "1 year", ratePer100: "13.47" },
  { id: 2, category: "jagoron", subCategory: "1.5 year", ratePer100: "20.21" },
  { id: 3, category: "jagoron", subCategory: "2 year", ratePer100: "26.94" },
  { id: 4, category: "agrossor", subCategory: "1 year", ratePer100: "13.47" },
  { id: 5, category: "agrossor", subCategory: "1.5 year", ratePer100: "20.21" },
  { id: 6, category: "agrossor", subCategory: "2 year", ratePer100: "26.94" },
  { id: 7, category: "buniyed", subCategory: "1 year", ratePer100: "13.47" },
  { id: 8, category: "sufolon", subCategory: "1 year", ratePer100: "13.47" },
  { id: 9, category: "mfce", subCategory: "1 year", ratePer100: "13.47" },
];

export function getScRates(): ScRate[] {
  try {
    const raw = localStorage.getItem(SC_KEY);
    if (!raw) {
      localStorage.setItem(SC_KEY, JSON.stringify(DEFAULT_SC_RATES));
      return DEFAULT_SC_RATES;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_SC_RATES;
  }
}

export function saveScRate(r: Omit<ScRate, "id"> & { id?: number }): void {
  const list = getScRates();
  const next = { ...r, id: r.id || Date.now() };
  const updated = [next, ...list.filter((x) => x.id !== next.id)];
  localStorage.setItem(SC_KEY, JSON.stringify(updated));
  enqueueNeonAction({ type: "sc", payload: next });
}

export function deleteScRate(id: number): void {
  const list = getScRates().filter((x) => x.id !== id);
  localStorage.setItem(SC_KEY, JSON.stringify(list));
  enqueueNeonAction({ type: "sc_del", payload: id });
}

export function getSubCategoryRules(): SubCategoryRule[] {
  try {
    const raw = localStorage.getItem(SUBCAT_RULE_KEY);
    if (!raw) {
      localStorage.setItem(SUBCAT_RULE_KEY, JSON.stringify(DEFAULT_SUBCAT_RULES));
      return DEFAULT_SUBCAT_RULES;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_SUBCAT_RULES;
  }
}

export function saveSubCategoryRule(rule: SubCategoryRule): void {
  const list = getSubCategoryRules();
  const next = { ...rule, id: rule.id || Date.now() };
  const updated = [next, ...list.filter((r) => r.id !== next.id)];
  localStorage.setItem(SUBCAT_RULE_KEY, JSON.stringify(updated));
  enqueueNeonAction({ type: "subcat", payload: next });
}

export function deleteSubCategoryRule(id: number): void {
  const list = getSubCategoryRules().filter((r) => r.id !== id);
  localStorage.setItem(SUBCAT_RULE_KEY, JSON.stringify(list));
  enqueueNeonAction({ type: "subcat_del", payload: id });
}

export const REBATE_VERSION_KEY = "gobra_rebate_db_v6";

export function getRebateRates(): RebateRateItem[] {
  try {
    const v = localStorage.getItem(REBATE_VERSION_KEY);
    if (v !== "v6") {
      localStorage.setItem(REBATE_VERSION_KEY, "v6");
      localStorage.setItem(REBATE_KEY, JSON.stringify(DEFAULT_REBATE_RATES));
      return DEFAULT_REBATE_RATES;
    }

    const raw = localStorage.getItem(REBATE_KEY);
    if (!raw) {
      localStorage.setItem(REBATE_KEY, JSON.stringify(DEFAULT_REBATE_RATES));
      return DEFAULT_REBATE_RATES;
    }
    const items: RebateRateItem[] = JSON.parse(raw);
    if (!Array.isArray(items) || items.length === 0) {
      localStorage.setItem(REBATE_KEY, JSON.stringify(DEFAULT_REBATE_RATES));
      return DEFAULT_REBATE_RATES;
    }
    return items;
  } catch {
    return DEFAULT_REBATE_RATES;
  }
}

export function saveAllRebateRates(items: RebateRateItem[]): void {
  try {
    localStorage.setItem(REBATE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("rebate-rates-changed", { detail: items }));
  } catch {}
}

export function saveRebateRate(rate: Omit<RebateRateItem, "id"> & { id?: number }): void {
  const list = getRebateRates();
  const next: RebateRateItem = {
    id: rate.id || Date.now(),
    product: rate.product.trim(),
    duration: rate.duration.trim(),
    kisti: Number(rate.kisti) || 0,
    rate: String(rate.rate ?? "0"),
    helper: `${rate.product.trim()}|${rate.duration.trim()}|${rate.kisti}`,
  };
  const updated = [next, ...list.filter((r) => r.id !== next.id)];
  saveAllRebateRates(updated);
}

export function updateRebateRateRow(
  id: number,
  data: { product?: string; duration?: string; kisti?: number; rate?: string }
): void {
  const list = getRebateRates();
  const updated = list.map((item) => {
    if (item.id === id) {
      const prod = data.product !== undefined ? data.product.trim() : item.product;
      const dur = data.duration !== undefined ? data.duration.trim() : item.duration;
      const kisti = data.kisti !== undefined ? Number(data.kisti) : item.kisti;
      const rate = data.rate !== undefined ? String(data.rate) : item.rate;
      return {
        ...item,
        product: prod,
        duration: dur,
        kisti,
        rate,
        helper: `${prod}|${dur}|${kisti}`,
      };
    }
    return item;
  });
  saveAllRebateRates(updated);
}

export function renameRebateProduct(oldName: string, newName: string): number {
  const trimmedOld = oldName.trim().toLowerCase();
  const trimmedNew = newName.trim();
  if (!trimmedOld || !trimmedNew || trimmedOld === trimmedNew.toLowerCase()) return 0;
  const list = getRebateRates();
  let count = 0;
  const updated = list.map((item) => {
    if (item.product.trim().toLowerCase() === trimmedOld) {
      count++;
      return {
        ...item,
        product: trimmedNew,
        helper: `${trimmedNew}|${item.duration}|${item.kisti}`,
      };
    }
    return item;
  });
  if (count > 0) {
    saveAllRebateRates(updated);
  }
  return count;
}

export function renameRebateDuration(
  oldDuration: string,
  newDuration: string,
  productFilter?: string
): number {
  const trimmedOld = oldDuration.trim().toLowerCase();
  const trimmedNew = newDuration.trim();
  if (!trimmedOld || !trimmedNew || trimmedOld === trimmedNew.toLowerCase()) return 0;
  const list = getRebateRates();
  let count = 0;
  const updated = list.map((item) => {
    const matchProd =
      !productFilter ||
      item.product.trim().toLowerCase() === productFilter.trim().toLowerCase();
    if (matchProd && item.duration.trim().toLowerCase() === trimmedOld) {
      count++;
      return {
        ...item,
        duration: trimmedNew,
        helper: `${item.product}|${trimmedNew}|${item.kisti}`,
      };
    }
    return item;
  });
  if (count > 0) {
    saveAllRebateRates(updated);
  }
  return count;
}

export function deleteRebateRate(target: number | RebateRateItem): boolean {
  const list = getRebateRates();
  let next: RebateRateItem[];
  if (typeof target === "number") {
    next = list.filter((r) => Number(r.id) !== Number(target) && String(r.id) !== String(target));
  } else {
    const targetId = target.id != null ? Number(target.id) : null;
    const targetProduct = (target.product || "").trim().toLowerCase();
    const targetDuration = (target.duration || "").trim().toLowerCase();
    const targetKisti = Number(target.kisti);

    next = list.filter((r) => {
      if (targetId && Number(r.id) === targetId) return false;
      const rp = (r.product || "").trim().toLowerCase();
      const rd = (r.duration || "").trim().toLowerCase();
      const rk = Number(r.kisti);
      if (rp === targetProduct && rd === targetDuration && rk === targetKisti) {
        return false;
      }
      return true;
    });
  }
  if (next.length !== list.length) {
    saveAllRebateRates(next);
    return true;
  }
  return false;
}

export function deleteRebateProduct(productName: string): number {
  const target = productName.trim().toLowerCase();
  const list = getRebateRates();
  const next = list.filter((r) => (r.product || "").trim().toLowerCase() !== target);
  const count = list.length - next.length;
  if (count > 0) {
    saveAllRebateRates(next);
  }
  return count;
}

export function resetRebateRatesToDefault(): RebateRateItem[] {
  localStorage.setItem(REBATE_VERSION_KEY, "v6");
  saveAllRebateRates(DEFAULT_REBATE_RATES);
  return DEFAULT_REBATE_RATES;
}

const KALLYAN_VERSION_KEY = "kallyan_rule_version_v2";

export function getKallyanRule(): KallyanRule {
  try {
    const version = localStorage.getItem(KALLYAN_VERSION_KEY);
    if (version !== "v2") {
      localStorage.setItem(KALLYAN_VERSION_KEY, "v2");
      localStorage.setItem(KALLYAN_RULE_KEY, JSON.stringify(DEFAULT_KALLYAN_RULE));
      return DEFAULT_KALLYAN_RULE;
    }

    const raw = localStorage.getItem(KALLYAN_RULE_KEY);
    if (!raw) return DEFAULT_KALLYAN_RULE;
    const parsed = JSON.parse(raw);
    return {
      percent: typeof parsed.percent === "number" ? parsed.percent : DEFAULT_KALLYAN_RULE.percent,
      fixed: typeof parsed.fixed === "number" ? parsed.fixed : DEFAULT_KALLYAN_RULE.fixed,
      categoryOverrides: {
        ...(DEFAULT_KALLYAN_RULE.categoryOverrides || {}),
        ...(parsed.categoryOverrides || {}),
      },
    };
  } catch {
    return DEFAULT_KALLYAN_RULE;
  }
}

export function saveKallyanRule(rule: KallyanRule): void {
  try {
    localStorage.setItem(KALLYAN_RULE_KEY, JSON.stringify(rule));
    window.dispatchEvent(new CustomEvent("kallyan-rule-changed", { detail: rule }));
    enqueueNeonAction({ type: "kallyan", payload: rule });
  } catch {}
}

export function getGoogleSheetUrl(): string {
  try {
    return localStorage.getItem(G_SHEET_KEY) || "";
  } catch {
    return "";
  }
}

export function setGoogleSheetUrl(url: string): void {
  try {
    localStorage.setItem(G_SHEET_KEY, url.trim());
  } catch {}
}

export function getSummary(targetDate: string): Summary {
  const allTx = getLocalTxs();
  const allSr = getLocalStaffReports();
  const DEFAULT_PERSONS = ["monir", "sakib", "mintu", "alamgir"];

  // Find all distinct staff names from default + categories + staff reports
  const cats = getCategories("receive");
  const staffSet = new Set<string>(DEFAULT_PERSONS);
  cats.forEach((c) => {
    const n = c.name.toLowerCase().trim();
    if (!["bank withdraw", "fund receive", "others income"].includes(n)) {
      staffSet.add(n);
    }
  });
  allSr.forEach((s) => {
    if (s.staffName) staffSet.add(s.staffName.toLowerCase().trim());
  });
  const allStaffNames = Array.from(staffSet);

  const dateSet = new Set<string>();
  allTx.forEach((t) => dateSet.add(t.txDate));
  allSr.forEach((s) => dateSet.add(s.reportDate));
  dateSet.add(targetDate);
  const sortedDates = Array.from(dateSet).sort();

  let runningCash = 0;
  let runningBank = 0;
  let prevCash = 0;
  let prevBank = 0;
  let todayCash = 0;
  let todayBank = 0;
  let todayReceive = 0;
  let todayPayment = 0;
  let todayBankDeposit = 0;
  let todayBankWithdraw = 0;
  let todayFundReceive = 0;
  const persons: Record<string, number> = Object.fromEntries(
    allStaffNames.map((p) => [p, 0])
  );

  for (const d of sortedDates) {
    if (d === targetDate) {
      prevCash = runningCash;
      prevBank = runningBank;
    }
    const dayTx = allTx.filter((t) => t.txDate === d);
    const daySr = allSr.filter((s) => s.reportDate === d);

    const targetReceives = dayTx.filter((t) => t.type === "receive");
    const targetPayments = dayTx.filter((t) => t.type === "payment");

    // Fund receive: directly increases bank balance only. NEVER counted in cash.
    const dayFundReceive = targetReceives
      .filter((t) => t.category.toLowerCase().includes("fund receive"))
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

    // Bank withdraw (receive txs)
    const dayBankWithdraw = targetReceives
      .filter((t) => t.category.toLowerCase().includes("bank withdraw"))
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

    // Cash receives excluding fund receive
    const dayTxCashReceive = targetReceives
      .filter((t) => !t.category.toLowerCase().includes("fund receive"))
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

    // All payments
    const dayTxPayment = targetPayments.reduce(
      (sum, t) => sum + (Number(t.amount) || 0),
      0
    );

    // Bank deposit (payments)
    const dayBankDeposit = targetPayments
      .filter(
        (t) =>
          t.category.toLowerCase().includes("bank deposit") ||
          t.category.toLowerCase().includes("bank deposite")
      )
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

    // Staff reports collection without rebate (rebate is NOT in grant total or cash)
    const srGrantTotalNoRebate = daySr.reduce(
      (sum, s) =>
        sum +
        Number(s.loan || 0) +
        Number(s.savings || 0) +
        Number(s.dps || 0) +
        Number(s.passbook || 0) +
        Number(s.admission || 0),
      0
    );

    // Disburse loans
    const disburseLoans = targetPayments.filter((t) => {
      const cat = t.category.toLowerCase().trim();
      return (
        ["jagoron", "agrossor", "buni", "sufolon", "mfce"].some((k) =>
          cat.includes(k)
        ) || Boolean(t.subCategory && t.subCategory.trim().length > 0)
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
    const dayKallayan = Math.round(
      otherDisburseSum * 0.01 + buniyadDisburseSum * 0.005
    );
    const dayLoanForm = disburseLoans.length * 5;

    const dayOthersIncome = targetReceives
      .filter((t) => {
        const c = t.category.toLowerCase().trim();
        if (c.includes("bank withdraw") || c.includes("fund receive")) return false;
        if (c.includes("welfare") || c.includes("kallayan") || c.includes("loan form"))
          return false;
        if (allStaffNames.some((st) => c.includes(st))) return false;
        return true;
      })
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

    const expDisburse = disburseLoans.reduce(
      (sum, t) => sum + (Number(t.amount) || 0),
      0
    );
    const expSavingsReturn = daySr.reduce(
      (sum, s) => sum + Number(s.savingsAdjust || 0) + Number(s.nogodReturn || 0),
      0
    );
    const expOthers = targetPayments
      .filter(
        (t) =>
          !["jagoron", "agrossor", "buni", "sufolon", "mfce", "bank deposit", "bank deposite"].some(
            (k) => t.category.toLowerCase().includes(k)
          )
      )
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

    // Report page Today Cash & Today Bank formulas for day d:
    // Report page Today Cash and Today Bank will become next day's opening balances:
    let dayClosingCash = runningCash;
    if (daySr.length > 0 || disburseLoans.length > 0) {
      const incomeAday =
        srGrantTotalNoRebate > 0
          ? srGrantTotalNoRebate
          : targetReceives
              .filter((t) =>
                allStaffNames.some((st) => t.category.toLowerCase().includes(st))
              )
              .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
      const totalDayIncome =
        runningCash +
        incomeAday +
        dayBankWithdraw +
        dayKallayan +
        dayLoanForm +
        dayOthersIncome;
      const totalDayExpenditure =
        expDisburse + dayBankDeposit + expSavingsReturn + expOthers;
      dayClosingCash = Math.round(totalDayIncome - totalDayExpenditure);
    } else {
      dayClosingCash = Math.round(runningCash + dayTxCashReceive - dayTxPayment);
    }

    const dayClosingBank = Math.round(
      runningBank - dayBankWithdraw + dayBankDeposit + dayFundReceive
    );

    runningCash = dayClosingCash;
    runningBank = dayClosingBank;

    if (d === targetDate) {
      todayReceive = dayTxCashReceive;
      todayPayment = dayTxPayment;
      todayBankDeposit = dayBankDeposit;
      todayBankWithdraw = dayBankWithdraw;
      todayFundReceive = dayFundReceive;

      dayTx.forEach((t) => {
        if (t.type === "receive") {
          const cat = t.category.toLowerCase().trim();
          for (const p of allStaffNames) {
            if (cat === p || cat.includes(p) || p.includes(cat)) {
              persons[p] = (persons[p] || 0) + (Number(t.amount) || 0);
              break;
            }
          }
        }
      });
    }
  }

  // Exact formulas specified by user:
  // 1. ক্যাশ ইন হ্যান্ড = গত দিনের হাতে নগদ + আজ রিসিভ কৃত টাকা - আজ পেমেন্ট কৃত টাকা (Fund receive বাদ)
  todayCash = Math.round(prevCash + todayReceive - todayPayment);

  // 2. ব্যাংক ব্যালেন্স = গতদিনের ব্যাংক ব্যালেন্স + আজকে ব্যাংকে জমা - আজকে ব্যাংক থেকে উত্তোলন + Fund Receive
  todayBank = Math.round(
    prevBank + todayBankDeposit - todayBankWithdraw + todayFundReceive
  );

  // 3. মোট রিসিভ = গত দিনের হাতে নগদ সহ মোট রিসিবকৃত টাকা
  const totalReceiveWithOpening = Math.round(prevCash + todayReceive);

  // 4. মোট পেমেন্ট = আজকে মোট পেমেন্ট কৃত টাকা
  const totalPayment = Math.round(todayPayment);

  let totalStaffReceive = 0;
  for (const p of allStaffNames) {
    totalStaffReceive += persons[p] || 0;
  }

  return {
    date: targetDate,
    cash: todayCash,
    bank: todayBank,
    prevCash,
    prevBank,
    todayCashInHand: todayCash,
    todayBankBalance: todayBank,
    receive: totalReceiveWithOpening,
    expense: totalPayment,
    todayReceiveOnly: todayReceive,
    todayPayment: totalPayment,
    totalReceiveWithOpening,
    todayBankDeposit,
    todayBankWithdraw,
    totalStaffReceive,
    persons,
  };
}

export function getReportPageFigures(selectedDate: string): {
  reportCashInHand: number;
  reportBankBalance: number;
} {
  const sum = getSummary(selectedDate);
  const allTx = getLocalTxs();
  const daySr = getLocalStaffReports(selectedDate);

  const prevCash = sum.prevCash;
  const prevBank = sum.prevBank;

  const targetDateTxs = allTx.filter((t) => t.txDate === selectedDate);
  const targetReceives = targetDateTxs.filter((t) => t.type === "receive");
  const targetPayments = targetDateTxs.filter((t) => t.type === "payment");

  // Total Collection without rebate from staff reports
  const srGrantTotal = daySr.reduce(
    (s, r) =>
      s +
      (Number(r.loan) || 0) +
      (Number(r.savings) || 0) +
      (Number(r.dps) || 0) +
      (Number(r.passbook) || 0) +
      (Number(r.admission) || 0),
    0
  );

  const DEFAULT_STAFF = ["monir", "sakib", "mintu", "alamgir"];
  const staffReceives = targetReceives
    .filter((t) => DEFAULT_STAFF.some((st) => t.category.toLowerCase().includes(st)))
    .reduce((s, t) => s + (Number(t.amount) || 0), 0);

  const incomeAday = srGrantTotal > 0 ? srGrantTotal : staffReceives;
  const incomeHandCash = prevCash;
  const incomeBankWithdraw = targetReceives
    .filter((t) => t.category.toLowerCase().includes("bank withdraw"))
    .reduce((s, t) => s + (Number(t.amount) || 0), 0);

  const disburseLoans = targetPayments.filter((t) => {
    const cat = t.category.toLowerCase().trim();
    return (
      ["jagoron", "agrossor", "buni", "sufolon", "mfce"].some((k) => cat.includes(k)) ||
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
      if (DEFAULT_STAFF.some((st) => c.includes(st))) return false;
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
    .reduce((s, t) => s + (Number(t.amount) || 0), 0);
  const expSavingsReturn = daySr.reduce(
    (s, r) => s + (Number(r.savingsAdjust) || 0) + (Number(r.nogodReturn) || 0),
    0
  );
  const expOthers = targetPayments
    .filter(
      (t) =>
        !["jagoron", "agrossor", "buni", "sufolon", "mfce", "bank deposit", "bank deposite"].some(
          (k) => t.category.toLowerCase().includes(k)
        )
    )
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

  const totalIncome =
    incomeAday +
    incomeHandCash +
    incomeBankWithdraw +
    incomeKallayan +
    incomeLoanForm +
    incomeOthers;
  const totalExpenditure = expDisburse + expBankDeposit + expSavingsReturn + expOthers;

  const reportCashInHand = Math.round(totalIncome - totalExpenditure);
  const fundReceiveToday = targetReceives
    .filter((t) => t.category.toLowerCase().includes("fund receive"))
    .reduce((s, t) => s + (Number(t.amount) || 0), 0);
  const reportBankBalance = Math.round(
    prevBank - incomeBankWithdraw + expBankDeposit + fundReceiveToday
  );

  return { reportCashInHand, reportBankBalance };
}

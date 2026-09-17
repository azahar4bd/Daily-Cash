import type {
  Tx,
  StaffReportItem,
  Cat,
  ScRate,
  SubCategoryRule,
  RebateRateItem,
  Summary,
  KallyanRule,
} from "@/types";
import { DEFAULT_CATEGORIES, DEFAULT_SUBCAT_RULES, DEFAULT_KALLYAN_RULE } from "./categories";
import { DEFAULT_REBATE_RATES } from "./defaultRebateRates";

const TX_KEY = "gobra_local_transactions";
const SR_KEY = "gobra_local_staff_reports";
const CAT_KEY = "gobra_local_categories";
const SC_KEY = "gobra_local_sc_rates";
const SUBCAT_RULE_KEY = "gobra_local_subcat_rules";
const REBATE_KEY = "gobra_local_rebate_rates";
const G_SHEET_KEY = "gobra_google_sheet_script_url";
const KALLYAN_RULE_KEY = "gobra_local_kallyan_rule";

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
  return newTx;
}

export function updateTx(item: Tx): Tx {
  const list = getLocalTxs();
  const idx = list.findIndex((t) => t.id === item.id);
  if (idx !== -1) list[idx] = item;
  else list.unshift(item);
  localStorage.setItem(TX_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("tx-changed"));
  return item;
}

export function deleteTx(id: number): void {
  const list = getLocalTxs().filter((t) => t.id !== id);
  localStorage.setItem(TX_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("tx-changed"));
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
  return newSr;
}

export function updateStaffReport(item: StaffReportItem): StaffReportItem {
  const list = getLocalStaffReports();
  const idx = list.findIndex((r) => r.id === item.id);
  if (idx !== -1) list[idx] = item;
  else list.unshift(item);
  localStorage.setItem(SR_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("tx-changed"));
  return item;
}

export function deleteStaffReport(id: number): void {
  const list = getLocalStaffReports().filter((r) => r.id !== id);
  localStorage.setItem(SR_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("tx-changed"));
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
  return newCat;
}

export function updateCategory(id: number, name: string): void {
  const raw = localStorage.getItem(CAT_KEY);
  const all: Cat[] = raw ? JSON.parse(raw) : [];
  const item = all.find((c) => c.id === id);
  if (item) item.name = name.trim().toLowerCase();
  localStorage.setItem(CAT_KEY, JSON.stringify(all));
}

export function deleteCategory(id: number): void {
  const raw = localStorage.getItem(CAT_KEY);
  const all: Cat[] = raw ? JSON.parse(raw) : [];
  const filtered = all.filter((c) => c.id !== id);
  localStorage.setItem(CAT_KEY, JSON.stringify(filtered));
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
}

export function deleteScRate(id: number): void {
  const list = getScRates().filter((x) => x.id !== id);
  localStorage.setItem(SC_KEY, JSON.stringify(list));
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
}

export function deleteSubCategoryRule(id: number): void {
  const list = getSubCategoryRules().filter((r) => r.id !== id);
  localStorage.setItem(SUBCAT_RULE_KEY, JSON.stringify(list));
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
  const PERSONS = ["monir", "sakib", "mintu", "alamgir"];

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
  let todayExpense = 0;
  const persons: Record<string, number> = Object.fromEntries(
    PERSONS.map((p) => [p, 0])
  );

  for (const d of sortedDates) {
    if (d === targetDate) {
      prevCash = runningCash;
      prevBank = runningBank;
    }
    const dayTx = allTx.filter((t) => t.txDate === d);
    const daySr = allSr.filter((s) => s.reportDate === d);

    const staffAday = daySr.reduce(
      (sum, s) =>
        sum +
        Number(s.loan) +
        Number(s.rebate) +
        Number(s.savings) +
        Number(s.dps) +
        Number(s.passbook) +
        Number(s.admission),
      0
    );
    const directStaffReceive = dayTx
      .filter((t) => t.type === "receive" && PERSONS.some((p) => t.category.includes(p)))
      .reduce((sum, t) => sum + Number(t.amount), 0);
    const finalAday = staffAday > 0 ? staffAday : directStaffReceive;

    const bankWithdraw = dayTx
      .filter((t) => t.type === "receive" && t.category.includes("bank withdraw"))
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const disburseLoans = dayTx.filter(
      (t) =>
        t.type === "payment" &&
        (["jagoron", "agrossor", "buni", "sufolon", "mfce"].some((k) =>
          t.category.includes(k)
        ) ||
          Boolean(t.subCategory))
    );
    const disburseAmt = disburseLoans.reduce((sum, t) => sum + Number(t.amount), 0);
    const disburseCount = disburseLoans.length;

    let buniyadSum = 0;
    let otherDisburseSum = 0;
    disburseLoans.forEach((t) => {
      if (t.category.includes("buni")) buniyadSum += Number(t.amount);
      else otherDisburseSum += Number(t.amount);
    });
    const kallayan = Math.round(otherDisburseSum * 0.01 + buniyadSum * 0.005);
    const loanFormAmt = disburseCount * 5;

    const fundReceive = dayTx
      .filter((t) => t.type === "receive" && t.category.includes("fund receive"))
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const othersIncome = dayTx
      .filter(
        (t) =>
          t.type === "receive" &&
          !t.category.includes("bank withdraw") &&
          !t.category.includes("fund receive") &&
          !PERSONS.some((p) => t.category.includes(p))
      )
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const bankDeposit = dayTx
      .filter(
        (t) =>
          t.type === "payment" &&
          (t.category.includes("bank deposit") || t.category.includes("bank deposite"))
      )
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const staffReturn = daySr.reduce(
      (sum, s) => sum + Number(s.savingsAdjust) + Number(s.nogodReturn),
      0
    );

    const othersExpense = dayTx
      .filter(
        (t) =>
          t.type === "payment" &&
          ![
            "jagoron",
            "agrossor",
            "buni",
            "sufolon",
            "mfce",
            "bank deposit",
            "bank deposite",
          ].some((k) => t.category.includes(k))
      )
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const dayIncome =
      runningCash + finalAday + bankWithdraw + kallayan + loanFormAmt + othersIncome;
    const dayExpenditure = disburseAmt + bankDeposit + staffReturn + othersExpense;
    runningCash = Math.round(dayIncome - dayExpenditure);
    runningBank = Math.round(runningBank + bankDeposit + fundReceive - bankWithdraw);

    if (d === targetDate) {
      todayCash = runningCash;
      todayBank = runningBank;
      todayReceive = finalAday + bankWithdraw + kallayan + loanFormAmt + othersIncome;
      todayExpense = dayExpenditure;
      dayTx.forEach((t) => {
        if (t.type === "receive") {
          for (const p of PERSONS) {
            if (t.category.includes(p)) {
              persons[p] += Number(t.amount);
              break;
            }
          }
        }
      });
    }
  }

  return {
    date: targetDate,
    cash: todayCash,
    bank: todayBank,
    prevCash,
    prevBank,
    todayCashInHand: todayCash,
    todayBankBalance: todayBank,
    receive: todayReceive,
    expense: todayExpense,
    persons,
  };
}

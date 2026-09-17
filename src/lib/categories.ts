import type { ScRate, SubCategoryRule, KallyanRule } from "@/types";

export const DEFAULT_KALLYAN_RULE: KallyanRule = {
  percent: 1,
  fixed: 15,
  categoryOverrides: {
    jagoron: { percent: 1, fixed: 15 },
    agrossor: { percent: 1, fixed: 15 },
    buniyed: { percent: 0.5, fixed: 15 },
    sufolon: { percent: 1, fixed: 15 },
    mfce: { percent: 1, fixed: 15 },
  },
};

export const DEFAULT_CATEGORIES: Record<string, string[]> = {
  receive: [
    "bank withdraw",
    "fund receive",
    "monir",
    "sakib",
    "mintu",
    "alamgir",
    "others income",
  ],
  payment: [
    "jagoron",
    "agrossor",
    "buniyed",
    "sufolon",
    "mfce",
    "bank deposit",
    "bank withdraw",
    "others expense",
    "fund payment",
    "savings return",
  ],
  disburse: ["jagoron", "agrossor", "buniyed", "sufolon", "mfce"],
  expense: [
    "bank deposit",
    "bank withdraw",
    "others expense",
    "fund payment",
    "savings return",
  ],
  rebate: ["monir", "sakib", "mintu", "alamgir", "customer rebate", "others"],
};

export const PAYMENT_SUB_CATEGORIES = ["1 year", "1.5 year", "2 year"];

export const INSTALLMENTS: Record<string, number> = {
  "1 year": 12,
  "1.5 year": 18,
  "2 year": 24,
};

export const DEFAULT_SUBCAT_RULES: SubCategoryRule[] = [
  {
    id: 1,
    subCategory: "1 year",
    installments: 12,
    mode: "all",
    categories: [],
  },
  {
    id: 2,
    subCategory: "1.5 year",
    installments: 18,
    mode: "all_except",
    categories: ["buniyed", "sufolon"],
  },
  {
    id: 3,
    subCategory: "2 year",
    installments: 24,
    mode: "only",
    categories: ["agrossor"],
  },
];

export const isSubCategoryAllowed = (
  subCat: string,
  category: string,
  rules: SubCategoryRule[]
): boolean => {
  const normSub = subCat.trim().toLowerCase();
  const normCat = category.trim().toLowerCase();
  const rule = rules.find((r) => r.subCategory.trim().toLowerCase() === normSub);
  if (!rule) return true;
  const list = (rule.categories || []).map((c) => c.trim().toLowerCase());
  if (rule.mode === "all") return true;
  if (rule.mode === "all_except") return !list.includes(normCat);
  if (rule.mode === "only") return list.includes(normCat);
  return true;
};

export const filterAllowedSubCategories = (
  category: string,
  rules: SubCategoryRule[]
): string[] => {
  const allSubCats = Array.from(new Set(rules.map((r) => r.subCategory)));
  return allSubCats.filter((sub) => isSubCategoryAllowed(sub, category, rules));
};

export const getInstallments = (sub: string, rules?: SubCategoryRule[]): number => {
  const norm = sub.trim().toLowerCase();
  if (rules && rules.length > 0) {
    const found = rules.find((r) => r.subCategory.trim().toLowerCase() === norm);
    if (found && found.installments) return found.installments;
  }
  return INSTALLMENTS[norm] || 12;
};

export const calcServiceCharge = (
  amount: number,
  category: string,
  sub: string,
  rates: ScRate[]
) => {
  const c = category.trim().toLowerCase();
  const s = sub.trim().toLowerCase();
  const r = rates.find((x) => x.category === c && x.subCategory === s);
  if (!r || !amount) return 0;
  return Math.round(amount * Number(r.ratePer100)) / 100;
};

export const isLoanCategory = (c: string, rates: ScRate[]) => {
  const k = c.trim().toLowerCase();
  return !!k && rates.some((r) => r.category === k);
};

export const getKallyanForCategory = (
  category?: string,
  rule: KallyanRule = DEFAULT_KALLYAN_RULE
): { percent: number; fixed: number } => {
  if (category && rule?.categoryOverrides) {
    const catNorm = category.trim().toLowerCase();
    if (rule.categoryOverrides[catNorm]) {
      return rule.categoryOverrides[catNorm];
    }
  }
  return {
    percent: typeof rule?.percent === "number" ? rule.percent : DEFAULT_KALLYAN_RULE.percent,
    fixed: typeof rule?.fixed === "number" ? rule.fixed : DEFAULT_KALLYAN_RULE.fixed,
  };
};

export const calcKallyan = (
  amount: number,
  category?: string,
  rule: KallyanRule = DEFAULT_KALLYAN_RULE
) => {
  if (!amount || amount <= 0) return 0;
  const cfg = getKallyanForCategory(category, rule);
  return Math.round((amount * cfg.percent) / 100) + cfg.fixed;
};

export const titleCase = (s: string | null | undefined) =>
  (s ?? "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

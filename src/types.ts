export type Denom = Record<string, number>;

export type Tx = {
  id: number;
  type: string; // 'receive' | 'payment'
  category: string;
  subCategory?: string | null;
  amount: string;
  serviceCharge?: string | null;
  description?: string | null;
  denomination?: Denom | null;
  otherAmount?: string | null;
  txDate: string;
};

export type StaffReportItem = {
  id: number;
  reportDate: string;
  staffName: string;
  loan: string;
  rebate: string;
  savings: string;
  dps: string;
  admission: string;
  passbook: string;
  savingsAdjust: string;
  nogodReturn: string;
  createdAt?: string;
};

export type Cat = {
  id: number;
  type: string;
  name: string;
};

export type ScRate = {
  id: number;
  category: string;
  subCategory: string;
  ratePer100: string;
};

export type SubCategoryRule = {
  id?: number;
  subCategory: string;
  installments: number;
  mode: "all" | "all_except" | "only";
  categories: string[];
};

export type RebateRateItem = {
  id: number;
  product: string;
  duration: string;
  kisti: number;
  helper: string;
  rate: string;
};

export type KallyanRule = {
  percent: number; // e.g. 10 (%)
  fixed: number;   // e.g. 5 (Tk)
  categoryOverrides?: Record<string, { percent: number; fixed: number }>;
};

export type Summary = {
  date: string;
  cash: number;
  bank: number;
  prevCash: number;
  prevBank: number;
  todayCashInHand: number;
  todayBankBalance: number;
  receive: number;
  expense: number;
  persons: Record<string, number>;
};

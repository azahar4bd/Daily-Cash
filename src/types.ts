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

/**
 * Check পেজের এন্ট্রি
 * মেম্বার ডাটাবেজে কোড থাকলে name/centre সেখান থেকে আসে (foundInDb = true),
 * না থাকলে সব ঘর হাতে পূরণ করতে হয় (foundInDb = false) — তখন নতুন মেম্বার তৈরি হয়।
 */
export type CheckEntry = {
  id: number;
  checkDate: string;
  memberCode: string;
  memberName: string;
  centreCode: string;
  centreName: string;
  bankName: string;
  checkNo: string;
  /** বিতরণ (Disbursse) — চেকটি যে খাতে বিতরণ হচ্ছে */
  disbursse?: string;
  /** প্রকল্প (Project) */
  project?: string;
  /** ডাটাবেজে পাওয়া গিয়েছিল কি না */
  foundInDb?: boolean;
  createdAt?: string;
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

export type DateActivity = {
  date: string;
  dayName: string;
  txCount: number;
  receiveCount: number;
  paymentCount: number;
  receiveTotal: number;
  paymentTotal: number;
  srCount: number;
  isOpen: boolean;
  isClosed: boolean;
  closingCash?: number;
  closingBank?: number;
};

export type DayOpen = {
  id?: number;
  openDate: string; // 'YYYY-MM-DD'
  prevCloseDate?: string | null;
  openingCash: number;
  openingBank: number;
  openedAt: string;
  openedBy?: string;
};

export type DayState = "not_opened" | "open" | "closed";

export type DayClosure = {
  id?: number;
  closeDate: string; // 'YYYY-MM-DD'
  openingCash: number;
  openingBank: number;
  closingCash: number;
  closingBank: number;
  totalReceive: number;
  totalPayment: number;
  denomination?: Record<string, number> | null;
  status: "closed";
  closedAt: string;
  closedBy?: string;
  notes?: string;
};

export type Summary = {
  date: string;
  cash: number;
  bank: number;
  prevCash: number;
  prevBank: number;
  prevDate?: string;
  todayCashInHand: number;
  todayBankBalance: number;
  receive: number;
  expense: number;
  todayReceiveOnly?: number;
  todayPayment?: number;
  todayKallayan?: number;
  todayLoanForm?: number;
  totalReceiveWithOpening?: number;
  todayBankDeposit?: number;
  todayBankWithdraw?: number;
  totalStaffReceive?: number;
  persons: Record<string, number>;
};

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
  /** ✔ MICR চেক কি না — টিক দিলে টেবিলে MICR, না দিলে NON MICR */
  micr?: boolean;
  /** ↩ Return টিক (v1.4.47) — টিক দিলে এন্ট্রিটি চেক লিস্ট থেকে Return টেবিলে সরে যায়, টিক তুললে ফিরে আসে */
  returned?: boolean;
  /** 🏦 হিসাব নং (v1.4.74) — যার অ্যাকাউন্ট সেটি accountType-এ; পুরনো এন্ট্রিতে ফাঁকা */
  accountNo?: string;
  /** হিসাবের ক্যাটাগরি (v1.4.74): মেম্বার | জামিনদার-১ | জামিনদার-২ */
  accountType?: string;
  /**
   * 🏦 অতিরিক্ত ব্যাংক + চেক নম্বরের জোড়া (v1.4.48) — এক এন্ট্রিতে একাধিক ব্যাংক/চেক।
   * প্রথম ব্যাংক/চেক নম্বর bankName/checkNo-তেই থাকে; টেবিলে এক সারিতেই দেখায়।
   * v1.4.50: প্রতি জোড়ার নিজস্ব MICR টিক (micr) — প্রথম জোড়ারটি এন্ট্রির micr ফিল্ডে।
   */
  extraBanks?: { bankName: string; checkNo: string; micr?: boolean; accountNo?: string; accountType?: string }[];
  /**
   * 🔁 রি-ইস্যু লিংক (v1.4.49):
   * • `reissuedTo` — পুরনো এন্ট্রিতে বসে: চেকটি রি-ইস্যু হয়েছে (নতুন এন্ট্রির আইডি, রি-ইস্যুর তারিখ, নতুন চেক নম্বর)
   * • `reissuedFrom` — নতুন এন্ট্রিতে বসে: এটি পুরনো চেকের রি-ইস্যু (পুরনো আইডি, পুরনো চেক নম্বর, পুরনো তারিখ)
   */
  reissuedTo?: { id: number; date: string; checkNo: string };
  reissuedFrom?: { id: number; checkNo: string; checkDate: string };
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
  /** v1.4.79: Manager-এর ↑↓ দিয়ে সাজানো ইউজারের নিজের ক্রম (১ থেকে); পুরনো ডেটায় অনুপস্থিত */
  sortOrder?: number;
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
  /** ✍️ ওপেনিং ক্যাশ/ব্যাংক হাতে টাইপ করে বসানো হয়েছে কি না */
  manualOpening?: boolean;
  /** অ্যাপের নিজের হিসাবে যা আসত — তুলনা/অডিটের জন্য সংরক্ষিত */
  systemOpeningCash?: number;
  systemOpeningBank?: number;
  /** কেন হাতে বসানো হলো — ঐচ্ছিক নোট */
  openingNote?: string;
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

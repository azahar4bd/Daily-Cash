import { neon } from "@neondatabase/serverless";
import { getCurrentBranch, DEFAULT_BRANCH_ID } from "./branchScope";
import type { CheckEntry } from "@/types";
import type { Member } from "./memberDb";
import type {
  Tx,
  StaffReportItem,
  Cat,
  ScRate,
  SubCategoryRule,
  KallyanRule,
  RebateRateItem,
  DayClosure,
  DayOpen,
} from "@/types";

export const NEON_DATABASE_URL =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_NEON_DATABASE_URL) ||
  "postgresql://neondb_owner:npg_ZWT8gcO4xuym@ep-aged-night-b3r0h0bv.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

// Create Neon serverless HTTP sql client
// (disableWarningInBrowsers: কনসোলে বড় সতর্কবার্তা ছাপা বন্ধ — অ্যাপের নিজস্ব নিয়ন্ত্রণ আছে)
export const sql = neon(NEON_DATABASE_URL, { disableWarningInBrowsers: true });

/* ══════════════════════════════════════════════════════════════
 * 🏢 মাল্টি-অফিস ক্লাউড স্কোপ
 * প্রতিটি অফিসের জন্য Neon-এ আলাদা **স্কিমা**:
 *   • গোবরা (ডিফল্ট)  → `public`  (আগের সব ডেটা হুবহু সেই জায়গাতেই)
 *   • অন্য যেকোনো অফিস → `br_<অফিস_আইডি>`  (নিজের টেবিল, নিজেই তৈরি হয়)
 * ফলে এক অফিসের হিসাব ক্লাউডে আরেক অফিসের সাথে মিশবে না।
 * ══════════════════════════════════════════════════════════════ */

/** বর্তমান অফিসের ক্লাউড স্কিমার নাম */
export const branchSchema = (): string => {
  const b = String(getCurrentBranch() || DEFAULT_BRANCH_ID).trim();
  if (!b || b === DEFAULT_BRANCH_ID) return "public";
  return "br_" + b.toLowerCase().replace(/[^a-z0-9_]/g, "_").slice(0, 48);
};

/** স্কিমা-কোয়ালিফাইড টেবিলের নাম (নিরাপদ — নিজের স্যানিটাইজ করা আইডি থেকে তৈরি) */
export const T = (table: string): string => `"${branchSchema()}"."${table}"`;

/** SQL টেমপ্লেটে টেবিলের নাম বসানোর জন্য raw মার্কার */
const tbl = (table: string) => sql.unsafe(T(table));

export interface NeonSyncState {
  connected: boolean;
  isSyncing: boolean;
  lastSyncTime: string | null;
  lastError: string | null;
  pendingCount: number;
}

const SYNC_STATE_KEY = "gobra_neon_sync_state";

export function getStoredSyncState(): NeonSyncState {
  try {
    const raw = localStorage.getItem(SYNC_STATE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    connected: true,
    isSyncing: false,
    lastSyncTime: null,
    lastError: null,
    pendingCount: 0,
  };
}

export function updateSyncState(patch: Partial<NeonSyncState>): void {
  const current = getStoredSyncState();
  const updated = { ...current, ...patch };
  try {
    localStorage.setItem(SYNC_STATE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("neon-sync-status-changed", { detail: updated }));
  } catch {}
}

/**
 * Fetch all transactions from Neon
 */
export async function fetchTransactionsFromNeon(): Promise<Tx[]> {
  const rows = await sql`
    SELECT id, type, category, sub_category, amount, service_charge, description, denomination, other_amount, tx_date
    FROM ${tbl("transactions")}
    ORDER BY id DESC
  `;
  return rows.map((r: any) => ({
    id: Number(r.id),
    type: r.type,
    category: r.category,
    subCategory: r.sub_category || "",
    amount: String(r.amount ?? "0"),
    serviceCharge: r.service_charge != null ? String(r.service_charge) : undefined,
    description: r.description || "",
    denomination: r.denomination || undefined,
    otherAmount: r.other_amount != null ? String(r.other_amount) : undefined,
    txDate: r.tx_date,
  }));
}

/**
 * Save / Upsert a transaction in Neon
 */
export async function upsertTxInNeon(t: Tx): Promise<void> {
  await sql`
    INSERT INTO ${tbl("transactions")} (id, type, category, sub_category, amount, service_charge, description, denomination, other_amount, tx_date)
    VALUES (
      ${t.id},
      ${t.type},
      ${t.category},
      ${t.subCategory || ""},
      ${Number(t.amount) || 0},
      ${Number(t.serviceCharge) || 0},
      ${t.description || ""},
      ${t.denomination ? JSON.stringify(t.denomination) : null},
      ${t.otherAmount ? Number(t.otherAmount) : 0},
      ${t.txDate}
    )
    ON CONFLICT (id) DO UPDATE SET
      type = EXCLUDED.type,
      category = EXCLUDED.category,
      sub_category = EXCLUDED.sub_category,
      amount = EXCLUDED.amount,
      service_charge = EXCLUDED.service_charge,
      description = EXCLUDED.description,
      denomination = EXCLUDED.denomination,
      other_amount = EXCLUDED.other_amount,
      tx_date = EXCLUDED.tx_date;
  `;
}

/**
 * Delete a transaction from Neon
 */
export async function deleteTxFromNeon(id: number | string): Promise<void> {
  const numId = Number(id);
  if (!numId || isNaN(numId)) return;
  await sql`DELETE FROM ${tbl("transactions")} WHERE id = ${numId}`;
}

/**
 * Fetch all staff reports from Neon
 */
export async function fetchStaffReportsFromNeon(): Promise<StaffReportItem[]> {
  const rows = await sql`
    SELECT id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return, created_at
    FROM ${tbl("staff_reports")}
    ORDER BY id DESC
  `;
  return rows.map((r: any) => ({
    id: Number(r.id),
    reportDate: r.report_date,
    staffName: r.staff_name,
    loan: String(r.loan ?? "0"),
    rebate: String(r.rebate ?? "0"),
    savings: String(r.savings ?? "0"),
    dps: String(r.dps ?? "0"),
    admission: String(r.admission ?? "0"),
    passbook: String(r.passbook ?? "0"),
    savingsAdjust: String(r.savings_adjust ?? "0"),
    nogodReturn: String(r.nogod_return ?? "0"),
    createdAt: r.created_at ? new Date(r.created_at).toISOString() : undefined,
  }));
}

/**
 * Save / Upsert a staff report in Neon
 */
export async function upsertStaffReportInNeon(sr: StaffReportItem): Promise<void> {
  await sql`
    INSERT INTO ${tbl("staff_reports")} (id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return)
    VALUES (
      ${sr.id},
      ${sr.staffName},
      ${sr.reportDate},
      ${Number(sr.loan) || 0},
      ${Number(sr.rebate) || 0},
      ${Number(sr.savings) || 0},
      ${Number(sr.dps) || 0},
      ${Number(sr.passbook) || 0},
      ${Number(sr.admission) || 0},
      ${Number(sr.savingsAdjust) || 0},
      ${Number(sr.nogodReturn) || 0}
    )
    ON CONFLICT (id) DO UPDATE SET
      staff_name = EXCLUDED.staff_name,
      report_date = EXCLUDED.report_date,
      loan = EXCLUDED.loan,
      rebate = EXCLUDED.rebate,
      savings = EXCLUDED.savings,
      dps = EXCLUDED.dps,
      passbook = EXCLUDED.passbook,
      admission = EXCLUDED.admission,
      savings_adjust = EXCLUDED.savings_adjust,
      nogod_return = EXCLUDED.nogod_return;
  `;
}

/**
 * Delete a staff report from Neon
 */
export async function deleteStaffReportFromNeon(id: number | string): Promise<void> {
  const numId = Number(id);
  if (!numId || isNaN(numId)) return;
  await sql`DELETE FROM ${tbl("staff_reports")} WHERE id = ${numId}`;
}

/**
 * Fetch categories from Neon
 */
export async function fetchCategoriesFromNeon(): Promise<Cat[]> {
  const rows = await sql`SELECT id, type, name FROM ${tbl("categories")} ORDER BY id ASC`;
  return rows.map((r: any) => ({
    id: Number(r.id),
    type: r.type,
    name: r.name,
  }));
}

/**
 * Upsert category in Neon
 */
export async function upsertCategoryInNeon(cat: Cat): Promise<void> {
  await sql`
    INSERT INTO ${tbl("categories")} (id, type, name)
    VALUES (${cat.id}, ${cat.type}, ${cat.name})
    ON CONFLICT (id) DO UPDATE SET
      type = EXCLUDED.type,
      name = EXCLUDED.name;
  `;
}

/**
 * Delete category from Neon
 */
export async function deleteCategoryFromNeon(id: number): Promise<void> {
  await sql`DELETE FROM ${tbl("categories")} WHERE id = ${id}`;
}

/**
 * Fetch SC rates from Neon
 */
export async function fetchScRatesFromNeon(): Promise<ScRate[]> {
  const rows = await sql`SELECT id, category, sub_category, rate_per_100 FROM ${tbl("sc_rates")} ORDER BY id ASC`;
  return rows.map((r: any) => ({
    id: Number(r.id),
    category: r.category,
    subCategory: r.sub_category,
    ratePer100: String(r.rate_per_100),
  }));
}

/**
 * Upsert SC rate in Neon
 */
export async function upsertScRateInNeon(r: ScRate): Promise<void> {
  await sql`
    INSERT INTO ${tbl("sc_rates")} (id, category, sub_category, rate_per_100)
    VALUES (${r.id}, ${r.category}, ${r.subCategory}, ${r.ratePer100})
    ON CONFLICT (id) DO UPDATE SET
      category = EXCLUDED.category,
      sub_category = EXCLUDED.sub_category,
      rate_per_100 = EXCLUDED.rate_per_100;
  `;
}

/**
 * Delete SC rate from Neon
 */
export async function deleteScRateFromNeon(id: number): Promise<void> {
  await sql`DELETE FROM ${tbl("sc_rates")} WHERE id = ${id}`;
}

/**
 * Fetch SubCategoryRules from Neon
 */
export async function fetchSubCategoryRulesFromNeon(): Promise<SubCategoryRule[]> {
  const rows = await sql`SELECT id, sub_category, installments, mode, categories FROM ${tbl("subcat_rules")} ORDER BY id ASC`;
  return rows.map((r: any) => ({
    id: Number(r.id),
    subCategory: r.sub_category,
    installments: Number(r.installments) || 45,
    mode: (r.mode as any) || "all",
    categories: Array.isArray(r.categories) ? r.categories : [],
  }));
}

/**
 * Upsert SubCategoryRule in Neon
 */
export async function upsertSubCategoryRuleInNeon(rule: SubCategoryRule): Promise<void> {
  const ruleId = rule.id || Date.now();
  await sql`
    INSERT INTO ${tbl("subcat_rules")} (id, sub_category, installments, mode, categories)
    VALUES (${ruleId}, ${rule.subCategory}, ${rule.installments}, ${rule.mode}, ${JSON.stringify(rule.categories || [])})
    ON CONFLICT (id) DO UPDATE SET
      sub_category = EXCLUDED.sub_category,
      installments = EXCLUDED.installments,
      mode = EXCLUDED.mode,
      categories = EXCLUDED.categories;
  `;
}

/**
 * Delete SubCategoryRule from Neon
 */
export async function deleteSubCategoryRuleFromNeon(id: number): Promise<void> {
  await sql`DELETE FROM ${tbl("subcat_rules")} WHERE id = ${id}`;
}

/**
 * Fetch KallyanRule from Neon
 */
export async function fetchKallyanRuleFromNeon(): Promise<KallyanRule | null> {
  const rows = await sql`SELECT rule_data FROM ${tbl("kallyan_rule")} WHERE id = 'default' LIMIT 1`;
  if (rows.length > 0 && rows[0].rule_data) {
    return rows[0].rule_data as KallyanRule;
  }
  return null;
}

/**
 * Save KallyanRule to Neon
 */
export async function upsertKallyanRuleInNeon(rule: KallyanRule): Promise<void> {
  await sql`
    INSERT INTO ${tbl("kallyan_rule")} (id, rule_data, updated_at)
    VALUES ('default', ${JSON.stringify(rule)}, NOW())
    ON CONFLICT (id) DO UPDATE SET
      rule_data = EXCLUDED.rule_data,
      updated_at = NOW();
  `;
}

/**
 * Fetch RebateRates from Neon
 */
export async function fetchRebateRatesFromNeon(): Promise<RebateRateItem[]> {
  const rows = await sql`
    SELECT id, product, duration, kisti, rate
    FROM ${tbl("rebate_rates")}
    ORDER BY product ASC, duration ASC, kisti ASC
  `;
  return rows.map((r: any) => ({
    id: Number(r.id),
    product: r.product,
    duration: r.duration,
    kisti: Number(r.kisti),
    helper: `${r.product}|${r.duration}|${r.kisti}`,
    rate: String(r.rate ?? "0"),
  }));
}

/**
 * Ensure day_closures table exists in Neon
 */
export async function ensureDayClosuresTable(): Promise<void> {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS ${tbl("day_closures")} (
        id SERIAL PRIMARY KEY,
        close_date VARCHAR(20) UNIQUE NOT NULL,
        opening_cash NUMERIC DEFAULT 0,
        opening_bank NUMERIC DEFAULT 0,
        closing_cash NUMERIC DEFAULT 0,
        closing_bank NUMERIC DEFAULT 0,
        total_receive NUMERIC DEFAULT 0,
        total_payment NUMERIC DEFAULT 0,
        denomination JSONB,
        status VARCHAR(20) DEFAULT 'closed',
        closed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        closed_by VARCHAR(100),
        notes TEXT
      );
    `;
  } catch (e) {
    console.warn("ensureDayClosuresTable warning:", e);
  }
}

/**
 * Fetch all day closures from Neon
 */
export async function fetchDayClosuresFromNeon(): Promise<DayClosure[]> {
  try {
    await ensureDayClosuresTable();
    const rows = await sql`
      SELECT id, close_date, opening_cash, opening_bank, closing_cash, closing_bank,
             total_receive, total_payment, denomination, status, closed_at, closed_by, notes
      FROM ${tbl("day_closures")}
      ORDER BY close_date DESC
    `;
    return rows.map((r: any) => ({
      id: Number(r.id),
      closeDate: r.close_date,
      openingCash: Number(r.opening_cash) || 0,
      openingBank: Number(r.opening_bank) || 0,
      closingCash: Number(r.closing_cash) || 0,
      closingBank: Number(r.closing_bank) || 0,
      totalReceive: Number(r.total_receive) || 0,
      totalPayment: Number(r.total_payment) || 0,
      denomination: r.denomination || null,
      status: "closed",
      closedAt: r.closed_at ? new Date(r.closed_at).toISOString() : new Date().toISOString(),
      closedBy: r.closed_by || "Cashier",
      notes: r.notes || "",
    }));
  } catch (e) {
    console.warn("fetchDayClosuresFromNeon error:", e);
    return [];
  }
}

/**
 * Upsert day closure in Neon
 */
export async function upsertDayClosureInNeon(c: DayClosure): Promise<void> {
  try {
    await ensureDayClosuresTable();
    await sql`
      INSERT INTO ${tbl("day_closures")} (close_date, opening_cash, opening_bank, closing_cash, closing_bank, total_receive, total_payment, denomination, status, closed_at, closed_by, notes)
      VALUES (
        ${c.closeDate},
        ${c.openingCash},
        ${c.openingBank},
        ${c.closingCash},
        ${c.closingBank},
        ${c.totalReceive},
        ${c.totalPayment},
        ${c.denomination ? JSON.stringify(c.denomination) : null}::jsonb,
        'closed',
        ${c.closedAt},
        ${c.closedBy || "Cashier"},
        ${c.notes || ""}
      )
      ON CONFLICT (close_date)
      DO UPDATE SET
        opening_cash = EXCLUDED.opening_cash,
        opening_bank = EXCLUDED.opening_bank,
        closing_cash = EXCLUDED.closing_cash,
        closing_bank = EXCLUDED.closing_bank,
        total_receive = EXCLUDED.total_receive,
        total_payment = EXCLUDED.total_payment,
        denomination = EXCLUDED.denomination,
        status = 'closed',
        closed_at = EXCLUDED.closed_at,
        closed_by = EXCLUDED.closed_by,
        notes = EXCLUDED.notes
    `;
  } catch (e) {
    console.warn("upsertDayClosureInNeon error:", e);
  }
}

/**
 * Delete / Reopen day closure in Neon
 */
export async function deleteDayClosureInNeon(closeDate: string): Promise<void> {
  try {
    await ensureDayClosuresTable();
    await sql`DELETE FROM ${tbl("day_closures")} WHERE close_date = ${closeDate}`;
  } catch (e) {
    console.warn("deleteDayClosureInNeon error:", e);
  }
}

/**
 * Ensure app_settings table exists in Neon
 */
export async function ensureAppSettingsTable(): Promise<void> {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS ${tbl("app_settings")} (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `;
  } catch (e) {
    console.warn("ensureAppSettingsTable failed:", e);
  }
}

/**
 * Ensure day_opens table exists in Neon
 */
export async function ensureDayOpensTable(): Promise<void> {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS ${tbl("day_opens")} (
        id SERIAL PRIMARY KEY,
        open_date VARCHAR(20) UNIQUE NOT NULL,
        prev_close_date VARCHAR(20),
        opening_cash NUMERIC DEFAULT 0,
        opening_bank NUMERIC DEFAULT 0,
        opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        opened_by VARCHAR(100) DEFAULT 'Cashier'
      );
    `;
  } catch (e) {
    console.warn("ensureDayOpensTable warning:", e);
  }
}

/**
 * Fetch all day opens from Neon
 */
export async function fetchDayOpensFromNeon(): Promise<DayOpen[]> {
  try {
    await ensureDayOpensTable();
    const rows = await sql`
      SELECT id, open_date, prev_close_date, opening_cash, opening_bank, opened_at, opened_by
      FROM ${tbl("day_opens")}
      ORDER BY open_date DESC
    `;
    return rows.map((r: any) => ({
      id: Number(r.id),
      openDate: r.open_date,
      prevCloseDate: r.prev_close_date || null,
      openingCash: Number(r.opening_cash) || 0,
      openingBank: Number(r.opening_bank) || 0,
      openedAt: r.opened_at ? new Date(r.opened_at).toISOString() : new Date().toISOString(),
      openedBy: r.opened_by || "Cashier",
    }));
  } catch (e) {
    console.warn("fetchDayOpensFromNeon error:", e);
    return [];
  }
}

/**
 * Upsert day open in Neon
 */
export async function upsertDayOpenInNeon(o: DayOpen): Promise<void> {
  try {
    await ensureDayOpensTable();
    await sql`
      INSERT INTO ${tbl("day_opens")} (open_date, prev_close_date, opening_cash, opening_bank, opened_at, opened_by)
      VALUES (
        ${o.openDate},
        ${o.prevCloseDate || null},
        ${o.openingCash},
        ${o.openingBank},
        ${o.openedAt},
        ${o.openedBy || "Cashier"}
      )
      ON CONFLICT (open_date)
      DO UPDATE SET
        prev_close_date = EXCLUDED.prev_close_date,
        opening_cash = EXCLUDED.opening_cash,
        opening_bank = EXCLUDED.opening_bank,
        opened_at = EXCLUDED.opened_at,
        opened_by = EXCLUDED.opened_by;
    `;
  } catch (e) {
    console.warn("upsertDayOpenInNeon error:", e);
  }
}

/**
 * Fetch setting from Neon
 */
export async function fetchAppSettingFromNeon(key: string): Promise<string | null> {
  try {
    const rows = await sql`
      SELECT value FROM ${tbl("app_settings")} WHERE key = ${key} LIMIT 1
    `;
    if (rows.length > 0 && rows[0].value) {
      return String(rows[0].value);
    }
  } catch (e) {
    console.warn(`fetchAppSettingFromNeon(${key}) error:`, e);
  }
  return null;
}

/**
 * Save setting in Neon
 */
export async function upsertAppSettingInNeon(key: string, value: string): Promise<void> {
  try {
    await ensureAppSettingsTable();
    await sql`
      INSERT INTO ${tbl("app_settings")} (key, value, updated_at)
      VALUES (${key}, ${value}, NOW())
      ON CONFLICT (key) DO UPDATE SET
        value = EXCLUDED.value,
        updated_at = NOW();
    `;
  } catch (e) {
    console.warn(`upsertAppSettingInNeon(${key}) error:`, e);
  }
}


/* ══════════════════════════════════════════════════════════════
 * 🏢 অফিস-প্রতি ক্লাউড ঘর তৈরি (একবারই, নিজে থেকে)
 * ══════════════════════════════════════════════════════════════ */

/** যে টেবিলগুলো গোবরার (public) থেকে হুবহু নকল করে নতুন অফিসের জন্য বানানো হবে */
const CORE_TABLES = [
  "transactions",
  "staff_reports",
  "categories",
  "sc_rates",
  "subcat_rules",
  "kallyan_rule",
  "rebate_rates",
  "day_closures",
  "day_opens",
  "app_settings",
  "site_content",
];

/**
 * v1.4.47: কী-এর ভার্সন বাড়ানো হয়েছে — check_entries টেবিলে নতুন `returned` কলামের
 * ALTER সব ডিভাইসের স্কিমাতে একবার করে চালানোর জন্য। সব স্টেটমেন্ট idempotent
 * (IF NOT EXISTS), তাই পুরনো ডিভাইসেও আবার চালানো নিরাপদ।
 */
const SCHEMA_FLAG_KEY = "gobra_neon_schema_ready_v4";

/** প্রতিটি DDL আলাদা স্টেটমেন্ট (এক রিকোয়েস্টে একাধিক কমান্ড Postgres নেয় না) */
const checkEntriesDdl = (sch: string): string[] => [
  `CREATE TABLE IF NOT EXISTS "${sch}".check_entries (
    id BIGINT PRIMARY KEY,
    check_date VARCHAR(20) NOT NULL,
    member_code TEXT,
    member_name TEXT,
    centre_code TEXT,
    centre_name TEXT,
    bank_name TEXT,
    check_no TEXT,
    disbursse TEXT,
    project TEXT,
    micr BOOLEAN DEFAULT FALSE,
    found_in_db BOOLEAN DEFAULT FALSE,
    returned BOOLEAN DEFAULT FALSE,
    extra_banks TEXT,
    reissued_to TEXT,
    reissued_from TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )`,
  `ALTER TABLE "${sch}".check_entries ADD COLUMN IF NOT EXISTS returned BOOLEAN DEFAULT FALSE`,
  `ALTER TABLE "${sch}".check_entries ADD COLUMN IF NOT EXISTS extra_banks TEXT`,
  `ALTER TABLE "${sch}".check_entries ADD COLUMN IF NOT EXISTS reissued_to TEXT`,
  `ALTER TABLE "${sch}".check_entries ADD COLUMN IF NOT EXISTS reissued_from TEXT`,
  `CREATE INDEX IF NOT EXISTS check_entries_date_idx ON "${sch}".check_entries (check_date)`,
  `CREATE INDEX IF NOT EXISTS check_entries_member_idx ON "${sch}".check_entries (member_code)`,
];

const membersDdl = (sch: string): string[] => [
  `CREATE TABLE IF NOT EXISTS "${sch}".members (
    member_code TEXT PRIMARY KEY,
    member_name TEXT,
    centre_code TEXT,
    centre_name TEXT,
    bank_name TEXT,
    check_no TEXT,
    source TEXT DEFAULT 'db',
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )`,
  `CREATE INDEX IF NOT EXISTS members_centre_idx ON "${sch}".members (centre_code)`,
];

let schemaInFlight: Promise<void> | null = null;

/**
 * বর্তমান অফিসের ক্লাউড স্কিমা + টেবিল নিশ্চিত করে।
 * গোবরার জন্য শুধু নতুন টেবিল দুটি (check_entries, members) তৈরি হয় —
 * বাকি সব আগের জায়গাতেই অপরিবর্তিত থাকে।
 */
export async function ensureBranchSchema(force = false): Promise<void> {
  const sch = branchSchema();
  try {
    if (!force && localStorage.getItem(SCHEMA_FLAG_KEY) === sch) return;
  } catch {}

  if (!schemaInFlight) {
    schemaInFlight = (async () => {
      const stmts: string[] = [];
      if (sch !== "public") {
        stmts.push(`CREATE SCHEMA IF NOT EXISTS "${sch}"`);
        for (const t of CORE_TABLES) {
          stmts.push(`CREATE TABLE IF NOT EXISTS "${sch}"."${t}" (LIKE "public"."${t}" INCLUDING ALL)`);
        }
      }
      stmts.push(...checkEntriesDdl(sch), ...membersDdl(sch));
      // এক HTTP রিকোয়েস্টে সব DDL (ট্রানজেকশন অ্যারে)
      await (sql as any).transaction(stmts.map((q) => (sql as any).query(q)));
      try {
        localStorage.setItem(SCHEMA_FLAG_KEY, sch);
      } catch {}
    })().finally(() => {
      schemaInFlight = null;
    });
  }
  return schemaInFlight;
}

/* ══════════════════════════════════════════════════════════════
 * ✅ চেক এন্ট্রি — ক্লাউড সংরক্ষণ (প্রতি অফিসে আলাদা)
 * ══════════════════════════════════════════════════════════════ */

/** v1.4.48: extra_banks JSON টেক্সট → ব্যাংক/চেক নম্বরের জোড়ার তালিকা (নষ্ট/খালি মান নিরাপদে উপেক্ষা) */
const parseExtraBanks = (raw: any): { bankName: string; checkNo: string }[] | undefined => {
  if (!raw) return undefined;
  try {
    const arr = JSON.parse(String(raw));
    if (!Array.isArray(arr)) return undefined;
    const list = arr
      .map((b: any) => ({ bankName: String(b?.bankName || ""), checkNo: String(b?.checkNo || "") }))
      .filter((b) => b.bankName || b.checkNo);
    return list.length > 0 ? list : undefined;
  } catch {
    return undefined;
  }
};

/** v1.4.49: reissued_to / reissued_from JSON → রি-ইস্যু লিংক অবজেক্ট (নষ্ট/খালি মান নিরাপদে উপেক্ষা) */
const parseReissueLink = (raw: any): any => {
  if (!raw) return undefined;
  try {
    const o = JSON.parse(String(raw));
    if (!o || typeof o !== "object" || !Number.isFinite(Number(o?.id))) return undefined;
    const link: any = { id: Number(o.id) };
    if (o.date != null) link.date = String(o.date);
    if (o.checkNo != null) link.checkNo = String(o.checkNo);
    if (o.checkDate != null) link.checkDate = String(o.checkDate);
    return link;
  } catch {
    return undefined;
  }
};

export async function fetchCheckEntriesFromNeon(): Promise<CheckEntry[]> {
  try {
    await ensureBranchSchema();
    const rows: any = await sql`
      SELECT id, check_date, member_code, member_name, centre_code, centre_name,
             bank_name, check_no, disbursse, project, micr, found_in_db, returned, extra_banks,
             reissued_to, reissued_from, created_at
      FROM ${tbl("check_entries")}
      ORDER BY check_date DESC, id DESC
    `;
    return (rows as any[]).map((r: any) => ({
      id: Number(r.id),
      checkDate: r.check_date,
      memberCode: r.member_code || "",
      memberName: r.member_name || "",
      centreCode: r.centre_code || "",
      centreName: r.centre_name || "",
      bankName: r.bank_name || "",
      checkNo: r.check_no || "",
      disbursse: r.disbursse || "",
      project: r.project || "",
      micr: r.micr === true,
      foundInDb: r.found_in_db === true,
      returned: r.returned === true,
      extraBanks: parseExtraBanks(r.extra_banks),
      reissuedTo: parseReissueLink(r.reissued_to),
      reissuedFrom: parseReissueLink(r.reissued_from),
      createdAt: r.created_at ? new Date(r.created_at).toISOString() : undefined,
    }));
  } catch (e) {
    console.warn("fetchCheckEntriesFromNeon error:", e);
    return [];
  }
}

export async function upsertCheckEntryInNeon(e: CheckEntry): Promise<void> {
  const id = Number(e?.id);
  if (!id || isNaN(id)) return;
  await ensureBranchSchema();
  await sql`
    INSERT INTO ${tbl("check_entries")}
      (id, check_date, member_code, member_name, centre_code, centre_name,
       bank_name, check_no, disbursse, project, micr, found_in_db, returned, extra_banks,
       reissued_to, reissued_from, created_at, updated_at)
    VALUES (
      ${id}, ${e.checkDate || ""}, ${e.memberCode || ""}, ${e.memberName || ""},
      ${e.centreCode || ""}, ${e.centreName || ""}, ${e.bankName || ""}, ${e.checkNo || ""},
      ${e.disbursse || ""}, ${e.project || ""}, ${e.micr === true}, ${e.foundInDb === true}, ${e.returned === true},
      ${JSON.stringify(e.extraBanks || [])},
      ${e.reissuedTo ? JSON.stringify(e.reissuedTo) : ""}, ${e.reissuedFrom ? JSON.stringify(e.reissuedFrom) : ""},
      ${e.createdAt ? new Date(e.createdAt).toISOString() : new Date().toISOString()}, NOW()
    )
    ON CONFLICT (id) DO UPDATE SET
      check_date = EXCLUDED.check_date,
      member_code = EXCLUDED.member_code,
      member_name = EXCLUDED.member_name,
      centre_code = EXCLUDED.centre_code,
      centre_name = EXCLUDED.centre_name,
      bank_name = EXCLUDED.bank_name,
      check_no = EXCLUDED.check_no,
      disbursse = EXCLUDED.disbursse,
      project = EXCLUDED.project,
      micr = EXCLUDED.micr,
      found_in_db = EXCLUDED.found_in_db,
      returned = EXCLUDED.returned,
      extra_banks = EXCLUDED.extra_banks,
      reissued_to = EXCLUDED.reissued_to,
      reissued_from = EXCLUDED.reissued_from,
      updated_at = NOW();
  `;
}

export async function deleteCheckEntryFromNeon(id: number | string): Promise<void> {
  const numId = Number(id);
  if (!numId || isNaN(numId)) return;
  try {
    await ensureBranchSchema();
    await sql`DELETE FROM ${tbl("check_entries")} WHERE id = ${numId}`;
  } catch (e) {
    console.warn("deleteCheckEntryFromNeon error:", e);
  }
}

/* ══════════════════════════════════════════════════════════════
 * 🗄️ মেম্বার ডাটাবেজ (চেক লুকআপ ডাটাবেজ) — ক্লাউড সংরক্ষণ
 * ══════════════════════════════════════════════════════════════ */

export async function fetchMembersFromNeon(): Promise<Member[]> {
  try {
    await ensureBranchSchema();
    const rows: any = await sql`
      SELECT member_code, member_name, centre_code, centre_name, bank_name, check_no, source, updated_at
      FROM ${tbl("members")}
      ORDER BY member_code ASC
    `;
    return (rows as any[]).map((r: any) => ({
      memberCode: String(r.member_code || ""),
      memberName: r.member_name || "",
      centreCode: r.centre_code || "",
      centreName: r.centre_name || "",
      bankName: r.bank_name || undefined,
      checkNo: r.check_no || undefined,
      source: r.source === "auto" ? ("auto" as const) : ("db" as const),
      updatedAt: r.updated_at ? new Date(r.updated_at).toISOString() : undefined,
    }));
  } catch (e) {
    console.warn("fetchMembersFromNeon error:", e);
    return [];
  }
}

/**
 * মেম্বার ডাটাবেজ ব্যাচে আপলোড (এক রিকোয়েস্টে অনেক সারি — দ্রুত ও সাশ্রয়ী)।
 * @returns ক্লাউডে লেখা সারির সংখ্যা
 */
export async function upsertMembersBulkInNeon(list: Member[], batchSize = 400): Promise<number> {
  const clean = (Array.isArray(list) ? list : []).filter((m) => m && String(m.memberCode || "").trim());
  if (clean.length === 0) return 0;
  await ensureBranchSchema();

  let written = 0;
  for (let i = 0; i < clean.length; i += batchSize) {
    const chunk = clean.slice(i, i + batchSize);
    const values: string[] = [];
    const params: any[] = [];
    chunk.forEach((m, j) => {
      const b = j * 7;
      values.push(`($${b + 1},$${b + 2},$${b + 3},$${b + 4},$${b + 5},$${b + 6},$${b + 7})`);
      params.push(
        String(m.memberCode).trim(),
        m.memberName || "",
        m.centreCode || "",
        m.centreName || "",
        m.bankName || "",
        m.checkNo || "",
        m.source === "auto" ? "auto" : "db"
      );
    });
    await sql.query(
      `INSERT INTO ${T("members")}
         (member_code, member_name, centre_code, centre_name, bank_name, check_no, source)
       VALUES ${values.join(",")}
       ON CONFLICT (member_code) DO UPDATE SET
         member_name = EXCLUDED.member_name,
         centre_code = EXCLUDED.centre_code,
         centre_name = EXCLUDED.centre_name,
         bank_name = EXCLUDED.bank_name,
         check_no = EXCLUDED.check_no,
         source = EXCLUDED.source,
         updated_at = NOW()`,
      params
    );
    written += chunk.length;
  }
  return written;
}

export async function deleteMemberFromNeon(memberCode: string): Promise<void> {
  const code = String(memberCode || "").trim();
  if (!code) return;
  try {
    await ensureBranchSchema();
    await sql`DELETE FROM ${tbl("members")} WHERE member_code = ${code}`;
  } catch (e) {
    console.warn("deleteMemberFromNeon error:", e);
  }
}

/** পুরো মেম্বার ডাটাবেজ ক্লাউড থেকে মুছে ফেলা (লোকালে মুছলে ক্লাউডেও যেন না থাকে) */
export async function clearMembersInNeon(): Promise<void> {
  try {
    await ensureBranchSchema();
    await sql`DELETE FROM ${tbl("members")}`;
  } catch (e) {
    console.warn("clearMembersInNeon error:", e);
  }
}

/** বর্তমান অফিসের ক্লাউড ঘরে কী কী আছে তার সংক্ষিপ্ত হিসাব (স্ট্যাটাস মডালের জন্য) */
export async function fetchNeonStats(): Promise<{ schema: string; rows: Record<string, number> }> {
  const sch = branchSchema();
  const out: Record<string, number> = {};
  try {
    await ensureBranchSchema();
    const tables = ["transactions", "staff_reports", "categories", "day_opens", "day_closures", "rebate_rates", "check_entries", "members"];
    for (const t of tables) {
      try {
        const r: any = await sql.query(`SELECT count(*)::int AS n FROM ${T(t)}`);
        out[t] = Number(r?.[0]?.n || 0);
      } catch {
        out[t] = -1;
      }
    }
  } catch (e) {
    console.warn("fetchNeonStats error:", e);
  }
  return { schema: sch, rows: out };
}

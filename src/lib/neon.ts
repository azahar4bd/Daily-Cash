import { neon } from "@neondatabase/serverless";
import type {
  Tx,
  StaffReportItem,
  Cat,
  ScRate,
  SubCategoryRule,
  KallyanRule,
  RebateRateItem,
  DayClosure,
} from "@/types";

export const NEON_DATABASE_URL =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_NEON_DATABASE_URL) ||
  "postgresql://neondb_owner:npg_ZWT8gcO4xuym@ep-aged-night-b3r0h0bv.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

// Create Neon serverless HTTP sql client
export const sql = neon(NEON_DATABASE_URL);

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
    FROM transactions
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
    INSERT INTO transactions (id, type, category, sub_category, amount, service_charge, description, denomination, other_amount, tx_date)
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
export async function deleteTxFromNeon(id: number): Promise<void> {
  await sql`DELETE FROM transactions WHERE id = ${id}`;
}

/**
 * Fetch all staff reports from Neon
 */
export async function fetchStaffReportsFromNeon(): Promise<StaffReportItem[]> {
  const rows = await sql`
    SELECT id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return, created_at
    FROM staff_reports
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
    INSERT INTO staff_reports (id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return)
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
export async function deleteStaffReportFromNeon(id: number): Promise<void> {
  await sql`DELETE FROM staff_reports WHERE id = ${id}`;
}

/**
 * Fetch categories from Neon
 */
export async function fetchCategoriesFromNeon(): Promise<Cat[]> {
  const rows = await sql`SELECT id, type, name FROM categories ORDER BY id ASC`;
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
    INSERT INTO categories (id, type, name)
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
  await sql`DELETE FROM categories WHERE id = ${id}`;
}

/**
 * Fetch SC rates from Neon
 */
export async function fetchScRatesFromNeon(): Promise<ScRate[]> {
  const rows = await sql`SELECT id, category, sub_category, rate_per_100 FROM sc_rates ORDER BY id ASC`;
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
    INSERT INTO sc_rates (id, category, sub_category, rate_per_100)
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
  await sql`DELETE FROM sc_rates WHERE id = ${id}`;
}

/**
 * Fetch SubCategoryRules from Neon
 */
export async function fetchSubCategoryRulesFromNeon(): Promise<SubCategoryRule[]> {
  const rows = await sql`SELECT id, sub_category, installments, mode, categories FROM subcat_rules ORDER BY id ASC`;
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
    INSERT INTO subcat_rules (id, sub_category, installments, mode, categories)
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
  await sql`DELETE FROM subcat_rules WHERE id = ${id}`;
}

/**
 * Fetch KallyanRule from Neon
 */
export async function fetchKallyanRuleFromNeon(): Promise<KallyanRule | null> {
  const rows = await sql`SELECT rule_data FROM kallyan_rule WHERE id = 'default' LIMIT 1`;
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
    INSERT INTO kallyan_rule (id, rule_data, updated_at)
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
    FROM rebate_rates
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
      CREATE TABLE IF NOT EXISTS day_closures (
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
      FROM day_closures
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
      INSERT INTO day_closures (close_date, opening_cash, opening_bank, closing_cash, closing_bank, total_receive, total_payment, denomination, status, closed_at, closed_by, notes)
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
    await sql`DELETE FROM day_closures WHERE close_date = ${closeDate}`;
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
      CREATE TABLE IF NOT EXISTS app_settings (
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
 * Fetch setting from Neon
 */
export async function fetchAppSettingFromNeon(key: string): Promise<string | null> {
  try {
    const rows = await sql`
      SELECT value FROM app_settings WHERE key = ${key} LIMIT 1
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
      INSERT INTO app_settings (key, value, updated_at)
      VALUES (${key}, ${value}, NOW())
      ON CONFLICT (key) DO UPDATE SET
        value = EXCLUDED.value,
        updated_at = NOW();
    `;
  } catch (e) {
    console.warn(`upsertAppSettingInNeon(${key}) error:`, e);
  }
}


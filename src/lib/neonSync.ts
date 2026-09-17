import {
  fetchTransactionsFromNeon,
  upsertTxInNeon,
  deleteTxFromNeon,
  fetchStaffReportsFromNeon,
  upsertStaffReportInNeon,
  deleteStaffReportFromNeon,
  fetchCategoriesFromNeon,
  upsertCategoryInNeon,
  deleteCategoryFromNeon,
  fetchScRatesFromNeon,
  upsertScRateInNeon,
  deleteScRateFromNeon,
  fetchSubCategoryRulesFromNeon,
  upsertSubCategoryRuleInNeon,
  deleteSubCategoryRuleFromNeon,
  fetchKallyanRuleFromNeon,
  upsertKallyanRuleInNeon,
  fetchRebateRatesFromNeon,
  updateSyncState,
  getStoredSyncState,
} from "./neon";
import type {
  Tx,
  StaffReportItem,
  Cat,
  ScRate,
  SubCategoryRule,
  KallyanRule,
  RebateRateItem,
} from "@/types";

const TX_KEY = "gobra_local_transactions";
const SR_KEY = "gobra_local_staff_reports";
const CAT_KEY = "gobra_local_categories";
const SC_KEY = "gobra_local_sc_rates";
const SUBCAT_RULE_KEY = "gobra_local_subcat_rules";
const REBATE_KEY = "gobra_local_rebate_rates";
const KALLYAN_RULE_KEY = "gobra_local_kallyan_rule";
const QUEUE_KEY = "gobra_neon_sync_queue";

interface SyncQueueItem {
  type: "tx" | "tx_del" | "sr" | "sr_del" | "cat" | "cat_del" | "sc" | "sc_del" | "subcat" | "subcat_del" | "kallyan";
  payload: any;
}

function getQueue(): SyncQueueItem[] {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveQueue(q: SyncQueueItem[]): void {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
    updateSyncState({ pendingCount: q.length });
  } catch {}
}

export function enqueueNeonAction(action: SyncQueueItem): void {
  const q = getQueue();
  q.push(action);
  saveQueue(q);
  // Attempt to flush queue immediately
  flushNeonQueue().catch(() => {});
}

export async function flushNeonQueue(): Promise<void> {
  const q = getQueue();
  if (q.length === 0) return;

  const remaining: SyncQueueItem[] = [];
  for (const item of q) {
    try {
      if (item.type === "tx") {
        await upsertTxInNeon(item.payload);
      } else if (item.type === "tx_del") {
        await deleteTxFromNeon(item.payload);
      } else if (item.type === "sr") {
        await upsertStaffReportInNeon(item.payload);
      } else if (item.type === "sr_del") {
        await deleteStaffReportFromNeon(item.payload);
      } else if (item.type === "cat") {
        await upsertCategoryInNeon(item.payload);
      } else if (item.type === "cat_del") {
        await deleteCategoryFromNeon(item.payload);
      } else if (item.type === "sc") {
        await upsertScRateInNeon(item.payload);
      } else if (item.type === "sc_del") {
        await deleteScRateFromNeon(item.payload);
      } else if (item.type === "subcat") {
        await upsertSubCategoryRuleInNeon(item.payload);
      } else if (item.type === "subcat_del") {
        await deleteSubCategoryRuleFromNeon(item.payload);
      } else if (item.type === "kallyan") {
        await upsertKallyanRuleInNeon(item.payload);
      }
    } catch (e) {
      console.warn("Failed to process queue item, keeping in retry queue:", item, e);
      remaining.push(item);
    }
  }
  saveQueue(remaining);
}

/**
 * Perform a full bidirectional sync with Neon database:
 * 1. Flushes pending local queue.
 * 2. Fetches latest data from Neon.
 * 3. If local has records not yet in Neon (e.g. added offline or before Neon was connected), pushes them to Neon.
 * 4. Updates local cache and notifies UI.
 */
export async function syncAllWithNeon(): Promise<{ success: boolean; message: string }> {
  updateSyncState({ isSyncing: true, lastError: null });

  try {
    // 1. Flush any pending queue
    await flushNeonQueue();

    // 2. Fetch from Neon
    const [neonTxs, neonSrs, neonCats, neonScRates, neonSubcatRules, neonKallyan, neonRebates] =
      await Promise.all([
        fetchTransactionsFromNeon(),
        fetchStaffReportsFromNeon(),
        fetchCategoriesFromNeon(),
        fetchScRatesFromNeon(),
        fetchSubCategoryRulesFromNeon(),
        fetchKallyanRuleFromNeon(),
        fetchRebateRatesFromNeon(),
      ]);

    // 3. Check for local items that need uploading to Neon
    let localTxs: Tx[] = [];
    let localSrs: StaffReportItem[] = [];
    try {
      const rawTx = localStorage.getItem(TX_KEY);
      if (rawTx) localTxs = JSON.parse(rawTx);
      const rawSr = localStorage.getItem(SR_KEY);
      if (rawSr) localSrs = JSON.parse(rawSr);
    } catch {}

    const neonTxMap = new Map(neonTxs.map((t) => [t.id, t]));
    const localTxsToPush = localTxs.filter((t) => !neonTxMap.has(t.id));

    if (localTxsToPush.length > 0) {
      for (const t of localTxsToPush) {
        await upsertTxInNeon(t);
        neonTxs.unshift(t);
      }
    }

    const neonSrMap = new Map(neonSrs.map((s) => [s.id, s]));
    const localSrsToPush = localSrs.filter((s) => !neonSrMap.has(s.id));

    if (localSrsToPush.length > 0) {
      for (const s of localSrsToPush) {
        await upsertStaffReportInNeon(s);
        neonSrs.unshift(s);
      }
    }

    // 4. Update local storage with the cloud truth
    localStorage.setItem(TX_KEY, JSON.stringify(neonTxs));
    localStorage.setItem(SR_KEY, JSON.stringify(neonSrs));

    if (neonCats.length > 0) {
      localStorage.setItem(CAT_KEY, JSON.stringify(neonCats));
    }
    if (neonScRates.length > 0) {
      localStorage.setItem(SC_KEY, JSON.stringify(neonScRates));
    }
    if (neonSubcatRules.length > 0) {
      localStorage.setItem(SUBCAT_RULE_KEY, JSON.stringify(neonSubcatRules));
    }
    if (neonKallyan) {
      localStorage.setItem(KALLYAN_RULE_KEY, JSON.stringify(neonKallyan));
    }
    if (neonRebates.length > 0) {
      localStorage.setItem(REBATE_KEY, JSON.stringify(neonRebates));
    }

    const nowStr = new Date().toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    updateSyncState({
      connected: true,
      isSyncing: false,
      lastSyncTime: nowStr,
      lastError: null,
      pendingCount: getQueue().length,
    });

    // Notify UI components
    window.dispatchEvent(new Event("tx-changed"));
    window.dispatchEvent(new CustomEvent("rebate-rates-changed", { detail: neonRebates }));
    window.dispatchEvent(new CustomEvent("kallyan-rule-changed", { detail: neonKallyan }));

    return {
      success: true,
      message: `Neon Database-এ সফলভাবে সিঙ্ক সম্পন্ন! (${neonTxs.length} Transactions, ${neonSrs.length} Reports)`,
    };
  } catch (err: any) {
    console.error("Neon sync failed:", err);
    updateSyncState({
      connected: false,
      isSyncing: false,
      lastError: err.message || "Failed to connect to Neon",
      pendingCount: getQueue().length,
    });
    return {
      success: false,
      message: `সিঙ্ক ব্যর্থ: ${err.message || "সার্ভার সংযোগ সমস্যা"}`,
    };
  }
}

let syncInitialized = false;

/**
 * Initialize Neon synchronization:
 * - Syncs on boot.
 * - Syncs on reconnect (online).
 * - Syncs on tab visibility (focus).
 * - Syncs periodically every 45 seconds.
 */
export function initNeonSync(): void {
  if (syncInitialized) return;
  syncInitialized = true;

  // Initial sync with small delay so app renders first
  setTimeout(() => {
    syncAllWithNeon().catch(() => {});
  }, 100);

  // Online listener
  window.addEventListener("online", () => {
    syncAllWithNeon().catch(() => {});
  });

  // Visibility listener
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      syncAllWithNeon().catch(() => {});
    }
  });

  // Periodic background sync every 45 seconds
  setInterval(() => {
    syncAllWithNeon().catch(() => {});
  }, 45000);
}

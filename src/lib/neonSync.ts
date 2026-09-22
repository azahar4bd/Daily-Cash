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
  fetchDayClosuresFromNeon,
  upsertDayClosureInNeon,
  deleteDayClosureInNeon,
  fetchDayOpensFromNeon,
  upsertDayOpenInNeon,
  fetchAppSettingFromNeon,
  upsertAppSettingInNeon,
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
  DayClosure,
  DayOpen,
} from "@/types";

import { isDefaultBranch } from "./branchScope";

const TX_KEY = "gobra_local_transactions";
const SR_KEY = "gobra_local_staff_reports";
const CAT_KEY = "gobra_local_categories";
const SC_KEY = "gobra_local_sc_rates";
const SUBCAT_RULE_KEY = "gobra_local_subcat_rules";
const REBATE_KEY = "gobra_local_rebate_rates";
const KALLYAN_RULE_KEY = "gobra_local_kallyan_rule";
const DAY_CLOSURES_KEY = "gobra_local_day_closures";
const DAY_OPENS_KEY = "gobra_local_day_opens";
const G_SHEET_KEY = "gobra_google_sheet_url";
const QUEUE_KEY = "gobra_neon_sync_queue";

interface SyncQueueItem {
  type: "tx" | "tx_del" | "sr" | "sr_del" | "cat" | "cat_del" | "sc" | "sc_del" | "subcat" | "subcat_del" | "kallyan" | "day_close" | "day_reopen" | "day_open" | "setting";
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
  // 🏢 অন্য শাখার হিসাব ক্লাউড ডাটাবেজে পাঠানো হবে না (গোবরার ডেটার সাথে মিশে যেত)
  if (!isDefaultBranch()) return;
  const q = getQueue();
  q.push(action);
  saveQueue(q);
  // Attempt to flush queue immediately
  flushNeonQueue().catch(() => {});
}

export async function flushNeonQueue(): Promise<void> {
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    return;
  }
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
      } else if (item.type === "day_close") {
        await upsertDayClosureInNeon(item.payload);
      } else if (item.type === "day_reopen") {
        await deleteDayClosureInNeon(item.payload);
      } else if (item.type === "day_open") {
        await upsertDayOpenInNeon(item.payload);
      } else if (item.type === "setting") {
        await upsertAppSettingInNeon(item.payload.key, item.payload.value);
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
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    updateSyncState({
      connected: false,
      isSyncing: false,
      pendingCount: getQueue().length,
    });
    return {
      success: false,
      message: "বর্তমানে ডিভাইসটি অফলাইনে রয়েছে। ডাটা লোকাল মেমরিতে জমা থাকছে।",
    };
  }

  updateSyncState({ isSyncing: true, lastError: null });

  try {
    // 1. Flush any pending queue
    await flushNeonQueue();

    // 2. Fetch from Neon
    const [neonTxs, neonSrs, neonCats, neonScRates, neonSubcatRules, neonKallyan, neonRebates, neonDayClosures, neonDayOpens] =
      await Promise.all([
        fetchTransactionsFromNeon(),
        fetchStaffReportsFromNeon(),
        fetchCategoriesFromNeon(),
        fetchScRatesFromNeon(),
        fetchSubCategoryRulesFromNeon(),
        fetchKallyanRuleFromNeon(),
        fetchRebateRatesFromNeon(),
        fetchDayClosuresFromNeon(),
        fetchDayOpensFromNeon(),
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

    // Only push items that are in the pending queue to avoid resurrecting deleted items
    const q = getQueue();
    const queueTxIds = new Set(
      q.filter((item) => item.type === "tx").map((item) => String(item.payload.id))
    );
    const neonTxIdSet = new Set(neonTxs.map((t) => String(t.id)));
    const localTxsToPush = localTxs.filter(
      (t) =>
        queueTxIds.has(String(t.id)) &&
        !neonTxIdSet.has(String(t.id)) &&
        t.txDate !== "2026-09-18"
    );

    if (localTxsToPush.length > 0) {
      for (const t of localTxsToPush) {
        await upsertTxInNeon(t);
        neonTxs.unshift(t);
      }
    }

    const queueSrIds = new Set(
      q.filter((item) => item.type === "sr").map((item) => String(item.payload.id))
    );
    const neonSrIdSet = new Set(neonSrs.map((s) => String(s.id)));
    const localSrsToPush = localSrs.filter(
      (s) => queueSrIds.has(String(s.id)) && !neonSrIdSet.has(String(s.id))
    );

    if (localSrsToPush.length > 0) {
      for (const s of localSrsToPush) {
        await upsertStaffReportInNeon(s);
        neonSrs.unshift(s);
      }
    }

    // Check for local day closures that need uploading
    let localClosures: DayClosure[] = [];
    try {
      const rawC = localStorage.getItem(DAY_CLOSURES_KEY);
      if (rawC) localClosures = JSON.parse(rawC);
    } catch {}

    const neonClosureDates = new Set(neonDayClosures.map((c) => c.closeDate));
    for (const c of localClosures) {
      if (!neonClosureDates.has(c.closeDate)) {
        await upsertDayClosureInNeon(c);
        neonDayClosures.unshift(c);
      }
    }

    // Check for local day opens that need uploading
    let localOpens: DayOpen[] = [];
    try {
      const rawO = localStorage.getItem(DAY_OPENS_KEY);
      if (rawO) localOpens = JSON.parse(rawO);
    } catch {}

    const neonOpenDates = new Set(neonDayOpens.map((o) => o.openDate));
    for (const o of localOpens) {
      if (!neonOpenDates.has(o.openDate)) {
        await upsertDayOpenInNeon(o);
        neonDayOpens.unshift(o);
      }
    }

    // 4. Update local storage with the cloud truth
    const cleanTxs = neonTxs.filter((t) => t.txDate !== "2026-09-18");
    localStorage.setItem(TX_KEY, JSON.stringify(cleanTxs));
    localStorage.setItem(SR_KEY, JSON.stringify(neonSrs));
    localStorage.setItem(DAY_CLOSURES_KEY, JSON.stringify(neonDayClosures));
    localStorage.setItem(DAY_OPENS_KEY, JSON.stringify(neonDayOpens));

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

    // Sync Google Sheet URL and other app settings
    try {
      const cloudGSheetUrl = await fetchAppSettingFromNeon("google_sheet_url");
      if (cloudGSheetUrl && cloudGSheetUrl.trim().startsWith("http")) {
        const currentLocal = localStorage.getItem(G_SHEET_KEY) || "";
        if (currentLocal !== cloudGSheetUrl) {
          localStorage.setItem(G_SHEET_KEY, cloudGSheetUrl);
          window.dispatchEvent(new CustomEvent("google-sheet-url-changed", { detail: cloudGSheetUrl }));
        }
      } else {
        const localGSheetUrl = localStorage.getItem(G_SHEET_KEY) || "";
        if (localGSheetUrl && localGSheetUrl.trim().startsWith("http")) {
          await upsertAppSettingInNeon("google_sheet_url", localGSheetUrl.trim());
        }
      }
    } catch (e) {
      console.warn("Failed to sync google_sheet_url:", e);
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
  // 🏢 শুধু ডিফল্ট (গোবরা) শাখার জন্য ক্লাউড সিংক চালু থাকবে
  if (!isDefaultBranch()) return;
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

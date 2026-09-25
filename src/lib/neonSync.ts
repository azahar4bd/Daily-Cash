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
  ensureBranchSchema,
  branchSchema,
  fetchCheckEntriesFromNeon,
  upsertCheckEntryInNeon,
  deleteCheckEntryFromNeon,
  fetchMembersFromNeon,
  upsertMembersBulkInNeon,
  deleteMemberFromNeon,
  clearMembersInNeon,
} from "./neon";
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
const CHECK_KEY = "gobra_check_entries";
const CHECK_BACKUP_KEY = "gobra_check_entries_backup";
const MEMBER_DB_KEY = "gobra_member_database";
/** মেম্বার ডাটাবেজ বদলালে ক্লাউডে পাঠানোর জন্য দাগ */
const MEMBER_DIRTY_KEY = "gobra_member_cloud_dirty";
const MEMBER_CLOUD_STATE_KEY = "gobra_member_cloud_state";

interface SyncQueueItem {
  type:
    | "tx" | "tx_del" | "sr" | "sr_del" | "cat" | "cat_del" | "sc" | "sc_del"
    | "subcat" | "subcat_del" | "kallyan" | "day_close" | "day_reopen" | "day_open" | "setting"
    | "check" | "check_del" | "member" | "member_dirty" | "member_del" | "member_clear";
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
  // 🏢 প্রতিটি অফিসের ডেটা ক্লাউডে নিজের আলাদা স্কিমাতে যায় — তাই সবার জন্য চালু
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

  // এই অফিসের ক্লাউড ঘর (স্কিমা + টেবিল) আগে নিশ্চিত করে নিই
  try {
    await ensureBranchSchema();
  } catch (e) {
    console.warn("[neon] স্কিমা তৈরি করা যায়নি — কিউ পরে আবার চেষ্টা করবে", e);
    return;
  }

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
      } else if (item.type === "check") {
        await upsertCheckEntryInNeon(item.payload);
      } else if (item.type === "check_del") {
        await deleteCheckEntryFromNeon(item.payload);
      } else if (item.type === "member") {
        await upsertMembersBulkInNeon([item.payload as Member]);
      } else if (item.type === "member_dirty") {
        const raw = localStorage.getItem(MEMBER_DB_KEY);
        const list: Member[] = raw ? JSON.parse(raw) : [];
        if (list.length > 0) {
          const n = await upsertMembersBulkInNeon(list);
          localStorage.setItem(
            MEMBER_CLOUD_STATE_KEY,
            JSON.stringify({ count: n, syncedAt: new Date().toISOString(), schema: branchSchema() })
          );
        }
        localStorage.removeItem(MEMBER_DIRTY_KEY);
      } else if (item.type === "member_del") {
        await deleteMemberFromNeon(String(item.payload));
      } else if (item.type === "member_clear") {
        await clearMembersInNeon();
        localStorage.removeItem(MEMBER_DIRTY_KEY);
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
let syncInFlight = false;

/** পূর্ণ সিংক — একসাথে একটাই চলবে (৪৫ সেকেন্ড পরপর ডাক পড়লেও ওভারল্যাপ হবে না) */
export async function syncAllWithNeon(): Promise<{ success: boolean; message: string }> {
  if (syncInFlight) {
    return { success: false, message: "সিংক চলছে… একটু পরে আবার চেষ্টা হবে।" };
  }
  syncInFlight = true;
  try {
    return await doSyncAllWithNeon();
  } finally {
    syncInFlight = false;
  }
}

async function doSyncAllWithNeon(): Promise<{ success: boolean; message: string }> {
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
    // 0. 🏢 এই অফিসের ক্লাউড স্কিমা + টেবিল নিশ্চিত করা (নতুন অফিস হলে এখানেই তৈরি হবে)
    await ensureBranchSchema();

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

    /* ── ✅ 🎉 Entertainment সিংক (v1.4.71, app_settings KV যোগে) — id-ভিত্তিক ইউনিয়ন মার্জ; নতুন যোগ হারায় না ── */
    try {
      const ENT_KEY_L = "gobra_entertainment_entries";
      const cloudRaw = await fetchAppSettingFromNeon("entertainment_entries");
      if (cloudRaw) {
        const cloudList: any[] = JSON.parse(cloudRaw);
        const localRaw = localStorage.getItem(ENT_KEY_L);
        const localList: any[] = localRaw ? JSON.parse(localRaw) : [];
        const byId = new Map<string, any>();
        for (const e of cloudList) byId.set(String(e?.id), e);
        for (const e of localList) if (!byId.has(String(e?.id))) byId.set(String(e?.id), e);
        const merged = [...byId.values()];
        const key = (x: any) => `${x.date}|${x.id}`;
        merged.sort((a: any, b: any) => String(key(b)).localeCompare(String(key(a))));
        const mergedStr = JSON.stringify(merged);
        const cloudSorted = JSON.stringify([...cloudList].sort((a: any, b: any) => String(key(b)).localeCompare(String(key(a)))));
        if (mergedStr !== (localRaw || "[]")) {
          localStorage.setItem(ENT_KEY_L, mergedStr);
          window.dispatchEvent(new Event("entertainment-changed"));
        }
        if (mergedStr !== cloudSorted) {
          enqueueNeonAction({ type: "setting", payload: { key: "entertainment_entries", value: mergedStr } });
        }
      }
    } catch (e) {
      console.warn("Entertainment sync failed:", e);
    }

    /* ── ✅ চেক এন্ট্রি সিংক (ক্লাউড ↔ লোকাল মিলন; কোনো এন্ট্রি মুছে ফেলা হবে না) ── */
    try {
      const neonChecks: CheckEntry[] = await fetchCheckEntriesFromNeon();
      const rawChk = localStorage.getItem(CHECK_KEY);
      const localChecks: CheckEntry[] = rawChk ? JSON.parse(rawChk) : [];

      const qNow = getQueue();
      const pendingIds = new Set(
        qNow.filter((i) => i.type === "check").map((i) => String((i.payload as any)?.id))
      );
      const deletedIds = new Set(
        qNow.filter((i) => i.type === "check_del").map((i) => String(i.payload))
      );

      const merged = mergeCheckEntries(localChecks, neonChecks, pendingIds, deletedIds);

      // নিরাপত্তা বলয়: স্পষ্ট ডিলিট ছাড়া লোকাল তালিকা কখনো ছোট হতে পারবে না
      if (merged.length >= localChecks.length - deletedIds.size) {
        if (checkSignature(merged) !== checkSignature(localChecks)) {
          localStorage.setItem(CHECK_KEY, JSON.stringify(merged));
          localStorage.setItem(CHECK_BACKUP_KEY, JSON.stringify(merged));
          window.dispatchEvent(
            new CustomEvent("check-changed", {
              detail: { count: merged.length, restored: merged.length - localChecks.length, cloud: true },
            })
          );
        }
      } else {
        console.warn(
          `[neon] চেক এন্ট্রি মার্জ লোকালের চেয়ে ছোট হয়ে যাচ্ছিল (${localChecks.length} → ${merged.length}) — লোকাল তালিকাই রাখা হয়েছে`
        );
      }

      // ক্লাউডে নেই এমন এন্ট্রি পাঠানো (অন্য ডিভাইসেও যেন দেখা যায়)
      const cloudIds = new Set(neonChecks.map((c) => String(c.id)));
      const missing = merged.filter((c) => !cloudIds.has(String(c.id)) && !deletedIds.has(String(c.id)));
      for (const c of missing.slice(0, 250)) {
        try {
          await upsertCheckEntryInNeon(c);
        } catch (e) {
          console.warn("[neon] চেক এন্ট্রি আপলোড ব্যর্থ", e);
          break;
        }
      }
    } catch (e) {
      console.warn("[neon] চেক এন্ট্রি সিংক ব্যর্থ:", e);
    }

    /* ── 🗄️ মেম্বার ডাটাবেজ (চেক লুকআপ ডাটাবেজ) সিংক ── */
    try {
      const rawMem = localStorage.getItem(MEMBER_DB_KEY);
      let localMembers: Member[] = [];
      try {
        localMembers = rawMem ? JSON.parse(rawMem) : [];
      } catch {}

      const cloudState = localStorage.getItem(MEMBER_CLOUD_STATE_KEY);
      const dirty = localStorage.getItem(MEMBER_DIRTY_KEY) === "1";
      if ((dirty || !cloudState) && localMembers.length > 0) {
        // লোকালে বদলেছে বা কখনো ক্লাউডে ওঠেনি → আপলোড (ব্যাচে)
        const n = await upsertMembersBulkInNeon(localMembers);
        localStorage.removeItem(MEMBER_DIRTY_KEY);
        localStorage.setItem(
          MEMBER_CLOUD_STATE_KEY,
          JSON.stringify({ count: n, syncedAt: new Date().toISOString(), schema: branchSchema() })
        );
        window.dispatchEvent(
          new CustomEvent("member-cloud-synced", { detail: { count: n, schema: branchSchema() } })
        );
      } else if (localMembers.length === 0) {
        // লোকাল খালি (নতুন ডিভাইস/নতুন ইনস্টল) → ক্লাউড থেকে ফিরিয়ে আনা
        const cloudMembers = await fetchMembersFromNeon();
        if (cloudMembers.length > 0) {
          localStorage.setItem(MEMBER_DB_KEY, JSON.stringify(cloudMembers));
          window.dispatchEvent(
            new CustomEvent("member-db-changed", { detail: { count: cloudMembers.length, cloud: true } })
          );
        }
      }
    } catch (e) {
      console.warn("[neon] মেম্বার ডাটাবেজ সিংক ব্যর্থ:", e);
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
  // 🏢 প্রতিটি অফিসের জন্য ক্লাউড সিংক চালু — প্রতি অফিসের ডেটা নিজের আলাদা স্কিমাতে যায়
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


/* ══════════════════════════════════════════════════════════════
 * ✅ চেক এন্ট্রি মার্জ — ইউনিয়ন, কখনো ধ্বংসাত্মক নয়
 *  • কিউতে পেন্ডিং থাকা এন্ট্রি → লোকাল মানই রাখা হয় (সদ্য করা এডিট হারাবে না)
 *  • ক্লাউডে আছে কিন্তু লোকালে নেই → যোগ হয় (অন্য ডিভাইসের এন্ট্রি ফিরে পাবেন)
 *  • স্পষ্ট ডিলিট (কিউতে check_del) → বাদ পড়ে
 * ══════════════════════════════════════════════════════════════ */
export function mergeCheckEntries(
  local: CheckEntry[],
  cloud: CheckEntry[],
  pendingIds: Set<string>,
  deletedIds: Set<string>
): CheckEntry[] {
  const cloudById = new Map<string, CheckEntry>();
  for (const c of Array.isArray(cloud) ? cloud : []) {
    if (c && c.id !== undefined && c.id !== null) cloudById.set(String(c.id), c);
  }
  const out: CheckEntry[] = [];
  const seen = new Set<string>();

  for (const e of Array.isArray(local) ? local : []) {
    if (!e || e.id === undefined || e.id === null) continue;
    const id = String(e.id);
    if (deletedIds.has(id)) continue;
    seen.add(id);
    const c = cloudById.get(id);
    out.push(c && !pendingIds.has(id) ? ({ ...e, ...c, id: e.id } as CheckEntry) : e);
  }
  for (const c of cloudById.values()) {
    const id = String(c.id);
    if (!seen.has(id) && !deletedIds.has(id)) out.push(c);
  }
  return out.sort(
    (a, b) =>
      String(a.checkDate || "").localeCompare(String(b.checkDate || "")) || Number(a.id) - Number(b.id)
  );
}

/** তালিকার কনটেন্ট-সিগনেচার — অপ্রয়োজনীয় লেখালেখি/ইভেন্ট এড়াতে */
function checkSignature(list: CheckEntry[]): string {
  return (Array.isArray(list) ? list : [])
    .map((e) =>
      [
        String(e?.id),
        String(e?.checkDate || ""),
        String(e?.memberCode || ""),
        String(e?.bankName || "").toLowerCase(),
        String(e?.checkNo || "").toLowerCase(),
        String(e?.project || "").toLowerCase(),
        String(e?.accountNo || ""),
        String(e?.accountType || ""),
        e?.micr === true ? "1" : "0",
      ].join("|")
    )
    .sort()
    .join(";");
}

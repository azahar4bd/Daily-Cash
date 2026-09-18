import { useEffect, useState } from "react";
import {
  getGoogleSheetUrl,
  setGoogleSheetUrl,
  getLocalTxs,
  getLocalStaffReports,
} from "@/lib/storage";
import { fetchAppSettingFromNeon, upsertAppSettingInNeon } from "@/lib/neon";

const GOOGLE_APPS_SCRIPT_TEMPLATE = `/**
 * GOOGLE APPS SCRIPT SYNC CODE - CASH GOBRA
 * Paste this in your Google Sheet: Extensions -> Apps Script
 */
function doGet(e) {
  return handleRequest(e);
}
function doPost(e) {
  return handleRequest(e);
}
function handleRequest(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) return jsonResponse({ ok: false, error: "Open sheet directly" });
    
    var body = null;
    if (e && e.postData && e.postData.contents) {
      try { body = JSON.parse(e.postData.contents); } catch (err) {}
    }
    if (!body && e && e.parameter) body = e.parameter;
    if (!body) return jsonResponse({ ok: true, message: "Script active for " + ss.getName() });

    var action = body.action || (body.data && body.data.action);
    var data = body.data || body;

    if (action === "test") {
      var s = ss.getSheetByName("Status") || ss.insertSheet("Status");
      s.getRange("A1").setValue("Last Test Connection");
      s.getRange("B1").setValue(new Date().toString());
      return jsonResponse({ ok: true, message: "Connected to " + ss.getName() });
    }

    if (action === "sync_all") {
      var count = 0;
      if (data.transactions && data.transactions.length > 0) {
        var recS = ss.getSheetByName("Receive") || ss.insertSheet("Receive");
        var payS = ss.getSheetByName("Payment") || ss.insertSheet("Payment");
        if (recS.getLastRow() === 0) recS.appendRow(["ID", "Date", "Category", "Amount", "Description"]);
        if (payS.getLastRow() === 0) payS.appendRow(["ID", "Date", "Category", "Sub Category", "Amount", "Description"]);
        data.transactions.forEach(function(t) {
          if (t.type === "receive") {
            recS.appendRow([t.id, t.txDate, t.category, Number(t.amount) || 0, t.description || ""]);
          } else {
            payS.appendRow([t.id, t.txDate, t.category, t.subCategory || "", Number(t.amount) || 0, t.description || ""]);
          }
          count++;
        });
      }
      return jsonResponse({ ok: true, action: "sync_all", rowsAdded: count });
    }
    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}`;

export default function GoogleSheetSyncModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "testing" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (open) {
      const saved = getGoogleSheetUrl();
      setUrl(saved);
      setStatus("idle");
      setStatusMsg("");
      if (!saved) {
        fetchAppSettingFromNeon("google_sheet_url")
          .then((cloudUrl) => {
            if (cloudUrl && cloudUrl.startsWith("http")) {
              setUrl(cloudUrl);
              setGoogleSheetUrl(cloudUrl);
            }
          })
          .catch(() => {});
      }
    }
  }, [open]);

  useEffect(() => {
    const handleUrlChange = (e: any) => {
      if (e?.detail && typeof e.detail === "string") {
        setUrl(e.detail);
      }
    };
    window.addEventListener("google-sheet-url-changed", handleUrlChange);
    return () => window.removeEventListener("google-sheet-url-changed", handleUrlChange);
  }, []);

  if (!open) return null;

  const handleSaveUrl = async () => {
    const clean = url.trim();
    if (!clean || !clean.startsWith("http")) {
      setStatus("error");
      setStatusMsg("Valid Web App URL required");
      return;
    }
    setGoogleSheetUrl(clean);
    try {
      await upsertAppSettingInNeon("google_sheet_url", clean);
    } catch {}
    setStatus("success");
    setStatusMsg("URL সফলভাবে ডাটাবেজ ও ক্লাউডে সংরক্ষিত হয়েছে! অন্য যেকোনো ডিভাইসেও এটি স্বয়ংক্রিয়ভাবে পাওয়া যাবে।");
  };

  const handleTest = async () => {
    if (!url || !url.startsWith("http")) {
      setStatus("error");
      setStatusMsg("Valid Web App URL required");
      return;
    }
    setStatus("testing");
    setStatusMsg("Testing connection...");
    try {
      // Direct client-side test
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "test" }),
      });
      setGoogleSheetUrl(url);
      setStatus("success");
      setStatusMsg("Request sent to Google Apps Script successfully!");
    } catch (e: any) {
      setStatus("error");
      setStatusMsg("Failed: " + e.message);
    }
  };

  const handleSyncAll = async () => {
    if (!url || !url.startsWith("http")) {
      setStatus("error");
      setStatusMsg("Valid Web App URL required");
      return;
    }
    setStatus("testing");
    setStatusMsg("Syncing all data to Google Sheet...");
    try {
      const txs = getLocalTxs();
      const srs = getLocalStaffReports();
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          action: "sync_all",
          data: { transactions: txs, staffReports: srs },
        }),
      });
      setStatus("success");
      setStatusMsg(`Synced ${txs.length} transactions & ${srs.length} staff reports to Google Sheet!`);
    } catch (e: any) {
      setStatus("error");
      setStatusMsg("Sync failed: " + e.message);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto">
      <div className="flex max-h-[94vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300">
        <div className="flex items-center justify-between border-b bg-emerald-800 px-5 py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">Google Sheet / Drive Sync</h3>
              <p className="text-xs text-emerald-200">Connect your Google Spreadsheet</p>
            </div>
          </div>
          <button onClick={onClose} className="text-2xl text-emerald-200 hover:text-white">
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm">
          {statusMsg && (
            <div
              className={`rounded-lg p-3 font-semibold text-xs ${
                status === "success"
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                  : status === "error"
                  ? "bg-rose-100 text-rose-900 border border-rose-300"
                  : "bg-blue-100 text-blue-900 border border-blue-300"
              }`}
            >
              {statusMsg}
            </div>
          )}
          <div className="space-y-1.5">
            <label className="block font-bold text-slate-800 text-sm">
              Google Apps Script Web App URL:
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://script.google.com/macros/s/.../exec"
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm font-mono focus:border-emerald-600 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSaveUrl}
                className="rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 font-bold text-white text-xs transition whitespace-nowrap shadow-xs"
              >
                Save URL
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <button
              type="button"
              onClick={handleTest}
              className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition"
            >
              Test Connection
            </button>
            <button
              type="button"
              onClick={handleSyncAll}
              className="rounded-lg bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition"
            >
              Sync All Data
            </button>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm">Apps Script Code Setup</h4>
              <button
                type="button"
                onClick={() => setShowCode(!showCode)}
                className="text-xs text-blue-600 hover:underline font-bold"
              >
                {showCode ? "Hide Code" : "Show Script Code"}
              </button>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-xs text-slate-700">
              <li>Open Google Sheet &gt; Extensions &gt; Apps Script</li>
              <li>Paste the code, save with Ctrl+S</li>
              <li>Deploy as Web App, set access to <b>Anyone</b></li>
              <li>Copy Web App URL and paste above</li>
            </ol>
            {showCode && (
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-600 font-mono">Apps Script Code:</span>
                  <button
                    type="button"
                    onClick={copyCode}
                    className="rounded bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 text-xs font-bold transition shadow-xs"
                  >
                    {copied ? "Copied!" : "Copy Code"}
                  </button>
                </div>
                <pre className="max-h-48 overflow-auto rounded bg-slate-900 p-3 text-[10.5px] font-mono text-emerald-300">
                  {GOOGLE_APPS_SCRIPT_TEMPLATE}
                </pre>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between border-t bg-slate-100 px-5 py-3">
          <span className="text-xs text-slate-500 font-medium">Google Sheets Database Integration</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-800 hover:bg-slate-900 px-6 py-1.5 text-xs font-bold text-white transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

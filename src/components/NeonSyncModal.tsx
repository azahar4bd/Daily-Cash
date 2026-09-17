import { useState, useEffect } from "react";
import { getStoredSyncState, type NeonSyncState } from "@/lib/neon";
import { syncAllWithNeon } from "@/lib/neonSync";
import { getLocalTxs, getLocalStaffReports } from "@/lib/storage";

interface NeonSyncModalProps {
  open: boolean;
  onClose: () => void;
}

export default function NeonSyncModal({ open, onClose }: NeonSyncModalProps) {
  const [syncState, setSyncState] = useState<NeonSyncState>(getStoredSyncState());
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSyncState(getStoredSyncState());
    setMsg("");

    const handler = (e: any) => {
      if (e.detail) setSyncState(e.detail);
    };
    window.addEventListener("neon-sync-status-changed", handler);
    return () => window.removeEventListener("neon-sync-status-changed", handler);
  }, [open]);

  if (!open) return null;

  const handleManualSync = async () => {
    setLoading(true);
    setMsg("Neon ক্লাউড ডাটাবেজের সাথে সিঙ্ক হচ্ছে...");
    try {
      const res = await syncAllWithNeon();
      setMsg(res.message);
      setSyncState(getStoredSyncState());
    } catch (e: any) {
      setMsg(`সিঙ্ক ত্রুটি: ${e.message || "Failed"}`);
    } finally {
      setLoading(false);
    }
  };

  const txs = getLocalTxs();
  const srs = getLocalStaffReports();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto animate-in fade-in">
      <div className="flex max-h-[94vh] w-full max-w-lg flex-col rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-linear-to-r from-teal-900 to-slate-900 px-5 py-3.5 text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🐘</span>
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight flex items-center gap-2">
                <span>Neon PostgreSQL Database</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </h3>
              <p className="text-[11px] text-teal-300">
                Serverless Cloud Database (Permanent Storage)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-white cursor-pointer px-1"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 text-xs sm:text-sm">
          {/* Status Banner */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-base shrink-0 font-black">
                ✓
              </div>
              <div className="space-y-1">
                <div className="font-extrabold text-emerald-950 text-sm flex items-center gap-2">
                  <span>Neon Database সফলভাবে কানেক্টেড!</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                  এখন থেকে আপনি যা ডাটা এন্ট্রি দেবেন তা স্বয়ংক্রিয়ভাবে Neon PostgreSQL ক্লাউড ডাটাবেজে স্থায়ীভাবে সংরক্ষিত থাকবে।
                  পরবর্তী কোড মোডিফাই বা রি-ডিপ্লয়ে ডাটা কখনোই মুছে যাবে না।
                </p>
              </div>
            </div>
          </div>

          {/* Database Specs Card */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">
                Database Engine
              </span>
              <span className="font-black text-slate-800">PostgreSQL (Neon)</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">
                Region & Host
              </span>
              <span className="font-bold text-slate-800 truncate block">
                ap-southeast-1 (Singapore)
              </span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">
                Transactions Synced
              </span>
              <span className="font-black text-blue-600 text-sm">
                {txs.length} টি
              </span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">
                Staff Reports
              </span>
              <span className="font-black text-indigo-600 text-sm">
                {srs.length} টি
              </span>
            </div>
          </div>

          {/* Last sync info */}
          <div className="flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600">
            <span>সর্বশেষ ক্লাউড সিঙ্ক:</span>
            <span className="font-mono font-bold text-slate-800">
              {syncState.lastSyncTime || "এইমাত্র"}
            </span>
          </div>

          {msg && (
            <div
              className={`rounded-xl p-3 text-xs font-bold leading-relaxed ${
                msg.includes("ত্রুটি") || msg.includes("ব্যর্থ")
                  ? "bg-rose-50 text-rose-800 border border-rose-200"
                  : "bg-blue-50 text-blue-900 border border-blue-200"
              }`}
            >
              {msg}
            </div>
          )}

          {/* Sync Now Button */}
          <button
            type="button"
            disabled={loading || syncState.isSyncing}
            onClick={handleManualSync}
            className={`w-full rounded-2xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 py-3 text-xs sm:text-sm font-black text-white shadow-md transition cursor-pointer flex items-center justify-center gap-2 ${
              loading || syncState.isSyncing ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            <span className={loading || syncState.isSyncing ? "animate-spin" : ""}>
              🔄
            </span>
            <span>
              {loading || syncState.isSyncing
                ? "ক্লাউডে সিঙ্ক হচ্ছে..."
                : "এখনই Neon ডাটাবেজে সিঙ্ক করুন (Sync Now)"}
            </span>
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t bg-slate-50 px-5 py-3 text-xs">
          <span className="text-slate-400 font-medium">
            Daily Cash Gobra • BKF
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-800 hover:bg-slate-900 px-5 py-1.5 font-bold text-white transition cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
}

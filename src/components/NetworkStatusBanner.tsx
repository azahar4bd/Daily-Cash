import { useState, useEffect } from "react";
import { getStoredSyncState, type NeonSyncState } from "@/lib/neon";
import { syncAllWithNeon } from "@/lib/neonSync";

export default function NetworkStatusBanner() {
  const [isOnline, setIsOnline] = useState<boolean>(() => navigator.onLine);
  const [syncState, setSyncState] = useState<NeonSyncState>(getStoredSyncState());
  const [showReconnectedToast, setShowReconnectedToast] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnectedToast(true);
      syncAllWithNeon().catch(() => {});
      const timer = setTimeout(() => {
        setShowReconnectedToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnectedToast(false);
    };

    const handleSyncStatus = (e: any) => {
      if (e.detail) setSyncState(e.detail);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("neon-sync-status-changed", handleSyncStatus);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("neon-sync-status-changed", handleSyncStatus);
    };
  }, []);

  // Offline banner
  if (!isOnline) {
    return (
      <div className="mb-2.5 rounded-2xl border-2 border-amber-400 bg-amber-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-amber-900 shadow-sm print:hidden flex items-center justify-between gap-2 animate-in fade-in duration-200">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 rounded-full bg-amber-500 animate-ping shrink-0" />
          <div className="leading-snug">
            <span className="font-black">⚡ অফলাইন মোড সক্রিয়:</span>{" "}
            <span className="font-medium text-amber-800">
              ইন্টারনেট সংযোগ নেই। আপনি নিশ্চিন্তে কাজ চালিয়ে যেতে পারেন, সকল ডাটা ডিভাইসে জমা থাকছে।
            </span>
          </div>
        </div>
        {syncState.pendingCount > 0 && (
          <span className="shrink-0 rounded-lg bg-amber-600 px-2 py-0.5 text-[11px] font-black text-white">
            {syncState.pendingCount}টি পেন্ডিং
          </span>
        )}
      </div>
    );
  }

  // Reconnected Toast
  if (showReconnectedToast) {
    return (
      <div className="mb-2.5 rounded-2xl border-2 border-emerald-400 bg-emerald-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm print:hidden flex items-center justify-between gap-2 animate-in fade-in duration-200">
        <div className="flex items-center gap-2">
          <span className="text-base">✅</span>
          <div className="leading-snug">
            <span className="font-black">ইন্টারনেট পুনঃসংযুক্ত:</span>{" "}
            <span className="font-medium text-emerald-800">
              অফলাইনে এন্ট্রি করা ডাটা ক্লাউডে অটো-সিঙ্ক সম্পন্ন হয়েছে!
            </span>
          </div>
        </div>
        {syncState.isSyncing && (
          <span className="shrink-0 animate-spin text-xs">🔄</span>
        )}
      </div>
    );
  }

  return null;
}

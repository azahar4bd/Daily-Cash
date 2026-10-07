import { useState, useEffect } from "react";
import DatePicker, { todayISO } from "./DatePicker";
import GoogleSheetSyncModal from "./GoogleSheetSyncModal";
import NeonSyncModal from "./NeonSyncModal";
import ApkInstallModal from "./ApkInstallModal";
import { getStoredSyncState, type NeonSyncState } from "@/lib/neon";
import { isDayOpen, isDayClosed } from "@/lib/storage";

const pages = [
  { id: "receive", label: "Receive", icon: "📥" },
  { id: "payment", label: "Payment", icon: "📤" },
  { id: "report", label: "Report", icon: "📊" },
  { id: "cashbook", label: "Cashbook", icon: "📖" },
  { id: "check", label: "Check", icon: "🧾" },
  { id: "entertainment", label: "Entertainment", icon: "🎉" }, // v1.4.71: নতুন পেজ
];

/* ════════════════════════════════════════════════════════════════════
 * ✨ v1.4.121: PREMIUM DARK-GLASS MENU BAR
 *   ইউজার-নির্দেশ: "এই মেনুটা একটু প্রিমিয়াম কর — দেখতে ও চোখে আসে সেরকম"
 *   → রয়্যাল নেভি-গ্লাস বার + সোনালি ব্র্যান্ড + গ্লো-স্ট্যাটাস ডট +
 *     ট্যাবগুলো একটি গ্লাস-ডকের ভেতরে; অ্যাকটিভ ট্যাব = ইন্ডিগো-স্কাই গ্রেডিয়েন্ট
 *     পিল (শ্যাডো + হালকা স্কেল + ডল-গ্লো) — যেন প্রথম দেখাতেই চোখে লাগে।
 *   → হ্যান্ডলার/লজিক/ব্রেকপয়েন্ট/অর্ডার — সব হুবহু আগের মতোই (শুধু স্টাইল)
 * ════════════════════════════════════════════════════════════════════ */

export default function BottomMenu({
  currentTab,
  onTabChange,
  selectedDate,
  onDateChange,
  onOpenTracker,
}: {
  currentTab: string;
  onTabChange: (tab: string) => void;
  selectedDate: string;
  onDateChange: (date: string) => void;
  onOpenTracker?: () => void;
}) {
  const [sheetModalOpen, setSheetModalOpen] = useState(false);
  const [neonModalOpen, setNeonModalOpen] = useState(false);
  const [threeLineMenuOpen, setThreeLineMenuOpen] = useState(false);
  const [apkModalOpen, setApkModalOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [syncState, setSyncState] = useState<NeonSyncState>(getStoredSyncState());
  const today = todayISO();

  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
  }, []);

  useEffect(() => {
    const handler = (e: any) => {
      if (e.detail) setSyncState(e.detail);
    };
    window.addEventListener("neon-sync-status-changed", handler);
    return () => window.removeEventListener("neon-sync-status-changed", handler);
  }, []);

  const handleSelectPage = (id: string) => {
    onTabChange(id);
    setThreeLineMenuOpen(false);
  };

  const activePage = pages.find((p) => p.id === currentTab) || pages[0];

  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-40 text-white pb-[env(safe-area-inset-bottom,0px)]">
        {/* ✨ Royal navy glass ব্যাকগ্রাউন্ড + উপরের গোল্ড-গ্লো হেয়ারলাইন */}
        <div className="absolute inset-0 border-t border-white/10 bg-linear-to-b from-[#131f42]/95 to-[#0a1024]/98 backdrop-blur-xl shadow-[0_-12px_40px_-10px_rgba(4,10,30,0.85)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-300/60 to-transparent" />

        <div className="relative mx-auto flex max-w-6xl xl:max-w-7xl flex-nowrap items-center justify-between gap-2 px-2.5 py-2 sm:px-4">

          {/* Left: Brand & Cloud Tools */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* 💎 সোনালি টাইল + গ্রেডিয়েন্ট ব্র্যান্ড */}
            <span className="hidden xs:flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-300 to-orange-500 text-[13px] shadow-md shadow-amber-500/40 ring-1 ring-white/30">
              💰
            </span>
            <span className="hidden xs:inline bg-linear-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text font-black text-xs tracking-tight whitespace-nowrap text-transparent drop-shadow-sm sm:text-sm">
              Cash Gobra
            </span>
            <span className="xs:hidden bg-linear-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text font-black text-[11px] tracking-tight whitespace-nowrap text-transparent">
              Cash
            </span>

            {/* Neon Cloud Database Status Button — গ্লাস চিপ + গ্লো-ডট */}
            <button
              type="button"
              onClick={() => setNeonModalOpen(true)}
              className="flex items-center gap-1.5 rounded-full border border-teal-300/25 bg-teal-400/10 px-2.5 py-1 text-[11px] font-bold text-teal-200 shadow-xs backdrop-blur transition-all duration-200 whitespace-nowrap cursor-pointer hover:-translate-y-px hover:bg-teal-400/20 hover:border-teal-300/40"
              title="Neon PostgreSQL Cloud Database Connected"
            >
              <span className="text-xs">🐘</span>
              <span className="hidden xs:inline">Neon DB</span>
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  syncState.isSyncing
                    ? "bg-amber-300 animate-ping"
                    : syncState.connected
                    ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]"
                    : "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]"
                }`}
              />
            </button>

            {/* Google Sheet Tool */}
            <button
              type="button"
              onClick={() => setSheetModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-bold text-emerald-200 shadow-xs backdrop-blur transition-all duration-200 whitespace-nowrap cursor-pointer hover:-translate-y-px hover:bg-emerald-400/20 hover:border-emerald-300/40"
              title="Connect to Google Sheet"
            >
              <span>📊</span>
              <span>Google Sheet</span>
            </button>
          </div>

          {/* Center: Master Date Filter — compact so nothing overflows & the date dropdown is never clipped */}
          <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-400 hidden 2xl:inline whitespace-nowrap">
              Date:
            </span>
            <div className="w-[88px] shrink-0 xs:w-[104px] sm:w-36 text-slate-900">
              <DatePicker
                value={selectedDate}
                onChange={(v) => onDateChange(v || today)}
                className="rounded-full border border-white/60 bg-white py-1 px-2.5 text-xs font-bold shadow-md shadow-black/30"
                dropUp={true}
                onOpenTracker={onOpenTracker}
              />
            </div>
            {selectedDate !== today && (
              <button
                type="button"
                onClick={() => onDateChange(today)}
                className="shrink-0 rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-2 py-1 text-[10px] sm:px-2.5 sm:text-xs font-bold text-white shadow-md shadow-blue-500/40 transition-all duration-200 cursor-pointer whitespace-nowrap hover:scale-105 active:scale-95"
                title="Back to today's date"
              >
                <span className="hidden xs:inline">Today</span>
                <span className="xs:hidden">📆</span>
              </button>
            )}

            {/* Day State — status only. Open/Close কন্ট্রোল একটিই জায়গায় (Working-Day বার) */}
            {/* v1.4.82: Check/Entertainment/Cashbook পেজে চিপ নেই — এই পেজগুলো ডে-স্টেট থেকে স্বতন্ত্র */}
            {!["check", "entertainment", "cashbook"].includes(currentTab) && (isDayClosed(selectedDate) ? (
              <span
                className="shrink-0 rounded-full border border-rose-400/40 bg-rose-500/15 px-2 py-1 text-[10px] font-bold text-rose-300 backdrop-blur whitespace-nowrap"
                title="Day Closed"
              >
                🔒 <span className="hidden 2xl:inline">Closed</span>
              </span>
            ) : isDayOpen(selectedDate) ? (
              <span
                className="shrink-0 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-1 text-[10px] font-bold text-emerald-300 backdrop-blur whitespace-nowrap"
                title="Day Open"
              >
                ☀️ <span className="hidden 2xl:inline">Open</span>
              </span>
            ) : (
              <span
                className="shrink-0 rounded-full border border-amber-400/40 bg-amber-500/15 px-2 py-1 text-[10px] font-bold text-amber-300 backdrop-blur whitespace-nowrap"
                title="Working day not opened yet"
              >
                ⏳ <span className="hidden 2xl:inline">Not Opened</span>
              </span>
            ))}

            <button
              type="button"
              onClick={onOpenTracker}
              className="hidden 2xl:flex items-center gap-1 rounded-full border border-amber-300/25 bg-amber-400/10 px-2.5 py-1 text-xs text-amber-300 font-bold backdrop-blur transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-amber-400/20"
              title="Open audit tracker for all dates"
            >
              <span>📅</span>
              <span className="text-[10px]">Audit</span>
            </button>

            {/* ⚙️ v1.4.119: Day Admin — যেকোনো দিন Close/Re-open/পুরনো দিন এডিট (ডেস্কটপ বার) */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-day-admin"))}
              className="hidden 2xl:flex items-center gap-1 rounded-full border border-violet-300/30 bg-violet-500/15 px-2.5 py-1 text-xs text-violet-200 font-bold backdrop-blur transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-violet-500/25 hover:border-violet-300/50"
              title="⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়"
            >
              <span>⚙️</span>
              <span className="text-[10px]">Day Admin</span>
            </button>
          </div>

          {/* Right: Navigation Controls — always pinned visible */}
          <div className="flex shrink-0 items-center gap-1.5">
            {/* Desktop Tabs — v1.4.81: xl (1280px+) থেকেই; টান্দা জায়গা কম পড়লে ভিতরে স্ক্রল হয়, আর কোনোদিন অন্য আইটেমের উপর চড়ে বসে না
                ✨ v1.4.121: গ্লাস-ডকের ভেতরে ট্যাব; অ্যাকটিভ = গ্রেডিয়েন্ট পিল + গ্লো */}
            <div className="hidden xl:flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-w-[48vw] 2xl:max-w-none rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md shadow-inner shadow-black/20">
              {pages.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onTabChange(p.id)}
                  className={`relative flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs transition-all duration-200 cursor-pointer ${
                    currentTab === p.id
                      ? "bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 font-black text-white shadow-lg shadow-indigo-500/50 ring-1 ring-white/30 scale-[1.04]"
                      : "font-bold text-slate-300 hover:-translate-y-px hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className={currentTab === p.id ? "text-[13px] drop-shadow" : ""}>{p.icon}</span>
                  <span>{p.label}</span>
                  {currentTab === p.id && (
                    <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,1)] animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Three-Line Menu Button (থ্রি লাইন মেনু ☰)
                ছোট ফোনেও অন্তত প্রথম ৩ অক্ষর সবসময় দেখা যাবে */}
            <button
              type="button"
              onClick={() => setThreeLineMenuOpen(!threeLineMenuOpen)}
              className="xl:hidden flex shrink-0 items-center gap-1.5 rounded-xl border border-amber-300/40 bg-linear-to-r from-amber-400/20 to-orange-400/10 px-2.5 py-1.5 text-xs font-black text-white shadow-sm shadow-amber-500/20 transition-all duration-200 cursor-pointer hover:border-amber-300/70 hover:bg-amber-400/25"
              title={`Open menu — current: ${activePage.label}`}
              aria-label={`Open menu (${activePage.label})`}
            >
              <div className="flex w-3 flex-col gap-0.5 items-center justify-center">
                <span className="block h-0.5 w-3 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"></span>
                <span className="block h-0.5 w-3 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"></span>
                <span className="block h-0.5 w-3 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"></span>
              </div>
              <span className="xs:hidden text-amber-300 font-black text-[11px] tracking-tight">
                {activePage.label.slice(0, 3)}
              </span>
              <span className="hidden xs:inline text-amber-300 font-bold truncate max-w-[52px] sm:max-w-[72px]">
                {activePage.label}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* THREE-LINE HAMBURGER SLIDE-UP DRAWER (থ্রি লাইন মেনু প্যানেল)             */}
      {/* ========================================================================= */}
      {threeLineMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity"
            onClick={() => setThreeLineMenuOpen(false)}
          />

          {/* Drawer Container */}
          <div className="relative z-10 w-full rounded-t-3xl border-t border-white/10 bg-linear-to-b from-[#151f47] to-[#0a1024] p-4 text-white shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[85vh] overflow-y-auto">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-300/70 to-transparent" />

            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 text-base shadow-md shadow-amber-500/40 ring-1 ring-white/30">
                  💰
                </span>
                <div>
                  <h3 className="text-sm font-black tracking-tight bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                    Cash Gobra — Menu
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    Select the page you want to open
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setThreeLineMenuOpen(false)}
                className="rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 text-lg leading-none transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Menu Items Grid */}
            <div className="space-y-1.5 mb-4">
              {pages.map((p) => {
                const isCurrent = currentTab === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPage(p.id)}
                    className={`w-full flex items-center justify-between rounded-2xl p-3 text-left font-bold transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? "bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 text-white shadow-lg shadow-indigo-500/40 ring-1 ring-white/30"
                        : "border border-white/10 bg-white/5 text-slate-200 hover:-translate-y-px hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl text-lg ${
                          isCurrent ? "bg-white/20 shadow-inner" : "bg-white/10"
                        }`}
                      >
                        {p.icon}
                      </span>
                      <div>
                        <span className={`text-sm block ${isCurrent ? "font-black" : ""}`}>{p.label}</span>
                      </div>
                    </div>
                    {isCurrent && (
                      <span className="rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-black backdrop-blur">
                        ✓ Active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Extra Tools Section */}
            <div className="border-t border-white/10 pt-3 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">
                Tools & Cloud Database
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setThreeLineMenuOpen(false);
                    if (onOpenTracker) onOpenTracker();
                    else window.dispatchEvent(new CustomEvent("open-date-tracker"));
                  }}
                  className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-amber-400/10 p-2.5 text-xs font-bold text-amber-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-amber-400/20"
                >
                  <span className="text-base">📅</span>
                  <span>Working-Day & Transaction Audit Tracker</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setThreeLineMenuOpen(false);
                    setNeonModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-teal-300/30 bg-teal-400/10 p-2.5 text-xs font-bold text-teal-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-teal-400/20"
                >
                  <span className="text-base">🐘</span>
                  <span>Neon Database</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setThreeLineMenuOpen(false);
                    setSheetModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-2.5 text-xs font-bold text-emerald-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-emerald-400/20"
                >
                  <span className="text-base">📊</span>
                  <span>Google Sheet</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setThreeLineMenuOpen(false);
                    setApkModalOpen(true);
                  }}
                  className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-400/10 p-2.5 text-xs font-bold text-indigo-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-indigo-400/20"
                >
                  <span className="text-base">📱</span>
                  <span>Install App & Download APK</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <NeonSyncModal
        open={neonModalOpen}
        onClose={() => setNeonModalOpen(false)}
      />

      <GoogleSheetSyncModal
        open={sheetModalOpen}
        onClose={() => setSheetModalOpen(false)}
      />

      <ApkInstallModal
        open={apkModalOpen}
        onClose={() => setApkModalOpen(false)}
        deferredPrompt={deferredPrompt}
      />
    </>
  );
}

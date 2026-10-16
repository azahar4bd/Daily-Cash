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

  /* 📺 v1.4.124: PC-র জন্য সবসময়-দৃশ্যমান সাইড মেনু (xl = 1280px+);
     মোবাইল/ট্যাবলেটের হুবহু নিচের বার ও ☰ ড্রয়ার অপরিবর্তিত */
  const dayStateVisible = !["check", "entertainment", "cashbook"].includes(currentTab);
  const dayChip = dayStateVisible ? (
    isDayClosed(selectedDate) ? (
      <span className="rounded-full border border-rose-400/40 bg-rose-500/15 px-2 py-0.5 text-[10px] font-bold text-rose-300 whitespace-nowrap" title="Day Closed">🔒 Closed</span>
    ) : isDayOpen(selectedDate) ? (
      <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300 whitespace-nowrap" title="Day Open">☀️ Open</span>
    ) : (
      <span className="rounded-full border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-300 whitespace-nowrap" title="Working day not opened yet">⏳ Not Opened</span>
    )
  ) : null;

  return (
    <>
      {/* ═══════════ PC: সবসময়-দৃশ্যমান প্রিমিয়াম সাইড মেনু (xl+) ═══════════ */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col text-white lg:flex print:hidden">
        <div className="absolute inset-0 border-r border-white/10 bg-linear-to-b from-[#131f42]/97 to-[#0a1024] backdrop-blur-xl shadow-[10px_0_40px_-12px_rgba(4,10,30,0.7)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-amber-300/60 to-transparent" />

        <div className="relative flex h-full flex-col gap-1 px-3 py-4">
          {/* 💎 Brand */}
          <div className="mb-2 flex items-center gap-2.5 px-1">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 text-lg shadow-lg shadow-amber-500/40 ring-1 ring-white/30">
              💰
            </span>
            <div className="min-w-0">
              <p className="bg-linear-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-[15px] font-black tracking-tight text-transparent">
                Cash Gobra
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Daily Cashbook Pro</p>
            </div>
          </div>

          {/* 🗓️ ওয়ার্কিং তারিখ কন্ট্রোল */}
          <div className="mb-2 rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-inner">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">কাজের তারিখ</span>
              {dayChip}
            </div>
            <div className="text-slate-900">
              <DatePicker
                value={selectedDate}
                onChange={(v) => onDateChange(v || today)}
                className="w-full rounded-xl border border-white/60 bg-white px-2.5 py-1.5 text-xs font-bold shadow-md shadow-black/30"
                onOpenTracker={onOpenTracker}
              />
            </div>
            {selectedDate !== today && (
              <button
                type="button"
                onClick={() => onDateChange(today)}
                className="mt-1.5 w-full rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-2 py-1 text-[10px] font-black text-white shadow-md shadow-blue-500/40 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95"
                title="Back to today's date"
              >
                📆 আজকের তারিখে ফিরুন
              </button>
            )}
          </div>

          <div className="mt-1 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* 🧭 পেজ মেনু */}
          <p className="px-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">Pages</p>
          <nav className="flex flex-col gap-1">
            {pages.map((p) => {
              const isCurrent = currentTab === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onTabChange(p.id)}
                  className={`group relative flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-[13px] transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? "bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 font-black text-white shadow-lg shadow-indigo-500/40 ring-1 ring-white/30"
                      : "font-bold text-slate-300 hover:bg-white/10 hover:text-white hover:translate-x-0.5"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${
                      isCurrent ? "bg-white/20 shadow-inner" : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    {p.icon}
                  </span>
                  <span className="truncate">{p.label}</span>
                  {isCurrent && (
                    <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,1)] animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 🛠️ Tools & Cloud */}
          <p className="mt-2 px-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">Tools &amp; Cloud</p>
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() => setNeonModalOpen(true)}
              className="flex w-full items-center gap-2.5 rounded-xl border border-teal-300/20 bg-teal-400/10 px-2.5 py-2 text-left text-xs font-bold text-teal-200 transition-all duration-200 cursor-pointer hover:bg-teal-400/20 hover:border-teal-300/40"
              title="Neon PostgreSQL Cloud Database"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm">🐘</span>
              <span>Neon DB</span>
              <span
                className={`ml-auto h-1.5 w-1.5 rounded-full ${
                  syncState.isSyncing
                    ? "bg-amber-300 animate-ping"
                    : syncState.connected
                    ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]"
                    : "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]"
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setSheetModalOpen(true)}
              className="flex w-full items-center gap-2.5 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-2 text-left text-xs font-bold text-emerald-200 transition-all duration-200 cursor-pointer hover:bg-emerald-400/20 hover:border-emerald-300/40"
              title="Connect to Google Sheet"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm">📊</span>
              <span>Google Sheet</span>
            </button>
            <button
              type="button"
              onClick={onOpenTracker}
              className="flex w-full items-center gap-2.5 rounded-xl border border-amber-300/20 bg-amber-400/10 px-2.5 py-2 text-left text-xs font-bold text-amber-300 transition-all duration-200 cursor-pointer hover:bg-amber-400/20 hover:border-amber-300/40"
              title="Open audit tracker for all dates"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm">📅</span>
              <span>Audit Tracker</span>
            </button>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-day-admin"))}
              className="flex w-full items-center gap-2.5 rounded-xl border border-violet-300/25 bg-violet-500/15 px-2.5 py-2 text-left text-xs font-bold text-violet-200 transition-all duration-200 cursor-pointer hover:bg-violet-500/25 hover:border-violet-300/50"
              title="⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm">⚙️</span>
              <span>Day Admin</span>
            </button>
            <button
              type="button"
              onClick={() => setApkModalOpen(true)}
              className="flex w-full items-center gap-2.5 rounded-xl border border-indigo-300/25 bg-indigo-400/10 px-2.5 py-2 text-left text-xs font-bold text-indigo-200 transition-all duration-200 cursor-pointer hover:bg-indigo-400/20 hover:border-indigo-300/40"
              title="Install App & Download APK"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm">📱</span>
              <span>Install App</span>
            </button>
          </div>
          </div>

          {/* ফুটার */}
          <div className="mt-1 pt-2 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
            Gobra Branch · BKF
          </div>
        </div>
      </aside>



      {/* 🎈 v1.4.162: ফ্লোটিং ☰ — পুরো নিচের বার সরালাম (ইউজার-নির্দেশ); স্ক্রিন পুরো কনটেন্টের */}
      <button
        type="button"
        onClick={() => setThreeLineMenuOpen(true)}
        aria-label={`মেনু খুলুন — বর্তমান পেজ: ${activePage.label}`}
        title={`মেনু — ${activePage.label}`}
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-2xl border border-amber-300/50 bg-linear-to-b from-[#18244f]/95 to-[#0a1024]/95 shadow-[0_8px_28px_-6px_rgba(4,10,30,0.8),0_0_14px_rgba(251,191,36,0.25)] backdrop-blur-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 lg:hidden print:hidden"
      >
        <span className="block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"></span>
        <span className="block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"></span>
        <span className="block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"></span>
      </button>

      {/* ========================================================================= */}
      {/* THREE-LINE HAMBURGER SLIDE-UP DRAWER (থ্রি লাইন মেনু প্যানেল)             */}
      {/* ========================================================================= */}
      {threeLineMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
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

            {/* 🗓️ v1.4.162: কাজের তারিখ + ডে-স্টেট — নিচের বার উঠে যাওয়ায় এখন ড্রয়ারেই */}
            <div className="mb-3 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">কাজের তারিখ:</span>
              <div className="w-36 text-slate-900">
                <DatePicker
                  value={selectedDate}
                  onChange={(v) => onDateChange(v || today)}
                  className="w-full rounded-xl border border-white/60 bg-white px-2.5 py-1.5 text-xs font-bold shadow-md shadow-black/30"
                  onOpenTracker={onOpenTracker}
                />
              </div>
              {selectedDate !== today && (
                <button
                  type="button"
                  onClick={() => onDateChange(today)}
                  className="rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-2.5 py-1 text-[10px] font-black text-white shadow-md shadow-blue-500/40 transition cursor-pointer active:scale-95"
                  title="Back to today"
                >
                  📆 আজ
                </button>
              )}
              {dayChip}
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
                    window.dispatchEvent(new CustomEvent("open-day-admin"));
                  }}
                  className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-violet-300/30 bg-violet-500/15 p-2.5 text-xs font-bold text-violet-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-violet-500/25"
                >
                  <span className="text-base">⚙️</span>
                  <span>Day Admin — Close / Re-open / পুরনো দিন এডিট</span>
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

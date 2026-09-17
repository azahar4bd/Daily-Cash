import { useState } from "react";
import DatePicker, { todayISO } from "./DatePicker";
import GoogleSheetSyncModal from "./GoogleSheetSyncModal";
import NetlifyGuideModal from "./NetlifyGuideModal";

const pages = [
  { id: "receive", label: "Receive", labelBn: "জমা (Receive)", icon: "📥" },
  { id: "payment", label: "Payment", labelBn: "পেমেন্ট (Payment)", icon: "📤" },
  { id: "rebate", label: "Rebate", labelBn: "রিবেট (Rebate)", icon: "🏷️" },
  { id: "report", label: "Report", labelBn: "স্টাফ রিপোর্ট", icon: "📊" },
  { id: "cashbook", label: "Cashbook", labelBn: "ক্যাশ বহি (Cashbook)", icon: "📖" },
];

export default function BottomMenu({
  currentTab,
  onTabChange,
  selectedDate,
  onDateChange,
}: {
  currentTab: string;
  onTabChange: (tab: string) => void;
  selectedDate: string;
  onDateChange: (date: string) => void;
}) {
  const [sheetModalOpen, setSheetModalOpen] = useState(false);
  const [netlifyModalOpen, setNetlifyModalOpen] = useState(false);
  const [threeLineMenuOpen, setThreeLineMenuOpen] = useState(false);
  const today = todayISO();

  const handleSelectPage = (id: string) => {
    onTabChange(id);
    setThreeLineMenuOpen(false);
  };

  const activePage = pages.find((p) => p.id === currentTab) || pages[0];

  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-slate-900/95 backdrop-blur-md text-white shadow-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:px-4">
          
          {/* Left: Brand & Google Sheet Tool */}
          <div className="flex items-center gap-2">
            <span className="font-black text-xs sm:text-sm tracking-tight whitespace-nowrap text-amber-400">
              Cash Gobra
            </span>
            <button
              type="button"
              onClick={() => setSheetModalOpen(true)}
              className="hidden sm:flex items-center gap-1 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 px-2 py-1 text-[11px] font-bold text-white transition shadow-xs whitespace-nowrap cursor-pointer"
              title="Connect to Google Sheet"
            >
              <span>📊</span>
              <span>Google Sheet</span>
            </button>
          </div>

          {/* Center: Master Date Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-300 hidden sm:inline whitespace-nowrap">
              Date:
            </span>
            <div className="w-28 sm:w-36 text-slate-900">
              <DatePicker
                value={selectedDate}
                onChange={(v) => onDateChange(v || today)}
                className="py-1 px-2 text-xs font-bold bg-white"
                dropUp={true}
              />
            </div>
            {selectedDate !== today && (
              <button
                type="button"
                onClick={() => onDateChange(today)}
                className="rounded-lg bg-blue-600 hover:bg-blue-500 px-2 py-1 text-[10px] sm:text-xs font-bold text-white transition cursor-pointer"
              >
                Today
              </button>
            )}
          </div>

          {/* Right: Navigation Controls */}
          <div className="flex items-center gap-1.5">
            {/* Desktop Tabs */}
            <div className="hidden lg:flex items-center gap-1">
              {pages.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onTabChange(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                    currentTab === p.id
                      ? "bg-blue-600 text-white shadow-sm ring-1 ring-blue-400"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Three-Line Menu Button (থ্রি লাইন মেনু ☰) */}
            <button
              type="button"
              onClick={() => setThreeLineMenuOpen(!threeLineMenuOpen)}
              className="lg:hidden flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 px-2.5 py-1.5 text-xs font-black text-white transition shadow-sm cursor-pointer"
              title="মেনু খুলুন"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-0.5 items-center justify-center w-3.5">
                <span className="block h-0.5 w-3.5 bg-amber-400 rounded-full"></span>
                <span className="block h-0.5 w-3.5 bg-amber-400 rounded-full"></span>
                <span className="block h-0.5 w-3.5 bg-amber-400 rounded-full"></span>
              </div>
              <span className="text-amber-400 font-bold truncate max-w-[70px]">
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
        <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
            onClick={() => setThreeLineMenuOpen(false)}
          />

          {/* Drawer Container */}
          <div className="relative z-10 w-full rounded-t-3xl border-t border-slate-700 bg-slate-900 p-4 text-white shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[85vh] overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-0.5 justify-center w-4">
                  <span className="block h-0.5 w-4 bg-amber-400 rounded-full"></span>
                  <span className="block h-0.5 w-4 bg-amber-400 rounded-full"></span>
                  <span className="block h-0.5 w-4 bg-amber-400 rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white tracking-tight">
                    নেভিগেশন মেনু (Menu)
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    যে পেজে যেতে চান সিলেক্ট করুন
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setThreeLineMenuOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:text-white hover:bg-slate-800 text-lg leading-none cursor-pointer"
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
                    className={`w-full flex items-center justify-between p-3 rounded-2xl text-left font-bold transition cursor-pointer ${
                      isCurrent
                        ? "bg-blue-600 text-white shadow-md ring-1 ring-blue-400"
                        : "bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{p.icon}</span>
                      <div>
                        <span className="text-sm block">{p.labelBn}</span>
                        <span className="text-[10px] opacity-70 block font-normal">
                          {p.label} Page
                        </span>
                      </div>
                    </div>
                    {isCurrent && (
                      <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-black">
                        Active ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Extra Tools Section */}
            <div className="border-t border-slate-800 pt-3 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">
                টুলস ও ক্লাউড সিঙ্ক
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setThreeLineMenuOpen(false);
                    setSheetModalOpen(true);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/50 p-2.5 text-xs font-bold text-emerald-200 transition cursor-pointer"
                >
                  <span className="text-base">📊</span>
                  <span>Google Sheet</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setThreeLineMenuOpen(false);
                    setNetlifyModalOpen(true);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 p-2.5 text-xs font-bold text-slate-300 transition cursor-pointer"
                >
                  <span className="text-base">🌐</span>
                  <span>Netlify Guide</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <GoogleSheetSyncModal
        open={sheetModalOpen}
        onClose={() => setSheetModalOpen(false)}
      />

      <NetlifyGuideModal
        open={netlifyModalOpen}
        onClose={() => setNetlifyModalOpen(false)}
      />
    </>
  );
}

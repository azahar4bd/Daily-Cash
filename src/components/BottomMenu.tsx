import { useState } from "react";
import DatePicker, { todayISO } from "./DatePicker";
import GoogleSheetSyncModal from "./GoogleSheetSyncModal";
import NetlifyGuideModal from "./NetlifyGuideModal";

const pages = [
  { id: "receive", label: "Receive" },
  { id: "payment", label: "Payment" },
  { id: "rebate", label: "Rebate" },
  { id: "report", label: "Report" },
  { id: "cashbook", label: "Cashbook" },
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
  const today = todayISO();

  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-800 bg-slate-900 text-white shadow-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:px-4">
          {/* Brand, Netlify button & Google Sheet Button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-black text-xs sm:text-sm tracking-tight whitespace-nowrap text-amber-400">
              Cash Gobra
            </span>
            <button
              type="button"
              onClick={() => setNetlifyModalOpen(true)}
              className="flex items-center gap-1 rounded-lg bg-teal-600 hover:bg-teal-500 px-2 py-1 text-[10px] sm:text-xs font-bold text-white transition shadow-xs whitespace-nowrap"
              title="Netlify Deploy Guide"
            >
              <span>🌐</span>
              <span className="hidden sm:inline">Netlify Deploy</span>
            </button>
            <button
              type="button"
              onClick={() => setSheetModalOpen(true)}
              className="flex items-center gap-1 rounded-lg bg-emerald-700 hover:bg-emerald-600 px-2 py-1 text-[10px] sm:text-xs font-bold text-white transition shadow-xs whitespace-nowrap"
              title="Connect to Google Sheet"
            >
              <span>📊</span>
              <span className="hidden sm:inline">Google Sheet</span>
            </button>
          </div>

          {/* Master Date Filter */}
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
                className="rounded bg-blue-600 hover:bg-blue-500 px-1.5 py-1 text-[10px] sm:text-xs font-bold text-white transition"
              >
                Today
              </button>
            )}
          </div>

          {/* Page Tabs */}
          <div className="flex items-center gap-1">
            {/* Desktop Tabs */}
            <div className="hidden md:flex items-center gap-1">
              {pages.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onTabChange(p.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    currentTab === p.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <select
              value={currentTab}
              onChange={(e) => onTabChange(e.target.value)}
              className="md:hidden rounded-lg border border-slate-700 bg-slate-800 px-2 py-1.5 text-xs font-bold text-white focus:outline-none"
            >
              {pages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

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

import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import ReceivePage from "./components/ReceivePage";
import PaymentPage from "./components/PaymentPage";
import RebatePage from "./components/RebatePage";
import EntertainmentPage from "./components/EntertainmentPage";
import StaffReportManager from "./components/StaffReportManager";
import CashSheet from "./components/CashSheet";
import CheckPage from "./components/CheckPage";
import BottomMenu from "./components/BottomMenu";
import NetworkStatusBanner from "./components/NetworkStatusBanner";
import UnclosedDateAlert from "./components/UnclosedDateAlert";
import DateAuditTrackerModal from "./components/DateAuditTrackerModal";
import DayStateBanner from "./components/DayStateBanner";
import DayOpenModal from "./components/DayOpenModal";
import DayCloseModal from "./components/DayCloseModal";
import { todayISO } from "./components/DatePicker";
import { initNeonSync } from "./lib/neonSync";
import { seedMemberDatabase } from "./lib/memberDb";
import { forceFreshReload, dismissUpdateToast, APP_VERSION } from "./lib/version";
import AuthScreen from "./components/AuthScreen";
import { setBranch } from "./lib/branchScope";
import { isDefaultBranch } from "./lib/branchScope";
import {
  getSession,
  currentUser,
  currentBranchName,
  signOut,
  ensureAuthSeed,
} from "./lib/auth";
import type { Session } from "./lib/auth";

export default function App() {
  /** 🔐 লগইন সেশন — না থাকলে সাইন ইন/সাইন আপ স্ক্রিন দেখাবে */
  const [session, setSession] = useState<Session | null>(() => getSession());
  const [currentTab, setCurrentTab] = useState<string>("receive");
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [dayOpenModalOpen, setDayOpenModalOpen] = useState(false);
  const [dayCloseModalOpen, setDayCloseModalOpen] = useState(false);
  const [updateReady, setUpdateReady] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    try {
      const saved = localStorage.getItem("app_master_date");
      if (saved && saved.includes("-")) return saved;
    } catch {}
    return todayISO();
  });

  const handleDateChange = (date: string) => {
    const d = date || todayISO();
    setSelectedDate(d);
    try {
      localStorage.setItem("app_master_date", d);
    } catch {}
  };

  // লগইন না করা পর্যন্ত ডেটা-সংশ্লিষ্ট কিছুই চালু হবে না
  useEffect(() => {
    ensureAuthSeed().catch(() => {});
  }, []);

  useEffect(() => {
    if (!session) return;
    // ☁️ Neon Cloud Database Synchronization — প্রতিটি অফিসের জন্য (আলাদা ক্লাউড স্কিমা)
    initNeonSync();

    // অ্যাপের সাথে বাঁধা মেম্বার ডাটাবেজ বসানো (৪,৭৬১ জন) — শুধু গোবরা শাখায়
    if (isDefaultBranch()) seedMemberDatabase();
  }, [session?.userId, session?.branchId]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("app_master_date");
      if (saved && saved.includes("-") && saved !== selectedDate) {
        setSelectedDate(saved);
      }
    } catch {}

    const handleOpenTracker = () => setTrackerOpen(true);
    const handleOpenDayModal = () => setDayOpenModalOpen(true);
    const handleOpenDayCloseModal = () => setDayCloseModalOpen(true);
    const handleNavigateTab = (e: Event) => {
      const tab = (e as CustomEvent).detail;
      if (typeof tab === "string" && tab) {
        setCurrentTab(tab);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("open-date-tracker", handleOpenTracker);
    window.addEventListener("open-day-open-modal", handleOpenDayModal);
    window.addEventListener("open-day-close-modal", handleOpenDayCloseModal);
    window.addEventListener("navigate-tab", handleNavigateTab as EventListener);

    const handleUpdate = () => setUpdateReady(true);
    window.addEventListener("app-update-available", handleUpdate);

    return () => {
      window.removeEventListener("open-date-tracker", handleOpenTracker);
      window.removeEventListener("open-day-open-modal", handleOpenDayModal);
      window.removeEventListener("open-day-close-modal", handleOpenDayCloseModal);
      window.removeEventListener("navigate-tab", handleNavigateTab as EventListener);
      window.removeEventListener("app-update-available", handleUpdate);
    };
  }, []);

  /* ───────── লগইন না করা থাকলে সাইন ইন / সাইন আপ স্ক্রিন ───────── */
  if (!session) {
    return (
      <AuthScreen
        onAuthed={(s) => {
          setBranch(s.branchId);
          setSession(s);
          // নতুন শাখার ডেটা ঠিকমতো পড়ার জন্য পুরো অ্যাপ একবার রিলোড হবে
          window.location.reload();
        }}
      />
    );
  }

  const me = currentUser();
  const branchLabel = currentBranchName();
  const handleLogout = () => {
    if (
      !window.confirm(
        "সাইন আউট করবেন? আবার ঢুকতে ইউজার আইডি (মোবাইল নম্বর) ও পাসওয়ার্ড লাগবে।"
      )
    )
      return;
    signOut();
    window.location.reload();
  };

  return (
    <div className="app-bg min-h-screen text-slate-900 font-sans antialiased pb-20 print:p-0 print:m-0 print:bg-white">
      {/* Main Container */}
      <main className="mx-auto max-w-6xl px-3 sm:px-4 pt-3 sm:pt-5 print:p-0 print:max-w-none">
        {/* 🏢 বর্তমান অফিস + ইউজার + লগআউট */}
        <div className="print:hidden mb-2 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-xs">
          <span className="flex items-center gap-1.5">
            <span>🏢</span>
            <span className="font-black text-indigo-800">{branchLabel}</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-slate-600">
              👤 {me ? `${me.name} • ${me.mobile}` : session.userId}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              title="সাইন আউট করুন"
              className="rounded-lg border border-rose-300 bg-rose-50 px-2 py-1 text-[10px] font-black text-rose-700 transition hover:bg-rose-100 cursor-pointer"
            >
              🚪 লগআউট
            </button>
          </span>
        </div>

        {/* Real-time Network & Offline/Online Sync Status Banner */}
        <NetworkStatusBanner />

        {/* Smart Alert for Unclosed prior working dates / accidental entries */}
        <div className="print:hidden">
          <UnclosedDateAlert
            selectedDate={selectedDate}
            onSelectDate={handleDateChange}
            onOpenTracker={() => setTrackerOpen(true)}
          />
        </div>

        {/* ⭐ SINGLE WORKING-DAY CONTROL PLACE (Day Open + Day Close together)
            ক্যাশবুক পেজে কোনো Open/Close কন্ট্রোল নেই — শুধু এখানেই।
            v1.4.72: 🎉 Entertainment সম্পূর্ণ স্বতন্ত্র পেজ — কোনো Day Open/Closed ব্যানারও দেখাবে না */}
        {currentTab !== "cashbook" && currentTab !== "entertainment" && (
          <div className="print:hidden">
            <DayStateBanner
              selectedDate={selectedDate}
              onOpenDayModal={() => setDayOpenModalOpen(true)}
            />
          </div>
        )}

        {/* Conditional Top Dashboard: visible only on Receive and Payment pages */}
        {(currentTab === "receive" || currentTab === "payment") && (
          <div className="print:hidden">
            <Dashboard selectedDate={selectedDate} />
          </div>
        )}

        {/* Tab Content */}
        {currentTab === "receive" && <ReceivePage selectedDate={selectedDate} />}
        {currentTab === "payment" && <PaymentPage selectedDate={selectedDate} />}
        {currentTab === "entertainment" && <EntertainmentPage />}
        {currentTab === "rebate" && <RebatePage />}
        {currentTab === "report" && <StaffReportManager selectedDate={selectedDate} />}
        {currentTab === "cashbook" && (
          <CashSheet selectedDate={selectedDate} setSelectedDate={handleDateChange} />
        )}
        {currentTab === "check" && <CheckPage selectedDate={selectedDate} />}
      </main>

      {/* 🔄 New-version available toast (hard cache-busting) */}
      {updateReady && (
        <div className="fixed bottom-20 left-1/2 z-[60] -translate-x-1/2 print:hidden">
          <div className="flex items-center gap-2.5 rounded-2xl bg-slate-900 px-4 py-2.5 text-white shadow-2xl border border-slate-700">
            <span className="text-lg">🔄</span>
            <div className="text-[11px] leading-tight">
              <div className="font-black">নতুন ভার্সন এসেছে</div>
              <div className="text-slate-300">
                সবচেয়ে নতুন আপডেট দেখতে রিফ্রেশ করুন (v{APP_VERSION})
              </div>
            </div>
            <button
              type="button"
              onClick={() => forceFreshReload()}
              className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-[11px] font-black transition cursor-pointer"
            >
              এখনই রিফ্রেশ
            </button>
            <button
              type="button"
              onClick={() => { dismissUpdateToast(); setUpdateReady(false); }}
              className="text-slate-400 hover:text-white text-sm font-bold px-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Date Audit Tracker Modal */}
      <DateAuditTrackerModal
        isOpen={trackerOpen}
        onClose={() => setTrackerOpen(false)}
        selectedDate={selectedDate}
        onSelectDate={handleDateChange}
      />

      {/* Day Open Modal */}
      <DayOpenModal
        isOpen={dayOpenModalOpen}
        onClose={() => setDayOpenModalOpen(false)}
        selectedDate={selectedDate}
      />

      {/* Day Close Modal (Single place — open/close together) */}
      <DayCloseModal
        isOpen={dayCloseModalOpen}
        onClose={() => setDayCloseModalOpen(false)}
        selectedDate={selectedDate}
      />

      {/* Bottom Menu Navigation */}
      <div className="print:hidden">
        <BottomMenu
          currentTab={currentTab}
          onTabChange={setCurrentTab}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          onOpenTracker={() => setTrackerOpen(true)}
        />
      </div>
    </div>
  );
}

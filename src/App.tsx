import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import ReceivePage from "./components/ReceivePage";
import PaymentPage from "./components/PaymentPage";
import RebatePage from "./components/RebatePage";
import StaffReportManager from "./components/StaffReportManager";
import CashSheet from "./components/CashSheet";
import BottomMenu from "./components/BottomMenu";
import NetworkStatusBanner from "./components/NetworkStatusBanner";
import UnclosedDateAlert from "./components/UnclosedDateAlert";
import DateAuditTrackerModal from "./components/DateAuditTrackerModal";
import DayStateBanner from "./components/DayStateBanner";
import DayOpenModal from "./components/DayOpenModal";
import { todayISO } from "./components/DatePicker";
import { initNeonSync } from "./lib/neonSync";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("receive");
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [dayOpenModalOpen, setDayOpenModalOpen] = useState(false);
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

  useEffect(() => {
    // Initialize Neon Cloud Database Synchronization
    initNeonSync();

    try {
      const saved = localStorage.getItem("app_master_date");
      if (saved && saved.includes("-") && saved !== selectedDate) {
        setSelectedDate(saved);
      }
    } catch {}

    const handleOpenTracker = () => setTrackerOpen(true);
    const handleOpenDayModal = () => setDayOpenModalOpen(true);

    window.addEventListener("open-date-tracker", handleOpenTracker);
    window.addEventListener("open-day-open-modal", handleOpenDayModal);

    return () => {
      window.removeEventListener("open-date-tracker", handleOpenTracker);
      window.removeEventListener("open-day-open-modal", handleOpenDayModal);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans antialiased pb-20 print:p-0 print:m-0 print:bg-white">
      {/* Main Container */}
      <main className="mx-auto max-w-6xl px-3 sm:px-4 pt-3 sm:pt-5 print:p-0 print:max-w-none">
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

        {/* Day Open / Day Closed State Banner */}
        <div className="print:hidden">
          <DayStateBanner
            selectedDate={selectedDate}
            onOpenDayModal={() => setDayOpenModalOpen(true)}
            onNavigateTab={setCurrentTab}
          />
        </div>

        {/* Conditional Top Dashboard: visible only on Receive and Payment pages */}
        {(currentTab === "receive" || currentTab === "payment") && (
          <div className="print:hidden">
            <Dashboard selectedDate={selectedDate} />
          </div>
        )}

        {/* Tab Content */}
        {currentTab === "receive" && <ReceivePage selectedDate={selectedDate} />}
        {currentTab === "payment" && <PaymentPage selectedDate={selectedDate} />}
        {currentTab === "rebate" && <RebatePage />}
        {currentTab === "report" && <StaffReportManager selectedDate={selectedDate} />}
        {currentTab === "cashbook" && (
          <CashSheet selectedDate={selectedDate} setSelectedDate={handleDateChange} />
        )}
      </main>

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

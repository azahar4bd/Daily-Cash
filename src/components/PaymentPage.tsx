import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import PaymentCategoryManager from "./PaymentCategoryManager";
import PaymentCategoryDropdown from "./PaymentCategoryDropdown";
import ScSettings from "./ScSettings";
import KallyanSettings from "./KallyanSettings";
import PaymentDenominationModal from "./PaymentDenominationModal";
import SubCategoryRulesModal from "./SubCategoryRulesModal";
import { fmt } from "./DenominationPopup";
import {
  getLocalTxs,
  saveTx,
  updateTx,
  deleteTx,
  getCategories,
  getScRates,
  getSubCategoryRules,
  getKallyanRule,
  isDayClosed,
  isDayOpen,
  getDayState,
  isIntermediateBlockedDate,
} from "@/lib/storage";
import {
  calcServiceCharge,
  calcKallyan,
  getKallyanForCategory,
  titleCase,
  filterAllowedSubCategories,
  getInstallments,
} from "@/lib/categories";
import type { Tx, Cat, ScRate, SubCategoryRule, KallyanRule } from "@/types";

type PaymentFormState = {
  id?: number;
  category: string;
  subCategory: string;
  amount: number;
  serviceCharge: number;
  description: string;
  txDate: string;
};

export default function PaymentPage({ selectedDate }: { selectedDate: string }) {
  const [rows, setRows] = useState<Tx[]>([]);
  const [lockPulse, setLockPulse] = useState(false);
  const flashLock = () => {
    setLockPulse(true);
    window.setTimeout(() => setLockPulse(false), 900);
  };
  const [disburseCats, setDisburseCats] = useState<Cat[]>([]);
  const [expenseCats, setExpenseCats] = useState<Cat[]>([]);
  const [manageOpen, setManageOpen] = useState(false);
  const [rates, setRates] = useState<ScRate[]>([]);
  const [ratesOpen, setRatesOpen] = useState(false);
  const [subCatRules, setSubCatRules] = useState<SubCategoryRule[]>([]);
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [paymentDenomOpen, setPaymentDenomOpen] = useState(false);
  const [kallyanRule, setKallyanRule] = useState<KallyanRule>(getKallyanRule());
  const [kallyanSettingsOpen, setKallyanSettingsOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [deleteTargetId, setDeleteTargetId] = useState<number | string | null>(null);

  const [form, setForm] = useState<PaymentFormState>({
    category: "",
    subCategory: "",
    amount: 0,
    serviceCharge: 0,
    description: "",
    txDate: selectedDate,
  });
  const [edit, setEdit] = useState<PaymentFormState | null>(null);
  const [msg, setMsg] = useState("");

  const loadData = () => {
    const all = getLocalTxs();
    setRows(all.filter((t) => t.type === "payment" && t.txDate === selectedDate));
    setDisburseCats(getCategories("disburse"));
    setExpenseCats(getCategories("expense"));
    setRates(getScRates());
    setSubCatRules(getSubCategoryRules());
    setKallyanRule(getKallyanRule());
  };

  useEffect(() => {
    loadData();
    setForm((f) => ({ ...f, txDate: selectedDate }));
    const handleKallyanChange = () => setKallyanRule(getKallyanRule());
    const onTx = () => loadData();
    window.addEventListener("kallyan-rule-changed", handleKallyanChange);
    window.addEventListener("tx-changed", onTx);
    return () => {
      window.removeEventListener("kallyan-rule-changed", handleKallyanChange);
      window.removeEventListener("tx-changed", onTx);
    };
  }, [selectedDate]);

  const isDisburseCategory = (catName: string) => {
    const norm = catName.trim().toLowerCase();
    return disburseCats.some((c) => c.name.toLowerCase() === norm);
  };

  const isCurrentDisburse = isDisburseCategory(form.category);
  const allowedSubCategories = filterAllowedSubCategories(form.category, subCatRules);

  const scAmount = isCurrentDisburse
    ? calcServiceCharge(form.amount, form.category, form.subCategory, rates)
    : 0;
  const curKallyanCfg = getKallyanForCategory(form.category, kallyanRule);
  const kallyanAmount = isCurrentDisburse ? calcKallyan(form.amount, form.category, kallyanRule) : 0;
  const totalAmount = form.amount + scAmount;
  const nInstallments = getInstallments(form.subCategory, subCatRules, form.category);
  const kistiAmount = isCurrentDisburse && nInstallments ? Math.round(totalAmount / nInstallments) : 0;

  const rateRow = rates.find(
    (r) =>
      r.category === form.category.trim().toLowerCase() &&
      r.subCategory === form.subCategory.trim().toLowerCase()
  );
  const currentRatePer100 = rateRow ? Number(rateRow.ratePer100) : 0;

  const handleSave = () => {
    if (isDayClosed(form.txDate)) {
      flashLock();
      return;
    }
    if (!isDayOpen(form.txDate)) {
      alert(`⚠️ এই তারিখের (${form.txDate}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`);
      window.dispatchEvent(new CustomEvent("open-day-open-modal"));
      return;
    }
    const blockCheck = isIntermediateBlockedDate(form.txDate, selectedDate);
    if (blockCheck.blocked) {
      alert(`⚠️ ${blockCheck.reason || "দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন এন্ট্রি করা যাবে না।"}`);
      return;
    }
    if (!form.category.trim()) return setMsg("Category required");
    if (!form.amount || form.amount <= 0) return setMsg("Amount must be greater than 0");

    saveTx({
      type: "payment",
      category: form.category.trim().toLowerCase(),
      subCategory: isCurrentDisburse ? form.subCategory : "",
      amount: String(form.amount),
      serviceCharge: String(scAmount),
      description: form.description || "",
      txDate: form.txDate,
    });

    setForm({
      category: "",
      subCategory: "",
      amount: 0,
      serviceCharge: 0,
      description: "",
      txDate: selectedDate,
    });
    setMsg("Payment saved successfully!");
    loadData();
  };

  const handleUpdate = () => {
    if (!edit || !edit.id) return;
    if (isDayClosed(edit.txDate)) {
      flashLock();
      return;
    }
    const blockCheck = isIntermediateBlockedDate(edit.txDate, selectedDate);
    if (blockCheck.blocked) {
      alert(`⚠️ ${blockCheck.reason || "দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো পরিবর্তন করা যাবে না।"}`);
      return;
    }
    const editIsDisb = isDisburseCategory(edit.category);
    const editSc = editIsDisb
      ? calcServiceCharge(edit.amount, edit.category, edit.subCategory, rates)
      : 0;

    updateTx({
      id: edit.id,
      type: "payment",
      category: edit.category.trim().toLowerCase(),
      subCategory: editIsDisb ? edit.subCategory : "",
      amount: String(edit.amount),
      serviceCharge: String(editSc),
      description: edit.description || "",
      txDate: edit.txDate,
    });

    setEdit(null);
    loadData();
  };

  const confirmDelete = () => {
    if (deleteTargetId !== null) {
      const target = rows.find((r) => r.id === deleteTargetId);
      if (target && isDayClosed(target.txDate)) {
        flashLock();
        setDeleteTargetId(null);
        return;
      }
      deleteTx(deleteTargetId);
      setDeleteTargetId(null);
      loadData();
    }
  };

  const displayedRows =
    filterCategory === "all"
      ? rows
      : rows.filter((r) => r.category.toLowerCase().trim() === filterCategory.toLowerCase().trim());

  const displayedSum = displayedRows.reduce((s, r) => s + Number(r.amount), 0);
  const totalExpenseSum = rows.reduce((s, r) => s + Number(r.amount), 0);

  const uniqueCategories: string[] = Array.from(
    new Set(rows.map((r) => r.category.toLowerCase().trim()).filter(Boolean))
  );

  return (
    <div className="space-y-6">
      {/* Payment Entry Card (Accessible at top) */}
      <div
        id="payment-form-card"
        className="rounded-2xl border-t-4 border-red-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200 transition-all"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📤</span>
            <span>Payment Entry</span>
            {isDayClosed(form.txDate) && (
              <span
                className={`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${
                  lockPulse ? "lock-pulse" : ""
                }`}
                title="দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে"
              >
                🔒 Day Closed
              </span>
            )}
          </h1>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
            {form.txDate}
          </span>
        </div>

        {!isDayClosed(form.txDate) && isIntermediateBlockedDate(form.txDate, selectedDate).blocked && (
          <div className="mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs">
            <span className="text-base shrink-0">🚫</span>
            <div>
              <span className="block font-black text-rose-950">এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)</span>
              <span className="text-xs text-rose-800 font-normal mt-0.5 block">
                {isIntermediateBlockedDate(form.txDate, selectedDate).reason}
              </span>
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {/* Date */}
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Date</label>
            <DatePicker
              value={form.txDate}
              onChange={(v) => setForm({ ...form, txDate: v })}
              className="px-3 py-2 text-sm"
            />
          </div>

          {/* Category with Scrollable Box */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Category</label>
              <button
                type="button"
                onClick={() => setManageOpen(true)}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                ⚙ Manage
              </button>
            </div>
            <PaymentCategoryDropdown
              value={form.category}
              disabled={isDayClosed(form.txDate)}
              onChange={(cat) => setForm({ ...form, category: cat, subCategory: "" })}
              disburseCats={disburseCats}
              expenseCats={expenseCats}
              onManageClick={() => setManageOpen(true)}
            />
          </div>

          {/* Sub Category */}
          {isCurrentDisburse && (
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Sub Category</label>
                <button
                  type="button"
                  onClick={() => setRulesModalOpen(true)}
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  ⚙ Rules
                </button>
              </div>
              <select
                value={form.subCategory}
                disabled={isDayClosed(form.txDate)}
                onChange={(e) => setForm({ ...form, subCategory: e.target.value })}
                className={`w-full rounded-lg border px-3 py-2 text-sm font-bold focus:outline-none ${
                  isDayClosed(form.txDate)
                    ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                    : "border-slate-300 bg-white text-slate-800 focus:border-blue-500 cursor-pointer"
                }`}
              >
                <option value="">-- Select Sub Category --</option>
                {allowedSubCategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Amount */}
          <div className={!isCurrentDisburse ? "md:col-span-1" : ""}>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">
                {isCurrentDisburse ? "Disburse Amount" : "Expense Amount"}
              </label>
              <button
                type="button"
                disabled={isDayClosed(form.txDate)}
                onClick={() => {
                  if (isDayClosed(form.txDate)) {
                    flashLock();
                    return;
                  }
                  setPaymentDenomOpen(true);
                }}
                className="flex items-center gap-1 rounded-lg bg-amber-500 hover:bg-amber-600 px-2.5 py-1 text-xs font-bold text-slate-950 shadow-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                💳 Denomination
              </button>
            </div>
            <input
              type="number"
              min={0}
              step="1"
              disabled={isDayClosed(form.txDate)}
              value={form.amount || ""}
              placeholder=""
              onChange={(e) => setForm({ ...form, amount: Math.round(Number(e.target.value) || 0) })}
              className={`w-full rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold focus:outline-none ${
                isDayClosed(form.txDate)
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : "border-slate-300 bg-yellow-50 focus:border-blue-500"
              }`}
            />
          </div>

          {/* Description Field (Amount এর পাশে ২য় ঘর) */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-bold text-slate-700">Description</label>
            <input
              type="text"
              disabled={isDayClosed(form.txDate)}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder=""
              autoComplete="off"
              className={`w-full rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none ${
                isDayClosed(form.txDate)
                  ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
                  : "border-slate-300 bg-white focus:border-blue-500"
              }`}
            />
          </div>

          {/* Save / Reset */}
          <div className="flex gap-2.5 md:col-span-2 pt-1">
            <button
              onClick={handleSave}
              disabled={isDayClosed(form.txDate) || !isDayOpen(form.txDate) || isIntermediateBlockedDate(form.txDate, selectedDate).blocked}
              className="min-h-[44px] rounded-xl bg-red-600 px-6 py-2.5 font-bold text-sm text-white shadow hover:bg-red-700 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDayClosed(form.txDate)
                ? "🔒 দিন সমাপ্ত (লকড)"
                : isIntermediateBlockedDate(form.txDate, selectedDate).blocked
                ? "🚫 তারিখ ব্লকড"
                : !isDayOpen(form.txDate)
                ? "☀️ দিন শুরু (Day Open) করুন"
                : "Save Payment"}
            </button>
            <button
              onClick={() => {
                setForm({
                  category: "",
                  subCategory: "",
                  amount: 0,
                  serviceCharge: 0,
                  description: "",
                  txDate: selectedDate,
                });
                setMsg("");
              }}
              disabled={isDayClosed(form.txDate) || !isDayOpen(form.txDate) || isIntermediateBlockedDate(form.txDate, selectedDate).blocked}
              className="min-h-[44px] rounded-xl bg-slate-500 px-6 py-2.5 font-bold text-sm text-white hover:bg-slate-600 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset
            </button>
          </div>

          {/* Summary Cards */}
          {isCurrentDisburse ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:col-span-2">
              <div className="rounded-xl bg-amber-500 p-2.5 text-white shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>SC {currentRatePer100 ? `(${currentRatePer100}/100)` : ""}</span>
                  <button
                    type="button"
                    onClick={() => setRatesOpen(true)}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs cursor-pointer"
                  >
                    ⚙
                  </button>
                </div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-right">{fmt(scAmount)}</div>
              </div>
              <div className="rounded-xl bg-violet-600 p-2.5 text-white shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>Kisti {nInstallments ? `(${nInstallments})` : ""}</span>
                  <button
                    type="button"
                    onClick={() => setRulesModalOpen(true)}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs cursor-pointer hover:bg-white/40 active:scale-95 transition"
                    title="কিস্তি রুল সেটিংস (Kisti / Installment Rules)"
                  >
                    ⚙
                  </button>
                </div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-right">{fmt(kistiAmount)}</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 p-2.5 text-white shadow-sm ring-1 ring-teal-400/40">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1 truncate pr-1">
                    <span>🤝</span>
                    <span>Kallyan Fund</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setKallyanSettingsOpen(true)}
                    className="flex items-center gap-1 rounded-md bg-white/20 hover:bg-white/30 px-1.5 py-0.5 text-[10px] font-bold text-white transition cursor-pointer"
                    title="Change Kallyan Fund Settings"
                  >
                    <span>⚙️</span>
                  </button>
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-[10px] font-semibold text-teal-100 truncate">
                    {curKallyanCfg.percent}% + {curKallyanCfg.fixed}৳
                  </span>
                  <span className="font-mono text-base sm:text-lg font-black text-right">
                    {fmt(kallyanAmount)}
                  </span>
                </div>
              </div>
              <div className="rounded-xl bg-blue-700 p-2.5 text-white shadow-xs">
                <div className="text-xs font-semibold">Total (Amount + SC)</div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-right">{fmt(totalAmount)}</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:col-span-2">
              <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Total Expense</span>
                <span className="font-mono text-xl font-black">{fmt(form.amount || 0)}</span>
              </div>
            </div>
          )}
        </div>
        {msg && <p className="mt-2 text-xs font-bold text-emerald-700">{msg}</p>}
      </div>

      {/* Saved Table Card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50">
          <div className="font-bold text-slate-800 text-sm sm:text-base">
            Saved Payment Entries ({displayedRows.length}/{rows.length})
          </div>

          {/* Category-wise Filtering Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-slate-600">Category Filter:</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none cursor-pointer"
            >
              <option value="all">All Categories ({rows.length})</option>
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {titleCase(cat)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Scrollable Table Container */}
        <div className="overflow-x-auto max-h-[60vh] sm:max-h-[68vh] overflow-y-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead className="sticky top-0 bg-slate-800 text-left text-white z-10">
              <tr>
                <th className="px-3.5 py-2.5">#</th>
                <th className="px-3.5 py-2.5">Category</th>
                <th className="px-3.5 py-2.5">Sub Cat.</th>
                <th className="px-3.5 py-2.5">Description</th>
                <th className="px-3.5 py-2.5 text-right">Disburse/Expense</th>
                <th className="px-3.5 py-2.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedRows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-slate-400">
                    {filterCategory === "all"
                      ? `No payment entries on ${selectedDate}`
                      : `No entries for category "${titleCase(filterCategory)}"`}
                  </td>
                </tr>
              ) : (
                displayedRows.map((r, i) => (
                  <tr key={r.id} className="border-b hover:bg-slate-50">
                    <td className="px-3.5 py-2 text-slate-500 font-mono">{i + 1}</td>
                    <td className="px-3.5 py-2 font-bold text-slate-800">{titleCase(r.category)}</td>
                    <td className="px-3.5 py-2 text-slate-600 text-xs">{r.subCategory || "-"}</td>
                    <td className="px-3.5 py-2 text-slate-600 text-xs">{r.description || "-"}</td>
                    <td className="px-3.5 py-2 text-right font-mono font-black text-slate-900">
                      {fmt(r.amount)}
                    </td>
                    <td className="px-3.5 py-2 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          disabled={isDayClosed(r.txDate)}
                          onClick={() => {
                            if (isDayClosed(r.txDate)) {
                              flashLock();
                              return;
                            }
                            setEdit({
                              id: r.id,
                              category: r.category,
                              subCategory: r.subCategory ?? "",
                              amount: Number(r.amount),
                              serviceCharge: Number(r.serviceCharge || 0),
                              description: r.description ?? "",
                              txDate: r.txDate,
                            });
                          }}
                          className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${
                            isDayClosed(r.txDate)
                              ? "bg-slate-400 cursor-not-allowed opacity-50"
                              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                          }`}
                          title={isDayClosed(r.txDate) ? "দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন" : "Edit"}
                        >
                          {isDayClosed(r.txDate) ? "🔒 Edit" : "Edit"}
                        </button>
                        <button
                          type="button"
                          disabled={isDayClosed(r.txDate)}
                          onClick={() => {
                            if (isDayClosed(r.txDate)) {
                              flashLock();
                              return;
                            }
                            setDeleteTargetId(r.id);
                          }}
                          className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${
                            isDayClosed(r.txDate)
                              ? "bg-slate-400 cursor-not-allowed opacity-50"
                              : "bg-rose-600 hover:bg-rose-700 cursor-pointer"
                          }`}
                          title={isDayClosed(r.txDate) ? "দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন" : "Delete"}
                        >
                          {isDayClosed(r.txDate) ? "🔒 Del" : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {rows.length > 0 && (
              <tfoot className="sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-300 z-10 shadow-inner">
                <tr>
                  <td colSpan={4} className="px-3.5 py-2.5 text-right font-bold text-slate-800">
                    {filterCategory === "all" ? "Total Payment" : `Subtotal (${titleCase(filterCategory)})`}
                  </td>
                  <td className="px-3.5 py-2.5 text-right font-mono font-black text-slate-900">
                    {fmt(filterCategory === "all" ? totalExpenseSum : displayedSum)}
                  </td>
                  <td />
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>

      {/* Mistouch Prevention - Delete Confirmation Modal */}
      {deleteTargetId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="text-rose-600 text-lg">⚠️</span>
              <span>Confirm Delete</span>
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Are you sure you want to permanently delete this payment entry? This action cannot be undone.
            </p>
            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteTargetId(null)}
                className="min-h-[44px] rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-300 active:scale-95 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="min-h-[44px] rounded-xl bg-rose-600 px-5 py-2 text-sm font-bold text-white hover:bg-rose-700 active:scale-95 transition"
              >
                Delete Entry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal (with restored Description field) */}
      {edit && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Edit Payment #{edit.id}</h2>
              <button
                onClick={() => setEdit(null)}
                className="min-h-[36px] min-w-[36px] text-2xl text-slate-400 hover:text-rose-600 flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Date</label>
                <DatePicker
                  value={edit.txDate}
                  onChange={(v) => setEdit({ ...edit, txDate: v })}
                  className="px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Category</label>
                <PaymentCategoryDropdown
                  value={edit.category}
                  onChange={(cat) => setEdit({ ...edit, category: cat, subCategory: "" })}
                  disburseCats={disburseCats}
                  expenseCats={expenseCats}
                  onManageClick={() => setManageOpen(true)}
                />
              </div>
              {isDisburseCategory(edit.category) && (
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">Sub Category</label>
                  <select
                    value={edit.subCategory || ""}
                    onChange={(e) => setEdit({ ...edit, subCategory: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="">-- Select Sub Category --</option>
                    {filterAllowedSubCategories(edit.category, subCatRules).map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="md:col-span-1">
                <label className="mb-1 block text-xs font-bold text-slate-700">Disburse/Expense</label>
                <input
                  type="number"
                  placeholder=""
                  value={edit.amount || ""}
                  onChange={(e) => setEdit({ ...edit, amount: Math.round(Number(e.target.value) || 0) })}
                  className="w-full rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold"
                />
              </div>
              <div className="md:col-span-1">
                <label className="mb-1 block text-xs font-bold text-slate-700">Description</label>
                <input
                  type="text"
                  value={edit.description}
                  onChange={(e) => setEdit({ ...edit, description: e.target.value })}
                  placeholder=""
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
              </div>
              <div className="flex justify-end gap-3 md:col-span-2 border-t pt-3 mt-2">
                <button
                  onClick={() => setEdit(null)}
                  className="min-h-[44px] rounded-xl bg-slate-200 px-5 py-2 font-bold text-sm text-slate-700 hover:bg-slate-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="min-h-[44px] rounded-xl bg-red-600 px-6 py-2 font-bold text-sm text-white hover:bg-red-700 transition"
                >
                  Update Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {manageOpen && (
        <PaymentCategoryManager
          disburseCats={disburseCats}
          expenseCats={expenseCats}
          onChanged={loadData}
          onClose={() => setManageOpen(false)}
        />
      )}

      {rulesModalOpen && (
        <SubCategoryRulesModal
          open={rulesModalOpen}
          onClose={() => setRulesModalOpen(false)}
          rules={subCatRules}
          disburseCategories={disburseCats.map((c) => c.name)}
          onRulesChanged={loadData}
          currentCategory={form.category}
          currentLoanAmount={form.amount}
        />
      )}

      {ratesOpen && (
        <ScSettings
          rates={rates}
          categories={disburseCats.map((c) => c.name)}
          onChanged={loadData}
          onClose={() => setRatesOpen(false)}
        />
      )}

      {kallyanSettingsOpen && (
        <KallyanSettings
          rule={kallyanRule}
          disburseCategories={disburseCats.map((c) => c.name)}
          onChanged={loadData}
          onClose={() => setKallyanSettingsOpen(false)}
        />
      )}

      <PaymentDenominationModal
        open={paymentDenomOpen}
        onClose={() => setPaymentDenomOpen(false)}
        targetAmount={edit ? edit.amount || 0 : form.amount || 0}
        date={edit ? edit.txDate : form.txDate || selectedDate}
        onApplyAmount={(calculatedAmt) => {
          if (edit) setEdit({ ...edit, amount: Math.round(calculatedAmt) });
          else setForm({ ...form, amount: Math.round(calculatedAmt) });
        }}
      />
    </div>
  );
}

import { useEffect, useState, useMemo } from "react";
import type { RebateRateItem } from "@/types";
import {
  getRebateRates,
  saveRebateRate,
  saveAllRebateRates,
  updateRebateRateRow,
  renameRebateProduct,
  renameRebateDuration,
  deleteRebateRate,
  resetRebateRatesToDefault,
} from "@/lib/storage";

const STANDARD_DURATIONS = ["Week", "Month", "1.5 Year", "2 Year"];
const PAGE_SIZE_OPTIONS = [20, 50, 100, "All"] as const;

type EditTab = "rate" | "item" | "category_rename" | "duration_rename";

export default function RebateRateManager({
  onClose,
  onUpdated,
}: {
  onClose: () => void;
  onUpdated?: () => void;
}) {
  const [rates, setRates] = useState<RebateRateItem[]>([]);
  const [filterProduct, setFilterProduct] = useState("");
  const [filterDuration, setFilterDuration] = useState("");
  const [search, setSearch] = useState("");

  // Pagination state
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number | "All">(25);

  // Unified Edit Panel state
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [editTab, setEditTab] = useState<EditTab>("rate");

  // Tab 1: Add New Rate
  const [newProduct, setNewProduct] = useState("");
  const [newDuration, setNewDuration] = useState("Week");
  const [newKisti, setNewKisti] = useState("");
  const [newRate, setNewRate] = useState("");

  // Tab 2: Add New Item / Product
  const [newItemName, setNewItemName] = useState("");
  const [newItemDuration, setNewItemDuration] = useState("Week");
  const [newItemTotalKisti, setNewItemTotalKisti] = useState("46");
  const [newItemBaseRate, setNewItemBaseRate] = useState("2.50");

  // Tab 3: Category / Product Rename
  const [renameFromProduct, setRenameFromProduct] = useState("");
  const [renameToProduct, setRenameToProduct] = useState("");

  // Tab 4: Duration Rename
  const [renameFromDuration, setRenameFromDuration] = useState("");
  const [renameToDuration, setRenameToDuration] = useState("");

  // Dedicated Edit/Modify Rate Modal State
  const [editModalItem, setEditModalItem] = useState<RebateRateItem | null>(null);
  const [modalProduct, setModalProduct] = useState("");
  const [modalDuration, setModalDuration] = useState("Week");
  const [modalKisti, setModalKisti] = useState("1");
  const [modalRate, setModalRate] = useState("0");

  // In-App Confirmation state
  const [pendingDelete, setPendingDelete] = useState<RebateRateItem | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const [msg, setMsg] = useState("");

  const load = () => {
    const data = getRebateRates();
    setRates(data);
  };

  useEffect(() => {
    load();
  }, []);

  const products = useMemo(
    () => Array.from(new Set(rates.map((r) => r.product))).sort(),
    [rates]
  );
  const durations = useMemo(
    () => Array.from(new Set(rates.map((r) => r.duration))).sort(),
    [rates]
  );

  // Keep dropdowns synchronized
  useEffect(() => {
    if (products.length > 0 && !renameFromProduct) {
      setRenameFromProduct(products[0]);
    }
    if (products.length > 0 && !newProduct) {
      setNewProduct(products[0]);
    }
  }, [products, renameFromProduct, newProduct]);

  useEffect(() => {
    if (durations.length > 0 && !renameFromDuration) {
      setRenameFromDuration(durations[0]);
    }
  }, [durations, renameFromDuration]);

  // Reset to page 1 on filter or search change
  useEffect(() => {
    setPage(1);
  }, [filterProduct, filterDuration, search, pageSize]);

  const filtered = useMemo(() => {
    return rates.filter((r) => {
      if (filterProduct && r.product !== filterProduct) return false;
      if (filterDuration && r.duration !== filterDuration) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !r.product.toLowerCase().includes(q) &&
          !r.duration.toLowerCase().includes(q) &&
          !String(r.kisti).includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [rates, filterProduct, filterDuration, search]);

  const totalItems = filtered.length;
  const totalPages = pageSize === "All" ? 1 : Math.max(1, Math.ceil(totalItems / pageSize));

  const paginatedList = useMemo(() => {
    if (pageSize === "All") return filtered;
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  // Handler: Add Single Rate
  const handleAddRate = () => {
    if (!newProduct.trim() || !newDuration.trim() || !newKisti) {
      setMsg("প্রোডাক্ট, ডিউরেশন এবং কিস্তি নম্বর প্রদান করা আবশ্যক!");
      return;
    }
    const p = newProduct.trim();
    const d = newDuration.trim();
    const k = Number(newKisti);
    saveRebateRate({
      product: p,
      duration: d,
      kisti: k,
      helper: `${p}|${d}|${k}`,
      rate: String(Number(newRate) || 0),
    });
    setMsg(`✓ "${p}" (${d}) কিস্তি ${k} এর রেট ${Number(newRate) || 0} Tk সফলভাবে সংরক্ষিত হয়েছে!`);
    setNewKisti("");
    setNewRate("");
    load();
    onUpdated?.();
  };

  // Handler: Add New Item / Product
  const handleAddNewItem = () => {
    const p = newItemName.trim();
    const d = newItemDuration.trim();
    const totalK = parseInt(newItemTotalKisti, 10) || 1;
    const baseR = parseFloat(newItemBaseRate) || 2.5;

    if (!p) {
      setMsg("নতুন প্রোডাক্টের নাম প্রদান করা আবশ্যক!");
      return;
    }

    const currentList = getRebateRates();
    const now = Date.now();
    const newRows: RebateRateItem[] = [];

    for (let k = 1; k <= totalK; k++) {
      const calcRate = k <= 2 && d.toLowerCase() === "week" ? "0.00" : (k * baseR).toFixed(2);
      newRows.push({
        id: now + k,
        product: p,
        duration: d,
        kisti: k,
        helper: `${p}|${d}|${k}`,
        rate: calcRate,
      });
    }

    saveAllRebateRates([...currentList, ...newRows]);
    setMsg(
      `✓ নতুন প্রোডাক্ট "${p}" (${d}, ১ থেকে ${totalK} কিস্তি) মোট ${newRows.length}টি রো সহ ডাটাবেজে তৈরি হয়েছে!`
    );
    setNewItemName("");
    load();
    onUpdated?.();
  };

  // Handler: Bulk Category / Product Rename
  const handleBulkRenameProduct = () => {
    if (!renameFromProduct.trim()) {
      setMsg("পরিবর্তনের জন্য প্রোডাক্ট সিলেক্ট করুন");
      return;
    }
    if (!renameToProduct.trim()) {
      setMsg("নতুন প্রোডাক্টের নাম লিখুন");
      return;
    }
    const count = renameRebateProduct(renameFromProduct, renameToProduct);
    if (count > 0) {
      setMsg(
        `✓ প্রোডাক্ট "${renameFromProduct}" সফলভাবে "${renameToProduct.trim()}" নামে ${count}টি এন্ট্রিতে পরিবর্তিত হয়েছে!`
      );
      setRenameToProduct("");
      setRenameFromProduct(renameToProduct.trim());
      load();
      onUpdated?.();
    } else {
      setMsg("কোনো পরিবর্তন করা হয়নি বা নাম একই ছিল।");
    }
  };

  // Handler: Bulk Duration Rename
  const handleBulkRenameDuration = () => {
    if (!renameFromDuration.trim()) {
      setMsg("পরিবর্তনের জন্য ডিউরেশন সিলেক্ট করুন");
      return;
    }
    if (!renameToDuration.trim()) {
      setMsg("নতুন ডিউরেশনের নাম লিখুন");
      return;
    }
    const count = renameRebateDuration(renameFromDuration, renameToDuration);
    if (count > 0) {
      setMsg(
        `✓ ডিউরেশন "${renameFromDuration}" সফলভাবে "${renameToDuration.trim()}" নামে ${count}টি এন্ট্রিতে পরিবর্তিত হয়েছে!`
      );
      setRenameToDuration("");
      setRenameFromDuration(renameToDuration.trim());
      load();
      onUpdated?.();
    } else {
      setMsg("কোনো পরিবর্তন করা হয়নি বা নাম একই ছিল।");
    }
  };

  // Handler: Open Edit/Modify Modal for a row
  const handleOpenEditModal = (r: RebateRateItem) => {
    setEditModalItem(r);
    setModalProduct(r.product);
    setModalDuration(r.duration);
    setModalKisti(String(r.kisti));
    setModalRate(String(r.rate));
    setMsg("");
  };

  // Handler: Save Row Edit from Modal
  const handleSaveModalEdit = () => {
    if (!editModalItem) return;
    if (!modalProduct.trim() || !modalDuration.trim() || !modalKisti) {
      setMsg("প্রোডাক্ট, ডিউরেশন এবং কিস্তি নম্বর খালি রাখা যাবে না!");
      return;
    }
    updateRebateRateRow(editModalItem.id, {
      product: modalProduct.trim(),
      duration: modalDuration.trim(),
      kisti: Number(modalKisti) || 0,
      rate: String(Number(modalRate) || 0),
    });
    setMsg(`✓ রেট আপডেট হয়েছে: ${modalProduct.trim()} | ${modalDuration.trim()} | কিস্তি ${modalKisti} (${Number(modalRate) || 0} Tk)`);
    setEditModalItem(null);
    load();
    onUpdated?.();
  };

  // Handler: Delete Rate Execution
  const executeDeleteRate = () => {
    if (!pendingDelete) return;
    const itemToDelete = pendingDelete;
    const ok = deleteRebateRate(itemToDelete);
    setPendingDelete(null);
    if (ok) {
      setMsg(`✓ "${itemToDelete.product}" কিস্তি ${itemToDelete.kisti} রেট সফলভাবে মুছে ফেলা হয়েছে!`);
    } else {
      setMsg("রেটটি পাওয়া যায়নি বা আগেই মুছে ফেলা হয়েছে।");
    }
    load();
    onUpdated?.();
  };

  // Handler: Reset Defaults Execution
  const executeResetDefaults = () => {
    resetRebateRatesToDefault();
    load();
    setShowResetConfirm(false);
    setMsg("✓ ডাটাবেজ সফলভাবে প্রাথমিক আদি অবস্থায় রিসেট করা হয়েছে!");
    onUpdated?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="flex h-full sm:h-auto sm:max-h-[95vh] w-full max-w-5xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/30 text-lg shadow-inner">
                📋
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                  <span>Rebate Rate Database</span>
                  <span className="rounded-md bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-200 ring-1 ring-indigo-400/30">
                    ম্যানেজার
                  </span>
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  মোট <b className="text-amber-400 font-mono text-sm">{rates.length}</b> টি রেট ডাটাবেজে সংরক্ষিত
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="sm:hidden text-2xl text-slate-400 hover:text-white p-1 leading-none cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {/* Primary Action Button: "এডিট ও কনফিগারেশন" */}
            <button
              type="button"
              onClick={() => setShowEditPanel(!showEditPanel)}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-black transition cursor-pointer flex items-center gap-1.5 shadow-sm ${
                showEditPanel
                  ? "bg-amber-400 text-slate-950 ring-2 ring-amber-300"
                  : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30"
              }`}
            >
              <span>{showEditPanel ? "✕" : "⚙️"}</span>
              <span>{showEditPanel ? "প্যানেল বন্ধ করুন" : "ডাটাবেজ এডিট ও ফর্ম"}</span>
            </button>

            <button
              onClick={onClose}
              className="hidden sm:block text-2xl text-slate-400 hover:text-white transition cursor-pointer px-1.5 leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Global Notification Banner */}
        {msg && (
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 flex items-center justify-between text-xs font-bold text-amber-900 shrink-0">
            <span>💡 {msg}</span>
            <button
              onClick={() => setMsg("")}
              className="text-amber-700 hover:text-amber-950 text-sm px-1.5 font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* BEAUTIFUL UNIFIED DATABASE EDIT & MODIFY PANEL                            */}
        {/* ========================================================================= */}
        {showEditPanel && (
          <div className="border-b bg-linear-to-b from-slate-50 to-indigo-50/30 p-3 sm:p-5 border-slate-200 shrink-0 shadow-inner space-y-3.5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                  ডাটাবেজ এডিট ও পরিবর্তন ফর্ম
                </span>
              </div>
              <button
                onClick={() => setShowEditPanel(false)}
                className="text-xs text-slate-500 hover:text-slate-800 font-bold cursor-pointer flex items-center gap-1"
              >
                <span>লুকান</span>
                <span>✕</span>
              </button>
            </div>

            {/* Segmented Control Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-200/80 rounded-xl">
              <button
                type="button"
                onClick={() => setEditTab("rate")}
                className={`py-2 px-3 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  editTab === "rate"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>➕</span>
                <span>একক রেট যোগ</span>
              </button>

              <button
                type="button"
                onClick={() => setEditTab("item")}
                className={`py-2 px-3 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  editTab === "item"
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>📦</span>
                <span>নতুন প্রোডাক্ট তৈরি</span>
              </button>

              <button
                type="button"
                onClick={() => setEditTab("category_rename")}
                className={`py-2 px-3 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  editTab === "category_rename"
                    ? "bg-white text-amber-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>🏷️</span>
                <span>প্রোডাক্ট রিনেম</span>
              </button>

              <button
                type="button"
                onClick={() => setEditTab("duration_rename")}
                className={`py-2 px-3 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  editTab === "duration_rename"
                    ? "bg-white text-amber-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>⏱️</span>
                <span>ডিউরেশন রিনেম</span>
              </button>
            </div>

            {/* TAB 1: একক রেট যোগ / পরিবর্তন ফর্ম */}
            {editTab === "rate" && (
              <div className="rounded-2xl border border-indigo-200 bg-white p-4 shadow-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-indigo-100 pb-2">
                  <span className="text-xs font-black text-indigo-950 flex items-center gap-1.5">
                    <span>✏️</span> নির্দিষ্ট প্রোডাক্ট ও কিস্তির রেট নির্ধারণ করুন:
                  </span>
                  {/* Quick Product Chips */}
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[10px] text-slate-400 font-bold">কুইক প্রোডাক্ট:</span>
                    {products.slice(0, 5).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setNewProduct(p)}
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold transition cursor-pointer ${
                          newProduct === p
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
                  {/* Product */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      প্রোডাক্ট (Product) *
                    </label>
                    <input
                      list="edit-panel-products-list"
                      placeholder="e.g. Jagoron"
                      value={newProduct}
                      onChange={(e) => setNewProduct(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none bg-slate-50/50"
                    />
                    <datalist id="edit-panel-products-list">
                      {products.map((p) => (
                        <option key={p} value={p} />
                      ))}
                    </datalist>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      ডিউরেশন (Duration) *
                    </label>
                    <select
                      value={newDuration}
                      onChange={(e) => setNewDuration(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none bg-slate-50/50 cursor-pointer"
                    >
                      {STANDARD_DURATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Kisti */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-bold text-slate-700">
                        অগ্রিম কিস্তি (Kisti) *
                      </label>
                      <span className="text-[10px] text-slate-400 font-mono">1, 2, 5...</span>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setNewKisti(String(Math.max(1, (Number(newKisti) || 1) - 1)))}
                        className="px-2.5 py-2 bg-slate-100 hover:bg-slate-200 border border-r-0 border-slate-300 rounded-l-xl text-xs font-bold text-slate-700 cursor-pointer"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={1}
                        placeholder="কিস্তি নং"
                        value={newKisti}
                        onChange={(e) => setNewKisti(e.target.value)}
                        className="w-full border-y border-slate-300 px-2 py-2 text-center text-xs sm:text-sm font-mono font-black text-slate-900 focus:outline-none bg-slate-50/50"
                      />
                      <button
                        type="button"
                        onClick={() => setNewKisti(String((Number(newKisti) || 0) + 1))}
                        className="px-2.5 py-2 bg-slate-100 hover:bg-slate-200 border border-l-0 border-slate-300 rounded-r-xl text-xs font-bold text-slate-700 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-bold text-slate-700">
                        রেট (Rate Tk) *
                      </label>
                      <span className="text-[10px] text-indigo-600 font-bold">প্রতি হাজারে</span>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={newRate}
                        onChange={(e) => setNewRate(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-right font-mono text-sm font-black text-indigo-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none bg-slate-50/50"
                      />
                      <span className="absolute left-2.5 top-2 text-xs font-bold text-slate-400">
                        ৳
                      </span>
                    </div>
                    {/* Quick rate buttons */}
                    <div className="flex gap-1 mt-1">
                      {[0.5, 1.0, 2.5, 5.0].map((rv) => (
                        <button
                          key={rv}
                          type="button"
                          onClick={() => setNewRate(String(rv))}
                          className="flex-1 rounded py-0.5 text-[9px] font-mono font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 cursor-pointer"
                        >
                          {rv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="button"
                      onClick={handleAddRate}
                      className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 py-2.5 text-xs sm:text-sm font-black text-white shadow-md shadow-indigo-600/20 transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>✓</span>
                      <span>রেট সেভ করুন</span>
                    </button>
                  </div>
                </div>

                {/* Real-time Calculation Impact Preview */}
                {newRate && (
                  <div className="flex items-center justify-between rounded-xl bg-indigo-50/70 border border-indigo-200/80 px-3 py-1.5 text-xs text-indigo-950">
                    <span className="font-semibold">
                      💡 প্রভাব: ৫০,০০০ টাকা লোনে এই রেটে ({Number(newRate) || 0} Tk) রিবেট হবে:
                    </span>
                    <span className="font-mono font-black text-sm text-indigo-900">
                      {Math.round(50 * (Number(newRate) || 0))} ৳
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: নতুন আইটেম / সম্পূর্ণ প্রোডাক্ট তৈরি */}
            {editTab === "item" && (
              <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-xs space-y-3">
                <div className="border-b border-emerald-100 pb-2">
                  <span className="text-xs font-black text-emerald-950 flex items-center gap-1.5">
                    <span>📦</span> নতুন প্রোডাক্ট এবং কিস্তির রো এক ক্লিকে স্বয়ংক্রিয় তৈরি করুন:
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    প্রোডাক্টের নাম, মোট কিস্তি সংখ্যা এবং বেইজ রেট দিলে সবগুলো কিস্তির রেট রো একসাথে জেনারেট হবে।
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      প্রোডাক্ট নাম (New Item Name) *
                    </label>
                    <input
                      type="text"
                      placeholder="যেমন: Jagoron Special বা Agro Micro"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      ডিউরেশন (Duration) *
                    </label>
                    <select
                      value={newItemDuration}
                      onChange={(e) => setNewItemDuration(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-slate-50/50 cursor-pointer"
                    >
                      <option value="Week">Week (সাপ্তাহিক - ৪৬ কিস্তি)</option>
                      <option value="Month">Month (মাসিক - ১২ কিস্তি)</option>
                      <option value="1.5 Year">1.5 Year (দেড় বছর - ১৮ কিস্তি)</option>
                      <option value="2 Year">2 Year (দুই বছর - ২৪ কিস্তি)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      মোট কিস্তি সংখ্যা (Total Kisti) *
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 46"
                      value={newItemTotalKisti}
                      onChange={(e) => setNewItemTotalKisti(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs sm:text-sm font-mono font-bold text-slate-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleAddNewItem}
                      className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 py-2.5 text-xs sm:text-sm font-black text-white shadow-md shadow-emerald-600/20 transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>➕</span>
                      <span>নতুন প্রোডাক্ট তৈরি করুন</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Category / Product Rename */}
            {editTab === "category_rename" && (
              <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-xs space-y-3">
                <div className="border-b border-amber-100 pb-2">
                  <span className="text-xs font-black text-amber-950 flex items-center gap-1.5">
                    <span>🏷️</span> প্রোডাক্ট / ক্যাটাগরি নাম পরিবর্তন (Bulk Rename):
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    পুরো ডাটাবেজের সকল এন্ট্রিতে বর্তমান প্রোডাক্টটির নাম এক ক্লিকে নতুন নামে পরিবর্তিত হয়ে যাবে।
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      বর্তমান প্রোডাক্ট (Old Name):
                    </label>
                    <select
                      value={renameFromProduct}
                      onChange={(e) => setRenameFromProduct(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                    >
                      {products.map((p) => (
                        <option key={p} value={p}>
                          {p} ({rates.filter((r) => r.product === p).length} rates)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      নতুন নাম (New Product Name):
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jagoron New বা বুনিয়াদ"
                      value={renameToProduct}
                      onChange={(e) => setRenameToProduct(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:border-amber-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleBulkRenameProduct}
                      className="w-full rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 py-2.5 text-xs sm:text-sm font-black text-white shadow-md shadow-amber-600/20 transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>🔄</span>
                      <span>নাম পরিবর্তন করুন</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Duration Rename */}
            {editTab === "duration_rename" && (
              <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-xs space-y-3">
                <div className="border-b border-amber-100 pb-2">
                  <span className="text-xs font-black text-amber-950 flex items-center gap-1.5">
                    <span>⏱️</span> ডিউরেশন নাম পরিবর্তন (Bulk Rename):
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    পুরো ডাটাবেজে বর্তমান ডিউরেশনের নাম এক ক্লিকে নতুন নামে আপডেট করুন।
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      বর্তমান ডিউরেশন:
                    </label>
                    <select
                      value={renameFromDuration}
                      onChange={(e) => setRenameFromDuration(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                    >
                      {durations.map((d) => (
                        <option key={d} value={d}>
                          {d} ({rates.filter((r) => r.duration === d).length} rates)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      নতুন ডিউরেশন নাম:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Weekly বা মাসিক"
                      value={renameToDuration}
                      onChange={(e) => setRenameToDuration(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:border-amber-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleBulkRenameDuration}
                      className="w-full rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 py-2.5 text-xs sm:text-sm font-black text-white shadow-md shadow-amber-600/20 transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>🔄</span>
                      <span>ডিউরেশন পরিবর্তন করুন</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b bg-slate-100 px-4 sm:px-6 py-3 shrink-0">
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={filterProduct}
              onChange={(e) => setFilterProduct(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 cursor-pointer shadow-2xs focus:outline-none"
            >
              <option value="">সকল প্রোডাক্ট ({products.length})</option>
              {products.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <select
              value={filterDuration}
              onChange={(e) => setFilterDuration(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 cursor-pointer shadow-2xs focus:outline-none"
            >
              <option value="">সকল ডিউরেশন ({durations.length})</option>
              {durations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {(filterProduct || filterDuration || search) && (
              <button
                onClick={() => {
                  setFilterProduct("");
                  setFilterDuration("");
                  setSearch("");
                }}
                className="text-xs font-bold text-rose-600 hover:underline cursor-pointer px-1.5"
              >
                ফিল্টার মুছুন
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="সার্চ (প্রোডাক্ট, কিস্তি, রেট)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium pr-7 focus:outline-none focus:border-indigo-600"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
            <span className="text-xs text-slate-600 font-bold whitespace-nowrap">
              <b className="text-slate-900 font-mono">{filtered.length}</b> টি পাওয়া গেছে
            </span>
          </div>
        </div>

        {/* Content Container (Scrollable Table & Cards) */}
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-slate-400 font-medium">
              <span className="text-4xl block mb-2">🔍</span>
              কোনো রেট খুঁজে পাওয়া যায়নি।
            </div>
          ) : (
            <>
              {/* 1. Mobile Cards */}
              <div className="md:hidden divide-y divide-slate-100 bg-slate-50/50">
                {paginatedList.map((r) => (
                  <div
                    key={r.id}
                    className="p-3.5 bg-white hover:bg-slate-50/80 transition flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-sm text-slate-900">{r.product}</span>
                        <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700 border border-indigo-200">
                          {r.duration}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-700">
                          কিস্তি {r.kisti}
                        </span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="text-xs text-slate-500 font-medium">রেট:</span>
                        <span className="text-base font-black font-mono text-indigo-900">
                          {Number(r.rate).toFixed(2)} ৳
                        </span>
                        <span className="text-[10px] text-slate-400">প্রতি হাজারে</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(r)}
                        className="flex items-center gap-1 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-2 text-xs font-bold transition cursor-pointer"
                        title="Edit / Modify Rate"
                      >
                        <span>✏️</span>
                        <span>এডিট</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPendingDelete(r)}
                        className="flex items-center justify-center rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 w-9 h-9 text-xs font-bold cursor-pointer"
                        title="Delete rate"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2. Desktop Table */}
              <div className="hidden md:block p-4">
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-xs sm:text-sm border-collapse">
                    <thead className="bg-slate-800 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Product (প্রোডাক্ট)</th>
                        <th className="px-4 py-3 text-left font-bold">Duration (ডিউরেশন)</th>
                        <th className="px-4 py-3 text-center font-bold">Advance Kisti</th>
                        <th className="px-4 py-3 text-right font-bold">Rate (Tk / 1000)</th>
                        <th className="px-4 py-3 text-center font-bold">Action (অ্যাকশন)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {paginatedList.map((r, idx) => (
                        <tr
                          key={r.id}
                          className={`transition ${
                            idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                          } hover:bg-indigo-50/50`}
                        >
                          <td className="px-4 py-2.5">
                            <span className="font-bold text-slate-900">{r.product}</span>
                          </td>
                          <td className="px-4 py-2.5">
                            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                              {r.duration}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-center">
                            <span className="font-mono font-bold text-slate-800 bg-slate-100/80 px-2 py-0.5 rounded">
                              কিস্তি {r.kisti}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-right">
                            <span className="font-mono font-black text-indigo-900 text-sm">
                              {Number(r.rate).toFixed(2)} ৳
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleOpenEditModal(r)}
                                className="rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1.5 text-xs font-bold transition cursor-pointer flex items-center gap-1"
                                title="Edit / Modify rate"
                              >
                                <span>✏️</span>
                                <span>এডিট</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setPendingDelete(r)}
                                className="rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 px-2.5 py-1.5 text-xs font-bold transition cursor-pointer"
                                title="Delete from database"
                              >
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer with Pagination Controls */}
        <div className="border-t bg-slate-50 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-600 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold">পৃষ্ঠা প্রতি প্রদর্শন:</span>
            <div className="flex items-center gap-1">
              {PAGE_SIZE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPageSize(opt)}
                  className={`rounded-lg px-2.5 py-1 font-bold text-xs cursor-pointer transition ${
                    pageSize === opt
                      ? "bg-indigo-600 text-white shadow-2xs"
                      : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {pageSize !== "All" && totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-xl border border-slate-300 bg-white px-3 py-1 font-bold text-xs disabled:opacity-40 hover:bg-slate-100 cursor-pointer disabled:cursor-not-allowed transition"
              >
                ← পূর্ববর্তী
              </button>

              <span className="font-semibold text-slate-700">
                পৃষ্ঠা <b className="font-mono text-slate-900">{page}</b> /{" "}
                <b className="font-mono text-slate-900">{totalPages}</b>
              </span>

              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-xl border border-slate-300 bg-white px-3 py-1 font-bold text-xs disabled:opacity-40 hover:bg-slate-100 cursor-pointer disabled:cursor-not-allowed transition"
              >
                পরবর্তী →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DEDICATED RATE EDIT & MODIFY MODAL (সরাসরি এডিট ও সংশোধন পপআপ)          */}
      {/* ========================================================================= */}
      {editModalItem && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/70 p-4 animate-in fade-in zoom-in-95 duration-150">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-indigo-200 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-linear-to-r from-indigo-700 to-indigo-900 px-5 py-3.5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">✏️</span>
                <div>
                  <h4 className="text-sm sm:text-base font-black">রেট সংশোধন (Modify Rate)</h4>
                  <p className="text-[11px] text-indigo-200">
                    {editModalItem.product} — কিস্তি {editModalItem.kisti}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEditModalItem(null)}
                className="text-indigo-200 hover:text-white p-1 text-lg leading-none cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  প্রোডাক্ট নাম (Product):
                </label>
                <input
                  type="text"
                  value={modalProduct}
                  onChange={(e) => setModalProduct(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-sm font-bold text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ডিউরেশন (Duration):
                  </label>
                  <select
                    value={modalDuration}
                    onChange={(e) => setModalDuration(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-sm font-bold text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none cursor-pointer"
                  >
                    {STANDARD_DURATIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    অগ্রিম কিস্তি (Kisti):
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={modalKisti}
                    onChange={(e) => setModalKisti(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-sm font-mono font-black text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none text-center"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700">
                    রেট (প্রতি হাজারে Rate Tk):
                  </label>
                  <span className="text-[11px] text-indigo-700 font-bold">Tk per 1000</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    value={modalRate}
                    onChange={(e) => setModalRate(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2.5 text-right font-mono text-lg font-black text-indigo-950 focus:border-indigo-600 focus:bg-white focus:outline-none"
                    autoFocus
                  />
                  <span className="absolute left-3 top-2.5 text-sm font-bold text-slate-400">
                    ৳
                  </span>
                </div>

                {/* Quick adjustment buttons */}
                <div className="flex gap-1.5 mt-2">
                  {[-0.5, 0.1, 0.5, 1.0].map((adj) => (
                    <button
                      key={adj}
                      type="button"
                      onClick={() => {
                        const cur = Number(modalRate) || 0;
                        setModalRate(Math.max(0, cur + adj).toFixed(2));
                      }}
                      className="flex-1 rounded-lg py-1 text-xs font-bold font-mono bg-indigo-50 text-indigo-800 hover:bg-indigo-100 transition cursor-pointer"
                    >
                      {adj > 0 ? `+${adj}` : adj}
                    </button>
                  ))}
                </div>
              </div>

              {/* Real-time Calculation Badge */}
              <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-3 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-indigo-900 font-bold block">
                    ৫০,০০০ ৳ লোনে রিবেট হবে:
                  </span>
                  <span className="text-[10px] text-indigo-700">
                    (৫০ × {Number(modalRate) || 0} ৳)
                  </span>
                </div>
                <span className="text-lg font-black font-mono text-indigo-950">
                  {Math.round(50 * (Number(modalRate) || 0))} ৳
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditModalItem(null)}
                  className="flex-1 rounded-xl bg-slate-100 hover:bg-slate-200 py-2.5 text-xs sm:text-sm font-bold text-slate-700 transition cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="button"
                  onClick={handleSaveModalEdit}
                  className="flex-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 py-2.5 text-xs sm:text-sm font-black text-white shadow-md shadow-indigo-600/30 transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>✓</span>
                  <span>পরিবর্তন সংরক্ষণ করুন</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {pendingDelete && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-slate-950/70 p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-3 text-rose-600">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-xl shrink-0">
                🗑️
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">রেট ডিলিট নিশ্চিতকরণ</h4>
                <p className="text-xs text-slate-500">এই আইটেমটি ডাটাবেজ থেকে মুছে যাবে</p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 mb-4 space-y-1.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-semibold">প্রোডাক্ট:</span>
                <span className="font-bold text-slate-900">{pendingDelete.product}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-semibold">ডিউরেশন:</span>
                <span className="font-bold text-slate-900">{pendingDelete.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-semibold">অগ্রিম কিস্তি:</span>
                <span className="font-bold text-slate-900 font-mono">কিস্তি {pendingDelete.kisti}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-semibold">রেট (প্রতি হাজারে):</span>
                <span className="font-black text-indigo-900 font-mono text-sm">
                  {Number(pendingDelete.rate).toFixed(2)} ৳
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPendingDelete(null)}
                className="flex-1 rounded-xl bg-slate-200 hover:bg-slate-300 py-2.5 text-xs sm:text-sm font-bold text-slate-700 transition cursor-pointer"
              >
                ✕ বাতিল
              </button>
              <button
                type="button"
                onClick={executeDeleteRate}
                className="flex-1 rounded-xl bg-rose-600 hover:bg-rose-700 py-2.5 text-xs sm:text-sm font-bold text-white shadow transition cursor-pointer flex items-center justify-center gap-1"
              >
                ✓ হ্যাঁ, ডিলিট করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

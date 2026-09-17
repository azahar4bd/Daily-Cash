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

  // Row inline edit state
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editProduct, setEditProduct] = useState("");
  const [editDuration, setEditDuration] = useState("");
  const [editKisti, setEditKisti] = useState("");
  const [editRate, setEditRate] = useState("");

  // In-App Confirmation state (iframe safe - NO window.confirm!)
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
  }, [products, renameFromProduct]);

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
      setMsg("Product, Duration এবং Kisti প্রদান করা আবশ্যক");
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
    setMsg(`"${p}" এর কিস্তি ${k} এর রেট ডাটাবেজে সফলভাবে যোগ করা হয়েছে!`);
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
      setMsg("নতুন প্রোডাক্ট বা আইটেমের নাম প্রদান করা আবশ্যক");
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
      `নতুন প্রোডাক্ট "${p}" (${d}, ১ থেকে ${totalK} কিস্তি) মোট ${newRows.length}টি রো সহ ডাটাবেজে সফলভাবে যোগ করা হয়েছে!`
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
      setMsg("নতুন প্রোডাক্ট/ক্যাটাগরি নাম লিখুন");
      return;
    }
    const count = renameRebateProduct(renameFromProduct, renameToProduct);
    if (count > 0) {
      setMsg(
        `প্রোডাক্ট "${renameFromProduct}" সফলভাবে "${renameToProduct.trim()}" নামে ${count}টি এন্ট্রিতে পরিবর্তিত হয়েছে!`
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
      setMsg("নতুন ডিউরেশন নাম লিখুন");
      return;
    }
    const count = renameRebateDuration(renameFromDuration, renameToDuration);
    if (count > 0) {
      setMsg(
        `ডিউরেশন "${renameFromDuration}" সফলভাবে "${renameToDuration.trim()}" নামে ${count}টি এন্ট্রিতে পরিবর্তিত হয়েছে!`
      );
      setRenameToDuration("");
      setRenameFromDuration(renameToDuration.trim());
      load();
      onUpdated?.();
    } else {
      setMsg("কোনো পরিবর্তন করা হয়নি বা নাম একই ছিল।");
    }
  };

  // Handler: Execute Delete (No window.confirm!)
  const executeDeleteRate = () => {
    if (!pendingDelete) return;
    const itemToDelete = pendingDelete;
    const ok = deleteRebateRate(itemToDelete);
    setPendingDelete(null);
    if (ok) {
      setMsg(`"${itemToDelete.product}" কিস্তি ${itemToDelete.kisti} রেট সফলভাবে মুছে ফেলা হয়েছে!`);
    } else {
      setMsg("রেটটি পাওয়া যায়নি বা আগেই মুছে ফেলা হয়েছে।");
    }
    load();
    onUpdated?.();
  };

  // Handler: Execute Reset Defaults (No window.confirm!)
  const executeResetDefaults = () => {
    resetRebateRatesToDefault();
    load();
    setShowResetConfirm(false);
    setMsg("ডাটাবেজ সফলভাবে প্রাথমিক আদি অবস্থায় রিসেট করা হয়েছে!");
    onUpdated?.();
  };

  // Handler: Inline Edit
  const handleStartEdit = (r: RebateRateItem) => {
    setEditingId(r.id);
    setEditProduct(r.product);
    setEditDuration(r.duration);
    setEditKisti(String(r.kisti));
    setEditRate(r.rate);
    setMsg("");
  };

  const handleSaveEdit = (id: number) => {
    if (!editProduct.trim() || !editDuration.trim() || !editKisti) {
      setMsg("Product, Duration এবং Kisti খালি রাখা যাবে না");
      return;
    }
    updateRebateRateRow(id, {
      product: editProduct.trim(),
      duration: editDuration.trim(),
      kisti: Number(editKisti) || 0,
      rate: String(Number(editRate) || 0),
    });
    setEditingId(null);
    setMsg(`ডাটাবেজ আপডেট হয়েছে: ${editProduct} | ${editDuration} | কিস্তি ${editKisti}`);
    load();
    onUpdated?.();
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditProduct("");
    setEditDuration("");
    setEditKisti("");
    setEditRate("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-0 sm:p-3 md:p-4 backdrop-blur-xs">
      <div className="flex h-full sm:h-auto sm:max-h-[95vh] w-full max-w-5xl flex-col rounded-none sm:rounded-2xl bg-white shadow-2xl overflow-hidden border-0 sm:border border-slate-300">
        
        {/* Top Header - User Requested: Just "এডিট" button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b bg-slate-900 px-3.5 sm:px-5 py-3 text-white shrink-0">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div>
              <h3 className="text-base sm:text-lg font-bold flex items-center gap-1.5">
                <span>📋</span> Rebate Rate Database
              </h3>
              <p className="text-xs text-slate-300">
                মোট <b className="text-amber-400 font-mono">{rates.length}</b> টি রেট সংরক্ষিত আছে
              </p>
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
            {/* Primary Action Button: "এডিট" */}
            <button
              type="button"
              onClick={() => setShowEditPanel(!showEditPanel)}
              className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 shadow-sm ${
                showEditPanel
                  ? "bg-amber-400 text-slate-950 font-black ring-2 ring-amber-300"
                  : "bg-indigo-600 hover:bg-indigo-500 text-white"
              }`}
            >
              ✏️ {showEditPanel ? "✕ এডিট প্যানেল বন্ধ" : "এডিট"}
            </button>

            {/* In-App Reset Confirmation */}
            <button
              type="button"
              onClick={() => setShowResetConfirm(true)}
              className="rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2.5 py-1.5 text-xs font-bold text-slate-200 cursor-pointer"
              title="Reset database to initial defaults"
            >
              🔄 রিসেট
            </button>

            <button
              onClick={onClose}
              className="hidden sm:block text-2xl text-slate-400 hover:text-white transition cursor-pointer px-1 leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Global Notification Banner */}
        {msg && (
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center justify-between text-xs font-bold text-amber-900 shrink-0">
            <span>💡 {msg}</span>
            <button
              onClick={() => setMsg("")}
              className="text-amber-700 hover:text-amber-950 text-sm px-1 font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* UNIFIED "এডিট" MANAGEMENT PANEL (New Rate, New Item, Category & Duration Rename) */}
        {/* ========================================================================= */}
        {showEditPanel && (
          <div className="border-b bg-slate-50 p-3 sm:p-4 border-slate-200 shrink-0 shadow-inner">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                <span>⚙️</span> ডাটাবেজ এডিট ও কনফিগারেশন প্যানেল
              </span>
              <button
                onClick={() => setShowEditPanel(false)}
                className="text-xs text-slate-500 hover:text-slate-800 font-bold cursor-pointer"
              >
                লুকান ✕
              </button>
            </div>

            {/* Sub-Tabs Navigation for "এডিট" */}
            <div className="flex flex-wrap gap-1.5 mb-3.5 border-b border-slate-200 pb-2">
              <button
                type="button"
                onClick={() => setEditTab("rate")}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                  editTab === "rate"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                ➕ নতুন রেট Add
              </button>

              <button
                type="button"
                onClick={() => setEditTab("item")}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                  editTab === "item"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                📦 নতুন আইটেম Add
              </button>

              <button
                type="button"
                onClick={() => setEditTab("category_rename")}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                  editTab === "category_rename"
                    ? "bg-amber-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                🏷️ Category / Product Rename
              </button>

              <button
                type="button"
                onClick={() => setEditTab("duration_rename")}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                  editTab === "duration_rename"
                    ? "bg-amber-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                ⏱️ Duration Rename
              </button>
            </div>

            {/* TAB 1: নতুন রেট Add */}
            {editTab === "rate" && (
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-3">
                <div className="text-xs font-bold text-indigo-950 mb-2">
                  নির্দিষ্ট প্রোডাক্ট ও কিস্তির জন্য নতুন রেট যুক্ত করুন:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 items-end">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-0.5">Product</label>
                    <input
                      list="edit-panel-products"
                      placeholder="e.g. Jagoron"
                      value={newProduct}
                      onChange={(e) => setNewProduct(e.target.value)}
                      className="w-full rounded-lg border border-indigo-300 px-2.5 py-1.5 text-xs sm:text-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none bg-white font-bold"
                    />
                    <datalist id="edit-panel-products">
                      {products.map((p) => (
                        <option key={p} value={p} />
                      ))}
                    </datalist>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-0.5">Duration</label>
                    <input
                      list="edit-panel-durations"
                      placeholder="e.g. Week"
                      value={newDuration}
                      onChange={(e) => setNewDuration(e.target.value)}
                      className="w-full rounded-lg border border-indigo-300 px-2.5 py-1.5 text-xs sm:text-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none bg-white font-bold"
                    />
                    <datalist id="edit-panel-durations">
                      {STANDARD_DURATIONS.map((d) => (
                        <option key={d} value={d} />
                      ))}
                      {durations.map((d) => (
                        <option key={d} value={d} />
                      ))}
                    </datalist>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-0.5">Advance Kisti</label>
                    <input
                      type="number"
                      placeholder="e.g. 5"
                      value={newKisti}
                      onChange={(e) => setNewKisti(e.target.value)}
                      className="w-full rounded-lg border border-indigo-300 px-2.5 py-1.5 text-xs sm:text-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none bg-white font-bold font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-0.5">Rate (Tk)</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="e.g. 2.50"
                      value={newRate}
                      onChange={(e) => setNewRate(e.target.value)}
                      className="w-full rounded-lg border border-indigo-300 px-2.5 py-1.5 text-xs sm:text-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none bg-white font-bold font-mono"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <button
                      type="button"
                      onClick={handleAddRate}
                      className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 py-2 text-xs sm:text-sm font-bold text-white shadow-xs transition cursor-pointer min-h-[38px]"
                    >
                      ✓ Save Rate
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: নতুন আইটেম / প্রোডাক্ট Add */}
            {editTab === "item" && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3">
                <div className="text-xs font-bold text-emerald-950 mb-2">
                  সম্পূর্ণ নতুন আইটেম বা প্রোডাক্ট ডাটাবেজে অন্তর্ভুক্ত করুন:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3 items-end">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-0.5">
                      আইটেম / প্রোডাক্ট নাম (New Item Name):
                    </label>
                    <input
                      type="text"
                      placeholder="যেমন: Jagoron Special বা Agro Micro"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      className="w-full rounded-lg border border-emerald-300 px-3 py-2 text-xs sm:text-sm focus:ring-1 focus:ring-emerald-500 focus:outline-none bg-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-0.5">
                      ডিউরেশন (Duration):
                    </label>
                    <select
                      value={newItemDuration}
                      onChange={(e) => setNewItemDuration(e.target.value)}
                      className="w-full rounded-lg border border-emerald-300 px-3 py-2 text-xs sm:text-sm focus:ring-1 focus:ring-emerald-500 focus:outline-none bg-white font-bold"
                    >
                      <option value="Week">Week (সাপ্তাহিক)</option>
                      <option value="Month">Month (মাসিক)</option>
                      <option value="1.5 Year">1.5 Year (দেড় বছর)</option>
                      <option value="2 Year">2 Year (দুই বছর)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-0.5">
                      মোট কিস্তির সংখ্যা (Total Installments):
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 46 বা 12"
                      value={newItemTotalKisti}
                      onChange={(e) => setNewItemTotalKisti(e.target.value)}
                      className="w-full rounded-lg border border-emerald-300 px-3 py-2 text-xs sm:text-sm focus:ring-1 focus:ring-emerald-500 focus:outline-none bg-white font-mono font-bold"
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleAddNewItem}
                      className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 py-2 text-xs sm:text-sm font-bold text-white shadow-xs transition cursor-pointer min-h-[40px] flex items-center justify-center gap-1"
                    >
                      ➕ নতুন আইটেম যুক্ত করুন
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Category / Product Rename */}
            {editTab === "category_rename" && (
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3">
                <div className="text-xs font-bold text-amber-950 mb-2">
                  পুরো ডাটাবেজের যেকোনো ক্যাটাগরি বা প্রোডাক্টের নাম একসাথে রিনেম করুন:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 items-end">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      বর্তমান প্রোডাক্ট / ক্যাটাগরি:
                    </label>
                    <select
                      value={renameFromProduct}
                      onChange={(e) => setRenameFromProduct(e.target.value)}
                      className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none"
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
                      নতুন নাম (New Category Name):
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jagoron New বা বুনিয়াদ"
                      value={renameToProduct}
                      onChange={(e) => setRenameToProduct(e.target.value)}
                      className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleBulkRenameProduct}
                      className="w-full rounded-lg bg-amber-600 hover:bg-amber-700 py-2 text-xs sm:text-sm font-bold text-white shadow-xs transition cursor-pointer min-h-[40px]"
                    >
                      🔄 নাম পরিবর্তন করুন
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Duration Rename */}
            {editTab === "duration_rename" && (
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3">
                <div className="text-xs font-bold text-amber-950 mb-2">
                  পুরো ডাটাবেজের যেকোনো ডিউরেশনের নাম একসাথে রিনেম করুন:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 items-end">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      বর্তমান ডিউরেশন:
                    </label>
                    <select
                      value={renameFromDuration}
                      onChange={(e) => setRenameFromDuration(e.target.value)}
                      className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none"
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
                      className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleBulkRenameDuration}
                      className="w-full rounded-lg bg-amber-600 hover:bg-amber-700 py-2 text-xs sm:text-sm font-bold text-white shadow-xs transition cursor-pointer min-h-[40px]"
                    >
                      🔄 ডিউরেশন পরিবর্তন করুন
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b bg-slate-100 px-3.5 sm:px-5 py-2.5 shrink-0">
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={filterProduct}
              onChange={(e) => setFilterProduct(e.target.value)}
              className="flex-1 sm:flex-none rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800 cursor-pointer shadow-2xs"
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
              className="flex-1 sm:flex-none rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800 cursor-pointer shadow-2xs"
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
                className="text-xs font-bold text-rose-600 hover:underline cursor-pointer px-1"
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
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium pr-7"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
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

        {/* Content Container (Scrollable) */}
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400 font-medium">
              <span className="text-3xl block mb-2">🔍</span>
              কোনো রেট খুঁজে পাওয়া যায়নি।
            </div>
          ) : (
            <>
              {/* ========================================================================= */}
              {/* 1. MOBILE CARD VIEW (Visible on sm/mobile screens, hidden on md+)        */}
              {/* ========================================================================= */}
              <div className="md:hidden divide-y divide-slate-200 bg-slate-50/50">
                {paginatedList.map((r) => {
                  const isEditing = editingId === r.id;

                  if (isEditing) {
                    return (
                      <div
                        key={r.id}
                        className="m-2 rounded-xl border-2 border-amber-400 bg-amber-50/95 p-3.5 shadow-md"
                      >
                        <div className="flex items-center justify-between border-b border-amber-200 pb-2 mb-3">
                          <span className="text-xs font-black uppercase text-amber-900 flex items-center gap-1">
                            <span>✏️</span> এডিট রেট (ID #{r.id})
                          </span>
                          <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="text-xs text-slate-500 hover:text-slate-800 font-bold px-2 py-1 cursor-pointer"
                          >
                            ✕ বাতিল
                          </button>
                        </div>

                        <div className="space-y-2.5">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-0.5">
                              প্রোডাক্ট নাম (Product):
                            </label>
                            <input
                              type="text"
                              value={editProduct}
                              onChange={(e) => setEditProduct(e.target.value)}
                              className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-0.5">
                                ডিউরেশন (Duration):
                              </label>
                              <input
                                type="text"
                                value={editDuration}
                                onChange={(e) => setEditDuration(e.target.value)}
                                className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-0.5">
                                অগ্রিম কিস্তি (Kisti):
                              </label>
                              <input
                                type="number"
                                value={editKisti}
                                onChange={(e) => setEditKisti(e.target.value)}
                                className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-0.5">
                              রেট (প্রতি হাজারে Rate):
                            </label>
                            <input
                              type="number"
                              step="0.01"
                              value={editRate}
                              onChange={(e) => setEditRate(e.target.value)}
                              className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-base font-mono font-bold text-indigo-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                          </div>

                          <div className="pt-2 flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleSaveEdit(r.id)}
                              className="flex-1 rounded-lg bg-green-600 hover:bg-green-700 py-2.5 text-sm font-bold text-white shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              ✓ Save
                            </button>
                            <button
                              type="button"
                              onClick={handleCancelEdit}
                              className="rounded-lg bg-slate-200 hover:bg-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition cursor-pointer"
                            >
                              বাতিল
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={r.id}
                      className="p-3 bg-white hover:bg-slate-50/80 transition flex items-center justify-between gap-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-sm text-slate-900">{r.product}</span>
                          <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-[11px] font-semibold text-indigo-700 border border-indigo-100">
                            {r.duration}
                          </span>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-mono font-semibold text-slate-700">
                            কিস্তি {r.kisti}
                          </span>
                        </div>
                        <div className="mt-1 flex items-baseline gap-1.5">
                          <span className="text-xs text-slate-500 font-medium">রেট:</span>
                          <span className="text-base font-black font-mono text-indigo-900">
                            {Number(r.rate).toFixed(2)}
                          </span>
                          <span className="text-[10px] text-slate-400">প্রতি হাজারে</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleStartEdit(r)}
                          className="flex items-center gap-1 rounded-lg bg-blue-600 hover:bg-blue-700 px-3 py-2 text-xs font-bold text-white shadow-xs cursor-pointer min-h-[38px]"
                        >
                          ✏️ এডিট
                        </button>
                        <button
                          type="button"
                          onClick={() => setPendingDelete(r)}
                          className="flex items-center justify-center rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 w-10 h-10 text-sm font-bold cursor-pointer"
                          title="Delete rate"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ========================================================================= */}
              {/* 2. DESKTOP TABLE VIEW (Visible on md+ screens)                            */}
              {/* ========================================================================= */}
              <div className="hidden md:block p-3">
                <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
                  <thead className="sticky top-0 bg-slate-800 text-white shadow-xs z-10">
                    <tr>
                      <th className="px-3 py-2 text-left">Product Name (প্রোডাক্ট)</th>
                      <th className="px-3 py-2 text-left">Duration (ডিউরেশন)</th>
                      <th className="px-3 py-2 text-center">Advance Kisti</th>
                      <th className="px-3 py-2 text-right">Rate (Tk)</th>
                      <th className="px-3 py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedList.map((r) => {
                      const isEditing = editingId === r.id;
                      return (
                        <tr
                          key={r.id}
                          className={`border-b transition ${
                            isEditing ? "bg-amber-50/90" : "hover:bg-slate-50"
                          }`}
                        >
                          {/* Product Name Column */}
                          <td className="px-3 py-2">
                            {isEditing ? (
                              <input
                                type="text"
                                value={editProduct}
                                onChange={(e) => setEditProduct(e.target.value)}
                                className="w-full min-w-[120px] rounded border border-amber-400 bg-white px-2 py-1 font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                              />
                            ) : (
                              <span className="font-bold text-slate-900">{r.product}</span>
                            )}
                          </td>

                          {/* Duration Column */}
                          <td className="px-3 py-2">
                            {isEditing ? (
                              <input
                                type="text"
                                value={editDuration}
                                onChange={(e) => setEditDuration(e.target.value)}
                                className="w-full min-w-[100px] rounded border border-amber-400 bg-white px-2 py-1 font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                              />
                            ) : (
                              <span className="font-medium text-slate-700">{r.duration}</span>
                            )}
                          </td>

                          {/* Advance Kisti Column */}
                          <td className="px-3 py-2 text-center">
                            {isEditing ? (
                              <input
                                type="number"
                                value={editKisti}
                                onChange={(e) => setEditKisti(e.target.value)}
                                className="w-16 rounded border border-amber-400 bg-white px-1.5 py-1 text-center font-mono font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                              />
                            ) : (
                              <span className="font-mono font-semibold text-slate-800">
                                {r.kisti}
                              </span>
                            )}
                          </td>

                          {/* Rate Column */}
                          <td className="px-3 py-2 text-right">
                            {isEditing ? (
                              <input
                                type="number"
                                step="0.01"
                                value={editRate}
                                onChange={(e) => setEditRate(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSaveEdit(r.id)}
                                className="w-20 rounded border border-amber-400 bg-white px-1.5 py-1 text-right font-mono font-bold text-indigo-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                              />
                            ) : (
                              <span className="font-mono font-bold text-indigo-900">
                                {Number(r.rate).toFixed(2)}
                              </span>
                            )}
                          </td>

                          {/* Actions Column */}
                          <td className="px-3 py-2 text-center">
                            {isEditing ? (
                              <div className="flex items-center justify-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleSaveEdit(r.id)}
                                  className="rounded bg-green-600 hover:bg-green-700 px-2.5 py-1 text-xs font-bold text-white shadow-xs cursor-pointer"
                                  title="Save changes"
                                >
                                  ✓ Save
                                </button>
                                <button
                                  type="button"
                                  onClick={handleCancelEdit}
                                  className="rounded bg-slate-400 hover:bg-slate-500 px-2 py-1 text-xs font-bold text-white shadow-xs cursor-pointer"
                                >
                                  ✕ Cancel
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleStartEdit(r)}
                                  className="rounded bg-blue-600 hover:bg-blue-700 px-2.5 py-1 text-xs font-bold text-white shadow-xs cursor-pointer"
                                  title="Edit rate"
                                >
                                  ✏️ Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setPendingDelete(r)}
                                  className="rounded bg-rose-600 hover:bg-rose-700 px-2 py-1 text-xs font-bold text-white shadow-xs cursor-pointer flex items-center gap-1"
                                  title="Delete from database"
                                >
                                  🗑️ Delete
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* Footer with Pagination Controls */}
        <div className="border-t bg-slate-50 px-3.5 sm:px-5 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 shrink-0">
          <div className="flex items-center gap-2">
            <span>পৃষ্ঠা প্রতি প্রদর্শন:</span>
            <div className="flex items-center gap-1">
              {PAGE_SIZE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPageSize(opt)}
                  className={`rounded px-2 py-0.5 font-bold text-xs cursor-pointer ${
                    pageSize === opt
                      ? "bg-indigo-600 text-white"
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
                className="rounded border border-slate-300 bg-white px-2.5 py-1 font-bold text-xs disabled:opacity-40 hover:bg-slate-100 cursor-pointer disabled:cursor-not-allowed"
              >
                ← পূর্ববর্তী
              </button>

              <span className="font-medium text-slate-700">
                পৃষ্ঠা <b className="font-mono text-slate-900">{page}</b> /{" "}
                <b className="font-mono text-slate-900">{totalPages}</b>
              </span>

              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded border border-slate-300 bg-white px-2.5 py-1 font-bold text-xs disabled:opacity-40 hover:bg-slate-100 cursor-pointer disabled:cursor-not-allowed"
              >
                পরবর্তী →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. IN-APP DELETE CONFIRMATION MODAL (100% IFRAME & MOBILE SAFE)          */}
      {/* ========================================================================= */}
      {pendingDelete && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 p-4 animate-in fade-in">
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
                  {Number(pendingDelete.rate).toFixed(2)} Tk
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

      {/* ========================================================================= */}
      {/* 4. IN-APP RESET CONFIRMATION MODAL (100% IFRAME & MOBILE SAFE)          */}
      {/* ========================================================================= */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-3 text-amber-600">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl shrink-0">
                🔄
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">ডাটাবেজ রিসেট</h4>
                <p className="text-xs text-slate-500">প্রথম আদি অবস্থায় ফিরিয়ে আনা হবে</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Rebate database-এর Jagoron, Agrossor, Buniyed, Sufolon, MFCE এর সকল স্ট্যান্ডার্ড কিস্তির রেট পুনরায় প্রাথমিক অবস্থায় ফিরে যাবে।
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 rounded-xl bg-slate-200 hover:bg-slate-300 py-2.5 text-xs sm:text-sm font-bold text-slate-700 transition cursor-pointer"
              >
                ✕ বাতিল
              </button>
              <button
                type="button"
                onClick={executeResetDefaults}
                className="flex-1 rounded-xl bg-amber-600 hover:bg-amber-700 py-2.5 text-xs sm:text-sm font-bold text-white shadow transition cursor-pointer flex items-center justify-center gap-1"
              >
                ✓ হ্যাঁ, রিসেট করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

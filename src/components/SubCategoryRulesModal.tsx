import { useState } from "react";
import { titleCase } from "@/lib/categories";
import type { SubCategoryRule } from "@/types";
import {
  saveSubCategoryRule,
  deleteSubCategoryRule,
  resetSubCategoryRules,
} from "@/lib/storage";
import { fmt } from "./DenominationPopup";

interface SubCategoryRulesModalProps {
  open: boolean;
  onClose: () => void;
  rules: SubCategoryRule[];
  disburseCategories: string[];
  onRulesChanged: () => void;
  currentCategory?: string;
  currentLoanAmount?: number;
}

export default function SubCategoryRulesModal({
  open,
  onClose,
  rules,
  disburseCategories,
  onRulesChanged,
  currentLoanAmount = 50000,
}: SubCategoryRulesModalProps) {
  // New Rule State
  const [newSubCat, setNewSubCat] = useState("");
  const [newInstallments, setNewInstallments] = useState<number | "">(12);
  const [newMode, setNewMode] = useState<"all" | "all_except" | "only">("all");
  const [newSelectedCats, setNewSelectedCats] = useState<string[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Edit Rule State
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editSubCat, setEditSubCat] = useState("");
  const [editInstallments, setEditInstallments] = useState<number | "">(12);
  const [editMode, setEditMode] = useState<"all" | "all_except" | "only">("all");
  const [editSelectedCats, setEditSelectedCats] = useState<string[]>([]);

  // Simulation & UX State
  const [sampleAmount, setSampleAmount] = useState<number>(
    currentLoanAmount > 0 ? currentLoanAmount : 50000
  );
  const [msg, setMsg] = useState("");

  if (!open) return null;

  // Standard disburse category names
  const standardDisburse = ["jagoron", "agrossor", "buniyed", "sufolon", "mfce"];
  const allCategories = Array.from(
    new Set([
      ...standardDisburse,
      ...disburseCategories.map((c) => c.trim().toLowerCase()),
    ])
  ).filter(Boolean);

  const toggleCategoryInNew = (cat: string) => {
    const c = cat.toLowerCase().trim();
    if (newSelectedCats.includes(c)) {
      setNewSelectedCats(newSelectedCats.filter((x) => x !== c));
    } else {
      setNewSelectedCats([...newSelectedCats, c]);
    }
  };

  const toggleCategoryInEdit = (cat: string) => {
    const c = cat.toLowerCase().trim();
    if (editSelectedCats.includes(c)) {
      setEditSelectedCats(editSelectedCats.filter((x) => x !== c));
    } else {
      setEditSelectedCats([...editSelectedCats, c]);
    }
  };

  const handleAddNew = () => {
    if (!newSubCat.trim()) {
      setMsg("মেয়াদ / সাব-ক্যাটাগরির নাম দিন (যেমন: 1 year / 2 year)");
      return;
    }
    const numInst = Number(newInstallments);
    if (!numInst || numInst <= 0) {
      setMsg("সঠিক কিস্তি সংখ্যা দিন (যেমন: 12, 18, 24, 46)");
      return;
    }

    saveSubCategoryRule({
      subCategory: newSubCat.trim(),
      installments: numInst,
      mode: newMode,
      categories: newMode === "all" ? [] : newSelectedCats,
    });

    setNewSubCat("");
    setNewInstallments(12);
    setNewMode("all");
    setNewSelectedCats([]);
    setShowAddForm(false);
    setMsg("✓ নতুন কিস্তি রুল সফলভাবে যুক্ত করা হয়েছে!");
    onRulesChanged();
  };

  const startEdit = (rule: SubCategoryRule) => {
    setEditingId(rule.id || 0);
    setEditSubCat(rule.subCategory);
    setEditInstallments(rule.installments || 12);
    setEditMode(rule.mode || "all");
    setEditSelectedCats((rule.categories || []).map((c) => c.toLowerCase().trim()));
    setMsg("");
  };

  const handleSaveEdit = () => {
    if (!editingId || !editSubCat.trim()) {
      setMsg("মেয়াদ / সাব-ক্যাটাগরির নাম দিন");
      return;
    }
    const numInst = Number(editInstallments);
    if (!numInst || numInst <= 0) {
      setMsg("সঠিক কিস্তি সংখ্যা দিন");
      return;
    }

    saveSubCategoryRule({
      id: editingId,
      subCategory: editSubCat.trim(),
      installments: numInst,
      mode: editMode,
      categories: editMode === "all" ? [] : editSelectedCats,
    });

    setEditingId(null);
    setMsg("✓ কিস্তি রুল সফলভাবে আপডেট করা হয়েছে!");
    onRulesChanged();
  };

  const handleDelete = (id: number, subCat: string) => {
    if (
      !confirm(
        `আপনি কি নিশ্চিত যে "${subCat}" এর কিস্তি রুলটি মুছে ফেলতে চান?`
      )
    ) {
      return;
    }
    deleteSubCategoryRule(id);
    setMsg(`✓ "${subCat}" রুলটি মুছে ফেলা হয়েছে!`);
    onRulesChanged();
  };

  const handleResetToDefault = () => {
    if (
      !confirm(
        "আপনি কি সকল কিস্তি রুল রিসেট করে স্ট্যান্ডার্ড ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?"
      )
    ) {
      return;
    }
    resetSubCategoryRules();
    setEditingId(null);
    setShowAddForm(false);
    setMsg("✓ সকল কিস্তি রুল স্ট্যান্ডার্ড ডিফল্ট অবস্থায় রিসেট করা হয়েছে!");
    onRulesChanged();
  };

  const handleApplyPreset = (type: "standard_monthly" | "weekly_50" | "weekly_46") => {
    if (type === "standard_monthly") {
      saveSubCategoryRule({
        id: 1,
        subCategory: "1 year",
        installments: 12,
        mode: "all",
        categories: [],
      });
      saveSubCategoryRule({
        id: 2,
        subCategory: "1.5 year",
        installments: 18,
        mode: "all_except",
        categories: ["buniyed", "sufolon"],
      });
      saveSubCategoryRule({
        id: 3,
        subCategory: "2 year",
        installments: 24,
        mode: "only",
        categories: ["agrossor"],
      });
      setMsg("✓ স্ট্যান্ডার্ড মাসিক কিস্তি প্রিসেট প্রয়োগ করা হয়েছে (১ বছর=১২, ১.৫ বছর=১৮, ২ বছর=২৪)");
    } else if (type === "weekly_50") {
      saveSubCategoryRule({
        id: Date.now(),
        subCategory: "1 year (50 kisti)",
        installments: 50,
        mode: "all",
        categories: [],
      });
      setMsg("✓ ৫০ কিস্তি সাপ্তাহিক রুল যুক্ত করা হয়েছে (১ বছর = ৫০ কিস্তি)");
    } else if (type === "weekly_46") {
      saveSubCategoryRule({
        id: Date.now(),
        subCategory: "1 year (46 kisti)",
        installments: 46,
        mode: "all",
        categories: [],
      });
      setMsg("✓ ৪৬ কিস্তি সাপ্তাহিক রুল যুক্ত করা হয়েছে (১ বছর = ৪৬ কিস্তি)");
    }
    onRulesChanged();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="flex h-full sm:h-auto sm:max-h-[94vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-gradient-to-r from-violet-800 via-purple-900 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/30 text-lg shadow-inner">
              🔢
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                  কিস্তি কার্ড রুল সেটিংস (Kisti Rules)
                </h2>
                <span className="rounded-md bg-violet-500/20 px-2 py-0.5 text-[10px] font-bold text-violet-200 ring-1 ring-violet-400/30 uppercase">
                  Installment Settings
                </span>
              </div>
              <p className="text-xs text-violet-200/80 font-medium">
                ঋণ মেয়াদের কিস্তি সংখ্যা ও প্রোডাক্ট রুল পরিচালনা করুন (Add / Edit / Delete)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-violet-300 hover:text-white hover:bg-white/10 transition cursor-pointer text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Global Notification Banner */}
        {msg && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center justify-between text-xs font-bold text-emerald-900 shrink-0">
            <span>{msg}</span>
            <button
              onClick={() => setMsg("")}
              className="text-emerald-700 hover:text-emerald-950 text-sm px-1 font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Quick Presets & Simulator Toolbar */}
        <div className="border-b bg-gradient-to-b from-violet-50/70 to-slate-50/70 p-3 sm:p-4 shrink-0 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Quick 1-Click Presets */}
            <div className="space-y-1.5 flex-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-violet-950 block">
                ⚡ দ্রুত প্রিসেট (Quick Presets):
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => handleApplyPreset("standard_monthly")}
                  className="rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>🌟</span>
                  <span>স্ট্যান্ডার্ড (১২, ১৮, ২৪ কিস্তি)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset("weekly_50")}
                  className="rounded-xl bg-white hover:bg-violet-50 border border-violet-300 text-violet-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer"
                >
                  + ৫০ কিস্তি (১ বছর)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset("weekly_46")}
                  className="rounded-xl bg-white hover:bg-violet-50 border border-violet-300 text-violet-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer"
                >
                  + ৪৬ কিস্তি (১ বছর)
                </button>
              </div>
            </div>

            {/* Test Amount Simulator Input */}
            <div className="rounded-xl border border-violet-200 bg-white p-2.5 shadow-2xs flex items-center gap-2.5 shrink-0">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block">
                  টেস্ট লোন পরিমাণ:
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <input
                    type="number"
                    min={1000}
                    step={5000}
                    value={sampleAmount}
                    onChange={(e) => setSampleAmount(Number(e.target.value) || 0)}
                    className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono text-sm font-black text-violet-950 focus:border-violet-600 focus:outline-none"
                  />
                  <span className="text-xs font-bold text-slate-600">৳</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {[30000, 50000, 100000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setSampleAmount(amt)}
                    className={`rounded px-1.5 py-0.5 text-[10px] font-bold font-mono transition cursor-pointer ${
                      sampleAmount === amt
                        ? "bg-violet-700 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {fmt(amt)}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Formula helper bar */}
          <div className="flex items-center justify-between text-[11px] bg-violet-100/60 rounded-lg px-3 py-1.5 text-violet-950 border border-violet-200/80">
            <span className="font-semibold">
              💡 কিস্তি হিসাবের নিয়ম: <span className="font-mono font-bold">(মোট ঋণ + SC) ÷ কিস্তি সংখ্যা = প্রতি কিস্তির পরিমাণ</span>
            </span>
            <span className="hidden sm:inline text-violet-800 font-medium">
              উদাহরণ: {fmt(sampleAmount)} ৳ ঋণ ÷ ১২ কিস্তি = <b className="font-mono">{fmt(Math.round(sampleAmount / 12))} ৳ / কিস্তি</b>
            </span>
          </div>
        </div>

        {/* Scrollable Body: Add Form & Rules List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
          
          {/* Header Bar for Active Rules & Add Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <span>📋</span> সক্রিয় কিস্তি রুলসমূহ:
              </span>
              <span className="rounded-full bg-violet-100 text-violet-800 font-bold px-2 py-0.5 text-xs">
                {rules.length} টি
              </span>
            </div>

            {!showAddForm && (
              <button
                type="button"
                onClick={() => setShowAddForm(true)}
                className="rounded-xl bg-violet-700 hover:bg-violet-800 active:scale-95 text-white px-3.5 py-1.5 text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>+</span>
                <span>নতুন কিস্তি রুল যোগ করুন</span>
              </button>
            )}
          </div>

          {/* Add New Rule Form Card */}
          {showAddForm && (
            <div className="rounded-2xl border-2 border-violet-400 bg-violet-50/50 p-4 shadow-sm space-y-3.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-violet-200 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-base">✨</span>
                  <span className="font-black text-sm text-violet-950">
                    নতুন কিস্তি রুল যুক্ত করুন (Add New Kisti Rule)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="rounded-lg p-1 text-slate-400 hover:text-slate-700 hover:bg-white/60 text-lg cursor-pointer leading-none"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Sub Category / Duration Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-800">
                    মেয়াদ / সাব-ক্যাটাগরির নাম (Sub Category):
                  </label>
                  <input
                    type="text"
                    list="subcat-options"
                    value={newSubCat}
                    onChange={(e) => setNewSubCat(e.target.value)}
                    placeholder="যেমন: 1 year, 1.5 year, 2 year, 6 month"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900 focus:border-violet-600 focus:outline-none"
                  />
                  <datalist id="subcat-options">
                    <option value="1 year" />
                    <option value="1.5 year" />
                    <option value="2 year" />
                    <option value="6 month" />
                    <option value="3 year" />
                    <option value="50 week" />
                    <option value="46 week" />
                  </datalist>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {["1 year", "1.5 year", "2 year", "6 month"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setNewSubCat(s)}
                        className="rounded bg-white hover:bg-violet-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700 cursor-pointer"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Installments count */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-800">
                    কিস্তি সংখ্যা (Installments):
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newInstallments}
                    onChange={(e) =>
                      setNewInstallments(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                    placeholder="যেমন: 12"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-mono font-bold text-violet-950 focus:border-violet-600 focus:outline-none"
                  />
                  <div className="flex flex-wrap gap-1 pt-1">
                    {[12, 18, 24, 46, 50].map((kVal) => (
                      <button
                        key={kVal}
                        type="button"
                        onClick={() => setNewInstallments(kVal)}
                        className="rounded bg-white hover:bg-violet-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold font-mono text-slate-700 cursor-pointer"
                      >
                        {kVal} কিস্তি
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mode Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800">
                  প্রোডাক্ট প্রযোজ্যতা (Rule Mode):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label
                    className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${
                      newMode === "all"
                        ? "bg-violet-600 text-white border-violet-600 shadow-2xs"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="newRuleMode"
                      value="all"
                      checked={newMode === "all"}
                      onChange={() => setNewMode("all")}
                      className="sr-only"
                    />
                    <span>🌐 সকল প্রোডাক্টে প্রযোজ্য</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${
                      newMode === "only"
                        ? "bg-violet-600 text-white border-violet-600 shadow-2xs"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="newRuleMode"
                      value="only"
                      checked={newMode === "only"}
                      onChange={() => setNewMode("only")}
                      className="sr-only"
                    />
                    <span>🎯 নির্দিষ্ট প্রোডাক্টে প্রযোজ্য</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${
                      newMode === "all_except"
                        ? "bg-violet-600 text-white border-violet-600 shadow-2xs"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="newRuleMode"
                      value="all_except"
                      checked={newMode === "all_except"}
                      onChange={() => setNewMode("all_except")}
                      className="sr-only"
                    />
                    <span>🚫 নির্দিষ্ট প্রোডাক্ট ব্যতীত</span>
                  </label>
                </div>
              </div>

              {/* Category selector chips when mode is not 'all' */}
              {newMode !== "all" && (
                <div className="rounded-xl bg-white border border-violet-200 p-3 space-y-2">
                  <span className="block text-[11px] font-black uppercase tracking-wider text-slate-700">
                    {newMode === "only"
                      ? "প্রযোজ্য প্রোডাক্ট নির্বাচন করুন (Select Products):"
                      : "বাদ দেওয়ার জন্য প্রোডাক্ট নির্বাচন করুন (Exclude Products):"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {allCategories.map((cat) => {
                      const isChecked = newSelectedCats.includes(
                        cat.toLowerCase().trim()
                      );
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => toggleCategoryInNew(cat)}
                          className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                            isChecked
                              ? "bg-violet-700 text-white shadow-2xs ring-1 ring-violet-500"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          <span>{isChecked ? "✓" : "+"}</span>
                          <span>{titleCase(cat)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Form Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-violet-200">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="button"
                  onClick={handleAddNew}
                  className="rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 py-1.5 text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>✓</span>
                  <span>রুল সংরক্ষণ করুন (Add Rule)</span>
                </button>
              </div>
            </div>
          )}

          {/* Active Rules List / Table */}
          <div className="space-y-2.5">
            {rules.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center bg-slate-50">
                <p className="text-sm font-bold text-slate-500">
                  কোনো কিস্তি রুল পাওয়া যায়নি!
                </p>
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  className="mt-2 text-xs font-bold text-violet-700 hover:underline cursor-pointer"
                >
                  স্ট্যান্ডার্ড ডিফল্ট রুল ফিরিয়ে আনুন
                </button>
              </div>
            ) : (
              rules.map((r) => {
                const isEditing = editingId === r.id;
                const sampleKisti =
                  r.installments > 0
                    ? Math.round(sampleAmount / r.installments)
                    : 0;

                return (
                  <div
                    key={r.id || r.subCategory}
                    className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs hover:border-violet-300 transition"
                  >
                    {isEditing ? (
                      /* Inline Edit Form */
                      <div className="space-y-3 bg-violet-50/70 p-3.5 rounded-xl border border-violet-300">
                        <div className="flex items-center justify-between border-b border-violet-200 pb-2">
                          <span className="text-xs font-black text-violet-950 uppercase tracking-wider flex items-center gap-1.5">
                            <span>✏️</span> কিস্তি রুল সম্পাদনা (Edit Rule)
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            ID: {r.id}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-800 mb-1">
                              মেয়াদ / সাব-ক্যাটাগরির নাম:
                            </label>
                            <input
                              type="text"
                              value={editSubCat}
                              onChange={(e) => setEditSubCat(e.target.value)}
                              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-slate-900 focus:border-violet-600 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-800 mb-1">
                              কিস্তি সংখ্যা (Installments):
                            </label>
                            <input
                              type="number"
                              min="1"
                              value={editInstallments}
                              onChange={(e) =>
                                setEditInstallments(
                                  e.target.value === ""
                                    ? ""
                                    : Number(e.target.value)
                                )
                              }
                              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-violet-950 focus:border-violet-600 focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Edit Mode Dropdown */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-800 mb-1">
                            প্রোডাক্ট প্রযোজ্যতা (Rule Mode):
                          </label>
                          <select
                            value={editMode}
                            onChange={(e) =>
                              setEditMode(e.target.value as any)
                            }
                            className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:border-violet-600 focus:outline-none"
                          >
                            <option value="all">🌐 সকল প্রোডাক্টে প্রযোজ্য (All Categories)</option>
                            <option value="only">🎯 শুধুমাত্র নির্দিষ্ট প্রোডাক্টে (Only in...)</option>
                            <option value="all_except">🚫 নির্দিষ্ট প্রোডাক্ট ব্যতীত (All Except...)</option>
                          </select>
                        </div>

                        {/* Edit Category selection chips */}
                        {editMode !== "all" && (
                          <div className="rounded-lg bg-white border border-violet-200 p-2.5 space-y-1.5">
                            <span className="block text-[10px] font-bold text-slate-600 uppercase">
                              {editMode === "only"
                                ? "প্রযোজ্য প্রোডাক্ট নির্বাচন করুন:"
                                : "বাদ দেওয়া প্রোডাক্ট নির্বাচন করুন:"}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {allCategories.map((cat) => {
                                const isChecked = editSelectedCats.includes(
                                  cat.toLowerCase().trim()
                                );
                                return (
                                  <button
                                    key={cat}
                                    type="button"
                                    onClick={() => toggleCategoryInEdit(cat)}
                                    className={`rounded px-2 py-0.5 text-[11px] font-bold transition cursor-pointer flex items-center gap-1 ${
                                      isChecked
                                        ? "bg-violet-700 text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                                  >
                                    <span>{isChecked ? "✓" : "+"}</span>
                                    <span>{titleCase(cat)}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-2 pt-2 border-t border-violet-200">
                          <button
                            type="button"
                            onClick={() => setEditingId(null)}
                            className="rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                          >
                            বাতিল
                          </button>
                          <button
                            type="button"
                            onClick={handleSaveEdit}
                            className="rounded-lg bg-violet-700 hover:bg-violet-800 text-white px-4 py-1 text-xs font-bold shadow-xs transition cursor-pointer"
                          >
                            ✓ সংরক্ষণ করুন (Save)
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Display Row View */
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-sm text-slate-900 font-mono">
                              {r.subCategory}
                            </span>
                            <span className="rounded-full bg-violet-100 text-violet-900 border border-violet-200 px-2.5 py-0.5 text-xs font-black">
                              {r.installments} কিস্তি (Installments)
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-xs">
                            {r.mode === "all" && (
                              <span className="rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 font-bold">
                                ✓ সকল প্রোডাক্টে অনুমোদিত
                              </span>
                            )}
                            {r.mode === "only" && (
                              <span className="rounded-md bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 font-bold">
                                🎯 শুধুমাত্র:{" "}
                                {r.categories && r.categories.length > 0
                                  ? r.categories.map((c) => titleCase(c)).join(", ")
                                  : "কোনোটি নির্বাচিত নেই"}
                              </span>
                            )}
                            {r.mode === "all_except" && (
                              <span className="rounded-md bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 font-bold">
                                🚫 ব্যতীত:{" "}
                                {r.categories && r.categories.length > 0
                                  ? r.categories.map((c) => titleCase(c)).join(", ")
                                  : "কোনোটি নয়"}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right side: Calculation Preview & Actions */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                          <div className="text-right">
                            <span className="text-[10px] text-slate-400 font-bold block">
                              {fmt(sampleAmount)} ৳ লোনে কিস্তি:
                            </span>
                            <span className="font-mono text-sm font-black text-violet-950">
                              {fmt(sampleKisti)} ৳
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => startEdit(r)}
                              className="rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 px-2.5 py-1 text-xs font-bold transition shadow-2xs cursor-pointer"
                              title="Edit this rule"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(r.id!, r.subCategory)}
                              className="rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white border border-rose-200 px-2 py-1 text-xs font-bold transition shadow-2xs cursor-pointer"
                              title="Delete this rule"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t bg-slate-50 px-4 sm:px-6 py-3.5 shrink-0">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5"
            title="Reset to default rules"
          >
            <span>🔄</span>
            <span>ডিফল্ট রিসেট</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-800 hover:bg-slate-900 active:bg-black px-6 py-2 text-xs sm:text-sm font-bold text-white transition cursor-pointer"
          >
            বন্ধ করুন (Close)
          </button>
        </div>
      </div>
    </div>
  );
}

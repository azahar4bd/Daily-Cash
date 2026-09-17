import { useState } from "react";
import type { KallyanRule } from "@/types";
import { DEFAULT_KALLYAN_RULE, calcKallyan, titleCase } from "@/lib/categories";
import { saveKallyanRule } from "@/lib/storage";
import { fmt } from "./DenominationPopup";

interface KallyanSettingsProps {
  rule: KallyanRule;
  disburseCategories?: string[];
  onChanged: () => void;
  onClose: () => void;
}

export default function KallyanSettings({
  rule,
  disburseCategories = [],
  onChanged,
  onClose,
}: KallyanSettingsProps) {
  // Merge default disburse categories with any categories passed or present in overrides
  const standardDisburse = ["jagoron", "agrossor", "buniyed", "sufolon", "mfce"];
  const allCategoryNames = Array.from(
    new Set([
      ...standardDisburse,
      ...disburseCategories.map((c) => c.trim().toLowerCase()),
      ...Object.keys(rule.categoryOverrides || {}).map((c) => c.trim().toLowerCase()),
    ])
  ).filter(Boolean);

  const [defaultPercent, setDefaultPercent] = useState<number>(rule.percent ?? 1);
  const [defaultFixed, setDefaultFixed] = useState<number>(rule.fixed ?? 15);

  // Per-category rules state
  const [categoryRules, setCategoryRules] = useState<
    Record<string, { percent: number; fixed: number }>
  >(() => {
    const initial: Record<string, { percent: number; fixed: number }> = {};
    for (const cat of allCategoryNames) {
      if (rule.categoryOverrides && rule.categoryOverrides[cat]) {
        initial[cat] = {
          percent: rule.categoryOverrides[cat].percent ?? defaultPercent,
          fixed: rule.categoryOverrides[cat].fixed ?? defaultFixed,
        };
      } else if (
        DEFAULT_KALLYAN_RULE.categoryOverrides &&
        DEFAULT_KALLYAN_RULE.categoryOverrides[cat]
      ) {
        initial[cat] = { ...DEFAULT_KALLYAN_RULE.categoryOverrides[cat] };
      } else {
        initial[cat] = { percent: defaultPercent, fixed: defaultFixed };
      }
    }
    return initial;
  });

  const [sampleAmount, setSampleAmount] = useState<number>(50000);
  const [activeTab, setActiveTab] = useState<"products" | "calculator" | "info">("products");
  const [msg, setMsg] = useState<string>("");

  const updateCategory = (cat: string, field: "percent" | "fixed", value: number) => {
    setCategoryRules((prev) => ({
      ...prev,
      [cat]: {
        ...prev[cat],
        [field]: value >= 0 ? value : 0,
      },
    }));
  };

  const handleApplyPreset = (type: "standard" | "all_1_15" | "all_05_15" | "all_1_0") => {
    const updated: Record<string, { percent: number; fixed: number }> = {};
    if (type === "standard") {
      for (const cat of allCategoryNames) {
        if (cat.trim().toLowerCase() === "buniyed" || cat.trim().toLowerCase() === "buniyad") {
          updated[cat] = { percent: 0.5, fixed: 15 };
        } else {
          updated[cat] = { percent: 1, fixed: 15 };
        }
      }
      setCategoryRules(updated);
      setDefaultPercent(1);
      setDefaultFixed(15);
      setMsg("✓ স্ট্যান্ডার্ড নিয়ম প্রয়োগ করা হয়েছে: সাধারণ ১% + ১৫ টাকা, বুনিয়াদ ০.৫% + ১৫ টাকা");
    } else if (type === "all_1_15") {
      for (const cat of allCategoryNames) {
        updated[cat] = { percent: 1, fixed: 15 };
      }
      setCategoryRules(updated);
      setDefaultPercent(1);
      setDefaultFixed(15);
      setMsg("✓ সকল প্রোডাক্টে ১% + ১৫ টাকা নির্ধারণ করা হয়েছে");
    } else if (type === "all_05_15") {
      for (const cat of allCategoryNames) {
        updated[cat] = { percent: 0.5, fixed: 15 };
      }
      setCategoryRules(updated);
      setDefaultPercent(0.5);
      setDefaultFixed(15);
      setMsg("✓ সকল প্রোডাক্টে ০.৫% + ১৫ টাকা নির্ধারণ করা হয়েছে");
    } else if (type === "all_1_0") {
      for (const cat of allCategoryNames) {
        updated[cat] = { percent: 1, fixed: 0 };
      }
      setCategoryRules(updated);
      setDefaultPercent(1);
      setDefaultFixed(0);
      setMsg("✓ সকল প্রোডাক্টে শুধু ১% (কোনো ফিক্সড ফি নেই) নির্ধারণ করা হয়েছে");
    }
  };

  const handleSave = () => {
    const cleanOverrides: Record<string, { percent: number; fixed: number }> = {};
    for (const cat of Object.keys(categoryRules)) {
      const cfg = categoryRules[cat];
      if (cfg) {
        cleanOverrides[cat.trim().toLowerCase()] = {
          percent: Number(cfg.percent) || 0,
          fixed: Number(cfg.fixed) || 0,
        };
      }
    }

    const updated: KallyanRule = {
      percent: Number(defaultPercent) || 0,
      fixed: Number(defaultFixed) || 0,
      categoryOverrides: cleanOverrides,
    };

    saveKallyanRule(updated);
    setMsg("✓ কল্যাণ তহবিল সেটিংস সফলভাবে সংরক্ষিত হয়েছে!");
    onChanged();
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleReset = () => {
    saveKallyanRule(DEFAULT_KALLYAN_RULE);
    setDefaultPercent(DEFAULT_KALLYAN_RULE.percent);
    setDefaultFixed(DEFAULT_KALLYAN_RULE.fixed);
    setCategoryRules({ ...(DEFAULT_KALLYAN_RULE.categoryOverrides || {}) });
    setMsg("✓ স্ট্যান্ডার্ড ডিফল্ট অবস্থায় রিসেট করা হয়েছে (১% + ১৫ টাকা, বুনিয়াদ ০.৫% + ১৫ টাকা)");
    onChanged();
  };

  const getProductColor = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes("jagoron")) return "from-emerald-600 to-teal-700";
    if (c.includes("agrossor")) return "from-blue-600 to-indigo-700";
    if (c.includes("buniyed")) return "from-amber-600 to-orange-700";
    if (c.includes("sufolon")) return "from-teal-600 to-cyan-700";
    if (c.includes("mfce")) return "from-purple-600 to-indigo-700";
    return "from-slate-600 to-slate-800";
  };

  const getProductBengaliName = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes("jagoron")) return "জাগরণ";
    if (c.includes("agrossor")) return "অগ্রসর";
    if (c.includes("buniyed")) return "বুনিয়াদ";
    if (c.includes("sufolon")) return "সুফলন";
    if (c.includes("mfce")) return "এমএফসিই";
    return titleCase(cat);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="flex h-full sm:h-auto sm:max-h-[94vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Modern Header */}
        <div className="flex items-center justify-between border-b bg-linear-to-r from-teal-800 via-teal-900 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30 text-lg shadow-inner">
              🤝
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                  কল্যাণ তহবিল সেটিংস (Kallyan Fund)
                </h2>
                <span className="rounded-md bg-teal-500/20 px-2 py-0.5 text-[10px] font-bold text-teal-200 ring-1 ring-teal-400/30 uppercase">
                  Disburse Settings
                </span>
              </div>
              <p className="text-xs text-teal-200/80 font-medium">
                ঋণ বিতরণকালে কল্যাণ ফি ও শতকরা হারের সহজ কনফিগারেশন
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-teal-300 hover:text-white hover:bg-white/10 transition cursor-pointer text-xl leading-none"
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

        {/* Hero Section: Quick 1-Click Presets & Test Disburse Simulator */}
        <div className="border-b bg-linear-to-b from-teal-50/90 to-slate-50/70 p-3 sm:p-4 shrink-0 space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            
            {/* Quick 1-Click Presets */}
            <div className="space-y-1.5 flex-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-teal-900 block">
                ⚡ ১-ক্লিক রেডি প্রিসেট (Quick Presets):
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => handleApplyPreset("standard")}
                  className="rounded-xl bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>🌟</span>
                  <span>স্ট্যান্ডার্ড (১% + ১৫ ৳, বুনিয়াদ ০.৫% + ১৫ ৳)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset("all_1_15")}
                  className="rounded-xl bg-white hover:bg-teal-50 border border-teal-300 text-teal-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer"
                >
                  সব ১% + ১৫ ৳
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset("all_05_15")}
                  className="rounded-xl bg-white hover:bg-teal-50 border border-teal-300 text-teal-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer"
                >
                  সব ০.৫% + ১৫ ৳
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset("all_1_0")}
                  className="rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer"
                >
                  শুধু ১% (০ ৳ ফিক্সড)
                </button>
              </div>
            </div>

            {/* Test Amount Simulator Input */}
            <div className="rounded-xl border border-teal-200 bg-white p-2.5 shadow-2xs flex items-center gap-2.5 shrink-0">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block">
                  টেস্ট লোন পরিমাণ (Sample):
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <input
                    type="number"
                    min={1000}
                    step={5000}
                    value={sampleAmount}
                    onChange={(e) => setSampleAmount(Number(e.target.value) || 0)}
                    className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono text-sm font-black text-teal-950 focus:border-teal-600 focus:outline-none"
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
                        ? "bg-teal-700 text-white"
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
          <div className="flex items-center justify-between text-[11px] bg-teal-100/60 rounded-lg px-3 py-1.5 text-teal-950 border border-teal-200/80">
            <span className="font-semibold">
              💡 হিসাবের নিয়ম: <span className="font-mono font-bold">(লোন × পার্সেন্টেজ ÷ ১০০) + ফিক্সড ফি = মোট কল্যাণ ফি</span>
            </span>
            <span className="hidden sm:inline text-teal-800 font-medium">
              উদাহরণ: {fmt(sampleAmount)} × ১% + ১৫ = <b className="font-mono">{fmt(Math.round((sampleAmount * 1) / 100) + 15)} ৳</b>
            </span>
          </div>
        </div>

        {/* Scrollable Body: Product Cards Grid */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <span>📋</span> প্রোডাক্টভিত্তিক কল্যাণ ফি নির্ধারণ:
            </span>
            <span className="text-xs text-slate-500 font-medium">
              মোট <b className="text-teal-700">{allCategoryNames.length}</b> টি প্রোডাক্ট
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {allCategoryNames.map((cat) => {
              const cfg = categoryRules[cat] || { percent: defaultPercent, fixed: defaultFixed };
              const testCalc = calcKallyan(sampleAmount, cat, {
                percent: defaultPercent,
                fixed: defaultFixed,
                categoryOverrides: categoryRules,
              });

              const isBuniyed = cat.toLowerCase().includes("buniyed");

              return (
                <div
                  key={cat}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-teal-500 hover:shadow-md transition group"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`h-8 w-8 rounded-xl bg-linear-to-tr ${getProductColor(cat)} flex items-center justify-center text-white text-xs font-bold shadow-xs`}>
                        {cat.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-sm text-slate-900">
                            {titleCase(cat)}
                          </span>
                          <span className="text-xs text-slate-400 font-semibold">
                            ({getProductBengaliName(cat)})
                          </span>
                        </div>
                        {isBuniyed && (
                          <span className="text-[10px] text-amber-700 font-bold block">
                            ★ বুনিয়াদে সাধারণত ০.৫% + ১৫ প্রযোজ্য হয়
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="rounded-full bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 text-[10px] font-black">
                        {cfg.percent}% + {cfg.fixed} ৳
                      </span>
                    </div>
                  </div>

                  {/* Percentage & Fixed Inputs */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Percent Column */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700">
                        পার্সেন্টেজ (%)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          value={cfg.percent}
                          onChange={(e) =>
                            updateCategory(cat, "percent", parseFloat(e.target.value) || 0)
                          }
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                        />
                        <span className="absolute left-3 top-2 text-xs font-bold text-slate-400">
                          %
                        </span>
                      </div>
                      {/* Quick percent presets */}
                      <div className="flex gap-1">
                        {[0.5, 1.0, 1.5].map((pVal) => (
                          <button
                            key={pVal}
                            type="button"
                            onClick={() => updateCategory(cat, "percent", pVal)}
                            className={`flex-1 rounded-md py-0.5 text-[10px] font-bold transition cursor-pointer ${
                              cfg.percent === pVal
                                ? "bg-teal-700 text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {pVal}%
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fixed Fee Column */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700">
                        ফিক্সড ফি (Tk)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          step="1"
                          min="0"
                          value={cfg.fixed}
                          onChange={(e) =>
                            updateCategory(cat, "fixed", parseFloat(e.target.value) || 0)
                          }
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                        />
                        <span className="absolute left-3 top-2 text-xs font-bold text-slate-400">
                          ৳
                        </span>
                      </div>
                      {/* Quick fixed presets */}
                      <div className="flex gap-1">
                        {[0, 10, 15, 20].map((fVal) => (
                          <button
                            key={fVal}
                            type="button"
                            onClick={() => updateCategory(cat, "fixed", fVal)}
                            className={`flex-1 rounded-md py-0.5 text-[10px] font-bold transition cursor-pointer ${
                              cfg.fixed === fVal
                                ? "bg-teal-700 text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {fVal}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Live Calculation Preview Banner */}
                  <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200/90 px-3 py-2">
                    <span className="text-[11px] text-slate-600 font-medium">
                      {fmt(sampleAmount)} ৳ লোনে কল্যাণ ফি:
                    </span>
                    <span className="font-mono text-sm font-black text-teal-800">
                      {fmt(testCalc)} ৳
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fallback Default Rule Box */}
          <div className="rounded-2xl border border-slate-300 bg-slate-50 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-black text-xs text-slate-900 block">
                  ⚙️ অন্যান্য / নতুন প্রোডাক্টের জন্য ডিফল্ট নিয়ম (Default Rule):
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  ভবিষ্যতে তালিকায় না থাকা কোনো নতুন ঋণ প্রোডাক্ট যুক্ত হলে স্বয়ংক্রিয়ভাবে এই নিয়ম প্রযোজ্য হবে।
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-600">পার্সেন্টেজ:</span>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={defaultPercent}
                    onChange={(e) => setDefaultPercent(parseFloat(e.target.value) || 0)}
                    className="w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs font-bold text-slate-900"
                  />
                  <span className="text-xs font-bold text-slate-500">%</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-600">ফিক্সড:</span>
                  <input
                    type="number"
                    step="1"
                    min="0"
                    value={defaultFixed}
                    onChange={(e) => setDefaultFixed(parseFloat(e.target.value) || 0)}
                    className="w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs font-bold text-slate-900"
                  />
                  <span className="text-xs font-bold text-slate-500">৳</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Actions */}
        <div className="flex items-center justify-between border-t bg-slate-50 px-4 sm:px-6 py-3.5 shrink-0">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5"
            title="Reset to default settings"
          >
            <span>🔄</span>
            <span>ডিফল্ট রিসেট</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              বাতিল
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-teal-700 hover:bg-teal-800 active:bg-teal-900 px-6 py-2 text-xs sm:text-sm font-black text-white shadow-md shadow-teal-700/20 transition cursor-pointer flex items-center gap-1.5"
            >
              <span>✓</span>
              <span>সেটিংস সংরক্ষণ করুন</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import type { KallyanRule } from "@/types";
import { DEFAULT_KALLYAN_RULE, calcKallyan, titleCase } from "@/lib/categories";
import { saveKallyanRule } from "@/lib/storage";
import { fmt } from "./DenominationPopup";

export default function KallyanSettings({
  rule,
  disburseCategories = [],
  onChanged,
  onClose,
}: {
  rule: KallyanRule;
  disburseCategories?: string[];
  onChanged: () => void;
  onClose: () => void;
}) {
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

  const handleApplyToAll = (p: number, f: number) => {
    const updated: Record<string, { percent: number; fixed: number }> = {};
    for (const cat of allCategoryNames) {
      updated[cat] = { percent: p, fixed: f };
    }
    setCategoryRules(updated);
    setDefaultPercent(p);
    setDefaultFixed(f);
    setMsg(`All disburse categories set to ${p}% + ${f} Tk`);
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
    setMsg("Kallyan rules saved successfully for all disburse products!");
    onChanged();
    setTimeout(() => {
      onClose();
    }, 700);
  };

  const handleReset = () => {
    if (confirm("Reset Kallyan rules to standard defaults (Default 1% + 15, Buniyed 0.5% + 15)?")) {
      saveKallyanRule(DEFAULT_KALLYAN_RULE);
      setDefaultPercent(DEFAULT_KALLYAN_RULE.percent);
      setDefaultFixed(DEFAULT_KALLYAN_RULE.fixed);
      setCategoryRules({ ...(DEFAULT_KALLYAN_RULE.categoryOverrides || {}) });
      setMsg("Reset to standard defaults (1% + 15, Buniyed 0.5% + 15).");
      onChanged();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 sm:p-4">
      <div className="flex max-h-[92vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-teal-800 px-5 py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙</span>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Kallyan Rules (Disburse Category Settings)</h2>
              <p className="text-xs text-teal-200">
                প্রত্যেক Disburse প্রোডাক্টের জন্য আলাদা আলাদা কল্যাণ ফি ও শতকরা হার কনফিগার করুন
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-teal-200 hover:text-white transition cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Global Toolbar & Test Calculator */}
        <div className="border-b bg-teal-50/70 p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Sample Test Disburse:</span>
              <input
                type="number"
                min={0}
                step={5000}
                value={sampleAmount}
                onChange={(e) => setSampleAmount(Number(e.target.value) || 0)}
                className="w-28 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-right font-mono text-xs font-bold text-teal-950 focus:border-teal-600 focus:outline-none"
              />
              <span className="text-xs font-semibold text-slate-500">Tk</span>
            </div>

            {/* Quick Bulk Presets */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-[11px] font-semibold text-slate-600">Quick Presets:</span>
              <button
                type="button"
                onClick={() => {
                  const standardOverrides: Record<string, { percent: number; fixed: number }> = {};
                  for (const cat of allCategoryNames) {
                    if (cat.trim().toLowerCase() === "buniyed" || cat.trim().toLowerCase() === "buniyad") {
                      standardOverrides[cat] = { percent: 0.5, fixed: 15 };
                    } else {
                      standardOverrides[cat] = { percent: 1, fixed: 15 };
                    }
                  }
                  setCategoryRules(standardOverrides);
                  setDefaultPercent(1);
                  setDefaultFixed(15);
                  setMsg("Applied: 1% + 15 (Buniyed: 0.5% + 15)");
                }}
                className="rounded bg-teal-700 hover:bg-teal-800 px-2 py-1 font-bold text-white shadow-xs cursor-pointer text-[11px]"
              >
                ★ Standard (1%+15, Buniyed 0.5%+15)
              </button>
              <button
                type="button"
                onClick={() => handleApplyToAll(1, 15)}
                className="rounded bg-teal-600 hover:bg-teal-700 px-2 py-1 font-bold text-white shadow-xs cursor-pointer text-[11px]"
              >
                All 1% + 15
              </button>
              <button
                type="button"
                onClick={() => handleApplyToAll(0.5, 15)}
                className="rounded bg-slate-600 hover:bg-slate-700 px-2 py-1 font-bold text-white shadow-xs cursor-pointer text-[11px]"
              >
                All 0.5% + 15
              </button>
              <button
                type="button"
                onClick={() => handleApplyToAll(1, 0)}
                className="rounded bg-slate-500 hover:bg-slate-600 px-2 py-1 font-bold text-white shadow-xs cursor-pointer text-[11px]"
              >
                All 1% + 0
              </button>
            </div>
          </div>

          {/* Formula reminder */}
          <div className="text-[11px] text-teal-900 font-medium">
            💡 ফর্মুলা: <code className="bg-teal-150 px-1 rounded font-mono font-bold">Kallyan = Math.round((Disburse × Percent) / 100) + Fixed</code>
          </div>
        </div>

        {/* Scrollable Category Grid / List */}
        <div className="flex-1 overflow-auto p-4 space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {allCategoryNames.map((cat) => {
              const cfg = categoryRules[cat] || { percent: defaultPercent, fixed: defaultFixed };
              const testCalc = calcKallyan(sampleAmount, cat, {
                percent: defaultPercent,
                fixed: defaultFixed,
                categoryOverrides: categoryRules,
              });

              return (
                <div
                  key={cat}
                  className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs hover:border-teal-400 transition"
                >
                  <div className="flex items-center justify-between border-b pb-2 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
                      <span className="font-bold text-sm text-slate-900">
                        {titleCase(cat)}
                      </span>
                    </div>
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                      Disburse Product
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        Percentage (%)
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
                          className="w-full rounded border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs sm:text-sm font-bold text-slate-800 focus:border-teal-600 focus:outline-none"
                        />
                        <span className="absolute left-2 top-1 text-[11px] font-bold text-slate-400">
                          %
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        Fixed Fee (Tk)
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
                          className="w-full rounded border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs sm:text-sm font-bold text-slate-800 focus:border-teal-600 focus:outline-none"
                        />
                        <span className="absolute left-2 top-1 text-[11px] font-bold text-slate-400">
                          Tk
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category Preview */}
                  <div className="mt-2.5 flex items-center justify-between rounded bg-slate-50 px-2.5 py-1.5 border border-slate-200">
                    <span className="text-[11px] text-slate-600">
                      On {fmt(sampleAmount)} Tk:
                    </span>
                    <span className="font-mono text-xs font-black text-teal-800">
                      {fmt(testCalc)} Tk
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Default Fallback row */}
          <div className="mt-4 rounded-xl border border-slate-300 bg-slate-50 p-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-xs text-slate-800">
                  Default Rule (For other or new disburse categories):
                </span>
                <p className="text-[11px] text-slate-500">
                  উপরে নির্দিষ্ট করা নেই এমন অন্য যেকোনো ডিসবার্স ক্যাটাগরির জন্য এই রুল প্রযোজ্য হবে।
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-slate-600">Percent:</span>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={defaultPercent}
                    onChange={(e) => setDefaultPercent(parseFloat(e.target.value) || 0)}
                    className="w-16 rounded border border-slate-300 bg-white px-1.5 py-0.5 text-right font-mono text-xs font-bold text-slate-800"
                  />
                  <span className="text-xs text-slate-500">%</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-slate-600">Fixed:</span>
                  <input
                    type="number"
                    step="1"
                    min="0"
                    value={defaultFixed}
                    onChange={(e) => setDefaultFixed(parseFloat(e.target.value) || 0)}
                    className="w-16 rounded border border-slate-300 bg-white px-1.5 py-0.5 text-right font-mono text-xs font-bold text-slate-800"
                  />
                  <span className="text-xs text-slate-500">Tk</span>
                </div>
              </div>
            </div>
          </div>

          {msg && (
            <div className="rounded-lg bg-emerald-50 border border-emerald-300 px-3 py-2 text-xs font-bold text-emerald-800">
              {msg}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t bg-slate-50 px-5 py-3">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            Reset Defaults
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-lg bg-teal-600 hover:bg-teal-700 px-6 py-2 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
            >
              Save All Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

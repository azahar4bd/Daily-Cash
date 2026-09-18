import { useEffect, useState } from "react";
import RebateRateManager from "./RebateRateManager";
import { fmt } from "./DenominationPopup";
import { getRebateRates } from "@/lib/storage";
import type { RebateRateItem } from "@/types";

type RebateForm = {
  product: string;
  duration: string;
  kisti: string;
  disburse: string;
};

export default function RebatePage() {
  const [rates, setRates] = useState<RebateRateItem[]>([]);
  const [viewTab, setViewTab] = useState<"calculator" | "database">("calculator");
  const [form, setForm] = useState<RebateForm>({
    product: "Jagoron",
    duration: "Week",
    kisti: "1",
    disburse: "50000",
  });
  const [dbOpen, setDbOpen] = useState(false);
  const [showChart, setShowChart] = useState(true);

  const loadRates = () => {
    const r = getRebateRates();
    setRates(r);
    const prods = Array.from(new Set(r.map((x) => x.product))).sort();
    setForm((prev) => {
      if (prev.product && !prods.includes(prev.product)) {
        const nextP = prods[0] || "";
        const nextDurs = Array.from(
          new Set(r.filter((x) => x.product === nextP).map((x) => x.duration))
        );
        return {
          ...prev,
          product: nextP,
          duration: nextDurs[0] || "",
          kisti: "",
        };
      }
      return prev;
    });
  };

  useEffect(() => {
    loadRates();
    const handleRebateChange = () => loadRates();
    window.addEventListener("rebate-rates-changed", handleRebateChange);
    return () => window.removeEventListener("rebate-rates-changed", handleRebateChange);
  }, []);

  const products = Array.from(new Set(rates.map((r) => r.product))).sort();
  const availableDurations = Array.from(
    new Set(rates.filter((r) => r.product === form.product).map((r) => r.duration))
  );

  const productRates = rates
    .filter((r) => r.product === form.product && r.duration === form.duration)
    .sort((a, b) => a.kisti - b.kisti);

  const kistiOptions = productRates.map((r) => r.kisti);

  const matchedRow = rates.find(
    (r) =>
      r.product === form.product &&
      r.duration === form.duration &&
      r.kisti === Number(form.kisti)
  );
  const curRate = matchedRow ? Number(matchedRow.rate) : null;

  const calcRebate = (disburseStr: string, rate: number | null): number => {
    const d = Number(disburseStr);
    if (!d || d <= 0 || rate === null || rate <= 0) return 0;
    const base = d >= 1000 ? d / 1000 : d;
    return Math.round(base * rate);
  };

  const curRebate = calcRebate(form.disburse, curRate);

  const handleProductChange = (newProd: string) => {
    if (!newProd) {
      setForm({ ...form, product: "", duration: "", kisti: "" });
      return;
    }
    const validDurs = Array.from(
      new Set(rates.filter((r) => r.product === newProd).map((r) => r.duration))
    );
    const nextDur = validDurs.includes(form.duration) ? form.duration : validDurs[0] || "";
    setForm({
      ...form,
      product: newProd,
      duration: nextDur,
      kisti: "",
    });
  };

  const handleReset = () => {
    setForm({
      product: "",
      duration: "",
      kisti: "",
      disburse: "",
    });
  };

  return (
    <div className="space-y-4">
      {/* Top Segmented View Switcher */}
      <div className="flex flex-wrap items-center justify-between border border-slate-200 bg-white p-2.5 rounded-2xl shadow-xs gap-3">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => setViewTab("calculator")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
              viewTab === "calculator"
                ? "bg-white text-indigo-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>🧮</span>
            <span>রিবেট ক্যালকুলেটর</span>
          </button>
          <button
            type="button"
            onClick={() => setViewTab("database")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
              viewTab === "database"
                ? "bg-white text-indigo-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>📋</span>
            <span>রেট ডাটাবেজ টেবিল</span>
            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-mono font-bold text-indigo-800">
              {rates.length}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {viewTab === "calculator" ? (
            <button
              type="button"
              onClick={() => setViewTab("database")}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 px-3.5 py-2 text-xs sm:text-sm font-black text-white shadow-sm transition cursor-pointer"
            >
              <span>📋</span>
              <span>ডাটাবেজ টেবিল দেখুন ({rates.length})</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setViewTab("calculator")}
              className="flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-900 px-3.5 py-2 text-xs sm:text-sm font-black text-white shadow-sm transition cursor-pointer"
            >
              <span>🧮</span>
              <span>ক্যালকুলেটরে ফিরুন</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setDbOpen(true)}
            className="flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700 shadow-2xs transition cursor-pointer"
            title="পপআপ উইন্ডোতে ডাটাবেজ খুলুন"
          >
            <span>⛶</span>
            <span className="hidden sm:inline">পপআপ</span>
          </button>
        </div>
      </div>

      {/* Main View Display */}
      {viewTab === "database" ? (
        /* Full Live Database Table Embedded directly on Rebate Page */
        <div className="w-full">
          <RebateRateManager
            isEmbedded={true}
            onUpdated={loadRates}
          />
        </div>
      ) : (
        /* Calculator & Rate Chart View */
        <div className="space-y-6">
          {/* Top Box */}
          <div className="rounded-2xl border-t-4 border-amber-500 bg-white p-5 shadow-sm border border-slate-200">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span>🧮 Rebate Calculator</span>
              </h1>
              <button
                type="button"
                onClick={() => setViewTab("database")}
                className="flex items-center gap-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 px-3.5 py-1.5 text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <span>📋 রেট ডাটাবেজ এডিট ({rates.length})</span>
              </button>
            </div>

            {/* Input fields */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">Product</label>
                  <select
                    value={form.product}
                    onChange={(e) => handleProductChange(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="">Select Product</option>
                    {products.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">Duration</label>
                  <select
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value, kisti: "" })}
                    className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="">Select Duration</option>
                    {availableDurations.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">Advance Kisti</label>
                  <select
                    value={form.kisti}
                    onChange={(e) => setForm({ ...form, kisti: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="">Select Kisti</option>
                    {kistiOptions.map((k) => (
                      <option key={k} value={k}>
                        Kisti {k}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">Disburse</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={form.disburse}
                    onChange={(e) => setForm({ ...form, disburse: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-yellow-50 px-2.5 py-2 text-right font-mono text-sm font-bold focus:border-blue-500 focus:outline-none sm:text-base"
                  />
                </div>
              </div>

              {/* Result Dashboard */}
              <div className="mt-4 rounded-xl border-2 border-indigo-200 bg-white p-3 shadow-xs">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                  <div className="rounded-lg bg-slate-50 border p-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Product</span>
                    <span className="text-xs font-bold text-indigo-900 truncate block">
                      {form.product || "-"} ({form.duration})
                    </span>
                  </div>
                  <div className="rounded-lg bg-slate-50 border p-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Advance Kisti</span>
                    <span className="text-xs font-bold font-mono text-blue-800 block">
                      {form.kisti ? `Kisti ${form.kisti}` : "-"}
                    </span>
                  </div>
                  <div className="rounded-lg bg-slate-50 border p-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Disburse</span>
                    <span className="text-xs font-bold font-mono text-slate-900 block">
                      {form.disburse ? fmt(Number(form.disburse)) : "0"}
                    </span>
                  </div>
                  <div className="rounded-lg bg-slate-50 border p-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Rate</span>
                    <span className="text-xs font-bold font-mono text-indigo-700 block">
                      {curRate === null ? "-" : Number(curRate)}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 rounded-lg bg-amber-100 border-2 border-amber-400 p-2 flex flex-col justify-center">
                    <span className="text-[10px] font-black text-amber-950 uppercase tracking-wide">Rebate (Tk)</span>
                    <span className="text-lg font-black font-mono text-slate-950 mt-0.5">{fmt(curRebate)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg bg-slate-500 px-6 py-2 font-bold text-sm text-white hover:bg-slate-600 cursor-pointer"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setShowChart(!showChart)}
                className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
              >
                {showChart ? "Hide Rate Chart" : "Show Rate Chart"}
              </button>
            </div>
          </div>

          {/* Chart */}
          {showChart && productRates.length > 0 && (
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
              <div className="mb-3 border-b pb-2 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-sm">
                  {form.product} {form.duration} Rate Chart
                </h3>
                <span className="text-xs text-slate-500">
                  মোট {productRates.length}টি কিস্তির রেট
                </span>
              </div>
              <div className="max-h-80 overflow-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[420px] text-left text-xs sm:text-sm whitespace-nowrap">
                  <thead className="sticky top-0 bg-slate-800 text-white">
                    <tr>
                      <th className="px-3 py-2 text-center whitespace-nowrap">Advance Kisti</th>
                      <th className="px-3 py-2 text-right whitespace-nowrap">Rate</th>
                      <th className="px-3 py-2 text-right whitespace-nowrap">
                        Rebate ({form.disburse ? `${fmt(form.disburse)} Tk` : "Disburse"})
                      </th>
                      <th className="px-3 py-2 text-center whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productRates.map((r) => {
                      const isSelected = Number(form.kisti) === r.kisti;
                      const rowRebate = calcRebate(form.disburse, Number(r.rate));
                      return (
                        <tr
                          key={r.id}
                          onClick={() => setForm({ ...form, kisti: String(r.kisti) })}
                          className={`cursor-pointer border-b transition ${
                            isSelected
                              ? "bg-amber-100 font-bold text-slate-900"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <td className="px-3 py-2 text-center font-mono whitespace-nowrap">Kisti {r.kisti}</td>
                          <td className="px-3 py-2 text-right font-mono font-semibold whitespace-nowrap">{Number(r.rate)}</td>
                          <td className="px-3 py-2 text-right font-mono font-bold text-amber-800 whitespace-nowrap">
                            {fmt(rowRebate)}
                          </td>
                          <td className="px-3 py-2 text-center whitespace-nowrap">
                            {isSelected ? (
                              <span className="inline-block rounded bg-amber-600 px-2 py-0.5 text-[10px] font-bold text-white">
                                Selected
                              </span>
                            ) : (
                              <span className="text-[10px] text-slate-400">Select</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal Popup (when clicked popup button) */}
      {dbOpen && (
        <RebateRateManager
          onClose={() => setDbOpen(false)}
          onUpdated={loadRates}
        />
      )}
    </div>
  );
}

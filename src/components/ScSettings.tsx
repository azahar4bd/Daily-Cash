import { useState } from "react";
import type { ScRate } from "@/types";
import { PAYMENT_SUB_CATEGORIES, titleCase } from "@/lib/categories";
import { saveScRate, deleteScRate } from "@/lib/storage";

export default function ScSettings({
  rates,
  categories,
  onChanged,
  onClose,
}: {
  rates: ScRate[];
  categories: string[];
  onChanged: () => void;
  onClose: () => void;
}) {
  const [cat, setCat] = useState(categories[0] ?? "");
  const [sub, setSub] = useState(PAYMENT_SUB_CATEGORIES[0]);
  const [rate, setRate] = useState("");
  const [edits, setEdits] = useState<Record<number, string>>({});
  const [err, setErr] = useState("");

  const add = () => {
    if (!cat.trim() || !sub.trim()) return setErr("Category & sub category required");
    saveScRate({
      category: cat.trim().toLowerCase(),
      subCategory: sub.trim().toLowerCase(),
      ratePer100: String(Number(rate) || 0),
    });
    setErr("");
    setRate("");
    onChanged();
  };

  const saveRow = (id: number) => {
    const r = rates.find((x) => x.id === id);
    if (r) {
      saveScRate({
        id,
        category: r.category,
        subCategory: r.subCategory,
        ratePer100: String(Number(edits[id]) || 0),
      });
      const n = { ...edits };
      delete n[id];
      setEdits(n);
      onChanged();
    }
  };

  const del = (id: number) => {
    if (!confirm("Delete this rate?")) return;
    deleteScRate(id);
    onChanged();
  };

  const allCats = Array.from(new Set([...categories, ...rates.map((r) => r.category)]));
  const allSubs = Array.from(new Set([...PAYMENT_SUB_CATEGORIES, ...rates.map((r) => r.subCategory)]));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4">
      <div className="flex max-h-[95vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300">
        <div className="flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white">
          <h3 className="text-base sm:text-lg font-bold">⚙ Service Charge Settings</h3>
          <button onClick={onClose} className="text-2xl text-slate-300 hover:text-white">
            ×
          </button>
        </div>
        <div className="border-b bg-slate-50 px-4 sm:px-5 py-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div>
              <label className="text-xs font-bold text-slate-700">Category</label>
              <input
                list="sc-cats"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="w-full rounded border border-slate-300 px-2 py-1.5 text-xs sm:text-sm capitalize focus:border-blue-500 focus:outline-none bg-white"
              />
              <datalist id="sc-cats">
                {allCats.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Sub Category</label>
              <input
                list="sc-subs"
                value={sub}
                onChange={(e) => setSub(e.target.value)}
                className="w-full rounded border border-slate-300 px-2 py-1.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none bg-white"
              />
              <datalist id="sc-subs">
                {allSubs.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">SC / 100 Tk</label>
              <input
                type="number"
                step="0.01"
                min={0}
                value={rate}
                placeholder="0.00"
                onChange={(e) => setRate(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && add()}
                className="w-full rounded border border-slate-300 px-2 py-1.5 text-right font-mono text-xs sm:text-sm focus:border-blue-500 focus:outline-none bg-white font-bold"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={add}
                className="w-full rounded-lg bg-green-600 px-4 py-1.5 font-bold text-xs sm:text-sm text-white hover:bg-green-700"
              >
                Add Rate
              </button>
            </div>
          </div>
          {err && <p className="mt-1 text-xs text-rose-600 font-semibold">{err}</p>}
        </div>
        <div className="flex-1 overflow-auto p-4">
          <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
            <thead className="sticky top-0 bg-slate-800 text-white">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Category</th>
                <th className="px-3 py-2 text-left font-bold">Sub Category</th>
                <th className="px-3 py-2 text-right font-bold">SC / 100 Tk</th>
                <th className="px-3 py-2 text-center font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {rates.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-slate-400">
                    No rates yet
                  </td>
                </tr>
              ) : (
                rates.map((r) => {
                  const editing = r.id in edits;
                  return (
                    <tr key={r.id} className="border-b hover:bg-slate-50">
                      <td className="px-3 py-2 font-semibold text-slate-900">{titleCase(r.category)}</td>
                      <td className="px-3 py-2 text-slate-600">{r.subCategory}</td>
                      <td className="px-3 py-2 text-right font-mono font-bold text-indigo-900">
                        {editing ? (
                          <input
                            type="number"
                            step="0.01"
                            min={0}
                            autoFocus
                            value={edits[r.id]}
                            onChange={(e) => setEdits({ ...edits, [r.id]: e.target.value })}
                            onKeyDown={(e) => e.key === "Enter" && saveRow(r.id)}
                            className="w-20 rounded border px-1.5 py-0.5 text-right font-bold"
                          />
                        ) : (
                          Number(r.ratePer100).toFixed(2)
                        )}
                      </td>
                      <td className="px-3 py-2 text-center">
                        {editing ? (
                          <button
                            onClick={() => saveRow(r.id)}
                            className="mr-1 rounded bg-green-600 px-2 py-0.5 text-xs text-white"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => setEdits({ ...edits, [r.id]: String(Number(r.ratePer100)) })}
                            className="mr-1 rounded bg-blue-600 px-2 py-0.5 text-xs text-white hover:bg-blue-700"
                          >
                            Edit
                          </button>
                        )}
                        <button
                          onClick={() => del(r.id)}
                          className="rounded bg-rose-600 px-2 py-0.5 text-xs text-white hover:bg-rose-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

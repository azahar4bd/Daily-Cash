import { useEffect, useState } from "react";
import CategoryInput from "./CategoryInput";
import DatePicker from "./DatePicker";
import DenominationPopup, { fmt } from "./DenominationPopup";
import CategoryManager from "./CategoryManager";
import { titleCase } from "@/lib/categories";
import {
  getLocalTxs,
  saveTx,
  updateTx,
  deleteTx,
  getCategories,
  getSummary,
  isDayClosed,
} from "@/lib/storage";
import type { Tx, Cat, Denom } from "@/types";

type FormState = {
  id?: number;
  category: string;
  amount: number;
  description: string;
  denomination: Denom;
  otherAmount: number;
  txDate: string;
};

const prevDay = (iso: string) => {
  if (!iso || !iso.includes("-")) return "";
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
};

export default function ReceivePage({ selectedDate }: { selectedDate: string }) {
  const [rows, setRows] = useState<Tx[]>([]);
  const [cats, setCats] = useState<Cat[]>([]);
  const [manage, setManage] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  const [form, setForm] = useState<FormState>({
    category: "",
    amount: 0,
    description: "",
    denomination: {},
    otherAmount: 0,
    txDate: selectedDate,
  });
  const [edit, setEdit] = useState<FormState | null>(null);
  const [denomOpen, setDenomOpen] = useState(false);
  const [editDenomOpen, setEditDenomOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [opening, setOpening] = useState<{ prevCash: number; prevBank: number } | null>(null);

  const load = () => {
    const all = getLocalTxs();
    const filtered = all.filter((t) => t.type === "receive" && t.txDate === selectedDate);
    setRows(filtered);
    const s = getSummary(selectedDate);
    setOpening({ prevCash: s.prevCash, prevBank: s.prevBank });
  };

  const loadCats = () => {
    setCats(getCategories("receive"));
  };

  useEffect(() => {
    load();
    loadCats();
    setForm((f) => ({ ...f, txDate: selectedDate }));
  }, [selectedDate]);

  const categoryNames = cats.map((c) => c.name);

  const handleSave = () => {
    if (isDayClosed(form.txDate)) {
      alert(`⚠️ এই তারিখের (${form.txDate}) দিন সমাপ্ত (Day Closed) রয়েছে। কোনো নতুন এন্ট্রি করা যাবে না। পরিবর্তন করতে চাইলে ক্যাশবুক পেজ থেকে দিনটি Re-open করুন।`);
      return;
    }
    if (!form.category.trim()) return setMsg("Category required");
    if (!form.amount || form.amount <= 0) return setMsg("Amount must be greater than 0");

    saveTx({
      type: "receive",
      category: form.category.trim().toLowerCase(),
      amount: String(form.amount),
      description: form.description || "",
      denomination: form.denomination,
      otherAmount: String(form.otherAmount || 0),
      txDate: form.txDate,
    });

    setForm({
      category: "",
      amount: 0,
      description: "",
      denomination: {},
      otherAmount: 0,
      txDate: selectedDate,
    });
    setMsg("Receive saved successfully!");
    load();
  };

  const handleUpdate = () => {
    if (!edit || !edit.id) return;
    if (isDayClosed(edit.txDate)) {
      alert(`⚠️ এই তারিখের (${edit.txDate}) দিন সমাপ্ত (Day Closed) রয়েছে। কোনো পরিবর্তন করা যাবে না। ক্যাশবুক পেজ থেকে দিনটি Re-open করুন।`);
      return;
    }
    if (!edit.category.trim()) return alert("Category required");
    if (!edit.amount || edit.amount <= 0) return alert("Amount must be greater than 0");

    updateTx({
      id: edit.id,
      type: "receive",
      category: edit.category.trim().toLowerCase(),
      amount: String(edit.amount),
      description: edit.description || "",
      denomination: edit.denomination,
      otherAmount: String(edit.otherAmount || 0),
      txDate: edit.txDate,
    });

    setEdit(null);
    load();
  };

  const confirmDelete = () => {
    if (deleteTargetId !== null) {
      const target = rows.find((r) => r.id === deleteTargetId);
      if (target && isDayClosed(target.txDate)) {
        alert("⚠️ দিন ক্লোজ থাকায় এই লেনদেনটি ডিলিট করা যাবে না। ক্যাশবুক থেকে Re-open করুন।");
        setDeleteTargetId(null);
        return;
      }
      deleteTx(deleteTargetId);
      setDeleteTargetId(null);
      load();
    }
  };

  const displayedRows =
    filterCategory === "all"
      ? rows
      : rows.filter((r) => r.category.toLowerCase().trim() === filterCategory.toLowerCase().trim());

  const displayedSum = displayedRows.reduce((s, r) => s + Number(r.amount), 0);
  const totalReceiveSum = rows.reduce((s, r) => s + Number(r.amount), 0);

  const uniqueCategories: string[] = Array.from(
    new Set(rows.map((r) => r.category.toLowerCase().trim()).filter(Boolean))
  );

  return (
    <div className="space-y-6">
      {/* Receive Form Card */}
      <div
        id="receive-form-card"
        className="rounded-2xl border-t-4 border-green-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200 transition-all"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📥</span>
            <span>Receive Entry</span>
          </h1>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
            {form.txDate}
          </span>
        </div>

        {isDayClosed(form.txDate) && (
          <div className="mb-4 rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-800 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span>🔒</span>
              <span>এই তারিখের ({form.txDate}) দিন সমাপ্ত (Day Closed) রয়েছে। হিসাবটি লক করা আছে।</span>
            </span>
            <span className="text-xs text-rose-600 font-semibold">ক্যাশবুকে Re-open করুন</span>
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

          {/* Category */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Category</label>
              <button
                type="button"
                onClick={() => setManage(true)}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                ⚙ Manage
              </button>
            </div>
            <CategoryInput
              value={form.category}
              onChange={(v) => setForm({ ...form, category: v })}
              options={categoryNames}
            />
          </div>

          {/* Amount (Click for Denomination) - Placeholder text removed as requested */}
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Amount</label>
            <input
              readOnly
              value={form.amount ? fmt(form.amount) : ""}
              placeholder=""
              onClick={() => setDenomOpen(true)}
              onFocus={() => setDenomOpen(true)}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold focus:border-blue-500 focus:outline-none transition shadow-2xs hover:bg-yellow-100/70"
            />
          </div>

          {/* Description Field (Amount এর পাশে ২য় ঘর) */}
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Description</label>
            <input
              type="text"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder=""
              autoComplete="off"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Save / Reset */}
          <div className="flex gap-2.5 md:col-span-2 pt-1">
            <button
              onClick={handleSave}
              disabled={isDayClosed(form.txDate)}
              className="min-h-[44px] rounded-xl bg-green-600 px-6 py-2.5 font-bold text-sm text-white shadow hover:bg-green-700 active:scale-98 transition cursor-pointer disabled:opacity-50"
            >
              Save Receive
            </button>
            <button
              onClick={() => {
                setForm({
                  category: "",
                  amount: 0,
                  description: "",
                  denomination: {},
                  otherAmount: 0,
                  txDate: selectedDate,
                });
                setMsg("");
              }}
              className="min-h-[44px] rounded-xl bg-slate-500 px-6 py-2.5 font-bold text-sm text-white hover:bg-slate-600 active:scale-98 transition cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>
        {msg && <p className="mt-2 text-xs font-bold text-emerald-700">{msg}</p>}

        <DenominationPopup
          open={denomOpen}
          initial={form.denomination}
          initialOther={form.otherAmount}
          onClose={() => setDenomOpen(false)}
          onDone={(d, other, total) => {
            setForm({ ...form, denomination: d, otherAmount: other, amount: total });
            setDenomOpen(false);
          }}
        />
      </div>

      {/* Saved Table Card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 text-sm sm:text-base">
              Saved Entries ({displayedRows.length}/{rows.length})
            </span>
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
                <th className="px-3.5 py-2.5">Date</th>
                <th className="px-3.5 py-2.5">Category</th>
                <th className="px-3.5 py-2.5">Description</th>
                <th className="px-3.5 py-2.5 text-right">Amount</th>
                <th className="px-3.5 py-2.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {opening && filterCategory === "all" && (
                <>
                  <tr className="border-b bg-emerald-50 font-semibold text-slate-900">
                    <td className="px-3.5 py-2">-</td>
                    <td className="px-3.5 py-2 font-mono">{prevDay(selectedDate)}</td>
                    <td className="px-3.5 py-2">Cash in Hand (Opening)</td>
                    <td className="px-3.5 py-2 text-slate-400 font-mono">-</td>
                    <td className="px-3.5 py-2 text-right font-mono text-emerald-800 font-bold">
                      {fmt(opening.prevCash)}
                    </td>
                    <td />
                  </tr>
                  <tr className="border-b bg-indigo-50 font-semibold text-slate-900">
                    <td className="px-3.5 py-2">-</td>
                    <td className="px-3.5 py-2 font-mono">{prevDay(selectedDate)}</td>
                    <td className="px-3.5 py-2">Bank Balance (Opening)</td>
                    <td className="px-3.5 py-2 text-slate-400 font-mono">-</td>
                    <td className="px-3.5 py-2 text-right font-mono text-indigo-800 font-bold">
                      {fmt(opening.prevBank)}
                    </td>
                    <td />
                  </tr>
                </>
              )}
              {displayedRows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-slate-400">
                    {filterCategory === "all"
                      ? `No receive entries on ${selectedDate}`
                      : `No entries for category "${titleCase(filterCategory)}"`}
                  </td>
                </tr>
              ) : (
                displayedRows.map((r, i) => (
                  <tr key={r.id} className="border-b hover:bg-slate-50">
                    <td className="px-3.5 py-2 text-slate-500 font-mono">{i + 1}</td>
                    <td className="px-3.5 py-2 font-mono">{r.txDate}</td>
                    <td className="px-3.5 py-2 font-bold text-slate-800">{titleCase(r.category)}</td>
                    <td className="px-3.5 py-2 text-slate-600">{r.description || "-"}</td>
                    <td className="px-3.5 py-2 text-right font-mono font-black text-green-700">
                      {fmt(r.amount)}
                    </td>
                    <td className="px-3.5 py-2 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setEdit({
                              id: r.id,
                              category: r.category,
                              amount: Number(r.amount),
                              description: r.description ?? "",
                              denomination: r.denomination ?? {},
                              otherAmount: Number(r.otherAmount ?? 0),
                              txDate: r.txDate,
                            })
                          }
                          className="min-h-[36px] rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTargetId(r.id)}
                          className="min-h-[36px] rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {rows.length > 0 && (
              <tfoot className="sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-300 z-10 shadow-inner">
                <tr className="border-b border-slate-200">
                  <td colSpan={4} className="px-3.5 py-2 text-right font-bold text-slate-700">
                    {filterCategory === "all" ? "Today's Receive" : `Subtotal (${titleCase(filterCategory)})`}
                  </td>
                  <td className="px-3.5 py-2 text-right font-mono font-bold text-green-700">
                    {fmt(filterCategory === "all" ? totalReceiveSum : displayedSum)}
                  </td>
                  <td />
                </tr>
                {filterCategory === "all" && (
                  <tr className="bg-emerald-50">
                    <td colSpan={4} className="px-3.5 py-2 text-right font-black text-emerald-900">
                      Total Receive
                    </td>
                    <td className="px-3.5 py-2 text-right font-mono font-black text-emerald-800 text-sm sm:text-base">
                      {fmt((opening?.prevCash || 0) + totalReceiveSum)}
                    </td>
                    <td />
                  </tr>
                )}
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
              Are you sure you want to permanently delete this receive entry? This action cannot be undone.
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
              <h2 className="text-lg font-bold">Edit Receive Entry #{edit.id}</h2>
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
                <CategoryInput
                  value={edit.category}
                  onChange={(v) => setEdit({ ...edit, category: v })}
                  options={categoryNames}
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-xs font-bold text-slate-700">Amount</label>
                <input
                  readOnly
                  value={edit.amount ? fmt(edit.amount) : ""}
                  placeholder=""
                  onClick={() => setEditDenomOpen(true)}
                  className="w-full cursor-pointer rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold"
                />
              </div>

              <div className="md:col-span-2">
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
                  className="min-h-[44px] rounded-xl bg-green-600 px-6 py-2 font-bold text-sm text-white hover:bg-green-700 transition"
                >
                  Update Entry
                </button>
              </div>
            </div>
            <DenominationPopup
              open={editDenomOpen}
              initial={edit.denomination}
              initialOther={edit.otherAmount}
              onClose={() => setEditDenomOpen(false)}
              onDone={(d, other, total) => {
                setEdit({ ...edit, denomination: d, otherAmount: other, amount: total });
                setEditDenomOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {manage && (
        <CategoryManager
          type="receive"
          cats={cats}
          onChanged={loadCats}
          onClose={() => setManage(false)}
        />
      )}
    </div>
  );
}

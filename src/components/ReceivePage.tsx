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
    if (!edit.category.trim()) return alert("Category required");
    if (!edit.amount || edit.amount <= 0) return alert("Amount must be greater than 0");

    updateTx({
      id: edit.id,
      type: "receive",
      category: edit.category.trim().toLowerCase(),
      amount: String(edit.amount),
      description: edit.description,
      denomination: edit.denomination,
      otherAmount: String(edit.otherAmount || 0),
      txDate: edit.txDate,
    });

    setEdit(null);
    load();
  };

  const handleDelete = (id: number) => {
    if (!confirm("Delete this entry?")) return;
    deleteTx(id);
    load();
  };

  const totalReceiveSum = rows.reduce((s, r) => s + Number(r.amount), 0);

  return (
    <div className="space-y-6">
      {/* Receive Form Card */}
      <div className="rounded-2xl border-t-4 border-green-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200">
        <h1 className="mb-4 text-2xl font-bold text-slate-900">Receive</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Date */}
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Date</label>
            <DatePicker
              value={form.txDate}
              onChange={(v) => setForm({ ...form, txDate: v })}
              className="px-3 py-2"
            />
          </div>
          {/* Category */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Category</label>
              <button
                type="button"
                onClick={() => setManage(true)}
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Manage
              </button>
            </div>
            <CategoryInput
              value={form.category}
              onChange={(v) => setForm({ ...form, category: v })}
              options={categoryNames}
            />
          </div>
          {/* Amount */}
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">
              Amount (Click for Denomination)
            </label>
            <input
              readOnly
              value={form.amount ? fmt(form.amount) : ""}
              placeholder="0"
              onClick={() => setDenomOpen(true)}
              onFocus={() => setDenomOpen(true)}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold focus:border-blue-500 focus:outline-none"
            />
          </div>
          {/* Description */}
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Description</label>
            <input
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Description..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          {/* Save / Reset */}
          <div className="flex gap-2 md:col-span-2">
            <button
              onClick={handleSave}
              className="rounded-lg bg-green-600 px-6 py-2 font-bold text-sm text-white shadow hover:bg-green-700 transition"
            >
              Save
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
              className="rounded-lg bg-slate-500 px-6 py-2 font-bold text-sm text-white hover:bg-slate-600 transition"
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

      {/* Saved Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50">
          <div className="font-bold text-slate-800 text-sm sm:text-base">
            Saved Receive Entries ({rows.length})
          </div>
          <div className="text-xs font-mono font-bold text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200">
            Date: {selectedDate}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead className="bg-slate-800 text-left text-white">
              <tr>
                <th className="px-3 py-2.5">#</th>
                <th className="px-3 py-2.5">Date</th>
                <th className="px-3 py-2.5">Category</th>
                <th className="px-3 py-2.5">Description</th>
                <th className="px-3 py-2.5 text-right">Amount</th>
                <th className="px-3 py-2.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {opening && (
                <>
                  <tr className="border-b bg-emerald-50 font-semibold text-slate-900">
                    <td className="px-3 py-2">-</td>
                    <td className="px-3 py-2 font-mono">{prevDay(selectedDate)}</td>
                    <td className="px-3 py-2">Cash in Hand (Opening)</td>
                    <td className="px-3 py-2 text-slate-500">Closing cash balance</td>
                    <td className="px-3 py-2 text-right font-mono text-emerald-800 font-bold">
                      {fmt(opening.prevCash)}
                    </td>
                    <td />
                  </tr>
                  <tr className="border-b bg-indigo-50 font-semibold text-slate-900">
                    <td className="px-3 py-2">-</td>
                    <td className="px-3 py-2 font-mono">{prevDay(selectedDate)}</td>
                    <td className="px-3 py-2">Bank Balance (Opening)</td>
                    <td className="px-3 py-2 text-slate-500">Closing bank balance</td>
                    <td className="px-3 py-2 text-right font-mono text-indigo-800 font-bold">
                      {fmt(opening.prevBank)}
                    </td>
                    <td />
                  </tr>
                </>
              )}
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-slate-400">
                    No receive entries on {selectedDate}
                  </td>
                </tr>
              ) : (
                rows.map((r, i) => (
                  <tr key={r.id} className="border-b hover:bg-slate-50">
                    <td className="px-3 py-2 text-slate-500 font-mono">{i + 1}</td>
                    <td className="px-3 py-2 font-mono">{r.txDate}</td>
                    <td className="px-3 py-2 font-bold text-slate-800">{titleCase(r.category)}</td>
                    <td className="px-3 py-2 text-slate-600">{r.description}</td>
                    <td className="px-3 py-2 text-right font-mono font-black text-green-700">
                      {fmt(r.amount)}
                    </td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">
                      <button
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
                        className="mr-1.5 rounded bg-blue-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(r.id)}
                        className="rounded bg-rose-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-rose-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {rows.length > 0 && (
              <tfoot className="bg-slate-100 font-bold border-t-2 border-slate-300">
                <tr>
                  <td colSpan={4} className="px-3 py-2 text-right font-bold text-slate-800">
                    Total Receive
                  </td>
                  <td className="px-3 py-2 text-right font-mono font-black text-green-800">
                    {fmt(totalReceiveSum)}
                  </td>
                  <td />
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {edit && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Edit Receive Entry #{edit.id}</h2>
              <button onClick={() => setEdit(null)} className="text-2xl text-slate-400 hover:text-rose-600">
                ×
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Date</label>
                <DatePicker
                  value={edit.txDate}
                  onChange={(v) => setEdit({ ...edit, txDate: v })}
                  className="px-3 py-2"
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
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Amount</label>
                <input
                  readOnly
                  value={edit.amount ? fmt(edit.amount) : ""}
                  placeholder="0"
                  onClick={() => setEditDenomOpen(true)}
                  className="w-full cursor-pointer rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Description</label>
                <input
                  value={edit.description}
                  onChange={(e) => setEdit({ ...edit, description: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </div>
              <div className="flex justify-end gap-2 md:col-span-2 border-t pt-3">
                <button
                  onClick={handleUpdate}
                  className="rounded-lg bg-green-600 px-6 py-2 font-bold text-sm text-white hover:bg-green-700"
                >
                  Update
                </button>
                <button
                  onClick={() => setEdit(null)}
                  className="rounded-lg bg-slate-500 px-6 py-2 font-bold text-sm text-white hover:bg-slate-600"
                >
                  Cancel
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

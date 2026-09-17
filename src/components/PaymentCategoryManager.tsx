import { useState } from "react";
import { titleCase } from "@/lib/categories";
import type { Cat } from "@/types";
import { addCategory, updateCategory, deleteCategory } from "@/lib/storage";

export default function PaymentCategoryManager({
  disburseCats,
  expenseCats,
  onChanged,
  onClose,
}: {
  disburseCats: Cat[];
  expenseCats: Cat[];
  onChanged: () => void;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"disburse" | "expense">("disburse");
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [err, setErr] = useState("");

  const currentCats = activeTab === "disburse" ? disburseCats : expenseCats;

  const add = () => {
    if (!newName.trim()) return;
    const clean = newName.trim().toLowerCase();
    if (currentCats.some((c) => c.name.toLowerCase() === clean)) {
      return setErr("Already exists");
    }
    addCategory(activeTab, clean);
    setErr("");
    setNewName("");
    onChanged();
  };

  const save = () => {
    if (!editId || !editName.trim()) return;
    updateCategory(editId, editName);
    setEditId(null);
    setEditName("");
    setErr("");
    onChanged();
  };

  const del = (id: number) => {
    if (!confirm("Delete this category?")) return;
    deleteCategory(id);
    onChanged();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white">
          <div>
            <h3 className="text-base sm:text-lg font-bold">Manage Payment Categories</h3>
            <p className="text-xs text-slate-300">Disburse & Expense categories</p>
          </div>
          <button onClick={onClose} className="text-2xl text-slate-300 hover:text-white">
            ×
          </button>
        </div>
        {/* 2-Part Tabs */}
        <div className="flex border-b bg-slate-100 p-1.5 gap-1">
          <button
            type="button"
            onClick={() => {
              setActiveTab("disburse");
              setErr("");
              setNewName("");
              setEditId(null);
            }}
            className={`flex-1 rounded-xl py-2 text-center text-xs sm:text-sm font-bold transition ${
              activeTab === "disburse"
                ? "bg-red-600 text-white shadow-sm"
                : "text-slate-700 hover:bg-slate-200"
            }`}
          >
            1. Disburse Categories ({disburseCats.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("expense");
              setErr("");
              setNewName("");
              setEditId(null);
            }}
            className={`flex-1 rounded-xl py-2 text-center text-xs sm:text-sm font-bold transition ${
              activeTab === "expense"
                ? "bg-slate-800 text-white shadow-sm"
                : "text-slate-700 hover:bg-slate-200"
            }`}
          >
            2. Expense Categories ({expenseCats.length})
          </button>
        </div>
        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex gap-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && add()}
              placeholder={
                activeTab === "disburse"
                  ? "e.g. Jagoron, Agrossor, Buniyed..."
                  : "e.g. Bank Deposit, Others Expense..."
              }
              className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={add}
              className="rounded-lg bg-green-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-green-700"
            >
              Add
            </button>
          </div>
          {err && <p className="mt-1 text-xs text-rose-600 font-semibold">{err}</p>}
          <ul className="mt-4 max-h-64 divide-y rounded-xl border border-slate-200 overflow-auto">
            {currentCats.length === 0 ? (
              <li className="px-3 py-6 text-center text-xs text-slate-400">No categories</li>
            ) : (
              currentCats.map((c) => (
                <li key={c.id} className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50">
                  {editId === c.id ? (
                    <>
                      <input
                        value={editName}
                        autoFocus
                        onChange={(e) => setEditName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && save()}
                        className="flex-1 rounded border border-slate-300 px-2 py-1 text-xs font-semibold focus:border-blue-500 focus:outline-none"
                      />
                      <button onClick={save} className="rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                        Save
                      </button>
                      <button onClick={() => setEditId(null)} className="rounded bg-slate-400 px-3 py-1 text-xs font-semibold text-white">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="flex-1 text-sm font-semibold text-slate-800">{titleCase(c.name)}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setEditId(c.id);
                          setEditName(c.name);
                        }}
                        className="rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => del(c.id)}
                        className="rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

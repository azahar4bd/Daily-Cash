import { useState } from "react";
import { titleCase } from "@/lib/categories";
import type { SubCategoryRule } from "@/types";
import { saveSubCategoryRule, deleteSubCategoryRule } from "@/lib/storage";

export default function SubCategoryRulesModal({
  open,
  onClose,
  rules,
  disburseCategories,
  onRulesChanged,
}: {
  open: boolean;
  onClose: () => void;
  rules: SubCategoryRule[];
  disburseCategories: string[];
  onRulesChanged: () => void;
}) {
  const [newSubCat, setNewSubCat] = useState("");
  const [newInstallments, setNewInstallments] = useState(12);
  const [newMode, setNewMode] = useState<"all" | "all_except" | "only">("all");
  const [newSelectedCats, setNewSelectedCats] = useState<string[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editSubCat, setEditSubCat] = useState("");
  const [editInstallments, setEditInstallments] = useState(12);
  const [editMode, setEditMode] = useState<"all" | "all_except" | "only">("all");
  const [editSelectedCats, setEditSelectedCats] = useState<string[]>([]);
  const [msg, setMsg] = useState("");

  if (!open) return null;

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
      setMsg("Sub Category name required");
      return;
    }
    saveSubCategoryRule({
      subCategory: newSubCat.trim(),
      installments: Number(newInstallments) || 12,
      mode: newMode,
      categories: newSelectedCats,
    });
    setNewSubCat("");
    setNewInstallments(12);
    setNewMode("all");
    setNewSelectedCats([]);
    setShowAddForm(false);
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
    if (!editingId || !editSubCat.trim()) return;
    saveSubCategoryRule({
      id: editingId,
      subCategory: editSubCat.trim(),
      installments: Number(editInstallments) || 12,
      mode: editMode,
      categories: editSelectedCats,
    });
    setEditingId(null);
    onRulesChanged();
  };

  const handleDelete = (id: number) => {
    if (!confirm("Delete this rule?")) return;
    deleteSubCategoryRule(id);
    onRulesChanged();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto">
      <div className="flex max-h-[92vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300">
        <div className="flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white">
          <div>
            <h3 className="font-bold text-base sm:text-lg leading-tight flex items-center gap-2">
              ⚙ Sub Category Rules
            </h3>
            <p className="text-xs text-slate-300">Manage duration & installments</p>
          </div>
          <button onClick={onClose} className="text-2xl text-slate-300 hover:text-white">
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {msg && (
            <div className="rounded bg-rose-100 border border-rose-300 p-2 text-xs font-bold text-rose-900">
              {msg}
            </div>
          )}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Active Rules ({rules.length})
              </span>
              {!showAddForm && (
                <button
                  type="button"
                  onClick={() => setShowAddForm(true)}
                  className="rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-xs font-bold transition shadow-xs flex items-center gap-1"
                >
                  <span>+</span> Add Rule
                </button>
              )}
            </div>
            <div className="divide-y rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              {rules.map((r) => {
                const isEditing = editingId === r.id;
                return (
                  <div key={r.id || r.subCategory} className="p-3 hover:bg-slate-50 transition">
                    {isEditing ? (
                      <div className="space-y-3 bg-indigo-50/70 p-3 rounded-lg border border-indigo-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1">
                              Sub Category Name
                            </label>
                            <input
                              type="text"
                              value={editSubCat}
                              onChange={(e) => setEditSubCat(e.target.value)}
                              className="w-full rounded border border-slate-300 px-2 py-1 text-xs font-bold font-mono"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1">
                              Installments
                            </label>
                            <input
                              type="number"
                              min="1"
                              value={editInstallments}
                              onChange={(e) => setEditInstallments(Number(e.target.value))}
                              className="w-full rounded border border-slate-300 px-2 py-1 text-xs font-bold font-mono"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Rule Mode
                          </label>
                          <select
                            value={editMode}
                            onChange={(e) => setNewMode(e.target.value as any)}
                            className="w-full rounded border border-slate-300 px-2 py-1 text-xs font-semibold bg-white"
                          >
                            <option value="all">All Categories</option>
                            <option value="all_except">All Except...</option>
                            <option value="only">Only in...</option>
                          </select>
                        </div>
                        <div className="flex justify-end gap-2 pt-1 border-t border-indigo-200">
                          <button
                            type="button"
                            onClick={handleSaveEdit}
                            className="rounded bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-1 text-xs font-bold transition shadow-xs"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingId(null)}
                            className="rounded bg-slate-400 hover:bg-slate-500 text-white px-3 py-1 text-xs font-semibold transition"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900 font-mono">
                              {r.subCategory}
                            </span>
                            <span className="rounded bg-slate-100 text-slate-700 px-2 py-0.5 text-xs font-semibold">
                              {r.installments} installments
                            </span>
                          </div>
                          <div className="text-xs text-slate-600 mt-0.5">
                            {r.mode === "all" && (
                              <span className="text-emerald-700 font-semibold">Allowed in all categories</span>
                            )}
                            {r.mode === "all_except" && (
                              <span className="text-amber-800 font-semibold">
                                Except: {r.categories.map((c) => titleCase(c)).join(", ")}
                              </span>
                            )}
                            {r.mode === "only" && (
                              <span className="text-blue-800 font-semibold">
                                Only in: {r.categories.map((c) => titleCase(c)).join(", ")}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => startEdit(r)}
                            className="rounded bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 text-xs font-bold transition shadow-xs"
                          >
                            Edit
                          </button>
                          {r.id && (
                            <button
                              type="button"
                              onClick={() => handleDelete(r.id!)}
                              className="rounded bg-rose-600 hover:bg-rose-700 text-white px-2.5 py-1 text-xs font-bold transition shadow-xs"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Add form */}
          {showAddForm && (
            <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50/50 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
                <span className="font-bold text-sm text-emerald-950">Add Sub Category</span>
                <button onClick={() => setShowAddForm(false)} className="text-slate-500 hover:text-red-600 text-lg">
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sub Category Name</label>
                  <input
                    type="text"
                    value={newSubCat}
                    onChange={(e) => setNewSubCat(e.target.value)}
                    placeholder="e.g. 1 year / 3 year"
                    className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-xs font-bold font-mono bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Installments</label>
                  <input
                    type="number"
                    min="1"
                    value={newInstallments}
                    onChange={(e) => setNewInstallments(Number(e.target.value))}
                    className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-xs font-bold font-mono bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Rule Mode</label>
                <select
                  value={newMode}
                  onChange={(e) => setNewMode(e.target.value as any)}
                  className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-xs font-semibold bg-white"
                >
                  <option value="all">All Categories</option>
                  <option value="all_except">All Except...</option>
                  <option value="only">Only in...</option>
                </select>
              </div>
              {newMode !== "all" && (
                <div>
                  <span className="block text-xs font-bold text-slate-700 mb-1">
                    {newMode === "all_except" ? "Exclude Categories:" : "Select Categories:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {disburseCategories.map((cat) => {
                      const checked = newSelectedCats.includes(cat.toLowerCase().trim());
                      return (
                        <label
                          key={cat}
                          className={`cursor-pointer rounded border px-2.5 py-1 text-xs font-bold transition flex items-center gap-1 ${
                            checked
                              ? "bg-emerald-700 text-white border-emerald-700"
                              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleCategoryInNew(cat)}
                            className="sr-only"
                          />
                          <span>{checked ? "✓ " : ""}{titleCase(cat)}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="flex justify-end gap-2 pt-2 border-t border-emerald-200">
                <button
                  type="button"
                  onClick={handleAddNew}
                  className="rounded bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 text-xs font-bold transition shadow-xs"
                >
                  Save New Rule
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="rounded bg-slate-400 hover:bg-slate-500 text-white px-3 py-1.5 text-xs font-semibold transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between border-t bg-slate-100 px-5 py-3">
          <span className="text-xs text-slate-500">Payment Sub Category Rules Engine</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-slate-800 hover:bg-slate-900 px-6 py-1.5 text-xs font-bold text-white transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

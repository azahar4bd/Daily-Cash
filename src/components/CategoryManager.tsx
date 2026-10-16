import { useState } from "react";
import { titleCase } from "@/lib/categories";
import type { Cat } from "@/types";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  moveCategory,
  getStaffList,
  addStaffName,
  deleteStaffName,
} from "@/lib/storage";
import { cmpStaffByMode } from "@/lib/sortOrder";
import StaffSortToggle, { useStaffSort } from "./StaffSortToggle";

/**
 * 🆕 v1.4.145: রিসিভ-ক্যাটাগরি ম্যানেজ ২ ভাগে —
 *  ① 👷 Staff Name — প্রতি অফিসের নিজস্ব কর্মী-তালিকা (নতুন অফিসে খালি থাকে, এখানেই যোগ করতে হয়)
 *  ② 🗂️ Unique ক্যাটাগরি — সাধারণ জমা-খাত (bank withdraw, fund receive, others income…)
 * কর্মী-নাম যোগ করলে receive-ক্যাটাগরিও নিজে বানায় (জমা-ডিপোজিটের প্রবাহ বরাবর)।
 */
export default function CategoryManager({
  type,
  cats,
  onChanged,
  onClose,
}: {
  type: string;
  cats: Cat[];
  onChanged: () => void;
  onClose: () => void;
}) {
  const [newName, setNewName] = useState("");
  const [newStaff, setNewStaff] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [err, setErr] = useState("");
  const [staffTick, setStaffTick] = useState(0);

  const baseStaffList = staffTick >= 0 ? getStaffList() : []; // tick → পুনঃপঠন
  const [staffMode, setStaffMode] = useStaffSort(); // 🆕 v1.4.167: ম্যানুয়াল/A→Z/Z→A সর্ট
  const staffList = [...baseStaffList].sort((x, y) => cmpStaffByMode(x.name, y.name, staffMode));
  const isReceive = type === "receive";

  const staffNamesLower = staffList.map((s) => s.name.toLowerCase());
  const staffCats = isReceive ? cats.filter((c) => staffNamesLower.includes(c.name.toLowerCase())) : [];
  const uniqueCats = isReceive ? cats.filter((c) => !staffNamesLower.includes(c.name.toLowerCase())) : cats;

  const add = () => {
    if (!newName.trim()) return;
    if (cats.some((c) => c.name.toLowerCase() === newName.trim().toLowerCase())) {
      return setErr("Already exists");
    }
    addCategory(type, newName);
    setErr("");
    setNewName("");
    onChanged();
  };

  /** 👷 কর্মী যোগ — স্টাফ-তালিকা + receive-ক্যাটাগরি (জমার প্রবাহ বজায়) */
  const addStaff = () => {
    const nm = newStaff.trim();
    if (!nm) return;
    if (staffNamesLower.some((n) => n === nm.toLowerCase()) || cats.some((c) => c.name.toLowerCase() === nm.toLowerCase())) {
      return setErr("Already exists");
    }
    addStaffName(nm);
    addCategory("receive", nm); // Dena/Poana-এ Today Deposit-এর প্রবাহ বজায় রাখে
    setErr("");
    setNewStaff("");
    setStaffTick((t) => t + 1);
    onChanged();
  };

  /** 👷 কর্মী মোছা — স্টাফ-তালিকা + মিলে-যাওয়া receive-ক্যাটাগরি (পুরনো এন্ট্রি/রিপোর্ট অক্ষত) */
  const delStaff = (staffId: number, nm: string) => {
    if (!confirm(`"${titleCase(nm)}" কর্মী মুছবেন? আগের এন্ট্রিগুলো রিপোর্টে থেকে যাবে।`)) return;
    deleteStaffName(staffId);
    const cat = staffCats.find((c) => c.name.toLowerCase() === nm.toLowerCase());
    if (cat) deleteCategory(cat.id);
    setStaffTick((t) => t + 1);
    onChanged();
  };

  const save = () => {
    if (!editId || !editName.trim()) return;
    updateCategory(editId, editName);
    setEditId(null);
    onChanged();
  };

  const del = (id: number) => {
    if (!confirm("Delete this category?")) return;
    deleteCategory(id);
    onChanged();
  };

  // v1.4.79: ↑↓ দিয়ে নিজের ক্রমে সাজানো (ড্রপডাউনেও এই ক্রমই আসবে)
  const move = (id: number, dir: -1 | 1) => {
    moveCategory(type, id, dir);
    onChanged();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300">
        <div className="flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white">
          <h3 className="text-base sm:text-lg font-bold">{titleCase(type)} Categories</h3>
          <button onClick={onClose} className="text-2xl text-slate-300 hover:text-white">
            ×
          </button>
        </div>
        <div className="p-4 sm:p-5 overflow-y-auto max-h-[85dvh]">
          {err && <p className="mt-1 text-xs text-rose-600 font-semibold">{err}</p>}

          {/* ══ ① 👷 Staff Name ══ */}
          {isReceive && (
            <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50/50 p-3 mb-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-[13px] font-black text-indigo-900">👷 Staff Name</div>
                {/* 🆕 v1.4.167: স্টাফ-সর্ট — ম্যানুয়াল/A→Z/Z→A */}
                <StaffSortToggle mode={staffMode} onChange={setStaffMode} />
              </div>
              <div className="text-[10px] font-semibold text-slate-500 mt-0.5">
                কর্মীর নাম এখানেই যোগ করুন — Dena/Poana ও Staff Collection টেবিল এই তালিকাতেই চলে। নতুন অফিসে একদম খালি থাকে।
              </div>
              <div className="mt-2 flex gap-2">
                <input
                  value={newStaff}
                  onChange={(e) => setNewStaff(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addStaff()}
                  placeholder="নতুন কর্মীর নাম"
                  className="flex-1 rounded-lg border border-indigo-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                />
                <button
                  onClick={addStaff}
                  className="rounded-lg bg-indigo-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-indigo-700 shadow-xs"
                >
                  Add
                </button>
              </div>
              <ul className="mt-2 max-h-40 divide-y divide-indigo-100 rounded-xl border border-indigo-200 bg-white overflow-auto">
                {staffList.map((s) => (
                  <li key={s.id} className="flex items-center gap-2 px-3 py-2">
                    <span className="flex-1 text-sm font-bold text-slate-800">👷 {titleCase(s.name)}</span>
                    <button
                      onClick={() => delStaff(s.id, s.name)}
                      className="rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700"
                    >
                      Delete
                    </button>
                  </li>
                ))}
                {staffList.length === 0 && (
                  <li className="px-3 py-4 text-center text-xs text-slate-400">কর্মী নেই — নাম লিখে Add চাপুন</li>
                )}
              </ul>
            </div>
          )}

          {/* ══ ② 🗂️ Unique ক্যাটাগরি ══ */}
          {isReceive && <div className="text-[13px] font-black text-slate-700 mb-1.5">🗂️ Unique ক্যাটাগরি (সাধারণ জমা-খাত)</div>}
          <div className="flex gap-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && add()}
              placeholder={isReceive ? "নতুন ক্যাটাগরির নাম" : "New category name"}
              className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
            <button
              onClick={add}
              className="rounded-lg bg-emerald-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-emerald-700 shadow-xs"
            >
              Add
            </button>
          </div>
          <p className="mt-3 text-[11px] font-semibold text-slate-400">↑↓ চেপে ক্যাটাগরি নিজের মতো সাজান — ড্রপডাউনেও এই ক্রমই আসবে</p>
          <ul className="mt-1 max-h-64 divide-y rounded-xl border border-slate-200 overflow-auto">
            {uniqueCats.map((c, idx) => (
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
                    <span className="flex items-center gap-0.5 shrink-0">
                      <button
                        title="এক ঘর উপরে"
                        disabled={idx === 0}
                        onClick={() => move(c.id, -1)}
                        className="rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ↑
                      </button>
                      <button
                        title="এক ঘর নিচে"
                        disabled={idx === uniqueCats.length - 1}
                        onClick={() => move(c.id, 1)}
                        className="rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ↓
                      </button>
                    </span>
                    <button
                      onClick={() => {
                        setEditId(c.id);
                        setEditName(c.name);
                      }}
                      className="rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button onClick={() => del(c.id)} className="rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700">
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
            {uniqueCats.length === 0 && <li className="px-3 py-6 text-center text-xs text-slate-400">No categories</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

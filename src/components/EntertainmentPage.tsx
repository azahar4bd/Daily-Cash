import { useEffect, useMemo, useState } from "react";
import DatePicker, { todayISO } from "./DatePicker";
import { fmt } from "./DenominationPopup";
import {
  getEntEntriesSorted,
  saveEntEntry,
  deleteEntEntry,
  type EntEntry,
} from "@/lib/entStore";

/** 📅 সংক্ষিপ্ত তারিখ ব্যাজ — "24-09" */
const shortDM = (iso: string) => (iso ? `${iso.slice(8, 10)}-${iso.slice(5, 7)}` : "");

/** মাস লেবেল — "Sep 2026" */
const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const monthLabel = (ym: string) => {
  const [y, m] = ym.split("-");
  return `${MONTH_NAMES[Number(m) - 1] || m} ${y}`;
};

export default function EntertainmentPage() {
  const [entries, setEntries] = useState<EntEntry[]>([]);
  const [status, setStatus] = useState<{ kind: "ok" | "warn"; text: string } | null>(null);

  /* ── এন্ট্রি ফর্ম ── */
  const [date, setDate] = useState(todayISO());
  const [category, setCategory] = useState<"জমা" | "খরচ" | "">("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  /* ── ফিল্টার: তারিখ-হতে-তারিখ + মাস ── */
  const [dateRange, setDateRange] = useState<{ from: string; to: string } | null>(null);
  const [rangeOpen, setRangeOpen] = useState(false);
  const [rangeFrom, setRangeFrom] = useState("");
  const [rangeTo, setRangeTo] = useState("");
  const [monthFilter, setMonthFilter] = useState(""); // "YYYY-MM"
  const [monthOpen, setMonthOpen] = useState(false);

  const load = () => setEntries(getEntEntriesSorted());
  useEffect(() => {
    load();
    const h = () => load();
    window.addEventListener("entertainment-changed", h);
    return () => window.removeEventListener("entertainment-changed", h);
  }, []);

  const clearForm = () => {
    setCategory("");
    setDescription("");
    setAmount("");
  };

  const handleSave = () => {
    if (!date) return setStatus({ kind: "warn", text: "তারিখ দিন।" });
    if (!category) return setStatus({ kind: "warn", text: "ক্যাটাগরি (জমা/খরচ) বেছে নিন।" });
    const amt = Number(amount);
    if (!amount || !Number.isFinite(amt) || amt <= 0)
      return setStatus({ kind: "warn", text: "Amount-এ সঠিক সংখ্যা দিন।" });
    saveEntEntry({
      date,
      category: category as "জমা" | "খরচ",
      description: description.trim(),
      amount: String(Math.round(amt)),
    });
    clearForm();
    setStatus({ kind: "ok", text: "✓ এন্ট্রি সেভ হয়েছে।" });
    setTimeout(() => setStatus(null), 1800);
  };

  /* ── ফিল্টার প্রয়োগ: দুটোই একসাথে (AND) ── */
  const filtered = useMemo(
    () =>
      entries.filter((e) => {
        if (dateRange && (e.date < dateRange.from || e.date > dateRange.to)) return false;
        if (monthFilter && !e.date.startsWith(monthFilter)) return false;
        return true;
      }),
    [entries, dateRange, monthFilter]
  );

  const applyRange = () => {
    if (!rangeFrom && !rangeTo)
      return setStatus({ kind: "warn", text: "কমপক্ষে একটি তারিখ লিখুন (হতে বা পর্যন্ত)।" });
    let from = rangeFrom || rangeTo;
    let to = rangeTo || rangeFrom;
    if (from > to) [from, to] = [to, from];
    setDateRange({ from, to });
    setRangeOpen(false);
    setStatus(null);
  };
  const clearRange = () => {
    setDateRange(null);
    setRangeFrom("");
    setRangeTo("");
    setRangeOpen(false);
  };

  /* ── মাসভিত্তিক সারসংক্ষেপ — ফিল্টারকৃত ডেটার উপর ── */
  const monthly = useMemo(() => {
    const map = new Map<string, { deposit: number; expense: number }>();
    for (const e of filtered) {
      const ym = String(e.date || "").slice(0, 7);
      if (!ym) continue;
      const row = map.get(ym) || { deposit: 0, expense: 0 };
      if (e.category === "জমা") row.deposit += Number(e.amount) || 0;
      else row.expense += Number(e.amount) || 0;
      map.set(ym, row);
    }
    return [...map.entries()]
      .sort((a, b) => b[0].localeCompare(a[0]))
      .map(([ym, r]) => ({ ym, ...r, balance: r.deposit - r.expense }));
  }, [filtered]);

  /** সামগ্রিক বর্তমান স্থিতি — ফিল্টার-নির্বিশেষে পুরো খাতার হিসাব (স্টিকি কার্ডে) */
  const overall = useMemo(() => {
    let j = 0, k = 0;
    for (const e of entries) {
      if (e.category === "জমা") j += Number(e.amount) || 0;
      else k += Number(e.amount) || 0;
    }
    return { joma: j, khoroch: k, sthiti: j - k };
  }, [entries]);

  const totals = useMemo(() => {
    let j = 0, k = 0;
    for (const e of filtered) {
      if (e.category === "জমা") j += Number(e.amount) || 0;
      else k += Number(e.amount) || 0;
    }
    return { joma: j, khoroch: k, sthiti: j - k };
  }, [filtered]);

  const labelCls =
    "mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black uppercase tracking-wide text-slate-600";
  const inputCls =
    "w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none";

  return (
    <div className="space-y-4">
      {/* ══ 🎉 বর্তমান স্থিতি — সবসময় ভিজিবল স্টিকি কার্ড (v1.4.73; পুরো খাতার, ফিল্টার-নিরপেক্ষ) ══ */}
      <div className="sticky top-2 z-30 rounded-2xl border-2 border-violet-300/80 bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 px-4 py-3 shadow-xl">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[10px] font-black uppercase tracking-wider text-violet-200">🎉 বর্তমান স্থিতি</div>
            <div className="truncate text-2xl font-black font-mono text-white">
              {fmt(overall.sthiti)} <span className="text-sm font-bold text-violet-200">৳</span>
            </div>
          </div>
          <div className="shrink-0 rounded-xl bg-white/15 px-2.5 py-1.5 text-right backdrop-blur-sm">
            <div className="text-[10px] font-bold text-emerald-200">
              জমা <span className="font-mono">{fmt(overall.joma)}</span>
            </div>
            <div className="text-[10px] font-bold text-rose-200">
              খরচ <span className="font-mono">{fmt(overall.khoroch)}</span>
            </div>
            <div className="text-[9px] font-bold text-violet-200">{entries.length}টি এন্ট্রি</div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
        {/* হেডার */}
        <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h1 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
            <span>🎉</span> Entertainment
          </h1>
          <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-black text-violet-800">
            {entries.length}টি এন্ট্রি
          </span>
        </div>

        {/* ══ এন্ট্রি ফর্ম: তারিখ / ক্যাটাগরি / ডেসক্রিপশন / Amount ══ */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <div>
            <label className={labelCls}>তারিখ</label>
            <DatePicker value={date} onChange={(v) => setDate(v || todayISO())} manualEntry className="px-2.5 py-2 text-sm font-bold" />
          </div>
          <div>
            <label className={labelCls}>ক্যাটাগরি</label>
            <select value={category} onChange={(e) => setCategory(e.target.value as "জমা" | "খরচ" | "")} className={`${inputCls} cursor-pointer`}>
              <option value="">-- Select --</option>
              <option value="জমা">জমা</option>
              <option value="খরচ">খরচ</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className={labelCls}>ডেসক্রিপশন</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="যেমন: অতিথি আপ্যায়ন…" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Amount</label>
            <input type="number" inputMode="numeric" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" className="w-full rounded-lg border border-slate-300 bg-yellow-50 px-2.5 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:border-blue-500 focus:outline-none" />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            {status && (
              <span className={`text-[11px] font-bold ${status.kind === "ok" ? "text-emerald-700" : "text-amber-700"}`}>
                {status.text}
              </span>
            )}
          </div>
          <button type="button" onClick={handleSave} className="shrink-0 flex items-center gap-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 active:bg-violet-800 px-5 py-2 text-sm font-black text-white shadow transition cursor-pointer">
            <span>✚</span> সেভ করুন
          </button>
        </div>
      </div>

      {/* ══ টেবিলের উপরে ফিল্টার: 📅 তারিখ-হতে-তারিখ + 🗓 মাস ══ */}
      <div className="flex flex-wrap items-center gap-2">
        {/* তারিখ হতে তারিখ */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => { setRangeFrom(dateRange?.from || ""); setRangeTo(dateRange?.to || ""); setRangeOpen((v) => !v); setMonthOpen(false); }}
            title="তারিখ হতে তারিখ ফিল্টার"
            className={`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${dateRange ? "border-sky-600 bg-sky-600 text-white shadow" : "border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-700"}`}
          >
            📅 {dateRange ? `${shortDM(dateRange.from)} → ${shortDM(dateRange.to)}` : "তারিখ হতে তারিখ"}
          </button>
          {rangeOpen && (
            <div className="absolute left-0 top-full z-40 mt-1.5 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-black text-slate-800">📅 তারিখ হতে তারিখ</span>
                <button type="button" onClick={() => setRangeOpen(false)} className="rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
              </div>
              <div className="mb-2">
                <label className="mb-1 block text-[10px] font-black text-slate-600">হতে</label>
                <DatePicker value={rangeFrom} onChange={setRangeFrom} manualEntry className="px-2.5 py-1.5 text-xs" />
              </div>
              <div className="mb-3">
                <label className="mb-1 block text-[10px] font-black text-slate-600">পর্যন্ত</label>
                <DatePicker value={rangeTo} onChange={setRangeTo} manualEntry className="px-2.5 py-1.5 text-xs" />
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={applyRange} className="flex-1 rounded-lg bg-sky-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-sky-700 cursor-pointer">প্রয়োগ</button>
                <button type="button" onClick={clearRange} className="rounded-lg bg-slate-200 px-3 py-1.5 text-[11px] font-black text-slate-700 hover:bg-slate-300 cursor-pointer">মুছুন</button>
              </div>
            </div>
          )}
        </div>

        {/* মাস ফিল্টার */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => { setMonthOpen((v) => !v); setRangeOpen(false); }}
            title="মাস ফিল্টার — নির্দিষ্ট মাসের এন্ট্রি"
            className={`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${monthFilter ? "border-violet-600 bg-violet-600 text-white shadow" : "border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:text-violet-700"}`}
          >
            🗓 {monthFilter ? monthLabel(monthFilter) : "Month"}
          </button>
          {monthOpen && (
            <div className="absolute left-0 top-full z-40 mt-1.5 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-black text-slate-800">🗓 মাস বেছে নিন</span>
                <button type="button" onClick={() => setMonthOpen(false)} className="rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
              </div>
              <input
                type="month"
                value={monthFilter}
                onChange={(e) => { setMonthFilter(e.target.value); setMonthOpen(false); }}
                className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-bold text-slate-800 focus:border-violet-500 focus:outline-none cursor-pointer"
              />
              <button type="button" onClick={() => { setMonthFilter(""); setMonthOpen(false); }} className="mt-2 w-full rounded-lg bg-slate-200 px-3 py-1.5 text-[11px] font-black text-slate-700 hover:bg-slate-300 cursor-pointer">সব মাস</button>
            </div>
          )}
        </div>

        {(dateRange || monthFilter) && (
          <button
            type="button"
            onClick={() => { clearRange(); setMonthFilter(""); }}
            className="rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-black text-rose-700 hover:bg-rose-100 cursor-pointer"
          >
            ✕ ফিল্টার মুছুন
          </button>
        )}
        <span className="ml-auto text-[11px] font-bold text-slate-500">
          {filtered.length}টি দেখানো হচ্ছে
        </span>
      </div>

      {/* ══ টেবিল ১: সকল এন্ট্রি (ফিল্টারকৃত) ══ */}
      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xs">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-900">🎉 সকল এন্ট্রি</h2>
          <span className="text-[11px] font-bold text-slate-500">
            জমা <span className="font-mono text-emerald-700">{fmt(totals.joma)}</span> • খরচ <span className="font-mono text-rose-700">{fmt(totals.khoroch)}</span> • স্থিতি <span className="font-mono text-indigo-800">{fmt(totals.sthiti)}</span>
          </span>
        </div>
        <div className="max-h-96 overflow-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[430px] text-left text-xs sm:text-sm whitespace-nowrap">
            <thead className="sticky top-0 bg-violet-800 text-white">
              <tr>
                <th className="px-3 py-2 text-center">তারিখ</th>
                <th className="px-3 py-2 text-center">ক্যাটাগরি</th>
                <th className="px-3 py-2">ডেসক্রিপশন</th>
                <th className="px-3 py-2 text-right">Amount</th>
                <th className="px-3 py-2 text-center">✕</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={5} className="px-3 py-6 text-center text-slate-400 font-semibold">কোনো এন্ট্রি নেই</td></tr>
              ) : (
                filtered.map((e) => (
                  <tr key={e.id} className="border-b hover:bg-slate-50">
                    <td className="px-3 py-2 text-center font-mono text-[11px] sm:text-xs text-slate-700">{e.date.split("-").reverse().join("-")}</td>
                    <td className="px-3 py-2 text-center">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-black ${e.category === "জমা" ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                        {e.category}
                      </span>
                    </td>
                    <td className="px-3 py-2 max-w-[160px] truncate text-slate-800" title={e.description}>{e.description || "—"}</td>
                    <td className={`px-3 py-2 text-right font-mono font-bold ${e.category === "জমা" ? "text-emerald-700" : "text-rose-700"}`}>
                      {e.category === "জমা" ? "+" : "-"}{fmt(Number(e.amount) || 0)}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => { if (confirm(`"${e.description || e.category}" — ${fmt(Number(e.amount))} টাকার এন্ট্রিটি মুছে ফেলবেন?`)) deleteEntEntry(e.id); }}
                        className="rounded-lg px-1.5 py-0.5 text-[11px] font-black text-slate-400 hover:bg-rose-100 hover:text-rose-600 cursor-pointer"
                        title="এন্ট্রি মুছুন"
                      >
                        🗑
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ══ টেবিল ২: মাসভিত্তিক জমা / খরচ / স্থিতি (ফিল্টারকৃত ডেটা থেকে) ══ */}
      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xs">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-900">🗓 মাসভিত্তিক হিসাব</h2>
          {(dateRange || monthFilter) && (
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-black text-sky-800">ফিল্টার কার্যকর</span>
          )}
        </div>
        <div className="overflow-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[380px] text-left text-xs sm:text-sm whitespace-nowrap">
            <thead className="sticky top-0 bg-slate-800 text-white">
              <tr>
                <th className="px-3 py-2 text-center">মাস</th>
                <th className="px-3 py-2 text-right">জমা</th>
                <th className="px-3 py-2 text-right">খরচ</th>
                <th className="px-3 py-2 text-right">স্থিতি</th>
              </tr>
            </thead>
            <tbody>
              {monthly.length === 0 ? (
                <tr><td colSpan={4} className="px-3 py-6 text-center text-slate-400 font-semibold">কোনো মাসিক হিসাব নেই</td></tr>
              ) : (
                monthly.map((m) => (
                  <tr key={m.ym} className="border-b hover:bg-slate-50">
                    <td className="px-3 py-2 text-center font-bold text-slate-800">{monthLabel(m.ym)}</td>
                    <td className="px-3 py-2 text-right font-mono font-bold text-emerald-700">{fmt(m.deposit)}</td>
                    <td className="px-3 py-2 text-right font-mono font-bold text-rose-700">{fmt(m.expense)}</td>
                    <td className={`px-3 py-2 text-right font-mono font-black ${m.balance >= 0 ? "text-indigo-800" : "text-rose-700"}`}>{fmt(m.balance)}</td>
                  </tr>
                ))
              )}
            </tbody>
            {monthly.length > 0 && (
              <tfoot className="bg-slate-100 font-black">
                <tr>
                  <td className="px-3 py-2 text-center text-slate-800">মোট</td>
                  <td className="px-3 py-2 text-right font-mono text-emerald-800">{fmt(totals.joma)}</td>
                  <td className="px-3 py-2 text-right font-mono text-rose-800">{fmt(totals.khoroch)}</td>
                  <td className={`px-3 py-2 text-right font-mono ${totals.sthiti >= 0 ? "text-indigo-900" : "text-rose-800"}`}>{fmt(totals.sthiti)}</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

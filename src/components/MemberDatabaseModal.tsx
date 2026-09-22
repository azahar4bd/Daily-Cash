import { useEffect, useMemo, useRef, useState } from "react";
import { getMembers, normCode, parseMemberText, importMembers } from "@/lib/memberDb";
import type { Member } from "@/lib/memberDb";

/**
 * 🗄️ মেম্বার ডাটাবেজ উইন্ডো (পপআপ)
 * ------------------------------------------------------------------
 * সার্চ ঘরে মেম্বার কোড / সেন্টার কোড / নাম লিখলে নিচে সেই সংশ্লিষ্ট
 * সব ডাটা দেখায়। যেকোনো সারিতে ট্যাপ/ক্লিক করলে সেই মেম্বারের কোড
 * Check ফর্মে বসে যায় (নাম, সেন্টার কোড ও সেন্টার নামসহ)।
 */
export default function MemberDatabaseModal({
  open,
  onClose,
  onPick,
}: {
  open: boolean;
  onClose: () => void;
  onPick?: (m: Member) => void;
}) {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(50);
  const searchRef = useRef<HTMLInputElement | null>(null);
  /** আপলোডের পর তালিকা নতুন করে পড়ার জন্য */
  const [reloadKey, setReloadKey] = useState(0);
  const [upBusy, setUpBusy] = useState(false);
  const [upDrag, setUpDrag] = useState(false);
  const [upMsg, setUpMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  /** ডাটাবেজ একবারই পড়া হবে (৪,৭০০+ রো — বার বার পড়লে ধীর হবে) */
  const members = useMemo<Member[]>(() => (open ? getMembers() : []), [open, reloadKey]);

  /** সফল বার্তা কিছুক্ষণ পর নিজে থেকেই সরে যাবে */
  useEffect(() => {
    if (!upMsg || !upMsg.ok) return;
    const t = window.setTimeout(() => setUpMsg(null), 12000);
    return () => window.clearTimeout(t);
  }, [upMsg]);

  /** ডাটাবেজ বদলালে (আপলোড/ক্লাউড থেকে ফেরা) তালিকা নতুন করে পড়া হবে */
  useEffect(() => {
    if (!open) return;
    const h = () => setReloadKey((k) => k + 1);
    window.addEventListener("member-db-changed", h);
    return () => window.removeEventListener("member-db-changed", h);
  }, [open]);

  /**
   * 📤 CSV আপলোড — বাকি সব নিজে থেকেই হয়:
   * ফাইল পড়া → কলাম শনাক্ত → ডুপ্লিকেট বাদ (মেম্বার কোড অনুযায়ী) → ডাটাবেজে বসানো
   * → ক্লাউডে (এই অফিসের নিজের ঘরে) সংরক্ষণ। একবার ডাটাবেজ থাকলে এই ঘর আর দেখায় না।
   */
  const handleFiles = async (files: FileList | null) => {
    const f = files && files[0] ? files[0] : null;
    if (!f) return;
    setUpBusy(true);
    setUpMsg(null);
    try {
      const text = await f.text();
      const { members: parsed, skipped } = parseMemberText(text);
      if (!parsed.length) {
        setUpMsg({
          ok: false,
          text: "ফাইলে কোনো মেম্বার পাওয়া যায়নি। কলাম ঠিক আছে কি না দেখুন — Member Code, Member Name, Centre Code, Centre Name (হেডার না থাকলেও এই ক্রমেই পড়বে)।",
        });
        return;
      }
      const res = importMembers(parsed);
      setUpMsg({
        ok: true,
        text: `✓ ${res.total.toLocaleString("en-IN")} জন মেম্বার ডাটাবেজে বসে গেছে (নতুন ${res.added.toLocaleString("en-IN")}, আপডেট ${res.updated.toLocaleString("en-IN")}${skipped ? `, বাদ পড়েছে ${skipped.toLocaleString("en-IN")}` : ""})। ক্লাউডে সংরক্ষণ হচ্ছে…`,
      });
      setReloadKey((k) => k + 1);
    } catch (e: any) {
      setUpMsg({ ok: false, text: `ফাইল পড়া যায়নি: ${e?.message || "অজানা ত্রুটি"}` });
    } finally {
      setUpBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setLimit(50);
    const t = window.setTimeout(() => searchRef.current?.focus(), 60);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const matches = useMemo<Member[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return members;
    const nq = normCode(query);
    return members.filter((m) => {
      if (nq && normCode(m.memberCode).includes(nq)) return true;
      if (nq && normCode(m.centreCode).includes(nq)) return true;
      if (nq && m.checkNo && normCode(m.checkNo).includes(nq)) return true;
      if ((m.memberName || "").toLowerCase().includes(q)) return true;
      if ((m.centreName || "").toLowerCase().includes(q)) return true;
      if ((m.bankName || "").toLowerCase().includes(q)) return true;
      return false;
    });
  }, [members, query]);

  useEffect(() => setLimit(50), [query]);

  if (!open) return null;

  const shown = matches.slice(0, limit);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* ── Header ── */}
        <div className="flex items-center justify-between gap-2 border-b border-indigo-200 bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg">
              🗄️
            </span>
            <div>
              <h3 className="text-base font-black leading-tight">মেম্বার ডাটাবেজ</h3>
              <p className="text-[11px] text-indigo-100">
                মোট{" "}
                <span className="font-mono font-black">
                  {members.length.toLocaleString("en-IN")}
                </span>{" "}
                মেম্বার
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            title="বন্ধ করুন"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white transition hover:bg-rose-700 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* ── Search ── */}
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="মেম্বার কোড, সেন্টার কোড বা নাম লিখুন…"
              autoComplete="off"
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm font-bold text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                title="সার্চ মুছুন"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-600">
            <span>
              {query.trim() ? (
                <>
                  মিলেছে:{" "}
                  <span className="font-mono text-indigo-700">
                    {matches.length.toLocaleString("en-IN")}
                  </span>{" "}
                  টি
                </>
              ) : (
                <>সব মেম্বার — খুঁজতে উপরে লিখুন</>
              )}
            </span>
            <span className="text-[10px] font-semibold text-slate-400">
              যেকোনো সারিতে ট্যাপ করলে কোডটি ফর্মে বসে যাবে
            </span>
          </div>
        </div>

        {/* ── আপলোডের ফল (ঘর বদলে গেলেও বার্তা থেকে যাবে) ── */}
        {upMsg && (
          <div
            className={`flex items-start justify-between gap-2 border-b px-4 py-2 text-[11px] font-bold leading-relaxed ${
              upMsg.ok
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : "border-rose-200 bg-rose-50 text-rose-800"
            }`}
          >
            <span>
              {upMsg.ok ? "✅" : "⚠️"} {upMsg.text}
            </span>
            <button
              type="button"
              onClick={() => setUpMsg(null)}
              title="বার্তা বন্ধ করুন"
              className="shrink-0 rounded px-1 text-xs font-black opacity-60 hover:opacity-100 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* ── Results ── */}
        <div className="flex-1 overflow-auto">
          {members.length === 0 ? (
            /* 📤 এই অফিসের ডাটাবেজ এখনো খালি → CSV আপলোড ঘর (একবার আপলোড হলে আর দেখাবে না) */
            <div className="px-4 py-8">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setUpDrag(true);
                }}
                onDragLeave={() => setUpDrag(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setUpDrag(false);
                  handleFiles(e.dataTransfer.files);
                }}
                className={`mx-auto max-w-xl rounded-2xl border-2 border-dashed p-6 text-center transition ${
                  upDrag ? "border-indigo-500 bg-indigo-50" : "border-indigo-300 bg-indigo-50/40"
                }`}
              >
                <div className="text-3xl">📤</div>
                <h4 className="mt-2 text-sm font-black text-indigo-950">
                  এই অফিসের মেম্বার ডাটাবেজ আপলোড করুন
                </h4>
                <p className="mx-auto mt-1.5 max-w-md text-[11px] font-semibold leading-relaxed text-slate-600">
                  CSV ফাইল দিলেই বাকি সব নিজে থেকেই হয়ে যাবে — ফাইল পড়া, কলাম শনাক্ত করা,
                  মেম্বার কোড অনুযায়ী ডুপ্লিকেট বাদ দেওয়া, ডাটাবেজে বসানো এবং ক্লাউডে এই
                  অফিসের নিজের ঘরে সংরক্ষণ। এরপর চেক এন্ট্রিতে কোড লিখলেই নাম ও সেন্টার
                  নিজে থেকে চলে আসবে।
                </p>

                <input
                  ref={fileRef}
                  type="file"
                  accept=".csv,.txt,text/csv,text/plain"
                  onChange={(e) => handleFiles(e.target.files)}
                  className="hidden"
                />
                <button
                  type="button"
                  disabled={upBusy}
                  onClick={() => fileRef.current?.click()}
                  className="mt-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-xs font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer"
                >
                  {upBusy ? "⏳ ফাইল পড়া হচ্ছে…" : "📁 CSV ফাইল বেছে নিন"}
                </button>
                <p className="mt-1.5 text-[10px] font-bold text-slate-500">
                  অথবা ফাইলটি এখানে টেনে আনুন
                </p>

                <div className="mx-auto mt-3 max-w-md rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-[10px] font-semibold leading-relaxed text-slate-500">
                  কলাম থাকলে ভালো: <span className="font-mono">Member Code, Member Name, Centre
                  Code, Centre Name, Bank Name, Check No</span> — হেডার ছাড়া CSV হলেও চলবে
                  (এই ক্রমেই পড়বে)। কমা / ট্যাব / সেমিকোলন — তিনভাবেই চলে।
                </div>

                <p className="mt-2 text-[10px] font-black text-amber-700">
                  ⚠️ একবার ডাটাবেজ আপলোড হলে এই আপলোড ঘর আর দেখাবে না।
                </p>
              </div>
            </div>
          ) : shown.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <div className="text-3xl">🔍</div>
              <p className="mt-2 text-sm font-bold text-slate-600">কোনো মিল নেই</p>
              <p className="mt-1 text-[11px] font-semibold text-slate-400">
                কোড বা নামের বানান মিলিয়ে দেখুন।
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-200">
              {shown.map((m, i) => (
                <li key={`${m.memberCode}-${i}`}>
                  <button
                    type="button"
                    onClick={() => {
                      if (onPick) onPick(m);
                      onClose();
                    }}
                    title="এই মেম্বারটি বেছে নিন"
                    className={`block w-full cursor-pointer px-4 py-2.5 text-left transition hover:bg-indigo-50 ${
                      i % 2 ? "bg-slate-50/60" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-xs font-black text-indigo-700">
                        {m.memberCode}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {m.memberName || "—"}
                      </span>
                      <span className="ml-auto flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-bold text-slate-600">
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono">
                          {m.centreCode || "—"}
                        </span>
                        <span>{m.centreName || "—"}</span>
                      </span>
                    </div>
                    {(m.bankName || m.checkNo || m.source === "auto") && (
                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-semibold text-slate-500">
                        {m.bankName && <span>🏦 {m.bankName}</span>}
                        {m.checkNo && <span className="font-mono">চেক #{m.checkNo}</span>}
                        {m.source === "auto" && (
                          <span className="rounded bg-amber-100 px-1 py-0.5 font-black text-amber-800">
                            NEW
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {matches.length > shown.length && (
            <div className="p-3 text-center">
              <button
                type="button"
                onClick={() => setLimit((l) => l + 100)}
                className="rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-2 text-xs font-black text-indigo-700 transition hover:bg-indigo-100 cursor-pointer"
              >
                আরও দেখান (বাকি{" "}
                <span className="font-mono">
                  {(matches.length - shown.length).toLocaleString("en-IN")}
                </span>{" "}
                টি)
              </button>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-4 py-3">
          <span className="text-[11px] font-bold text-slate-500">
            দেখানো হচ্ছে{" "}
            <span className="font-mono text-slate-700">
              {shown.length.toLocaleString("en-IN")}
            </span>{" "}
            /{" "}
            <span className="font-mono text-slate-700">
              {matches.length.toLocaleString("en-IN")}
            </span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300 cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}

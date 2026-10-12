import { useEffect, useState, useCallback } from "react";
import {
  getServerUser,
  serverMeet,
  serverPendingList,
  serverApprove,
  serverReject,
  type PendingUser,
} from "@/lib/serverAuth";

/**
 * 🔔 অ্যাডমিন অনুমতি-কেন্দ্র (v1.4.133 — নিরাপত্তা-প্যাকেজ ধাপ-১)
 * নতুন কেউ Google-দিয়ে ঢুকতে চাইলে এখানে তার তালিকা — ✅ অনুমতি / ❌ বাধা।
 * শুধু সার্ভার-রেজিস্টার্ড অ্যাডমিনের জন্যই দেখা যায়।
 */
export default function AdminApprovals() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<PendingUser[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  const refresh = useCallback(async () => {
    try {
      const u = getServerUser();
      if (!u || u.role !== "admin") { setIsAdmin(false); return; }
      setIsAdmin(true);
      const m = await serverMeet();
      if (!m.ok) return;
      setCount(m.pendingCount || 0);
      if (open) {
        const l = await serverPendingList();
        if (l.ok) setList(l.pending);
      }
    } catch {}
  }, [open]);

  useEffect(() => {
    refresh();
    const t = setInterval(refresh, 60_000); // প্রতি মিনিটে হালনাগাদ
    return () => clearInterval(t);
  }, [refresh]);

  if (!isAdmin) return null;

  const openPanel = async () => {
    setOpen(true);
    const l = await serverPendingList();
    if (l.ok) setList(l.pending);
  };

  const decide = async (id: number, approve: boolean) => {
    setBusy(true);
    setMsg("");
    /* 🆕 v1.4.139: অনুরোধকারী যে শাখা চেয়েছে সেখানেই অনুমতি (আগে সবাই gobra-তে ঢুকে যেত) */
    const row = list.find((p) => p.id === id);
    const d = approve ? await serverApprove(id, row?.branch_id || "gobra") : await serverReject(id);
    setBusy(false);
    if (!d.ok) return setMsg(d.error || "ব্যর্থ হয়েছে");
    setMsg(approve ? "✅ অনুমতি দেওয়া হয়েছে" : "❌ বাধা দেওয়া হয়েছে");
    setTimeout(() => setMsg(""), 2500);
    const l = await serverPendingList();
    if (l.ok) setList(l.pending);
    setCount(d.pendingCount ?? Math.max(0, count - 1));
  };

  return (
    <>
      {/* ভাসমান ঘণ্টা */}
      <button
        type="button"
        onClick={openPanel}
        title="লগইন অনুমতির অনুরোধ"
        className="fixed bottom-20 right-3 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-indigo-300 bg-white text-lg shadow-xl hover:bg-indigo-50 cursor-pointer"
      >
        🔔
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-black text-white">
            {count}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/50 p-3" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
              <h2 className="text-sm font-black text-slate-900">🔔 লগইন অনুমতির অনুরোধ</h2>
              <button type="button" onClick={() => setOpen(false)} className="rounded px-2 text-lg font-black text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
            </div>
            {msg && <div className="mb-2 rounded-lg bg-indigo-50 px-3 py-2 text-[11px] font-black text-indigo-800">{msg}</div>}
            {list.length === 0 ? (
              <div className="py-6 text-center text-sm font-semibold text-slate-400">✓ কোনো অনুরোধ অপেক্ষা করছে না</div>
            ) : (
              <div className="max-h-80 space-y-2 overflow-auto">
                {list.map((u) => (
                  <div key={u.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-1 text-sm font-black text-slate-900">{u.name}</div>
                    <div className="mb-2 text-[11px] font-semibold text-slate-500">
                      {u.email || u.mobile || "—"} • 🏢 {u.branch_id || "gobra"} • {new Date(u.created_at).toLocaleDateString("en-GB")}
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => decide(u.id, true)}
                        className="flex-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-emerald-700 disabled:opacity-50 cursor-pointer"
                      >
                        ✅ অনুমতি দিন
                      </button>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => decide(u.id, false)}
                        className="flex-1 rounded-lg bg-rose-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-rose-700 disabled:opacity-50 cursor-pointer"
                      >
                        ❌ বাধা দিন
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

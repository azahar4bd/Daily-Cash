import { useEffect, useState, useCallback } from "react";
import {
  getServerUser,
  serverMeet,
  serverPendingList,
  serverApprove,
  serverReject,
  serverBranchList,
  serverUserList,
  serverUserDelete,
  type PendingUser,
} from "@/lib/serverAuth";
import { forceLocalSession } from "@/lib/auth";
import { switchBranch } from "@/lib/branchScope";

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
  /* 🌐 v1.4.140: মালিক (super) — সব শাখা+ইউজার নিয়ন্ত্রণ */
  const [isSuper, setIsSuper] = useState(false);
  const [branches, setBranches] = useState<{ branch_id: string; users: number }[]>([]);
  const [allUsers, setAllUsers] = useState<PendingUser[]>([]);

  const refresh = useCallback(async () => {
    try {
      const u = getServerUser();
      if (!u || (u.role !== "admin" && u.is_super !== true)) { setIsAdmin(false); return; }
      setIsAdmin(true);
      setIsSuper(u.is_super === true);
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

  const loadSuper = async () => {
    const me = getServerUser();
    if (me?.is_super !== true) return;
    const b = await serverBranchList();
    if (b.ok) setBranches(b.branches);
    const ul = await serverUserList();
    if (ul.ok) setAllUsers(ul.users);
  };

  const openPanel = async () => {
    setOpen(true);
    const l = await serverPendingList();
    if (l.ok) setList(l.pending);
    await loadSuper();
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
    await loadSuper();
  };

  /* 🗑️ v1.4.140: ভুল ইউজার স্থায়ীভাবে মোছা (super) — নিজেকে মোছা যায় না */
  const handleDelete = async (u: PendingUser) => {
    const me = getServerUser();
    if (String(u.mobile || "") === String(me?.mobile || "") || (u.email && u.email === me?.email))
      return setMsg("নিজের অ্যাকাউন্ট এভাবে মোছা যায় না।");
    if (!window.confirm(`🗑️ "${u.name}" (${u.mobile || u.email || "—"}) — স্থায়ীভাবে মুছে ফেলবেন?`)) return;
    setBusy(true);
    setMsg("");
    const d = await serverUserDelete(u.id);
    setBusy(false);
    setMsg(d.ok ? "🗑️ মুছে ফেলা হয়েছে" : d.error || "ব্যর্থ হয়েছে");
    setTimeout(() => setMsg(""), 2500);
    const l = await serverPendingList();
    if (l.ok) setList(l.pending);
    await loadSuper();
  };

  /* 🔁 v1.4.140: এক ক্লিকে অফিস বদল — পাসওয়ার্ড লাগে না (super) */
  const handleSwitch = (branchId: string) => {
    const me = getServerUser();
    if (!me) return;
    forceLocalSession(String(me.mobile || me.email || "user"), branchId, { name: me.name });
    switchBranch(branchId); // রিলোড — নতুন অফিসের খতিয়ান খুলে যাবে
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
            {isSuper && (
              <>
                {/* 🏢 অফিসসমূহ — এক ক্লিকে বদল, পাসওয়ার্ড লাগে না (v1.4.140) */}
                <div className="mt-3 border-t border-slate-200 pt-2">
                  <div className="mb-1 text-[11px] font-black text-slate-600">
                    🏢 অফিসসমূহ <span className="font-semibold text-slate-400">(🔁 প্রবেশ = ওই অফিসে এক ক্লিকে চলে যাওয়া)</span>
                  </div>
                  <div className="max-h-28 space-y-1 overflow-auto">
                    {branches.length === 0 && <div className="text-[11px] font-semibold text-slate-400">…</div>}
                    {branches.map((b) => (
                      <div key={b.branch_id} className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5">
                        <div className="text-[11px] font-black text-slate-800">
                          🏢 {b.branch_id}
                          {b.branch_id === (getServerUser()?.branchId || "gobra") && (
                            <span className="ml-1 rounded bg-emerald-100 px-1 text-[9px] font-black text-emerald-700">এখানে আছেন</span>
                          )}
                          <span className="ml-1 text-[10px] font-semibold text-slate-400">ইউজার ×{b.users}</span>
                        </div>
                        <button
                          type="button"
                          disabled={busy || b.branch_id === (getServerUser()?.branchId || "gobra")}
                          onClick={() => handleSwitch(b.branch_id)}
                          className="rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white hover:bg-indigo-700 disabled:opacity-40 cursor-pointer"
                        >
                          🔁 প্রবেশ
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 👥 সব ইউজার — ভুলে তৈরি হলে 🗑️ (v1.4.140) */}
                <div className="mt-2 border-t border-slate-200 pt-2">
                  <div className="mb-1 text-[11px] font-black text-slate-600">
                    👥 সব ইউজার <span className="font-semibold text-slate-400">(ভুল তৈরি হলে 🗑️ মুছুন)</span>
                  </div>
                  <div className="max-h-44 space-y-1 overflow-auto">
                    {allUsers.length === 0 && <div className="text-[11px] font-semibold text-slate-400">…</div>}
                    {allUsers.map((u) => {
                      const isMe =
                        String(u.mobile || "") === String(getServerUser()?.mobile || "") ||
                        (u.email != null && u.email === getServerUser()?.email);
                      const badge =
                        u.status === "pending" ? "⏳অপেক্ষায়" : u.status === "rejected" ? "❌বাদ" : u.role === "admin" ? "অ্যাডমিন" : "সদস্য";
                      return (
                        <div key={u.id} className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5">
                          <div className="min-w-0 text-[11px]">
                            <span className="font-black text-slate-800">{u.name}</span>
                            {u.is_super === true && <span title="মালিক"> ⭐</span>}
                            {isMe && <span className="ml-1 rounded bg-slate-200 px-1 text-[9px] font-black text-slate-600">আপনি</span>}
                            <div className="truncate text-[10px] font-semibold text-slate-500">
                              {u.mobile || u.email || "—"} • 🏢{u.branch_id} • {badge}
                            </div>
                          </div>
                          {!isMe && (
                            <button
                              type="button"
                              disabled={busy}
                              onClick={() => handleDelete(u)}
                              title="স্থায়ীভাবে মুছুন"
                              className="rounded-md bg-rose-600 px-2 py-0.5 text-[10px] font-black text-white hover:bg-rose-700 disabled:opacity-40 cursor-pointer"
                            >
                              🗑️
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

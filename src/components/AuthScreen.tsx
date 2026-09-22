import { useEffect, useState } from "react";
import { BKF_LOGO } from "@/assets/logoBase64";
import { signIn, signUp, listBranches, isValidMobile } from "@/lib/auth";
import type { Session } from "@/lib/auth";

/**
 * 🔐 সাইন ইন / সাইন আপ স্ক্রিন
 * ইউজার আইডি = মোবাইল নম্বর। প্রতিটি ইউজার একটি অফিস/শাখার সাথে যুক্ত —
 * শাখা বদলালে পুরো হিসাব আলাদা (একই ব্রাউজারে একাধিক অফিস চলবে)।
 */
export default function AuthScreen({ onAuthed }: { onAuthed: (s: Session) => void }) {
  const [tab, setTab] = useState<"in" | "up">("in");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [showPw, setShowPw] = useState(false);

  // সাইন ইন
  const [loginMobile, setLoginMobile] = useState("");
  const [loginPw, setLoginPw] = useState("");

  // সাইন আপ
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [branchName, setBranchName] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const [branches, setBranches] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    setBranches(listBranches().map((b) => ({ id: b.id, name: b.name })));
  }, [tab]);

  const inputCls =
    "w-full rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";
  const labelCls = "mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600";

  const digitsOnly = (v: string) => v.replace(/[^0-9+]/g, "").slice(0, 16);

  const handleSignIn = async () => {
    setErr("");
    setBusy(true);
    try {
      const res = await signIn(loginMobile, loginPw);
      if (!res.ok || !res.session) {
        setErr(res.error || "সাইন ইন করা যায়নি।");
        return;
      }
      onAuthed(res.session);
    } catch (e: any) {
      setErr(e?.message || "সাইন ইন করা যায়নি।");
    } finally {
      setBusy(false);
    }
  };

  const handleSignUp = async () => {
    setErr("");
    setBusy(true);
    try {
      const res = await signUp({ name, mobile, branchName, password: pw, confirmPassword: confirmPw });
      if (!res.ok || !res.session) {
        setErr(res.error || "সাইন আপ করা যায়নি।");
        return;
      }
      onAuthed(res.session);
    } catch (e: any) {
      setErr(e?.message || "সাইন আপ করা যায়নি।");
    } finally {
      setBusy(false);
    }
  };

  const knownBranch = branches.find(
    (b) => b.name.trim().toLowerCase() === branchName.trim().toLowerCase()
  );

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-200 via-blue-100 to-emerald-100 px-3 py-6 sm:py-10">
      <div className="mx-auto w-full max-w-md">
        {/* হেডার */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <img src={BKF_LOGO} alt="BKF Logo" className="h-14 w-auto object-contain drop-shadow" />
          <div>
            <h1 className="text-xl font-black leading-tight text-slate-900 sm:text-2xl">
              Bandhu Kallyan Foundation
            </h1>
            <p className="text-[11px] font-bold text-slate-600 sm:text-xs">
              🏢 মাল্টি অফিস হিসাব সিস্টেম — প্রতি অফিসের খতিয়ান সম্পূর্ণ আলাদা
            </p>
          </div>
        </div>

        {/* কার্ড */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          {/* ট্যাব */}
          <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50">
            <button
              type="button"
              onClick={() => {
                setTab("in");
                setErr("");
              }}
              className={`px-4 py-3 text-sm font-black transition cursor-pointer ${
                tab === "in"
                  ? "bg-white text-indigo-700 border-b-2 border-indigo-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              🔓 সাইন ইন
            </button>
            <button
              type="button"
              onClick={() => {
                setTab("up");
                setErr("");
              }}
              className={`px-4 py-3 text-sm font-black transition cursor-pointer ${
                tab === "up"
                  ? "bg-white text-emerald-700 border-b-2 border-emerald-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              📝 সাইন আপ
            </button>
          </div>

          <div className="space-y-3 p-4 sm:p-5">
            {tab === "in" ? (
              <>
                <div>
                  <label className={labelCls}>ইউজার আইডি (মোবাইল নম্বর)</label>
                  <input
                    value={loginMobile}
                    onChange={(e) => setLoginMobile(digitsOnly(e.target.value))}
                    onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                    placeholder="01XXXXXXXXX"
                    inputMode="numeric"
                    autoComplete="username"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>পাসওয়ার্ড</label>
                  <div className="relative">
                    <input
                      value={loginPw}
                      onChange={(e) => setLoginPw(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                      placeholder="পাসওয়ার্ড"
                      type={showPw ? "text" : "password"}
                      autoComplete="current-password"
                      className={`${inputCls} pr-14`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      title={showPw ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-black text-slate-600 hover:bg-slate-200 cursor-pointer"
                    >
                      {showPw ? "লুকান" : "দেখুন"}
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSignIn}
                  disabled={busy}
                  className="mt-1 w-full rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-sm font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer"
                >
                  {busy ? "অপেক্ষা করুন…" : "🔓 সাইন ইন করুন"}
                </button>

                <p className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-[11px] font-semibold leading-relaxed text-blue-900">
                  💡 মোবাইল নম্বরই আপনার ইউজার আইডি। যে অফিসের আইডি দিয়ে ঢুকবেন, সেই
                  অফিসের হিসাবই দেখতে ও লিখতে পারবেন — অন্য অফিসের ডেটা আলাদা থাকবে।
                </p>
              </>
            ) : (
              <>
                <div>
                  <label className={labelCls}>নাম (Name)</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="আপনার নাম"
                    autoComplete="name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>মোবাইল নম্বর (Mobile Number) — এটাই ইউজার আইডি</label>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(digitsOnly(e.target.value))}
                    placeholder="01XXXXXXXXX"
                    inputMode="numeric"
                    autoComplete="username"
                    className={`${inputCls} ${
                      mobile && !isValidMobile(mobile) ? "border-rose-400" : ""
                    }`}
                  />
                  {mobile && !isValidMobile(mobile) && (
                    <p className="mt-1 text-[10px] font-bold text-rose-600">
                      সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট)
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelCls}>অফিস / শাখা (Branch)</label>
                  <input
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    placeholder="যেমন: GOBRA BRANCH-0014 বা নতুন শাখার নাম"
                    list="branch-list"
                    className={inputCls}
                  />
                  <datalist id="branch-list">
                    {branches.map((b) => (
                      <option key={b.id} value={b.name} />
                    ))}
                  </datalist>
                  <p className="mt-1 text-[10px] font-bold text-slate-500">
                    {knownBranch
                      ? `✓ "${knownBranch.name}" শাখা আগে থেকেই আছে — সেখানেই যুক্ত হবেন (একই হিসাব)`
                      : "নতুন শাখার নাম লিখলে নতুন অফিস তৈরি হবে — খতিয়ান একদম খালি ও আলাদা থাকবে"}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>পাসওয়ার্ড</label>
                    <input
                      value={pw}
                      onChange={(e) => setPw(e.target.value)}
                      placeholder="কমপক্ষে ৬ অক্ষর"
                      type={showPw ? "text" : "password"}
                      autoComplete="new-password"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>কনফার্ম পাসওয়ার্ড</label>
                    <input
                      value={confirmPw}
                      onChange={(e) => setConfirmPw(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSignUp()}
                      placeholder="আবার লিখুন"
                      type={showPw ? "text" : "password"}
                      autoComplete="new-password"
                      className={`${inputCls} ${
                        confirmPw && confirmPw !== pw ? "border-rose-400" : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex cursor-pointer select-none items-center gap-1.5 text-[11px] font-bold text-slate-600">
                    <input
                      type="checkbox"
                      checked={showPw}
                      onChange={(e) => setShowPw(e.target.checked)}
                      className="h-3.5 w-3.5 cursor-pointer accent-indigo-600"
                    />
                    পাসওয়ার্ড দেখান
                  </label>
                  {pw && confirmPw && pw === confirmPw && (
                    <span className="text-[11px] font-black text-emerald-700">✓ মিলেছে</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSignUp}
                  disabled={busy}
                  className="mt-1 w-full rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-black text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 cursor-pointer"
                >
                  {busy ? "অপেক্ষা করুন…" : "📝 সাইন আপ করুন"}
                </button>
              </>
            )}

            {err && (
              <div className="rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-black text-rose-800">
                ⚠️ {err}
              </div>
            )}
          </div>
        </div>

        <p className="mt-3 text-center text-[10px] font-semibold text-slate-500">
          প্রতি অফিসের কর্মী, হিসাব, ডে-ক্লোজ ও ক্যাশবুক সম্পূর্ণ আলাদা • ডেটা এই ডিভাইসের
          ব্রাউজারে ও আপনার Google Sheet-এ সংরক্ষিত হয়
        </p>
      </div>
    </div>
  );
}

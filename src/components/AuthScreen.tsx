import { useEffect, useRef, useState } from "react";
import { BKF_LOGO } from "@/assets/logoBase64";
import { signIn, signUp, listBranches, isValidMobile, forceLocalSession } from "@/lib/auth";
import type { Session } from "@/lib/auth";
import { serverLogin, serverGoogleLogin, serverRegister, loadGoogleScript } from "@/lib/serverAuth";

const GOOGLE_CLIENT_ID = String((import.meta as any).env?.VITE_GOOGLE_CLIENT_ID || "161441191624-q3e0gtm5avvvo3f8qpclph8ukleqshvb.apps.googleusercontent.com"); // v1.4.134: Google সাইন-ইন চালু
const GOOGLE_ORIGIN = String((import.meta as any).env?.VITE_GOOGLE_ORIGIN || "https://cash-gobra-bkf.netlify.app");
/** v1.4.141: অনুমোদিত ঠিকানার তালিকা — মূল + ফ্রি daily-লিংক (কমা-দিয়ে env-তেও বাড়ানো যায়) */
const GOOGLE_ORIGINS: string[] = String(
  (import.meta as any).env?.VITE_GOOGLE_ORIGINS ||
    "https://cash-gobra-bkf.netlify.app,https://live--cash-gobra-bkf.netlify.app"
).split(",").map((s: string) => s.trim()).filter(Boolean);
/** v1.4.136: ভুল ঠিকানায় থাকলে Google-বোতাম নীরব হয়ে যায় — সঙ্গে সঙ্গে সতর্ক-ব্যানার দেখাই */
const isOriginOk = (): boolean => {
  try { return GOOGLE_ORIGINS.includes(window.location.origin) || window.location.hostname === "localhost"; }
  catch { return true; }
};

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

  /* 🛡️ v1.4.133: সার্ভার-প্রথম লগইন — নেট না থাকলে লোকালে পড়ে */
  const handleSignIn = async () => {
    const pw = loginPw;
    try {
      const r = await serverLogin(loginMobile, pw);
      if (r.ok && r.token && r.user) {
        onAuthed(forceLocalSession(String(r.user.mobile || loginMobile), r.user.branchId, { name: r.user.name }));
        return;
      }
      if (r.pending) { setErr(r.error || "⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।"); return; }
      if (r.error === "server error" || !r.error) { /* সার্ভার অসুবিধা — লোকালে ফলব্যাক */ }
      else { setErr(r.error); return; } // পাসওয়ার্ড-ভুল ইত্যাদি — প্রকৃত উত্তর
    } catch { /* নেটবিহীন — লোকালে ফলব্যাক */ }
    await doLocalSignIn();
  };

  const doLocalSignIn = async () => {
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
    /* 🛡️ v1.4.137: সাইন-আপ আগে সার্ভারে — অ্যাডমিন অনুমতি ছাড়া ঢুকবে না (অফলাইনে লোকালে ফলব্যাক) */
    try {
      /* 🆕 v1.4.139: ফর্মের আসল শাখাই যায় — পরিচিত শাখা হলে তার id, নতুন হলে স্ল্যাগ (আগে সব gobra হার্ডকোড ছিল) */
      const reqSlug = branchName.trim().toLowerCase().replace(/[^a-z0-9_]/g, "_");
      const reqBranch = (knownBranch && knownBranch.id) || reqSlug || "gobra";
      const sr = await serverRegister({ name: name.trim(), mobile, password: pw, branchId: reqBranch });
      if (sr.ok || sr.pending) { setErr(sr.message || "⏳ অনুমতির জন্য জমা হয়েছে।"); setBusy(false); return; }
      if (sr.error && sr.error !== "server error") { setErr(sr.error); setBusy(false); return; }
    } catch { /* নেটবিহীন — লোকালে ফলব্যাক */ }
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

  /* 🔵 Google দিয়ে প্রবেশ (v1.4.133) */
  const googleDivRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;
    if (tab !== "in") return;
    let cancelled = false;
    (async () => {
      try {
        await loadGoogleScript();
        if (cancelled || !googleDivRef.current) return;
        const g = (window as any).google;
        g.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: async (resp: any) => {
            setErr("");
            setBusy(true);
            try {
              const r = await serverGoogleLogin(String(resp?.credential || ""));
              if (r.ok && r.token && r.user) {
                onAuthed(forceLocalSession(String(r.user.mobile || r.user.email || "google-user"), r.user.branchId, { name: r.user.name }));
              } else {
                setErr(r.error || r.message || (r.pending ? "⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।" : "Google লগইন হয়নি।"));
              }
            } catch {
              setErr("Google লগইনে সমস্যা — ইন্টারনেট দেখুন।");
            } finally {
              setBusy(false);
            }
          },
        });
        g.accounts.id.renderButton(googleDivRef.current, { theme: "outline", size: "large", width: 320, text: "signin_with", locale: "bn" });
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [tab]);

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

                {GOOGLE_CLIENT_ID && !isOriginOk() && (
                  <div className="rounded-xl border-2 border-rose-300 bg-rose-50 px-3 py-2.5 text-[11px] font-bold leading-relaxed text-rose-800">
                    ⚠️ Google লগইন এই ঠিকানায় চলবে না। যথাযথ ঠিকানা:{" "}
                    <a href={GOOGLE_ORIGIN} className="font-black underline">{GOOGLE_ORIGIN}</a>{" "}
                    — এটা খুলে লগইন করুন।
                  </div>
                )}
                {GOOGLE_CLIENT_ID && isOriginOk() && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-slate-300" />
                      <span className="text-[10px] font-black text-slate-500">অথবা</span>
                      <div className="h-px flex-1 bg-slate-300" />
                    </div>
                    <div ref={googleDivRef} className="flex justify-center" />
                    <p className="text-center text-[10px] font-semibold text-slate-500">
                      🛡️ নতুন Google অ্যাকাউন্টে অ্যাডমিনের অনুমতি লাগবে
                    </p>
                  </div>
                )}

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

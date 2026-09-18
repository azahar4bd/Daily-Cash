import { useState, useEffect } from "react";

interface ApkInstallModalProps {
  open: boolean;
  onClose: () => void;
  deferredPrompt: any;
}

export default function ApkInstallModal({
  open,
  onClose,
  deferredPrompt,
}: ApkInstallModalProps) {
  const [copied, setCopied] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleInstalled = () => {
      setInstalled(true);
    };
    window.addEventListener("appinstalled", handleInstalled);
    return () => window.removeEventListener("appinstalled", handleInstalled);
  }, []);

  if (!open) return null;

  const currentUrl = window.location.origin;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setInstalled(true);
      }
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-5 sm:p-6 text-slate-800 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-xl text-indigo-700 font-black">
              📱
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                অ্যাপ ইনস্টল ও APK ডাউনলোড
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Offline ও Online-এ নিরবচ্ছিন্ন ব্যবহারের জন্য
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 text-lg font-bold cursor-pointer transition"
          >
            ✕
          </button>
        </div>

        {/* 1-Click Install Button (When browser supports beforeinstallprompt) */}
        {deferredPrompt && !installed && (
          <div className="mb-4 rounded-2xl border-2 border-indigo-500/40 bg-indigo-50/70 p-4 text-center">
            <h3 className="text-sm font-black text-indigo-950 mb-1">
              🎉 ১-ক্লিকে ফোনে সরাসরি ইনস্টল করুন
            </h3>
            <p className="text-xs text-indigo-700 mb-3">
              এটি সরাসরি আপনার ফোনে নেটিভ অ্যাপ আইকন হিসেবে যুক্ত হবে এবং ইন্টারনেট ছাড়াও চলবে।
            </p>
            <button
              type="button"
              onClick={handleInstallClick}
              className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold py-2.5 text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>📥</span>
              <span>এখনই অ্যাপটি ইনস্টল করুন</span>
            </button>
          </div>
        )}

        {installed && (
          <div className="mb-4 rounded-2xl bg-emerald-50 border border-emerald-300 p-3 text-center text-xs font-bold text-emerald-800">
            ✅ অ্যাপটি আপনার ডিভাইসে সফলভাবে ইনস্টল হয়েছে! আপনি হোম স্ক্রিন থেকে যেকোনো সময় ওপেন করতে পারেন।
          </div>
        )}

        {/* 2 Ways Instructions */}
        <div className="space-y-3.5 text-xs sm:text-sm">
          {/* Method 1: PWA Install via Chrome */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
            <div className="flex items-center gap-2 font-black text-slate-900 mb-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px]">
                ১
              </span>
              <span>ফোনে সরাসরি অ্যাপ হিসেবে ইনস্টল (সবচেয়ে সহজ):</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
              <li>আপনার অ্যান্ড্রয়েড ফোনের <b>Chrome ব্রাউজারে</b> এই সাইটটি ওপেন করুন।</li>
              <li>উপরের ডানপাশে <b>তিনটি ডট (⋮)</b> মেনুতে ক্লিক করুন।</li>
              <li><b>"Install app"</b> অথবা <b>"Add to Home screen" (হোম স্ক্রিনে যোগ করুন)</b> অপশনে চাপুন।</li>
              <li>কয়েক সেকেন্ডের মধ্যে ফোনের অ্যাপ গ্যালারিতে এটি আসল অ্যাপের মতো ইনস্টল হয়ে যাবে।</li>
            </ul>
          </div>

          {/* Method 2: Offline-to-Online Sync Explanation */}
          <div className="rounded-2xl border border-slate-200 bg-emerald-50/50 p-3.5">
            <div className="flex items-center gap-2 font-black text-emerald-950 mb-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px]">
                ⚡
              </span>
              <span>Offline ও Online অটো-সিঙ্ক কীভাবে কাজ করে?</span>
            </div>
            <p className="text-slate-700 leading-relaxed text-xs">
              ১. <b>অফলাইন মোড:</b> যখন ইন্টারনেট থাকবে না বা ডাটা বন্ধ থাকবে, তখনও অ্যাপটি আগের মতোই দ্রুত চলবে। আপনি জমা, খরচ বা রিপোর্ট এন্ট্রি দিলে তা আপনার ফোনের মেমরিতে নিরাপদে জমা থাকবে।<br />
              ২. <b>অটো-সিঙ্ক:</b> যখনই ফোনে ইন্টারনেট কানেকশন পাওয়া যাবে, অ্যাপটি স্বয়ংক্রিয়ভাবে সব জমা ডাটা <b>Neon ক্লাউড ডাটাবেজে</b> আপলোড করে সিঙ্ক করে নেবে।
            </p>
          </div>

          {/* Method 3: Direct APK Builder */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
            <div className="flex items-center gap-2 font-black text-slate-900 mb-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-white text-[11px]">
                ২
              </span>
              <span>সরাসরি .apk ফাইল তৈরি (PWABuilder দিয়ে):</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-xs mb-2">
              আপনি চাইলে এই অ্যাপের জন্য ১ মিনিটে প্লে-স্টোর উপযোগী সাইনড <b>.apk ফাইল</b> বানিয়ে নিতে পারেন:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={currentUrl}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-bold text-slate-700"
                />
                <button
                  type="button"
                  onClick={handleCopyUrl}
                  className="shrink-0 rounded-lg bg-slate-200 hover:bg-slate-300 px-3 py-1 text-xs font-bold text-slate-800 transition cursor-pointer"
                >
                  {copied ? "কপি হয়েছে ✓" : "লিংক কপি"}
                </button>
              </div>
              <a
                href={`https://www.pwabuilder.com/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-2 text-xs transition shadow-xs"
              >
                <span>🚀 PWABuilder-এ APK তৈরি করুন</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 border-t border-slate-100 pt-3 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2 text-xs transition cursor-pointer"
          >
            বুঝেছি, বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function NetlifyGuideModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const tomlContent = `[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`;

  const handleCopyToml = () => {
    navigator.clipboard.writeText(tomlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto">
      <div className="flex max-h-[94vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300 text-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-gradient-to-r from-teal-800 to-slate-900 px-5 py-3.5 text-white">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                Netlify-তে Deploy করার সম্পূর্ণ গাইড
              </h3>
              <p className="text-xs text-teal-200">
                Cash Gobra অ্যাপটি Netlify-তে সহজে এবং আজীবনের জন্য ফ্রি হোস্ট করুন
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-2xl text-teal-200 hover:text-white">
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm leading-relaxed">
          {/* Status Box: Pre-configured items */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3.5 space-y-1 text-emerald-950">
            <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
              <span>✅</span>
              <span>আপনার অ্যাপে Netlify Deploy-এর জন্য সবকিছু প্রস্তুত করা হয়েছে!</span>
            </div>
            <ul className="list-disc list-inside text-xs space-y-0.5 text-emerald-800 pt-1">
              <li><b>netlify.toml</b> তৈরি করা হয়েছে (Build Command ও Publish Directory সেট করা আছে)</li>
              <li><b>public/_redirects</b> তৈরি করা হয়েছে (SPA Routing / Page Refresh 404 সমস্যার সমাধান)</li>
              <li><b>Client-Side Storage + Google Sheet Sync</b> যুক্ত আছে (সার্ভার বা ডেটাবেসের অতিরিক্ত খরচ ছাড়াই সব ডেটা সুরক্ষিত থাকবে)</li>
            </ul>
          </div>

          {/* Option 1: Netlify Drop */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-black text-slate-900 text-sm flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-[11px] text-white">
                  ১
                </span>
                <span>পদ্ধতি ১: Netlify Drop (সবচেয়ে সহজ - ১০ সেকেন্ডে Deploy)</span>
              </h4>
              <span className="rounded bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5">
                কোনো GitHub লাগবে না
              </span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-700 text-xs">
              <li>
                প্রথমে আপনার প্রজেক্টের টার্মিনালে রান করুন:{" "}
                <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono font-bold text-slate-900">
                  npm run build
                </code>
              </li>
              <li>এটি আপনার প্রজেক্টে একটি <b>dist</b> ফোল্ডার তৈরি করবে।</li>
              <li>
                ব্রাউজারে যান:{" "}
                <a
                  href="https://app.netlify.com/drop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline font-bold"
                >
                  app.netlify.com/drop
                </a>
              </li>
              <li>আপনার তৈরি হওয়া <b>dist</b> ফোল্ডারটি ড্র্যাগ অ্যান্ড ড্রপ (Drag &amp; Drop) করে সেখানে ছেড়ে দিন।</li>
              <li>ব্যাস! সাথে সাথে আপনার অ্যাপ লাইভ হয়ে যাবে এবং Netlify আপনাকে একটি লাইভ URL দিয়ে দেবে।</li>
            </ol>
          </div>

          {/* Option 2: GitHub + Netlify */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-black text-slate-900 text-sm flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[11px] text-white">
                  ২
                </span>
                <span>পদ্ধতি ২: GitHub রিপোজিটরি দিয়ে Deploy (অটোমেটিক আপডেট)</span>
              </h4>
              <span className="rounded bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5">
                অটোমেটিক
              </span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-700 text-xs">
              <li>আপনার কোডটি GitHub-এ পুশ (Push) করুন।</li>
              <li>Netlify ড্যাশবোর্ডে গিয়ে <b>&quot;Add new site&quot; &gt; &quot;Import an existing project&quot;</b> সিলেক্ট করুন।</li>
              <li>GitHub সিলেক্ট করে আপনার রিপোজিটরিটি বেছে নিন।</li>
              <li>
                বিল্ড সেটিংসে এগুলো নিজে থেকেই সেট থাকবে:
                <div className="bg-white border rounded p-2 my-1 font-mono text-xs text-slate-800">
                  Build command: <b>npm run build</b><br />
                  Publish directory: <b>dist</b>
                </div>
              </li>
              <li><b>Deploy site</b> বাটনে ক্লিক করুন।</li>
            </ol>
          </div>

          {/* Config snippet */}
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-3 text-white space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-teal-300">
                netlify.toml (অলরেডি তৈরি করা আছে):
              </span>
              <button
                type="button"
                onClick={handleCopyToml}
                className="rounded bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-0.5 text-xs font-semibold"
              >
                {copied ? "কপি হয়েছে!" : "Copy"}
              </button>
            </div>
            <pre className="text-[11px] font-mono text-emerald-400 overflow-x-auto p-1">
              {tomlContent}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t bg-slate-100 px-5 py-3">
          <span className="text-xs text-slate-500 font-medium">
            Cash Gobra - Netlify Deployment Ready
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 hover:bg-slate-800 px-6 py-1.5 text-xs font-bold text-white transition"
          >
            বুঝেছি / Close
          </button>
        </div>
      </div>
    </div>
  );
}

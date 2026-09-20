/**
 * App version + hard cache-busting guard.
 * পুরনো Service Worker ক্যাশে যাতে কখনো পুরনো ভার্সন না দেখায়।
 */
export const APP_VERSION = "1.3.1";

async function clearAllCachesAndSW() {
  try {
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch (e) {
    console.warn("[version] clear failed", e);
  }
}

export async function forceFreshReload() {
  await clearAllCachesAndSW();
  const url = new URL(window.location.href);
  url.searchParams.set("_v", String(Date.now()));
  window.location.replace(url.toString());
}

/** ব্যাকগ্রাউন্ডে নতুন ভার্সন এলে টোস্ট দেখাবে */
export function installVersionGuard(onUpdateFound: () => void) {
  if (typeof window === "undefined") return;

  const checkVersion = async () => {
    try {
      const res = await fetch(`/version.json?t=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.version && data.version !== APP_VERSION) {
        onUpdateFound();
      }
    } catch {}
  };

  // 1) Service Worker: always revalidate, auto-activate new version
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js", { updateViaCache: "none" })
      .then((reg) => {
        reg.update();
        reg.addEventListener("updatefound", () => {
          const nw = reg.installing;
          if (!nw) return;
          nw.addEventListener("statechange", () => {
            if (nw.state === "installed" && navigator.serviceWorker.controller) {
              onUpdateFound();
            }
          });
        });
      })
      .catch((e) => console.warn("[sw] register failed", e));

    let reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloaded) return;
      reloaded = true;
      // নতুন SW অ্যাক্টিভ — একবার রিলোড
      window.location.reload();
    });
  }

  // 2) Periodic + focus check
  checkVersion();
  window.setInterval(checkVersion, 60_000);
  window.addEventListener("focus", checkVersion);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkVersion();
  });
}

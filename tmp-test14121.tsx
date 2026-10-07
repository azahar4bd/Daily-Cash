/* 🧪 v1.4.121 — প্রিমিয়াম মেনু-বার রেন্ডার */
import { JSDOM } from "jsdom";
const dom = new JSDOM("<!doctype html><html><body></body></html>", { url: "http://localhost/" });
for (const [k, v] of Object.entries({
  window: dom.window, document: dom.window.document, localStorage: dom.window.localStorage,
  navigator: dom.window.navigator, CustomEvent: dom.window.CustomEvent, Event: dom.window.Event,
  HTMLElement: dom.window.HTMLElement, HTMLInputElement: dom.window.HTMLInputElement,
})) { Object.defineProperty(globalThis, k, { value: v, configurable: true }); }
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
try { Object.defineProperty(dom.window.navigator, "onLine", { value: false, configurable: true }); } catch {}
(globalThis as any).ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
(dom.window as any).matchMedia = (q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });

const React = await import("react");
const { createRoot } = await import("react-dom/client");
const { act } = React;
const { default: BottomMenu } = await import("./src/components/BottomMenu");

let pass = 0, fail = 0;
const ok = (n: string, c: boolean) => { c ? (pass++, console.log("✅", n)) : (fail++, console.log("❌", n)); };

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
const tabs: string[] = [];
await act(async () => {
  root.render(React.createElement(BottomMenu, {
    currentTab: "check",
    onTabChange: (t: string) => tabs.push(t),
    selectedDate: "2026-10-07",
    onDateChange: () => {},
    onOpenTracker: () => {},
  }));
});
const nav = container.querySelector("nav")!;
ok("T1 নিচের বার রেন্ডার হয়েছে", Boolean(nav));
const btns = [...nav.querySelectorAll("button")];
const labels = btns.map((b) => b.textContent || "");
ok("T2 ৬টাই ট্যাব আছে (Rebate নেই)", ["Receive","Payment","Report","Cashbook","Check","Entertainment"].every((l) => labels.some((x) => x.includes(l))) && !labels.some((x) => x.includes("Rebate")));
const checkBtn = btns.find((b) => (b.textContent || "").includes("Check") && (b.textContent || "").includes("🧾"))!;
ok("T3 অ্যাকটিভ ট্যাবে গ্রেডিয়েন্ট + গ্লো-ডট", (checkBtn.className.includes("from-indigo-500") && checkBtn.className.includes("scale-[1.04]") && checkBtn.querySelector(".animate-pulse") !== null));
ok("T4 প্রিমিয়াম গ্লাস-ডক কন্টেইনার", Boolean(container.querySelector(".bg-white\\/5.rounded-2xl")) || [ ...nav.querySelectorAll("div")].some((d) => d.className.includes("bg-white/5") && d.className.includes("backdrop-blur-md")));
ok("T5 ট্যাব-ক্লিক হ্যান্ডলার কাজ করে", (await act(async () => { btns.find((b) => (b.textContent || "").includes("Payment") && (b.textContent || "").includes("📤"))!.click(); }), tabs.length === 1 && tabs[0] === "payment"));
ok("T6 Neon DB চিপ + গ্রেডিয়েন্ট ব্র্যান্ড", labels.some((x) => x.includes("Neon DB")) && Boolean(nav.querySelector(".bg-clip-text")));
console.log(`== ${pass} পাস, ${fail} ফেইল ==`);
process.exit(fail ? 1 : 0);

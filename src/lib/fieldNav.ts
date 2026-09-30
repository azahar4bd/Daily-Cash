/**
 * v1.4.97: PC-তে ⌨ Arrow ↑↓←→ ও Enter দিয়ে এক ঘর থেকে অন্য ঘরে ফোকাস স্থানান্তর — সব এন্ট্রি-ফর্মে।
 *
 * নিয়ম:
 * • ArrowDown / Enter → পরের ঘর • ArrowUp → আগের ঘর (Excel-স্টাইল)
 * • ArrowRight → ক্যারেট লেখার একদম ডানপ্রান্তে থাকলেই পরের ঘর; ArrowLeft → একদম বামপ্রান্তে থাকলেই আগের ঘর
 *   (মাঝখানে থাকলে নেটিভ টেক্সট-কার্সর আচরণই বহাল — লেখা এডিট করতে কষ্ট হবে না)
 * • Ctrl/Alt/Meta-চাপা অবস্থায় কিছুই করা হয় না
 * • checkbox/radio/button/select/textarea — নেটিভ আচরণ বহাল (ট্যাব/স্পেসের নিয়ম বজায়)
 * • SearchSelect-এর তালিকা খোলা থাকলে Arrow/Enter আমরা দখল করি না (তালিকার নেটিভ কাজ যেন ভাঙে না)
 * • মোডাল (পপআপ) খোলা থাকলে ঘর-ক্রম শুধু মোডালের ভিতরে ঘোরে — পেছনের পেজের ঘরে যায় না
 * • শেষ ঘরের পরে আর এগোয় না (স্টপ) — ভুলবশত ফর্ম-রিসেট/সাবমিট ঘটে না
 */

const NAV_SELECTOR =
  "input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]):not([type=range]):not([type=color]):not([type=reset]):not([type=image]):not(disabled)";

const isNavField = (el: Element | null): el is HTMLInputElement => {
  if (!el || !(el instanceof HTMLInputElement)) return false;
  const bad = ["checkbox", "radio", "button", "submit", "file", "hidden", "range", "color", "image", "reset"];
  if (bad.includes((el.type || "text").toLowerCase())) return false;
  if (el.disabled) return false;
  try {
    return getComputedStyle(el).display !== "none";
  } catch {
    return true;
  }
};

/** স্কোপের ভিতরে নেভিগেশনযোগ্য ঘরগুলো DOM-ক্রমে (টেস্ট থেকেও ডাকা যায়) */
export const getNavFields = (scope: ParentNode | Document = document): HTMLInputElement[] =>
  Array.from(scope.querySelectorAll(NAV_SELECTOR)).filter(isNavField) as HTMLInputElement[];

/** SearchSelect-এর ড্রপডাউন তালিকা খোলা আছে কি না — থাকলে আমাদের নেভিগেশন হাতছাড়া চেডদেবে */
const menuOpenUnder = (el: HTMLElement): boolean =>
  Boolean(el.closest("div.relative")?.querySelector(":scope > div.absolute"));

export function installFieldArrowNav(doc: Document = document): void {
  const g = globalThis as Record<string, unknown>;
  if (g.__FIELD_NAV_INSTALLED) return;
  g.__FIELD_NAV_INSTALLED = true;

  doc.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    const key = e.key;
    // উৎস ঘর = ইভেন্টের টার্গেট — কোনো ইনপুটে নিজস্ব Enter-হ্যান্ডলার blur() করে
    // ফোকাস সরালেও (যেমন চেক ফর্মের মেম্বার কোড) নেভিগেশন ঠিকঠাক চলবে
    const el = e.target instanceof HTMLInputElement ? e.target : null;
    if (!el || !isNavField(el)) return;

    let dir = 0;
    if (key === "Enter" || key === "ArrowDown") dir = 1;
    else if (key === "ArrowUp") dir = -1;
    else if (key === "ArrowRight" || key === "ArrowLeft") {
      // ←/→ : টেক্সট ক্যারেট প্রান্তে পৌঁছালেই ঝোক বদল — নয়তো নেটিভ কার্সর-চলাচল
      let atStart = false;
      let atEnd = false;
      try {
        const v = (el.value || "").length;
        const s = el.selectionStart;
        const en = el.selectionEnd;
        if (s == null || en == null) {
          atStart = true;
          atEnd = true; // number টাইপ ইত্যদিতে কার্সর পাওয়া যায় না — সরাসরি স্থানান্তর
        } else {
          atStart = s === 0 && en === 0;
          atEnd = s === v && en === v;
        }
      } catch {
        atStart = true;
        atEnd = true;
      }
      if (key === "ArrowRight" && atEnd) dir = 1;
      else if (key === "ArrowLeft" && atStart) dir = -1;
      else return;
    } else return;

    // SearchSelect-এর তালিকা খোলা — সেখানে Arrow/Enter নেটিভ কাজ করুক
    if (menuOpenUnder(el)) return;

    // মোডাল খোলা থাকলে ক্রম মোডালের ভিতরেই
    const modal = el.closest<HTMLElement>(".fixed");
    const scopeEl: ParentNode = modal || doc;
    const fields = getNavFields(scopeEl);
    const idx = fields.indexOf(el);
    if (idx < 0) return;
    const nextEl = fields[idx + dir];
    if (!nextEl) return; // প্রান্তে এসে থাম — সাইক্ল নয়

    e.preventDefault();
    nextEl.focus();
    try {
      // ফোকাসের সাথেই পুরো লেখা সিলেক্ট — ডেটা-এন্ট্রিতে টাইপ করলেই আগের মান রিপ্লেস হয়ে যায়
      (nextEl as HTMLInputElement).select?.();
    } catch {}
  });
}

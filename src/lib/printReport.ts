/**
 * 🖨️ v1.4.146: যেকোনো DOM-সেকশনকে পরিষ্কার A4 প্রিন্ট-পেজে পাঠানো
 *  - মোবাইল Chrome-এ নির্ভরযোগ্য pop-up পদ্ধতি (ইউজার-ক্লিকের মধ্যে — ব্লক হয় না)
 *  - ইনপুট/ড্রপডাউনের মান টেক্সট হয়ে যায়, টেবিলে গোছানো বর্ডার-স্টাইল
 *  - pop-up ব্লক হলে পুরনো window.print()-এ ফলব্যাক
 */
export function printSection(
  el: HTMLElement | null,
  opts: { title: string; subtitle?: string; landscape?: boolean }
): void {
  if (!el) return;

  // ক্লোন নিয়ে ফর্ম-ঘরগুলোকে মান-সহ টেক্সটে বদলাই
  const clone = el.cloneNode(true) as HTMLElement;
  const srcFields = el.querySelectorAll("input, select, textarea");
  const cloneFields = clone.querySelectorAll("input, select, textarea");
  srcFields.forEach((inp, i) => {
    const target = cloneFields[i] as HTMLElement | undefined;
    if (!target) return;
    const span = document.createElement("span");
    span.style.fontWeight = "600";
    span.textContent = (inp as HTMLInputElement).value ?? "";
    target.replaceWith(span);
  });

  const html = `<!doctype html>
<html lang="bn"><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${escapeHtml(opts.title)}</title>
<style>
  @page { size: A4 ${opts.landscape ? "landscape" : "portrait"}; margin: 8mm 9mm; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; color: #0f172a; margin: 0; padding: 4px; }
  .hdr { text-align: center; margin-bottom: 8px; }
  .hdr h2 { margin: 0 0 2px; font-size: 20px; }
  .hdr p { margin: 0; font-size: 12px; font-weight: 700; color: #334155; }
  table { width: 100%; border-collapse: collapse; font-size: 11px; }
  th, td { border: 1px solid #999 !important; padding: 4px 6px; }
  thead th, thead td { background: #fdecd2 !important; font-weight: 800; text-align: center; }
  tfoot th, tfoot td { background: #f1dcb6 !important; font-weight: 800; }
  td { font-weight: 600; }
  tr:last-child td:first-child { font-weight: 800; }
</style></head>
<body>
  <div class="hdr">
    <h2>${escapeHtml(opts.title)}</h2>
    ${opts.subtitle ? `<p>${escapeHtml(opts.subtitle)}</p>` : ""}
  </div>
  ${clone.outerHTML}
  <script>window.addEventListener("load", function(){ setTimeout(function(){ window.focus(); window.print(); }, 150); });</script>
</body></html>`;

  const w = window.open("", "_blank", "width=1000,height=720");
  if (!w) {
    window.print(); // ফলব্যাক
    return;
  }
  w.document.write(html);
  w.document.close();
}

function escapeHtml(s: string): string {
  return String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] || c);
}

/*
 * 📄 PDF → সারি-লাইন রূপান্তরক (ব্রাউজার) — মডাল থেকে ডায়নামিক-ইমপোর্ট হয়,
 * তাই pdfjs-এর ভারী বান্ডল মূল বান্ডলে যায় না।
 * পদ্ধতি: প্রতি পাতার টেক্সট-আইটেম y-স্থানাংকে গোষ্ঠী → প্রতি সারিতে x-ক্রমে সাজিয়ে জোড়া।
 */
import * as pdfjs from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

export async function pdfToLines(buf: ArrayBuffer): Promise<string[]> {
  const doc = await pdfjs.getDocument({ data: buf, isEvalSupported: false }).promise;
  const lines: string[] = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    const rows: Record<number, { x: number; s: string }[]> = {};
    for (const it of tc.items as any[]) {
      const str = String(it?.str || "");
      if (!str.trim()) continue;
      const y = Math.round(it.transform[5]);
      (rows[y] = rows[y] || []).push({ x: it.transform[4], s: str });
    }
    const ys = Object.keys(rows)
      .map(Number)
      .sort((a, b) => b - a); // পাতা উপরে → নিচে
    for (const y of ys) {
      const line = rows[y]
        .sort((a, b) => a.x - b.x)
        .map((o) => o.s)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      if (line) lines.push(line);
    }
  }
  return lines;
}

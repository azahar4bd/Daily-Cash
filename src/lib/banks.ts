/**
 * ব্যাংকের তালিকা — ইংরেজি ও বাংলা দুই নামেই।
 * Check পেজে টাইপ করার সময় দুই ভাষাতেই সাজেশন দেখানো হয়।
 */
export type BankName = { en: string; bn: string };

export const BANKS: BankName[] = [
  { en: "Sonali Bank", bn: "সোনালী ব্যাংক" },
  { en: "Janata Bank", bn: "জনতা ব্যাংক" },
  { en: "Agrani Bank", bn: "অগ্রণী ব্যাংক" },
  { en: "Rupali Bank", bn: "রূপালী ব্যাংক" },
  { en: "BASIC Bank", bn: "বেসিক ব্যাংক" },
  { en: "IFIC Bank", bn: "আইএফআইসি ব্যাংক" },
  { en: "BRAC Bank", bn: "ব্র্যাক ব্যাংক" },
  { en: "Dutch-Bangla Bank", bn: "ডাচ-বাংলা ব্যাংক" },
  { en: "Islami Bank", bn: "ইসলামী ব্যাংক" },
  { en: "City Bank", bn: "সিটি ব্যাংক" },
  { en: "Pubali Bank", bn: "পূবালী ব্যাংক" },
  { en: "Uttara Bank", bn: "উত্তরা ব্যাংক" },
  { en: "Eastern Bank", bn: "ইস্টার্ন ব্যাংক" },
  { en: "Prime Bank", bn: "প্রাইম ব্যাংক" },
  { en: "Southeast Bank", bn: "সাউথইস্ট ব্যাংক" },
  { en: "Mercantile Bank", bn: "মার্কেন্টাইল ব্যাংক" },
  { en: "Trust Bank", bn: "ট্রাস্ট ব্যাংক" },
  { en: "One Bank", bn: "ওয়ান ব্যাংক" },
  { en: "Bank Asia", bn: "ব্যাংক এশিয়া" },
  { en: "Dhaka Bank", bn: "ঢাকা ব্যাংক" },
  { en: "NCC Bank", bn: "এনসিসি ব্যাংক" },
  { en: "Mutual Trust Bank", bn: "মিউচুয়াল ট্রাস্ট ব্যাংক" },
  { en: "National Bank", bn: "ন্যাশনাল ব্যাংক" },
  { en: "Social Islami Bank", bn: "সোশ্যাল ইসলামী ব্যাংক" },
  { en: "First Security Islami Bank", bn: "ফার্স্ট সিকিউরিটি ইসলামী ব্যাংক" },
  { en: "Union Bank", bn: "ইউনিয়ন ব্যাংক" },
  { en: "Global Islami Bank", bn: "গ্লোবাল ইসলামী ব্যাংক" },
  { en: "Midland Bank", bn: "মিডল্যান্ড ব্যাংক" },
  { en: "Shimanto Bank", bn: "শিমান্ত ব্যাংক" },
  { en: "NRB Bank", bn: "এনআরবি ব্যাংক" },
  { en: "Meghna Bank", bn: "মেঘনা ব্যাংক" },
  { en: "Modhumoti Bank", bn: "মধুমতি ব্যাংক" },
  { en: "Padma Bank", bn: "পদ্মা ব্যাংক" },
  { en: "Standard Bank", bn: "স্ট্যান্ডার্ড ব্যাংক" },
  { en: "United Commercial Bank", bn: "ইউনাইটেড কমার্শিয়াল ব্যাংক" },
  { en: "Bangladesh Krishi Bank", bn: "বাংলাদেশ কৃষি ব্যাংক" },
  { en: "Rajshahi Krishi Unnayan Bank", bn: "রাজশাহী কৃষি উন্নয়ন ব্যাংক" },
  { en: "Karmasangsthan Bank", bn: "কর্মসংস্থান ব্যাংক" },
  { en: "Probashi Kallyan Bank", bn: "প্রবাসী কল্যাণ ব্যাংক" },
  { en: "Ansar VDP Unnayan Bank", bn: "আনসার ভিডিপি উন্নয়ন ব্যাংক" },
  { en: "Community Bank", bn: "কমিউনিটি ব্যাংক" },
  { en: "Habib Bank", bn: "হাবিব ব্যাংক" },
  { en: "HSBC", bn: "এইচএসবিসি ব্যাংক" },
  { en: "State Bank of India", bn: "স্টেট ব্যাংক অফ ইন্ডিয়া" },
  { en: "Citibank N.A.", bn: "সিটিব্যাংক" },
  { en: "Others", bn: "অন্যান্য" },
];

/** টাইপ করা লেখা অনুযায়ী দুই ভাষায় মিলিয়ে সাজেশন বের করে */
export function suggestBanks(query: string, extra: string[] = [], limit = 12): BankName[] {
  const q = String(query || "").trim().toLowerCase();
  const seen = new Set<string>();
  const list: BankName[] = [];

  const push = (b: BankName) => {
    const key = b.en.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    list.push(b);
  };

  for (const b of BANKS) {
    if (!q || b.en.toLowerCase().includes(q) || b.bn.includes(query.trim()) || b.bn.toLowerCase().includes(q))
      push(b);
  }

  // আগে ব্যবহার করা (তালিকার বাইরের) নামগুলোও সাজেশনে আসবে
  for (const raw of extra) {
    const v = String(raw || "").trim();
    if (!v) continue;
    const key = v.toLowerCase();
    if (seen.has(key)) continue;
    if (q && !key.includes(q) && !v.includes(query.trim())) continue;
    seen.add(key);
    list.push({ en: v, bn: v });
  }

  return list.slice(0, limit);
}

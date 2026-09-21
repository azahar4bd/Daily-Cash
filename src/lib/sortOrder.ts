/**
 *-fixed সর্টিং অর্ডার — পণ্য/সাব-ক্যাটাগরি ও স্টাফ।
 * নতুন যোগ হওয়া আইটেম সবসময় সবার শেষে বসবে।
 */
export const PRODUCT_ORDER = [
  "jagoron",
  "agrossor",
  "buniyed",
  "sufolon",
  "mfce",
  "shopan krishi",
  "shopan manufacture",
  "shopan service",
  "shopan value chain",
];

export const STAFF_ORDER = ["sakib", "mintu", "alamgir", "monir"];

const rank = (v: string, list: string[]) => {
  const i = list.indexOf(String(v || "").trim().toLowerCase());
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

export const cmpProduct = (a: string, b: string) => {
  const d = rank(a, PRODUCT_ORDER) - rank(b, PRODUCT_ORDER);
  return d !== 0 ? d : String(a).localeCompare(String(b));
};

export const cmpStaff = (a: string, b: string) => {
  const d = rank(a, STAFF_ORDER) - rank(b, STAFF_ORDER);
  return d !== 0 ? d : String(a).localeCompare(String(b));
};

/** fixed তালিকা + অতিরিক্ত (নতুন) আইটেম — নতুনগুলো শেষে, নিজেরা alphabetically */
export const mergeOrder = (base: string[], extras: string[], cmp: (a: string, b: string) => number) => {
  const seen = new Set(base.map((x) => x.trim().toLowerCase()));
  const add = extras.filter((x) => x && !seen.has(x.trim().toLowerCase())).sort(cmp);
  return [...base, ...add];
};

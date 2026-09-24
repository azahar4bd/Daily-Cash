#!/usr/bin/env node
/**
 * prebuild ভার্সন-সিংক — v1.4.67
 * src/lib/version.ts-এ APP_VERSION বাড়ালেই বাকি সব জায়গায় নিজে থেকে পৌঁছে যাবে:
 *   1. public/version.json  → ভার্সন-গার্ড এটাই পড়ে (না মিললে পপআপ লুপ হয়!)
 *   2. public/sw.js         → CACHE_NAME বদলায়, ফলে ব্রাউজার নতুন SW ইনস্টল করে
 */
import { readFileSync, writeFileSync } from "fs";

const src = readFileSync("src/lib/version.ts", "utf8");
const m = src.match(/APP_VERSION\s*=\s*"([^"]+)"/);
if (!m) {
  console.error("sync-version: version.ts-এ APP_VERSION পাওয়া যায়নি!");
  process.exit(1);
}
const v = m[1];

// 1) version.json
writeFileSync("public/version.json", JSON.stringify({ version: v }));
console.log(`✓ public/version.json → ${v}`);

// 2) sw.js CACHE_NAME
const swPath = "public/sw.js";
let sw = readFileSync(swPath, "utf8");
const updated = sw.replace(/cash-gobra-v[\d.]+/, `cash-gobra-v${v}`);
if (updated !== sw) {
  writeFileSync(swPath, updated);
  console.log(`✓ sw.js CACHE_NAME → cash-gobra-v${v}`);
} else if (sw.includes(`cash-gobra-v${v}`)) {
  console.log(`✓ sw.js CACHE_NAME আগে থেকেই ঠিক (cash-gobra-v${v})`);
} else {
  console.error("sync-version: sw.js-এ CACHE_NAME প্যাটার্ন মেলেনি!");
  process.exit(1);
}

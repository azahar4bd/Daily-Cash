import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { installVersionGuard } from './lib/version';
import { installBranchStorage } from './lib/branchScope';
import { getSession, ensureAuthSeed } from './lib/auth';

// 🏢 মাল্টি অফিস: লগইন হওয়া শাখার ডেটা আলাদা করে পড়া/লেখা হবে।
// অ্যাপের কোনো ডেটা পড়ার আগেই এটি বসাতে হয়।
try {
  const s = getSession();
  installBranchStorage(s?.branchId);
} catch {
  installBranchStorage();
}
// গোবরা অফিসের ডিফল্ট ইউজার না থাকলে তৈরি হবে
ensureAuthSeed().catch(() => {});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hard cache-busting: পুরনো Service Worker ক্যাশে যেন পুরনো ভার্সন না দেখায়
installVersionGuard(() => {
  window.dispatchEvent(new CustomEvent('app-update-available'));
});

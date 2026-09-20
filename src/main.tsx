import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { installVersionGuard } from './lib/version';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hard cache-busting: পুরনো Service Worker ক্যাশে যেন পুরনো ভার্সন না দেখায়
installVersionGuard(() => {
  window.dispatchEvent(new CustomEvent('app-update-available'));
});

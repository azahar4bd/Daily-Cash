/// <reference types="vite/client" />

// 🆕 v1.4.175: pdfjs worker (?url ইমপোর্ট)
declare module "pdfjs-dist/build/pdf.worker.min.mjs?url" {
  const src: string;
  export default src;
}

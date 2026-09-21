import { useEffect, useMemo, useRef, useState } from "react";

export type SearchOption = { value: string; label?: string };

/**
 * সার্চযোগ্য ড্রপডাউন — টাইপ করলে তালিকা ছেঁকে যায়, মিলে যাওয়াতে ট্যাপ/ক্লিক করলে বসে যায়।
 * মোবাইল-পিসি দুটোতেই কাজ করে; বাইরে ট্যাপ করলে বন্ধ।
 */
export default function SearchSelect({
  value,
  onChange,
  options,
  placeholder = "-- Select --",
  disabled = false,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  options: (string | SearchOption)[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const boxRef = useRef<HTMLDivElement | null>(null);

  const opts = useMemo<SearchOption[]>(
    () => options.map((o) => (typeof o === "string" ? { value: o, label: o } : o)),
    [options]
  );
  const current = opts.find((o) => o.value === value);

  useEffect(() => {
    const onDoc = (e: MouseEvent | TouchEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
    };
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? opts.filter((o) => (o.label || o.value).toLowerCase().includes(q))
    : opts;

  return (
    <div className="relative" ref={boxRef}>
      <input
        value={open ? query : current ? current.label || current.value : value || ""}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => {
          if (disabled) return;
          setOpen(true);
          setQuery("");
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
          if (e.key === "Enter") e.preventDefault();
        }}
        className={className}
        autoComplete="off"
        spellCheck={false}
      />
      {open && !disabled && (
        <div className="absolute left-0 right-0 top-full z-40 mt-1 max-h-56 overflow-auto rounded-xl border border-slate-300 bg-white shadow-2xl">
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-xs font-semibold text-slate-500">কোনো মিল নেই</div>
          ) : (
            filtered.map((o) => (
              <button
                type="button"
                key={o.value}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                  setQuery("");
                }}
                className={`block w-full cursor-pointer px-3 py-1.5 text-left text-sm font-semibold ${
                  o.value === value
                    ? "bg-blue-100 text-blue-900"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {o.label || o.value}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

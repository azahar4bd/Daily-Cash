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
  noKeyboardOnMobile = false,
}: {
  value: string;
  onChange: (v: string) => void;
  options: (string | SearchOption)[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  /**
   * v1.4.45: মোবাইলে (টাচ স্ক্রিনে) ঘরে ট্যাপ করলে শুধু তালিকা খুলবে —
   * সফট কীবোর্ড আর উঠবে না। PC-তে টাইপ করে ছাঁকা আগের মতোই কাজ করে।
   */
  noKeyboardOnMobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const boxRef = useRef<HTMLDivElement | null>(null);
  /** v1.4.77: ফোকাস জেসচারেই তালিকা খুললে ওই একই ক্লিকে আবার টগল হয়ে যায় না */
  const justFocusedRef = useRef(false);
  const isCoarsePointer = useMemo(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches,
    []
  );
  const silentKeyboard = noKeyboardOnMobile && isCoarsePointer;

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
        // v1.4.80: value খালি হলেই ঘর খালি (placeholder) — ""-মানের "— ফাঁকা —" অপশন বসলেও লেবেল দেখায় না
        value={open ? query : value ? (current ? current.label || current.value : value) : ""}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => {
          if (disabled) return;
          justFocusedRef.current = true;
          setOpen(true);
          setQuery("");
        }}
        onClick={() => {
          if (disabled) return;
          // এই ক্লিকেই ফোকাস হয়ে খুলেছে — আবার কিছু করা যাবে না
          if (justFocusedRef.current) {
            justFocusedRef.current = false;
            return;
          }
          // সিলেক্টের পর ইনপুট ফোকাসেই থাকে — তখন ক্লিকেই তালিকা আবার খুলতে হবে (টগল)
          if (!open) {
            setOpen(true);
            setQuery("");
          } else if (silentKeyboard) {
            // মোবাইল (রিড-অনলি) মোডে খোলা তালিকায় ক্লিক = বন্ধ (টগল)
            setOpen(false);
          }
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
        readOnly={silentKeyboard}
        inputMode={silentKeyboard ? "none" : undefined}
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

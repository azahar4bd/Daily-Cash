import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { suggestBanks, type BankName } from "@/lib/banks";

/**
 * Bank Name ইনপুট — টাইপ করার সাথে সাথে নিচে বাংলা ও ইংরেজি দুই ভাষাতেই সাজেশন দেখায়।
 * যে নামে ট্যাপ করবেন সেটাই ঘরে বসে যাবে (বাংলা চাইলে বাংলা, ইংরেজি চাইলে ইংরেজি)।
 */
export default function BankNameInput({
  value,
  onChange,
  placeholder,
  className = "",
  extras = [],
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
  /** আগে ব্যবহার করা (তালিকার বাইরের) নামগুলোও সাজেশনে আসবে */
  extras?: string[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => suggestBanks(value, extras), [value, extras]);

  useEffect(() => {
    const onDocDown = (e: MouseEvent | TouchEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocDown);
    document.addEventListener("touchstart", onDocDown);
    return () => {
      document.removeEventListener("mousedown", onDocDown);
      document.removeEventListener("touchstart", onDocDown);
    };
  }, []);

  const pick = (b: BankName, lang: "en" | "bn") => {
    onChange(lang === "bn" ? b.bn : b.en);
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, Math.max(items.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (open && items[active]) {
        e.preventDefault();
        pick(items[active], "en");
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative" ref={boxRef}>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
          setActive(0);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className={className}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-64 overflow-auto rounded-xl border-2 border-emerald-300 bg-white shadow-2xl">
          <div className="sticky top-0 flex items-center justify-between border-b border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800">
            <span>🌐 বাংলা ও English — যেটা দরকার সেটায় ট্যাপ করুন</span>
            <span className="font-mono">{items.length}</span>
          </div>

          {items.length === 0 ? (
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-500">
              নতুন নাম — যেভাবে লিখেছেন সেভেই থাকবে ✓
            </div>
          ) : (
            items.map((b, i) => (
              <div
                key={`${b.en}-${i}`}
                className={`flex items-stretch gap-1 border-b border-slate-100 px-1.5 py-1 last:border-0 ${
                  i === active ? "bg-emerald-50" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pick(b, "en")}
                  className="flex-1 rounded-lg px-2 py-1 text-left text-[13px] font-bold text-slate-800 transition hover:bg-blue-100 hover:text-blue-900"
                >
                  {b.en}
                </button>
                {b.bn !== b.en && (
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => pick(b, "bn")}
                    className="flex-1 rounded-lg px-2 py-1 text-right text-[13px] font-bold text-emerald-800 transition hover:bg-emerald-100"
                  >
                    {b.bn}
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

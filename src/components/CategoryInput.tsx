import { useState } from "react";
import { titleCase } from "@/lib/categories";

export default function CategoryInput({
  value,
  onChange,
  options,
  disabled = false,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const [typing, setTyping] = useState(false);

  const q = typing ? value.toLowerCase() : "";
  const filtered = q
    ? options.filter((o) => o.toLowerCase().startsWith(q))
    : options;
  const list = filtered.length
    ? filtered
    : options.filter((o) => o.toLowerCase().includes(q));

  const selectOption = (opt: string) => {
    if (disabled) return;
    onChange(opt.toLowerCase().trim());
    setTyping(false);
    setOpen(false);
  };

  return (
    <div className="relative">
      <input
        value={titleCase(value)}
        disabled={disabled}
        placeholder="Type first letter or select..."
        onChange={(e) => {
          if (disabled) return;
          onChange(e.target.value.toLowerCase());
          setTyping(true);
          setOpen(true);
          setHi(0);
        }}
        onFocus={() => {
          if (disabled) return;
          setTyping(false);
          setOpen(true);
        }}
        onClick={() => {
          if (disabled) return;
          setTyping(false);
          setOpen(true);
        }}
        onBlur={() => {
          setTimeout(() => {
            setOpen(false);
            setTyping(false);
            if (value && value.trim()) {
              const valLower = value.toLowerCase().trim();
              const exact = options.find(
                (o) => o.toLowerCase().trim() === valLower
              );
              if (exact) {
                onChange(exact);
              } else {
                const starts = options.find((o) =>
                  o.toLowerCase().trim().startsWith(valLower)
                );
                if (starts) onChange(starts);
              }
            }
          }, 250);
        }}
        onKeyDown={(e) => {
          if (disabled) return;
          if (!open) {
            if (e.key === "ArrowDown" || e.key === "Enter") {
              setOpen(true);
              return;
            }
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setHi((h) => Math.min(h + 1, list.length - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHi((h) => Math.max(h - 1, 0));
          } else if (e.key === "Enter" && list[hi]) {
            e.preventDefault();
            selectOption(list[hi]);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        className={`w-full rounded border px-3 py-2 text-sm font-semibold focus:outline-none ${
          disabled
            ? "border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60"
            : "border-slate-300 bg-white text-slate-800 focus:border-blue-500"
        }`}
      />
      <button
        type="button"
        tabIndex={-1}
        disabled={disabled}
        onPointerDown={(e) => {
          if (disabled) return;
          e.preventDefault();
          setOpen((o) => !o);
        }}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 ${
          disabled ? "text-slate-300 cursor-not-allowed" : "text-slate-500 cursor-pointer"
        }`}
      >
        ▼
      </button>
      {!disabled && open && list.length > 0 && (
        <ul className="absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-slate-300 bg-white shadow-xl">
          {list.map((o, i) => (
            <li
              key={o}
              onPointerDown={(e) => {
                e.preventDefault();
                selectOption(o);
              }}
              className={`cursor-pointer px-3.5 py-2 text-xs sm:text-sm transition ${
                i === hi
                  ? "bg-blue-100 font-semibold text-blue-900"
                  : o.toLowerCase() === value.toLowerCase()
                  ? "bg-slate-100 font-bold text-slate-900"
                  : "hover:bg-slate-100 text-slate-800"
              }`}
            >
              {titleCase(o)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

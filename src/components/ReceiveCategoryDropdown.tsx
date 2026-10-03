import { useState, useRef, useEffect, useMemo } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { titleCase } from "@/lib/categories";
import type { Cat } from "@/types";

interface ReceiveCategoryDropdownProps {
  value: string;
  onChange: (category: string) => void;
  cats: (Cat | string)[];
  onManageClick?: () => void;
  disabled?: boolean;
}

/**
 * v1.4.98 — "ক্লিকে ল্যাগ / ২-৩ বার ক্লিক করতে হয়" সমস্যার সমাধান:
 *
 * পুরনো সমস্যাটি ছিল click-ইভেন্ট-নির্ভরতা: অন্য ইনপুটে (যেমন Description)
 * ফোকাস থাকা অবস্থায় ট্যাপ করলে প্রথমে সেই ইনপুট blur হয় → মোবাইলে নেটিভ
 * কিবোর্ড নামে → পুরো লেআউট সরে যায় → ক্লিক-ইভেন্টটি সরে যাওয়া বাটনটি মিস
 * করে। ফলে প্রথম ১-২ ট্যাপ "কিছুই হয় না" মনে হয়।
 *
 * নতুন পদ্ধতি (স্ট্যান্ডার্ড কম্বোবক্স-প্যাটার্ন):
 *  1) pointerdown-এই preventDefault → ফোকাস স্থির থাকে, কিবোর্ড/লেআউট সরে না।
 *  2) খোলা/সিলেক্ট commit হয় pointerup-এ — অর্থাৎ প্রথম ট্যাপেই কাজ করে,
 *     আবার স্ক্রল-জেসচার (drag) হলে pointercancel-এ commit হয় না (নিরাপদ)।
 *  3) বাইরে চাপলে pointerdown-এই বন্ধ (click-এর অপেক্ষা নয়)।
 *  4) সিলেক্ট/বন্ধ হলে আটকে থাকা কিবোর্ড/ক্যারেট blur করে পরিষ্কার করা হয়।
 *  5) onClick রাখা আছে কিবোর্ড (Enter/Space) ও স্ক্রিন-রিডারের fallback হিসেবে
 *     — pointer-অ্যাকশনের ইকো click যেন দুইবার টগল না করে তার গার্ডসহ।
 */
export default function ReceiveCategoryDropdown({
  value,
  onChange,
  cats,
  onManageClick,
  disabled = false,
}: ReceiveCategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  /** শেষ pointer-অ্যাকশনের সময় — preventDefault সত্ত্বেও কোনো ব্রাউজার click ফায়ার করলে সেটি ইকো হিসেবে বাদ যায় */
  const lastPtrActionAt = useRef(0);
  /** শেষ pointerdown-এর টার্গেট — drag করে বাইরে থেকে রিলিজ হলে (pointerdown ছাড়া pointerup) যেন ভুল সিলেক্ট/টগল না হয় */
  const pressedRef = useRef<EventTarget | null>(null);

  const markPtrAction = () => {
    lastPtrActionAt.current = Date.now();
  };
  const clickIsEcho = () => Date.now() - lastPtrActionAt.current < 600;

  /** অন্য ইনপুটে আটকে থাকা নেটিভ কিবোর্ড/ক্যারেট পরিষ্কার করা (সিলেক্ট/বন্ধের পর) */
  const blurActiveTextInput = () => {
    const ae = document.activeElement as HTMLElement | null;
    if (ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA")) ae.blur();
  };

  // Close dropdown on press outside (v1.4.98: pointerdown — ট্যাপ/মাউস-ডাউনের মুহূর্তেই, click-এর অপেক্ষা নয়)
  useEffect(() => {
    if (!isOpen) return;
    function handlePressOutside(event: Event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        const t = event.target as HTMLElement | null;
        const tapsAnotherField =
          !!t &&
          (t.tagName === "INPUT" ||
            t.tagName === "TEXTAREA" ||
            t.tagName === "SELECT");
        setIsOpen(false);
        // অন্য ইনপুটে চাপলে ফোকাস স্বয়ংক্রিয়ভাবে সেখানে যাবে — তখন ব্লার লাগবে না
        if (!tapsAnotherField) blurActiveTextInput();
      }
    }
    document.addEventListener("pointerdown", handlePressOutside);
    return () => {
      document.removeEventListener("pointerdown", handlePressOutside);
    };
  }, [isOpen]);

  const normValue = (value || "").trim().toLowerCase();

  // Normalize all categories into a sorted unique list
  const allCategories = useMemo(() => {
    const names = new Set<string>();
    cats.forEach((c) => {
      const name = typeof c === "string" ? c : c.name;
      if (name && name.trim()) {
        names.add(name.trim().toLowerCase());
      }
    });
    // v1.4.79: আর বর্ণক্রমে সাজাই না — Manager-এর ↑↓ ক্রমেই (storage-এর sortOrder) দেখাই
    return Array.from(names);
  }, [cats]);

  // v1.4.78: সার্চ বাদ — সবসময়ই পুরো তালিকা
  const filteredCategories = allCategories;

  const handleSelect = (catName: string) => {
    onChange(catName);
    setIsOpen(false);
    blurActiveTextInput();
  };

  /** v1.4.98: pointerdown — ফোকাস সরে না (লেআউট স্থির), শুধু টাইমস্ট্যাম্প মার্ক */
  const handlePressDown = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.button !== 0) return; // ডান-ক্লিক/মিডল-ক্লিকে কিছু নয়
    e.preventDefault(); // ফোকাস-স্থানান্তর/নেটিভ-কিবোর্ড-নামা/টেক্সট-সিলেক্ট বন্ধ — ট্যাপ স্থির থাকে
    pressedRef.current = e.currentTarget;
    markPtrAction();
  };

  /** v1.4.98: pointerup-এ টগল — ট্যাপের সাথে সাথেই ফায়ার; drag/scroll হলে pointerup ফায়ারই হয় না */
  const handlePressUpToggle = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.button !== 0 || disabled || pressedRef.current !== e.currentTarget) return;
    markPtrAction();
    setIsOpen((prev) => {
      if (prev) blurActiveTextInput(); // টগল-বন্ধ হলেও কিবোর্ড পরিষ্কার
      return !prev;
    });
  };

  const handleFallbackClickToggle = () => {
    if (disabled) return;
    if (clickIsEcho()) return; // pointer-অ্যাকশনের ইকো click — দ্বিবার টগল রোধ
    setIsOpen((prev) => !prev); // কিবোর্ড/স্ক্রিন-রিডার fallback (Enter/Space)
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Category Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onPointerDown={handlePressDown}
        onPointerUp={handlePressUpToggle}
        onClick={handleFallbackClickToggle}
        onKeyDown={(e) => {
          if (e.key === "Escape" && isOpen) {
            e.stopPropagation();
            setIsOpen(false);
            blurActiveTextInput();
          }
        }}
        className={`w-full rounded-xl border bg-white px-3 py-2 text-left text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-between ${
          isOpen
            ? "border-blue-600 ring-2 ring-blue-500/20"
            : "border-slate-300 hover:border-slate-400"
        } ${disabled ? "opacity-50 cursor-not-allowed bg-slate-100" : ""}`}
      >
        <div className="flex items-center gap-2 truncate">
          {value ? (
            <span className="text-slate-900 font-bold truncate">
              {titleCase(value)}
            </span>
          ) : (
            <span className="text-slate-400 font-medium">
              -- Select Category --
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          {value && (
            <span
              onPointerDown={(e) => {
                e.stopPropagation();
                handlePressDown(e);
              }}
              onPointerUp={(e) => {
                e.stopPropagation();
                if (e.button !== 0 || pressedRef.current !== e.currentTarget) return;
                markPtrAction();
                onChange("");
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (clickIsEcho()) return;
                onChange("");
              }}
              className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer text-xs transition"
              title="Clear Category"
            >
              ✕
            </span>
          )}
          <span
            className={`text-slate-400 text-xs transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Floating Scrollable Box */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80"
        >

          {/* v1.4.78: সার্চ বাদ — নিছক সিলেকশন হেডার */}
          <div className="p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between gap-2 shrink-0">
            <span className="pl-1 text-xs sm:text-sm font-bold text-slate-500">
              📋 ক্যাটাগরি সিলেক্ট করুন
            </span>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded-md">
              {allCategories.length}
            </span>
          </div>

          {/* Smooth Scrollable List */}
          <div className="overflow-y-auto max-h-60 p-1.5 space-y-0.5">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((catName) => {
                const isSelected = catName.toLowerCase() === normValue;
                return (
                  <button
                    key={catName}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onPointerDown={handlePressDown}
                    onPointerUp={(e) => {
                      if (e.button !== 0 || pressedRef.current !== e.currentTarget) return;
                      markPtrAction();
                      handleSelect(catName);
                    }}
                    onClick={() => {
                      if (clickIsEcho()) return;
                      handleSelect(catName);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs font-extrabold"
                        : "hover:bg-slate-100 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span
                        className={`h-2 w-2 rounded-full shrink-0 ${
                          isSelected ? "bg-blue-600 ring-2 ring-blue-300" : "bg-slate-300"
                        }`}
                      />
                      <span className="truncate">{titleCase(catName)}</span>
                    </div>
                    {isSelected && (
                      <span className="text-blue-600 font-black text-sm pl-2">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })
            ) : (
              <div className="py-8 text-center text-xs text-slate-400 font-semibold flex flex-col items-center gap-1">
                <span>🔍</span>
                <span>No category found</span>
              </div>
            )}
          </div>

          {/* Box Footer: Manage shortcut */}
          <div className="p-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 text-xs">
            <span className="text-[11px] text-slate-500 font-medium">
              Total: {filteredCategories.length} categories
            </span>
            {onManageClick && (
              <button
                type="button"
                onPointerDown={handlePressDown}
                onPointerUp={(e) => {
                  if (e.button !== 0 || pressedRef.current !== e.currentTarget) return;
                  markPtrAction();
                  setIsOpen(false);
                  onManageClick();
                }}
                onClick={() => {
                  if (clickIsEcho()) return;
                  setIsOpen(false);
                  onManageClick();
                }}
                className="text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>⚙️</span>
                <span>Manage Categories</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

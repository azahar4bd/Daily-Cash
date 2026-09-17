import { useState, useRef, useEffect } from "react";
import { titleCase } from "@/lib/categories";
import type { Cat } from "@/types";

interface PaymentCategoryDropdownProps {
  value: string;
  onChange: (category: string) => void;
  disburseCats: Cat[];
  expenseCats: Cat[];
  onManageClick: () => void;
  disabled?: boolean;
}

export default function PaymentCategoryDropdown({
  value,
  onChange,
  disburseCats,
  expenseCats,
  onManageClick,
  disabled = false,
}: PaymentCategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen) {
      setSearchTerm("");
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const normValue = (value || "").trim().toLowerCase();
  const isSelectedDisburse = disburseCats.some(
    (c) => c.name.toLowerCase() === normValue
  );
  const isSelectedExpense = expenseCats.some(
    (c) => c.name.toLowerCase() === normValue
  );

  const filteredDisburse = disburseCats.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredExpense = expenseCats.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (catName: string) => {
    onChange(catName);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Category Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full rounded-xl border bg-white px-3 py-2 text-left text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-between ${
          isOpen
            ? "border-blue-600 ring-2 ring-blue-500/20"
            : "border-slate-300 hover:border-slate-400"
        } ${disabled ? "opacity-50 cursor-not-allowed bg-slate-100" : ""}`}
      >
        <div className="flex items-center gap-2 truncate">
          {value ? (
            <>
              <span className="text-slate-900 font-bold truncate">
                {titleCase(value)}
              </span>
              {isSelectedDisburse && (
                <span className="rounded-md bg-teal-100 px-1.5 py-0.5 text-[10px] font-extrabold text-teal-800">
                  ঋণ বিতরণ
                </span>
              )}
              {isSelectedExpense && (
                <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-[10px] font-extrabold text-rose-800">
                  খরচ
                </span>
              )}
            </>
          ) : (
            <span className="text-slate-400 font-medium">
              -- ক্যাটাগরি সিলেক্ট করুন --
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          {value && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
              }}
              className="p-0.5 text-slate-400 hover:text-slate-600 rounded cursor-pointer text-xs"
              title="Clear selection"
            >
              ✕
            </span>
          )}
          <span
            className={`text-slate-400 text-xs transition-transform duration-150 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Floating Scrollable Box (বক্স এর মধ্য স্ক্রলিং) */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-300 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80">
          
          {/* Box Header: Quick Search */}
          <div className="p-2 border-b border-slate-100 bg-slate-50 flex items-center gap-2 shrink-0">
            <span className="text-slate-400 text-xs pl-1">🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="ক্যাটাগরি খুঁজুন (Search)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="text-slate-400 hover:text-slate-600 text-xs px-1 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Scrollable Items Container (বক্স এর ভেতরে স্ক্রলিং) */}
          <div className="overflow-y-auto max-h-60 p-2 space-y-3 divide-y divide-slate-100">
            {/* Section 1: Disburse / Loan Categories */}
            {filteredDisburse.length > 0 && (
              <div className="space-y-1">
                <div className="flex items-center justify-between px-2 pt-1 pb-1">
                  <span className="text-[11px] font-black uppercase tracking-wider text-teal-800 flex items-center gap-1">
                    <span>📋</span> ঋণ বিতরণ খাত (Disburse / Loan)
                  </span>
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded-full">
                    {filteredDisburse.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {filteredDisburse.map((c) => {
                    const isSelected =
                      c.name.toLowerCase() === normValue;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleSelect(c.name)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-teal-50 text-teal-900 border border-teal-300 shadow-2xs"
                            : "hover:bg-slate-100 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="h-2 w-2 rounded-full bg-teal-500 shrink-0"></span>
                          <span className="truncate">{titleCase(c.name)}</span>
                        </div>
                        {isSelected && (
                          <span className="text-teal-700 font-black text-sm">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Section 2: Expense Categories */}
            {filteredExpense.length > 0 && (
              <div className="space-y-1 pt-2">
                <div className="flex items-center justify-between px-2 pb-1">
                  <span className="text-[11px] font-black uppercase tracking-wider text-rose-800 flex items-center gap-1">
                    <span>💸</span> সাধারণ খরচ ও অন্যান্য (Expense)
                  </span>
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded-full">
                    {filteredExpense.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {filteredExpense.map((c) => {
                    const isSelected =
                      c.name.toLowerCase() === normValue;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleSelect(c.name)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-rose-50 text-rose-900 border border-rose-300 shadow-2xs"
                            : "hover:bg-slate-100 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0"></span>
                          <span className="truncate">{titleCase(c.name)}</span>
                        </div>
                        {isSelected && (
                          <span className="text-rose-700 font-black text-sm">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredDisburse.length === 0 && filteredExpense.length === 0 && (
              <div className="py-6 text-center text-xs text-slate-400 font-semibold">
                কোনো ক্যাটাগরি খুঁজে পাওয়া যায়নি।
              </div>
            )}
          </div>

          {/* Box Footer: Manage categories shortcut */}
          <div className="p-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 text-xs">
            <span className="text-[11px] text-slate-500">
              খাত নতুন যোগ বা এডিট করতে চান?
            </span>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onManageClick();
              }}
              className="text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
            >
              ⚙️ Manage Categories
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

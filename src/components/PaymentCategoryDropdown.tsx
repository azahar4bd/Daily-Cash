import { useState, useRef, useEffect, useMemo } from "react";
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
      }, 60);
    }
  }, [isOpen]);

  const normValue = (value || "").trim().toLowerCase();

  // Combine all categories into a single unified list without disburse / expense separation
  const allCategories = useMemo(() => {
    const map = new Map<string, Cat>();
    [...disburseCats, ...expenseCats].forEach((c) => {
      const key = c.name.trim().toLowerCase();
      if (!map.has(key)) {
        map.set(key, c);
      }
    });
    return Array.from(map.values()).sort((a, b) =>
      a.name.localeCompare(b.name, "bn", { sensitivity: "base" })
    );
  }, [disburseCats, expenseCats]);

  const filteredCategories = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return allCategories;
    return allCategories.filter((c) => c.name.toLowerCase().includes(q));
  }, [allCategories, searchTerm]);

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
              onClick={(e) => {
                e.stopPropagation();
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
        <div className="absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80">
          
          {/* Header with Search */}
          <div className="p-2.5 border-b border-slate-100 bg-slate-50 flex items-center gap-2 shrink-0">
            <span className="text-slate-400 text-sm pl-1">🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search Category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchTerm ? (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="text-slate-400 hover:text-slate-700 text-xs px-1.5 py-0.5 rounded-full hover:bg-slate-200 font-bold cursor-pointer transition"
              >
                ✕
              </button>
            ) : (
              <span className="text-[10px] font-bold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded-md">
                {allCategories.length}
              </span>
            )}
          </div>

          {/* Unified Single List */}
          <div className="overflow-y-auto max-h-60 p-1.5 space-y-0.5">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((c) => {
                const isSelected = c.name.toLowerCase() === normValue;
                return (
                  <button
                    key={c.id || c.name}
                    type="button"
                    onClick={() => handleSelect(c.name)}
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
                      <span className="truncate">{titleCase(c.name)}</span>
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
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onManageClick();
              }}
              className="text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>⚙️</span>
              <span>Manage Categories</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
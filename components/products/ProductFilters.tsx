"use client";

import React from "react";
import { CATEGORY_OPTIONS } from "@/lib/data/filters";
import { getAvailableDisplacements } from "@/lib/data/product-models";
import { BRANDS } from "@/lib/data/products";
import type { ProductFilters as ProductFiltersType } from "@/lib/types/products";
import { cn } from "@/lib/utils";
import { SearchInput } from "@/components/layout/SearchInput";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface ProductFiltersProps {
  filters: ProductFiltersType;
  onFilterChange: (filters: ProductFiltersType) => void;
}

/**
 * ProductFilters - Faithful Mockup Reproduction
 *
 * Matches Page 4 of the APSONIC Mockup PDF perfectly.
 */
export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  const displacements = getAvailableDisplacements();
  const displacementOptions = [
    { value: 0, label: "不限" },
    ...displacements.map((d) => ({ value: d, label: d.toString() })),
  ];

  const brandOptions = [
    { value: "", label: "不限" },
    ...BRANDS.map((b) => ({ value: b.id, label: b.name })),
  ];

  const [isSticky, setIsSticky] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const diff = latest - previous;

    // Stick precisely when the filter section hits the header
    setIsSticky(latest > 100);

    // Sync with main header hiding logic (hides on scroll down, shows on scroll up)
    if (diff > 0 && latest > 100) {
      setShowHeader(false);
    } else if (diff < 0) {
      setShowHeader(true);
    }
  });

  return (
    <div className="w-full bg-white pt-24 sm:pt-32 border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-10 pb-6">
        {/* Breadcrumbs - Static */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <span className="hover:text-gray-600 cursor-pointer">首页</span>
          <span>/</span>
          <span className="hover:text-gray-600 cursor-pointer text-gray-900">
            全系车型
          </span>
          <span className="text-gray-300">⌄</span>
        </nav>
      </div>

      {/* Sticky/Fixed Filter Section Wrapper */}
      <div className={cn(isSticky ? (isExpanded ? "h-[500px] md:h-[400px]" : "h-[100px]") : "h-auto")}>
        <div
          className={cn(
            "w-full transition-all duration-300 border-t border-transparent",
            isSticky
              ? "fixed z-50 left-0 right-0 bg-white shadow-md py-6 border-gray-100"
              : "relative bg-white pb-10",
            isSticky && (showHeader ? "top-20" : "top-0"),
          )}
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-10">
            <div
              className={cn(
                "flex items-center justify-between gap-4 transition-all duration-300",
                isSticky ? "flex-row" : "flex-col md:flex-row md:items-center mb-12",
              )}
            >
              {/* Title - Only visible when NOT sticky */}
              {!isSticky && (
                <h1 className="text-2xl sm:text-[40px] font-bold text-gray-900 transition-opacity duration-300">
                  全系车型
                </h1>
              )}

              {/* Search Input - Top Right by default, Flex-1 when sticky */}
              <div
                className={cn(
                  "transition-all duration-300",
                  isSticky ? "flex-1" : "w-full md:w-[320px]",
                )}
              >
                <SearchInput
                  placeholder="快速检索车型..."
                  value={filters.search || ""}
                  onChange={(e) =>
                    onFilterChange({
                      ...filters,
                      search: e.target.value || undefined,
                    })
                  }
                  size={isSticky ? "md" : "lg"}
                />
              </div>

              {/* Compact Filter Toggle (Only visible when sticky) */}
              {isSticky && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-medium transition-all shadow-sm whitespace-nowrap",
                    isExpanded
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-900",
                  )}
                >
                  <span>{isExpanded ? "收起筛选" : "筛选车型"}</span>
                  <span className={cn("transition-transform duration-300", isExpanded && "rotate-180")}>
                    ⌄
                  </span>
                </button>
              )}
            </div>

            {/* Filter Selection Grid - Collapsible when sticky */}
            <div
              className={cn(
                "space-y-6 text-[13px] transition-all duration-500 overflow-hidden",
                isSticky && !isExpanded ? "max-h-0 opacity-0 mt-0" : "max-h-[500px] opacity-100 mt-6",
              )}
            >
              {/* 类型选择 (Type) */}
              <div className="flex flex-col sm:grid sm:grid-cols-[100px_1fr] items-start gap-2 sm:gap-0">
                <span className="text-gray-500 py-1">类型选择</span>
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                  {CATEGORY_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        onFilterChange({
                          ...filters,
                          type: option.value || undefined,
                        })
                      }
                      className={cn(
                        "transition-colors",
                        filters.type === option.value ||
                          (!filters.type && option.value === "")
                          ? "text-gray-900 font-bold"
                          : "text-gray-500 hover:text-black",
                      )}
                    >
                      {option.label === "Unlimited"
                      ? "全部车型"
                      : option.label === "Standard"
                        ? "骑士车"
                        : option.label === "Underbone"
                          ? "弯梁车"
                          : option.label === "Street"
                            ? "街车"
                            : option.label === "Off-Road"
                              ? "越野"
                              : option.label === "Tricycle"
                                ? "三轮车"
                                : option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 排量选择 (Displacement) */}
              <div className="flex flex-col sm:grid sm:grid-cols-[100px_1fr] items-start gap-2 sm:gap-0">
                <span className="text-gray-500 py-1">排量选择</span>
                <div className="flex flex-wrap gap-x-10 gap-y-3 font-medium">
                  {displacementOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        onFilterChange({
                          ...filters,
                          displacement: option.value || undefined,
                        })
                      }
                      className={cn(
                        "transition-colors",
                        filters.displacement === option.value ||
                          (!filters.displacement && option.value === 0)
                          ? "text-gray-900 font-bold underline underline-offset-[6px] decoration-2 decoration-gray-900"
                          : "text-gray-500 hover:text-black",
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 品牌选择 (Brand) */}
              <div className="flex flex-col sm:grid sm:grid-cols-[100px_1fr] items-start gap-2 sm:gap-0">
                <span className="text-gray-500 py-1">品牌选择</span>
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                  {brandOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        onFilterChange({
                          ...filters,
                          brand: option.value || undefined,
                        })
                      }
                      className={cn(
                        "transition-colors uppercase",
                        filters.brand === option.value ||
                          (!filters.brand && option.value === "")
                        ? "text-gray-900 font-bold"
                        : "text-gray-500 hover:text-black",
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

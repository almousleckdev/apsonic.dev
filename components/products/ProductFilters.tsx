"use client";

import React from "react";
import { CATEGORY_OPTIONS } from "@/lib/data/filters";
import { getAvailableDisplacements } from "@/lib/data/product-models";
import { BRANDS } from "@/lib/data/products";
import type { ProductFilters as ProductFiltersType } from "@/lib/types/products";
import { cn } from "@/lib/utils";
import { SearchIcon } from "@/components/ui/Icons";
import { SearchInput } from "@/components/layout/SearchInput";

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

  return (
    <div className="w-full bg-white pt-24 sm:pt-32 pb-10 border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <span className="hover:text-gray-600 cursor-pointer">首页</span>
          <span>/</span>
          <span className="hover:text-gray-600 cursor-pointer text-gray-900">
            全系车型
          </span>
          <span className="text-gray-300">⌄</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h1 className="text-2xl sm:text-[40px] font-bold text-gray-900">全系车型</h1>

          <div className="w-full md:w-[320px]">
            <SearchInput
              placeholder=""
              value={filters.search || ""}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  search: e.target.value || undefined,
                })
              }
              size="lg"
            />
          </div>
        </div>

        {/* Filter Selection Grid */}
        <div className="space-y-6 text-[13px]">
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
  );
};

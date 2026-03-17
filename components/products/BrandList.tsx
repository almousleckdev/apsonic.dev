"use client";

import React from "react";
import Link from "next/link";
import type { Brand } from "@/lib/types/products";
import { buildProductUrl } from "@/lib/data/products";
import { cn } from "@/lib/utils";

interface BrandListProps {
  brands: Brand[];
  selectedBrandId?: string;
  onBrandHover?: (brand: Brand) => void;
  className?: string;
}

/**
 * BrandList - Matches the original design screenshot.
 * Header: "品牌选择" (Brand selection)
 * Selected: Green text with right arrow, no background block.
 */
export const BrandList: React.FC<BrandListProps> = ({
  brands,
  selectedBrandId,
  onBrandHover,
  className,
}) => {
  return (
    <div className={cn("flex flex-col items-end", className)}>
      <h3 className="text-[12px] font-medium text-gray-400 mb-1 mr-6">
        品牌选择
      </h3>

      <ul className="flex flex-col gap-1">
        {brands.map((brand) => {
          const isSelected = selectedBrandId === brand.id;
          return (
            <li key={brand.id}>
              <Link
                href={buildProductUrl(undefined, brand)}
                className={cn(
                  "flex items-center justify-end gap-3 py-1 px-4 text-[13px] whitespace-nowrap cursor-pointer transition-colors duration-200",
                  isSelected
                    ? "text-[#1FA84F] font-bold"
                    : "text-gray-400 font-medium hover:text-gray-600",
                )}
                onMouseEnter={() => onBrandHover?.(brand)}
              >
                {brand.name}
                {isSelected && (
                  <span className="text-[#1FA84F] text-[14px] font-bold">
                    →
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

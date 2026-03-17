"use client";

import React, { useState, useCallback, useMemo } from "react";
import type { Brand } from "@/lib/types/products";
import { getDropdownConfig, getCategoriesByBrand } from "@/lib/data/products";
import { LAYOUT } from "@/lib/constants";
import { BrandList } from "./BrandList";
import { ProductCard } from "./ProductCard";

interface ProductsDropdownProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

/**
 * ProductsDropdown - Restored to match the original design layout.
 * Clean sidebar on left, category cards with separators on right.
 */
export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  onMouseEnter,
  onMouseLeave,
  className,
}) => {
  const config = getDropdownConfig();
  const [selectedBrandId, setSelectedBrandId] = useState<string>(
    config.brands[0]?.id || "",
  );

  const currentCategories = useMemo(
    () => getCategoriesByBrand(selectedBrandId),
    [selectedBrandId],
  );
  const selectedBrand = useMemo(
    () => config.brands.find((b) => b.id === selectedBrandId),
    [config.brands, selectedBrandId],
  );
  const handleBrandHover = useCallback(
    (brand: Brand) => setSelectedBrandId(brand.id),
    [],
  );

  return (
    <div
      className={`fixed left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ${className || ""}`}
      style={{
        borderTop: "1px solid rgba(0,0,0,0.05)",
        top: `${LAYOUT.dropdownTopOffset}px`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="flex">
          {/* Sidebar Section */}
          <div className="w-[240px] pt-4 pb-5 pr-10 border-r border-gray-100/60">
            <BrandList
              brands={config.brands}
              selectedBrandId={selectedBrandId}
              onBrandHover={handleBrandHover}
            />
          </div>

          {/* Categories Section */}
          <div className="flex-1 pt-4 pb-5 flex">
            {currentCategories.map((category, index) => (
              <ProductCard
                key={category.id}
                category={category}
                brand={selectedBrand}
                isFirst={index === 0}
                className="flex-1"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

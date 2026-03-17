"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProductCategory, Brand } from "@/lib/types/products";
import { buildProductUrl } from "@/lib/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  category: ProductCategory;
  brand?: Brand;
  className?: string;
  isFirst?: boolean;
}

/**
 * ProductCard - Matches the original design screenshot.
 * Vertical separator on the left.
 * Decorative bar next to the title.
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  category,
  brand,
  className,
  isFirst = false,
}) => {
  return (
    <Link
      href={buildProductUrl(category, brand)}
      className={cn(
        "group relative flex flex-col items-start gap-2 cursor-pointer pl-6",
        !isFirst && "border-l border-gray-100/80",
        className,
      )}
    >
      {/* Title Section with decorative bar */}
      <div className="flex items-center gap-2">
        <span className="text-[12px] font-medium text-gray-500 tracking-wide group-hover:text-[#1FA84F] transition-colors duration-200">
          {category.name}
        </span>
        <div className="w-12 h-[2px] bg-gray-100 transition-colors duration-200 group-hover:bg-[#1FA84F]/20" />
      </div>

      {/* Shared fixed-size image box */}
      <div className="relative w-full h-[90px]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="220px"
        />
      </div>
    </Link>
  );
};

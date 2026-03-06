"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProductCategory, Brand } from "@/lib/types/products";
import { buildProductUrl } from "@/lib/data/products";
import { colors, effects } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  category: ProductCategory;
  brand?: Brand;
  className?: string;
}

// Product category card with image
export const ProductCard: React.FC<ProductCardProps> = ({
  category,
  brand,
  className,
}) => {
  const isTricycle = category.slug.toLowerCase().includes("tricycle");

  return (
    <Link
      href={buildProductUrl(category, brand)}
      className={cn(
        "group flex flex-col items-center cursor-pointer",
        effects.transition.default,
        "hover:scale-102",
        className,
      )}
    >
      <h4
        className={cn(
          "font-medium text-center mb-1 text-sm",
          effects.transition.colors,
          "group-hover:text-[#1FA84F]",
        )}
        style={{
          color: colors.text.gray.medium,
        }}
      >
        {category.name}
      </h4>

      <div className="relative w-[200px] h-[95px] rounded-md overflow-hidden flex items-end justify-center">
        <div
          className="relative w-full h-full transform transition-all duration-500 group-hover:scale-110"
          style={{
            transform: isTricycle ? "scale(1.35)" : "scale(1)",
            transformOrigin: "bottom center",
          }}
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-contain object-bottom"
            sizes="200px"
          />
        </div>
      </div>
    </Link>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ProductModel } from "@/lib/types/products";
import { PRODUCTS_GRID_CONFIG } from "@/lib/constants/products";
import { buildProductDetailUrl } from "@/lib/data/products";
import { cn } from "@/lib/utils";

// TS in this repo (moduleResolution: bundler) can resolve a minimal MotionProps type
// that doesn't include `initial/animate/exit/whileInView/variants` during production builds.
// This keeps runtime behavior identical while unblocking typechecking on Vercel.
import {
  ANIMATION_VARIANTS,
  ENTERPRISE_EASE,
} from "@/lib/constants/animations";

interface ProductModelCardProps {
  product: ProductModel;
  className?: string;
}

export const ProductModelCard: React.FC<ProductModelCardProps> = ({
  product,
  className,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Enterprise Ease
          },
        },
      }}
      className={className}
    >
      <Link
        href={buildProductDetailUrl(product.id, product.category)}
        className="group relative block w-[96%] mx-auto h-[340px]"
      >
        {/* 1. Card Background Panel (Text Content) */}
        <div className="absolute top-0 left-0 right-0 h-[260px] bg-[#EEF0F4] rounded-[24px] p-6 sm:p-8 z-0 transition-all duration-500 group-hover:shadow-md">
          <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[#1FA84F] transition-colors font-serif leading-tight">
              {product.model}
            </h3>
          </div>
        </div>

        {/* 2. Bike Image - Overlays the card, aligned to bottom of container */}
        <div className="absolute bottom-6 left-0 right-0 h-[200px] z-10 flex justify-center items-end px-2 sm:px-4 pointer-events-none">
          <div
            className={cn(
              "relative w-full h-full",
              product.category === "tricycle"
                ? "max-w-[340px] scale-110 origin-bottom"
                : "max-w-[260px]",
            )}
          >
            <Image
              src={product.image}
              alt={product.model}
              fill
              className="object-contain object-bottom transition-transform duration-700 ease-out group-hover:translate-x-6"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

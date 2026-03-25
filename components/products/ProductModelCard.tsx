"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ProductModel } from "@/lib/types/products";
import { buildProductDetailUrl } from "@/lib/data/products";

// Standardize motion component type to avoid IntrinsicAttributes errors in production builds
type MotionDivProps = Record<string, unknown>;
const MotionDiv = motion.div as unknown as React.ComponentType<MotionDivProps>;

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
    <div style={{ paddingBottom: "32px" }}>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        <Link
          href={buildProductDetailUrl(product.id, product.category)}
          className="group relative block w-full"
          style={{ height: "220px" }}
        >
          {/* ── Card shelf ─────────────────────────────────────────────────
            Forcing background color and height with inline styles. */}
          <div
            className="w-full rounded-2xl transition-all duration-500 group-hover:shadow-lg"
            style={{
              height: "180px",
              backgroundColor: "#F2F3F5",
              width: "100%",
              position: "relative",
            }}
          >
            {/* Model name (top-left) + brand badge (top-right) */}
            <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-5 pt-4 z-10 pointer-events-none">
              <span className="text-[15px] font-bold text-gray-900 tracking-tight leading-tight group-hover:text-[#1FA84F] transition-colors duration-300">
                {product.model}
              </span>
              <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mt-0.5">
                {product.brand}
              </span>
            </div>
          </div>

          {/* ── Bike image ─────────────────────────────────────────────────
            Independent container with explicit height and width. */}
          <div
            className="absolute left-0 right-0 bottom-0 flex items-end justify-center z-20 pointer-events-none"
            style={{ height: "185px", width: "100%" }}
          >
            <div
              className={`relative h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                reduceMotion ? "" : "group-hover:translate-x-3 group-hover:scale-105"
              }`}
              style={{ width: "85%" }}
            >
              <Image
                src={product.image}
                alt={product.model}
                fill
                className="object-contain object-bottom drop-shadow-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
            </div>
          </div>
        </Link>
      </MotionDiv>
    </div>
  );
};

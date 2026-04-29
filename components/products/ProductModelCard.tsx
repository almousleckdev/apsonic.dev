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
    <div className="pb-8">
      {" "}
      {/* Ensure space for hanging tire */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        <Link
          href={buildProductDetailUrl(product.id, product.category)}
          className="group relative flex flex-col w-full outline-none"
        >
          {/* Background Card - Smaller, rounded, light gray */}
          <div className="relative aspect-[1.8/1] bg-[#F2F3F5] rounded-[1.2rem] p-5 overflow-visible transition-colors duration-300">
            {/* Top Header Label */}
            <div className="flex justify-between items-start w-full relative z-20 pointer-events-none">
              <span className="text-[16px] sm:text-[18px] font-bold text-gray-900 tracking-tight leading-tight group-hover:text-[#1FA84F] transition-colors duration-300">
                {product.model}
              </span>
            </div>

            {/* Motorcycle Image Container */}
            <div
              className={`absolute flex justify-center overflow-visible z-10 pointer-events-none bottom-[-15%] ${
                product.category === "tricycle"
                  ? "top-[10px] left-[-40%] right-[-40%]"
                  : "top-[48px] left-[-15%] right-[-15%]"
              }`}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  reduceMotion
                    ? ""
                    : product.model === "AP110-A PLUS"
                      ? "group-hover:scale-95 group-hover:-translate-y-2"
                      : "group-hover:scale-105 group-hover:-translate-y-2"
                } ${product.model === "AP110-A PLUS" ? "scale-[0.85] origin-bottom" : ""}`}
              >
                {/* CSS drop-shadow provides realistic tire shadows that move with the image */}
                <Image
                  src={product.image}
                  alt={product.model}
                  fill
                  className="object-contain object-bottom filter drop-shadow-[0_12px_12px_rgba(0,0,0,0.2)] brightness-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </Link>
      </MotionDiv>
    </div>
  );
};

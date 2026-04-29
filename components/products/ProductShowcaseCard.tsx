"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProductModel } from "@/lib/types/products";
import { buildProductDetailUrl } from "@/lib/data/products";
import { cn } from "@/lib/utils";

interface ProductShowcaseCardProps {
  product: ProductModel;
  className?: string;
}

export const ProductShowcaseCard: React.FC<ProductShowcaseCardProps> = ({
  product,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("group relative flex flex-col", className)}
    >
      <Link
        href={buildProductDetailUrl(product.id, product.category)}
        className="block relative w-full h-[280px]"
      >
        {/* Rounded background shelf */}
        <div 
          className="absolute top-4 left-0 right-0 h-[220px] rounded-[40px] bg-[#F2F3F5] transition-all duration-500 group-hover:bg-[#E8EAEF] z-0"
        />

        {/* Motorcycle Image with hanging effect */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-[90%] h-[240px] mt-8 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
            {/* Contact Shadows for tires */}
            <div className="absolute bottom-[5%] inset-x-0 flex justify-between px-[15%] opacity-40 group-hover:opacity-60 transition-opacity duration-500">
              <div className="w-[30%] h-4 bg-black/40 blur-xl rounded-full" />
              <div className="w-[30%] h-4 bg-black/40 blur-xl rounded-full" />
            </div>

            <Image
              src={product.image}
              alt={product.model}
              fill
              className="object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Floating Model Badge */}
        <div className="absolute top-10 left-8 z-20">
          <span className="text-[12px] font-bold text-[#1FA84F] tracking-[0.2em] uppercase bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mt-2 tracking-tight group-hover:text-[#1FA84F] transition-colors duration-300">
            {product.model}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

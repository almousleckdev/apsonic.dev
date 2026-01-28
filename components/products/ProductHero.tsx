"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface ProductHeroProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

/**
 * ProductHero - Enhanced with professional animations
 * All animations sequenced for smooth, cinematic entry
 */
export const ProductHero: React.FC<ProductHeroProps> = ({
  title = "AP150-30",
  subtitle = "Aloba",
  breadcrumbs,
}) => {
  const isDetailPage = !!breadcrumbs;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Breadcrumbs - Smooth slide down */}
      {isDetailPage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute top-0 left-0 right-0 z-30 bg-white border-b border-gray-100"
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-gray-600 transition-colors">
                首页
              </Link>
              <span>/</span>
              <Link
                href="/products"
                className="hover:text-gray-600 transition-colors"
              >
                全系车型
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{title}</span>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Main Hero Background - Cinematic zoom */}
      <div className="absolute inset-0 z-0" style={{ top: "60px", bottom: 0 }}>
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/services/products/accessories/AP150-30.png"
            alt="Product Hero Background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* Content Container - Title and Badge */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="relative w-full max-w-4xl">
            {/* Title Image - Slide from left with scale */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-[50vw] max-w-[800px] min-w-[300px]"
            >
              <Image
                src="/services/products/accessories/AP150-30-1.png"
                alt="AP150-30 Title"
                width={800}
                height={264}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-5" />
    </div>
  );
};

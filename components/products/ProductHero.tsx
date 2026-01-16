'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
 * ProductHero - 所有产品使用相同的英雄区背景
 * 默认图片: AP150-30.png (背景) 和 AP150-30-1.png (PLUS徽章)
 */
export const ProductHero: React.FC<ProductHeroProps> = ({
  title = "AP150-30",
  subtitle = "Aloba",
  breadcrumbs
}) => {
  const isDetailPage = !!breadcrumbs;

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Breadcrumbs - Top Left, White Background */}
      {isDetailPage && (
        <div className="absolute top-0 left-0 right-0 z-30 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-gray-600 transition-colors">
                首页
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-gray-600 transition-colors">
                全系车型
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{title}</span>
            </nav>
          </div>
        </div>
      )}

      {/* Main Hero Background - 使用默认AP150-30.png图片 */}
      <div className="absolute inset-0 z-0" style={{ top: '60px', bottom: 0 }}>
        <Image
          src="/images/products/accessories/AP150-30.png"
          alt="Product Hero Background"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container - Only PLUS Badge, No Text */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">

            {/* Left Side - Only PLUS Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* PLUS Badge - 使用默认AP150-30-1.png图片 */}
              <div className="relative inline-block">
                <Image
                  src="/images/products/accessories/AP150-30-1.png"
                  alt="PLUS Badge"
                  width={200}
                  height={66}
                  className="drop-shadow-lg"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-5" />
    </div>
  );
};
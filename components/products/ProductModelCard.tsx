'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { ProductModel } from '@/lib/types/products';
import { PRODUCTS_GRID_CONFIG } from '@/lib/constants/products';
import { buildProductDetailUrl } from '@/lib/data/products';
import { cn } from '@/lib/utils';

// TS in this repo (moduleResolution: bundler) can resolve a minimal MotionProps type
// that doesn't include `initial/animate/exit/whileInView/variants` during production builds.
// This keeps runtime behavior identical while unblocking typechecking on Vercel.
import { ANIMATION_VARIANTS, ENTERPRISE_EASE } from '@/lib/constants/animations';

interface ProductModelCardProps {
  product: ProductModel;
  className?: string;
}

export const ProductModelCard: React.FC<ProductModelCardProps> = ({ product, className }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div variants={ANIMATION_VARIANTS.fadeUp}>
      <Link
        href={buildProductDetailUrl(product.id, product.category)}
        className={cn('relative block group', className)}
      >
        <motion.div
          className="relative will-change-transform"
          whileHover={reduceMotion ? undefined : { y: -12, scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.4, ease: ENTERPRISE_EASE as any }}
        >
          {/* Card Background */}
          <div
            className="relative transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-brand-green/10"
            style={{
              backgroundColor: '#F3F4F6',
              borderRadius: '24px',
              padding: '24px 24px 60px 24px',
              minHeight: '160px',
              zIndex: 1,
            }}
          >
            <div className="flex items-start justify-between pointer-events-none mb-2">
              <span
                className="font-bold text-sm sm:text-base uppercase tracking-tight"
                style={{
                  fontSize: '14px',
                  color: '#4B5563',
                }}
              >
                {product.model}
              </span>
            </div>
          </div>

          {/* Product Image */}
          <div
            className="absolute left-0 right-0 z-10 -bottom-8"
            style={{
              width: '100%',
              aspectRatio: '3/2',
              maxWidth: '280px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <motion.div
              className="relative w-full h-full"
              whileHover={reduceMotion ? undefined : { scale: 1.15, rotate: -2 }}
              transition={{ duration: 0.5, ease: ENTERPRISE_EASE as any }}
            >
              <Image
                src={product.image}
                alt={product.model}
                fill
                className="object-contain object-center drop-shadow-2xl filter brightness-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

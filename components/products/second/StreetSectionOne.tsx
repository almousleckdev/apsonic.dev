'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { ProductModel } from '@/lib/types/products';

interface StreetSectionOneProps {
  product: ProductModel;
}

type ColorVariant = 'white' | 'red' | 'blue';

const COLOR_VARIANTS: { id: ColorVariant; label: string; image: string; swatch: string }[] = [
  { id: 'white', label: '白', image: '/products/AP110-A-PLUS(白).png', swatch: '#ffffff' },
  { id: 'red', label: '红', image: '/products/AP110-A-PLUS(红).png', swatch: '#c41e3a' },
  { id: 'blue', label: '蓝', image: '/products/AP110-A-PLUS(蓝).png', swatch: '#2563eb' },
];

const SALES_REGIONS =
  '在售地区: 多哥 | 加纳 布基纳法索 | 科特迪瓦 马里 贝宁 | 几内亚 肯尼亚 坦桑尼亚 乌干达';

/**
 * Section One for Street Product Details Page (Second Design)
 * Bike image with color swatches and background model text
 */
export const StreetSectionOne: React.FC<StreetSectionOneProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>('white');
  const activeVariant = COLOR_VARIANTS.find((v) => v.id === selectedColor) ?? COLOR_VARIANTS[0];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl" style={{ minHeight: '500px' }}>
            {/* Background text with dots - positioned at top, together */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
              <span className="text-[clamp(4rem,12vw,8rem)] font-bold text-gray-300/35 tracking-tight leading-none select-none pointer-events-none whitespace-nowrap">
                {product.model}
              </span>
              <div className="flex flex-col gap-1.5 pt-1 shrink-0">
                {COLOR_VARIANTS.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedColor(variant.id)}
                    className={`
                      w-4 h-4 rounded-full border-2 transition-all shadow-md
                      ${selectedColor === variant.id ? 'border-gray-900 ring-1 ring-gray-400 scale-110' : 'border-gray-500 hover:border-gray-700'}
                    `}
                    style={{ backgroundColor: variant.swatch }}
                    title={variant.label}
                    aria-label={`${variant.label} color`}
                    aria-pressed={selectedColor === variant.id}
                  />
                ))}
              </div>
            </div>

            {/* Bike image - overlaps text from below, positioned to minimize gap */}
            <div className="absolute inset-0 z-10 flex items-start justify-center pt-12 sm:pt-16">
              <Image
                src={activeVariant.image}
                alt={`${product.model} - ${activeVariant.label}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Sales regions footer */}
        <p className="mt-8 text-center text-xs sm:text-sm text-gray-600">{SALES_REGIONS}</p>
      </div>
    </section>
  );
};

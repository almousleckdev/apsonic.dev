'use client';

import React from 'react';
import Image from 'next/image';
import type { ProductModel } from '@/lib/types/products';

interface StreetProductHeroProps {
  product: ProductModel;
}

/**
 * Hero Section for Street Product Details Page (Second Design)
 * Displays the hero.jpg image at 100vw width, showing full image without cropping
 */
export const StreetProductHero: React.FC<StreetProductHeroProps> = ({ product }) => {
  return (
    <div className="relative w-full overflow-hidden" style={{ width: '100vw', maxWidth: '100vw' }}>
      <Image
        src="/products/second/images/hero.jpg"
        alt={`${product.model} - Street Motorcycle Hero`}
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
        sizes="100vw"
        quality={100}
        style={{ width: '100vw', height: 'auto', display: 'block', maxWidth: '100vw' }}
      />
    </div>
  );
};

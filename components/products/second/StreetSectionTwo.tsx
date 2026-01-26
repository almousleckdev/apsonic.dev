'use client';

import React from 'react';
import Image from 'next/image';
import type { ProductModel } from '@/lib/types/products';

interface StreetSectionTwoProps {
  product: ProductModel;
}

/**
 * Section Two for Street Product Details Page (Second Design)
 * Displays three product feature images
 */
export const StreetSectionTwo: React.FC<StreetSectionTwoProps> = ({ product }) => {
  const images = [
    { src: '/products/second/images/img1.png', alt: 'Motorcycle Tires - Vacuum Anti-skid Tire' },
    { src: '/products/second/images/img2.png', alt: 'Luxury Muffler - Exhaust System' },
    { src: '/products/second/images/img3.png', alt: '110CC Engine - Fuel Efficient' },
  ];

  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="flex flex-col">
          {images.map((image, index) => (
            <div key={index} className="relative w-full" style={{ width: '100vw', height: 'auto' }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                className="w-full h-auto"
                sizes="100vw"
                priority={index === 0}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

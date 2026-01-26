'use client';

import React from 'react';
import Link from 'next/link';
import type { ProductModel } from '@/lib/types/products';

interface ProductBreadcrumbProps {
  product: ProductModel;
}

// Category to Chinese name mapping
const CATEGORY_NAMES: Record<string, string> = {
  underbone: '弯梁车',
  street: '街车',
  offroad: '越野',
  tricycle: '三轮车',
  sport: '运动车',
  'pro-street': '街车',
  'emoto-tricycle': '三轮车',
};

export const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({ product }) => {
  const categoryName = CATEGORY_NAMES[product.category] || product.category;

  return (
    <div className="w-full bg-white py-3 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <nav className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            首页
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{categoryName}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{product.model}</span>
        </nav>
      </div>
    </div>
  );
};

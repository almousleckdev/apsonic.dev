'use client';

import React from 'react';
import type { ProductModel } from '@/lib/types/products';
import { ProductSpecification } from '@/components/products';
import { getProductDetailData } from '@/lib/mock-data/product-details';

interface StreetSectionThreeProps {
  product: ProductModel;
}

/**
 * Section Three for Street Product Details Page (Second Design)
 * Technical Specifications (技术参数)
 */
export const StreetSectionThree: React.FC<StreetSectionThreeProps> = ({ product }) => {
  // Get product detail data (same data structure as old product details page)
  const details = getProductDetailData(product.category);

  if (!details) {
    return null;
  }

  return (
    <ProductSpecification
      keyMetrics={details.keyMetrics}
      detailedSpecs={details.detailedSpecs}
    />
  );
};

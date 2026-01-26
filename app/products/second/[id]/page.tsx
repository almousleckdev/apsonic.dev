'use client';

import React from 'react';
import { use } from 'react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/data/product-models';
import { StreetProductHero } from '@/components/products/second/StreetProductHero';
import { StreetSectionOne } from '@/components/products/second/StreetSectionOne';
import { StreetSectionTwo } from '@/components/products/second/StreetSectionTwo';
import { StreetSectionThree } from '@/components/products/second/StreetSectionThree';
import { ProductBreadcrumb } from '@/components/products/second/ProductBreadcrumb';

interface StreetProductPageProps {
  params: Promise<{ id: string }>;
}

/**
 * Second Product Details Page for Street Category (街车)
 * Separate design from the main product details page
 */
export default function StreetProductDetailPage({ params }: StreetProductPageProps) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  // Only show this page for street category products
  if (product.category !== 'street') {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <ProductBreadcrumb product={product} />
      
      {/* Hero Section */}
      <StreetProductHero product={product} />

      {/* Section One */}
      <StreetSectionOne product={product} />

      {/* Section Two */}
      <StreetSectionTwo product={product} />

      {/* Section Three */}
      <StreetSectionThree product={product} />
    </main>
  );
}

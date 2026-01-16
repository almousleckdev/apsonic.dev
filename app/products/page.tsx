'use client';

import React, { useState } from 'react';
import { ProductFilters, ProductModelCard } from '@/components/products';
import type { ProductFilters as ProductFiltersType } from '@/lib/types/products';
import { useProductFilters } from '@/hooks/useProductFilters';
import { groupProductsByCategory } from '@/lib/data/product-models';

const CATEGORY_LABELS: Record<string, string> = {
  underbone: '弯梁车',
  street: '街车',
  offroad: '越野',
  tricycle: '三轮车',
};

/**
 * ProductsPage - Faithful Mockup Reproduction
 * 
 * Grouped categories, full-width grid, and floating product cards.
 */
export default function ProductsPage() {
  const [filters, setFilters] = useState<ProductFiltersType>({});
  const filteredProducts = useProductFilters(filters);
  const groupedProducts = groupProductsByCategory(filteredProducts);

  // Category order following the mockup PDF
  const categoryOrder = ['underbone', 'street', 'offroad', 'tricycle'];

  return (
    <main className="min-h-screen bg-white pb-32">
      {/* Search and Filter Section */}
      <ProductFilters filters={filters} onFilterChange={setFilters} />

      <div className="container mx-auto px-4 py-20">
        <div className="space-y-32">
          {categoryOrder.map((category) => {
            const products = groupedProducts[category];
            if (!products || products.length === 0) return null;

            return (
              <section key={category}>
                <div className="mb-16">
                  <h2 className="text-[42px] font-medium text-gray-900 tracking-tight">
                    {CATEGORY_LABELS[category]}
                  </h2>
                </div>

                {/* Grid with Floating Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                  {products.map((product) => (
                    <ProductModelCard
                      key={product.id}
                      product={product}
                      className="transition-transform duration-500"
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-300 italic text-2xl">暂无符合条件的车型</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

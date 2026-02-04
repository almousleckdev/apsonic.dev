"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductFilters, ProductModelCard } from "@/components/products";
import type { ProductFilters as ProductFiltersType } from "@/lib/types/products";
import { useProductFilters } from "@/hooks/useProductFilters";
import { groupProductsByCategory } from "@/lib/data/product-models";

const CATEGORY_LABELS: Record<string, string> = {
  underbone: "弯梁车",
  street: "街车",
  offroad: "越野",
  tricycle: "三轮车",
};

// Map category slugs to filter types (only for APSONIC main brand)
const CATEGORY_SLUG_TO_TYPE: Record<string, string> = {
  underbone: "underbone",
  street: "street",
  offroad: "offroad",
  tricycle: "tricycle",
};

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants/animations";

/**
 * ProductsPage - Faithful Mockup Reproduction
 */

// ... (keep constants)

// ProductsContent component
function ProductsContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<ProductFiltersType>({});

  useEffect(() => {
    const category = searchParams.get("category");
    const brand = searchParams.get("brand");
    const initialFilters: ProductFiltersType = {};
    if (category && CATEGORY_SLUG_TO_TYPE[category]) {
      initialFilters.type = CATEGORY_SLUG_TO_TYPE[category];
    }
    if (brand) {
      initialFilters.brand = brand;
    }
    if (category || brand) {
      setFilters(initialFilters);
    }
  }, [searchParams]);

  const filteredProducts = useProductFilters(filters);
  const groupedProducts = groupProductsByCategory(filteredProducts);
  const categoryOrder = ["underbone", "street", "offroad", "tricycle"];

  return (
    <main className="min-h-screen bg-white pb-32">
      <ProductFilters filters={filters} onFilterChange={setFilters} />

      <div className="max-w-[1360px] mx-auto px-10 py-20">
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

                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.0, // Together
                        delayChildren: 0.0,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12"
                >
                  {products.map((product) => (
                    <ProductModelCard
                      key={product.id}
                      product={product}
                      className="w-full"
                    />
                  ))}
                </motion.div>
              </section>
            );
          })}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-300 italic text-2xl">
                暂无符合条件的车型
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}

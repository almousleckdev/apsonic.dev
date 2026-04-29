"use client";

import React, { useState, useMemo } from "react";
import { PRODUCT_MODELS } from "@/lib/data/product-models";
import { ProductShowcaseCard } from "@/components/products";
import { LuSearch as Search, LuSlidersHorizontal as SlidersHorizontal } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductShowcasePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return PRODUCT_MODELS;
    const query = searchQuery.toLowerCase();
    return PRODUCT_MODELS.filter(
      (p) =>
        p.model.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-[#1FA84F] font-bold tracking-[0.3em] uppercase text-sm">
            Discover Performance
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            Our Full Product Range
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            From the rugged terrain-conquering off-road series to efficient city commuters, 
            explore the engineering excellence of APSONIC.
          </p>
        </motion.div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-gray-100 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by model, category or series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#1FA84F]/20 transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors w-full md:w-auto justify-center">
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductShowcaseCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center"
          >
            <p className="text-gray-400 text-xl italic">No products found matching your search.</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-[#1FA84F] font-bold hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* Footer Spacer */}
      <div className="h-32" />
    </main>
  );
}

import { useState, useEffect } from 'react';
import type { ProductModel } from "@/lib/types/products";
import { PRODUCT_MODELS, filterProducts } from "@/lib/data/product-models";

export interface ProductFilters {
  type?: string;
  displacement?: number;
  brand?: string;
  search?: string;
}

/**
 * Mock API Hook for Products fetch.
 * Preparing for backend integration (e.g. /api/products)
 */
export function useProducts(filters?: ProductFilters) {
  const [data, setData] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate async network request
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const results = filters ? filterProducts(filters) : PRODUCT_MODELS;
      setData(results);
      setLoading(false);
    };

    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)]);

  return { data, loading };
}

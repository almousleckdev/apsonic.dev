// Mock products/brands data - replace with GET /api/brands and GET /api/categories
import type { Brand, ProductCategory, DropdownConfig } from '@/lib/types/products';

export const BRANDS: Brand[] = [
  {
    id: 'apsonic',
    name: 'APSONIC',
    slug: 'apsonic',
    description: 'Quality motorcycles for everyday use',
  },
  {
    id: 'apsonic-pro',
    name: 'APSONIC PRO',
    slug: 'apsonic-pro',
    description: 'Premium performance motorcycles',
  },
  {
    id: 'apsonic-emoto',
    name: 'APSONIC E-MOTO',
    slug: 'apsonic-emoto',
    description: 'Electric mobility solutions',
  },
];

// Categories organized by brand
export const BRAND_CATEGORIES: Record<string, ProductCategory[]> = {
  'apsonic': [
    { id: 'underbone', name: '弯梁车', slug: 'underbone', image: '/products/AP110-A-PLUS(白).png', brandId: 'apsonic' },
    { id: 'street', name: '街车', slug: 'street', image: '/products/AP125-30（1）.png', brandId: 'apsonic' },
    { id: 'offroad', name: '越野', slug: 'offroad', image: '/products/AP250GY (1).png', brandId: 'apsonic' },
    { id: 'tricycle', name: '三轮车', slug: 'tricycle', image: '/products/AP150ZH-20 SPORT (1).png', brandId: 'apsonic' },
  ],
  'apsonic-pro': [
    { id: 'pro-sport', name: '运动型', slug: 'sport', image: '/products/AP125-30（1）.png', brandId: 'apsonic-pro' },
    { id: 'pro-touring', name: '旅行型', slug: 'touring', image: '/products/AP125-12(1).png', brandId: 'apsonic-pro' },
  ],
  'apsonic-emoto': [
    { id: 'emoto-scooter', name: '电动踏板车', slug: 'e-scooter', image: '/products/AP110-A-PLUS(白).png', brandId: 'apsonic-emoto' },
    { id: 'emoto-bike', name: '电动自行车', slug: 'e-bike', image: '/products/AP125-K(1).png', brandId: 'apsonic-emoto' },
  ],
};

// Default categories
export const PRODUCT_CATEGORIES: ProductCategory[] = BRAND_CATEGORIES['apsonic'];

// Get dropdown configuration
export function getDropdownConfig(): DropdownConfig {
  return { brands: BRANDS, categories: PRODUCT_CATEGORIES };
}

// Get categories for a specific brand
export function getCategoriesByBrand(brandId: string): ProductCategory[] {
  return BRAND_CATEGORIES[brandId] || PRODUCT_CATEGORIES;
}

// Build product URL from category/brand
export function buildProductUrl(category?: ProductCategory, brand?: Brand): string {
  const params = new URLSearchParams();
  if (category) params.set('category', category.slug);
  if (brand) params.set('brand', brand.slug);
  const query = params.toString();
  return query ? `/products?${query}` : '/products';
}

// Build product detail page URL - routes street category to second design
export function buildProductDetailUrl(productId: string, category?: string): string {
  // Route street category products to second design page
  if (category === 'street') {
    return `/products/second/${productId}`;
  }
  return `/products/${productId}`;
}

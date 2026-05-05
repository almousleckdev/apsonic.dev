// Products components
export { ProductCard } from "./ProductCard";
export { ProductModelCard } from "./ProductModelCard";
export { ProductShowcaseCard } from "./ProductShowcaseCard";
export { BrandList } from "./BrandList";
export { FilterButton } from "./FilterButton";
export { ProductFilters } from "./ProductFilters";

export { ProductsDropdown } from "./ProductsDropdown";
export { ProductHero } from "./ProductHero";
export { ProductFeatureHighlight } from "./ProductFeatureHighlight";
export { ProductFeatureShowcase } from "./ProductFeatureShowcase";
export { ProductEngineSpecs } from "./ProductEngineSpecs";
export { ProductFeatureGrid } from "./ProductFeatureGrid";

export {
  ProductColorShowcase,
  type ColorShowcaseVariant,
} from "./ProductColorShowcase";
export { ProductSpecification } from "./ProductSpecification";
export { VideoHero } from "./VideoHero";

// Re-export shared product domain types from the canonical source.
export type {
  ProductFeature,
  EngineSpec,
  GridFeature,
  KeyMetric,
  TechSpecItem,
  ProductColor,
} from "@/lib/types/products";

// Service Support page data
import type { FeatureCard } from "@/components/service-page/FeatureCards";
import { PRODUCT_MODELS } from "./product-models";

// FEATURE_CARDS - Mapped precisely as per user request:
// manuals content -> services/locations (手册与指南)
// training content -> services/parts (三轮车)
export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "locations-manuals",
    image: "/products/AP110-A-PLUS(白).png",
    imageScale: 0.75,
    title: "两轮车",
    description: "车型手册下载与售后服务网点查询",
    ctaText: "立即查看",
    href: "/services/locations", // mapped to locations
  },
  {
    id: "parts-tricycles",
    image: "/dropdown/44.jpg",
    title: "三轮车",
    description: "车型手册下载与售后服务网点查询",
    ctaText: "立即查看",
    href: "/services/parts", // mapped to parts
  },
];



// Service coverage data
export const SERVICE_COVERAGE_COUNTRIES = [
  { flag: "🇬🇭", name: "Ghana GH" },
  { flag: "🇹🇬", name: "Togo TG" },
  { flag: "🇧🇯", name: "Benin BJ" },
  { flag: "🇨🇮", name: "Ivory Coast CI" },
  { flag: "🇧🇫", name: "Burkina Faso BF" },
  { flag: "🇲🇱", name: "Mali ML" },
  { flag: "🇬🇳", name: "Guinea GN" },
  { flag: "🇰🇪", name: "Kenya KE" },
  { flag: "🇺🇬", name: "Uganda UG" },
  { flag: "🇹🇿", name: "Tanzania TZ" },
];

export const SERVICE_COVERAGE_STATS = {
  servicePoints: "4,500+",
  subsidiaries: "15",
  dealers: "125+",
};

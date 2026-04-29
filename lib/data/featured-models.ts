// Mock featured models - replace with GET /api/featured-models
import type { FeaturedModel, MotorcycleCategory } from "@/lib/types";
import { DEFAULT_MODEL_COLORS } from "@/lib/constants";

// Helper to create model colors
const createModelColors = (imagePath: string) =>
  DEFAULT_MODEL_COLORS.map((color) => ({
    ...color,
    image: imagePath,
  }));

export const DEFAULT_FEATURED_MODELS: FeaturedModel[] = [
  {
    id: "1",
    name: "AP125-30 ALOBA",
    image: "/images/banners/homepage/aloba-black.png", // Default to black
    watermark: "APSONIC",
    colors: [
      {
        id: "black",
        name: "魅夜黑",
        hex: "#000000",
        image: "/images/banners/homepage/aloba-black.png",
      },
      {
        id: "red",
        name: "激情红",
        hex: "#E31D1A",
        image: "/images/banners/homepage/aloba-red.png", // Red image
      },
    ],
    href: "/products/ap125-30-aloba",
  },
  {
    id: "2",
    name: "AP150-40 CRUISER",
    image: "/images/banners/homepage/img2.jpg",
    watermark: "Good Life",
    colors: [
      {
        id: "black",
        name: "魅夜黑",
        hex: "#000000",
        image: "/images/banners/homepage/img2.jpg",
      },
      {
        id: "red",
        name: "激情红",
        hex: "#E31D1A",
        image: "/images/banners/homepage/aloba-red.png",
      },
    ],
    href: "/products/ap150-40-cruiser",
  },
];

export const DEFAULT_CATEGORIES: MotorcycleCategory[] = [
  {
    id: "street",
    name: "街车",
    image: "/images/banners/homepage/AP125-30（2）.png",
    href: "/products?category=street",
  },
  {
    id: "offroad",
    name: "越野",
    image: "/images/banners/homepage/AP250GY (3).png",
    href: "/products?category=offroad",
  },
  {
    id: "underbone",
    name: "弯梁车",
    image: "/images/banners/homepage/AP110-A-PLUS(白).png",
    href: "/products?category=underbone",
  },
  {
    id: "tricycle",
    name: "三轮车",
    image: "/products/images/AP150ZH-20 MAX (1).png",
    href: "/products?category=tricycle",
    imageClassName: "md:p-0",
  },
];

"use client";

import React from "react";
import { VideoHero } from "@/components/products";
import { ProductHighlight } from "@/components/products/v3/ProductHighlight";
import { FeatureShowcase } from "@/components/products/v3/FeatureShowcase";
import { TechnicalSpecs } from "@/components/products/v3/TechnicalSpecs";
import { RealUsageScenarios } from "@/components/products/v3/RealUsageScenarios";
import { VideoShowcaseSection } from "@/components/about/VideoShowcaseSection";
import { ContentCategories } from "@/components/products/v3/ContentCategories";

export default function ProductDetailPageV3() {
  const heroData = {
    title: "",
    subtitle: "",
    breadcrumbs: [
      { label: "首页", href: "/" },
      { label: "全系车型", href: "/products" },
      { label: "街车系列", href: "/products/category/street" },
      { label: "AP125-30", href: "/products/v3" },
    ],
    videoSrc: "/videos/725_1770450814.mp4",
  };

  return (
    <main className="min-h-screen bg-white">
      <VideoHero
        title={heroData.title}
        subtitle={heroData.subtitle}
        breadcrumbs={heroData.breadcrumbs}
        videoSrc={heroData.videoSrc}
      />

      {/* Product Highlight Section */}
      <ProductHighlight
        title="APSONIC AP150 · Built for Africa"
        description="A full-size product shot that clearly shows the complete motorcycle design, proportions, and stance — the main image users expect before reading features"
        images={[
          {
            src: "/products/AP125-30（1）.png",
            alt: "AP125-30 Red",
            color: "#8B0000",
          },
          {
            src: "/products/AP125-30（2）.png",
            alt: "AP125-30 Black",
            color: "#000000",
          },
        ]}
        buttonText="View Real Scenarios"
        buttonLink="#"
      />

      {/* Feature Showcase Section */}
      <FeatureShowcase
        sectionTitle="Core Features Designed for Africa"
        features={[
          {
            title: "Dashboard",
            description:
              "Digital instrument cluster displays speed, mileage, fuel level, and other important information clearly, making it easier to monitor vehicle status during riding.",
            videoSrc: "/videos/681_1770075719.mp4",
          },
          {
            title: "Headlight",
            description:
              "High-brightness halogen or LED headlights provide excellent night lighting, ensuring safe riding in dark environments.",
            videoSrc: "/videos/684_1770075734.mp4",
          },
          {
            title: "Seat Cushion",
            description:
              "Ergonomic seat design, soft and durable material, reduces fatigue during long rides, provides comfortable riding experience.",
            videoSrc: "/videos/680_1770075716.mp4",
          },
          {
            title: "Protective Bars",
            description:
              "High-quality protective bars protect the engine and key components, reducing damage in case of accidental falls, greatly extending service life.",
            videoSrc: "/videos/683_1770075729.mp4",
          },
          {
            title: "Suspension",
            description:
              "Front and rear suspension system absorbs bumps on uneven roads, providing smooth and stable riding experience.",
            videoSrc: "/videos/682_1770075726.mp4",
          },
          {
            title: "Muffler",
            description:
              "Efficient muffler system reduces noise and meets environmental standards, provides quieter riding experience.",
            videoSrc: "/videos/685_1770075738.mp4",
          },
        ]}
      />

      {/* Technical Specifications Section */}
      <TechnicalSpecs
        title="Technical Specifications"
        specs={[
          {
            label: "Single Cylinder 4-Stroke",
            values: ["100cc / 200cc", "6.3kW / 7200rpm", "16L"],
          },
          {
            label: "Wheelbase",
            values: ["305kg", "1.8L/100km", "2 Years/20,000km"],
          },
        ]}
      />

      {/* Real Usage Scenarios Section */}
      <RealUsageScenarios
        title="Real Usage Scenarios"
        description="See how users around Africa use our motorcycles in their daily lives, whether for cargo transport, daily commuting or agriculture work."
        images={[
          {
            src: "/images/banners/homepage/7321770452797_.pic.jpg",
            alt: "Motorcycle with cargo in mountainous terrain",
          },
          {
            src: "/images/banners/homepage/7311770452796_.pic.jpg",
            alt: "Delivery rider in urban setting",
          },
          {
            src: "/images/banners/homepage/7301770452795_.pic.jpg",
            alt: "Rider at sunset",
          },
          {
            src: "/images/banners/homepage/7291770452794_.pic.jpg",
            alt: "Motorcycle on rural road",
          },
          {
            src: "/images/banners/homepage/7281770452793_.pic.jpg",
            alt: "Group of riders",
          },
          {
            src: "/images/banners/homepage/7331770453574_.pic_hd.jpg",
            alt: "APSONIC promotional banner",
          },
        ]}
      />

      {/* Video Showcase Section */}
      <VideoShowcaseSection />

      {/* Content Categories Section */}
      <ContentCategories />
    </main>
  );
}

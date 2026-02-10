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
        title="APSONIC AP150 · 为非洲而生"
        description="全尺寸产品照，清晰展示完整的摩托车设计、比例和姿态——这是用户在阅读功能前所期待的主图"
        images={[
          {
            src: "/products/AP125-30（1）.png",
            alt: "AP125-30 红色",
            color: "#8B0000",
          },
          {
            src: "/products/AP125-30（2）.png",
            alt: "AP125-30 黑色",
            color: "#000000",
          },
        ]}
      />

      {/* Feature Showcase Section */}
      <FeatureShowcase
        sectionTitle="为非洲而设计的核心功能"
        features={[
          {
            title: "仪表盘",
            description:
              "数字化仪表盘清晰显示车速、里程、油量等重要信息，让您在骑行过程中更轻松地监控车辆状态。",
            videoSrc: "/videos/681_1770075719.mp4",
          },
          {
            title: "大灯",
            description:
              "高亮度卤素或LED大灯提供卓越的夜间照明，确保在黑暗环境中骑行安全。",
            videoSrc: "/videos/684_1770075734.mp4",
          },
          {
            title: "座垫",
            description:
              "人体工程学座椅设计，材质柔软耐用，减少长途骑行疲劳，提供舒适的驾驶体验。",
            videoSrc: "/videos/680_1770075716.mp4",
          },
          {
            title: "防护杠",
            description:
              "优质防护杠保护发动机和关键部件，减少意外跌倒时的损坏，大大延长使用寿命。",
            videoSrc: "/videos/683_1770075729.mp4",
          },
          {
            title: "悬挂系统",
            description:
              "前后悬挂系统有效吸收不平坦路面的颠簸，提供平稳、稳定的骑行体验。",
            videoSrc: "/videos/682_1770075726.mp4",
          },
          {
            title: "消声器",
            description:
              "高效消声器系统降低噪音，符合环保标准，提供更安静的骑行体验。",
            videoSrc: "/videos/685_1770075738.mp4",
          },
        ]}
      />

      {/* Technical Specifications Section */}
      <TechnicalSpecs
        title="技术规格"
        specs={[
          {
            label: "单缸四冲程发动机",
            values: ["100cc / 200cc", "6.3kW / 7200rpm", "16L"],
          },
          {
            label: "轴距与性能",
            values: ["305kg", "1.8L/100km", "2年/20,000公里保修"],
          },
        ]}
      />

      {/* Real Usage Scenarios Section */}
      <RealUsageScenarios
        title="真实使用场景"
        description="看看非洲各地的用户如何在日常生活中使用我们的摩托车，无论是货物运输、日常通勤还是农业工作。"
        images={[
          {
            src: "/images/banners/homepage/7321770452797_.pic.jpg",
            alt: "山区地形中的载货摩托车",
          },
          {
            src: "/images/banners/homepage/7311770452796_.pic.jpg",
            alt: "城市环境中的外卖骑手",
          },
          {
            src: "/images/banners/homepage/7301770452795_.pic.jpg",
            alt: "夕阳下的骑手",
          },
          {
            src: "/images/banners/homepage/7291770452794_.pic.jpg",
            alt: "乡村道路上的摩托车",
          },
          {
            src: "/images/banners/homepage/7281770452793_.pic.jpg",
            alt: "骑手团队",
          },
          {
            src: "/images/banners/homepage/7331770453574_.pic_hd.jpg",
            alt: "APSONIC 宣传横幅",
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

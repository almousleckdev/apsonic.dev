"use client";

import Head from "next/head";
import { VideoHero } from "@/components/products";
import { ProductHighlight } from "@/components/products/v3/ProductHighlight";
import { FeatureShowcase } from "@/components/products/v3/FeatureShowcase";
import { TechnicalSpecs } from "@/components/products/v3/TechnicalSpecs";
import { RealUsageScenarios } from "@/components/products/v3/RealUsageScenarios";
import { VideoShowcaseSection } from "@/components/about/VideoShowcaseSection";
import { ContentCategories } from "@/components/products/v3/ContentCategories";

export default function ProductDetailPageV4() {
  const heroData = {
    title: "AP250GY",
    subtitle: "硬核越野 征服险阻",
    breadcrumbs: [
      { label: "首页", href: "/" },
      { label: "全系车型", href: "/products" },
      { label: "越野系列", href: "/products/category/offroad" },
      { label: "AP250GY", href: "/products/v3" },
    ],
    imageSrc: "/images/banners/homepage/aloba-black.png",
  };

  return (
    <>
      <Head>
        <title>AP250GY - Apsonic 越野摩托车</title>
        <meta
          name="description"
          content="硬核越野 AP250GY，专为非洲极端路况设计的高性能摩托车。"
        />
      </Head>
      <main className="min-h-screen bg-gray-900 text-white">
        <VideoHero
          title={heroData.title}
          subtitle={heroData.subtitle}
          breadcrumbs={heroData.breadcrumbs}
          imageSrc={heroData.imageSrc}
        />

        {/* Product Highlight Section */}
        <ProductHighlight
          title="APSONIC AP250GY · 征服全地形"
          description="全尺寸越野产品照，清晰展示硬核越野姿态——这是卓越性能与粗犷设计的完美融合。"
          images={[
            {
              src: "/images/banners/homepage/aloba-black.png",
              alt: "AP250GY 展示图",
              color: "#8B0000",
            },
          ]}
        />

        {/* Feature Showcase Section */}
        <FeatureShowcase
          sectionTitle="为非洲而设计的核心功能"
          features={[
            {
              title: "全液晶仪表盘",
              description:
                "数字化仪表盘清晰显示车速、里程、转速等越野行车重要信息，让您在恶劣路况中更轻松地掌控车辆状态。",
              imageSrc: "/images/products/accessories/内页仪表盘.png",
            },
            {
              title: "耐用避震系统",
              description:
                "前后越野级长行程悬挂系统，有效吸收各种不平坦恶劣路况的剧烈颠簸，硬核地形如履平地。",
              imageSrc: "/images/products/accessories/内页避震.png",
            },
            {
              title: "越野专用座垫",
              description:
                "人体工程学防滑座椅设计，在颠簸骑行中提供稳固支撑并减少疲劳，让您更专注路况挑战。",
              imageSrc: "/images/products/accessories/内页坐垫.png",
            },
            {
              title: "高强度防护杠",
              description:
                "专为严苛环境设计的优质防护杠，保护越野摔车时发动机和其他关键部件的安全。",
              imageSrc: "/images/products/accessories/内页护杠.png",
            },
            {
              title: "承载式车架",
              description:
                "结构强悍的承载式车架，经久耐用，满足在非洲复杂地形条件下的高强度骑行需求。",
              imageSrc: "/images/products/accessories/内页车架.png",
            },
            {
              title: "运动排气消音器",
              description:
                "声浪浑厚且性能卓越的高位排气消声器系统，既能涉水也能爆发强劲动力的尾端输出。",
              imageSrc: "/images/products/accessories/内页消音器.png",
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
    </>
  );
}

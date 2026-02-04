"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/data/product-models";
import { getProductDetailData } from "@/lib/mock-data/product-details";
import {
  ProductHero,
  ProductFeatureHighlight,
  ProductFeatureShowcase,
  ProductEngineSpecs,
  ProductFeatureGrid,
  ProductColorShowcase,
  ProductSpecification,
  VideoHero,
} from "@/components/products";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

// 类别中文映射
const CATEGORY_LABELS: Record<string, string> = {
  underbone: "弯梁车",
  street: "街车",
  offroad: "越野",
  tricycle: "三轮车",
};

/**
 * 产品详情页组件
 * 基于 all_product_details_page.jpg 设计
 */
export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  // 获取产品详情数据（中文）
  const details = getProductDetailData(product.category);

  // 准备Hero数据 - 所有产品使用相同背景
  const heroData = {
    title: product.model,
    subtitle: "Aloba", // 可以从产品数据中获取或保持统一
    breadcrumbs: [
      { label: "首页", href: "/" },
      { label: "产品", href: "/products" },
      { label: product.model, href: `/products/${product.id}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 产品Hero - 使用统一的AP150-30背景 - Paths verified */}
      {/* 产品Hero - Replaced with VideoHero as requested */}
      <VideoHero
        breadcrumbs={heroData.breadcrumbs}
        videoSrc="/videos/producthero.mp4"
      />

      {details && (
        <>
          {/* 视觉展示组件 - Enhanced animation */}
          <ScrollReveal
            as="div"
            variant="fadeUp"
            amount={0.15}
            duration={0.9}
            once={false}
          >
            <ProductFeatureHighlight
              title="先进结构工程"
              description="加固底盘，卓越稳定性。高强度车架设计确保最大耐用性和操控信心，适应所有地形类型。"
              image="/images/products/accessories/second_component.png"
              bottomText="*基于2026年车队压力测试计算"
            />
          </ScrollReveal>

          <ScrollReveal
            as="div"
            variant="fadeUp"
            amount={0.15}
            duration={0.9}
            delay={0.1}
            once={false}
          >
            <ProductFeatureShowcase
              sectionTitle={`${product.model} 设计亮点`}
              features={details.features}
            />
          </ScrollReveal>

          <ScrollReveal
            as="div"
            variant="fadeUp"
            amount={0.15}
            duration={0.9}
            delay={0.1}
            once={false}
          >
            <ProductEngineSpecs
              title="新一代技术核心"
              description="高效燃烧技术，多通道冷却。专为极端高温下的低噪音和平稳换挡而设计。"
              backgroundImage="/images/products/accessories/APSONIC-详情页-改版切片_06.png"
              specs={details.engineSpecs}
              disclaimer="*数据来源于Apsonic工程实验室"
            />
          </ScrollReveal>

          <ScrollReveal
            as="div"
            variant="fadeUp"
            amount={0.15}
            duration={0.9}
            delay={0.1}
            once={false}
          >
            <ProductFeatureGrid
              sectionTitle="集成性能特性"
              features={details.gridFeatures}
              footerText="可用地区：多哥 | 加纳 | 布基纳法索 | 科特迪瓦 | 马里 | 贝宁 | 几内亚 | 肯尼亚 | 坦桑尼亚 | 乌干达"
            />
          </ScrollReveal>

          {/* 颜色展示 */}
          <ScrollReveal
            as="div"
            variant="fadeUp"
            amount={0.15}
            duration={0.9}
            delay={0.1}
            once={false}
          >
            <ProductColorShowcase
              title="2 种经典配色"
              subtitle="非洲生命之美"
              initialVariantId="black"
              variants={[
                {
                  id: "black",
                  name: "钻石黑",
                  description: "深邃优雅，彰显品质。",
                  imageSrc: "/images/banners/homepage/aloba-black.png",
                  dotColor: "#000000",
                },
                {
                  id: "red",
                  name: "激情红",
                  description: "活力四射，引人注目。",
                  imageSrc: "/images/banners/homepage/aloba-red.png",
                  dotColor: "#DC2626",
                },
              ]}
            />
          </ScrollReveal>

          {/* 技术规格 */}
          <ScrollReveal
            as="div"
            variant="fadeUp"
            amount={0.15}
            duration={0.9}
            delay={0.1}
            once={false}
          >
            <ProductSpecification
              keyMetrics={details.keyMetrics}
              detailedSpecs={details.detailedSpecs}
            />
          </ScrollReveal>
        </>
      )}
    </main>
  );
}

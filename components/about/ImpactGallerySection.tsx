"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export const ImpactGallerySection = () => {
  return (
    <Section
      backgroundColor={colors.background.white}
      padding="none"
      className="shadow-lg overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[80vh] w-full">
        {/* Item 1: Main Africa Cup Message */}
        <div className="relative group h-full overflow-hidden">
          <Image
            src="/about/Picture4.png"
            alt="APSONIC非洲国家杯官方合作伙伴"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-brand-green text-sm font-bold uppercase tracking-widest">
              激情体育
            </span>
            <h3 className="text-xl font-bold text-white mt-2 leading-tight">
              全球唯一连续三届签约非洲国家杯官方合作伙伴的摩托车品牌
            </h3>
          </div>
        </div>

        {/* Item 2: Stadium Branding */}
        <div className="relative group h-full overflow-hidden">
          <Image
            src="/images/services/services2.jpg"
            alt="APSONIC品牌闪耀非洲杯赛场"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-brand-green text-sm font-bold uppercase tracking-widest">
              激情体育
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">
              品牌闪耀非洲顶级赛场
            </h3>
          </div>
        </div>

        {/* Item 3: Global Sports Marketing */}
        <div className="relative group h-full overflow-hidden">
          <Image
            src="/images/services/services1.jpg"
            alt="APSONIC全球体育营销战略"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-brand-green text-sm font-bold uppercase tracking-widest">
              激情体育
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">
              全球体育营销战略布局
            </h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

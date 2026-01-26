"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export const ImpactGallerySection = () => {
  return (
    <Section backgroundColor={colors.background.primary} padding="none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[80vh] w-full">
        {/* Item 1: Africa Cup */}
        <div className="relative group h-full overflow-hidden">
          <Image
            src="/about/Picture4.png"
            alt="Africa Cup of Nations sponsored by Apsonic"
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

        {/* Item 2: CSR Impact */}
        <div className="relative group h-full overflow-hidden">
          <Image
            src="/about/Picture8.png"
            alt="Apsonic community support"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-brand-green text-sm font-bold uppercase tracking-widest">
              社会责任
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">赋能本地社区</h3>
          </div>
        </div>

        {/* Item 3: Trophy/Pride */}
        <div className="relative group h-full overflow-hidden">
          <Image
            src="/about/Picture6.png"
            alt="Apsonic Brand Pride"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-brand-green text-sm font-bold uppercase tracking-widest">
              品质认可
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">
              连接梦想与荣誉
            </h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export const MissionSection = () => {
  return (
    <Section
      id="story"
      backgroundColor={colors.background.secondary}
      padding="none"
      className="relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row h-full min-h-[80vh]">
        {/* Left Side: Sticky Content */}
        <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="mb-8 font-bold leading-tight tracking-tighter"
              style={{
                fontSize: typography.size.h1,
                color: colors.text.primary,
              }}
            >
              品牌介绍
            </h2>

            <div className="space-y-6 text-lg text-gray-600">
              <p>
                APSONIC品牌诞生于2005年，致力于摩托车及相关配件的研发、销售和售后服务。是德诚控股集团旗下主品牌之一。
              </p>
              <p>
                APSONIC倡导“高品质美好生活”，旨在以高品质、多区域、多元化的产品满足当地消费者的交通需求。
              </p>
              <p>
                APSONIC始终致力于满足民众交通需求，改善民众出行条件，其产品因经济耐用、性能可靠业已成为西非地区民众出行和短途运输首选的一线摩托车品牌，为改善当地人民的出行生活作出了突出贡献，受到了当地政府的赞赏和人民的喜爱。
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                售后服务体系
              </h3>
              <div className="space-y-4 text-base text-gray-600">
                <p>
                  MASTER KING 和 MOGU
                  是德诚控股集团在非洲打造的专业售后服务体系。
                </p>
                <p>
                  MASTER KING 是面向 APSONIC
                  车型的全程售后服务品牌，服务网络覆盖主要城镇，现已建成 800
                  家。
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
          <Image
            src="/about/Picture1.png"
            alt="APSONIC After-Sales Service Network"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 lg:bg-gradient-to-r lg:from-white/40 lg:via-transparent lg:to-transparent opacity-90" />
        </div>
      </div>
    </Section>
  );
};

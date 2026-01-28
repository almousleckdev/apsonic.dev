"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import {
  MdWaterDrop,
  MdFavorite,
  MdGroups,
  MdLightbulb,
  MdSecurity,
} from "react-icons/md";
import Image from "next/image";

export const MarketDaySection = () => {
  return (
    <>
      {/* First Section: Image Left, Text Right */}
      <Section
        backgroundColor={colors.background.primary}
        className="relative py-24 border-t border-white/5 overflow-hidden"
      >
        {/* Soft blue overlay for water theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Clean Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/about/Picture7.png"
                  alt="APSONIC打井项目 - 为非洲社区提供清洁水源"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 text-brand-green">
                <MdWaterDrop className="text-2xl" />
                <span className="font-bold text-sm uppercase tracking-widest">
                  社会责任
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                为非洲打井 · <span className="text-brand-green">生命之源</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                清洁的水源是生命的基础。APSONIC深知这一点，我们不仅为非洲提供可靠的交通工具，更致力于改善当地居民的生活质量。
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                在非洲的许多地区，清洁水源依然稀缺。APSONIC通过打井项目，为当地社区带来生命之源，让更多家庭享有安全饮用水，让孩子们拥有更健康的未来。每一口井，都承载着我们对非洲人民的承诺，都是希望的象征。
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-brand-green">
                    50+
                  </span>
                  <span className="text-gray-600 text-sm mt-1">水井数量</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-brand-green">
                    10万+
                  </span>
                  <span className="text-gray-600 text-sm mt-1">受益居民</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                <span className="flex items-center gap-1">
                  <MdWaterDrop /> 清洁水源
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1">
                  <MdFavorite /> 改善生活
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Second Section: Text Left, Image Right */}
      <Section
        backgroundColor={colors.background.primary}
        className="relative py-24 overflow-hidden"
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 text-brand-green">
                <MdGroups className="text-2xl" />
                <span className="font-bold text-sm uppercase tracking-widest">
                  社区赋能
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                汇聚希望 · <span className="text-brand-green">滋润生命</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                每一口水井不仅仅是基础设施，更是社区团结与希望的象征。当清澈的水源涌出时，我们看到的是妇女们脸上的笑容，是孩子们健康成长的未来，是整个村庄焕发的生机。
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                APSONIC的打井项目让非洲的母亲们不再需要长途跋涉取水，让她们有更多时间照顾家庭、发展事业。清洁的水源改变的不仅是生活方式，更是整个社区的命运。我们相信，每一滴水都承载着改变的力量。
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-brand-green">
                    20+
                  </span>
                  <span className="text-gray-600 text-sm mt-1">覆盖村庄</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-brand-green">
                    5万+
                  </span>
                  <span className="text-gray-600 text-sm mt-1">
                    日供水量(升)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                <span className="flex items-center gap-1">
                  <MdGroups /> 社区团结
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1">
                  <MdFavorite /> 赋能妇女
                </span>
              </div>
            </motion.div>

            {/* Right: Clean Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/about/Picture8.png"
                  alt="APSONIC打井项目 - 社区妇女在水井旁"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Third Section: Image Left, Text Right - Lighting Infrastructure */}
      <Section
        backgroundColor={colors.background.primary}
        className="relative py-24 border-t border-white/5 overflow-hidden"
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Clean Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/about/Picture9.png"
                  alt="APSONIC照明项目 - 太阳能路灯照亮非洲"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 text-brand-green">
                <MdLightbulb className="text-2xl" />
                <span className="font-bold text-sm uppercase tracking-widest">
                  基础设施建设
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                点亮非洲 · <span className="text-brand-green">照亮未来</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                光明不仅驱散黑暗，更带来安全与希望。APSONIC在非洲各地建设太阳能照明设施，为社区带来光明，让夜晚不再是恐惧的代名词，而是充满可能的时光。
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                从街道到市场，从学校到医院，APSONIC的照明项目让非洲的夜晚焕然一新。孩子们可以在灯光下学习，商贩可以延长营业时间，社区的经济活力得到提升。每一盏灯，都是发展的希望，都是APSONIC对非洲未来的投资。
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-brand-green">
                    100+
                  </span>
                  <span className="text-gray-600 text-sm mt-1">太阳能路灯</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-brand-green">
                    30+
                  </span>
                  <span className="text-gray-600 text-sm mt-1">服务社区</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                <span className="flex items-center gap-1">
                  <MdLightbulb /> 绿色能源
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1">
                  <MdSecurity /> 安全保障
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

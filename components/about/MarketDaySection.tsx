"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import { MdWbSunny, MdShoppingBasket, MdAccessTime } from "react-icons/md";
import Image from "next/image";

export const MarketDaySection = () => {
  return (
    <Section
      backgroundColor={colors.background.primary}
      className="relative py-24 border-t border-white/5 overflow-hidden"
    >
      {/* Warm Overlay for "Sun/Dust" feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-12 min-h-[600px]">
          {/* Left: Visual Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-7/12 relative rounded-3xl overflow-hidden group shadow-2xl border border-gray-100"
          >
            <Image
              src="/about/Picture7.png"
              alt="Apsonic Tricycles connecting markets"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <div className="mb-4 inline-flex items-center gap-2 text-brand-green">
                <MdWbSunny className="text-2xl" />
                <span className="font-bold text-sm uppercase tracking-widest">
                  西非供应链之基
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                每一场贸易的 <span className="text-brand-green">驱动力</span>。
              </h2>
              <p className="text-gray-300 text-lg max-w-xl">
                从马里的棉花田到加纳的物流中心，APSONIC三轮车是西非繁荣贸易背后的功臣，确保每一份货物准时到达。
              </p>
            </div>
          </motion.div>

          {/* Right: Narrative & Stats */}
          <div className="w-full md:w-5/12 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-100 flex flex-col justify-center flex-grow shadow-sm"
            >
              <div className="mb-6 inline-flex items-center gap-2 text-orange-600">
                <MdWbSunny className="text-2xl" />
                <span className="font-mono text-sm uppercase tracking-widest">
                  05:00 AM
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                集市日的 <span className="text-orange-600">忙碌</span>。
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                在太阳升起之前，Apsonic的发动机轰鸣启动。从尼日利亚的薯农到多哥的纺织品贸易商，我们是供应链的第一步。
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MdAccessTime /> 可靠启动
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1">
                  <MdShoppingBasket /> 重载运输
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-3xl p-6 flex flex-col justify-between border border-gray-100 shadow-sm"
              >
                <span className="text-4xl font-bold text-gray-900">250kg</span>
                <p className="text-gray-600 text-xs">
                  市场商人每天平均载货量。
                </p>
                <div className="w-full bg-gray-200 h-1 mt-4 rounded-full overflow-hidden">
                  <div className="bg-brand-green h-full w-[85%]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-brand-green/10 rounded-3xl p-6 flex flex-col justify-between border border-brand-green/20 relative overflow-hidden group shadow-sm"
              >
                <span className="text-4xl font-bold text-brand-green">98%</span>
                <p className="text-gray-700 text-xs">
                  高温条件下的运行可靠性评级。
                </p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-1 w-full bg-brand-green rounded-full opacity-80"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { colors, typography } from "@/lib/design-tokens";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const LeadersSection = () => {
  return (
    <Section
      backgroundColor={colors.background.primary}
      className=""
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-900 font-mono text-sm uppercase tracking-widest"
            >
              领导力
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 mb-6 text-3xl font-bold text-gray-900 md:text-5xl"
            >
              方向盘后的远见者。
            </motion.h2>
            <p className="mb-8 text-lg text-gray-600">
              我们的领导团队结合了数十年的汽车工程专业知识和对非洲市场的深刻理解。
              我们相信实践型领导——经常到工厂、拜访经销商、倾听骑手的声音。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="border-l-2 border-gray-900 pl-6">
                <h4 className="text-gray-900 font-bold text-xl">全球标准</h4>
                <p className="text-gray-500 mt-1">ISO 9001认证制造</p>
              </div>
              <div className="border-l-2 border-gray-900 pl-6">
                <h4 className="text-gray-900 font-bold text-xl">本地影响</h4>
                <p className="text-gray-500 mt-1">在10多个国家创造就业</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="border-gray-200 text-gray-900 hover:bg-gray-50 rounded-full px-8"
            >
              了解董事会
            </Button>
          </div>

          {/* Right: Abstract/Visual Representation (Since we don't have headshots) */}
          {/* Using a sleek, abstract composition or reusing a professional image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl shadow-gray-200/50"
            >
              {/* Abstract Leadership Graphic - Replaced with Cultural Pattern Feel */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #111827 0, #111827 1px, transparent 0, transparent 50%)",
                  backgroundSize: "10px 10px",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 z-10">
                  <h3 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-2 tracking-tighter">
                    5M+
                  </h3>
                  <p className="text-gray-900 font-medium tracking-widest uppercase text-sm">
                    日常通勤
                  </p>
                  <p className="text-gray-600 mt-4 max-w-xs mx-auto text-sm">
                    从洛美的市场到塔马利的稀树草原，我们驱动着该地区的心跳。
                  </p>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

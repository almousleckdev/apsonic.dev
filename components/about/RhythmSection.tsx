"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/design-tokens";
import { motion, useScroll, useTransform } from "framer-motion";

export const RhythmSection = () => {
  return (
    <Section
      backgroundColor={colors.background.secondary}
      className=""
    >
      {/* Background Text Texture */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none select-none overflow-hidden">
        <div className="whitespace-nowrap text-[20vh] font-bold text-transparent text-stroke-2 text-stroke-black animate-marquee">
          ACCRA LAGOS LOME COTONOU BAMAKO OUAGA
        </div>
        <div className="whitespace-nowrap text-[20vh] font-bold text-transparent text-stroke-2 text-stroke-black animate-marquee-reverse">
          MOVE RISE GROW BUILD DREAM HUSTLE
        </div>
        <div className="whitespace-nowrap text-[20vh] font-bold text-transparent text-stroke-2 text-stroke-black animate-marquee">
          THE HEARTBEAT OF THE STREETS
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-8 leading-none">
            城市的 <br />
            <span className="text-gray-900">节拍</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-900 font-mono mb-8">
              // 达喀尔 // 阿比让 // 阿克拉 // 拉各斯
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              从清晨的祈祷到午夜的市场，Apsonic是城市的配乐。
              我们对西非的生活流动不可或缺。
            </p>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for Marquee - Injected here for simplicity or should be in globals */}
      <style jsx>{`
        .text-stroke-2 {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.1);
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 20s linear infinite reverse;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Section>
  );
};

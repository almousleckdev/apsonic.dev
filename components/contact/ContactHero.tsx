"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ENTERPRISE_EASE } from "@/lib/constants/animations";

export const ContactHero = () => {
  return (
    <Section
      padding="none"
      className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.png"
          alt="Apsonic Contact Support"
          fill
          className="object-cover opacity-30 grayscale blur-[1px] scale-110 transition-transform duration-[3s] ease-linear group-hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: ENTERPRISE_EASE }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 h-px w-20 bg-white/60" />

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl drop-shadow-2xl">
            让我们开始 <br />
            <span className="text-white">对话</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl font-light leading-relaxed">
            从寻找最近的经销商到技术支持， 我们的全球团队随时准备为您提供帮助。
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

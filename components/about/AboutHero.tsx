"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const AboutHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/about/Picture1.png"
          alt="Apsonic After-Sales Service Center"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Gradient Overlay for better text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"
          aria-hidden="true"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <Button
            variant="primary"
            size="lg"
            className="rounded-full px-8 backdrop-blur-sm"
            onClick={() => {
              const element = document.getElementById("story");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            了解我们的故事
          </Button>
        </motion.div>

        {/* Animated Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="max-w-4xl font-bold tracking-tight text-white"
          style={{
            fontSize: typography.size.hero,
          }}
        >
          道路的心跳
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl font-medium"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          为大陆而设计。经久耐用。赋能前行。
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            滚动
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-brand-green to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

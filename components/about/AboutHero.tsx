"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography } from "@/lib/design-tokens";
import { Button } from "@/components/ui/Button";

export const AboutHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-x-0 z-0"
        style={{ top: '-15%', height: '115%' }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/about/abouthero.jpeg"
          alt="APSONIC 摩托车生产基地"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark Gradient Overlay for better text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"
          aria-hidden="true"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end px-4 pb-24 text-center sm:px-6 lg:px-8">

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="mt-12"
        >
          <Button
            size="lg"
            className="rounded-full px-8 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: "#EAB308", // deep yellow
              color: colors.text.primary, // Previous dark/deep button color
              border: "none",
            }}
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 transform"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            滚动
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

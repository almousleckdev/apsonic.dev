"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors, typography } from "@/lib/design-tokens";

interface VideoHeroProps {
  videos: string[];
  interval?: number; // Duration in ms for each video
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  videos,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (videos.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [videos, interval]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <video
            src={videos[currentIndex]}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-start px-10 z-10 max-w-[1360px] mx-auto w-full pb-32 md:pb-40 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-bold text-white mb-2 leading-tight pointer-events-auto"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          好质量 好生活
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white/90 text-lg md:text-2xl mb-8 font-light pointer-events-auto"
        >
          Bonne qualité pour une meilleure vie
        </motion.p>
      </div>

      {/* Video Navigation Bars */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative h-1 w-12 overflow-hidden bg-white/30 transition-all duration-300 hover:h-1.5"
            aria-label={`Go to video ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                layoutId="active-bar"
                className="absolute inset-0 bg-[#1FA84F]"
                transition={{ duration: 0.3 }}
              />
            )}
            {/* Progress Bar for current video */}
            {index === currentIndex && (
              <motion.div
                layoutId="progress-bar"
                className="absolute inset-0 bg-[#1FA84F] z-10"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: interval / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

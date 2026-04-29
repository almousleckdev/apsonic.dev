"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ProductFeature } from "@/lib/types/products";

const MotionH2 = motion.h2 as unknown as React.ComponentType<
  Record<string, unknown>
>;
const MotionDiv = motion.div as unknown as React.ComponentType<
  Record<string, unknown>
>;

interface ProductFeatureShowcaseProps {
  sectionTitle: string;
  features: ProductFeature[];
  className?: string;
}

/**
 * Premium Product Feature Carousel Showcase
 * Full-width carousel with large side previews and minimal navigation
 */
export const ProductFeatureShowcase: React.FC<ProductFeatureShowcaseProps> = ({
  sectionTitle,
  features,
  className,
}) => {
  const middleIndex = Math.floor(features.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);
  const reduceMotion = useReducedMotion();
  const easing: number[] = [0.22, 1, 0.36, 1];

  const activeFeature = features[activeIndex];
  if (!activeFeature) return null;

  const prevIndex = activeIndex === 0 ? features.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === features.length - 1 ? 0 : activeIndex + 1;

  return (
    <section
      className={cn(
        "relative w-full py-16 sm:py-24 bg-white flex flex-col items-center",
        className,
      )}
    >
      <div className="w-full flex flex-col items-center">
        {/* Section Title */}
        <MotionH2
          className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-12 sm:mb-16 tracking-wide text-center px-4"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: easing }}
        >
          {sectionTitle}
        </MotionH2>

        {/* Full-Width Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-stretch">
            {/* Left Preview Image - Full height */}
            <button
              onClick={() => setActiveIndex(prevIndex)}
              className="hidden lg:block relative w-1/6 flex-shrink-0 opacity-30 hover:opacity-50 transition-opacity duration-300"
              style={{ minHeight: "500px" }}
            >
              <Image
                src={features[prevIndex].image}
                alt={features[prevIndex].title}
                fill
                className="object-cover"
                sizes="20vw"
              />
            </button>

            {/* Main Feature Display - No border, no card */}
            <div
              className="relative flex-1 bg-black"
              style={{ minHeight: "500px" }}
            >
              <AnimatePresence mode="wait">
                <MotionDiv
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />

                  {/* Text Overlay - Top Left */}
                  <div className="absolute top-0 left-0 p-8 sm:p-12 md:p-16 z-10">
                    <MotionDiv
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6, ease: easing }}
                      className="space-y-2 sm:space-y-3"
                    >
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white drop-shadow-lg">
                        {activeFeature.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow-md max-w-md">
                        {activeFeature.description}
                      </p>
                    </MotionDiv>
                  </div>
                </MotionDiv>
              </AnimatePresence>
            </div>

            {/* Right Preview Image - Full height */}
            <button
              onClick={() => setActiveIndex(nextIndex)}
              className="hidden lg:block relative w-1/6 flex-shrink-0 opacity-30 hover:opacity-50 transition-opacity duration-300"
              style={{ minHeight: "500px" }}
            >
              <Image
                src={features[nextIndex].image}
                alt={features[nextIndex].title}
                fill
                className="object-cover"
                sizes="20vw"
              />
            </button>
          </div>
        </div>

        {/* Simple Bottom Navigation - No border box */}
        <div className="mt-12 sm:mt-16 w-full max-w-2xl px-4">
          <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative py-3 text-xs sm:text-sm md:text-base font-light tracking-wide transition-all duration-300",
                  activeIndex === index
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600",
                )}
              >
                {feature.label}

                {/* Simple underline for active item */}
                {activeIndex === index && (
                  <MotionDiv
                    layoutId="simple-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gray-900"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

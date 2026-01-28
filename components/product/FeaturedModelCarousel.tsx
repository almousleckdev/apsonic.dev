"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedModel } from "@/lib/types";
import { colors, typography, effects } from "@/lib/design-tokens";
import { CAROUSEL_CONFIG } from "@/lib/constants";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselNavButton } from "@/components/ui/CarouselNavButton";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ANIMATION_VARIANTS,
  ENTERPRISE_EASE,
} from "@/lib/constants/animations";

export interface FeaturedModelCarouselProps {
  models: FeaturedModel[];
  autoPlay?: boolean;
  interval?: number;
}

export const FeaturedModelCarousel: React.FC<FeaturedModelCarouselProps> = ({
  models,
  autoPlay = true,
  interval = CAROUSEL_CONFIG.defaultInterval,
}) => {
  const { currentIndex, nextSlide, prevSlide, pause, resume } = useCarousel({
    itemsCount: models.length,
    autoPlay,
    interval,
  });

  const currentModel = models[currentIndex];

  return (
    <div
      className="relative w-full"
      style={{
        backgroundColor: colors.background.white,
      }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: ENTERPRISE_EASE }}
      >
        <h2
          className="font-bold"
          style={{
            fontSize: typography.size.h2,
            lineHeight: typography.lineHeight.tight,
            color: colors.brand.green,
          }}
        >
          车型推荐
        </h2>
      </motion.div>

      {/* Model Name */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: ENTERPRISE_EASE, delay: 0.1 }}
      >
        <h3
          className="font-semibold"
          style={{
            fontSize: typography.size.h1,
            lineHeight: typography.lineHeight.tight,
            color: colors.text.black,
          }}
        >
          {currentModel.name}
        </h3>
      </motion.div>

      {/* Main Image Container */}
      <div className="relative w-full mb-8">
        {/* Image with Watermark */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto aspect-[16/10] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: ENTERPRISE_EASE, delay: 0.2 }}
        >
          {/* Watermark Background */}
          {currentModel.watermark && (
            <motion.div
              className="absolute inset-0 flex items-start justify-center z-0"
              style={{
                color: "rgba(0, 0, 0, 0.05)",
                fontSize: "clamp(4rem, 15vw, 12rem)",
                fontWeight: 900,
                fontFamily:
                  'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                paddingTop: "clamp(2rem, 8vw, 6rem)",
                letterSpacing: "-0.02em",
                lineHeight: 0.9,
                whiteSpace: "nowrap",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, ease: ENTERPRISE_EASE, delay: 0.5 }}
            >
              {currentModel.watermark}
            </motion.div>
          )}

          {/* Motorcycle Image */}
          <div className="relative w-full h-full z-10">
            <Image
              src={currentModel.image}
              alt={currentModel.name}
              fill
              className={cn(
                "object-contain object-center",
                effects.transition.default,
              )}
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </motion.div>

        {/* Navigation Arrows - positioned at container level */}
        {models.length > 1 && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: ENTERPRISE_EASE, delay: 0.4 }}
            >
              <CarouselNavButton
                direction="left"
                onClick={prevSlide}
                ariaLabel="Previous model"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: ENTERPRISE_EASE, delay: 0.4 }}
            >
              <CarouselNavButton
                direction="right"
                onClick={nextSlide}
                ariaLabel="Next model"
              />
            </motion.div>
          </>
        )}
      </div>

      {/* Call to Action Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: ENTERPRISE_EASE, delay: 0.3 }}
      >
        <Link href="/products">
          <Button variant="outline" size="md">
            全系车型
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedModel } from "@/lib/types";
import { colors } from "@/lib/design-tokens";
import { CAROUSEL_CONFIG } from "@/lib/constants";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselNavButton } from "@/components/ui/CarouselNavButton";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    autoPlay: false,
    interval,
  });

  const currentModel = models[currentIndex];

  // Logic to handle color overrides
  const [overrideImage, setOverrideImage] = useState<string | null>(null);

  // Reset override when model changes
  useEffect(() => {
    setOverrideImage(null);
  }, [currentModel.id]);

  const activeImage = overrideImage || currentModel.image;

  const handleColorSelect = (image: string) => {
    setOverrideImage(image);
  };

  return (
    <div
      className="relative w-full flex flex-col items-center"
      style={{
        backgroundColor: colors.background.white,
      }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Section Title */}
      <div className="text-center mb-4">
        <span className="font-bold text-sm uppercase tracking-widest text-[#1FA84F]">
          车型推荐
        </span>
      </div>

      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center">
        {/* Model Name Box */}
        <div className="text-center mb-8 px-12 py-3 rounded-none inline-block min-w-[300px]">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 uppercase">
            {currentModel.name}
          </h3>
        </div>
      </div>

      <div className="relative w-full max-w-[1200px] flex items-center justify-between px-4 md:px-12 mb-8">
        {/* Left Arrow */}
        <div className="hidden md:block z-20">
          <CarouselNavButton
            direction="left"
            onClick={prevSlide}
            ariaLabel="Previous model"
            className="static translate-y-0 w-16 h-12 bg-transparent hover:scale-110 text-black transition-transform"
            iconClassName="w-8 h-8 text-black"
          />
        </div>

        {/* Animated Image Container */}
        <div className="relative flex-1 max-w-[900px] mx-auto aspect-[16/9] md:aspect-[2/1] flex items-center justify-center">
          {/* Background - Static */}
          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full -translate-y-10 scale-[1.3]">
              <Image
                src="/images/brand/ALOBA底图 (1).png"
                alt="Background"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          </div>

          {/* Bike Image - Animated on Model Change AND Color Change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }} // Fast, snappy transition
              className="absolute inset-0 z-10 w-[80%] h-[80%] m-auto"
            >
              <Image
                src={activeImage}
                alt={currentModel.name}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <div className="hidden md:block z-20">
          <CarouselNavButton
            direction="right"
            onClick={nextSlide}
            ariaLabel="Next model"
            className="static translate-y-0 w-16 h-12 bg-transparent hover:scale-110 text-black transition-transform"
            iconClassName="w-8 h-8 text-black"
          />
        </div>
      </div>

      {/* Mobile Arrows */}
      <div className="flex md:hidden gap-4 mb-6">
        <CarouselNavButton
          direction="left"
          onClick={prevSlide}
          ariaLabel="Previous model"
          className="static translate-y-0 w-12 h-10 text-black"
        />
        <CarouselNavButton
          direction="right"
          onClick={nextSlide}
          ariaLabel="Next model"
          className="static translate-y-0 w-12 h-10 text-black"
        />
      </div>

      {/* Color Selector */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="flex items-center gap-4 py-2 min-h-[40px]">
          {currentModel.colors?.map((color) => {
            const isSelected = activeImage === color.image;
            return (
              <button
                key={color.id}
                onClick={() => handleColorSelect(color.image)}
                className={cn(
                  "rounded-full transition-all duration-300 relative",
                  // Small & Cute: Default small, Scale up (1.5x) on select.
                  "w-3 h-3 hover:scale-125",
                  isSelected ? "scale-150" : "opacity-70 hover:opacity-100",
                )}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color`}
              />
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mb-12">
        <Link href="/products">
          <button className="px-8 py-2 rounded-full border border-gray-300 bg-white text-gray-600 hover:border-[#1FA84F] hover:text-[#1FA84F] transition-colors text-sm font-medium">
            全部车型
          </button>
        </Link>
      </div>
    </div>
  );
};

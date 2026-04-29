"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedModel } from "@/lib/types";
import { colors } from "@/lib/design-tokens";
import { CAROUSEL_CONFIG } from "@/lib/constants";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselNavButton } from "@/components/ui/CarouselNavButton";
import { cn } from "@/lib/utils";

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

  const [selectedColorImages, setSelectedColorImages] = useState<
    Record<string, string>
  >({});
  const currentModel = models[currentIndex];
  const activeImage =
    selectedColorImages[currentModel.id] || currentModel.image;

  const handleColorSelect = (image: string) => {
    setSelectedColorImages((prev) => ({
      ...prev,
      [currentModel.id]: image,
    }));
  };

  return (
    <div
      className="relative w-full flex flex-col items-center"
      style={{ backgroundColor: colors.background.white }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Section Title */}
      <div className="text-center mb-4">
        <span className="font-bold text-sm uppercase tracking-widest text-[#1FA84F]">
          车型推荐
        </span>
      </div>

      {/* Model Name */}
      <div className="text-center mb-4 sm:mb-8 px-4 sm:px-12 py-3 h-auto sm:h-[72px] flex items-center justify-center">
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 uppercase transition-opacity duration-300">
          {currentModel.name}
        </h3>
      </div>

      <div className="relative w-full max-w-[1200px] flex items-center justify-between px-4 md:px-12 mb-8 h-[300px] md:h-[500px]">
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

        {/* Image Container - No animations, pure stability */}
        <div className="relative flex-1 max-w-[900px] mx-auto w-full h-full flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="relative w-full h-full -translate-y-20 -translate-x-2 scale-[1.0]">
              <Image
                src="/images/brand/ALOBA底图 (1).png"
                alt="Background"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bike Images - Layered for zero-lag transitions */}
          {models.map((model, index) => (
            <div
              key={model.id}
              className={cn(
                "absolute inset-0 z-10 w-[80%] h-[80%] m-auto transition-opacity duration-500 ease-in-out",
                index === currentIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none",
              )}
            >
              <Image
                src={selectedColorImages[model.id] || model.image}
                alt={model.name}
                fill
                className="object-contain"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          ))}
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
                  "rounded-full transition-all duration-300 relative w-3 h-3 hover:scale-125",
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

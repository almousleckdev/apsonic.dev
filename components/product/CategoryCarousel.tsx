"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotorcycleCategory } from "@/lib/types";
import { CAROUSEL_CONFIG } from "@/lib/constants";
import { CarouselNavButton } from "@/components/ui/CarouselNavButton";

export interface CategoryCarouselProps {
  categories: MotorcycleCategory[];
  autoPlay?: boolean;
  interval?: number; // Not used, kept for API consistency
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scrolls the carousel horizontally by one card width plus gap
  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount = cardWidth + CAROUSEL_CONFIG.scrollGap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Centers scroll position on initial load for better visual balance
  // Only applies when there are 3 or fewer categories
  useEffect(() => {
    if (scrollContainerRef.current && categories.length <= 3) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollLeft = (scrollWidth - clientWidth) / 2;
      container.scrollLeft = scrollLeft;
    }
  }, [categories.length]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-[1200px] flex items-center justify-between px-4 md:px-12">
        {/* Left Arrow - Desktop - EXACT SAME STYLE AS FEATURED MODEL */}
        <div className="hidden md:block z-20">
          <CarouselNavButton
            direction="left"
            onClick={() => scroll("left")}
            ariaLabel="Previous categories"
            className="static translate-y-0 w-16 h-12 bg-transparent hover:scale-110 text-black transition-transform"
            iconClassName="w-8 h-8 text-black"
          />
        </div>

        {/* Scrollable Categories Container */}
        <div
          ref={scrollContainerRef}
          className="flex-1 flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-12 justify-start md:justify-center items-center"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-[280px] group cursor-pointer"
            >
              <Link
                href={category.href}
                className="flex flex-col w-full h-full"
              >
                {/* Image Box - Light Gray Background */}
                <div className="relative w-full aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, 300px"
                  />
                </div>

                {/* Text Below - Simple & Clean */}
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#1FA84F] transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow - Desktop - EXACT SAME STYLE AS FEATURED MODEL */}
        <div className="hidden md:block z-20">
          <CarouselNavButton
            direction="right"
            onClick={() => scroll("right")}
            ariaLabel="Next categories"
            className="static translate-y-0 w-16 h-12 bg-transparent hover:scale-110 text-black transition-transform"
            iconClassName="w-8 h-8 text-black"
          />
        </div>
      </div>

      {/* Mobile Arrows */}
      <div className="flex md:hidden gap-4 mt-6">
        <CarouselNavButton
          direction="left"
          onClick={() => scroll("left")}
          ariaLabel="Previous categories"
          className="static translate-y-0 w-12 h-10 text-black"
        />
        <CarouselNavButton
          direction="right"
          onClick={() => scroll("right")}
          ariaLabel="Next categories"
          className="static translate-y-0 w-12 h-10 text-black"
        />
      </div>
    </div>
  );
};

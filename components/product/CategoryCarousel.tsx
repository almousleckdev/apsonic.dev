"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotorcycleCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";

export interface CategoryCarouselProps {
  categories: MotorcycleCategory[];
  autoPlay?: boolean;
  interval?: number;
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of items to show at once (desktop = 3, mobile = 1)
  const ITEMS_PER_VIEW = 3;
  const maxIndex = Math.max(0, categories.length - ITEMS_PER_VIEW);

  const scrollLeft = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const scrollRight = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-[1200px] flex items-center justify-center px-14 md:px-16">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Previous Categories"
          className={cn(
            "absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-20",
            "w-10 h-10 rounded-full flex items-center justify-center",
            "transition-all duration-200 shadow-sm border",
            canScrollLeft
              ? "bg-white border-gray-200 text-gray-800 hover:bg-gray-100 hover:shadow-md cursor-pointer"
              : "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
          )}
        >
          <ChevronLeftIcon size={20} />
        </button>

        {/* Sliding viewport — clips to show exactly 3 items */}
        {/* gap-6 = 24px; item width = (100% - 2*24px) / 3; offset per step = itemWidth + gap */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: "24px",
              transform: `translateX(calc(-${currentIndex} * (100% / 3 - 16px + 24px)))`,
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 group cursor-pointer"
                style={{ width: "calc((100% - 48px) / 3)" }}
              >
                <Link href={category.href} className="flex flex-col w-full h-full">
                  {/* Image Box */}
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center rounded-xl overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className={cn(
                        "object-contain transition-transform duration-500 group-hover:scale-105",
                        category.imageClassName || "p-4"
                      )}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Label */}
                  <div className="mt-4 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#1FA84F] transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Next Categories"
          className={cn(
            "absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-20",
            "w-10 h-10 rounded-full flex items-center justify-center",
            "transition-all duration-200 shadow-sm border",
            canScrollRight
              ? "bg-white border-gray-200 text-gray-800 hover:bg-gray-100 hover:shadow-md cursor-pointer"
              : "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
          )}
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>

      {/* Dot Indicators */}
      {categories.length > ITEMS_PER_VIEW && (
        <div className="flex gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === currentIndex
                  ? "bg-[#1FA84F] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

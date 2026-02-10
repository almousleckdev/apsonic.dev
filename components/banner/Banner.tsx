"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BannerProps } from "@/lib/types/banner";
import { CAROUSEL_CONFIG } from "@/lib/constants";
import { BANNER_CONFIG } from "@/lib/constants/banner";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselDots } from "@/components/ui/CarouselDots";
import { DEFAULT_BANNER_ITEMS } from "@/lib/data/banners";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Banner: React.FC<BannerProps> = ({
  items = [],
  autoPlay = true,
  interval = CAROUSEL_CONFIG.defaultInterval,
  showText = true,
  showDots = true,
  height = "fullScreen",
  textPosition = "right",
  overlayOpacity = "medium",
  className,
  onSlideChange,
}) => {
  const bannerItems = items.length > 0 ? items : DEFAULT_BANNER_ITEMS;
  const containerRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { currentIndex, goToSlide, pause, resume } = useCarousel({
    itemsCount: bannerItems.length,
    autoPlay,
    interval,
  });

  const currentItem = bannerItems[currentIndex];

  React.useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  // GSAP Animation for Slide Changes
  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Animate Text
      if (textContainerRef.current) {
        const title = textContainerRef.current.querySelector("h1");
        const subtitle = textContainerRef.current.querySelector("h2");
        const desc = textContainerRef.current.querySelector("p");
        const btn = textContainerRef.current.querySelector(".banner-btn");

        const tl = gsap.timeline();

        // Check if text is on the right (custom layout request)
        // If textPosition is 'right', we move it further right and scale it up
        // If textPosition is 'left', we move it further left and scale it up
        // If textPosition is 'center', we move it to the center and scale it up

        if (title) {
          tl.fromTo(
            title,
            { opacity: 0, x: 50, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
          );
        }
        if (subtitle) {
          tl.fromTo(
            subtitle,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.6",
          );
        }
        if (desc) {
          tl.fromTo(
            desc,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.6",
          );
        }
        if (btn) {
          tl.fromTo(
            btn,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.6",
          );
        }
      }

      // Animate Image/Background
      // Smooth zoom effect for the background image
      const bgImage = containerRef.current.querySelector(".banner-bg-image");
      if (bgImage) {
        gsap.fromTo(
          bgImage,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
        );
      }
    },
    { scope: containerRef, dependencies: [currentIndex] },
  );

  const heightClass = BANNER_CONFIG.height[height];
  // We override position class if we want specific placement
  // const positionClass = BANNER_CONFIG.textPosition[textPosition];
  const overlayColor = BANNER_CONFIG.overlay[overlayOpacity];

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden block", // Removed flex items-center
        heightClass,
        className,
      )}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Background Media - Carousel */}
      <AnimatePresence mode="wait">
        <div
          key={currentIndex}
          className="absolute inset-0 z-0 banner-bg-image"
        >
          {currentItem.type === "image" ? (
            <Image
              src={currentItem.src}
              alt={currentItem.title || `Banner ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
            />
          ) : (
            <video
              src={currentItem.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          {showText && (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: overlayColor }}
            />
          )}
        </div>
      </AnimatePresence>

      {/* Text Content - Positioned at Bottom Left */}
      {showText && currentItem && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div
            ref={textContainerRef}
            className="absolute pointer-events-auto"
            style={{
              bottom: "80px",
              left: "5%",
              maxWidth: "600px",
            }}
          >
            {currentItem.title && (
              <h1
                className="font-bold mb-2 tracking-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                  textShadow: "0 4px 40px rgba(0,0,0,0.6)",
                }}
              >
                {currentItem.title}
              </h1>
            )}

            {currentItem.subtitle && (
              <h2
                className="font-semibold mb-4 uppercase tracking-[0.2em] text-white"
                style={{
                  fontSize: "1.25rem",
                  textShadow: "0 2px 20px rgba(0,0,0,0.4)",
                }}
              >
                {currentItem.subtitle}
              </h2>
            )}

            {currentItem.description && (
              <p
                className="font-light text-gray-200 mb-4"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                {currentItem.description}
              </p>
            )}

            {currentItem.link && (
              <div className="banner-btn">
                <Link
                  href={currentItem.link}
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-white/20"
                >
                  了解更多
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Carousel Dots */}
      {showDots && bannerItems.length > 1 && (
        <CarouselDots
          count={bannerItems.length}
          currentIndex={currentIndex}
          onDotClick={goToSlide}
          className={cn(
            "absolute z-30 left-1/2 -translate-x-1/2",
            BANNER_CONFIG.spacing.dotsBottom,
          )}
        />
      )}
    </section>
  );
};

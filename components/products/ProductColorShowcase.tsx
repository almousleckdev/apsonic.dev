"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Safe MotionDiv creation that works with both v11 and v12
const MotionDiv = (
  (motion as any).create
    ? (motion as any).create("div")
    : (motion as any).div || motion.div
) as React.ComponentType<Record<string, unknown>>;

export interface ColorShowcaseVariant {
  id: string;
  name: string;
  description?: string;
  imageSrc: string;
  dotColor: string;
  imageAlt?: string;
}

export interface ProductColorShowcaseProps {
  title: string;
  subtitle: string;
  variants: ColorShowcaseVariant[];
  initialVariantId?: string;
  className?: string;
}

/**
 * ProductColorShowcase
 * Clean studio-style color switcher with gray background and smooth animations
 */
export const ProductColorShowcase: React.FC<ProductColorShowcaseProps> = ({
  title,
  subtitle,
  variants,
  initialVariantId,
  className,
}) => {
  const reduceMotion = useReducedMotion();
  const easing: number[] = [0.22, 1, 0.36, 1];

  const initial = useMemo(() => {
    if (!variants.length) return null;
    if (!initialVariantId) return variants[0];
    return variants.find((v) => v.id === initialVariantId) ?? variants[0];
  }, [initialVariantId, variants]);

  const [active, setActive] = useState<ColorShowcaseVariant | null>(initial);

  const activeIndex = useMemo(() => {
    if (!active) return -1;
    return variants.findIndex((v) => v.id === active.id);
  }, [active, variants]);

  const setByIndex = useCallback(
    (idx: number) => {
      const next = variants[idx];
      if (next) setActive(next);
    },
    [variants],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!variants.length) return;
      if (activeIndex < 0) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setByIndex((activeIndex - 1 + variants.length) % variants.length);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setByIndex((activeIndex + 1) % variants.length);
      }
    },
    [activeIndex, setByIndex, variants.length, variants],
  );

  if (!active) return null;

  return (
    <section
      className={cn(
        "w-full py-20 sm:py-24 overflow-hidden",
        "bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200",
        className,
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] lg:h-[560px]"
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-label="Color selector"
        >
          {/* Top-left copy - Animates with bike color change */}
          <div className="absolute top-4 sm:top-8 md:top-12 left-4 sm:left-12 md:left-20 z-20 pointer-events-none max-w-[65%] sm:max-w-[320px]">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={active.id}
                initial={
                  reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: easing }}
              >
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wide leading-relaxed">
                  {title}
                </h3>
                <p className="mt-3 text-white/90 text-base sm:text-lg font-light tracking-wide">
                  {subtitle}
                </p>
              </MotionDiv>
            </AnimatePresence>
          </div>

          {/* Top-right active label - Animates with bike color change */}
          <div className="hidden sm:block absolute top-8 sm:top-12 right-12 sm:right-20 z-20 pointer-events-none text-right max-w-[320px]">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={active.id}
                initial={
                  reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: easing }}
              >
                <div className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
                  {active.name}
                </div>
                {active.description && (
                  <div className="mt-3 text-white/80 text-sm sm:text-base font-light tracking-wide">
                    {active.description}
                  </div>
                )}
              </MotionDiv>
            </AnimatePresence>
          </div>

          {/* Main image - Enhanced animation */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-2 sm:px-6">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={active.id}
                initial={
                  reduceMotion
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.85, y: 40 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: easing }}
                className="relative w-full h-full max-w-6xl"
              >
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt ?? active.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-2xl"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </MotionDiv>
            </AnimatePresence>
          </div>

          {/* Bottom dot selector - Positioned lower */}
          <MotionDiv
            className="absolute bottom-2 sm:bottom-4 left-0 right-0 z-20 flex items-center justify-center"
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: 0.4,
              ease: easing,
            }}
          >
            <div className="flex items-center gap-4">
              {variants.map((v, index) => {
                const isActive = v.id === active.id;
                return (
                  <MotionDiv
                    key={v.id}
                    initial={reduceMotion ? { scale: 1 } : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(v)}
                      className={cn(
                        "relative flex items-center justify-center rounded-full transition-all duration-200",
                        isActive
                          ? "ring-2 ring-white/60"
                          : "ring-1 ring-transparent hover:ring-white/40",
                      )}
                      style={{ width: 28, height: 28 }}
                      aria-label={`Select color ${v.name}`}
                      aria-pressed={isActive}
                    >
                      <span
                        className="rounded-full"
                        style={{
                          width: 16,
                          height: 16,
                          backgroundColor: v.dotColor,
                        }}
                      />
                    </button>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

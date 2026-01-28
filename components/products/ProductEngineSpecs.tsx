"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { EngineSpec } from "@/lib/types/products";

const MotionDiv = motion.div as unknown as React.ComponentType<
  Record<string, unknown>
>;

/**
 * Enhanced Number Counter Component with smooth easing animation
 */
const AnimatedNumber: React.FC<{ value: string; delay?: number }> = ({
  value,
  delay = 0,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[0]);
    const duration = 2000; // Increased to 2 seconds for smoother animation
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;

        // Easing function (easeOutCubic) for smooth deceleration
        const progress = frame / totalFrames;
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const current = targetNumber * easedProgress;

        if (frame >= totalFrames) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          const formatted =
            targetNumber % 1 === 0
              ? Math.floor(current).toString()
              : current.toFixed(1);
          setDisplayValue(value.replace(numericMatch[0], formatted));
        }
      }, 1000 / fps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayValue}</span>;
};

interface ProductEngineSpecsProps {
  title: string;
  description: string;
  backgroundImage: string;
  specs: EngineSpec[];
  disclaimer?: string;
  className?: string;
}

export const ProductEngineSpecs: React.FC<ProductEngineSpecsProps> = ({
  title,
  description,
  backgroundImage,
  specs,
  disclaimer,
  className,
}) => {
  const reduceMotion = useReducedMotion();
  const easing: number[] = [0.22, 1, 0.36, 1];

  return (
    <section
      className={cn(
        "relative w-full h-auto min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden bg-gray-900 py-20 sm:py-0 sm:h-screen",
        className,
      )}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center lg:object-right opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-20">
        <div className="max-w-xl flex flex-col items-start gap-8 sm:gap-12">
          {/* Title and Description - Animates FIRST with fade + slide from left */}
          <MotionDiv
            className="space-y-4"
            initial={
              reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              ease: easing,
              delay: 0,
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-wide drop-shadow-lg">
              新款TYS <span style={{ color: "#C9A05C" }}>162</span> 发动机
            </h2>
            <MotionDiv
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.3 }}
            >
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-md">
                {description}
              </p>
            </MotionDiv>
          </MotionDiv>

          {/* Specs - Animate AFTER title with stagger and fade + slide */}
          <MotionDiv
            className="w-full space-y-4 sm:space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={{
              hidden: { opacity: 1 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.2,
                  delayChildren: 0.6, // Start after title animation
                },
              },
            }}
          >
            {specs.map((spec, index) => (
              <MotionDiv
                key={index}
                style={{
                  maxWidth: "400px",
                  backgroundColor: "#2A2A2A",
                }}
                className="backdrop-blur-sm border border-gray-800 rounded-lg px-6 py-5 sm:py-8 flex items-center justify-between group hover:bg-[#333333] transition-all duration-300"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: reduceMotion ? 0 : -100,
                    scale: reduceMotion ? 1 : 0.9,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: reduceMotion ? 0 : 0.8,
                      ease: easing,
                    },
                  },
                }}
              >
                <span className="text-xs sm:text-sm text-gray-400 font-light tracking-wider uppercase">
                  {spec.label}
                </span>
                <span
                  className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
                  style={{ color: "#C9A05C" }}
                >
                  <AnimatedNumber
                    value={spec.value}
                    delay={600 + index * 200} // Delay starts after title + stagger
                  />
                </span>
              </MotionDiv>
            ))}
          </MotionDiv>

          {/* Disclaimer - Animates LAST */}
          {disclaimer && (
            <MotionDiv
              initial={
                reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: 1.4, // After all specs
                ease: easing,
              }}
              className="mt-4"
            >
              <p className="text-xs sm:text-sm text-gray-400 font-light tracking-wide">
                {disclaimer}
              </p>
            </MotionDiv>
          )}
        </div>
      </div>
    </section>
  );
};

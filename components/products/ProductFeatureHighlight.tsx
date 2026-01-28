"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const MotionDiv = motion.div as unknown as React.ComponentType<
  Record<string, unknown>
>;
const MotionH2 = motion.h2 as unknown as React.ComponentType<
  Record<string, unknown>
>;
const MotionP = motion.p as unknown as React.ComponentType<
  Record<string, unknown>
>;

interface ProductFeatureHighlightProps {
  title: string;
  description: string;
  image: string;
  bottomText?: string;
  className?: string;
}

export const ProductFeatureHighlight: React.FC<
  ProductFeatureHighlightProps
> = ({ title, description, image, bottomText, className }) => {
  const reduceMotion = useReducedMotion();
  const easing: number[] = [0.22, 1, 0.36, 1];
  const ref = React.useRef(null);

  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full h-[80vh] sm:h-screen min-h-[500px] sm:min-h-[700px] overflow-hidden bg-black",
        className,
      )}
    >
      {/* ANIMATED BACKGROUND IMAGE with Parallax */}
      <MotionDiv
        className="absolute inset-0 z-0"
        style={{ y: reduceMotion ? 0 : y }}
        initial={
          reduceMotion ? { scale: 1, opacity: 1 } : { scale: 1.15, opacity: 0 }
        }
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 1.5, ease: easing }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-[center_65%]"
        />
        <div className="absolute inset-0 bg-black/10" />
      </MotionDiv>

      {/* CONTENT LAYER */}
      <div className="relative z-20 h-full flex flex-col items-center text-center pointer-events-none">
        {/* TOP SAFE TEXT ZONE - Enhanced Animations */}
        <MotionDiv
          className="pt-[6vh] max-w-3xl px-6 space-y-6 pointer-events-auto"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: 0.2,
            ease: easing,
          }}
        >
          <MotionH2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] text-white"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            initial={
              reduceMotion
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: -100, scale: 0.85 }
            }
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: 0.4,
              ease: easing,
            }}
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </MotionH2>

          <MotionP
            className="text-xs sm:text-sm md:text-base text-gray-200 font-light leading-relaxed max-w-xl mx-auto"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
            initial={
              reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: 0.6,
              ease: easing,
            }}
            whileHover={{ scale: 1.01 }}
          >
            {description}
          </MotionP>
        </MotionDiv>

        {/* MIDDLE BREATHING SPACE */}
        <div className="flex-1" />

        {/* BOTTOM TEXT - Larger and More Animated */}
        {bottomText && (
          <MotionDiv
            className="absolute bottom-[2vh] left-0 right-0 text-center pointer-events-auto"
            initial={
              reduceMotion
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 60, scale: 0.85 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: 0.8,
              ease: easing,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <p
              className="text-sm sm:text-base text-white tracking-wide font-light"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
            >
              {bottomText}
            </p>
          </MotionDiv>
        )}
      </div>
    </section>
  );
};

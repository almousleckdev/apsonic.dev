import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { KeyMetric, TechSpecItem } from "@/lib/types/products";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// TS in this repo (moduleResolution: bundler) can resolve a minimal MotionProps type
// that doesn't include `initial/animate/exit/whileInView/variants` during production builds.
// This keeps runtime behavior identical while unblocking typechecking on Vercel.
const MotionDiv = motion.div as unknown as React.ComponentType<
  Record<string, unknown>
>;

interface ProductSpecificationProps {
  keyMetrics: KeyMetric[];
  detailedSpecs: TechSpecItem[];
  className?: string;
}

const CountUp = ({
  value,
  label,
  unit,
  subValue,
}: {
  value: string;
  label: string;
  unit: string;
  subValue?: string;
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = spanRef.current;
      if (!el) return;

      // Check if value is numeric-ish
      const numericPart = parseFloat(value);

      if (!isNaN(numericPart)) {
        gsap.from(el, {
          textContent: 0,
          duration: 2.5, // Slower, smoother animation
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reset", // Replay when entering view
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center px-4"
    >
      <span className="text-base sm:text-lg text-gray-600 font-medium mb-6 h-8 flex items-center text-center">
        {label}
      </span>

      <div className="flex items-start">
        {subValue && (
          <span className="text-2xl font-light text-gray-400 mt-2 mr-1">
            {subValue}
          </span>
        )}
        <span className="text-7xl sm:text-8xl font-normal text-gray-900 tracking-tight leading-none">
          <span ref={spanRef}>{value}</span>
        </span>
      </div>

      <span className="text-base sm:text-lg text-gray-500 font-medium mt-6">{unit}</span>
    </div>
  );
};

export const ProductSpecification: React.FC<ProductSpecificationProps> = ({
  keyMetrics,
  detailedSpecs,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const easing: number[] = [0.22, 1, 0.36, 1];

  return (
    <section className={cn("w-full py-24 bg-[#f5f5f7]", className)}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* 1. Header Section */}
        <MotionDiv
          className="text-center mb-20"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: easing }}
        >
          <h2 className="text-3xl font-light text-gray-900 tracking-wider">
            技术参数
          </h2>
        </MotionDiv>

        {/* 2. Key Performance Metrics */}
        <MotionDiv
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 mb-20 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 1 },
            show: { opacity: 1 },
          }}
        >
          {keyMetrics.map((metric, idx) => (
            <React.Fragment key={idx}>
              <div className="relative">
                <CountUp
                  value={metric.value}
                  label={metric.label}
                  unit={metric.unit}
                  subValue={metric.subValue}
                />
                {/* Vertical Separators */}
                {idx < keyMetrics.length - 1 && (idx + 1) % 4 !== 0 && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gray-300"
                    style={{ right: 0 }}
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </MotionDiv>

        {/* 3. Interactive Toggle Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "px-10 py-2 border rounded-full transition-all duration-300 bg-[#f5f5f7]",
              "text-[15px] text-gray-600 font-normal tracking-wide",
              "border-gray-300 hover:border-gray-500 hover:text-gray-900",
            )}
          >
            {isExpanded ? "收起参数" : "完整参数"}
          </button>
        </div>

        {/* 4. Detailed Specification Table */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 sm:p-8 rounded-sm">
                {detailedSpecs.map((spec, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.02, duration: 0.3 }}
                    className="flex text-[14px]"
                  >
                    {/* Label Section - Gray Background */}
                    <div className="w-[40%] bg-[#d1d1d1] flex items-center px-4 py-3 text-gray-700 font-normal">
                      {spec.label}
                    </div>
                    {/* Value Section - White Background */}
                    <div className="w-[60%] bg-[#f9f9f9] flex items-center px-4 py-3 text-gray-600 font-light">
                      {spec.value}
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

"use client";

import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  once?: boolean;
}

/**
 * AnimatedCounter component for smooth number transitions.
 * Uses Framer Motion's animate function for high-performance updates
 * that bypass React re-renders during the animation.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 1.5,
  suffix = "",
  prefix = "",
  className,
  once = true,
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once, amount: 0.5 });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      
      // Initialize with start value
      node.textContent = `${prefix}${from.toLocaleString()}${suffix}`;

      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          const formatted = Math.floor(value).toLocaleString();
          node.textContent = `${prefix}${formatted}${suffix}`;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, from, to, duration, prefix, suffix]);

  return (
    <span
      ref={nodeRef}
      className={`font-mono tabular-nums inline-block min-w-[2ch] whitespace-nowrap ${className || ""}`}
    >
      {prefix}
      {from.toLocaleString()}
      {suffix}
    </span>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "@/lib/design-tokens";

interface ProductHighlightProps {
  title?: string;
  description?: string;
  images: {
    src: string;
    alt: string;
    color: string;
  }[];
  buttonText?: string;
  buttonLink?: string;
}

export const ProductHighlight: React.FC<ProductHighlightProps> = ({
  title = "APSONIC AP150 · Built for Africa",
  description = "A full-size product shot that clearly shows the complete motorcycle design, proportions, and stance — the main image users expect before reading features",
  images,
  buttonText = "View Real Scenarios",
  buttonLink = "#",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1360px] mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-2">Product Highlights</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            {description}
          </p>
        </div>

        {/* Image Container */}
        <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-6">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[500px] flex items-center justify-center"
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain p-8"
              priority
            />
          </motion.div>

          {/* Color Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "ring-2 ring-offset-2 ring-brand-green scale-125"
                    : "opacity-60 hover:opacity-100"
                }`}
                style={{ backgroundColor: image.color }}
                aria-label={`View ${image.alt}`}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-start">
          <a
            href={buttonLink}
            className="inline-flex items-center gap-2 text-brand-green font-medium hover:gap-3 transition-all"
          >
            {buttonText}
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

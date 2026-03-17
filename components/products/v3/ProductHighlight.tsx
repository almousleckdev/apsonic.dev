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
  title = "APSONIC AP150 · 为非洲而生",
  description = "全尺寸产品照，清晰展示完整的摩托车设计、比例和姿态——这是用户在阅读功能前所期待的主图",
  images,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[1360px] mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-2">产品亮点</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            {description}
          </p>
        </div>

        {/* Image Container */}
        <div className="relative mb-6">
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
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "ring-2 ring-offset-2 ring-gray-900 scale-125"
                    : "opacity-60 hover:opacity-100"
                }`}
                style={{ backgroundColor: image.color }}
                aria-label={`View ${image.alt}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

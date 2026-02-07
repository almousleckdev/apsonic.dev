"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface RealUsageScenariosProps {
  title?: string;
  description?: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export const RealUsageScenarios: React.FC<RealUsageScenariosProps> = ({
  title = "Real Usage Scenarios",
  description = "See how users around Africa use our motorcycles in their daily lives, whether for cargo transport, daily commuting or agriculture work.",
  images,
}) => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[1360px] mx-auto px-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            {description}
          </p>
        </motion.div>

        {/* Image Grid - Custom Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row - 3 images */}
          {images.slice(0, 3).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Second Row - 3 images with middle one larger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
          >
            <Image
              src={images[3].src}
              alt={images[3].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Middle image - larger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group md:scale-110 md:z-10"
          >
            <Image
              src={images[4].src}
              alt={images[4].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
          >
            <Image
              src={images[5].src}
              alt={images[5].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

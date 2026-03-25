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
  title = "真实使用场景",
  description = "看看非洲各地的用户如何在日常生活中使用我们的摩托车，无论是货物运输、日常通勤还是农业工作。",
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
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Standardized Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
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
      </div>
    </section>
  );
};

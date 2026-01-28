"use client";

import React from "react";
import { FeaturedModel, MotorcycleCategory } from "@/lib/types";
import { FeaturedModelCarousel } from "./FeaturedModelCarousel";
import { CategoryCarousel } from "./CategoryCarousel";
import { colors, spacing } from "@/lib/design-tokens";
import {
  DEFAULT_FEATURED_MODELS,
  DEFAULT_CATEGORIES,
} from "@/lib/data/featured-models";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants/animations";

export interface RecommendedModelsProps {
  featuredModels?: FeaturedModel[];
  categories?: MotorcycleCategory[];
  className?: string;
}

export const RecommendedModels: React.FC<RecommendedModelsProps> = ({
  featuredModels = DEFAULT_FEATURED_MODELS,
  categories = DEFAULT_CATEGORIES,
  className,
}) => {
  return (
    <section
      className={cn("w-full", spacing.section.vertical, className)}
      style={{ backgroundColor: colors.background.white }}
    >
      <motion.div
        variants={ANIMATION_VARIANTS.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Featured Model Carousel */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeUp}
          className="mb-16 lg:mb-24"
        >
          <FeaturedModelCarousel models={featuredModels} autoPlay />
        </motion.div>

        {/* Category Carousel */}
        <motion.div variants={ANIMATION_VARIANTS.fadeUp}>
          <CategoryCarousel categories={categories} autoPlay={false} />
        </motion.div>
      </motion.div>
    </section>
  );
};

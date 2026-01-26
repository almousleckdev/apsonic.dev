'use client';

import { HomeBanner } from '@/components/banner/HomeBanner';
import { RecommendedModels } from '@/components/product/RecommendedModels';
import { ServiceSupport } from '@/components/service';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/lib/constants/animations';

export default function Home() {
  return (
    <main className="relative">
      <HomeBanner autoPlay={true} interval={5000} />

      <motion.div
        variants={ANIMATION_VARIANTS.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.05 }}
        className="space-y-0"
      >
        <motion.section variants={ANIMATION_VARIANTS.fadeUp} className="py-20 lg:py-32">
          <RecommendedModels />
        </motion.section>

        <motion.section variants={ANIMATION_VARIANTS.fadeUp} className="py-20 lg:py-32">
          <ServiceSupport />
        </motion.section>
      </motion.div>
    </main>
  );
}

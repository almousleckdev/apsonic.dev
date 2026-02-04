"use client";

import { VideoHero } from "@/components/banner/VideoHero";
import { RecommendedModels } from "@/components/product/RecommendedModels";
import { ServiceSupport } from "@/components/service";
import { motion } from "framer-motion";
import { NewsSection } from "@/components/news";

export default function Home() {
  return (
    <main className="relative bg-white">
      <VideoHero
        videos={["/videos/hero1.mp4", "/videos/hero2.mp4"]}
        interval={8000}
      />

      {/* Recommended Models Section */}
      <section className="py-6">
        <RecommendedModels />
      </section>

      {/* Service Support Section */}
      <section className="py-6">
        <ServiceSupport />
      </section>

      {/* News Section */}
      <section className="py-6">
        <NewsSection variant="overlay" light={true} />
      </section>
    </main>
  );
}

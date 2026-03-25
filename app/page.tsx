"use client";

import { VideoHero } from "@/components/banner/VideoHero";
import { RecommendedModels } from "@/components/product/RecommendedModels";
import { ServiceSupport } from "@/components/service";
import { motion } from "framer-motion";
import { NewsSection } from "@/components/news";

export default function Home() {
  return (
    <main className="relative bg-white space-y-0">
      <VideoHero
        videos={["/videos/hero2.mp4", "/videos/723_1770449481.mp4"]}
        interval={8000}
      />

      <RecommendedModels className="py-20" />

      <ServiceSupport className="pt-20 pb-10" />

      <NewsSection variant="overlay" light={true} className="pt-0 pb-20" />
    </main>
  );
}

"use client";

import React from "react";
import { videos } from "@/lib/data/about";

import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/design-tokens";

export const VideoShowcaseSection = () => {
  // Use the first video for the showcase, or the one intended for display
  const video = videos[0];

  return (
    <Section
      backgroundColor={colors.background.white}
      padding="none"
      className="my-8 shadow-lg"
    >
      <div className="w-full h-auto aspect-video relative">
        <video
          width="100%"
          height="100%"
          controls
          preload="metadata"
          className="w-full h-full object-cover"
          poster={video.thumbnail}
        >
          <source src={video.videoUrl} type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
      </div>
    </Section>
  );
};

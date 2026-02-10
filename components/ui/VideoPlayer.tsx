"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdPlayArrow, MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  youtubeId: string;
  thumbnail: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * VideoPlayer - Inline modal-style player
 * Displays a thumbnail with a play button, and opens an inline player when clicked.
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  youtubeId,
  thumbnail,
  title,
  description,
  className,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={cn(
        "relative group rounded-2xl overflow-hidden bg-gray-900 shadow-lg",
        className,
      )}
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative aspect-video w-full h-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <MdPlayArrow className="text-4xl" />
              </div>
            </div>
            {description && (
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-bold text-lg">{title}</h4>
                <p className="text-gray-300 text-sm line-clamp-1">
                  {description}
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="player"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative aspect-video w-full h-full bg-black"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(false);
              }}
              className="absolute top-4 right-4 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors backdrop-blur-md"
            >
              <MdClose className="text-2xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

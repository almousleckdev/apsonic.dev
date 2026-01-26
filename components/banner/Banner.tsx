'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BannerProps } from '@/lib/types/banner';
import { CAROUSEL_CONFIG } from '@/lib/constants';
import { BANNER_CONFIG } from '@/lib/constants/banner';
import { colors } from '@/lib/design-tokens';
import { useCarousel } from '@/hooks/useCarousel';
import { CarouselDots } from '@/components/ui/CarouselDots';
import { DEFAULT_BANNER_ITEMS } from '@/lib/data/banners';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ENTERPRISE_EASE } from '@/lib/constants/animations';

export const Banner: React.FC<BannerProps> = ({
  items = [],
  autoPlay = true,
  interval = CAROUSEL_CONFIG.defaultInterval,
  showText = true,
  showDots = true,
  height = 'fullScreen',
  textPosition = 'right',
  overlayOpacity = 'medium',
  className,
  onSlideChange,
}) => {
  const bannerItems = items.length > 0 ? items : DEFAULT_BANNER_ITEMS;

  const { currentIndex, goToSlide, pause, resume } = useCarousel({
    itemsCount: bannerItems.length,
    autoPlay,
    interval,
  });

  const currentItem = bannerItems[currentIndex];

  React.useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const heightClass = BANNER_CONFIG.height[height];
  const positionClass = BANNER_CONFIG.textPosition[textPosition];
  const overlayColor = BANNER_CONFIG.overlay[overlayOpacity];

  const content = (
    <section
      className={cn(
        'relative w-full flex items-center justify-center overflow-hidden',
        heightClass,
        className
      )}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Background Media - Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: ENTERPRISE_EASE }}
          className="absolute inset-0 z-0"
        >
          {currentItem.type === 'image' ? (
            <Image
              src={currentItem.src}
              alt={currentItem.title || `Banner ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
            />
          ) : (
            <video
              src={currentItem.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          {showText && (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: overlayColor }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      {showText && currentItem && (
        <div className={cn('relative z-10 w-full', heightClass, 'flex', positionClass)}>
          <div className={cn('container mx-auto w-full', BANNER_CONFIG.spacing.containerPadding)}>
            <div className={cn('w-full md:w-3/4 lg:w-2/3', BANNER_CONFIG.spacing.textPadding)}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: textPosition === 'right' ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: textPosition === 'right' ? -40 : 40 }}
                  transition={{ duration: 1.0, ease: ENTERPRISE_EASE as any, delay: 0.2 }}
                  className="max-w-4xl"
                >
                  {currentItem.title && (
                    <h1
                      className="font-bold mb-6 tracking-tight"
                      style={{
                        fontSize: BANNER_CONFIG.typography.title.fontSize,
                        fontWeight: BANNER_CONFIG.typography.title.fontWeight,
                        lineHeight: 1.1,
                        color: '#FFFFFF',
                        textShadow: '0 4px 60px rgba(0,0,0,0.6)',
                      }}
                    >
                      {currentItem.title}
                    </h1>
                  )}

                  {currentItem.subtitle && (
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8, ease: ENTERPRISE_EASE as any }}
                      className="font-semibold mb-4 uppercase tracking-[0.2em] text-brand-green"
                      style={{
                        fontSize: '1rem',
                        textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                      }}
                    >
                      {currentItem.subtitle}
                    </motion.h2>
                  )}

                  {currentItem.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 1.0, ease: ENTERPRISE_EASE as any }}
                      className="font-light text-gray-200"
                      style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        maxWidth: '36rem',
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                      }}
                    >
                      {currentItem.description}
                    </motion.p>
                  )}

                  {currentItem.link && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.6, ease: ENTERPRISE_EASE as any }}
                      className="mt-10"
                    >
                      <Link
                        href={currentItem.link}
                        className="inline-flex items-center px-8 py-4 bg-brand-green text-white font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-green/20"
                      >
                        了解更多
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Dots */}
      {showDots && bannerItems.length > 1 && (
        <CarouselDots
          count={bannerItems.length}
          currentIndex={currentIndex}
          onDotClick={goToSlide}
          className={cn('absolute z-30 left-1/2 -translate-x-1/2', BANNER_CONFIG.spacing.dotsBottom)}
        />
      )}
    </section>
  );

  return content;
};

'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import { colors } from '@/lib/design-tokens';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SearchInput } from './SearchInput';
import { LanguageSelector, type Language } from './LanguageSelector';
import { MobileMenuButton } from './MobileMenuButton';
import { ProductsDropdown } from '@/components/products';

// Delay before closing dropdown to prevent accidental closing
const DROPDOWN_CLOSE_DELAY = 150;

// TS in this repo (moduleResolution: bundler) can resolve a minimal MotionProps type
// that doesn't include `initial/animate/exit` on motion components during production builds.
// This keeps runtime behavior identical while unblocking typechecking on Vercel.
const MotionDiv = motion.div as unknown as React.ComponentType<Record<string, unknown>>;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMobileMenuToggle = () => setIsMobileMenuOpen((prev) => !prev);
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  const openDropdown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, DROPDOWN_CLOSE_DELAY);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: '#111111',
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
      }}
    >
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex relative">
            <Navigation
              items={NAV_ITEMS}
              onProductsHover={openDropdown}
              onProductsLeave={closeDropdown}
            />
            {isProductsDropdownOpen && (
              <ProductsDropdown
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              />
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <SearchInput variant="dark" className="w-[180px]" size="sm" />
            <LanguageSelector value={language} onChange={setLanguage} />
          </div>

          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={handleMobileMenuToggle} />
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MotionDiv
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed inset-0 top-20 z-40 overflow-y-auto"
              style={{ backgroundColor: '#111111' }}
            >
              <nav className="container mx-auto px-4 py-8 flex flex-col gap-8">
                <Navigation
                  items={NAV_ITEMS}
                  className="flex-col items-start gap-6"
                  onItemClick={handleMobileMenuClose}
                />

                <div className="flex flex-col gap-6 pt-6 border-t border-white/10">
                  <div className="space-y-2">
                    <span className="text-[10px] text-white/60 uppercase tracking-widest font-medium">搜索车型</span>
                    <SearchInput className="w-full" variant="dark" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] text-white/60 uppercase tracking-widest font-medium">语言设置</span>
                    <LanguageSelector value={language} onChange={setLanguage} />
                  </div>
                </div>

                <div className="mt-auto pt-12 pb-8">
                  <Logo showTagline={false} size="sm" className="opacity-30" />
                </div>
              </nav>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchInput } from "./SearchInput";
import { LanguageSelector, type Language } from "./LanguageSelector";
import { MobileMenuButton } from "./MobileMenuButton";
import { ProductsDropdown } from "@/components/products";

// Delay before closing dropdown to prevent accidental closing
const DROPDOWN_CLOSE_DELAY = 150;

// TS in this repo (moduleResolution: bundler) can resolve a minimal MotionProps type
// that doesn't include `initial/animate/exit` on motion components during production builds.
// This keeps runtime behavior identical while unblocking typechecking on Vercel.
const MotionDiv = motion.div as unknown as React.ComponentType<
  Record<string, unknown>
>;

const MotionHeader = motion.header as unknown as React.ComponentType<
  Record<string, unknown>
>;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("zh");
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Pages with transparent header (Hero Video pages)
  const isTransparentPage =
    pathname === "/" || pathname.startsWith("/products/");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const diff = latest - previous;

    // Update scrolled state
    setIsScrolled(latest > 50);

    // Clear existing timeout when scrolling
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Hide navbar if scrolling down and past 100px
    if (diff > 0 && latest > 100) {
      setIsVisible(false);
    }
    // Show navbar if scrolling up
    else if (diff < 0) {
      setIsVisible(true);
    }

    // Set timeout to detect when scrolling stops (e.g. 500ms)
    scrollTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 500);
  });

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
    <>
      <MotionHeader
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300"
      style={{
        backgroundColor:
          isScrolled || isMobileMenuOpen || !isTransparentPage
            ? "#058B4F"
            : "transparent",
        borderBottom: isScrolled ? `1px solid rgba(9, 16, 11, 0.1)` : "none",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-10">
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

          <div className="hidden md:flex items-center gap-3">
            <SearchInput
              variant="dark"
              className="w-[180px]"
              size="md"
              placeholder=""
            />
            <LanguageSelector
              value={language}
              onChange={setLanguage}
              variant="dark"
              size="md"
              options={[
                { value: "zh", label: "中" },
                { value: "fr", label: "Fr" },
                { value: "en", label: "En" },
              ]}
            />
          </div>

          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={handleMobileMenuToggle}
          />
        </div>
      </div>
    </MotionHeader>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-20 z-40 overflow-y-auto"
            style={{ backgroundColor: "#058B4F" }}
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-8">
              <Navigation
                items={NAV_ITEMS}
                className="flex-col items-start gap-6"
                onItemClick={handleMobileMenuClose}
              />

              <div className="flex flex-col gap-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-medium">
                    搜索车型
                  </span>
                  <SearchInput
                    className="w-full"
                    variant="dark"
                    size="md"
                    placeholder=""
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-medium">
                    语言设置
                  </span>
                  <LanguageSelector
                    value={language}
                    onChange={setLanguage}
                    variant="dark"
                    size="md"
                    options={[
                      { value: "zh", label: "中" },
                      { value: "fr", label: "Fr" },
                      { value: "en", label: "En" },
                    ]}
                  />
                </div>
              </div>

              <div className="mt-auto pt-12 pb-8">
                <Logo showTagline={false} size="sm" className="opacity-30" />
              </div>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

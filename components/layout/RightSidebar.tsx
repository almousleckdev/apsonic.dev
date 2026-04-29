"use client";

import React, { useState } from "react";
import Link from "next/link";
import { colors } from "@/lib/design-tokens";
import { HelpIcon, ChatIcon, LocationIcon } from "@/components/ui/Icons";
import { Tooltip } from "@/components/ui/Tooltip";
import { SIDEBAR_ICONS } from "@/lib/data/sidebar";
import { AIChat } from "@/components/consultation/AIChat";
import { cn } from "@/lib/utils";

// Map icon names to components
const ICON_MAP = {
  help: HelpIcon,
  chat: ChatIcon,
  location: LocationIcon,
};

import { useScroll, useMotionValueEvent } from "framer-motion";

// ... existing imports

export const RightSidebar: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleIconHover = (iconId: string) => {
    setHoveredIcon(iconId);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  return (
    <>
      <aside
        className="hidden sm:flex fixed right-[-8px] md:right-[-12px] hover:right-0 z-40 flex flex-col items-center gap-2 py-6 px-1.5 rounded-l-2xl transition-all duration-300 shadow-lg backdrop-blur-md"
        style={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0.1)",
          borderTop: isScrolled
            ? "1px solid rgba(0, 0, 0, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.2)",
          borderBottom: isScrolled
            ? "1px solid rgba(0, 0, 0, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.2)",
          borderLeft: isScrolled
            ? "1px solid rgba(0, 0, 0, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.2)",
          borderRight: "none",
          top: "35%",
          transform: "translateY(-50%)",
          boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
        }}
        onMouseLeave={handleIconLeave}
      >
        {SIDEBAR_ICONS.map((item) => {
          const isHovered = hoveredIcon === item.id;
          const IconComponent = ICON_MAP[item.iconName];

          const handleClick = () => {
            if (item.id === "chat") {
              handleChatClick();
            } else if (item.onClick) {
              item.onClick();
            }
          };

          const iconButton = (
            <button
              onClick={handleClick}
              onMouseEnter={() => handleIconHover(item.id)}
              className={cn(
                "p-1.5 md:p-2 rounded-lg transition-all",
                "hover:scale-110",
                isHovered && "scale-110",
              )}
              style={{
                color: isScrolled ? colors.text.primary : "#FFFFFF",
                backgroundColor: isHovered
                  ? "rgba(31, 168, 79, 0.8)"
                  : "transparent",
              }}
              aria-label={item.label}
            >
              <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          );

          const content = item.href ? (
            <Link href={item.href} className="block">
              {iconButton}
            </Link>
          ) : (
            iconButton
          );

          return (
            <Tooltip
              key={item.id}
              content={item.label}
              position="left"
              show={isHovered}
            >
              {content}
            </Tooltip>
          );
        })}
      </aside>

      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

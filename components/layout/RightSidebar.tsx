'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { colors } from '@/lib/design-tokens';
import {
  HelpIcon,
  ChatIcon,
  LocationIcon,
} from '@/components/ui/Icons';
import { Tooltip } from '@/components/ui/Tooltip';
import { SIDEBAR_ICONS } from '@/lib/data/sidebar';
import { AIChat } from '@/components/consultation/AIChat';
import { cn } from '@/lib/utils';

// Map icon names to components
const ICON_MAP = {
  help: HelpIcon,
  chat: ChatIcon,
  location: LocationIcon,
};

export const RightSidebar: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
        className="hidden sm:flex fixed right-0 z-40 flex flex-col items-center gap-2 py-6 px-1.5 rounded-l-2xl transition-all shadow-2xl"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          borderRight: 'none',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        onMouseLeave={handleIconLeave}
      >
        {SIDEBAR_ICONS.map((item) => {
          const isHovered = hoveredIcon === item.id;
          const IconComponent = ICON_MAP[item.iconName];

          const handleClick = () => {
            if (item.id === 'chat') {
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
                'p-1.5 md:p-2 rounded-lg transition-all',
                'hover:scale-110',
                isHovered && 'scale-110'
              )}
              style={{
                color: colors.text.primary,
                backgroundColor: isHovered ? colors.ui.hover : 'transparent',
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

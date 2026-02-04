import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import { colors, effects } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export interface CarouselNavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  iconClassName?: string;
  ariaLabel: string;
}

export const CarouselNavButton: React.FC<CarouselNavButtonProps> = ({
  direction,
  onClick,
  className,
  iconClassName,
  ariaLabel,
}) => {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;
  // Default positioning classes if no className provided (preserve backward compatibility if needed,
  // but here we basically trust the consumer to override if they pass className)
  const isDefault = !className;
  const positionClass = direction === "left" ? "left-4" : "right-4";

  return (
    <button
      onClick={onClick}
      className={cn(
        isDefault
          ? [
              "absolute top-1/2 -translate-y-1/2 z-20",
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-black/10 backdrop-blur-sm",
              "hover:bg-black/20",
              effects.transition.default,
              positionClass,
            ]
          : [
              "flex items-center justify-center cursor-pointer", // Minimal base for custom
              className,
            ],
      )}
      aria-label={ariaLabel}
    >
      <Icon
        size={24}
        className={cn(isDefault ? "text-black" : "", iconClassName)}
      />
    </button>
  );
};

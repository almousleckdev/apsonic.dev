"use client";

import React from "react";
import { SearchIcon } from "@/components/ui/Icons";
import { colors } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export interface SearchInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  placeholder?: string;
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

/**
 * Unified SearchInput - Optimized for both Header (Dark) and Product (Light) areas.
 */
export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  className,
  value,
  variant = "light",
  size = "md",
  ...props
}) => {
  const isDark = variant === "dark";

  const sizeClasses = {
    sm: "h-9 px-4 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const variantStyles = isDark
    ? {
        input:
          "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-brand-green/50 focus:bg-white/15",
        icon: "text-white/40",
        ring: "ring-brand-green/20",
      }
    : {
        input:
          "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-green/50 focus:bg-white",
        icon: "text-gray-400",
        ring: "ring-brand-green/10",
      };

  return (
    <div className={cn("relative group w-full", className)}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={cn(
          "w-full rounded-full pl-11 outline-none border transition-all duration-200",
          "focus:ring-4",
          sizeClasses[size as keyof typeof sizeClasses],
          variantStyles.input,
          variantStyles.ring,
        )}
        {...props}
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <SearchIcon
          className={cn(
            "w-4 h-4 transition-colors duration-200 group-focus-within:text-brand-green",
            variantStyles.icon,
          )}
        />
      </div>
    </div>
  );
};

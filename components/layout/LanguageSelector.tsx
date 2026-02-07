import React from "react";
import { colors } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export type Language = "zh" | "fr" | "en";

export interface LanguageOption {
  value: Language;
  label: string;
}

export interface LanguageSelectorProps {
  value: Language;
  onChange: (language: Language) => void;
  options?: LanguageOption[];
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md";
}

const defaultOptions: LanguageOption[] = [
  { value: "zh", label: "中文" },
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  value,
  onChange,
  options = defaultOptions,
  className,
  variant = "light",
  size = "md",
}) => {
  const isDark = variant === "dark";

  const sizeClasses = {
    sm: "h-9 px-4 text-xs",
    md: "h-10 px-5 text-sm",
  };

  const variantStyles = isDark
    ? {
        select:
          "bg-white/10 border-white/20 text-white focus:border-brand-green/50 focus:bg-white/15",
        icon: "text-white/40",
      }
    : {
        select:
          "bg-gray-50 border-gray-200 text-gray-900 focus:border-brand-green/50 focus:bg-white",
        icon: "text-gray-400",
      };

  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Language)}
        className={cn(
          "w-full appearance-none rounded-full outline-none border transition-all duration-200",
          "cursor-pointer focus:ring-4 focus:ring-brand-green/20",
          "text-center", // Center text for compact labels
          "px-4", // Balanced padding since icon is gone
          sizeClasses[size],
          variantStyles.select,
        )}
        style={{
          // Remove default arrow in some browsers if appearance-none doesn't catch all
          WebkitAppearance: "none",
          MozAppearance: "none",
        }}
        aria-label="Select language"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-gray-900 text-white" // Keep dropdown options dark/readable
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

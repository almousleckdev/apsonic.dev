import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND_TAGLINE } from "@/lib/constants";
import { colors } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className,
  showTagline = false,
  size = "md",
}) => {
  const sizeClasses = {
    sm: { image: "h-4 w-auto", tagline: "text-[10px] mt-0.5" },
    md: { image: "h-5 w-auto", tagline: "text-xs mt-1" },
    lg: { image: "h-7 w-auto", tagline: "text-sm mt-1.5" },
  };

  const currentSize = sizeClasses[size];

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 group transition-opacity hover:opacity-90",
        className,
      )}
    >
      <div className="relative flex-shrink-0">
        <Image
          src="/images/logo/apsoniclogo.png"
          alt="APSONIC Logo"
          width={163}
          height={24}
          style={{ width: "auto", height: "auto" }}
          className={cn(
            currentSize.image,
            "object-contain transition-transform group-hover:scale-105",
          )}
          priority
        />
      </div>
      {showTagline && (
        <span
          className={cn(
            currentSize.tagline,
            "font-medium transition-colors",
            "hidden sm:block",
          )}
          style={{ color: colors.text.secondary }}
        >
          {BRAND_TAGLINE}
        </span>
      )}
    </Link>
  );
};

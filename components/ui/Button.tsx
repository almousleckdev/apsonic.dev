import React from "react";
import { effects } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      effects.radius.md,
    );

    const variants = {
      primary:
        "bg-brand-green text-white hover:bg-[#1B8F45] hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "bg-background-secondary text-text-primary border border-color-border hover:bg-background-tertiary hover:border-color-border-hover",
      outline:
        "bg-transparent text-brand-green border border-brand-green hover:bg-brand-green/10",
      ghost: "bg-transparent text-text-primary hover:bg-black/5",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : icon && iconPosition === "left" ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        {children}
        {!loading && icon && iconPosition === "right" ? (
          <span className="ml-2">{icon}</span>
        ) : null}
      </button>
    );
  },
);

Button.displayName = "Button";

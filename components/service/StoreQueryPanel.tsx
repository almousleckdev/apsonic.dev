"use client";

import React from "react";
import { RadioOption } from "./RadioOption";
import { colors, typography } from "@/lib/design-tokens";
import { SERVICE_CONFIG, SERVICE_LABELS } from "@/lib/constants/service";
import { cn } from "@/lib/utils";

export type StoreQueryType = "pickup" | "nearby";

export interface StoreQueryPanelProps {
  queryType: StoreQueryType | null;
  onQueryTypeChange: (type: StoreQueryType | null) => void;
  className?: string;
  variant?: "default" | "dark";
}

export const StoreQueryPanel: React.FC<StoreQueryPanelProps> = ({
  queryType,
  onQueryTypeChange,
  className,
  variant = "default",
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={cn("h-full flex flex-col", className)}
      style={{
        backgroundColor: isDark ? "transparent" : colors.service.panelDark,
        padding: "clamp(20px, 4vw, 30px) clamp(16px, 3vw, 40px)",
        borderRadius: "20px",
        border: isDark ? "none" : "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <h3
        className="mb-6 font-bold"
        style={{
          fontSize: SERVICE_CONFIG.typography.panelTitle,
          color: isDark ? "#FFFFFF" : colors.text.primary,
        }}
      >
        {SERVICE_LABELS.panelTitle}
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: SERVICE_CONFIG.spacing.radioGap,
        }}
      >
        <RadioOption
          value={SERVICE_CONFIG.queryTypes.nearby}
          label={SERVICE_LABELS.queryOptions.nearby}
          checked={queryType === SERVICE_CONFIG.queryTypes.nearby}
          onChange={() => {
            // Toggle: if already checked, uncheck it (set to null)
            if (queryType === SERVICE_CONFIG.queryTypes.nearby) {
              onQueryTypeChange(null);
            } else {
              onQueryTypeChange(SERVICE_CONFIG.queryTypes.nearby);
            }
          }}
          name="queryType"
          textColor={isDark ? "#FFFFFF" : undefined}
        />
      </div>
    </div>
  );
};

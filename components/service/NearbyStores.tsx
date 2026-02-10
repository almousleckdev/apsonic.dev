"use client";

import React from "react";
import type { Store } from "@/lib/types/store";
import { motion } from "framer-motion";
import { LocationIcon } from "@/components/ui/Icons";
import { StoreContactInfo } from "./StoreContactInfo";
import { colors } from "@/lib/design-tokens";
import { SERVICE_CONFIG, SERVICE_LABELS } from "@/lib/constants/service";
import { formatDistance } from "@/lib/utils/geolocation";
import { getCountryFlag } from "@/lib/utils/country-flags";
import { cn } from "@/lib/utils";

export interface NearbyStoresProps {
  stores: Store[];
  country?: string;
  className?: string;
  variant?: "default" | "dark";
}

export const NearbyStores: React.FC<NearbyStoresProps> = ({
  stores,
  country,
  className,
  variant = "default",
}) => {
  const isDark = variant === "dark";

  if (stores.length === 0) {
    return (
      <div className={className}>
        <h3
          className="font-bold mb-4"
          style={{
            fontSize: SERVICE_CONFIG.typography.listTitle,
            color: isDark ? "#FFFFFF" : colors.text.black,
          }}
        >
          附近商店
        </h3>
        <p
          style={{
            color: isDark ? "rgba(255,255,255,0.7)" : colors.text.secondary,
          }}
        >
          {country ? `在${country}未找到商店` : SERVICE_LABELS.noStoresFound}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {country && stores.length > 0 && (
        <div className="flex items-center gap-2 mb-6 px-1">
          <span className="text-xl">{getCountryFlag(country)}</span>
          <h3
            className={cn(
              "text-lg font-bold",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {country} 官方中心
          </h3>
        </div>
      )}

      <div className="space-y-6">
        {stores.map((store) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <LocationIcon className="w-5 h-5 text-gray-900" />
                </div>
                <h4
                  className="font-bold text-gray-900 group-hover:text-black transition-colors"
                  style={{
                    fontSize: SERVICE_CONFIG.typography.storeName,
                  }}
                >
                  {store.name}
                </h4>
              </div>
              {store.distance !== undefined && (
                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-black/5 text-gray-900 uppercase tracking-wider">
                  {formatDistance(store.distance)}
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 mt-1 flex-shrink-0 opacity-40">
                  <LocationIcon className="w-full h-full" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {store.address}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-50">
                <StoreContactInfo store={store} />
              </div>

              {/* Start Navigation Button */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-xs w-full mt-2 uppercase tracking-wider text-white bg-gray-900 hover:bg-black hover:scale-[1.02] active:scale-[0.98] rounded-md shadow-sm"
              >
                <LocationIcon className="w-3.5 h-3.5 mr-2" />
                开始导航
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

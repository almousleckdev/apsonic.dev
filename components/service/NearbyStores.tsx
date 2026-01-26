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
}

export const NearbyStores: React.FC<NearbyStoresProps> = ({
  stores,
  country,
  className,
}) => {
  if (stores.length === 0) {
    return (
      <div className={className}>
        <h3
          className="font-bold mb-4"
          style={{
            fontSize: SERVICE_CONFIG.typography.listTitle,
            color: colors.text.black,
          }}
        >
          附近商店
        </h3>
        <p style={{ color: colors.text.secondary }}>
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
          <h3 className="text-lg font-bold text-gray-900">
            {country} 官方中心
          </h3>
        </div>
      )}

      <div className="space-y-4">
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
                <div className="w-10 h-10 rounded-full bg-brand-green/5 flex items-center justify-center group-hover:bg-brand-green/10 transition-colors">
                  <LocationIcon className="w-5 h-5 text-brand-green" />
                </div>
                <h4
                  className="font-bold text-gray-900 group-hover:text-brand-green transition-colors"
                  style={{
                    fontSize: SERVICE_CONFIG.typography.storeName,
                  }}
                >
                  {store.name}
                </h4>
              </div>
              {store.distance !== undefined && (
                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-brand-green/10 text-brand-green uppercase tracking-wider">
                  {formatDistance(store.distance)}
                </span>
              )}
            </div>

            <div className="space-y-3">
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import type { Store } from '@/lib/types/store';
import { LocationIcon } from '@/components/ui/Icons';
import { StoreContactInfo } from './StoreContactInfo';
import { colors } from '@/lib/design-tokens';
import { SERVICE_CONFIG, SERVICE_LABELS } from '@/lib/constants/service';
import { formatDistance } from '@/lib/utils/geolocation';
import { getCountryFlag } from '@/lib/utils/country-flags';
import { cn } from '@/lib/utils';

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
    <div className={className}>

      <div className="space-y-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            style={{
              backgroundColor: '#FFFFFF',
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getCountryFlag(store.country)}</span>
                <h4
                  className="font-bold"
                  style={{
                    fontSize: SERVICE_CONFIG.typography.storeName,
                    color: '#111827',
                  }}
                >
                  {store.name}
                </h4>
              </div>
              {store.distance !== undefined && (
                <span
                  className="text-sm font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: colors.service.brandGreen,
                    color: colors.background.white,
                  }}
                >
                  {formatDistance(store.distance)}
                </span>
              )}
            </div>

            <div className="space-y-2">
              {/* Address */}
              <div className="flex items-start gap-2">
                <LocationIcon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.text.secondary }} />
                <p
                  className="font-light"
                  style={{
                    color: '#4B5563',
                    fontSize: SERVICE_CONFIG.typography.storeAddress,
                  }}
                >
                  {store.address}
                </p>
              </div>

              {/* Contact Information */}
              <StoreContactInfo store={store} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


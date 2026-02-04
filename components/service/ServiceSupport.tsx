"use client";

import React from "react";
import { StoreQueryPanel } from "./StoreQueryPanel";
import { StoreListPanel } from "./StoreListPanel";
import { AfricaMapPanel } from "./AfricaMapPanel";
import { Button } from "@/components/ui/Button";
import { colors, spacing } from "@/lib/design-tokens";
import { SERVICE_LABELS } from "@/lib/constants/service";
import { useServiceSupport } from "@/hooks/useServiceSupport";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ServiceSupportProps {
  className?: string;
}

export const ServiceSupport: React.FC<ServiceSupportProps> = ({
  className,
}) => {
  const {
    queryType,
    setQueryType,
    searchTerm,
    selectedStore,
    setSelectedStore,
    selectedCountry,
    userLocation,
    userAddress,
    isLoadingLocation,
    locationError,
    filteredStores,
    handleSearchChange,
    handleCountrySelect,
  } = useServiceSupport();

  return (
    <section
      className={cn("w-full py-2", className)}
      style={{
        backgroundColor: colors.background.white,
      }}
    >
      <div className="w-full px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#1FA84F]">服务支持</h2>
        </div>

        {/* Main Content Area - Flat Section */}
        <div className="relative w-full h-[650px] border-y border-gray-100 bg-gray-50">
          {/* 1. Map Background (Full Size) */}
          <div className="absolute inset-0 z-0">
            <AfricaMapPanel
              selectedCountry={selectedCountry}
              onCountrySelect={handleCountrySelect}
              userLocation={queryType === "nearby" ? userLocation : null}
              showOnlyUserLocation={queryType === "nearby"}
              className="w-full h-full"
              padding={{ left: 680, top: 20, bottom: 20, right: 20 }} // Offset for 2 sidebars (300 + 380)
            />
          </div>

          {/* 2. Overlays Container - Flex Row -> 3-Panel Layout */}
          <div className="absolute inset-y-0 left-0 z-10 flex flex-row h-full">
            {/* Panel 1: Search & Query (Left) */}
            <div
              className="w-[280px] h-full flex-shrink-0 flex flex-col"
              style={{
                backgroundColor: "#1e1e1e", // Solid dark, no blur
                borderRight: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="p-6 h-full">
                <StoreQueryPanel
                  queryType={queryType}
                  onQueryTypeChange={setQueryType}
                  className="bg-transparent shadow-none p-0 text-white"
                  variant="dark"
                />
              </div>
            </div>

            {/* Panel 2: Results List (Middle) */}
            <div
              className="w-[360px] h-full flex-shrink-0 flex flex-col"
              style={{
                backgroundColor: "#252525", // Solid lighter dark, no blur
              }}
            >
              <div className="flex-1 overflow-hidden px-2 py-6">
                <StoreListPanel
                  stores={filteredStores}
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                  selectedStoreId={selectedStore?.id}
                  onStoreSelect={setSelectedStore}
                  onCountrySearch={handleCountrySelect}
                  selectedCountry={selectedCountry}
                  queryType={queryType}
                  userLocation={userLocation}
                  userAddress={userAddress}
                  isLoadingLocation={isLoadingLocation}
                  locationError={locationError}
                  className="bg-transparent shadow-none h-full text-white"
                  variant="dark"
                />
              </div>
            </div>

            {/* Panel 3 is effectively the transparent right area showing the Map */}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <Link href="/services#official-branches">
            <Button
              variant="outline"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-white shadow-sm"
            >
              了解售后服务
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { StoreQueryPanel } from "./StoreQueryPanel";
import { StoreListPanel } from "./StoreListPanel";
import { AfricaMapPanel } from "./AfricaMapPanel";
import { Button } from "@/components/ui/Button";
import { colors, spacing } from "@/lib/design-tokens";
import { SERVICE_CONFIG, SERVICE_LABELS } from "@/lib/constants/service";
import { useServiceSupport } from "@/hooks/useServiceSupport";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ENTERPRISE_EASE } from "@/lib/constants/animations";
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
      className={cn("w-full", spacing.section.vertical, className)}
      style={{ backgroundColor: colors.background.white }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Layout: Vertical on mobile, Horizontal on desktop */}
        <div className="mb-8">
          {/* Mobile: Vertical Stack */}
          <div className="flex flex-col lg:hidden gap-6">
            {/* Left Panel */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: ENTERPRISE_EASE }}
            >
              <StoreQueryPanel
                queryType={queryType}
                onQueryTypeChange={setQueryType}
                className="h-auto min-h-[160px] rounded-2xl shadow-md"
              />
            </motion.div>

            {/* Middle Panel */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: ENTERPRISE_EASE, delay: 0.1 }}
            >
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
                className="h-auto min-h-[350px] rounded-2xl shadow-md"
              />
            </motion.div>

            {/* Map Panel */}
            <motion.div
              className="w-full"
              style={{ minHeight: "450px", height: "450px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: ENTERPRISE_EASE, delay: 0.2 }}
            >
              <AfricaMapPanel
                selectedCountry={selectedCountry}
                onCountrySelect={handleCountrySelect}
                userLocation={queryType === "nearby" ? userLocation : null}
                showOnlyUserLocation={queryType === "nearby"}
                className="h-full rounded-2xl shadow-md"
              />
            </motion.div>
          </div>

          {/* Desktop: Horizontal Layout with Map as Background */}
          <div
            className="hidden lg:flex h-[650px] relative items-stretch"
            style={{ gap: "0" }}
          >
            {/* Left Panel - Opaque */}
            <motion.div
              className="flex-shrink-0 overflow-hidden"
              style={{
                width: "20%",
                position: "relative",
                zIndex: 3,
                borderTopLeftRadius: "16px",
                borderBottomLeftRadius: "16px",
              }}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: ENTERPRISE_EASE }}
            >
              <StoreQueryPanel
                queryType={queryType}
                onQueryTypeChange={setQueryType}
                className="h-full shadow-lg shadow-gray-200/50"
              />
            </motion.div>

            {/* Middle Panel - Semi-transparent overlay */}
            <motion.div
              className="flex-shrink-0"
              style={{
                width: "20%",
                position: "relative",
                zIndex: 2,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: ENTERPRISE_EASE, delay: 0.15 }}
            >
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
                className="h-full shadow-xl shadow-gray-200/50"
              />
            </motion.div>

            {/* Map Area */}
            <motion.div
              className="flex-grow h-full overflow-hidden"
              style={{
                position: "relative",
                zIndex: 1,
                borderTopRightRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: ENTERPRISE_EASE, delay: 0.3 }}
            >
              <AfricaMapPanel
                selectedCountry={selectedCountry}
                onCountrySelect={handleCountrySelect}
                userLocation={queryType === "nearby" ? userLocation : null}
                showOnlyUserLocation={queryType === "nearby"}
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: ENTERPRISE_EASE, delay: 0.2 }}
        >
          <Link href="/services#official-branches">
            <Button
              variant="outline"
              size="md"
              style={{
                backgroundColor: colors.background.white,
                border: `2px solid ${colors.service.brandGreen}`,
                color: colors.service.brandGreen,
                fontWeight: 600,
              }}
            >
              {SERVICE_LABELS.buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

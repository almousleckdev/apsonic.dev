"use client";

import React, { useEffect, useCallback } from "react";
import type { FeatureCollection } from "geojson";
import mapboxgl from "mapbox-gl";
import { AFRICA_MAP_CONFIG } from "@/lib/constants/africa-map";
import { useMapInitializer } from "./MapInitializer";
import { useUserLocationMarker } from "./UserLocationMarker";
import { fetchAfricanGeoJSON } from "@/lib/utils/geojson";
import {
  updateGeoJSONSource,
  addRegionLayers,
  updateSearchHighlight,
} from "@/lib/utils/map-layers";
import { getBoundsFromFeature } from "@/lib/utils/map-bounds";
import { cn } from "@/lib/utils";

export interface AfricaMapPanelProps {
  selectedCountry?: string;
  onCountrySelect?: (countryCode: string) => void;
  userLocation?: { lat: number; lng: number } | null;
  showOnlyUserLocation?: boolean;
  className?: string;
  padding?: { top?: number; bottom?: number; left?: number; right?: number };
}

/**
 * Africa map panel component
 * Displays interactive map with region-based country coloring
 */
export const AfricaMapPanel: React.FC<AfricaMapPanelProps> = ({
  selectedCountry,
  onCountrySelect,
  userLocation,
  showOnlyUserLocation = false,
  className,
  padding,
}) => {
  const { map, isLoaded, mapContainer } = useMapInitializer();
  const geoJsonDataRef = React.useRef<FeatureCollection | null>(null);
  const onCountrySelectRef = React.useRef(onCountrySelect);
  const setupClickHandlersRef = React.useRef<(() => void) | null>(null);

  // Keep refs updated
  React.useEffect(() => {
    onCountrySelectRef.current = onCountrySelect;
  }, [onCountrySelect]);

  // Initialize user location marker
  useUserLocationMarker({
    map: map.current,
    userLocation,
    show: showOnlyUserLocation,
  });

  // Setup click handler for country selection
  const setupClickHandlers = useCallback(() => {
    // Check if layer exists
    const handleMapClick = (e: mapboxgl.MapMouseEvent) => {
      if (!map.current) return;

      // Query features at click point
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ["africa-countries-fill", "africa-countries-outline"],
      });

      if (features.length > 0) {
        const fillFeature = features.find(
          (f) => f.layer?.id === "africa-countries-fill",
        );
        const clickedFeature = fillFeature || features[0];
        const countryName = clickedFeature.properties?.name as string;

        if (countryName && onCountrySelectRef.current) {
          onCountrySelectRef.current(countryName);
        }
      }
    };

    if (!map.current) return;
    const existingHandler = (map.current as any)._africaClickHandler;
    if (existingHandler) {
      map.current.off("click", existingHandler);
      console.log("Removed existing click handler");
    }

    // Store handler reference for cleanup
    (map.current as any)._africaClickHandler = handleMapClick;
    map.current.on("click", handleMapClick);
    console.log("Click handler attached to map");

    // Change cursor on hover
    const handleMouseEnter = () => {
      if (map.current) {
        map.current.getCanvas().style.cursor = "pointer";
      }
    };

    const handleMouseLeave = () => {
      if (map.current) {
        map.current.getCanvas().style.cursor = "";
      }
    };

    // Remove existing hover handlers
    // Add hover handlers
    if (map.current && map.current.getLayer("africa-countries-fill")) {
      map.current.on("mouseenter", "africa-countries-fill", handleMouseEnter);
      map.current.on("mouseleave", "africa-countries-fill", handleMouseLeave);

      // Store hover handlers for cleanup if needed
      (map.current as any)._africaMouseEnterHandler = handleMouseEnter;
      (map.current as any)._africaMouseLeaveHandler = handleMouseLeave;
    }
  }, [map]);

  // Update setupClickHandlers ref
  React.useEffect(() => {
    setupClickHandlersRef.current = setupClickHandlers;
  }, [setupClickHandlers]);

  // Load and process GeoJSON data
  const loadGeoJSONData = useCallback(async () => {
    if (!map.current || !isLoaded) return;

    const geoJson = await fetchAfricanGeoJSON(selectedCountry);
    if (!geoJson) return;

    geoJsonDataRef.current = geoJson;
    updateGeoJSONSource(map.current, geoJson);

    // Add layers after source is ready
    setTimeout(() => {
      if (map.current && map.current.getSource("africa-countries")) {
        addRegionLayers(map.current);

        // Setup click handlers after layers are added
        setTimeout(() => {
          if (onCountrySelectRef.current && map.current) {
            setupClickHandlers();
          }
        }, 200);
      }
    }, 100);
  }, [map, isLoaded, selectedCountry, setupClickHandlers]);

  // Load GeoJSON when map is ready
  useEffect(() => {
    if (isLoaded) {
      loadGeoJSONData();
    }
  }, [isLoaded, loadGeoJSONData]);

  // Setup click handlers when map is loaded and onCountrySelect is available
  useEffect(() => {
    if (!map.current || !isLoaded || !onCountrySelectRef.current) {
      console.log("Click handler setup skipped:", {
        hasMap: !!map.current,
        isLoaded,
        hasCallback: !!onCountrySelectRef.current,
      });
      return;
    }

    // Wait for layers to be added, then setup handlers
    let retryCount = 0;
    const maxRetries = 30; // Try for up to 6 seconds (200ms * 30)

    const checkAndSetup = () => {
      if (!map.current) return;

      if (map.current.getLayer("africa-countries-fill")) {
        setupClickHandlers();
      } else if (retryCount < maxRetries) {
        retryCount++;
        setTimeout(checkAndSetup, 200);
      }
    };

    checkAndSetup();

    // Cleanup on unmount
    return () => {
      if (map.current) {
        const existingHandler = (map.current as any)._africaClickHandler;
        if (existingHandler) {
          map.current.off("click", existingHandler);
          delete (map.current as any)._africaClickHandler;
        }

        const mouseEnterHandler = (map.current as any)._africaMouseEnterHandler;
        const mouseLeaveHandler = (map.current as any)._africaMouseLeaveHandler;

        if (mouseEnterHandler) {
          map.current.off(
            "mouseenter",
            "africa-countries-fill",
            mouseEnterHandler,
          );
          delete (map.current as any)._africaMouseEnterHandler;
        }
        if (mouseLeaveHandler) {
          map.current.off(
            "mouseleave",
            "africa-countries-fill",
            mouseLeaveHandler,
          );
          delete (map.current as any)._africaMouseLeaveHandler;
        }
      }
    };
  }, [map, isLoaded, setupClickHandlers]);

  // Update search highlight when selectedCountry changes
  useEffect(() => {
    if (!map.current || !isLoaded || !geoJsonDataRef.current) return;

    const updatedGeoJson = updateSearchHighlight(
      map.current,
      geoJsonDataRef.current,
      selectedCountry?.trim() || null,
    );

    geoJsonDataRef.current = updatedGeoJson;
    updateGeoJSONSource(map.current, updatedGeoJson);

    // Re-setup click handlers after source update (in case layers were affected)
    // Wait a bit longer to ensure layers are fully rendered
    if (onCountrySelectRef.current) {
      setTimeout(() => {
        if (
          map.current &&
          map.current.getLayer("africa-countries-fill") &&
          setupClickHandlersRef.current
        ) {
          console.log("Re-setting up click handlers after source update");
          setupClickHandlersRef.current();
        }
      }, 200);
    }

    // Animate to searched country
    if (selectedCountry?.trim() && geoJsonDataRef.current) {
      const searchedFeature = geoJsonDataRef.current.features.find(
        (f) =>
          (f.properties?.name as string)?.toLowerCase() ===
          selectedCountry.toLowerCase(),
      );

      if (searchedFeature) {
        const bounds = getBoundsFromFeature(searchedFeature);
        if (bounds && map.current) {
          map.current.fitBounds(bounds, {
            padding: padding || 50,
            duration: AFRICA_MAP_CONFIG.animation.duration,
            easing: (t: number) => t * (2 - t),
          });
        }
      }
    } else if (!selectedCountry?.trim()) {
      // Reset to default view when search is cleared
      map.current.fitBounds(AFRICA_MAP_CONFIG.bounds.africa, {
        padding: padding || 10, // Use prop padding or default
        duration: 1000,
        easing: (t: number) => t * (2 - t),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, isLoaded, map, padding]);

  // Reset map view when showOnlyUserLocation changes
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    if (!showOnlyUserLocation && map.current) {
      map.current.fitBounds(AFRICA_MAP_CONFIG.bounds.africa, {
        padding: padding || { top: 10, bottom: 10, left: 10, right: 10 },
        duration: 1000,
        easing: (t: number) => t * (2 - t),
      });
    } else if (userLocation) {
      map.current.flyTo({
        center: [userLocation.lng, userLocation.lat],
        zoom: 10,
        duration: 1500,
      });
    }
  }, [showOnlyUserLocation, userLocation, isLoaded, map]);

  return (
    <div
      ref={mapContainer}
      className={cn("w-full h-full overflow-hidden", className)}
    />
  );
};

import { colors } from '../design-tokens';

// Products grid constants
export const PRODUCTS_GRID_CONFIG = {
  // Grid layout
  grid: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '32px', // Comfortable spacing
  },

  // Card styling
  card: {
    background: '#F3F4F6',
    borderRadius: '24px',
    padding: '24px 24px 80px 24px',
    maxWidth: '100%',
  },

  // Image styling
  image: {
    aspectRatio: '3/2',
    maxHeight: '220px',
    maxWidth: '100%',
  },

  // Typography
  typography: {
    modelName: {
      fontSize: '18px',
      fontWeight: 700,
      color: colors.text.primary,
    },
    brandName: {
      fontSize: '12px',
      color: colors.brand.green, // Brand Green
    },
  },
} as const;


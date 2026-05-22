// Application-wide constants
export const APP_NAME = 'APSONIC';
export const BRAND_TAGLINE = 'Good Quality, Good Life';

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/apsonic',
  instagram: 'https://instagram.com/apsonic',
  twitter: 'https://twitter.com/apsonic',
  youtube: 'https://youtube.com/apsonic',
  linkedin: 'https://linkedin.com/company/apsonic',
  tiktok: 'https://tiktok.com/@apsonic',
};

// Footer Navigation Data
export const FOOTER_PRODUCTS = {
  title: '产品',
  items: [
    { label: '品牌选择', href: '/products' },
    {
      label: 'APSONIC',
      subItems: [
        { label: '弯梁车', href: '/products?category=underbone' },
        { label: '街车', href: '/products?category=street' },
        { label: '运动车', href: '/products?category=sport' },
        { label: '三轮车', href: '/products?category=tricycle' },
      ],
    },
    {
      label: 'APSONIC Pro',
      subItems: [
        { label: '街车', href: '/products?category=pro-street' },
        { label: '越野车', href: '/products?category=pro-offroad' },
      ],
    },
    {
      label: 'APSONIC-EMOTO',
      subItems: [
        { label: '三轮车', href: '/products?category=emoto-tricycle' },
      ],
    },
  ],
};

export const FOOTER_SERVICES = {
  title: '服务',
  items: [
    { label: '产品手册', href: '/services/after-sales' },
    { label: '售后服务网络查询', href: '/services/supply-chain' },
  ],
};

export const FOOTER_ABOUT = {
  title: '关于',
  items: [
    { label: '品牌介绍', href: '/about' },
    { label: '品牌文化', href: '/about/culture' },
    { label: '发展历程', href: '/about/history' },
    { label: '新闻资讯', href: '/about/news' },
    { label: '社会贡献', href: '/about/contribution' },
  ],
};

export const FOOTER_CONTACT = {
  title: '联系我们',
  items: [
    { label: '商务咨询', href: '/contact' },
  ],
};

// Navigation Items (matching mockup)
export const NAV_ITEMS = [
  { label: '产品', href: '/products', labelEn: 'Products' },
  { label: '服务', href: '/services', labelEn: 'Services' },
  // { label: '关于', href: '/about', labelEn: 'About APSONIC' },
  { label: '联系', href: '/contact', labelEn: 'Contact Us' },
];

// Hero Slogan (bilingual)
export const HERO_SLOGAN = {
  chinese: '好质量 好生活',
  french: 'Bonne qualité pour une meilleure vie',
  english: 'Good Quality, Good Life',
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'motorcycles', label: 'Motorcycles' },
  { id: 'scooters', label: 'Scooters' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'parts', label: 'Parts' },
];

// Product category names for display
export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  underbone: 'Underbone',
  street: 'Street',
  offroad: 'Off-Road',
  tricycle: 'Tricycle',
};

// Demo prices for development
export const FILTER_OPTIONS = {
  price: [
    { label: 'Under $500', value: '0-500' },
    { label: '$500 - $1000', value: '500-1000' },
    { label: '$1000 - $2000', value: '1000-2000' },
    { label: 'Above $2000', value: '2000+' },
  ],
  engine: [
    { label: '50cc - 125cc', value: '50-125' },
    { label: '125cc - 250cc', value: '125-250' },
    { label: '250cc+', value: '250+' },
  ],
};

// African Countries (West Africa focus) Demo for now
export const COUNTRIES = [
  { code: 'NG', name: 'Nigeria' },
  { code: 'GH', name: 'Ghana' },
  { code: 'SN', name: 'Senegal' },
  { code: 'CI', name: 'Ivory Coast' },
  { code: 'ML', name: 'Mali' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'NE', name: 'Niger' },
  { code: 'TG', name: 'Togo' },
  { code: 'BJ', name: 'Benin' },
  { code: 'GN', name: 'Guinea' },
];

// Responsive Breakpoints
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
};

// Default Model Colors (shared across models)
export const DEFAULT_MODEL_COLORS = [
  {
    id: 'black',
    name: 'Black',
    value: '#000000',
  },
  {
    id: 'red',
    name: 'Red',
    value: '#DC143C',
  },
  {
    id: 'grey',
    name: 'Grey',
    value: '#808080',
  },
];

// Carousel Configuration
export const CAROUSEL_CONFIG = {
  defaultInterval: 5000,
  scrollGap: 24, // gap-6 = 24px
  cardWidth: 280,
};

// Layout Constants
export const LAYOUT = {
  headerHeight: 80, // Header height in pixels
  dropdownTopOffset: 80, // Dropdown top position to match header
};


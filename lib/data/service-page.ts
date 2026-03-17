// Service Support page data
import type { FeatureCard } from "@/components/service-page/FeatureCards";
import type { ExploreCard } from "@/components/service-page/ExploreMore";
import type { InfoBlock } from "@/components/service-page/InformationBlocks";
import type { SupportLink } from "@/components/service-page/SupportTools";
import { PRODUCT_MODELS } from "./product-models";

// FEATURE_CARDS - Mapped precisely as per user request:
// manuals content -> services/locations (手册与指南)
// training content -> services/parts (三轮车)
export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "locations-manuals",
    image: "/products/AP110-A-PLUS(白).png",
    title: "两轮车",
    description: "弯梁车、街车、越野车型手册下载与服务网点查询。",
    ctaText: "立即查看",
    href: "/services/locations", // mapped to locations
  },
  {
    id: "parts-tricycles",
    image: "/products/images/2.png",
    title: "三轮车",
    description: "三轮车手册与指南下载，及原厂配件订购。",
    ctaText: "立即查看",
    href: "/services/parts", // mapped to parts
  },
];

// Explore More cards
export const EXPLORE_CARDS: ExploreCard[] = [
  {
    id: "1",
    icon: "📘",
    title: "下载手册与指南",
    ctaText: "下载",
    href: "/services/manuals",
  },
  {
    id: "2",
    icon: "🔧",
    title: "机械师培训课程",
    ctaText: "了解更多",
    href: "/services/training",
  },
];

// Information blocks
export const INFO_BLOCKS: InfoBlock[] = [
  {
    id: "1",
    title: "保修信息",
    content:
      "所有Apsonic摩托车均享有全面保修和终身维护支持。我们的授权服务中心确保您的摩托车保持完美状态。",
    ctaText: "查看保修条款",
    href: "/services/warranty",
    variant: "default",
  },
  {
    id: "2",
    title: "⚠️ 谨防假冒配件",
    content:
      "只有正品Apsonic配件才能保证安全和性能。假冒配件可能导致严重损坏并使您的保修失效。请务必从授权经销商处购买。",
    ctaText: "如何识别正品配件",
    href: "/services/counterfeit-warning",
    variant: "warning",
  },
  {
    id: "3",
    title: "当前服务活动",
    content: ["AP200型号免费检查", "制动系统升级计划", "季节性维护优惠"],
    ctaText: "查看所有活动",
    href: "/services/campaigns",
    variant: "default",
  },
];

// Support tools links
export const SUPPORT_LINKS: SupportLink[] = [
  { label: "查找最近的服务中心", href: "/services/locations" },
  { label: "检查保修状态", href: "/services/warranty" },
  { label: "订购正品配件", href: "/services/parts" },
  { label: "下载用户手册", href: "/services/manuals" },
];

// Service coverage data
export const SERVICE_COVERAGE_COUNTRIES = [
  { flag: "🇬🇭", name: "Ghana" },
  { flag: "🇹🇬", name: "Togo" },
  { flag: "🇧🇯", name: "Benin" },
  { flag: "🇨🇮", name: "Ivory Coast" },
  { flag: "🇧🇫", name: "Burkina Faso" },
  { flag: "🇲🇱", name: "Mali" },
  { flag: "🇬🇳", name: "Guinea" },
];

export const SERVICE_COVERAGE_STATS = {
  servicePoints: "4,500+",
  subsidiaries: "15",
  dealers: "125+",
};

// Get motorcycles for grid (first 8 models)
export const getServicePageMotorcycles = () => {
  return PRODUCT_MODELS.slice(0, 8);
};

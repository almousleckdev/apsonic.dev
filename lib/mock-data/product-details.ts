import {
  ProductFeature,
  EngineSpec,
  GridFeature,
  KeyMetric,
  TechSpecItem,
} from "@/lib/types/products";

/**
 * 产品规格详情数据 (Chinese Product Specifications)
 * Based on all_product_details_page.jpg design
 */
export const UNDERBONE_DETAILS = {
  features: [
    {
      id: "led-lighting",
      label: "更稳定的车架结构",
      title: "更稳定的车架结构",
      description:
        "新版的车架后部加强结构，全方位强度优化，高速过弯不飘，并且强度更高，承载能力进一步增强。",
      image: "/images/products/accessories/内页车架.png",
    },
    {
      id: "frame-structure",
      label: "LED前大灯",
      title: "LED前大灯",
      description:
        "能耗低，亮度高，寿命长。照明范围更大、更清晰，夜间行车更安全",
      image: "/images/products/accessories/component3.png",
    },
    {
      id: "suspension",
      label: "AP150-30PLUS新型减震",
      title: "AP150-30PLUS新型减震",
      description:
        "加强鱼头后减震，颠簸路面上能够有效吸收冲击，确保骑乘舒适性，结实耐用",
      image: "/images/products/accessories/内页避震.png",
    },
  ] as ProductFeature[],

  engineSpecs: [
    { label: "排量", value: "162.4 CC" },
    { label: "最大功率 (kw/r/min)", value: "10.0/8500" },
    { label: "最大扭矩 (N.m/r/min)", value: "12.5/7000" },
  ] as EngineSpec[],

  gridFeatures: [
    {
      id: "cushion",
      title: "人体工学舒适座椅",
      description: "双缝线加固，高密度泡沫，适合长途耐用。",
      image: "/images/products/accessories/内页坐垫.png",
    },
    {
      id: "muffler",
      title: "性能排气系统",
      description: "耐高温涂层，不锈钢隔热罩，快速冷却。",
      image: "/images/products/accessories/内页消音器.png",
    },
    {
      id: "crash-bar",
      title: "原厂防护杠",
      description: "标配一体式防撞杠，提供最大冲击保护和发动机安全。",
      image: "/images/products/accessories/内页护杠.png",
    },
    {
      id: "dashboard",
      title: "数字高对比度仪表盘",
      description: "80%屏占比，在直射阳光下即时读取关键数据。",
      image: "/images/products/accessories/内页仪表盘.png",
    },
  ] as GridFeature[],

  keyMetrics: [
    { label: "最高时速", value: "80", unit: "km/h", subValue: "≥" },
    { label: "油箱容量", value: "4", unit: "L" },
    { label: "整车重量", value: "104", unit: "KG" },
    { label: "离地间隙", value: "155", unit: "MM" },
  ] as KeyMetric[],

  detailedSpecs: [
    { label: "发动机型号", value: "TYS162" },
    { label: "发动机类型", value: "单缸、四冲程、风冷" },
    { label: "供油方式", value: "精密化油器" },
    { label: "压缩比", value: "9.5:1" },
    { label: "最大功率 (kw/rpm)", value: "10.0kW/8500r/min" },
    { label: "最大扭矩 (N.m/rpm)", value: "12.5N·m/7000r/min" },
    { label: "外形尺寸 (长x宽x高)", value: "1960X710X1130mm" },
    { label: "轴距", value: "1275mm" },
    { label: "座高", value: "770 mm" },
    { label: "离地间隙", value: "155mm" },
    { label: "整车重量", value: "104kg" },
    { label: "油箱容量", value: "4.0 L" },
    { label: "最高时速", value: "≥80 km/h" },
    { label: "最大载重", value: "150kg" },
    { label: "油耗", value: "1.8L/100KM" },
    { label: "制动系统", value: "前碟/后鼓" },
  ] as TechSpecItem[],
};

/**
 * 根据产品类别获取详情数据
 */
export function getProductDetailData(category: string) {
  // 所有类别使用相同的中文模板
  return UNDERBONE_DETAILS;
}

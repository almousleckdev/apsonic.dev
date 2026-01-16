import {
  ProductFeature,
  EngineSpec,
  GridFeature,
  KeyMetric,
  TechSpecItem
} from '@/lib/types/products';

/**
 * 产品规格详情数据 (Chinese Product Specifications)
 * Based on all_product_details_page.jpg design
 */
export const UNDERBONE_DETAILS = {
  features: [
    {
      id: 'led-lighting',
      label: 'LED照明系统',
      title: '高性能LED大灯',
      description: '超低功耗，高亮度。为夜间行驶提供卓越的照明范围和清晰度，专为非洲路况优化。',
      image: '/images/products/accessories/内页车架.png',
    },
    {
      id: 'frame-structure',
      label: '增强型车架',
      title: '重型加固车架',
      description: '采用高强度合金钢制造。紧凑稳定的几何结构，专为重载和高速稳定性优化，适应西非路况。',
      image: '/images/products/accessories/component3.png',
    },
    {
      id: 'suspension',
      label: '地形优化悬挂',
      title: '双级减震系统',
      description: '先进的振动过滤技术。即使在最恶劣的砾石和越野条件下，也能保持最佳舒适性和车辆控制。',
      image: '/images/products/accessories/内页避震.png',
    },
  ] as ProductFeature[],

  engineSpecs: [
    { label: '排量', value: '162.4 CC' },
    { label: '最大功率 (kw/r/min)', value: '10.0/8500' },
    { label: '最大扭矩 (N.m/r/min)', value: '12.5/7000' },
  ] as EngineSpec[],

  gridFeatures: [
    {
      id: 'cushion',
      title: '人体工学舒适座椅',
      description: '双缝线加固，高密度泡沫，适合长途耐用。',
      image: '/images/products/accessories/内页坐垫.png',
    },
    {
      id: 'muffler',
      title: '性能排气系统',
      description: '耐高温涂层，不锈钢隔热罩，快速冷却。',
      image: '/images/products/accessories/内页消音器.png',
    },
    {
      id: 'crash-bar',
      title: '原厂防护杠',
      description: '标配一体式防撞杠，提供最大冲击保护和发动机安全。',
      image: '/images/products/accessories/内页护杠.png',
    },
    {
      id: 'dashboard',
      title: '数字高对比度仪表盘',
      description: '80%屏占比，在直射阳光下即时读取关键数据。',
      image: '/images/products/accessories/内页仪表盘.png',
    },
  ] as GridFeature[],

  keyMetrics: [
    { label: '最高时速', value: '80', unit: 'km/h', subValue: '≥' },
    { label: '油箱容量', value: '4', unit: 'L' },
    { label: '整车重量', value: '104', unit: 'kg' },
    { label: '离地间隙', value: '155', unit: 'mm' },
  ] as KeyMetric[],

  detailedSpecs: [
    { label: '发动机型号', value: 'TYS162' },
    { label: '发动机类型', value: '单缸、四冲程、风冷' },
    { label: '供油方式', value: '精密化油器' },
    { label: '压缩比', value: '9.5:1' },
    { label: '最大功率 (kw/rpm)', value: '10.0kW/8500r/min' },
    { label: '最大扭矩 (N.m/rpm)', value: '12.5N·m/7000r/min' },
    { label: '外形尺寸 (长x宽x高)', value: '1960X710X1130mm' },
    { label: '轴距', value: '1275mm' },
    { label: '座高', value: '770 mm' },
    { label: '离地间隙', value: '155mm' },
    { label: '整车重量', value: '104kg' },
    { label: '油箱容量', value: '4.0 L' },
    { label: '最高时速', value: '≥80 km/h' },
    { label: '最大载重', value: '150kg' },
    { label: '油耗', value: '1.8L/100KM' },
    { label: '制动系统', value: '前碟/后鼓' },
  ] as TechSpecItem[],
};

/**
 * 根据产品类别获取详情数据
 */
export function getProductDetailData(category: string) {
  // 所有类别使用相同的中文模板
  return UNDERBONE_DETAILS;
}

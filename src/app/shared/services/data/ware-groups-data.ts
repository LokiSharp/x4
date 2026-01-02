const entities = {
  agricultural: {
      id: 'agricultural',
      name: '农业商品',
      factoryName: '农产品工厂',
      icon: 'be_upgrade_agricultural',
      tier: 5,
  },
  energy: {
      id: 'energy',
      name: '能源',
      factoryName: '能源复合工厂',
      icon: 'be_upgrade_energy',
      tier: 1,
  },
  food: {
      id: 'food',
      name: '食品',
      factoryName: '农场',
      icon: 'be_upgrade_food',
      tier: 6,
  },
  gases: {
      id: 'gases',
      name: '气体',
      factoryName: '气体精炼厂',
      icon: 'be_upgrade_refined',
  },
  hightech: {
      id: 'hightech',
      name: '高科技商品',
      factoryName: '高科技产品工厂',
      icon: 'be_upgrade_hightech',
      tier: 3,
  },
  ice: {
      id: 'ice',
      name: '冰',
      factoryName: '冰精炼厂',
      icon: 'be_upgrade_water',
  },
  minerals: {
      id: 'minerals',
      name: '矿物',
      factoryName: '矿物精炼厂',
      icon: 'be_upgrade_refined',
  },
  pharmaceutical: {
      id: 'pharmaceutical',
      name: '药品',
      factoryName: '制药厂',
      icon: 'be_upgrade_pharmaceutical',
      tier: 7,
  },
  refined: {
      id: 'refined',
      name: '精炼商品',
      factoryName: '精炼产品复合工厂',
      icon: 'be_upgrade_refined',
      tier: 2,
  },
  shiptech: {
      id: 'shiptech',
      name: '飞船技术',
      factoryName: '飞船技术工厂',
      icon: 'be_upgrade_shiptech',
      tier: 4,
  },
  water: {
      id: 'water',
      name: '水',
      factoryName: '净化水厂',
      icon: 'be_upgrade_water',
      tier: 2,
  },
};

export const WareGroups = {
  ...entities,
  all: [
    entities.agricultural,
    entities.energy,
    entities.food,
    entities.gases,
    entities.hightech,
    entities.ice,
    entities.minerals,
    entities.pharmaceutical,
    entities.refined,
    entities.shiptech,
    entities.water,
  ]
};

export type TireType = 'all-season' | 'summer' | 'winter' | 'all-terrain' | 'off-road' | 'performance'
export type TireCondition = 'new' | 'used'

export interface Tire {
  id: string
  name: string
  type: TireType
  condition: TireCondition
  brand: string
  size: string
  price: string
  popular?: boolean
  image: string
  description: string
  bestFor: string
}

export const tireTypes: Record<TireType, { label: string; description: string; bestFor: string }> = {
  'all-season': {
    label: 'All-Season',
    description: 'Year-round performance in dry, wet, and light snow conditions. Long tread life and quiet ride.',
    bestFor: 'Daily drivers, sedans, minivans, crossovers',
  },
  summer: {
    label: 'Summer / Performance',
    description: 'Maximum grip in warm conditions. Stickier rubber for sharper handling and shorter braking.',
    bestFor: 'Sports cars, performance sedans, enthusiast builds',
  },
  winter: {
    label: 'Winter / Snow',
    description: 'Softer rubber stays flexible in cold for superior traction on ice and packed snow. Three-Peak Mountain Snowflake rated.',
    bestFor: 'Colorado winters, mountain driving, trucks and SUVs',
  },
  'all-terrain': {
    label: 'All-Terrain (A/T)',
    description: 'Bigger tread blocks for off-road capability while remaining daily-driveable. Good on dirt, gravel, light snow.',
    bestFor: 'Trucks, SUVs, Jeeps, light off-road use',
  },
  'off-road': {
    label: 'Off-Road / Mud-Terrain',
    description: 'Maximum traction in mud, rocks, and technical terrain. Aggressive void pattern self-cleans.',
    bestFor: 'Rock crawlers, serious off-roaders, overlanding rigs',
  },
  performance: {
    label: 'Performance / Low-Profile',
    description: 'Ultra-low sidewall for precision handling and aggressive stance. Wide contact patch maximizes grip.',
    bestFor: 'Modified cars, stance builds, track-day vehicles',
  },
}

export const tires: Tire[] = [
  {
    id: 'as-001',
    name: 'All-Season Touring',
    type: 'all-season',
    condition: 'used',
    brand: 'Various',
    size: '205/55R16 – 235/65R17',
    price: 'Call for pricing',
    popular: true,
    image: '/images/tires/all-season.webp',
    description: tireTypes['all-season'].description,
    bestFor: tireTypes['all-season'].bestFor,
  },
  {
    id: 'wt-001',
    name: 'Winter / Snow',
    type: 'winter',
    condition: 'used',
    brand: 'Various',
    size: '205/55R16 – 265/70R17',
    price: 'Call for pricing',
    image: '/images/tires/winter.webp',
    description: tireTypes['winter'].description,
    bestFor: tireTypes['winter'].bestFor,
  },
  {
    id: 'at-001',
    name: 'All-Terrain',
    type: 'all-terrain',
    condition: 'new',
    brand: 'Various',
    size: '245/75R16 – 285/70R17',
    price: 'Call for pricing',
    popular: true,
    image: '/images/tires/all-terrain.webp',
    description: tireTypes['all-terrain'].description,
    bestFor: tireTypes['all-terrain'].bestFor,
  },
  {
    id: 'mt-001',
    name: 'Mud-Terrain Off-Road',
    type: 'off-road',
    condition: 'new',
    brand: 'Various',
    size: '265/70R17 – 315/70R17',
    price: 'Call for pricing',
    image: '/images/tires/off-road.webp',
    description: tireTypes['off-road'].description,
    bestFor: tireTypes['off-road'].bestFor,
  },
  {
    id: 'sp-001',
    name: 'Summer Performance',
    type: 'summer',
    condition: 'used',
    brand: 'Various',
    size: '225/45R17 – 255/40R18',
    price: 'Call for pricing',
    image: '/images/tires/summer.webp',
    description: tireTypes['summer'].description,
    bestFor: tireTypes['summer'].bestFor,
  },
  {
    id: 'lp-001',
    name: 'Low-Profile Performance',
    type: 'performance',
    condition: 'used',
    brand: 'Various',
    size: '225/40R18 – 245/35R19',
    price: 'Call for pricing',
    image: '/images/tires/performance.webp',
    description: tireTypes['performance'].description,
    bestFor: tireTypes['performance'].bestFor,
  },
]

export const reviews = [
  {
    id: 1,
    text: 'Hector and his team are world class... It\'s affordable, always great service and I couldn\'t recommend them enough.',
    attribution: '— Google Review',
  },
  {
    id: 2,
    text: 'I just bought a new Tesla and there was a small nail in the tire. I went to El Colorado and they didn\'t even hesitate to patch it. I was in and out in less than 20 mins.',
    attribution: '— Google Review',
  },
  {
    id: 3,
    text: 'Me and my family have been going here for years. Always very quick and efficient, I never feel pushed to buy anything extra.',
    attribution: '— Google Review',
  },
]

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
    id: 'cc2-new',
    name: 'CrossClimate 2',
    type: 'all-season',
    condition: 'new',
    brand: 'Michelin',
    size: '205/55R16 – 275/50R20',
    price: 'Call for pricing',
    popular: true,
    image: '/images/tires/crossclimate2.webp',
    description: 'All-weather rated with the 3-Peak Mountain Snowflake symbol. Exceptional wet grip, long tread life, and quiet highway ride.',
    bestFor: 'Daily drivers, sedans, crossovers, year-round Colorado use',
  },
  {
    id: 'cc2-used',
    name: 'CrossClimate 2',
    type: 'all-season',
    condition: 'used',
    brand: 'Michelin',
    size: '205/55R16 – 275/50R20',
    price: 'Call for pricing',
    image: '/images/tires/crossclimate2.webp',
    description: 'Quality pre-owned Michelin all-season tires — same reliable all-weather performance at a fraction of the price.',
    bestFor: 'Budget-conscious daily drivers, sedans, crossovers',
  },
  {
    id: 'ko2-new',
    name: 'All-Terrain T/A KO2',
    type: 'all-terrain',
    condition: 'new',
    brand: 'BFGoodrich',
    size: '245/75R16 – 35x12.5R20',
    price: 'Call for pricing',
    popular: true,
    image: '/images/tires/ko2.webp',
    description: 'The go-to all-terrain for Colorado trucks and Jeeps. Outstanding on-road manners with serious off-road capability and cut-resistant sidewalls.',
    bestFor: 'Trucks, Jeeps, SUVs, light off-road and trail use',
  },
  {
    id: 'ws90-new',
    name: 'Blizzak WS90',
    type: 'winter',
    condition: 'new',
    brand: 'Bridgestone',
    size: '185/60R15 – 265/65R17',
    price: 'Call for pricing',
    image: '/images/tires/blizzak-ws90.webp',
    description: 'Purpose-built winter tire with Multicell compound for ice grip. 15% more biting edges than its predecessor for confident stops on snow and ice.',
    bestFor: 'Colorado winters, mountain passes, ice and packed snow',
  },
  {
    id: 'rg-new',
    name: 'Ridge Grappler',
    type: 'off-road',
    condition: 'new',
    brand: 'Nitto',
    size: 'LT265/75R16 – 37x12.5R20',
    price: 'Call for pricing',
    image: '/images/tires/ridge-grappler.webp',
    description: 'Hybrid terrain tire that bridges the gap between all-terrain and mud-terrain. Dual sidewall design, quiet on highway, aggressive off it.',
    bestFor: 'Lifted trucks, overlanding, rock crawling, serious trails',
  },
  {
    id: 'ecs02-new',
    name: 'ExtremeContact Sport 02',
    type: 'performance',
    condition: 'new',
    brand: 'Continental',
    size: '225/40R18 – 295/35R19',
    price: 'Call for pricing',
    image: '/images/tires/extremecontact-sport02.webp',
    description: 'Ultra-high performance summer tire with SportPlus Technology. Exceptional dry and wet grip, precise steering response.',
    bestFor: 'Sports cars, performance sedans, track-day use',
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

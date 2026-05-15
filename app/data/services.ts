export interface Service {
  id: string
  name: string
  icon: string
  description: string
  price: string
}

export const services: Service[] = [
  {
    id: 'flat-repair',
    name: 'Flat Tire Repair',
    icon: 'wrench',
    description: 'Quick patch or plug — most repairs done in under 20 minutes.',
    price: 'Call for pricing',
  },
  {
    id: 'used-tires',
    name: 'Used Tires',
    icon: 'circle-check',
    description: 'Quality pre-owned tires at unbeatable prices.',
    price: 'Call for pricing',
  },
  {
    id: 'new-tires',
    name: 'New Tire Installation',
    icon: 'package',
    description: 'Full sets or singles — all major brands available to order.',
    price: 'Call for pricing',
  },
  {
    id: 'wheels',
    name: 'Wheel / Rim Sales',
    icon: 'disc',
    description: 'Chrome, black machined, alloy and more.',
    price: 'Call for pricing',
  },
  {
    id: 'tpms',
    name: 'TPMS Sensor Service',
    icon: 'gauge',
    description: 'Sensor replacement and programming.',
    price: 'Call for pricing',
  },
  {
    id: 'seasonal-swap',
    name: 'Seasonal Tire Swap',
    icon: 'arrow-left-right',
    description: 'Winter-to-summer or summer-to-winter changeover.',
    price: 'Call for pricing',
  },
]

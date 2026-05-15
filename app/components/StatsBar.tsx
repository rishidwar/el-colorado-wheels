import { Star } from 'lucide-react'

const stats = [
  { text: '4.6', icon: 'star', suffix: ' Google Rating' },
  { text: '484 Reviews' },
  { text: 'No Appointment Needed' },
  { text: 'Edgewater, CO' },
  { text: 'Open 6 Days' },
  { text: 'Used & New Tires' },
  { text: 'Fast Service' },
  { text: '30+ Years in Business' },
]

function StatItem({ item }: { item: (typeof stats)[0] }) {
  return (
    <span className="flex items-center gap-1.5 whitespace-nowrap px-6 text-sm font-medium text-[#A3A3A3]">
      {item.icon === 'star' && <Star size={13} className="fill-[#E8A820] text-[#E8A820]" />}
      <span>
        {item.text}
        {item.suffix && <span className="text-[#6B6B6B]">{item.suffix}</span>}
      </span>
      <span className="ml-6 text-[#2a2a2a]">·</span>
    </span>
  )
}

export default function StatsBar() {
  const doubled = [...stats, ...stats]

  return (
    <div className="bg-[#141414] border-y border-[#2a2a2a] overflow-hidden py-3">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <StatItem key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

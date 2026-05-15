import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Phone } from 'lucide-react'
import type { Tire } from '@/app/data/tires'
import { tireTypes } from '@/app/data/tires'

interface TireCardProps {
  tire: Tire
}

export default function TireCard({ tire }: TireCardProps) {
  const typeInfo = tireTypes[tire.type]

  return (
    <div className="group bg-[#141414] border border-[#2a2a2a] rounded-md overflow-hidden hover:border-[#E8A820]/50 transition-colors duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-[#1e1e1e] overflow-hidden">
        <Image
          src={tire.image}
          alt={tire.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          <Badge variant={tire.condition === 'used' ? 'used' : 'new'}>
            {tire.condition === 'used' ? 'Used' : 'New'}
          </Badge>
          {tire.popular && <Badge variant="popular">Popular</Badge>}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Badge variant="tire-type" className="mb-3">
          {typeInfo.label}
        </Badge>
        <h3 className="font-oswald font-semibold text-white text-lg leading-tight mb-1">
          {tire.name}
        </h3>
        <p className="text-[#6B6B6B] text-xs mb-2">{tire.size}</p>
        <p className="text-[#A3A3A3] text-sm leading-snug mb-3 line-clamp-2">{tire.description}</p>
        <p className="text-[#6B6B6B] text-xs mb-4">
          <span className="text-[#A3A3A3]">Best for:</span> {tire.bestFor}
        </p>

        <div className="flex flex-col gap-2 border-t border-[#2a2a2a] pt-3">
          <span className="text-[#E8A820] font-semibold text-sm">{tire.price}</span>
          <a
            href="tel:3032375650"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A3A3A3] hover:text-[#E8A820] transition-colors"
          >
            <Phone size={12} />
            Call Us
          </a>
        </div>
      </div>
    </div>
  )
}

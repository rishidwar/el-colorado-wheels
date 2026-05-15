import type { Wheel } from '@/app/data/wheels'

interface WheelCardProps {
  wheel: Wheel
}

export default function WheelCard({ wheel }: WheelCardProps) {
  return (
    <div className="bg-[#141414] border border-[#2a2a2a] rounded-md p-4">
      <p className="text-white font-oswald">{wheel.name}</p>
    </div>
  )
}

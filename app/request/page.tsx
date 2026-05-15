import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Request a Tire or Wheel | El Colorado Wheels',
}

export default function RequestPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs mb-4">
          Request
        </p>
        <h1 className="font-bebas text-white text-5xl leading-none mb-4">
          Request a Tire or Wheel
        </h1>
        <p className="text-[#A3A3A3] mb-8">
          Don&apos;t see what you&apos;re looking for? Call us directly and Hector will help you find exactly what you need.
        </p>
        <a
          href="tel:3032375650"
          className="inline-flex items-center gap-3 bg-[#B81C1C] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#991616] transition-colors text-lg"
        >
          <Phone size={20} />
          Call (303) 237-5650
        </a>
        <p className="mt-8 text-[#6B6B6B] text-sm">
          Online request form coming soon.{' '}
          <Link href="/" className="text-[#E8A820] hover:underline">← Back to home</Link>
        </p>
      </div>
    </div>
  )
}

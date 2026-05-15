'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DualEraPhotos() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Old storefront — monochrome */}
      <motion.div
        initial={{ opacity: 0, x: -48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-md"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/about/storefront-old.webp"
            alt="El Colorado Wheels — the early days"
            fill
            className="object-cover grayscale contrast-105 brightness-95"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-stone-900/25 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-xs text-neutral-400 uppercase tracking-widest font-oswald">
              The Beginning
            </span>
          </div>
        </div>
      </motion.div>

      {/* New storefront — full color */}
      <motion.div
        initial={{ opacity: 0, x: 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative overflow-hidden rounded-md"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/about/storefront-new.webp"
            alt="El Colorado Wheels — today"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-xs text-[#E8A820] uppercase tracking-widest font-oswald">
              Today
            </span>
          </div>
        </div>
      </motion.div>

      {/* Desktop timeline connector — spans both columns */}
      <div className="hidden lg:flex col-span-2 items-center justify-center gap-3 -mt-6">
        <div className="h-px flex-1 bg-[#2a2a2a]" />
        <div className="w-2 h-2 rounded-full bg-[#E8A820]" />
        <div className="h-px w-12 bg-[#E8A820]/40" />
        <span className="text-[#E8A820] text-lg">→</span>
        <div className="h-px w-12 bg-[#E8A820]/40" />
        <div className="w-2 h-2 rounded-full bg-[#E8A820]" />
        <div className="h-px flex-1 bg-[#2a2a2a]" />
      </div>
    </div>
  )
}

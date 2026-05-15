'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/hero/storefront-hero.webp"
          alt="El Colorado Wheels storefront"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-sm mb-4">
            Edgewater, CO · Est. 1990s
          </p>
          <h1 className="font-bebas text-white leading-none mb-6">
            <span className="block" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>
              EL COLORADO
            </span>
            <span className="block text-logo-gradient" style={{ fontSize: 'clamp(2.7rem, 6.9vw, 6.15rem)' }}>
              TIRES &amp; WHEELS
            </span>
          </h1>
          <p className="text-[#A3A3A3] text-lg max-w-xl mb-8 leading-relaxed">
            Tires · Rims · Repairs · Edgewater, CO
            <br />
            <span className="text-[#6B6B6B] text-base">
              Honest service, affordable prices, no appointment needed.
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:3032375650"
              className="inline-flex items-center gap-2.5 bg-[#B81C1C] text-white font-bold px-8 py-3.5 rounded-sm hover:bg-[#991616] transition-colors duration-200"
            >
              <Phone size={18} />
              Call (303) 237-5650
            </a>
            <Link
              href="/#inventory"
              className="inline-flex items-center gap-2 border border-[#E8A820] text-[#E8A820] font-bold px-8 py-3.5 rounded-sm hover:bg-[#E8A820] hover:text-[#0a0a0a] transition-all duration-200"
            >
              Browse Inventory
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  )
}

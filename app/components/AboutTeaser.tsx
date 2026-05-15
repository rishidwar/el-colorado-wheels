'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutTeaser() {
  return (
    <section className="py-24 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '30+', label: 'Years in Business' },
                { value: '4.6★', label: 'Google Rating' },
                { value: '484', label: 'Reviews' },
                { value: 'Zero', label: 'Pressure to Buy' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#141414] border border-[#2a2a2a] rounded-md p-6">
                  <p className="font-bebas text-[#E8A820] leading-none mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    {stat.value}
                  </p>
                  <p className="text-[#A3A3A3] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs mb-4">
              Our Story
            </p>
            <h2
              className="font-bebas text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Honest Service
              <br />
              Since Day One
            </h2>
            <p className="text-[#A3A3A3] leading-relaxed mb-8">
              30 years in Edgewater. Hector and his team built El Colorado Wheels on a simple promise — quality tires, fair prices, no pressure. The same promise they keep every single day.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#E8A820] font-semibold hover:gap-3 transition-all"
            >
              Our Story
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

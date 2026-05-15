'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TireCard from './TireCard'
import { tires } from '@/app/data/tires'

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function InventoryGrid() {
  return (
    <section id="inventory" className="py-24 lg:py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs mb-3">
              Tires &amp; Wheels
            </p>
            <h2
              className="font-bebas text-white leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              New &amp; Used Options
            </h2>
            <p className="text-[#A3A3A3] mt-3 max-w-md">
              Every vehicle, every budget. New and used tires in stock — call us for current availability.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-[#E8A820] font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap"
          >
            Check Availability
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5"
        >
          {tires.map((tire) => (
            <motion.div key={tire.id} variants={fadeUp}>
              <TireCard tire={tire} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 text-center"
        >
          <p className="text-[#6B6B6B] text-sm">
            Don&apos;t see what you need?{' '}
            <a href="tel:3032375650" className="text-[#E8A820] hover:underline">
              Call us — we can source almost any tire.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

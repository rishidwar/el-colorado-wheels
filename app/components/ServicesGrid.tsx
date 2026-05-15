'use client'

import { motion } from 'framer-motion'
import { Wrench, CheckCircle, Package, Disc3, Gauge, ArrowLeftRight, type LucideIcon } from 'lucide-react'
import { services } from '@/app/data/services'

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  'circle-check': CheckCircle,
  package: Package,
  disc: Disc3,
  gauge: Gauge,
  'arrow-left-right': ArrowLeftRight,
}

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs mb-3">
            What We Do
          </p>
          <h2
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Full Service, Every Time
          </h2>
          <p className="text-[#A3A3A3] mt-4 max-w-lg mx-auto">
            From a quick flat patch to a full set of custom wheels — we handle it.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Wrench
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group bg-[#141414] border border-[#2a2a2a] rounded-md p-6 hover:border-[#E8A820]/40 transition-colors duration-300"
              >
                <div className="w-11 h-11 bg-[#E8A820]/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#E8A820]/20 transition-colors">
                  <Icon size={20} className="text-[#E8A820]" />
                </div>
                <h3 className="font-oswald font-semibold text-white text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-[#A3A3A3] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-[#E8A820] text-sm font-semibold">{service.price}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

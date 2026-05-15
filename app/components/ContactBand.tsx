'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function ContactBand() {
  return (
    <section id="contact" className="py-24 lg:py-28 bg-[#141414] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs mb-3">
            Find Us
          </p>
          <h2
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Come See Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {[
            {
              icon: MapPin,
              title: 'Address',
              lines: ['2245 Sheridan Blvd', 'Edgewater, CO 80214'],
              action: {
                label: 'Get Directions',
                href: 'https://maps.google.com/?q=El+Colorado+Wheels+2245+Sheridan+Blvd+Edgewater+CO',
              },
            },
            {
              icon: Phone,
              title: 'Phone',
              lines: ['(303) 237-5650'],
              action: { label: 'Call Now', href: 'tel:3032375650' },
            },
            {
              icon: Clock,
              title: 'Hours',
              lines: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Sat: Call for hours', 'Sun: Closed'],
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-md p-6 text-center"
            >
              <div className="w-11 h-11 bg-[#E8A820]/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <item.icon size={20} className="text-[#E8A820]" />
              </div>
              <h3 className="font-oswald font-semibold text-white uppercase tracking-wider text-sm mb-3">
                {item.title}
              </h3>
              {item.lines.map((line) => (
                <p key={line} className="text-[#A3A3A3] text-sm leading-relaxed">
                  {line}
                </p>
              ))}
              {item.action && (
                <a
                  href={item.action.href}
                  className="inline-block mt-4 text-[#E8A820] text-sm font-semibold hover:underline"
                  target={item.action.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.action.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <a
            href="tel:3032375650"
            className="inline-flex items-center gap-3 bg-[#B81C1C] text-white font-bold px-10 py-4 rounded-sm text-lg hover:bg-[#991616] transition-colors duration-200"
          >
            <Phone size={20} />
            Call (303) 237-5650 — No Appointment Needed
          </a>
        </motion.div>
      </div>
    </section>
  )
}

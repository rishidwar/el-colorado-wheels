'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { reviews } from '@/app/data/tires'

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((i) => (i + 1) % reviews.length)

  return (
    <section className="py-24 lg:py-28 bg-[#141414] border-y border-[#2a2a2a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < 4 ? 'fill-[#E8A820] text-[#E8A820]' : 'fill-[#E8A820]/60 text-[#E8A820]/60'}
              />
            ))}
          </div>
          <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs">
            4.6 · 484 Google Reviews
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Quote size={32} className="text-[#E8A820]/30 mx-auto mb-6" />
              <p
                className="font-playfair italic text-white leading-relaxed mb-8"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
              >
                {reviews[current].text}
              </p>
              <p className="text-[#6B6B6B] text-sm">{reviews[current].attribution}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="p-2 border border-[#2a2a2a] rounded-sm text-[#A3A3A3] hover:border-[#E8A820]/50 hover:text-[#E8A820] transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === current ? 'bg-[#E8A820]' : 'bg-[#2a2a2a]'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 border border-[#2a2a2a] rounded-sm text-[#A3A3A3] hover:border-[#E8A820]/50 hover:text-[#E8A820] transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

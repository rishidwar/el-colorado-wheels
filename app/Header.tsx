'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Tires & Wheels', href: '/#inventory' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b transition-all duration-300 ${
        scrolled ? 'border-[#2a2a2a] backdrop-blur-sm' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 h-full flex items-center py-1" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/brand/logo.webp"
              alt="El Colorado Tires & Wheels"
              height={80}
              width={200}
              className="object-contain h-full w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-oswald text-sm font-medium uppercase tracking-wider text-[#A3A3A3] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:3032375650"
              className="hidden sm:inline-flex items-center gap-2 bg-[#B81C1C] text-white font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-[#991616] transition-colors duration-200"
            >
              <Phone size={15} />
              (303) 237-5650
            </a>
            <button
              className="lg:hidden p-2 text-[#A3A3A3] hover:text-white"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[#2a2a2a] py-4 space-y-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-oswald text-sm font-medium uppercase tracking-wider text-[#A3A3A3] hover:text-white py-2.5 px-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:3032375650"
              className="mt-3 flex items-center gap-2 bg-[#B81C1C] text-white font-bold text-sm px-5 py-3 rounded-sm hover:bg-[#991616] transition-colors"
            >
              <Phone size={15} />
              (303) 237-5650
            </a>
          </motion.div>
        )}
      </div>
    </header>
  )
}

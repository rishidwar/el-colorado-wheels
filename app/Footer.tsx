import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/brand/logo.webp"
              alt="El Colorado Tires & Wheels"
              height={224}
              width={560}
              className="object-contain h-56 w-auto mb-4"
            />
            <p className="text-[#A3A3A3] text-sm leading-relaxed">
              Serving the Edgewater and Denver community with honest service, affordable prices, and no appointment needed.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-oswald font-semibold text-white uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Services', href: '/#services' },
                { label: 'Tires & Wheels', href: '/#inventory' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A3A3A3] text-sm hover:text-[#E8A820] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-oswald font-semibold text-white uppercase tracking-wider text-sm mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-[#A3A3A3] text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#E8A820]" />
                <span>2245 Sheridan Blvd<br />Edgewater, CO 80214</span>
              </li>
              <li>
                <a
                  href="tel:3032375650"
                  className="flex items-center gap-2.5 text-[#A3A3A3] text-sm hover:text-[#E8A820] transition-colors"
                >
                  <Phone size={15} className="text-[#E8A820]" />
                  (303) 237-5650
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#A3A3A3] text-sm">
                <Clock size={15} className="mt-0.5 flex-shrink-0 text-[#E8A820]" />
                <span>Mon – Fri: 8:00 AM – 6:00 PM<br />Sat: Call for hours<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#6B6B6B] text-xs">
            © {new Date().getFullYear()} El Colorado Wheels. All rights reserved.
          </p>
          <p className="text-[#6B6B6B] text-xs">
            2245 Sheridan Blvd, Edgewater, CO 80214
          </p>
        </div>
      </div>
    </footer>
  )
}

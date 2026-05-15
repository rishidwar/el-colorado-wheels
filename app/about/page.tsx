import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import DualEraPhotos from '@/app/components/DualEraPhotos'

export const metadata: Metadata = {
  title: 'About | El Colorado Wheels — 30 Years in Edgewater, CO',
  description: 'The story of El Colorado Wheels — 30 years of honest tire service in Edgewater, CO. Hector and his team have served the Denver community since the 1990s.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Page header */}
      <div className="pt-32 pb-16 bg-[#0a0a0a] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs mb-4">
            Our Story
          </p>
          <h1
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            30 Years in Edgewater
          </h1>
          <p className="text-[#A3A3A3] mt-4 text-lg max-w-lg">
            Same family. Same promise. Better every year.
          </p>
        </div>
      </div>

      {/* Dual-era photos section */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,96,26,0.06) 0%, transparent 70%),
            linear-gradient(135deg, #120404 0%, #180A02 30%, #100C02 60%, #080C04 85%, #060808 100%)
          `,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualEraPhotos />

          {/* Pull quote */}
          <div className="mt-12 text-center">
            <blockquote
              className="font-playfair italic text-[#E8A820]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}
            >
              &ldquo;30 years in Edgewater. Same family, same promise.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs mb-6">
            How It Started
          </p>

          <div className="space-y-6 text-[#A3A3A3] leading-relaxed">
            <p>
              El Colorado Wheels opened its doors in Edgewater over 30 years ago on a simple idea: the neighborhood deserved a tire shop that treated people right. Not a chain with corporate quotas. Not a place that tells you the tire can&apos;t be patched when it can. A real shop, run by real people, for the community around it.
            </p>
            <p>
              Hector built this place from the ground up. The white walls and hand-painted signs you see in old photos gave way to a renovated shop with a look as bold as the work that happens inside — but the approach never changed. Fast, honest service. No appointments needed. No pressure to buy something you don&apos;t need.
            </p>
            <p>
              From a quick flat repair on your daily driver to a full set of all-terrain tires for your lifted truck — the El Colorado team handles it all with the same attitude they always have. That&apos;s why customers keep coming back for years, and why they send their families too.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#141414] border-y border-[#2a2a2a] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '30+', label: 'Years in Business' },
              { value: '4.6★', label: 'Google Rating' },
              { value: '484', label: 'Google Reviews' },
              { value: 'ECW', label: "Edgewater's Tire Shop" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-bebas text-[#E8A820] text-4xl leading-none mb-1">{stat.value}</p>
                <p className="text-[#6B6B6B] text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services preview */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-oswald text-[#E8A820] uppercase tracking-[0.3em] text-xs mb-4">
            What We Do
          </p>
          <p className="text-[#A3A3A3] text-lg mb-6">
            Flat repairs · Used tires · New tire sets · Rim sales · TPMS sensors · Seasonal swaps
          </p>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-[#E8A820] font-semibold hover:gap-3 transition-all"
          >
            See All Services →
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 bg-[#141414] border-t border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-white text-5xl leading-none mb-4">Come See Us</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-[#A3A3A3] text-sm">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[#E8A820]" />
              2245 Sheridan Blvd, Edgewater, CO 80214
            </span>
            <span className="hidden sm:block text-[#2a2a2a]">·</span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-[#E8A820]" />
              (303) 237-5650
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3032375650"
              className="inline-flex items-center justify-center gap-2.5 bg-[#B81C1C] text-white font-bold px-8 py-3.5 rounded-sm hover:bg-[#991616] transition-colors"
            >
              <Phone size={17} />
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=El+Colorado+Wheels+2245+Sheridan+Blvd+Edgewater+CO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-[#E8A820] text-[#E8A820] font-bold px-8 py-3.5 rounded-sm hover:bg-[#E8A820] hover:text-[#0a0a0a] transition-all"
            >
              <MapPin size={17} />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

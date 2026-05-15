# Design System — El Colorado Wheels

## Brand Identity

The shop's own hand-painted signage defines the brand:
- Dark charcoal building with bold painted "EL COLORADO" in red-orange
- Gold/amber retro-script logo sign on black board with decorative swirl
- Red garage doors, authentic tire shop character

The website should feel like the shop looks: **bold, dark, warm, authentic** — not generic auto-parts-store blue.

---

## Color Palette

```css
/* Core */
--color-black:       #0f0f0f;   /* Near-black background */
--color-surface:     #1a1a1a;   /* Card backgrounds */
--color-border:      #2a2a2a;   /* Subtle borders */

/* Brand */
--color-gold:        #F5A623;   /* Primary accent — from logo sign */
--color-gold-dark:   #D4891A;   /* Hover state */
--color-red:         #CC2200;   /* Secondary accent — from storefront lettering */
--color-red-light:   #E03020;   /* Highlight / badge */

/* Text */
--color-white:       #FFFFFF;
--color-muted:       #9CA3AF;   /* Gray-400 — secondary text */
--color-subtle:      #6B7280;   /* Gray-500 — labels, captions */
```

### Usage Rules
- **Background:** Always `--color-black` or `--color-surface`
- **Primary CTA buttons:** `--color-gold` text on `--color-black`, or `--color-black` bg with `--color-gold` border
- **Secondary CTA / badges:** `--color-red` background
- **Never** use white or light backgrounds — this is a dark-mode-first brand
- The gold + red combination should read like the shop sign: warm, bold, Western

---

## Typography

### Fonts
| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero | `Bebas Neue` | 400 | All-caps impact for section headers |
| Heading | `Oswald` | 500–700 | Subheadings, card titles |
| Body | `Inter` | 400–500 | Body copy, labels, UI |
| Accent / Logo | `Playfair Display` | 700 italic | "El Colorado" wordmark if needed |

All fonts loaded via `next/font/google` — zero layout shift.

### Scale
```
Hero:     clamp(3.5rem, 8vw, 7rem)   — "EL COLORADO WHEELS"
H1:       clamp(2rem, 4vw, 3.5rem)
H2:       clamp(1.5rem, 3vw, 2.5rem)
H3:       1.25rem / 1.5rem
Body:     1rem (16px)
Small:    0.875rem
```

---

## Spacing System

Standard Tailwind 4px grid. Key layout values:
- Section padding: `py-20` (80px) desktop, `py-12` mobile
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6` (24px)
- Card padding: `p-6`

---

## Component Rules

### Buttons
- **Primary:** `bg-[#F5A623] text-black font-bold px-8 py-3 rounded-sm hover:bg-[#D4891A] transition`
- **Secondary:** `border border-[#F5A623] text-[#F5A623] px-8 py-3 rounded-sm hover:bg-[#F5A623] hover:text-black transition`
- **Call to Action (phone):** `bg-[#CC2200] text-white` — used for "Call Now" only
- No rounded-full pills — use `rounded-sm` or `rounded` for industrial feel

### Cards (Tire / Wheel)
- Background: `bg-[#1a1a1a]`
- Border: `border border-[#2a2a2a] hover:border-[#F5A623] transition`
- Image: 16:9 or 1:1 aspect ratio, `next/image` with WebP
- Bottom: Name, specs pill badges, price range

### Badges / Tags
- Tire type: small pill `bg-[#2a2a2a] text-[#F5A623] text-xs px-2 py-1 rounded`
- "Used" tag: `bg-[#CC2200] text-white`
- "In Stock" tag: `bg-green-900 text-green-400`

---

## Animation System (Framer Motion)

### Scroll Reveal (whileInView)
```ts
// Standard fade-up for most sections
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Staggered card grid
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}
```

### Hero Parallax
- `useScroll` + `useTransform` on hero image — subtle Y offset as user scrolls
- Hero text fade-in on mount with `initial={{ opacity: 0, y: 20 }}`

### Header
- Transparent over hero, transitions to `bg-[#0f0f0f]/95 backdrop-blur-sm` on scroll past 80px
- `useScroll` with scrollY threshold

### All animations wrapped in:
```tsx
<MotionConfig reducedMotion="user">
```

---

## Layout Sections (Home Page Order)

1. **Header** — transparent → sticky solid on scroll
2. **Hero** — full-bleed storefront photo, "EL COLORADO WHEELS" overlaid, CTA buttons
3. **Stats Bar** — scrolling marquee: "4.6 ⭐ Google Rating · 484 Reviews · Edgewater, CO · Est. [year] · No Appointment Needed"
4. **Services Grid** — 6 service cards, staggered scroll reveal
5. **Inventory Preview** — 4-card grid linking to `/inventory`, with "View All" CTA
6. **Reviews Carousel** — 3 rotating testimonials from real Google reviews
7. **About Teaser** — Hector's story, one shop photo, link to `/about`
8. **Contact / CTA Band** — address, phone, hours, Google Maps embed
9. **Footer** — minimal, links, social

---

## Image Strategy

- Shop photos: **2 maximum** — hero (storefront wide shot) and logo sign closeup
- All other images: **product photography** (tires and wheels) — sourced from manufacturer/stock
- All images converted to `.webp` via `sharp` at build time
- All served via `next/image` — lazy loaded, responsive srcset, blur placeholder
- Vercel edge CDN caches after first delivery

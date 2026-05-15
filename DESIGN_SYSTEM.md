# Design System — El Colorado Wheels

## Brand Identity

Pulled directly from the three confirmed brand photos.
The physical sign IS the brand — the website mirrors its energy.

---

## Color Palette

### Logo Gradient (source of truth — read directly from sign photo)

The "COLORADO" lettering on the sign runs a 5-stop gradient top-to-bottom:

```
Stop 1 (top)     →  Deep Crimson     #B81C1C
Stop 2           →  Warm Red         #CC3010
Stop 3 (center)  →  Burnt Orange     #D4601A
Stop 4           →  Amber Gold       #E8A820
Stop 5 (bottom)  →  Yellow-Green     #C8C020
Swirl / Bird     →  Forest Green     #3A8C35
```

This gradient is THE brand asset. It appears on the logo, drives the
About section background, and accents key interactive elements.

### Site Color Variables

```css
:root {
  /* Backgrounds */
  --bg-base:        #0a0a0a;   /* Page background — near black */
  --bg-surface:     #141414;   /* Cards, panels */
  --bg-elevated:    #1e1e1e;   /* Hover states, tooltips */
  --bg-border:      #2a2a2a;   /* Subtle dividers */

  /* Brand — from logo gradient */
  --brand-red:      #B81C1C;   /* Deep crimson — logo top */
  --brand-orange:   #D4601A;   /* Burnt orange — logo mid */
  --brand-gold:     #E8A820;   /* Amber gold — PRIMARY UI accent */
  --brand-gold-dim: #C48C18;   /* Hover/pressed state of gold */
  --brand-green:    #3A8C35;   /* Sign swirl — use sparingly */

  /* Logo gradient shorthand — reuse everywhere */
  --logo-gradient: linear-gradient(
    to bottom,
    #B81C1C 0%,
    #CC3010 25%,
    #D4601A 50%,
    #E8A820 75%,
    #C8C020 100%
  );

  /* Text */
  --text-primary:   #FFFFFF;
  --text-secondary: #A3A3A3;   /* Neutral-400 */
  --text-muted:     #6B6B6B;   /* Neutral-500 */

  /* Status */
  --status-stock:   #22C55E;   /* Green-500 — In Stock */
  --status-low:     #EAB308;   /* Yellow-500 — Low Stock */
  --status-out:     #EF4444;   /* Red-500 — Out of Stock */
}
```

### Usage Rules
- **All backgrounds:** Dark only — `--bg-base` or `--bg-surface`. Never white.
- **Primary CTA:** `--brand-gold` background with `#0a0a0a` text (e.g. "Call Now")
- **Secondary CTA:** `border: 1px solid --brand-gold`, gold text, transparent bg
- **Destructive / urgency:** `--brand-red` (e.g. "Used — Limited Stock" badge)
- **Logo gradient:** Reserved for: logo, About section bg, section dividers, hover text effects
- **Green:** Only for the logo swirl element and In Stock status badges

---

## Logo Usage

### In Header (all pages)
```tsx
<Image
  src="/images/brand/logo-sign.webp"
  alt="El Colorado Tires & Wheels"
  height={48}
  width={144}
  className="object-contain"
  priority
/>
```
The sign's own black background blends with the dark header.
No border, no box shadow — it sits as if painted there.

### Logo Sign Treatment
The physical sign is near-square. For the header we crop to just the
"EL COLORADO / Tires & Wheels" portion, excluding excess black border.
At 48px height the gradient letters are fully legible.

### Favicon
`ECW` initials using the logo gradient as fill, on `#0a0a0a` background.
File: `public/favicon.ico` + `public/icon.png` (32×32 and 180×180 for Apple)

---

## About Section — Gradient Background

The About section is the ONE place the logo gradient appears as a
surface treatment — everywhere else is neutral dark.

### Background Approach
```css
/* About section wrapper */
.about-section {
  background: linear-gradient(
    135deg,
    #120404 0%,    /* very dark crimson tint */
    #180A02 30%,   /* very dark orange-brown tint */
    #100C02 60%,   /* very dark amber tint */
    #080C04 85%,   /* very dark green tint */
    #060808 100%   /* near black */
  );
}
```

These are VERY dark — just enough warmth to feel distinct from the
rest of the page without looking garish. The photos and text sit on
top; the gradient is felt, not seen.

Optionally add a subtle radial glow at center:
```css
background:
  radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,96,26,0.08) 0%, transparent 70%),
  linear-gradient(135deg, #120404 0%, #080C04 100%);
```

---

## Typography

### Font Stack
| Role | Font | Weight | Notes |
|---|---|---|---|
| Hero display | `Bebas Neue` | 400 | All-caps, maximum impact |
| Section headings | `Oswald` | 600–700 | Bold but legible |
| UI / nav / body | `Inter` | 400–500 | Clean, professional |
| About pull quote | `Playfair Display` | 700 italic | Warmth for the story section only |

### Scale
```
Hero H1:    clamp(3.5rem, 9vw, 8rem)   — "EL COLORADO WHEELS"
Section H2: clamp(2rem, 4vw, 3.5rem)
Card H3:    clamp(1.1rem, 2vw, 1.4rem)
Body:       1rem (16px) / 1.6 line-height
Small:      0.875rem
Label:      0.75rem uppercase tracking-wider
```

---

## Layout System

### Container
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Section Spacing
- Desktop: `py-24` (96px)
- Mobile: `py-14` (56px)
- Exception: About section uses `py-28` — more breathing room for the story

### Grid Patterns
```
Services:   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-6
Tires:      grid-cols-2 sm:grid-cols-3 lg:grid-cols-3   gap-5
About:      grid-cols-1 lg:grid-cols-2                  gap-12
```

---

## Component Rules

### Buttons
```tsx
// Primary — gold (main CTAs)
"bg-[#E8A820] text-[#0a0a0a] font-bold px-8 py-3 rounded-sm
 hover:bg-[#C48C18] transition-colors duration-200"

// Phone CTA — red (call now only)
"bg-[#B81C1C] text-white font-bold px-8 py-3 rounded-sm
 hover:bg-[#991616] transition-colors duration-200"

// Outline — gold border
"border border-[#E8A820] text-[#E8A820] px-8 py-3 rounded-sm
 hover:bg-[#E8A820] hover:text-[#0a0a0a] transition-all duration-200"
```

### Cards (Tire / Wheel)
```tsx
"bg-[#141414] border border-[#2a2a2a] rounded-md overflow-hidden
 hover:border-[#E8A820]/50 transition-colors duration-300"
```

### Badges
```tsx
"text-xs font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wide"

// Tire type  → bg-[#1e1e1e] text-[#E8A820]
// "Used"     → bg-[#B81C1C]/20 text-[#E87070] border border-[#B81C1C]/40
// "New"      → bg-green-950 text-green-400 border border-green-800
// "Popular"  → bg-[#E8A820]/10 text-[#E8A820] border border-[#E8A820]/30
```

---

## Animation System (Framer Motion)

### Scroll Reveal
```ts
// Standard section fade-up
const fadeUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}

// Card grid stagger
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } }
}
```

### Hero Parallax
```ts
const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 600], [0, 180])   // background moves at 30% rate
const opacity = useTransform(scrollY, [0, 400], [1, 0]) // text fades on scroll
```

### Header Scroll Transition
```ts
// Transparent → solid black at 80px scroll depth
const { scrollY } = useScroll()
const isScrolled = useMotionValueEvent(scrollY, "change", (val) => val > 80)
```

### About Photo Reveal (special)
Old photo: slides in from left + grayscale applied via CSS  
New photo: slides in from right + color  
Both use `whileInView` with `once: true`

### Reduced Motion
```tsx
<MotionConfig reducedMotion="user">
  {children}
</MotionConfig>
```
Wraps entire `layout.tsx` — respects OS accessibility preference.

---

## About Page — Dual Era Design Spec

### Layout
```
┌────────────────────────────────────────────┐
│         GRADIENT BACKGROUND                 │
│   ┌───────────────┐   ┌───────────────┐    │
│   │  OLD PHOTO    │   │  NEW PHOTO    │    │
│   │  (grayscale)  │   │  (full color) │    │
│   │               │ → │               │    │
│   │  "The         │   │  "Today"      │    │
│   │   Beginning"  │   │               │    │
│   └───────────────┘   └───────────────┘    │
│                                             │
│   "30 Years of Honest Service"              │
│   [story copy]                              │
└────────────────────────────────────────────┘
```

### Photo Treatment
```tsx
// Old storefront — monochrome
<div className="relative overflow-hidden rounded-md">
  <Image
    src="/images/about/storefront-old.webp"
    alt="El Colorado Wheels — the early days"
    className="grayscale contrast-105 brightness-95"
  />
  <div className="absolute inset-0 bg-stone-900/25 mix-blend-multiply" />
  <div className="absolute bottom-0 left-0 right-0 p-4
                  bg-gradient-to-t from-black/80 to-transparent">
    <span className="text-xs text-neutral-400 uppercase tracking-widest">
      The Beginning
    </span>
  </div>
</div>

// New storefront — full color
<div className="relative overflow-hidden rounded-md">
  <Image
    src="/images/about/storefront-new.webp"
    alt="El Colorado Wheels — today"
  />
  <div className="absolute bottom-0 left-0 right-0 p-4
                  bg-gradient-to-t from-black/80 to-transparent">
    <span className="text-xs text-[#E8A820] uppercase tracking-widest">
      Today
    </span>
  </div>
</div>
```

### Timeline connector (desktop only)
Between the two photos: a simple horizontal arrow `→` or a thin line
with a dot at each end, in `--brand-gold` color. Mobile: removed.

### Pull quote (Playfair Display italic)
```
"30 years in Edgewater. Same family, same promise."
```
Centered below the two photos, large, warm, in `--brand-gold`.

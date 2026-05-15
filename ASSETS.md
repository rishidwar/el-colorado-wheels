# Asset Inventory — El Colorado Wheels

## CONFIRMED Brand Photos (User-Provided, Phase 1 Ready)

These three photos were directly provided and are the foundation of the entire visual identity.
Save each to its path below, then run `node scripts/convert-images.js` to produce `.webp`.

---

### Photo 1 — Logo Sign (HEADER LOGO)
**File:** `public/images/brand/logo-sign.webp`  
**Source:** User-provided (Google Maps closeup of shop sign)  
**Use:** Site-wide header logo — displayed in `<Header>` as `<Image>` at ~44px height  
**Status:** Placeholder (save actual photo here)

**Description:**
- Black background
- "EL" in small crimson text at top
- "COLORADO" in large decorative retro font with full gradient:
  deep red → orange → gold → yellow-green → green at base
- "Tires & Wheels" in cream/white decorative script below COLORADO
- Green bird/flame/phoenix swirl decorative element at bottom
- Near-perfect square crop — works as logo naturally

**How to use in header:**
```tsx
<Image
  src="/images/brand/logo-sign.webp"
  alt="El Colorado Tires & Wheels"
  height={48}
  width={144}   // ~3:1 ratio
  className="object-contain"
  priority
/>
```
The sign's black background blends seamlessly with the dark header.
No white box, no border — it sits naturally like a native logo.

---

### Photo 2 — Old Storefront (ABOUT PAGE — monochrome era)
**File:** `public/images/about/storefront-old.webp`  
**Source:** User-provided (older Google Maps photo, ~2019)  
**Use:** About page — left panel, rendered in CSS grayscale  
**Status:** Placeholder (save actual photo here)

**Description:**
- White/light brick building facade
- "EL COLORADO" in large solid red block letters on white wall
- "303-237-5650" in red above
- "TIRE REPAIR" and "WHEELS" painted vertically on bay columns in red
- Open garage bay showing tire racks, tools, stacked tires
- Worker visible inside bay
- Flat overcast sky — suits grayscale treatment perfectly
- Raw, working-class, humble origins

**CSS treatment:**
```css
filter: grayscale(100%) contrast(1.05) brightness(0.95);
```
Add subtle sepia-like overlay via:
```tsx
<div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply" />
```

---

### Photo 3 — New Storefront (HERO + ABOUT PAGE — full color)
**File:** `public/images/about/storefront-new.webp`  
**Also used as:** `public/images/hero/storefront-hero.webp` (same source photo)  
**Source:** User-provided (Jan 2026 Google Maps photo)  
**Use:** Hero section background + About page right panel  
**Status:** Placeholder (save actual photo here)

**Description:**
- Dark charcoal/painted building facade — major glow-up from white
- "EL COLORADO" in gradient-painted letters (red → orange → teal)
- "Tires" in teal decorative script to the right
- "303-237-5650" in white above
- Red roll-up garage doors
- Black Chevy Tahoe/Suburban with custom wheels in foreground
- Tires stacked along building edges
- Overcast sky adds drama without harsh shadows

**Hero overlay:** `bg-black/60` gradient from bottom to ensure headline legibility

---

## Image Folder Map

```
public/images/
├── brand/
│   └── logo-sign.webp          ← HEADER LOGO (all pages)
├── hero/
│   └── storefront-hero.webp    ← HOMEPAGE HERO background
├── about/
│   ├── storefront-old.webp     ← ABOUT: monochrome / before
│   └── storefront-new.webp     ← ABOUT: full color / after
├── tires/
│   ├── all-season.webp         ← Tire inventory cards
│   ├── summer.webp
│   ├── winter.webp
│   ├── all-terrain.webp
│   ├── off-road.webp
│   └── performance.webp
└── wheels/                     ← Phase 6
    ├── chrome-5-spoke.webp
    ├── black-machined.webp
    ├── alloy-silver.webp
    ├── matte-black.webp
    └── chrome-multi-spoke.webp
```

---

## Tire Images — Sourcing Plan (Phase 2)

No Discount Tire images — those are manufacturer-licensed assets
specific to their dealer agreements. Use these instead:

| File | Search Term | Best Source |
|---|---|---|
| `all-season.webp` | "all season tire tread close up" | Unsplash / Michelin press kit |
| `winter.webp` | "winter snow tire tread" | Unsplash / Continental press kit |
| `all-terrain.webp` | "all terrain truck tire" | BFGoodrich media / Unsplash |
| `off-road.webp` | "mud terrain tire" | Falken media / Pexels |
| `summer.webp` | "summer performance low profile tire" | Michelin media / Pexels |
| `performance.webp` | "sport performance tire sidewall" | Goodyear media / Unsplash |

**Free commercial license sources:**
- [unsplash.com](https://unsplash.com) — search terms above
- [pexels.com](https://pexels.com) — same terms
- [falkentire.com/media](https://falkentire.com) — manufacturer press kit
- [bfgoodrichtires.com](https://bfgoodrichtires.com) — dealer media

**Download process:**
1. Open image on Unsplash/Pexels → click Download → save to `public/images/tires/[name].jpg`
2. Run `node scripts/convert-images.js` → produces `.webp` at 85% quality
3. Delete original `.jpg` — keep `.webp` only
4. Target file size: under 150KB per tire card image

---

## Image Conversion Script

`scripts/convert-images.js` — uses `sharp` (already in rishidwar stack):

```js
// Batch converts all .jpg/.png in public/images/ to .webp at 85% quality
// Run: node scripts/convert-images.js
```

### next.config.js image settings:
```js
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 64, 96, 128, 256, 384],
}
```

---

## Fonts (via next/font — no download needed)

| Font | Google Fonts ID | Used For |
|---|---|---|
| Bebas Neue | `Bebas_Neue` | Hero title, section headers |
| Oswald | `Oswald` | Subheadings, card titles, nav |
| Inter | `Inter` | Body, labels, UI elements |
| Playfair Display | `Playfair_Display` | About section pull quotes only |

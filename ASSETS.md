# Asset Inventory — El Colorado Wheels

## Shop Photos (from Google Maps — 2 max on website)

| File | Source | Use | Status |
|---|---|---|---|
| `public/images/hero/storefront-hero.webp` | Google Maps Jan 2026 (Eyon Splicer) | Hero background | Placeholder |
| `public/images/hero/logo-sign.webp` | Google Maps Nov 2024 | About section / logo ref | Placeholder |

**Notes:**
- Both photos must be converted to `.webp` via `sharp` before use
- Hero image gets a dark overlay (`bg-black/60`) so text is always readable
- Request high-res photos directly from owner for best quality
- Logo sign (gold script on black board) is the clearest representation of brand identity

---

## Tire Category Images (product-style, not shop photos)

All sourced from manufacturer press kits or royalty-free automotive stock.
Must be consistent style: clean background or subtle dark studio shot.

| File | Tire Type | Description | Status |
|---|---|---|---|
| `public/images/tires/all-season.webp` | All-Season | Balanced tread, year-round | Placeholder |
| `public/images/tires/summer.webp` | Summer/Performance | Low-profile, sporty | Placeholder |
| `public/images/tires/winter.webp` | Winter/Snow | Deep siping, M+S rated | Placeholder |
| `public/images/tires/all-terrain.webp` | All-Terrain | Aggressive tread, truck/SUV | Placeholder |
| `public/images/tires/off-road.webp` | Off-Road/Mud | Max tread depth, chunky | Placeholder |
| `public/images/tires/performance.webp` | Performance | Ultra-low profile, track-ready | Placeholder |

**Sources to pull from:**
- Michelin, Goodyear, Falken, Cooper press kit images (freely usable for reference)
- Unsplash: search "tire", "mud tire", "snow tire" — free commercial license
- Pexels: "car tire", "off road tire" — free commercial license

---

## Wheel Images (product-style)

| File | Wheel Type | Description | Status |
|---|---|---|---|
| `public/images/wheels/chrome-5-spoke.webp` | Chrome 5-Spoke | Mirror finish, classic | Placeholder |
| `public/images/wheels/black-machined.webp` | Black Machined | Dark with machined face | Placeholder |
| `public/images/wheels/alloy-silver.webp` | Alloy Silver | OEM-style brushed | Placeholder |
| `public/images/wheels/matte-black.webp` | Matte Black | Flat finish, aggressive | Placeholder |
| `public/images/wheels/chrome-multi-spoke.webp` | Chrome Multi-Spoke | 10+ spoke chrome | Placeholder |

**Sources:**
- Carid.com product images (for reference/inspiration only)
- Unsplash: "alloy wheel", "car rim"
- Manufacturer sites: KMC Wheels, XD Series, Method Race Wheels — all have press assets

---

## Image Conversion Pipeline

All images converted to `.webp` before commit using `sharp`:

```bash
# Script: scripts/convert-images.js
# Run: node scripts/convert-images.js
# Converts all .jpg/.png in public/images/ to .webp
# Reduces file size 40-70% automatically
```

### `next/image` settings in `next.config.js`:
```js
images: {
  formats: ['image/avif', 'image/webp'],  // AVIF first, WebP fallback
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 64, 96, 128, 256, 384],
}
```

---

## Icons / Logo

| File | Description | Status |
|---|---|---|
| `public/icons/logo.svg` | Vector logo — to be designed | Placeholder |
| `public/favicon.ico` | Browser tab icon | Placeholder |

**Logo Design Direction:**
- Should echo the gold-script-on-black of the physical sign
- SVG format for perfect scaling at all sizes
- Simplified version of "El Colorado Wheels" or just "ECW" monogram for favicon
- Consider hiring a designer to vectorize the actual shop sign lettering

---

## Fonts (loaded via next/font — no files needed)

| Font | Google Fonts Name | Used For |
|---|---|---|
| Bebas Neue | `Bebas_Neue` | Hero + section titles |
| Oswald | `Oswald` | Subheadings, card titles |
| Inter | `Inter` | Body text, UI |

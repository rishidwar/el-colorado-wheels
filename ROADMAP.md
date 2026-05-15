# El Colorado Wheels — Development Roadmap

**Project:** elcolorado.com  
**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · Framer Motion · Vercel  
**GitHub:** github.com/rishidwar/el-colorado-wheels  
**Branch strategy:** See Git Workflow section below

---

## Branch Strategy

```
main          → Production (auto-deploys to Vercel)
develop       → Integration branch (all phases merge here first)
phase-1/homepage
phase-2/inventory-tires
phase-3/inner-pages
phase-4/request-form
phase-5/vehicle-lookup
phase-6/wheels-section
phase-7/admin
```

**Rule:** No direct commits to `main`. Every phase lives on its own branch,
gets reviewed, then merges to `develop`, then `develop` merges to `main` for release.

---

## Image Sourcing Plan

### Why NOT Discount Tire's Images
Discount Tire's product photos are either licensed from manufacturers specifically
to them, or their own studio photography. Using them commercially on another
site creates copyright liability even as placeholders.

### Where to Get Tire Images (Legitimate)

| Source | License | How |
|---|---|---|
| **Michelin press kit** | Free for reference/editorial | michelin.com/en/press-kit |
| **Falken Tire media** | Free for dealers | falkentire.com/media |
| **BFGoodrich media** | Free for dealers | bfgoodrichtires.com/media |
| **Cooper Tire media** | Free for dealers | coopertire.com/media-center |
| **Unsplash** | Free commercial license | unsplash.com — search "tire", "mud tire", "snow tire" |
| **Pexels** | Free commercial license | pexels.com — same searches |

### Download Process (to be run once per image)
1. Open manufacturer/Unsplash URL in browser
2. Right-click image → Open image in new tab
3. Save full-size to `public/images/tires/[name].jpg` or `.png`
4. Run `node scripts/convert-images.js` → outputs `.webp` to same folder
5. Delete original `.jpg`/`.png`, keep only `.webp`

### Image Script: `scripts/convert-images.js`
Uses `sharp` (already in rishidwar stack) to batch-convert all
`.jpg`/`.png` in `public/images/` to `.webp` at 85% quality.
Reduces file size 40–70% with zero visible quality loss.

### Tire Images Needed (Phase 1 minimum)

| File | What to Search | Priority |
|---|---|---|
| `all-season.webp` | "all season tire tread" | P1 |
| `winter.webp` | "winter snow tire" | P1 |
| `all-terrain.webp` | "all terrain truck tire" | P1 |
| `off-road.webp` | "mud terrain tire" | P1 |
| `summer.webp` | "summer performance tire" | P2 |
| `performance.webp` | "low profile performance tire" | P2 |

---

## PHASE 1 — Homepage (Deploy Target: First Release)

**Branch:** `phase-1/homepage`  
**Goal:** Fully functional homepage that looks world-class. Zero broken links —
any nav item that doesn't have a page yet simply doesn't appear or scrolls
to the relevant homepage section instead.  
**Deploy:** Merges to `main` → live at elcolorado.com via Vercel

### What Phase 1 Includes

#### 1.1 Project Bootstrap
- [ ] `npx create-next-app@latest` with TypeScript, Tailwind, App Router
- [ ] Install: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `sharp`
- [ ] Install: `@radix-ui/react-*` (dialog, slot) for accessible components
- [ ] Set up `next/font` with Bebas Neue, Oswald, Inter
- [ ] Copy `components/ui/` from rishidwar (button, card, badge, input, label)
- [ ] Set up Tailwind theme with brand colors in `tailwind.config.js`
- [ ] Set up Vercel project, connect GitHub repo, auto-deploy on push to `main`
- [ ] Configure `next.config.js` with image formats (webp, avif)
- [ ] Add `.env.example` and `.gitignore`

#### 1.2 Layout Shell
- [ ] `app/layout.tsx` — root layout, fonts, metadata, Vercel Analytics
- [ ] `app/globals.css` — Tailwind base, CSS variables for brand colors
- [ ] `app/Header.tsx` — sticky nav, transparent → solid on scroll
- [ ] `app/Footer.tsx` — minimal, address, phone, copyright
- [ ] `app/ConditionalShell.tsx` — wraps header/footer (same pattern as rishidwar)

**Header nav items (Phase 1 — scroll-to anchors only, no page links):**
```
Logo | Services | Inventory | About | Contact | [Call Now button]
```
All nav items scroll to the homepage section with that ID.
No href links to pages that don't exist yet.

#### 1.3 Hero Section (`app/components/HeroSection.tsx`)
- [ ] Full-bleed shop photo background (`storefront-hero.webp`)
- [ ] Dark overlay `bg-black/65` for text readability
- [ ] Parallax scroll effect: `useScroll` + `useTransform` moves background Y at 0.3x rate
- [ ] Headline: `EL COLORADO WHEELS` — Bebas Neue, `clamp(4rem, 10vw, 8rem)`
- [ ] Sub: `Tires · Rims · Repairs · Edgewater, CO` — Oswald, gold color
- [ ] Body copy from `CONTENT.md`
- [ ] Two CTAs: `Call (303) 237-5650` (red) + `Browse Tires ↓` (gold, scroll-to anchor)
- [ ] Fade-in animation on mount: headline → sub → CTAs staggered 150ms apart
- [ ] Mobile: stack CTAs vertically, reduce font size

#### 1.4 Stats Bar (`app/components/StatsBar.tsx`)
- [ ] Full-width dark band `bg-[#1a1a1a]` below hero
- [ ] Infinite scrolling marquee (CSS animation, no JS library needed)
- [ ] Content: `4.6 ⭐ Google Rating · 484 Reviews · No Appointment Needed · Edgewater, CO · Open Mon–Sat · Used & New Tires · Fast Service · Est. Edgewater`
- [ ] Gold text on dark background
- [ ] Pauses on hover

#### 1.5 Services Grid (`app/components/ServicesGrid.tsx`)
- [ ] Section ID: `#services`
- [ ] 6 service cards in responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- [ ] Each card: lucide-react icon, name, one-line description, starting price or "Call for quote"
- [ ] Staggered scroll reveal: `whileInView` + `staggerChildren: 0.1`
- [ ] Hover: card border brightens to gold, icon scales 1.1x
- [ ] Cards from `app/data/services.ts` static file
- [ ] Services: Flat Repair · Used Tires · New Tire Install · Rim Sales · TPMS Sensor · Seasonal Swap

#### 1.6 Inventory Preview (`app/components/InventoryGrid.tsx` — homepage subset)
- [ ] Section ID: `#inventory`
- [ ] Section headline: `Tires` / sub: `New and used — every size, every budget`
- [ ] 6 tire type cards (all 6 from `app/data/tires.ts`)
- [ ] Each card: `next/image` with WebP, tire type name, brief description, price range badge
- [ ] Filter bar (visual only in Phase 1): `All | All-Season | Winter | All-Terrain | Off-Road | Performance`
- [ ] No pagination in Phase 1 — just the 6 type cards
- [ ] Scroll reveal stagger
- [ ] CTA at bottom: `Request a Tire →` (scrolls to request section / links to `/request` in Phase 4)

#### 1.7 Reviews Carousel (`app/components/ReviewsCarousel.tsx`)
- [ ] Section: 3 real Google review quotes (from `CONTENT.md`)
- [ ] Auto-advance every 5 seconds, pause on hover
- [ ] Fade transition between reviews
- [ ] Stars rendered as SVG gold stars
- [ ] Attribution: "— Google Review, [month year]"
- [ ] Below carousel: `4.6 ★★★★½ · 484 Reviews on Google` with link to Maps listing

#### 1.8 About Teaser (`app/components/AboutTeaser.tsx`)
- [ ] Section ID: `#about`
- [ ] Two-column layout (desktop): left = logo sign photo, right = text
- [ ] Headline: `Honest Service Since Day One`
- [ ] Body copy from `CONTENT.md` about section
- [ ] Hector's name prominently mentioned
- [ ] Single CTA: `Get Directions →` (links to Google Maps)
- [ ] Mobile: stacked, image first

#### 1.9 Contact / CTA Band (`app/components/ContactBand.tsx`)
- [ ] Section ID: `#contact`
- [ ] Full-width dark section, gold accent
- [ ] Left: Address, phone, hours table (from `CONTENT.md`)
- [ ] Right: Embedded Google Maps iframe for 2245 Sheridan Blvd
- [ ] Large `Call Now` button: `tel:3032375650`
- [ ] Hours table — note "(Confirm hours with Hector)" in code comment

#### 1.10 SEO & Metadata
- [ ] `app/layout.tsx` metadata: title, description, OG tags
- [ ] Local business JSON-LD schema (from `CONTENT.md`) on homepage
- [ ] `robots.txt` and `sitemap.xml` via Next.js metadata API
- [ ] OG image: crop of storefront hero at 1200×630

#### 1.11 Performance Targets
- [ ] Lighthouse score: 95+ Performance, 100 Accessibility, 100 SEO
- [ ] LCP (Largest Contentful Paint) under 2.5s
- [ ] Hero image: `priority` prop on `next/image`, preloaded
- [ ] All other images: lazy loaded with blur placeholder
- [ ] All fonts: `display: swap` via next/font

---

## PHASE 2 — Tire Inventory Page

**Branch:** `phase-2/inventory-tires`  
**Goal:** `/inventory` page with filterable grid, individual tire detail cards

### What Phase 2 Includes

#### 2.1 Inventory Page (`app/inventory/page.tsx`)
- Full filterable grid of all tires in `app/data/tires.ts`
- Filter by: Type, Brand, Condition (New/Used), Size
- Sort by: Price low-high, Price high-low, Popular
- Search bar: filter by name or size as you type
- URL state: filters reflected in query params (shareable links)
- SSG page — statically generated, instant load

#### 2.2 Tire Data Expansion
- Expand `app/data/tires.ts` from 6 type-categories to individual SKUs
- Each SKU: brand, model name, sizes array, price range, condition, image, features
- Starter set: 15–20 real tire models El Colorado commonly stocks
- To be confirmed with Hector

#### 2.3 Tire Detail (Modal or Page)
- Click card → modal or slide-out panel with full details
- Tire specs: load index, speed rating, tread depth, sidewall, features list
- CTA: `Request This Tire` → opens request form pre-filled with tire name/size

#### 2.4 Image Downloads (for this phase)
- Download 1 product image per tire model from manufacturer press kits
- Convert all to `.webp` via `scripts/convert-images.js`
- Consistent image style: isolated tire on dark or white background

---

## PHASE 3 — Inner Pages (Services · About · Contact)

**Branch:** `phase-3/inner-pages`  
**Goal:** Full pages for every nav item, all hyperlinks live

### 3.1 Services Page (`app/services/page.tsx`)
- Expanded service descriptions (longer than homepage cards)
- FAQ section: "Do I need an appointment?", "Do you buy used tires?", etc.
- Price list (where applicable)

### 3.2 About Page (`app/about/page.tsx`)
- Full Hector story
- Shop history / community section
- Photo of shop (logo sign, possibly interior)
- Google review widget or static carousel

### 3.3 Contact Page (`app/contact/page.tsx`)
- Full-page map embed
- Complete hours grid
- Multiple CTAs: call, get directions, submit request
- Address schema markup

---

## PHASE 4 — Request Form + SMS Notification

**Branch:** `phase-4/request-form`  
**Goal:** Customer submits tire/wheel request → Hector gets text message immediately

### 4.1 Request Form (`app/request/page.tsx`)
- Fields: Name, Phone, Email (optional), Request Type, Tire Size, Quantity, Notes
- Client-side validation with clear error states
- Accessible: proper labels, aria attributes, keyboard navigation

### 4.2 API Route (`app/api/request/route.ts`)
- POST handler with server-side validation (zod schema)
- Sanitizes all inputs before sending
- Calls Twilio API → SMS to (303) 237-5650
- Returns success/error JSON

### 4.3 SMS Message Format
```
NEW WEBSITE REQUEST
From: [Name] — [Phone]
Wants: [Tire/Wheel/Service]
Size: [265/70R17] × [Qty]
Notes: [customer message]
Sent from elcolorado.com
```

### 4.4 Supabase Integration (optional, same phase)
- `tire_requests` table stores every submission
- Hector can see history at `/admin` (Phase 7)
- Free tier: 500MB, plenty for years of requests

### 4.5 Twilio Setup
- Account SID + Auth Token → `.env.local`
- Purchase local Colorado number (~$1/mo)
- Test with real phone before deploying

---

## PHASE 5 — Vehicle Lookup (Shop By Vehicle)

**Branch:** `phase-5/vehicle-lookup`  
**Goal:** Customer enters Year/Make/Model → sees compatible tire sizes

### 5.1 Vehicle Lookup UI
- Prominent widget on homepage AND inventory page
- Step 1: Select Year (dropdown, 2000–current)
- Step 2: Select Make (filtered by year)
- Step 3: Select Model (filtered by make)
- Step 4: Select Trim (filtered by model) — optional
- → Shows: OE tire size + compatible sizes from inventory

### 5.2 API Options (Ranked)

| Option | Cost | Coverage | Recommendation |
|---|---|---|---|
| **wheel-size.com API** | Free sandbox, paid production | 60,000+ vehicles, 200+ makes | Best for production |
| **TyresAddict API** | Free beta | Good coverage | Good backup |
| **NHTSA vPIC API** | 100% Free (US gov) | Year/Make/Model/Trim | Use for vehicle catalog only — no tire sizes |
| **Static JSON file** | Free, offline | ~2,000 common vehicles | Good Phase 5 start |

### 5.3 Recommended Approach: Hybrid
- **Step 1:** Use NHTSA's free public API for the vehicle cascading dropdowns
  (Year → Make → Model → Trim) — completely free, no key needed
  - Base URL: `https://vpic.nhtsa.dot.gov/api/`
- **Step 2:** Map selected vehicle to tire size using a static JSON lookup
  (`app/data/vehicle-tire-sizes.json`) — covers 95% of common vehicles
- **Step 3:** Upgrade to wheel-size.com API when traffic justifies the cost

### 5.4 NHTSA API Endpoints
```
GET /vehicles/GetMakesForVehicleType/car       → all makes
GET /vehicles/GetModelsForMake/{make}          → models by make
GET /vehicles/GetModelsForMakeYear/make/{m}/modelyear/{y} → models by make+year
GET /vehicles/GetVehicleTypesForMakeId/{id}    → vehicle type
```
All return JSON, no API key required, no rate limits published.

### 5.5 Static Tire Size JSON Structure
```json
{
  "2018_Toyota_Camry_LE":  { "oe": "215/55R17", "also_fits": ["225/50R17"] },
  "2020_Ford_F-150_XLT":   { "oe": "265/60R18", "also_fits": ["275/55R20"] },
  "2022_Jeep_Wrangler_Sport": { "oe": "255/75R17", "also_fits": ["285/70R17"] }
}
```

---

## PHASE 6 — Wheels Section

**Branch:** `phase-6/wheels-section`  
**Goal:** Add wheels/rims to inventory alongside tires

### 6.1 Wheels Inventory Page
- Same filterable grid pattern as Phase 2
- Filters: Finish (Chrome/Black/Silver/Bronze), Size, Bolt Pattern, Brand
- `app/data/wheels.ts` expanded to individual SKUs

### 6.2 Wheel Images
- 5 finish categories × product shots = 5 minimum images
- Sources: KMC Wheels, XD Series, Method Race Wheels — all have press kits
- Convert to `.webp` same as tires

### 6.3 Tire + Wheel Packages
- Combo cards: "Mount + Balance" — tire + wheel together
- Popular upsell in the tire shop industry

---

## PHASE 7 — Admin Dashboard

**Branch:** `phase-7/admin`  
**Goal:** Hector can manage inventory and view requests without touching code

### 7.1 Simple Password Login
- `/admin` route protected by Supabase Auth (same as rishidwar)
- Single user: Hector — email + password

### 7.2 Inventory Editor
- Add/edit/delete tire and wheel entries
- Toggle in-stock on/off
- Update prices
- Upload images (→ Supabase Storage → auto-converted to WebP)

### 7.3 Request Inbox
- Table of all form submissions with status
- Mark as: Pending / Contacted / Completed
- Add internal notes
- Filter by date, status

---

## Discount Tire Feature Comparison

Features from Discount Tire's platform analyzed for this roadmap:

| Feature | Discount Tire | El Colorado | Phase |
|---|---|---|---|
| Tire browse grid | ✓ | ✓ | 2 |
| Filter by type/size | ✓ | ✓ | 2 |
| Shop by vehicle (YMM) | ✓ | ✓ | 5 |
| Tire detail page | ✓ | ✓ (modal first) | 2 |
| Wheel browse | ✓ | ✓ | 6 |
| Appointment booking | ✓ | Request form (simpler) | 4 |
| Account/login | ✓ | Not needed | — |
| Store locator | ✓ | Single location only | 3 |
| Buy online / checkout | ✓ | Not in scope | — |
| Promotions/deals | ✓ | Could add later | Future |
| Tire comparison tool | ✓ | Could add later | Future |
| Chat widget | ✓ | Link to WhatsApp | 4 |

---

## Tech Stack — Final Summary

| Layer | Technology |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| Animation | Framer Motion |
| Icons | lucide-react |
| Images | next/image + sharp (WebP conversion) |
| Fonts | next/font (Bebas Neue, Oswald, Inter) |
| Components | Shadcn/ui pattern (same as rishidwar) |
| Database | Supabase (Phase 4+) |
| SMS | Twilio Programmable SMS (Phase 4) |
| Vehicle Data | NHTSA API (free) + static JSON (Phase 5) |
| Fitment API | wheel-size.com API (Phase 5 upgrade) |
| Hosting | Vercel (auto-deploy from main) |
| Analytics | Vercel Analytics (Phase 1) |
| Domain | elcolorado.com (to be registered/transferred) |

---

## Git Commit Convention

```
feat:     new feature
fix:      bug fix
style:    CSS/visual changes
content:  copy/text changes
data:     data file changes (tires.ts, wheels.ts)
docs:     documentation only
chore:    config, dependencies, tooling
```

Examples:
```
feat: add hero section with parallax scroll
content: update tire descriptions from CONTENT.md
data: add 15 tire SKUs to tires.ts
chore: install framer-motion and lucide-react
```

---

## Phase 1 Launch Checklist

Before merging `phase-1/homepage` → `main` → live:

- [ ] All sections render correctly on mobile (375px) and desktop (1440px)
- [ ] All images are `.webp`, none are over 200KB
- [ ] Hero image has `priority` prop — no LCP warning
- [ ] Phone number `tel:` link works on mobile
- [ ] Google Maps embed loads
- [ ] No console errors
- [ ] Lighthouse: Performance ≥ 90, Accessibility = 100, SEO = 100
- [ ] `robots.txt` present
- [ ] JSON-LD schema validates at schema.org/validator
- [ ] Vercel preview link shared for review before merging to main
- [ ] All nav links scroll to correct sections (no 404s)
- [ ] Hours confirmed with Hector and updated in `CONTENT.md`

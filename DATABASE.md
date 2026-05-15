# Database Plan — El Colorado Wheels

## Philosophy: Start Simple, Scale When Needed

No backend is needed to launch. Phase 1 uses TypeScript data files.
Each phase only adds infrastructure when there's a real need.

---

## Phase 1: Static TypeScript Files (Launch)

**No database, no cost, no maintenance.**

All tire and wheel data lives in `app/data/tires.ts` and `app/data/wheels.ts`.
To update inventory: edit the file, commit, Vercel auto-deploys in ~30 seconds.

### Tire Data Shape (`app/data/tires.ts`)
```ts
export type TireType =
  | 'all-season'
  | 'summer'
  | 'winter'
  | 'all-terrain'
  | 'off-road'
  | 'performance'

export interface Tire {
  id: string
  name: string          // e.g. "Falken Wildpeak A/T3W"
  brand: string         // e.g. "Falken"
  type: TireType
  sizes: string[]       // e.g. ["265/70R17", "275/60R20"]
  priceRange: {
    min: number         // used tire floor price
    max: number         // new tire ceiling price
  }
  condition: 'new' | 'used' | 'both'
  inStock: boolean
  description: string   // one-line benefit statement
  image: string         // /images/tires/[filename].webp
  features: string[]    // e.g. ["M+S rated", "3PMSF", "Long tread life"]
  tag?: 'popular' | 'sale' | 'new'
}
```

### Wheel Data Shape (`app/data/wheels.ts`)
```ts
export type WheelFinish =
  | 'chrome'
  | 'black-machined'
  | 'matte-black'
  | 'alloy-silver'
  | 'gloss-black'
  | 'bronze'

export interface Wheel {
  id: string
  name: string          // e.g. "XD Monster 22\""
  brand: string
  finish: WheelFinish
  sizes: string[]       // e.g. ["17x9", "18x10", "20x12"]
  bolt_patterns: string[] // e.g. ["5x127", "6x139.7"]
  priceRange: {
    min: number
    max: number
  }
  inStock: boolean
  description: string
  image: string
  tag?: 'popular' | 'sale' | 'new'
}
```

### Request Data Shape (`app/data/services.ts`)
```ts
export interface Service {
  id: string
  name: string          // e.g. "Flat Tire Repair"
  description: string
  price?: string        // e.g. "Starting at $15" or null if call for quote
  icon: string          // lucide-react icon name
  popular?: boolean
}
```

---

## Phase 2: Supabase (When Request Form Needs Persistence)

**Trigger:** When Hector wants to track requests, not just receive SMS.

Uses Supabase free tier (500MB storage, unlimited API calls on free plan).
Same setup as rishidwar.com — already familiar stack.

### `tire_requests` Table
```sql
create table tire_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz default now(),

  -- Customer info
  name        text not null,
  phone       text not null,
  email       text,                    -- optional

  -- What they want
  request_type text not null,          -- 'tire' | 'wheel' | 'service'
  details     text not null,           -- free-text description
  tire_size   text,                    -- e.g. "265/70R17"
  quantity    int default 1,

  -- Status tracking
  status      text default 'pending',  -- 'pending' | 'contacted' | 'completed'
  notes       text,                    -- internal notes from Hector
  sms_sent    boolean default false
);
```

### Row Level Security
- Public can INSERT (submit requests) — no auth needed
- Only authenticated admin can SELECT/UPDATE
- Simple password-based admin login (same as rishidwar auth pattern)

---

## SMS Notification System

### How it works
Customer submits form → Next.js API route → Twilio SMS → Hector's phone

### API Route: `app/api/request/route.ts`
```
POST /api/request
Body: { name, phone, email?, requestType, details, tireSize?, quantity }
→ Validates input
→ (Phase 2) Inserts to Supabase tire_requests table
→ Calls Twilio API to send SMS to (303) 237-5650
→ Returns 200 OK
```

### SMS Format (what Hector receives)
```
NEW REQUEST from El Colorado Wheels website
Name: [Customer Name]
Phone: [Customer Phone]
Request: [Tire/Wheel/Service]
Details: [What they want]
Size: [265/70R17]
Qty: [2]
---
Reply or call to confirm.
```

### Twilio Setup
- Service: Twilio Programmable SMS
- Cost: ~$0.0079/SMS (basically free for a small shop)
- Env vars needed: `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER`
- Alternative: Use a local Colorado area code number from Twilio (~$1/mo)

### Alternative: Simpler Email-Only Start
Before setting up Twilio, can use **Resend** (free tier: 3,000 emails/mo):
- Form submits → Resend sends email to hector@elcoloradowheels.com
- Resend also has SMS-to-email forwarding
- Zero cost to start

---

## Environment Variables (`.env.example`)

```bash
# Supabase (Phase 2)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Twilio SMS
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_FROM_NUMBER=+1XXXXXXXXXX
TWILIO_TO_NUMBER=+13032375650

# OR: Resend (simpler email-based start)
RESEND_API_KEY=

# Shop contact (used in templates)
SHOP_PHONE=3032375650
SHOP_EMAIL=
```

---

## Inventory Management: When to Add a CMS

**Keep static files until:**
- Hector wants to update inventory without touching code
- Stock changes frequently (daily)
- More than ~50 tire/wheel SKUs

**Then consider:**
1. **Sanity.io** — free tier generous, easy visual editor, no SQL knowledge needed
2. **Supabase + simple admin page** — stays in the same stack, Hector gets a password-protected `/admin` page
3. **Google Sheets → API** — dead simple for non-technical owner, sync via `next-google-sheets` or direct Sheets API

**Recommendation:** Start with static files. Add Sanity when Hector says "I want to update this myself."

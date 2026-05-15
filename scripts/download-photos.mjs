import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// All 4 El Colorado Wheels photos from Google Maps
const photos = [
  { url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGr4HIO47ILvpPl9t0zs99ufvIX8_mkiTOvuIWRpxcMqfN-EwkiOEMMQ5WVnglajD9KfBf3FqBl9yVtPpsm2lmxL_bSyWN_swb6b-cuXRZryxy5N1dHOZviOWWlb5M7dH5rbaEDKWk79DPU=s2500', out: 'photo-1.jpg' },
  { url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFkOz5GmylotEemD_ls66tcbIk-kF_3UwwGTvz3qQlkderhhzUsdzr2Wr1KAbxb0AgKzm_L5L-UwZ32DuRNZp648C1W_OZ3vk45XNlHSpbzel0iPmgL99YM3yA_75IbAIwjI7NB5Wi64UjA=s2500', out: 'photo-2.jpg' },
  { url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGyBoWl5Z7xiv48h22rvKDNZPcV6BWTiApQ1gafWpb1UadxevCDsjWzI4exyB_ryFl-fwlGaJAeu0vcchyZycKngo1IMGbnuWEzRbLZuxbTP0CMTVYeW14VMXn51hfnwds5lCV5cxlIVZla=s2500', out: 'photo-3.jpg' },
  { url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGH92xbctcf_UOFIRMXUMZZZ2t9CLqZ6Pm-beP3_gkwy0tqCYe-dWwo8sA83ahegFEBXxJEc1ohstZHzTBaKeediBw2lhppY2edLAJ8c6mi8CESI1HB2PHgPOoe6JvF59KdsBkmn9DUJmk=s2500', out: 'photo-4.jpg' },
]

const outDir = path.join(__dirname, '..', 'public', 'images', '_raw')
fs.mkdirSync(outDir, { recursive: true })

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    const get = (u) => https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close(); return get(res.headers.location)
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${u}`)); return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', reject)
    get(url)
  })
}

for (const { url, out } of photos) {
  const dest = path.join(outDir, out)
  process.stdout.write(`Downloading ${out}... `)
  try {
    await download(url, dest)
    const size = fs.statSync(dest).size
    console.log(`${Math.round(size/1024)}KB`)
  } catch (e) {
    console.log(`FAILED: ${e.message}`)
  }
}
console.log('Done. Photos saved to public/images/_raw/')

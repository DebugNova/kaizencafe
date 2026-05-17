// scripts/responsive-audit.mjs — invoked by /responsive
import { chromium } from '@playwright/test'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const WIDTHS = [280, 360, 375, 390, 412, 540, 768, 1024, 1280, 1440, 1920, 2560]
const BASE = process.env.RESP_BASE_URL || 'http://localhost:3000'
const ROUTES = (process.env.RESP_ROUTES || '/,/story,/events').split(',')
const OUT_DIR = process.env.RESP_OUT_DIR || 'docs/responsive-screens'

const findings = []

const browser = await chromium.launch({ headless: true })
const ctx = await browser.newContext({ deviceScaleFactor: 1 })
const page = await ctx.newPage()

for (const route of ROUTES) {
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 })
    const url = BASE + route
    try {
      // domcontentloaded + manual settle is more reliable than networkidle for sites
      // with continuous animations (marquees, drifts) that prevent the network from
      // ever truly going idle within the timeout.
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 })
      await page.waitForLoadState('load', { timeout: 30_000 }).catch(() => {})
    } catch (e) {
      findings.push({ route, width, kind: 'navigation-error', detail: String(e) })
      continue
    }
    await page.waitForTimeout(600) // settle animations

    const issues = await page.evaluate((width) => {
      const out = []
      // 1. Horizontal scroll on body
      if (document.documentElement.scrollWidth > width + 1) {
        out.push({
          kind: 'horizontal-scroll',
          detail: `body scrollWidth ${document.documentElement.scrollWidth} > viewport ${width}`,
        })
      }
      // 2. Any element overflowing viewport
      const all = document.body.querySelectorAll('*')
      for (const el of all) {
        const r = el.getBoundingClientRect()
        if (r.width === 0 && r.height === 0) continue
        if (r.right > width + 1) {
          out.push({
            kind: 'element-overflow',
            tag: el.tagName.toLowerCase(),
            cls: (el.className?.toString?.() || '').slice(0, 80),
            text: (el.innerText || '').slice(0, 50).replace(/\s+/g, ' '),
            right: Math.round(r.right),
          })
          if (out.length > 60) break
        }
      }
      // 3. Tap targets < 44 px
      const tappable = document.querySelectorAll('button, a, [role="button"], input[type="checkbox"], input[type="radio"], summary')
      for (const el of tappable) {
        const r = el.getBoundingClientRect()
        if (r.width === 0 && r.height === 0) continue // hidden
        const cs = getComputedStyle(el)
        if (cs.visibility === 'hidden' || cs.display === 'none' || cs.opacity === '0') continue
        if (r.height < 44 || r.width < 44) {
          out.push({
            kind: 'tap-target',
            tag: el.tagName.toLowerCase(),
            cls: (el.className?.toString?.() || '').slice(0, 80),
            text: (el.innerText || '').slice(0, 40).replace(/\s+/g, ' '),
            w: Math.round(r.width), h: Math.round(r.height),
          })
        }
      }
      // 4. Tiny body text on small viewport
      if (width < 640) {
        const paragraphs = document.querySelectorAll('p, li, span, div')
        let tinyCount = 0
        for (const el of paragraphs) {
          const text = (el.innerText || '').trim()
          if (text.length < 20) continue
          const fs = parseFloat(getComputedStyle(el).fontSize)
          if (fs && fs < 13) {
            tinyCount++
            if (tinyCount > 3) break
            out.push({
              kind: 'tiny-text',
              tag: el.tagName.toLowerCase(),
              fontSizePx: Math.round(fs),
              text: text.slice(0, 50),
            })
          }
        }
      }
      // 5. Images without explicit width/height attributes (CLS risk)
      const imgs = document.querySelectorAll('img')
      for (const img of imgs) {
        const hasAttrs = img.hasAttribute('width') && img.hasAttribute('height')
        const isFill = img.style.position === 'absolute' || img.dataset?.nimg === 'fill'
        if (!hasAttrs && !isFill) {
          out.push({
            kind: 'img-no-dimensions',
            src: (img.currentSrc || img.src || '').slice(-60),
          })
        }
      }
      return out
    }, width)

    for (const i of issues) findings.push({ route, width, ...i })

    // Screenshot full page
    const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-')
    const shotDir = join(OUT_DIR, slug)
    await mkdir(shotDir, { recursive: true })
    await page.screenshot({ path: join(shotDir, `${width}.png`), fullPage: true })
  }
}

await browser.close()
await mkdir(OUT_DIR, { recursive: true })
await writeFile(join(OUT_DIR, 'findings.json'), JSON.stringify(findings, null, 2))
console.log(JSON.stringify({ routes: ROUTES.length, widths: WIDTHS.length, findings: findings.length }))

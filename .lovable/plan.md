

## Plan: Replace Social Strip with Animated Scroll Arrow + Move Socials to Footer

### Changes to `src/components/landing/SplitHero.tsx`

**1. Remove the social links strip** (lines 499-521) — the Instagram, YouTube, TikTok, Discord links currently sitting below the two tiles.

**2. Replace with an animated bouncing arrow** that smoothly scrolls down to the DigitalCardPurchase section:
- A `motion.div` with a `ChevronDown` (or double-chevron) icon from lucide-react
- Infinite bounce animation (`y: [0, 10, 0]` repeating every 1.5s)
- Subtle glow effect matching the brand palette
- Text label: "GET YOUR DIGITAL CARD ↓" in small Share Tech Mono
- `onClick` handler: `document.getElementById('digital-card')?.scrollIntoView({ behavior: 'smooth' })`
- On hover: scale up slightly, glow intensifies

**3. Add hover cursor interaction** — when hovering the arrow area, the custom cursor ring expands and glows gold (`#C9A84C`) by adding `data-panel-side` or a custom data attribute the existing `CustomCursor` component already listens to. We'll use a gold ring color variant.

### Changes to `src/components/landing/DigitalCardPurchase.tsx`

**4. Add `id="digital-card"`** to the section's root element so the smooth scroll target works.

### Changes to `src/components/landing/LandingFooter.tsx`

**5. Add the social links** (Instagram, YouTube, TikTok, Discord) to the footer so they remain accessible — add them as a row in the bottom bar area with proper SEO alt text.

### SEO Optimizations

**6. In `src/components/landing/SplitHero.tsx`**:
- Add `fetchpriority="high"` to the video element
- Remove `preload="auto"` from video (already preloaded in index.html `<link rel="preload">`)

### Performance

- No new dependencies needed — uses existing framer-motion and lucide-react
- Arrow animation is CSS-lightweight (transform only)
- Social links move to footer = fewer interactive elements in the viewport on load

### Files to edit
1. `src/components/landing/SplitHero.tsx` — remove socials, add scroll arrow
2. `src/components/landing/DigitalCardPurchase.tsx` — add anchor id
3. `src/components/landing/LandingFooter.tsx` — add social links row




## Replace Review Wall with Scrolling Carousel + Add Software Showcase

### What Changes

**1. Replace ReviewWall with a smooth scrolling review carousel**
- Swap the masonry wall for an auto-scrolling horizontal carousel (similar to `ReviewsBackgroundCarousel` pattern already in the codebase).
- Uses CSS/framer-motion infinite scroll animation.
- Remove the Stripe/ad revenue screenshots (`review-62`, `review-63`, `review-64`) -- these are ad pictures, not trading/coding proof.
- Keep all other review images focused on trading wins and coding results.
- Tap-to-enlarge lightbox stays.

**2. Add a new "Software Showcase" section with the 4 uploaded images**
- Copy the 4 uploaded screenshots into `src/assets/` (market scanner, BTC news, Stackmode Scout AI, Smart Calculators).
- Create a new component that displays these as a polished showcase grid/carousel.
- Each card gets a title, short description, and a subtle glow border.
- Intro headline: "Learn to Build Apps Like These" with subtext about coding apps to sell to companies for 5 figures+.
- Emphasizes the "stack" concept: code apps + stack assets.

**3. Positioning as high-level school**
- Section copy emphasizes elite-level education: "Build Software. Stack Assets. Get Paid."
- Messaging: "Learn to code AI-powered tools like these and sell them for $10,000+"

### Files Modified

- `src/components/ReviewWall.tsx` -- Rewrite to horizontal auto-scrolling carousel (reuse `ReviewsBackgroundCarousel` pattern), remove ad images.
- `src/pages/Home.tsx` -- Add new software showcase section, reorder components.
- `src/components/academy/AcademyMembership.tsx` -- No changes needed, already covers membership tools.
- Copy 4 uploaded images into `src/assets/showcase/`.

### Technical Details

**Review Carousel:**
- Infinite horizontal scroll using `framer-motion` `animate={{ x: [0, -totalWidth] }}` with `repeat: Infinity, ease: 'linear'`.
- Fade edges on left/right with gradient overlays.
- Reviews displayed at consistent height (`h-28 sm:h-36`).
- Lightbox dialog on click with prev/next navigation.

**Software Showcase Section:**
- 2x2 responsive grid (`grid-cols-1 sm:grid-cols-2 gap-4`).
- Each card: rounded screenshot with `border border-primary/20`, title overlay, hover scale effect.
- Cards data:
  - Market Scanner (image-17) -- "AI Market Scanner"
  - BTC News Feed (image-18) -- "Live Crypto News"
  - Stackmode Scout (image-19) -- "AI Trading Assistant"
  - Smart Calculators (image-20) -- "Options Calculators"
- Section intro with bold headline and CTA pitch about building and selling software.

**Review list (no ad pics):**
Remove `review-62.png`, `review-63.png`, `review-64.png`. Start with `review-61.png`, `review-59.png`, etc.


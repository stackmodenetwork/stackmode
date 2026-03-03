

## Plan: Revamp BusinessProofBento with All Proof Images + New Uploads

### What's happening now
- The proof section uses a marquee with only 7 images, all forced into `w-[340px] h-[220px]` boxes with `object-cover object-top` — this crops/zooms images badly, especially tall screenshots.
- The user has uploaded 10 new proof images (ad stats, YouTube views, trading P&L, portfolio screenshots) that need to be added.
- There are also existing `business-proof-*.png` (20 files) and `review-*.png` (65 files) in lovable-uploads that should be included.

### Plan

**1. Copy new uploaded images to `public/images/proof/`**
- Copy all 10 new uploads as: `ad-stats.png`, `youtube-shorts.png`, `youtube-lifetime.png`, `yt-revenue.png`, `watch-page-ads.png`, `intel-trade.png`, `account-value.png`, `portfolio-growth.png`, `trading-positions.png`, `amzn-trade.png`

**2. Rewrite `BusinessProofBento.tsx` as a masonry grid**
- Replace the marquee layout with an animated masonry grid using CSS `column-count` (responsive: 1 col mobile, 2 tablet, 3-4 desktop)
- Each image card: `object-contain` on a dark bg so full image is always visible (no cropping)
- Add category labels/badges (Trading, YouTube, Revenue, Ads) with colored indicators
- Click to enlarge via the existing lightbox
- Staggered entrance animations with framer-motion
- Include ALL proof sources:
  - 10 existing `/images/proof/` images
  - 10 new uploaded images
  - Select `business-proof-*.png` images (20)
- Total ~40 images in the masonry grid, naturally varying heights

**3. Styling details**
- Cards: rounded-xl, border-white/8, bg-[#0a0a0a], hover:scale-[1.02] transition
- Labels: small pill badge top-left with category + description bottom
- Images use `object-contain` with `aspect-auto` so nothing gets cropped
- Responsive columns: 1 (mobile) → 2 (sm) → 3 (md) → 4 (lg)

**4. Keep Landing.tsx integration unchanged** — it already renders `<BusinessProofBento />`

### Technical approach
- No new dependencies needed (framer-motion already installed)
- No marquee component needed — switch to static masonry with scroll reveal
- Lightbox stays the same (AnimatePresence + motion)


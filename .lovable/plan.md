

## Plan: Make Academy the Main Page & Weave In Business Card + CEOTurbo Products

### What Changes

**1. Route the root `/` to the Academy page (Home component)**
- In `App.tsx`, change the `/` route to render `<Home />` instead of `<Landing />`
- Remove or redirect `/academy` to `/` 
- Remove the `Landing` lazy import if no longer needed

**2. Remove "Choose Your Path" nav references from Home.tsx**
- Remove the "Choose Your Path" back-arrow link in both desktop and mobile nav bars (lines 37-39, 65-67) since this IS the homepage now
- Keep everything else in the top nav intact

**3. Weave DigitalCardPurchase into the Academy page**
- Import `DigitalCardPurchase` into `Home.tsx`
- Place it after `AcademyFAQ` and before `AcademyFooter` — keeps the school/coding focus up top, business card + CEOTurbo stuff at the bottom

**4. Add a CEOTurbo services mini-section before the footer**
- Create a lightweight `CeoTurboServices` component with 3-4 cards: Prompt Shop, Make Ads Fast, Website Design, Digital Business Cards — each linking out to ceoturbo.com
- Compact grid layout, stays on-brand with the dark terminal aesthetic
- Place it after DigitalCardPurchase, before AcademyFooter

**5. Update canonical URL in Home.tsx Helmet**
- Change canonical from `/academy` to `https://stackmode.net`
- Move the full SEO meta tags from Landing.tsx to Home.tsx

### Files Modified
- `src/App.tsx` — route changes
- `src/pages/Home.tsx` — remove "Choose Your Path" links, add DigitalCardPurchase + CeoTurboServices, update SEO
- New file: `src/components/CeoTurboServices.tsx` — compact promo grid for CEOTurbo products

### What Stays Untouched
- All academy sections (Hero, ReviewWall, SoftwareShowcase, WhatYouGet, Pricing, FAQ)
- AcademyFooter
- DigitalCardPurchase component internals
- All other pages and routes




## Full Site Rebuild to Match Reference (resilient-tarsier-5911ea.netlify.app)

This is a large-scale rebuild of 7+ pages to match the reference site exactly. The reference uses the same Barlow Condensed + Space Grotesk typography system already in the CSS, with a clean dark (#000) aesthetic, SiteNav/SiteFooter shared components, and consistent section patterns.

---

### Scope & Pages to Rebuild

| Page | Route | Current State | Reference |
|------|-------|--------------|-----------|
| Landing | `/` | Has typewriter + pillars + results | Needs: SM logo hero, "Master AI. Stack Assets. Build Wealth.", terminal prompt preview, proof bar, trust bar, 3 pillars, featured prompts vault, "Build Your Brand" section, verified results, Brand Boost bridge, Academy CTA, Book a Call (Calendly), "Ready to Stack Smarter?" CTA, student testimonials |
| Shop | `/shop` | Currently `/prompt-shop` with old neon style | Full prompt library: hero with terminal, featured drop, filterable prompt grid (All/Website/Presentation/Image/Video/Free/Premium), "How It Works" 3-step, FAQ, testimonials |
| Academy | `/academy` | Old neon pixel style | Clean hero with graduation cap icon, "Grow faster" 4-feature cards, Two Tracks (Build with AI / Learn Trading), verified results testimonials, pricing CTA |
| Library | `/library` | Old amber/custom nav style | Core Philosophy quote carousel at top, book icon, "Library" heading, 3 book cards, "Learn for Free" CTA, More Resources (Podcast, Discord, YouTube), "Ready to Go Deeper?" CTA |
| Brand Boost | `/brand-boost` | Old neon/pixel style | "Limited Availability" badge, "Delete the Linktree. Get a Real Brand." hero, scrolling proof ticker, 6 numbered service cards, urgency CTA "YOUR BRAND IS LOSING MONEY", Calendly booking |
| Pricing | `/pricing` | Already close to reference | Minor refinements to match exactly |
| Business Cards | `/businesscards` | Exists | Not on reference - keep as is |

---

### Phase 1: Landing Page (`/`)

Rebuild `src/pages/Landing.tsx` to match reference exactly:

1. **Hero**: SM logo (rounded), "Master AI. Stack Assets. Build Wealth." heading, subtitle, typewriter "Generate" effect, two CTAs ("Join the Academy" / "Browse Prompts"), terminal prompt preview with 3 tabs (Algo Trading, System Architecture, Quant Modeling)
2. **Proof Bar**: Active Community, 50+ countries, $100K+ revenue, 5-star rated
3. **Trust Bar**: Keep existing TrustBar component (YouTube, GitLab, Reddit, Meta, VS Code from reference - but we'll keep our current logos)
4. **Three Pillars**: 01 AI Software Mastery, 02 Trading & Asset Stacking, 03 Write Like a Pro - with checklist items
5. **Featured Prompts ("The Vault")**: Filter tabs (All/Website/Image/Video/Trading/Free/Premium), 6 prompt cards with expandable preview text, free vs premium badges
6. **"Build Your Brand" section**: 6 category cards (Logo, Full Websites, Pitch Decks, Video Scripts, Product Photography, Business Cards) + "Why Stackmode Prompts Are Different" callout
7. **Verified Results**: 6 client showcase cards with images from ceoturbo.com
8. **Brand Boost bridge**: "Want us to build it for you?" + 2 CTAs
9. **Academy CTA**: Two-column with icon/description
10. **Book a Call**: Calendly embed section
11. **"Ready to Stack Smarter?"**: Final CTA with 2 buttons
12. **Student Testimonials**: 6 review cards with star ratings

### Phase 2: Shop Page (`/shop`)

Rebuild `src/pages/PromptShop.tsx` and update route from `/prompt-shop` to `/shop`:

1. **Hero**: Split layout - left: "THE PROMPT LIBRARY" eyebrow, "Copy. Paste. Create." heading, 150+ Prompts / 10k+ Users stats. Right: terminal widget with tabs
2. **Featured Drop**: Premium collection card "Ultimate AI Agency Stack"
3. **Prompt Grid**: Filterable (All/Website/Presentation/Image/Video/Free/Premium), each card shows category badge, title, description, "Coming Soon"/"Get Prompt"/"Free" labels
4. **How It Works**: 3 steps (Pick, Copy, Paste & Create)
5. **FAQ accordion**: 5 questions
6. **Student Success testimonials**: 6 cards

### Phase 3: Academy (`/academy`)

Rebuild `src/pages/Home.tsx`:

1. **Hero**: Graduation cap SVG icon, "Stackmode Academy" heading, subtitle, 2 CTAs
2. **"Grow faster" section**: 4 feature cards (Automated Signals, AI Asset Stacking, No-Code Development, 1-on-1 Strategy)
3. **Two Tracks**: Build with AI (01) and Learn Trading (02) - side-by-side cards with bullet lists
4. **Verified Results**: 3 testimonial cards (TRUE LEGACY, ZAHPHYSIQUE, SWOLE JD) with bold stats

### Phase 4: Library (`/library`)

Rebuild `src/pages/Library.tsx`:

1. **Replace custom nav** with SiteNav
2. **Core Philosophy**: Quote carousel with swipeable cards (3 quotes from each book)
3. **Library section**: Book icon SVG, heading, subtitle, 3 book cards with Amazon/Audiobook links
4. **Learn for Free**: CTA card
5. **More Resources**: 3 cards (Podcast, Discord, YouTube)
6. **"Ready to Go Deeper?"**: Academy CTA
7. **Replace custom footer** with SiteFooter

### Phase 5: Brand Boost (`/brand-boost`)

Rebuild `src/pages/BrandBoost.tsx`:

1. **Hero**: "Limited Availability" badge, "Delete the Linktree. Get a Real Brand." heading, subtitle, 2 CTAs
2. **Scrolling proof ticker**: Marquee with stats (340% Traffic Increase, 12x More Booked Calls, etc.)
3. **Everything Included**: 6 numbered service cards (Custom Website, Content Monetization, AI Systems, Custom Dashboards, SEO & Traffic, 1-on-1 Strategy)
4. **Urgency CTA**: "YOUR BRAND IS LOSING MONEY EVERY DAY"
5. **Book Your Free Strategy Call**: Calendly embed

### Phase 6: Routing & Navigation Updates

- Update SiteNav dropdown to link to `/shop` instead of `/prompt-shop`
- Add redirect from `/prompt-shop` to `/shop`
- Ensure SiteFooter links match reference nav

---

### Technical Notes

- All pages use shared `SiteNav` + `SiteFooter` (already built)
- Existing CSS design system (btn-primary, btn-glass, glass-card, section-header, grid-2, grid-3, proof-bar) covers most patterns
- framer-motion for entrance animations (already installed)
- External images from ceoturbo.com for verified results section
- Calendly embed can be an iframe or link
- This is approximately 7 full page rewrites - very large scope requiring multiple implementation passes


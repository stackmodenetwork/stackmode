

## Simplify, Optimize & Convert: Complete Home Page Overhaul

### The Problem
The current page has **12 separate sections** stacked vertically, making it far too long. Many sections overlap in messaging (AcademyDifference, AcademyPhilosophy, AcademyCurriculum, AcademyMembership all say similar things). The StackFinder screenshots are in a basic 2x2 grid that doesn't feel polished. SEO meta tags need updating for "Christopher Robinson" and "Stackmodechris" search terms.

### The Solution: Cut to 7 Focused Sections

**Current 12 sections (too many):**
1. FreeResourcesCTA banner
2. AcademyHero
3. ReviewWall
4. SoftwareShowcase
5. AcademyDifference
6. AcademyPhilosophy
7. AcademyCurriculum
8. AcademyMembership
9. AcademyCampus
10. AcademyPricing
11. AcademyFAQ
12. AcademyFinalCTA + Footer

**New 7 sections (lean and conversion-focused):**
1. **Hero** -- Simplified headline, one CTA button, trust badges
2. **Review Carousel** -- Auto-scrolling social proof (keep as-is, it works)
3. **Software Showcase** -- Cleaned up with a single horizontal scroll strip instead of grid
4. **What You Get** -- Merge AcademyDifference + AcademyMembership into one simple 3-column grid
5. **Pricing** -- Keep the $50/mo card
6. **FAQ** -- Trim to 5 essential questions only
7. **Footer**

**Sections being removed/merged:**
- AcademyPhilosophy (merge key message into hero subtitle)
- AcademyCurriculum (too detailed -- the 3-phase tabs are overkill for a landing page)
- AcademyCampus (nice-to-have but adds length without converting)
- AcademyFinalCTA (redundant with pricing CTA)
- FreeResourcesCTA banner (distracts from the paid conversion goal)

---

### Specific Changes

**1. Hero (AcademyHero.tsx) -- Simplify**
- Shorter headline: "Learn to Code. Learn to Trade. Stack Your Money."
- Remove the announcement banner (Atlanta campus)
- Remove the floating code particles (visual noise)
- Remove the "Build Software -> Generate Income -> Stack Wealth" animated flow (too complex)
- Keep just one CTA: "Join The Stackmode Academy -- $50/mo"
- Add trust line: "Founded by Christopher Robinson | 500+ students | 4.9 star rating"

**2. Software Showcase (SoftwareShowcase.tsx) -- Clean Up**
- Switch from 2x2 grid to a single horizontal scrolling strip with clean card layout
- Each card: screenshot with rounded corners, title below, no description text (let images speak)
- Subtle auto-scroll or swipe-to-browse on mobile
- Simpler intro: "Tools Built Inside the Academy"

**3. Merge Sections into "What You Get" (new simplified component)**
- Replace AcademyDifference + AcademyMembership + AcademyCurriculum with one clean section
- Simple 3-column (mobile: 1-column) grid with 6 items: icon + short title + one-line description
- Items: AI Coding, Trading Education, StackFinder Tool, Discord Community, Live Sessions, 200+ Hours of Content

**4. FAQ (AcademyFAQ.tsx) -- Trim**
- Cut from 10 questions down to 5 most important ones:
  - "Do I need coding experience?"
  - "How much money do I need?"
  - "What do I get for $50/mo?"
  - "Can I cancel anytime?"
  - "Is there a community?"

**5. Home.tsx -- Simplified Section Order**
- Remove imports for: FreeResourcesCTA, AcademyDifference, AcademyPhilosophy, AcademyCurriculum, AcademyMembership, AcademyCampus, AcademyFinalCTA
- New order: Hero -> ReviewWall -> SoftwareShowcase -> WhatYouGet -> Pricing -> FAQ -> Footer

---

### SEO Optimization

**index.html updates:**
- Add "Christopher Robinson" prominently to og:title and meta title: "Stackmode Academy by Christopher Robinson (StackmodeChris) | Learn AI, Coding & Trading"
- Update meta description to include both names naturally
- Update Person structured data: add full name "Christopher Robinson" as primary name, "StackmodeChris" as alternateName
- Add "christopher robinson stackmodechris" to keywords
- Ensure og:title, twitter:title, and page title all match and contain both name variants
- Update structured data Course to reference "Christopher Robinson" as instructor name

**Mobile & Desktop Optimization:**
- All sections use responsive padding (px-4, max-w containers)
- Touch-friendly tap targets (min 44px)
- Lazy loading on all images
- Reduced total page weight by removing 5 sections

---

### Technical Details

**Files to modify:**
- `src/pages/Home.tsx` -- Remove 5 section imports, simplified layout
- `src/components/academy/AcademyHero.tsx` -- Strip down to simple hero
- `src/components/SoftwareShowcase.tsx` -- Horizontal scroll strip layout
- `src/components/academy/AcademyFAQ.tsx` -- Trim to 5 questions
- `index.html` -- SEO meta tag updates for Christopher Robinson / Stackmodechris
- Create `src/components/academy/WhatYouGet.tsx` -- Merged simple features section

**Files unchanged:**
- `src/components/ReviewWall.tsx` -- Carousel works well, keep it
- `src/components/academy/AcademyPricing.tsx` -- Keep as-is
- `src/components/academy/AcademyFooter.tsx` -- Keep as-is

**Files no longer imported (but not deleted):**
- AcademyDifference, AcademyPhilosophy, AcademyCurriculum, AcademyMembership, AcademyCampus, AcademyFinalCTA, FreeResourcesCTA


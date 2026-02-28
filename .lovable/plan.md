

## Plan: Replicate Netlify Reference Site with SEO Optimization

The Netlify site has 5 pages: Home, Academy, Prompt Shop, StackFinder, Brand Boost. The current Lovable project has the Home and Prompt Shop largely matching, but is missing dedicated StackFinder and Brand Boost pages and needs the Academy page restructured. All academy/enrollment links must point to `https://whop.com/stackmode-academy/educationalservice/`.

### Changes Required

**1. Create StackFinder page (`src/pages/StackFinder.tsx`)**
- Stock ticker marquee at top (AAPL, TSLA, NVDA, etc. with green/red % changes, infinite scroll)
- Hero: "STACKFINDER" in Press Start 2P cyan neon, "Stop Guessing. Start Finding." subtitle
- Description text + two CTAs (ACCESS STACKFINDER + Beta Waitlist)
- 3 terminal feature cards: Smart Filters, Real-Time Data, AI Insights (each with terminal code preview line)
- Dashboard Preview section: mock terminal with stock table (5 rows), portfolio chart canvas
- Waitlist form section with terminal-styled inputs
- SEO meta tags, sr-only H1, structured data
- Uses shared AnimatedBackground, SiteNav, SiteFooter

**2. Create Brand Boost page (`src/pages/BrandBoost.tsx`)**
- Hero: "BRAND BOOST" in Press Start 2P pink neon, "POWERED BY CEOTURBO.COM" in cyan Orbitron
- Description + pulsing CTA button linking to ceoturbo.com
- 3 service terminal cards: SEO Domination (#SEO), AI Integration (#AI), Custom Systems (#BUILD)
- "How It Works" 4-step flow: Apply → Strategy Call → We Build → You Grow
- Final CTA section: "READY TO BE SEEN?" with large green CTA
- SEO meta tags

**3. Update Academy page (`src/pages/Home.tsx`)**
- Restructure to match Netlify reference: Hero with STACKMODE/ACADEMY text, 4 Core Pillars, Curriculum Path, Watch & Learn (YouTube), Reviews
- Keep existing ReviewWall, AcademyPricing, AcademyFAQ components
- All enrollment CTAs → whop.com link
- Remove AcademyHero's old top bar; use consistent SiteNav

**4. Update App.tsx routing**
- `/stackfinder` → new StackFinder component (remove Navigate redirect)
- `/brand-boost` → new BrandBoost component (remove Navigate redirect)

**5. Update SiteNav**
- Add "BRAND BOOST" to navLinks array pointing to `/brand-boost` (internal page, not external)
- Keep the external ceoturbo.com CTA as the desktop right-side button

**6. SEO across all pages**
- Each page gets unique `<Helmet>` with title, description, keywords, canonical, OG tags, Twitter cards
- sr-only H1 on each page with target keywords
- All academy enrollment links → `https://whop.com/stackmode-academy/educationalservice/`
- Update sitemap.xml to include `/academy`, `/prompt-shop`, `/stackfinder`, `/brand-boost`

**7. Update SiteFooter**
- Add StackFinder link to footer nav

**8. Landing page minor updates**
- Ecosystem card for Academy → href to whop link
- "EXPLORE THE ACADEMY" hero CTA → whop link
- Review section matches Netlify reference (already close)

### Files to Create
- `src/pages/StackFinder.tsx`
- `src/pages/BrandBoost.tsx`

### Files to Edit
- `src/App.tsx` — add StackFinder + BrandBoost routes
- `src/pages/Home.tsx` — restructure academy page, whop links
- `src/components/SiteNav.tsx` — add Brand Boost nav link
- `src/components/SiteFooter.tsx` — add StackFinder to nav
- `src/pages/Landing.tsx` — academy links → whop
- `public/sitemap.xml` — add all page URLs


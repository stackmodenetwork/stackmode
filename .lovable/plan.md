

# Simplify All Pages — Kindergarten Reading Level

## The Problem
The pages have too much going on. Too many sections, too much text, too many fancy animations. A visitor should instantly understand: **what they get, how it helps them make money, and where to click.**

## The Vision (Inspired by BrezMarketing)
Clean. Simple. Direct. Every page follows the same pattern:
1. **Big headline** — what you get (5 words max)
2. **One sentence** — how it helps you make money
3. **Two buttons** — Join Academy ($50/mo) or Book Free Call
4. **Simple feature list** — what's included (short bullets)
5. **Reviews** — social proof
6. **Bottom CTA** — same two buttons again

## The Stackmode Income Roadmap (Core Message)
Every page ties back to this simple 3-step path:

**Step 1: Content & Business** — Learn to get views and turn them into income
**Step 2: Code & Sell Software** — Build apps and SaaS products people pay for
**Step 3: Invest Your Income** — Put your money into stocks, crypto, and real estate

---

## Page-by-Page Changes

### 1. HOME PAGE (`src/pages/Home.tsx`)
**Current:** 700+ lines, 10+ sections, repeated Academy CTAs, tons of animations
**New approach:**
- Hero: "Make More Money. Keep More Money." with the 3-step roadmap (Content → Code → Invest) in plain text
- Two big buttons: Join Academy + Free Call
- Three simple cards linking to Business, Coding, Investing (one sentence each)
- Reviews carousel
- UniversalPageBottom
- Remove: duplicate Academy sections, floating orbs, tech stack pills, swing wins ticker, "Meet Your Mentor" section (that's on About), Library section (it's in the nav)
- Cut from ~700 lines to ~250 lines

### 2. BUSINESS PAGE (`src/pages/Business.tsx`)
**Current:** Views-to-income funnel, two path cards, "What We Build" grid, AI Animations section
**New approach:**
- Hero: "Turn Views Into Income." One sentence: "We teach you how to get attention online and make money from it."
- Two buttons: Join Academy + Book Free Call
- Simple checklist: what you learn (Content creation, Ads that convert, Funnels that sell, AI branding tools)
- "Want Us To Do It For You?" — single card linking to consultation
- Reviews carousel
- UniversalPageBottom
- Remove: AI Animations/Branding empire section, complex two-path layout, "What We Build" grid

### 3. CODING PAGE (`src/pages/Coding.tsx`)
**Current:** Big hero, tech stack pills, anti-guru section, 4-phase curriculum, SaaS ideas grid, StackFinder promo
**New approach:**
- Hero: "Build Software. Sell Software." One sentence: "Learn to code with AI tools. No degree needed. Build real apps that make money."
- Two buttons: Join Academy + Free Call
- Simple 4-item checklist: what you learn (AI coding tools, Build real apps, Launch your SaaS, Make recurring revenue)
- Simple "What You Can Build" list (not big cards)
- UniversalPageBottom
- Remove: tech stack pills, anti-guru section (move that messaging to one line), detailed 4-phase curriculum, StackFinder promo

### 4. INVESTING/TRADING PAGE (`src/pages/Trading.tsx`)
**Current:** Very long with hero, StackFinder promo, performance chart, audit CTA, features, real estate section, FAQ, YouTube embed, about section, books
**New approach:**
- Hero: "Invest Your Income. Grow Your Wealth." One sentence: "Stocks, crypto, real estate — we show you where to put your money so it grows."
- Two buttons: Join Academy + Free Call
- Simple checklist: what you learn (Swing trading stocks & options, Crypto investing, Real estate basics, AI tools for finding trades)
- Reviews carousel
- UniversalPageBottom
- Remove: performance chart, StackFinder promo (it's a feature, not needed on landing), YouTube embed, FAQ, about section, books (already in UniversalPageBottom)

### 5. LEARN/LIBRARY PAGE (`src/pages/Learn.tsx`)
**Current:** Hero, Academy CTA, free resources, quick links, reviews
**New approach:**
- Hero: "Start Learning For Free." One sentence: "Get free courses and ebooks. No email required."
- Free resource card with two buttons (Get Free Course, Download eBook)
- "Want Everything?" — Academy CTA card
- UniversalPageBottom
- Remove: quick links section (redundant with nav), extra styling

### 6. BUILD YOUR WEBSITE PAGE (`src/pages/BuildYourWebsite.tsx`)
**Current:** Hero, full-service package grid, Academy training, consultation CTA, reviews, books, free resources, DualCallCTA
**New approach:**
- Hero: "Get a Website That Works." One sentence: "We build it for you, or you learn to build it yourself."
- Simple checklist of what's included
- Two options: Learn in Academy ($50/mo) or Book a Consultation (free)
- UniversalPageBottom
- Remove: books section (in footer), free resources link (in nav), DualCallCTA (replaced by UniversalPageBottom), TrustpilotWidget

### 7. ABOUT PAGE (`src/pages/About.tsx`)
**Current:** Full bio, "What I Teach" cards, Academy promo, books, contact form, reviews
**New approach:**
- Keep the photo + short bio
- Simplify "What I Teach" to a simple list
- Two buttons: Join Academy + Free Call
- Contact form (keep but simplify)
- UniversalPageBottom
- Remove: duplicate Academy promo, separate books section

---

## Copy Rules For All Pages
- No word over 3 syllables if possible
- Every headline: 5 words or less
- Every description: 1-2 short sentences max
- No jargon (no "SaaS architecture", "prompt engineering", "HIPAA-compliant")
- Replace with plain talk ("Build apps people pay for", "Find good stocks with AI")
- Every page has exactly 2 primary CTAs visible at all times

## Technical Details

### Files to modify:
- `src/pages/Home.tsx` — Major rewrite/simplification
- `src/pages/Business.tsx` — Major rewrite/simplification
- `src/pages/Coding.tsx` — Major rewrite/simplification
- `src/pages/Trading.tsx` — Major rewrite/simplification
- `src/pages/Learn.tsx` — Moderate simplification
- `src/pages/BuildYourWebsite.tsx` — Moderate simplification
- `src/pages/About.tsx` — Moderate simplification

### Components unchanged:
- `MainHeader.tsx` — Keep as-is (navigation works fine)
- `MainFooter.tsx` — Keep as-is
- `UniversalPageBottom.tsx` — Keep as-is (already clean)
- `ReviewsBackgroundCarousel.tsx` — Keep as-is
- `ScrollReveal.tsx` — Keep as-is (still used but less)
- `FreeResourcesCTA.tsx` — Keep as-is

### Components that may become unused after simplification:
- `StackFinderPromo.tsx` — Removed from page layouts
- `BooksCredibilityPromo.tsx` — Replaced by UniversalPageBottom
- `EmployeeVsStackmodeComparison.tsx` — Removed (too complex)
- `SoftwareProofSection.tsx` — Removed from main pages
- `BusinessBackground.tsx` — Removed (simpler backgrounds)
- `StackmodeGroupPromo.tsx` — Removed
- `ConnectWithMe.tsx` — Replaced by simpler CTA
- `DualCallCTA.tsx` — Replaced by UniversalPageBottom
- `TrustpilotWidget.tsx` — Removed from pages
- Trading sub-components (`TradingHero`, `TradingFeatures`, etc.) — Simplified inline

### No new dependencies needed.


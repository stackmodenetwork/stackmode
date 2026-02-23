

# Redesign the Stackmode.net Landing Page

## Overview

A complete redesign of the Split Hero and landing page with a fresh, unique color scheme, embedded logos, massive "CHOOSE YOUR PATH" headline, and thematic animations for each path — academy/school vibes for Stackmode Academy and revenue acceleration visuals for CEO Turbo.

## New Color Scheme

Dropping gold (#C9A84C) and white. Introducing a fresh palette:

- **Background**: #060610 (deep midnight blue-black)
- **Stackmode Academy accent**: #7C5CFF (electric violet/purple) -- knowledge, mastery, premium
- **CEO Turbo accent**: #FF6B2B (hot orange, matching the CEO Turbo logo) -- energy, speed, revenue
- **Neutral text**: #A0A0B8 (cool silver-gray)
- **Highlight text**: #E8E8F0 (near-white with blue tint)

This creates a completely unique identity -- no more gold/white/cyan cliches.

## Section 1 -- Split Hero Redesign

### Layout
- Full viewport height, centered content
- Massive "CHOOSE YOUR PATH" text at the top: 8xl-9xl on desktop, filling the width, using Bebas Neue with a subtle animated gradient fill (violet to orange sweep)
- Below: Two side-by-side rectangular panels (not circles), each containing its logo and content
- On mobile: stacks vertically

### Logo Integration
- Copy `transparent_logo.png` (SM logo) to `public/images/sm-academy-logo.png`
- Copy `Untitled_design_7.png` (CEO Turbo logo) to `public/images/ceoturbo-logo-color.png`
- Logos placed prominently inside each panel (not circular crop -- displayed as-is with transparent backgrounds)

### Stackmode Academy Panel (Left)
- Logo displayed at ~120px height
- Title: "STACKMODE ACADEMY" in Bebas Neue, violet
- Subtitle: "Learn AI / Coding / Trading / Asset Stacking"
- **School/Academy Animation**: Canvas-drawn floating academic symbols -- graduation caps, books, code brackets `{ }`, lightbulbs, brain icons, chart arrows -- drifting upward with gentle rotation. Violet-tinted at low opacity (6-8%)
- "ENTER" CTA button with violet fill sweep on hover
- Links to `/academy`

### CEO Turbo Panel (Right)
- Logo displayed at ~120px height
- Title: "CEO TURBO" in Bebas Neue, orange
- Subtitle: "Web Design / NFC Cards / Brand Growth"
- **Revenue Acceleration Animation**: Canvas-drawn floating symbols -- dollar signs, upward arrows, rocket shapes, lightning bolts, bar chart icons, NFC waves -- drifting upward. Orange-tinted at low opacity (6-8%)
- "ENTER" CTA button with orange fill sweep on hover
- Links to `https://ceoturbo.com` (external)

### "OR" Divider
- Vertical line between panels on desktop, horizontal on mobile
- "OR" text in the center, subtle glow

### Background
- New animated canvas: subtle particle network (connecting dots with thin lines) in very low opacity silver, replacing the Matrix rain
- Faint grid overlay in silver at 2% opacity

## Section 2 -- Academy Section Color Update
- Replace all gold (#C9A84C) accents with violet (#7C5CFF)
- Update grid texture to violet tint
- Update marquee ticker colors
- Update CTA button to violet

## Section 3 -- Brand Boost Section Color Update
- Replace cyan (#00E5FF) with orange (#FF6B2B)
- Update terminal card border/accent colors
- Update glow effects and CTA button

## Section 4 -- Web Design Section Color Update
- Replace cyan with orange (#FF6B2B)
- Update feature cards, mock browser, and CTA

## Section 5 -- Digital Cards Section Color Update
- Replace gold with orange (#FF6B2B)
- Update card mockup borders, QR grid, and CTA

## Section 6 -- Footer Color Update
- Update "STACK" white / "MODE" to violet
- Update link hover states

## Custom Cursor Update
- Default dot color: #7C5CFF (violet) instead of gold
- Ring follows suit
- Panels override via `data-cursor-color`

## Mobile Optimization
- "CHOOSE YOUR PATH" scales down gracefully (text-4xl on mobile)
- Panels stack vertically with clear separation
- Touch targets remain 44px minimum
- Canvas animations use fewer particles on mobile for performance
- Logos scale proportionally

## Technical Details

### Files to Create
- `public/images/sm-academy-logo.png` -- copied from uploaded SM logo
- `public/images/ceoturbo-logo-color.png` -- copied from uploaded CEO Turbo logo

### Files to Modify
1. **`src/components/landing/SplitHero.tsx`** -- Complete rewrite with new layout, logos, "CHOOSE YOUR PATH" mega-headline, per-panel themed canvas animations, new color scheme
2. **`src/components/landing/CustomCursor.tsx`** -- Update default colors from gold to violet
3. **`src/components/landing/AcademySection.tsx`** -- Swap gold to violet throughout
4. **`src/components/landing/BrandBoostSection.tsx`** -- Swap cyan to orange throughout
5. **`src/components/landing/WebDesignSection.tsx`** -- Swap cyan to orange throughout
6. **`src/components/landing/DigitalCardsSection.tsx`** -- Swap gold/cyan to orange throughout
7. **`src/components/landing/LandingFooter.tsx`** -- Update accent colors
8. **`src/pages/Landing.tsx`** -- Update background color to new scheme


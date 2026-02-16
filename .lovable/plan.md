

# Home Page Redesign: Two-Path Layout

## Overview
Redesign the Home page to clearly present Stackmode's two core offerings side by side, each with its own call-to-action. The tagline becomes: "Build Apps & Software with AI & Learn How To Stack Your Assets."

## New Page Structure

### 1. Header (keep as-is)
Logo + two CTA buttons (Trading Education + Hire Us)

### 2. Hero Section (updated)
- New headline: **"Build Apps with AI. Stack Your Assets."**
- Subtitle: "Turn ideas into reality. Learn how to trade & invest."
- Two CTA buttons stacked below

### 3. Two-Path Section (NEW - the core change)
A side-by-side (desktop) or stacked (mobile) layout with two distinct cards:

**Card 1 — AI Software & Apps (Cyan theme)**
- Icon + title: "Get Your Software Built"
- Short description: We build apps, SaaS tools, and AI software using the new AI stack
- Checklist: Web apps, AI tools, dashboards, automations
- CTA button: "Book a FREE Quote Call" → links to Calendly
- Secondary link: "Visit the Academy" → /coding or external school link

**Card 2 — Trading & Investing (Emerald theme)**
- Icon + title: "Learn to Trade & Invest"  
- Short description: Stocks, crypto, real estate — learn where to put your money
- Checklist: Swing trading, crypto investing, AI trade tools, wealth building
- CTA button: "Join the Academy — $50/mo" → Whop link
- Secondary link: "Book a FREE Consultation" → Calendly

### 4. StackFinder Showcase (keep existing SoftwareProofSection)

### 5. UniversalPageBottom (keep as-is — books, CEOTurbo)

### 6. Footer (keep as-is)

**Removed sections**: "The AI Agent Stack" 4-card grid and "Why Your Business Needs This" checklist — replaced by the cleaner two-path layout.

## Technical Details

### Files Modified
- **`src/pages/Home.tsx`** — Replace hero copy, remove AI Stack grid and "Why It Matters" section, add new two-path card section with responsive grid layout (`grid md:grid-cols-2 gap-6`)

### Design Details
- Card 1 uses `border-cyan-500/30` accent, Card 2 uses `border-emerald-500/30`
- Each card has a subtle gradient background matching its theme
- Cards use existing Framer Motion animations (staggered fade-in)
- Mobile: cards stack vertically, full-width CTAs
- Desktop: side-by-side equal-height cards


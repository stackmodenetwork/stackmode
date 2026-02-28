

## Plan: Major Academy Page Overhaul — Cursor Animations, Color Consistency, Nav Cleanup, New Sections

This is a large multi-part redesign. I recommend breaking it into phases to avoid breaking the site. Here is the full plan:

---

### 1. Unified Color Scheme — Green-Only Palette

**Problem:** The site mixes green (#00ff88), cyan (#00cfff), amber (#f59e0b), violet (secondary), and accent colors inconsistently.

**Changes:**
- **`src/index.css`**: Update CSS variables so `--primary`, `--accent`, and `--secondary` all use shades of green. Remove blues/cyans from the base palette. Primary stays `#00ff88`, secondary becomes a darker green, accent becomes a warm green.
- **`src/pages/Home.tsx`**: All nav bar buttons become a single muted white/gray color EXCEPT "Join The Academy" (green fill) and "Grow Your Brand" (green outline). Remove amber from Library, remove teal from Contact, etc.
- **`src/components/CeoTurboServices.tsx`**: Change cyan accent to green. "Boost Your Brand" button becomes green.
- **`src/components/academy/WhatYouGet.tsx`**: Replace `text-secondary` and `text-accent` with green variants.

---

### 2. Navigation Bar Cleanup

**Changes in `src/pages/Home.tsx`:**
- Replace all `Wrench` icons with `Globe` (from lucide-react) for "Grow Your Brand"
- **Desktop nav**: Only "Join The Academy" and "Grow Your Brand" get highlighted styling. All other links (Choose Your Path, Contact, Discord, Podcast) use uniform muted white text, no colored borders.
- **Mobile nav**: Remove Library pill from top bar. Show "Join The Academy" (full text, not "Join") and "Grow Your Brand" as two pills. Library moves into the hamburger dropdown.
- **`src/components/academy/WhatYouGet.tsx`**: Replace `Wrench` icon with `Globe`.

---

### 3. Interactive Grid Cursor Background (God of Prompt / Antigravity style)

**New file: `src/components/CursorGridBackground.tsx`**
- A full-page fixed canvas overlay (behind content, above background)
- Draws a subtle dot grid pattern across the viewport
- On mouse move, dots near the cursor glow brighter and shift outward slightly (repulsion/attraction effect)
- Uses requestAnimationFrame for smooth 60fps rendering
- Disabled on touch devices and reduced-motion preference
- This replaces or supplements the existing `CursorParticles` component

**Changes in `src/App.tsx`:**
- Add `CursorGridBackground` component alongside or replacing `CursorParticles`

---

### 4. Animated Performance Comparison Chart (New Section)

**The existing `ReturnsComparisonChart` component already exists** with the Employee vs Stackmode Investor comparison. It is not currently rendered on the Academy page.

**Changes in `src/pages/Home.tsx`:**
- Import and add `ReturnsComparisonChart` between `WhatYouGet` and `AcademyPricing` sections
- Wrap it in a container with a heading like "Why Students Choose Stackmode"

---

### 5. Interactive Coding Terminal Section

**Already exists** as `TerminalCode` inside `AcademyHero.tsx`. It's already rendering on the Academy page hero. No new component needed — it's already there showing the typing animation.

---

### 6. Simplified Copywriting

**Changes across multiple components:**
- **`src/components/academy/AcademyHero.tsx`**: Simplify headline to something like "LEARN TO BUILD SOFTWARE, TRADE STOCKS & MAKE MONEY WITH AI". Simplify subtitle to "No experience needed. We teach you step by step. Start earning in your first month."
- **`src/components/academy/WhatYouGet.tsx`**: Simplify descriptions to kindergarten-level clarity. E.g., "Build Real Software" → desc: "Learn to make apps that people pay for. AI writes the code — you just tell it what to build."
- **`src/components/SoftwareShowcase.tsx`**: Simplify copy
- **`src/components/academy/AcademyFAQ.tsx`**: Keep as-is (already simple)

---

### 7. Page Flow Reorder

**`src/pages/Home.tsx`** content order becomes:
1. FreeResourcesCTA banner
2. AcademyHero (with terminal + mini chart)
3. ReviewWall (social proof)
4. WhatYouGet (what's included)
5. **ReturnsComparisonChart** (new addition — Employee vs Stackmode)
6. SoftwareShowcase (StackFinder)
7. AcademyPricing
8. AcademyFAQ
9. DigitalCardPurchase (buy the card)
10. CeoTurboServices (grow your brand)
11. AcademyFooter

---

### 8. SEO Optimization

- Ensure all headings use semantic H2/H3 tags
- Keep existing sr-only H1 structure
- Ensure all images have descriptive alt text (already mostly done)
- Meta tags already comprehensive

---

### Technical Details

**Files to modify:**
- `src/index.css` — Update CSS variable color scheme
- `src/pages/Home.tsx` — Nav bar reorder, add ReturnsComparisonChart, icon swaps
- `src/components/CeoTurboServices.tsx` — Green color scheme, Globe icon
- `src/components/academy/WhatYouGet.tsx` — Globe icon, simplified copy
- `src/components/academy/AcademyHero.tsx` — Simplified copywriting
- `src/App.tsx` — Add CursorGridBackground

**New files:**
- `src/components/CursorGridBackground.tsx` — Interactive dot grid cursor effect

**Icon changes:** All `Wrench` → `Globe` globally


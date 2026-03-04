

# Hero Heading Redesign + Mobile Scroll Arrow

## Problem
1. "Master" sits alone on one line with the rotating text on the next, creating an awkward gap on mobile. The layout feels disconnected.
2. The Prompt Shop category filters on mobile have a gradient fade hint but no visible arrow indicator to signal scrollability.

## Changes

### 1. Smarter Hero Heading Layout (`src/pages/Landing.tsx`)

Restructure the heading so "Master" and the rotating text flow together on one line, with "Build Wealth." on a second line. This keeps the smooth animated rotator but eliminates the visual gap.

**New structure:**
```
Master [AI Software].
Build Wealth.
```

- Remove the `<br />` between the rotator and "Build Wealth"
- Instead, place "Build Wealth." on its own line using a `<span className="block">` or a second `<br />` after the period
- The key fix: ensure "Master" + rotator stay on the same line by keeping them as inline elements with no forced break between them
- Reduce the heading size slightly on mobile (`text-2xl sm:text-5xl md:text-7xl`) so "Master [longest word]" fits on one line

### 2. Add Scroll Arrow to Prompt Shop Filters (`src/pages/PromptShop.tsx`)

Replace the gradient-only hint with a small right-pointing chevron arrow (`ChevronRight` from lucide-react) that:
- Sits on the right edge of the filter bar, visible only on mobile (`lg:hidden`)
- Uses a subtle pulse animation to draw attention
- Disappears once the user has scrolled the filter container (optional: keep it simple and always show)

### Files to modify:
1. **`src/pages/Landing.tsx`** — Restructure h2 so "Master" + rotator stay inline, "Build Wealth." below
2. **`src/pages/PromptShop.tsx`** — Add chevron arrow icon to filter scroll area on mobile


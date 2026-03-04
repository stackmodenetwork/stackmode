

# Fix Mobile Overlaps on Prompt Shop Page

## Problems Identified
1. **Terminal widget** (hero section): Tabs and content area are cramped on mobile — text overflows and the terminal box overlaps with surrounding elements.
2. **Filter tabs**: Currently use horizontal scroll with an arrow indicator. User wants all filters visible without scrolling or arrows on mobile.
3. **Featured prompt cards**: The `grid-3` class may cause cards to overlap or clip on small screens.

## Changes

### 1. Remove scroll arrow, make filters wrap on mobile (`src/pages/PromptShop.tsx`)
- Remove `overflow-x-auto scrollbar-hide` and `pr-10` from the filter container on mobile
- Change to `flex-wrap` so all filter buttons are visible without scrolling
- Remove the `ChevronRight` arrow overlay div entirely
- Reduce button padding slightly on mobile so they fit when wrapped

### 2. Fix terminal widget mobile sizing (`src/pages/PromptShop.tsx`)
- Add `overflow-hidden` to the terminal container
- Ensure the terminal text area has proper `break-words` styling
- Reduce hero section top padding on mobile (120px is too much)

### 3. Ensure prompt cards don't overlap on mobile
- The `grid-3` CSS class already goes to 1 column on mobile — verify the `glass-card` padding and text sizing don't cause overflow

### Files to modify:
1. **`src/pages/PromptShop.tsx`** — Wrap filters instead of scroll, remove arrow, fix terminal and hero spacing for mobile


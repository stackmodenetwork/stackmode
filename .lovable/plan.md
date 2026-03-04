

# Mobile Optimization & UI Fixes

## 1. Make "Get This Prompt →" clickable in TerminalWidget
- In `PromptShop.tsx` (line 89): Change the `<span>` to a `<Link to="/shop">` or make it scroll to the prompts section
- In `Landing.tsx` (line 91): Already a `<Link>` — confirmed working

## 2. Fix terminal tab labels too big on mobile (home page + prompt shop)
- `Landing.tsx` promptTabs labels ("Algo Trading", "System Architecture", "Quant Modeling") — add `text-[10px] sm:text-xs` and reduce padding on mobile
- `PromptShop.tsx` TerminalWidget (line 71) — same fix, reduce tab text size and padding on mobile

## 3. Swap Academy & Prompt Shop nav positions + colors
- In `SiteNav.tsx` navLinks array: Move Academy before Prompt Shop
- Swap visual treatment: Academy gets glass/outline style, Prompt Shop gets primary/highlighted style (or vice versa based on intent — user said "swap colors and places")

## 4. Remove free emoji from Prompt Shop
- `PromptShop.tsx` line 21: Change `'🆓 Free'` to `'Free'`
- `SiteNav.tsx` line 16: Change `'🆓 Free Prompts'` to `'Free Prompts'`

## 5. Add horizontal scroll arrow on mobile for category filters
- In `PromptShop.tsx` filter section (line 170): Wrap filters in a horizontally scrollable container with left/right arrow indicators on mobile, hide on desktop

## 6. Mobile optimization scan across pages
- Ensure all terminal/prompt preview widgets use responsive text sizing
- Check touch targets are 44px+ on all buttons
- Verify prompt card grid doesn't overflow on small screens

### Files to modify:
1. **`src/pages/PromptShop.tsx`** — Clickable "Get This Prompt", remove free emoji, mobile tab sizing, scrollable filter arrows
2. **`src/pages/Landing.tsx`** — Mobile tab sizing for prompt preview
3. **`src/components/SiteNav.tsx`** — Swap Academy/Prompt Shop order, remove free emoji from dropdown


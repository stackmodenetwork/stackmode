

## Complete Site Overhaul: Reviews, Showcase, Background, Logo

### 1. Review Carousel Cleanup

**Current problem:** The review carousel has ~53 images, many are duplicates or ad/lead generation screenshots (Systeme.io lead pages, ad dashboards, etc.) instead of trading wins and text message reviews.

**Changes to `src/components/ReviewWall.tsx`:**
- Audit the review list and remove:
  - Ad result screenshots (Facebook ads dashboards, lead generation stats)
  - Duplicate images
  - Systeme.io lead page screenshots
- Keep only: text message conversations, trading P&L screenshots, Discord chat reviews, and genuine testimonials
- Curate down to ~25-30 high-quality, non-duplicate reviews focused on trading wins and positive text feedback

### 2. Software Showcase - Smarter Messaging

**Changes to `src/components/SoftwareShowcase.tsx`:**
- Update the section copy to emphasize that members get **access** to these tools
- New headline: "Your Trading Edge. Included Free."
- Add a subtitle explaining: "While you build your own software, use our tools to catch the best trades and stay informed on the market."
- Each card gets a short benefit-driven description (not just a title):
  - AI Market Scanner -- "Scan 1000+ assets for breakout setups in seconds"
  - Stackmode Scout AI -- "AI assistant that finds high-probability trades for you"
  - Smart Calculators -- "Position sizing, risk/reward, and profit calculators"
  - Live Crypto News -- "Real-time crypto news feed so you never miss a move"

### 3. Unique Coding + Trading Background

**Create new `src/components/CodeTradingBackground.tsx`:**
- Replace the plain gradient background with a unique, integrated coding-and-trading themed background
- Animated code snippets (faint, semi-transparent) scrolling vertically on the left side
- Animated candlestick chart lines (subtle) on the right side
- A subtle grid overlay with glowing intersection points
- CSS-only animated gradient mesh that shifts between cyan, violet, and emerald (the brand colors)
- All elements at very low opacity (0.03-0.08) so they don't distract from content
- This runs behind the entire page, making it feel unique and different from every other landing page

**Apply to `src/pages/Home.tsx`:**
- Add the `CodeTradingBackground` component as a fixed background behind all sections

### 4. New SM Logo

**Copy the uploaded logo** (`social-1758242459337-LOGO.jpg`) to `public/images/sm-logo-new.png`

**Update `src/pages/Home.tsx`:**
- Replace the current `sm-logo.png` in the sticky header with the new SM circle logo
- Make the logo a clickable link that scrolls to the top of the page (since Home is the main page)
- Wrap in a `<Link to="/">` or `window.scrollTo(0, 0)` on click

**Update `src/components/academy/AcademyHero.tsx`:**
- Add the SM logo above the "Founded by" badge for brand recognition at the top of the page

### 5. Files Modified

| File | Change |
|------|--------|
| `src/components/ReviewWall.tsx` | Remove duplicate and ad/lead images from the reviews array |
| `src/components/SoftwareShowcase.tsx` | Update copy to emphasize access + market intelligence benefit |
| `src/components/CodeTradingBackground.tsx` | **New** -- unique animated coding + trading background |
| `src/pages/Home.tsx` | Add background component, update logo to new SM logo with home link |
| `src/components/academy/AcademyHero.tsx` | Add SM logo at top |
| `public/images/sm-logo-new.png` | **New** -- copied from uploaded file |

### Technical Notes

- The background uses CSS animations only (no framer-motion) for performance -- `@keyframes` for scrolling code text and candlestick lines
- Background is `position: fixed` with `z-index: 0`, all content sections get `position: relative` with `z-index: 1`
- Review images that appear to be ad dashboards, Systeme.io lead screenshots, or duplicates will be identified and removed from the array
- Logo click behavior: on Home page it scrolls to top; from other pages it navigates to `/`


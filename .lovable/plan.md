

## Section-Specific Animated Backgrounds

### What Changes

**1. Academy Section** -- Add a canvas-based background with coding + trading visuals:
- Slowly falling code snippets (monospace characters like `{}`, `</>`, `=>`, `const`, `if`) in gold tones at ~5% opacity
- Subtle candlestick chart patterns (green/red bars with wicks) drifting across the background at very low opacity
- A faint moving price line (like a stock ticker line chart) that oscillates gently
- Keep the existing grid texture overlay

**2. CEO Turbo Sections (BrandBoostSection, WebDesignSection, DigitalCardsSection)** -- Add a canvas-based background with web design visuals:
- Floating wireframe UI elements: rectangles, circles, horizontal lines representing text blocks, nav bars, and button outlines in orange/cyan tones at ~5% opacity
- Subtle browser window outlines drifting slowly
- Small dots connecting with faint lines (like a design node/connector pattern)
- A gentle gradient mesh pulse in orange tones

### Technical Approach

- Create two new lightweight canvas background components:
  - `AcademyBackground.tsx` -- Code rain + candlestick chart canvas animation
  - `CeoTurboBackground.tsx` -- Wireframe UI elements + design node canvas animation
- Both use HTML Canvas with `requestAnimationFrame` for smooth 60fps rendering
- Elements are kept at very low opacity (4-6%) so they enhance atmosphere without overpowering content
- Canvas only renders when section is in viewport (IntersectionObserver) for performance
- Each component is `position: absolute; inset: 0` layered behind section content

### Files Modified

| File | Change |
|------|--------|
| `src/components/landing/AcademyBackground.tsx` | New -- canvas with code rain + candlestick visuals |
| `src/components/landing/CeoTurboBackground.tsx` | New -- canvas with wireframe UI + design node visuals |
| `src/components/landing/AcademySection.tsx` | Import and render `AcademyBackground` behind content |
| `src/components/landing/BrandBoostSection.tsx` | Import and render `CeoTurboBackground` behind content |
| `src/components/landing/WebDesignSection.tsx` | Import and render `CeoTurboBackground` behind content |
| `src/components/landing/DigitalCardsSection.tsx` | Import and render `CeoTurboBackground` behind content |

### Performance Notes

- Canvas animations are paused when out of viewport
- Element counts kept low (15-25 per canvas) to maintain smooth performance
- No DOM elements for floating items -- everything is drawn on canvas


# Add Cursor Particle Trail Animation

## What it does
Adds a visual effect where small cyan-colored particles/dots trail behind the cursor as users move their mouse across the page -- similar to the Google Antigravity site's scattered blue dash effect.

## How it works
- A new `CursorParticles` component will track mouse movement across the entire page
- As the cursor moves, small particles spawn at the cursor position with random velocity and rotation
- Particles fade out and are removed after a short lifespan
- The effect uses a canvas element for performance (no DOM nodes per particle)
- On mobile/touch devices, the effect is disabled since there's no cursor

## Implementation Steps

1. **Create `src/components/CursorParticles.tsx`**
   - Uses an HTML `<canvas>` overlaid on the full page (`fixed`, `inset-0`, `pointer-events-none`)
   - Listens to `mousemove` events on `window`
   - Spawns small cyan-colored dashes/dots at the cursor position with slight random spread
   - Each particle has a short lifetime (~1 second), random velocity, and fades out over time
   - Uses `requestAnimationFrame` for smooth 60fps rendering
   - Respects `prefers-reduced-motion` -- disables the effect entirely for accessibility
   - Skips rendering on touch-only devices

2. **Add `<CursorParticles />` to `src/App.tsx`**
   - Place it once at the top level so it works across all pages
   - It renders as a fixed overlay with `pointer-events: none` so it doesn't interfere with any clicks or interactions

## Technical Details

- **Performance**: Canvas-based rendering (not DOM elements), particles capped at ~50 max on screen, cleaned up when off-screen or expired
- **Colors**: Uses the site's primary cyan color (`hsl(185, 80%, 50%)`) to match the theme
- **Accessibility**: Fully disabled when `prefers-reduced-motion: reduce` is active
- **No new dependencies**: Pure React + Canvas API

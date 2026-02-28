

## Plan: Swap to 60fps Video + Fix "Trade" → "Trading"

### Changes

**1. Copy new 60fps video** — Replace `public/videos/landing-bg.mp4` with the uploaded `user-uploads://0227_7.mp4`.

**2. Fix pill text** in `src/components/landing/SplitHero.tsx` line 496:
- Change `pills={['Code', 'Trade', 'AI']}` → `pills={['Code', 'Trading', 'AI']}`

**3. Smoother video playback** in `src/components/landing/SplitHero.tsx`:
- Remove the `onTimeUpdate` handler that manipulates opacity (causes visible flickering on loop). The 60fps video should loop more seamlessly on its own.
- Remove `onEnded` handler (redundant with `loop` attribute).
- Remove `handleTimeUpdate` and `handleVideoEnded` callbacks entirely.
- Keep `videoReady` state for initial fade-in only.

### Files
- Copy `user-uploads://0227_7.mp4` → `public/videos/landing-bg.mp4`
- Edit `src/components/landing/SplitHero.tsx`


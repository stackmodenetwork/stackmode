

## Plan: Fix Landing Page Text & Add Video Background

### Changes to `src/components/landing/SplitHero.tsx`

**1. Fix top-left header**: Change `STACK<span>MODE</span>` to `STACKMODE ACADEMY` (full brand name).

**2. Make "Choose Your Path" text larger and visible**:
- Increase "Christopher Robinson • StackmodeChris" from `8-10px` to `11-13px`, bump color from `rgba(255,255,255,0.4)` to `rgba(255,255,255,0.7)`.
- Increase "Choose Your Path" from `12-15px` to `clamp(22px, 4vw, 36px)`, change color from `rgba(255,255,255,0.25)` to `#f0f0f0` (full white). Make it bold and prominent.

**3. Make social links more visible**: Bump color from `rgba(255,255,255,0.15)` to `rgba(255,255,255,0.5)`, increase font size from `9px` to `11px`.

**4. Add uploaded video as full-screen background**: 
- Copy `user-uploads://0227_6.mp4` to `public/videos/landing-bg.mp4`.
- Add a `<video>` element behind the grid/content with `autoPlay muted loop playsInline`, absolute positioned, object-cover, with a dark overlay (`rgba(4,4,10,0.75)`) on top so text remains readable.
- Remove the subtle CSS grid background lines (replaced by the video).
- Keep scanline overlay on top of everything for the terminal aesthetic.

### Files
- Copy video asset to `public/videos/landing-bg.mp4`
- Edit `src/components/landing/SplitHero.tsx`


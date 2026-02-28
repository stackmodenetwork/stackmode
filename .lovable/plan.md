

## Redesign: Side-by-Side CTA Buttons with Animated Backgrounds

### Concept
Replace the two large stacked card panels with a **single centered hero** layout. The page has one branded heading + tagline at top, then **two side-by-side CTA buttons** — each button is a compact, visually rich tile with its own micro-animation canvas behind it. On mobile they sit side-by-side too (not stacked), just smaller. Clean, instant comprehension, fast load.

```text
┌─────────────────────────────────────────────┐
│          STACKMODE × CEOTURBO               │  ← top bar (keep)
├─────────────────────────────────────────────┤
│                                             │
│     Christopher Robinson • StackmodeChris   │
│          CHOOSE YOUR PATH                   │
│                                             │
│   ┌──────────────┐  ┌──────────────┐        │
│   │ ≋ candlestick│  │ ◇ web design │        │
│   │   animation  │  │   animation  │        │
│   │              │  │              │        │
│   │  STACKMODE   │  │  CEO TURBO   │        │
│   │  ACADEMY     │  │  WEB & BRAND │        │
│   │              │  │              │        │
│   │ Code·Trade·AI│  │ Sites·Cards  │        │
│   │  JOIN NOW →  │  │ GET STARTED →│        │
│   └──────────────┘  └──────────────┘        │
│                                             │
│     IG · YT · TikTok · Discord              │
└─────────────────────────────────────────────┘
```

### Design Details

**Each button/tile** (~280px×340px desktop, ~160px×220px mobile):
- Rounded card with dark bg (`#0a0a14`), accent-colored border on hover
- **Left tile (Academy)**: Canvas animation showing floating candlestick bars + code bracket symbols (`{ }`, `< />`) in green (`#00ff88`). Logo, "STACKMODE ACADEMY" title, pills: `Code · Trade · AI`, CTA button
- **Right tile (CEOTurbo)**: Canvas animation showing floating browser window outlines + paintbrush/palette shapes in cyan (`#00cfff`). Logo, "DESIGN YOUR WEBSITE & BRAND" title, pills: `Sites · Cards · Brand`, CTA button
- Both tiles are **always side-by-side** — on mobile they shrink proportionally using `grid-cols-2` with smaller text/padding
- Hover: accent glow intensifies, border lights up, CTA fill animates

### Implementation — Single File Change

**`src/components/landing/SplitHero.tsx`** — Full rewrite:
1. Replace `GridDots` with two new canvas components: `CandlestickCanvas` (draws floating candlestick bars + code symbols) and `WebDesignCanvas` (draws floating browser frames + design shapes)
2. Replace `PathCard` with a compact `ChoiceTile` component — logo, title, 3 pills, CTA button, canvas background
3. Layout: centered `grid grid-cols-2 gap-3 sm:gap-6` wrapper, max-w-3xl — always 2 columns
4. Keep top bar, heading, social strip, SEO content, scanline overlay unchanged
5. Mobile: smaller text (Bebas Neue 20px vs 40px desktop), tighter padding (p-4 vs p-8), canvas still renders but fewer particles


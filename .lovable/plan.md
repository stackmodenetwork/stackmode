

## Plan: Move Video to Academy, Add Code Terminal to Landing, Upgrade TrustBar with 20+ AI Company Logos

### 1. Move promo video from Landing hero to Academy page

**Landing.tsx (lines 211-224)**: Replace the `<video>` block with a `FloatingCodeWindow`-style animated terminal component (extracted from PromptShop). The terminal will display rotating code lines like the Prompt Shop hero but styled for the landing page context — visible on both mobile and desktop.

**Home.tsx (Academy page)**: Add the promo video in a new section (above or replacing the YouTube iframe in "Watch & Learn"), wrapped in a terminal card with the same styling.

### 2. Add animated code terminal to Landing hero (replacing video)

Extract and adapt the `FloatingCodeWindow` component from `PromptShop.tsx` into the Landing page's right column. Instead of being hidden on mobile (`hidden lg:block`), it will be fully responsive. Lines will include:
```
> initializing stackmode...
> loading AI modules ✓
> building revenue engine...
> portfolio: +42.3% ✓
> output: $4,200/mo
> status: [STACKING]
```

### 3. Massively expand TrustBar with 20+ real AI company logos

**New approach** inspired by GodOfPrompt: Show company name + logo pairs in the marquee, with the company name visible next to each logo (like "ChatGPT — OpenAI"). Use SVG logos fetched from public CDNs (logo.clearbit.com, unavailable ones use text fallback with Orbitron font).

Companies to add (20 total):
- **Already have logos**: ChatGPT, Claude, Midjourney, Google, GitHub, Figma, Shopify, Stripe, Vercel, Whop
- **Need new logos** (will use clearbit/SVG CDN URLs or inline SVG): Gemini, Copilot, Runway, Perplexity AI, Grok, Stable Diffusion, ElevenLabs, Sora, Kling AI, Cursor, Notion AI, HeyGen, Pika Labs, Leonardo AI, Synthesia, Luma AI, DeepSeek

For logos we can't get as local files, use a text-based fallback with the company name in Orbitron font + a colored dot indicator — still looks professional against the dark background.

**TrustBar layout update**: Two-row or wider single-row marquee showing `[Logo] Company Name` pairs scrolling. Each item shows the logo (white silhouette filter) + company name in small Orbitron text.

### 4. Files to modify

| File | Change |
|------|--------|
| `src/pages/Landing.tsx` | Replace video (lines 217-223) with animated code terminal component |
| `src/pages/Home.tsx` | Add promo video section with terminal card wrapper |
| `src/components/TrustBar.tsx` | Expand to 20+ companies, add name labels, improve layout |

### Technical details

- Video source path stays `/videos/promo-hero.mp4` with poster `/images/stackmodechris-about-new.png`
- Code terminal component will be defined inline in Landing.tsx (same pattern as PromptShop's FloatingCodeWindow but responsive)
- TrustBar logos that don't have local files will use `https://logo.clearbit.com/[domain]` as image source with the same `brightness(0) invert(1)` filter, falling back to text-only display
- All changes maintain the dark `#04060e` background and neon terminal aesthetic


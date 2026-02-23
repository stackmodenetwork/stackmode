

## Remove the Black Bar on Mobile

The black bar you see on mobile comes from two things working together:

1. **A fixed 44px top bar** (the `TopBar` component with the "STACKMODE / CEOTURBO" branding and clock) that sits at the very top of the screen with a dark semi-transparent background.
2. **70px of top padding** on the main hero section, which creates dead space beneath the bar.

### Changes

**File: `src/components/landing/SplitHero.tsx`**

1. **Hide the TopBar on mobile** -- Add `hidden sm:flex` so the fixed top bar only appears on tablet/desktop screens. On mobile, the two panels will go edge-to-edge from the top of the screen.

2. **Make paddingTop responsive** -- Change `paddingTop: 70` to `0` on mobile and keep it at `70px` on larger screens. This will be done by switching from an inline style to a responsive class (e.g., `pt-0 sm:pt-[70px]`).

3. **Adjust the "CHOOSE YOUR PATH" heading position** -- Since there's no top bar on mobile, shift it down slightly so it sits neatly over the panels rather than being cut off at the very top edge. Use responsive top positioning (e.g., `top-2 sm:top-1`).

These three small changes will make the landing page fully seamless on mobile with no black bar, while keeping the cinematic top bar on desktop.


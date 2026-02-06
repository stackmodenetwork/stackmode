

## Fix: Review Image Lightbox Sizing

### Problem
When users tap a review image to enlarge it, the image can be too large and overflow the viewport, making it impossible to see the full image. This is especially problematic on mobile devices.

### Solution
Constrain the lightbox image to always fit within the viewport with proper padding, so the entire image is visible without overlapping or scrolling.

### Changes

**File: `src/components/ReviewsBackgroundCarousel.tsx`**

1. **Update DialogContent container** - Change `max-w-3xl` to a viewport-aware constraint using `max-w-[90vw] max-h-[90vh]` so the dialog never exceeds 90% of the screen on any device.

2. **Constrain the image wrapper** - Add `flex items-center justify-center max-h-[80vh]` to the wrapper `div` so the image and controls stay centered and bounded.

3. **Constrain the image itself** - Change the `motion.img` classes from `w-full h-auto` to `max-w-full max-h-[75vh] w-auto h-auto object-contain` so the image scales down to fit within the viewport while maintaining its aspect ratio.

4. **Adjust close button positioning** - Move the close button from `absolute -top-12` to `absolute -top-10 right-2` so it stays visible and doesn't get clipped off-screen on smaller devices.

5. **Adjust counter positioning** - Keep the counter inside the image bounds so it doesn't overlap outside the visible area.

### Technical Details

The key CSS change on the image element:
- **Before:** `className="w-full h-auto rounded-xl border-2 border-primary/30"`
- **After:** `className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl border-2 border-primary/30"`

This ensures the image shrinks to fit within 75% of the viewport height while maintaining aspect ratio, so the full image is always visible with room for navigation buttons and the counter.


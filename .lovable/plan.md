

## Replace Testimonial Carousel with a High-Quality Review Wall

### What Changes

**1. Remove the $309 review image**
- Remove `review-9.png` from the review list entirely.

**2. Reorder reviews strategically**
- Move the Stripe/revenue screenshots (`review-62.png`, `review-63.png`, `review-64.png`) to the very front of the list so they appear first and immediately signal credibility.
- Follow with the strongest testimonial screenshots, then fill in with the rest.

**3. Replace TestimonialCarousel with a Wall of Reviews**
- Swap out the current sliding carousel for a masonry-style "wall of reviews" section on the Home page.
- The wall will show 6-9 reviews initially in a responsive grid (2 columns mobile, 3 columns desktop).
- A "View All Reviews" button expands to show all remaining reviews.
- Each card gets a consistent border (subtle border matching the brand's Electric Blue at low opacity) with a hover glow effect.
- Clicking any review opens a lightbox dialog with prev/next navigation.
- Section header: "Real Results. Real Members." with 5 gold stars.
- A small "Verified real results" trust badge below the grid.

### Technical Details

**Files modified:**
- `src/components/TestimonialCarousel.tsx` -- Rewrite into a wall-of-reviews component (or create a new `ReviewWall.tsx` component and swap it in Home.tsx).
- `src/pages/Home.tsx` -- Import the new wall component instead of `TestimonialCarousel`.

**Review order (Stripe-first, no review-9):**
```
review-64, review-63, review-62, review-61, review-59, review-57,
review-52, review-51, review-50, review-49, review-48, review-47,
review-46, review-44, review-1 through review-8, review-10 through review-14,
review-15 through review-20
```

**Wall layout:**
- CSS `columns-2 sm:columns-3` masonry grid with `gap-3`
- Each card: `rounded-xl`, `border border-primary/20`, `bg-card/20`, hover effect `hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5`
- Smooth fade-in animation using framer-motion stagger
- Show first 9 reviews, expandable to all with a button
- Lightbox reuses the existing Dialog pattern with prev/next arrows


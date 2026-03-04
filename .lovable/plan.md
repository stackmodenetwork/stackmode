

## Plan: Replace Text Testimonials with Review Image Marquee

The TestimonialsMarquee currently shows text-based cards. The user wants the actual review screenshot images (review-1.png through review-45.png) to scroll in vertical marquee columns instead.

### Changes

**1. Rewrite `src/components/TestimonialsMarquee.tsx`**
- Remove the text-based testimonial cards and data array
- Import the 45 review images list (same as ReviewsWall)
- Render review images inside the vertical `<Marquee>` columns instead of text cards
- Split the 45 images across 4 columns (~11 each) with varying speeds and directions
- Each image: rounded corners, border styling, `loading="lazy"`, click to open lightbox
- Add a lightbox (reuse the same pattern from ReviewsWall) with prev/next navigation
- Keep gradient overlays top/bottom
- Increase container height to `h-[600px]` for better visual impact
- Responsive: 2 columns on mobile, 3 on tablet, 4 on desktop (hide extra columns with `hidden sm:flex` / `hidden lg:flex`)

**2. Remove `ReviewsWall` from Landing page**
- Remove the `<ReviewsWall />` component and its import from `src/pages/Landing.tsx` since the images now live in the marquee
- Keep `TestimonialsMarquee` at the bottom before `SiteFooter`

**3. Optionally clean up `src/components/ReviewsWall.tsx`**
- Can be kept for use on other pages, or removed if unused elsewhere

### Result
The bottom of the landing page will have a visually dynamic, auto-scrolling wall of real review screenshots in vertical marquee columns with lightbox support.


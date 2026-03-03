

## Plan: Add IconHover3D Component to Library Page

### What changes

1. **Create `src/components/ui/icon-3d-hover.tsx`** -- Copy the provided IconHover3D component. Note: the provided JSX has empty/incomplete rendering (motion divs with no content). I will adapt it into a working 3D hover card with the cube animation concept, using proper framer-motion syntax that actually renders visible elements (the provided code has many empty `<motion.div>` tags with only comments).

2. **Update `src/pages/Library.tsx`** -- Remove the "Core Philosophy Carousel" section (lines 68-104: the quote carousel with dots) and replace it with a section using the IconHover3D component. The component will display "Library" as the heading and a description about the books/resources collection, serving as the page's intro element instead of the rotating quotes.

3. **No new dependencies needed** -- `framer-motion` is already installed.

### Technical details

- The provided component's JSX is largely skeleton/empty divs. I will implement the intended 3D cube hover effect with actual visible faces, border animations, and the heading fill-on-hover effect described in the code's variant logic.
- The component will use CSS `transform-style: preserve-3d` for the cube, with `rotateX`/`rotateY` animations on hover.
- The heading uses a clip-path fill animation: white text becomes black as a white background slides left-to-right on hover.
- Colors adapted to the Stackmode palette (white/black instead of purple).


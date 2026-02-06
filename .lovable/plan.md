

## Fix SoftwareProofSection: Images & Badge Redesign

### Problems Identified
1. The three screenshots overlap each other using absolute positioning, which looks messy especially on mobile
2. The floating badge uses an Apple emoji ("🚀") which looks cheap/unprofessional
3. On mobile, overlapping images are hard to see and create visual clutter

### Solution: Tabbed/Carousel Screenshot Viewer

Replace the stacked/overlapping image layout with a clean **tabbed gallery** that works great on both mobile and desktop.

**Image Display - Tabbed Design:**
- Three clickable tab buttons at the top: "StackFinder", "Calculators", "Sector IQ"
- Only one image visible at a time -- clean, no overlap
- Smooth crossfade animation between images using Framer Motion's AnimatePresence
- Each tab has a subtle active indicator (accent-colored underline)
- On mobile and desktop, the layout stays clean and readable

**Floating Badge Fix:**
- Remove the rocket emoji
- Change text from "Built with AI + Python" to **"Coded using AI"**
- Use a Lucide `Cpu` or `Code` icon instead of the emoji for a professional look

### Technical Details

**File: `src/components/SoftwareProofSection.tsx`**

1. Add `useState` for tracking the active screenshot tab (0, 1, 2)
2. Define a screenshots array with label, image src, and alt text
3. Replace the current absolute-positioned overlapping images with:
   - A row of tab buttons (flex, horizontal, gap-2)
   - A single image container that swaps content based on active tab
   - AnimatePresence wrapping a motion.img for smooth transitions
4. Replace the emoji badge with a Lucide icon + "Coded using AI" text
5. Remove all absolute positioning from images -- everything flows naturally
6. Responsive: tabs stack nicely, image container is full-width with rounded corners and border

**Layout structure:**
```text
+---------------------------+
| [StackFinder] [Calc] [IQ] |  <-- tab buttons
+---------------------------+
|                           |
|   (selected screenshot)   |  <-- single image, no overlap
|                           |
+---------------------------+
|  [Code icon] Coded using AI |  <-- clean badge, no emoji
+---------------------------+
```

No new files or dependencies needed -- uses existing Framer Motion AnimatePresence and useState from React.


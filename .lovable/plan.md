

# Replace AnimatedTextRotator with Typewriter Component

## What's changing
Replace the current `AnimatedTextRotator` in the hero heading with the `danielpetho/typewriter` component from 21st.dev. The heading will read "Master " followed by a typewriter effect cycling through "AI Software", "Brand Building", "Trading Systems", with "Build Wealth." on the second line.

## Steps

### 1. Create `src/components/ui/typewriter.tsx`
Install the Typewriter component from the fetched source. It uses framer-motion (already installed) and provides a clean typing/deleting animation with a blinking cursor.

### 2. Update `src/pages/Landing.tsx`
- Remove the `AnimatedTextRotator` import
- Import the new `Typewriter` component
- Replace the hero `h2` content:
  ```
  Master <Typewriter text={["AI Software", "Brand Building", "Trading Systems"]} />
  Build Wealth.
  ```
- Style the Typewriter output with the same gradient text effect currently on the rotator
- Keep the existing `Typewriter` (the terminal one lower in the file) — rename it to avoid conflict (e.g., `TerminalTypewriter`)

### 3. Rename collision
The file already has a local `Typewriter` component (the terminal phrases one at line 22). Rename it to `TerminalTypewriter` to avoid a naming conflict with the new UI component.

### Files to modify:
1. **`src/components/ui/typewriter.tsx`** — Create new file with the 21st.dev component
2. **`src/pages/Landing.tsx`** — Swap AnimatedTextRotator for new Typewriter, rename local Typewriter


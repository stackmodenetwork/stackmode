

# Remove Stackfinder from Nav, Integrate into Academy + Fix Build Error

## 1. Fix TypeScript build error (`src/components/ui/typewriter.tsx`)
Change `NodeJS.Timeout` to `ReturnType<typeof setTimeout>` on line 57 to resolve the `TS2503: Cannot find namespace 'NodeJS'` error.

## 2. Remove Stackfinder from navigation (`src/components/SiteNav.tsx`)
- Remove `{ label: 'Stackfinder', path: '/stackfinder' }` from the `navLinks` array
- Add "Academy" as a dropdown with sub-items:
  - "Academy Home" → `/academy`
  - "StackFinder" → `/stackfinder`

## 3. Update Academy page to include StackFinder promo (`src/pages/Home.tsx`)
- Add a StackFinder section within the Academy page content — a prominent card/link that directs users to `/stackfinder`, positioned after the tracks section
- Use the existing `StackFinderPromo` component (variant `'coding'`) which is already designed for this context

## Files to modify:
1. **`src/components/ui/typewriter.tsx`** — Fix `NodeJS.Timeout` type error
2. **`src/components/SiteNav.tsx`** — Remove Stackfinder nav item, make Academy a dropdown with Academy Home + StackFinder
3. **`src/pages/Home.tsx`** — Add StackFinderPromo section to the Academy page


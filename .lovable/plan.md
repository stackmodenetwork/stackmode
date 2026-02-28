

## Plan: Fix Mobile Buttons & Clean Up TrustBar Duplicates

### 1. Fix overlapping CTA buttons on mobile (`src/pages/Landing.tsx`)

**Lines 304-332**: The two buttons overlap on mobile because they use `text-xs` and long bracket text with inline styles competing for space.

Changes:
- Make buttons full-width on mobile: `w-full sm:w-auto`
- Add proper padding: `px-5 py-3` on both buttons
- Ensure `flex-col` stacking has enough gap: `gap-3`
- Shorten bracket text slightly for mobile readability

### 2. Remove duplicate brands in TrustBar (`src/components/TrustBar.tsx`)

Current list has 17 items — no literal duplicates in the array. But the user sees duplicates because the marquee triples each row (`[...row1, ...row1, ...row1]`). The issue is that with only 8-9 items per row on a small screen, duplicates are very visible.

The deeper problem: some logos represent overlapping brands:
- **ChatGPT** and **OpenAI** = same company (remove OpenAI, keep ChatGPT)
- **Notion** appears with `notion-full.png` — check if it also shows elsewhere

Fix:
- Remove OpenAI (ChatGPT already covers it)
- Redistribute items more evenly across 2 rows (9 and 8 → ~8 and 7)
- Reduce triple repeat to double repeat so duplicates are less visible on mobile
- This eliminates the "seeing the same name twice" problem

### 3. Files to edit

| File | Change |
|------|--------|
| `src/pages/Landing.tsx` | Fix button layout: full-width on mobile, proper padding and gap |
| `src/components/TrustBar.tsx` | Remove OpenAI duplicate, reduce repeat count from 3x to 2x |


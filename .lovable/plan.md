

# Plan: Update Premium Pricing to $7.99/mo with New Stripe Payment Link

## Problem
The current flow uses the old `create-checkout` edge function with a $20/mo price. The user wants to switch to a new Stripe payment link at `https://buy.stripe.com/aFa4gBdw3dd92ZK3nR43S0C` for $7.99/mo, with discount styling showing the old $20 price crossed out.

## Changes

### 1. Update `handleCheckout` in AuthContext
Replace the edge function call with a direct redirect to the new Stripe payment link. The `handleCheckout` function will open `https://buy.stripe.com/aFa4gBdw3dd92ZK3nR43S0C` instead of invoking `create-checkout`.

### 2. Update Pricing Page (`src/pages/Pricing.tsx`)
- Change Premium tier price from `$20` to `$7.99`
- Add strikethrough `$20` next to $7.99 and a discount badge (e.g., "60% OFF")
- Update comparison table header from "Stackmode $20" to "Stackmode $7.99"
- Change the subscribe button to use the direct Stripe link instead of `handleCheckout`

### 3. Update PromptShop Subscribe CTA (`src/pages/PromptShop.tsx`)
- The "Subscribe to Unlock" link in the premium modal should point to the Stripe payment link (or `/auth` if not logged in, then redirect to payment)

### 4. Update SiteNav Subscribe Buttons (`src/components/SiteNav.tsx`)
- Both desktop and mobile "Subscribe to Premium" buttons already use `handleCheckout` -- they will automatically use the new link once AuthContext is updated

### Files to modify:
1. **`src/contexts/AuthContext.tsx`** -- `handleCheckout` redirects to new Stripe link
2. **`src/pages/Pricing.tsx`** -- Update price display to $7.99 with $20 strikethrough + discount badge
3. **`src/pages/PromptShop.tsx`** -- Update subscribe CTA link in premium modal


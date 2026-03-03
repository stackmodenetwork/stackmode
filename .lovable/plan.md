

## Plan: Update Pricing Page + Set Up Stripe Payments

This is a two-part task. Part 1 is straightforward. Part 2 requires infrastructure setup first.

---

### Part 1: Pricing Page Text Updates

**File: `src/pages/Pricing.tsx`** -- Only this file changes. No other pages touched.

Changes to the `tiers` array (line 13-18):
- `name`: "Full Academy" → "Stackmode Architect"
- `price`: "$29" → "$20"
- `cta`: "Get Started" → "Get Access -- $20/mo"
- `href`: Will point to Stripe checkout (not Whop) once Stripe is wired

Changes to comparison table header (line 97):
- "Stackmode $29" → "Architect $20"

**File: `src/components/academy/AcademyPricing.tsx`** -- Update references:
- Heading: "Join Stackmode Academy Today" → "Join Stackmode Architect Today"
- Card heading: "STACKMODE ACADEMY MEMBERSHIP" → "STACKMODE ARCHITECT"
- Price: "$50" → "$20"
- Button: "Join Academy Now -- $50/month" → "Get Access -- $20/mo"

---

### Part 2: Stripe + Supabase Integration

**Blocker: No Supabase or Stripe is connected to this project yet.**

Before any backend code can be written, we need:

1. **Enable Lovable Cloud (or connect external Supabase)** -- This gives us a database for the `profiles` table, auth, and edge functions. Without this, there is no backend.

2. **Enable Stripe** -- This collects your Stripe secret key and makes the Stripe tools available to create the product, price, webhooks, and edge functions.

**Recommended order:**
1. I update the pricing page text now (Part 1)
2. You enable Cloud/Supabase from the Cloud tab
3. You enable Stripe (I'll use the Stripe tool which will prompt you for your secret key)
4. Then I create the profiles table, edge functions (stripe-webhook, create-checkout-session, create-portal-session), and wire the checkout button

**Want me to proceed with Part 1 (the text updates) now, and then we tackle Stripe + Supabase as the next step?**


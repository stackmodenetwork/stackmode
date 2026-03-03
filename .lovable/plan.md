

## Full Stripe + Auth Integration Plan

This is a multi-part build: an `/auth` page, Stripe subscription edge functions, auth-aware nav, and premium gating.

### What already exists
- **Profiles table** with `subscription_status`, `stripe_customer_id`, `subscription_end_date` columns and RLS policies
- **Stripe product**: "Stackmode Architect Premium Plan" at $20/month (`price_1T6kCqRqIhXyWonrAAxhR0MJ`)
- **Secrets**: `STRIPE_SECRET_KEY`, `LOVABLE_API_KEY` already configured
- **No edge functions or config.toml** exist yet

### What we will build

**1. `/auth` page** (`src/pages/Auth.tsx`)
- Dark-themed signup/login page matching Stackmode brand
- Stackmode logo centered at top, tagline beneath
- Tab switcher: Sign Up (email + password) and Login (email + password)
- Google OAuth button using `supabase.auth.signInWithOAuth({ provider: 'google' })`
- On success, redirect to `/`
- No `react-icons` dependency; use an inline Google SVG icon instead
- Style: dark card on black background, Space Grotesk font, clean and sleek

**2. Auth context** (`src/contexts/AuthContext.tsx`)
- Global auth provider wrapping the app
- Tracks: `user`, `session`, `isSubscribed`, `subscriptionEnd`, `loading`
- Calls `check-subscription` edge function on login and every 60 seconds
- Provides `signOut` helper

**3. Three Supabase Edge Functions**
- `supabase/functions/check-subscription/index.ts` — verifies active Stripe subscription by user email
- `supabase/functions/create-checkout/index.ts` — creates Stripe checkout session for authenticated user, returns URL
- `supabase/functions/customer-portal/index.ts` — creates Stripe billing portal session

All use `price_1T6kCqRqIhXyWonrAAxhR0MJ` and CORS headers.

**4. `supabase/config.toml`** — set `verify_jwt = false` for all three functions (auth validated in code)

**5. Auth-aware SiteNav update**
- If not logged in: show "Login" button linking to `/auth`
- If logged in but not subscribed: show "Subscribe" button that triggers checkout
- If logged in and subscribed: show gold "Premium" badge
- Dropdown with "Manage Subscription" (portal) and "Logout"
- **Only the `/academy` page keeps the Whop link** — all other "Subscribe to Premium" buttons use Stripe checkout

**6. Route updates** (`App.tsx`)
- Add `/auth` route
- Wrap app in `AuthProvider`

**7. Pricing page update** — middle tier CTA uses Stripe checkout instead of Whop link

### What stays the same
- `/academy` page keeps Whop links (no Stripe there)
- All existing pages and styling remain intact
- No changes to `client.ts`, `types.ts`, or `.env`

### Technical details

```text
Edge Function Flow:
  User clicks "Subscribe" 
    → AuthContext checks login (redirect to /auth if not)
    → Calls create-checkout edge function
    → Returns Stripe checkout URL
    → User completes payment on Stripe
    → check-subscription detects active sub on next poll
    → UI updates to show Premium badge

Files to create:
  src/pages/Auth.tsx
  src/contexts/AuthContext.tsx
  supabase/config.toml
  supabase/functions/check-subscription/index.ts
  supabase/functions/create-checkout/index.ts
  supabase/functions/customer-portal/index.ts

Files to modify:
  src/App.tsx (add AuthProvider wrapper + /auth route)
  src/components/SiteNav.tsx (auth-aware nav)
  src/pages/Pricing.tsx (Stripe checkout for middle tier)
```


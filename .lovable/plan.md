

## Plan: Wire Stripe $20/mo Subscription End-to-End

**Stripe product already exists:** "Stackmode Architect Premium Plan" (`prod_U4u0abZakpp1fP`) with price `price_1T6kCqRqIhXyWonrAAxhR0MJ` at $20/month. No need to create anything new in Stripe.

---

### 1. Create Three Edge Functions

**`supabase/functions/create-checkout/index.ts`**
- Authenticates user via JWT, looks up or creates Stripe customer by email
- Creates a Stripe checkout session using `price_1T6kCqRqIhXyWonrAAxhR0MJ` in `subscription` mode
- Returns checkout URL; frontend redirects user to Stripe

**`supabase/functions/check-subscription/index.ts`**
- Authenticates user, looks up Stripe customer by email
- Queries active subscriptions, returns `{ subscribed, product_id, subscription_end }`
- Called on login, page load, and periodically

**`supabase/functions/customer-portal/index.ts`**
- Authenticates user, creates a Stripe Billing Portal session
- Returns portal URL for managing/canceling subscription

All three need `verify_jwt = false` in `supabase/config.toml` (JWT validated manually in code).

---

### 2. Create Auth Page (`src/pages/Auth.tsx`)

- Email/password login and signup form
- Uses Supabase Auth (`supabase.auth.signInWithPassword` / `signUp`)
- Redirects to `/pricing` or `/dashboard` after login
- Add `/auth` route to `App.tsx`

---

### 3. Create AuthContext (`src/contexts/AuthContext.tsx`)

- Wraps the app; listens to `onAuthStateChange`
- On login/session change, calls `check-subscription` edge function
- Exposes: `user`, `session`, `isSubscribed`, `subscriptionEnd`, `signOut`, `checkSubscription`
- Wrap `App.tsx` children with this provider

---

### 4. Update Pricing Page

- Replace the Whop link on the Stackmode Architect card with a button that:
  - If not logged in: redirects to `/auth`
  - If logged in but not subscribed: calls `create-checkout` and redirects to Stripe
  - If already subscribed: shows "Manage Subscription" linking to customer portal

---

### 5. Create Dashboard Page (`src/pages/Dashboard.tsx`)

- Protected route (redirects to `/auth` if not logged in)
- Shows premium member badge, subscription status, end date
- "Manage Subscription" button (customer portal)
- Add `/dashboard` route to `App.tsx`

---

### Technical Details

- **Price ID** (hardcoded): `price_1T6kCqRqIhXyWonrAAxhR0MJ`
- **Product ID**: `prod_U4u0abZakpp1fP`
- **Secrets already configured**: `STRIPE_SECRET_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- **Database**: `profiles` table already has `stripe_customer_id`, `subscription_status`, `subscription_end_date` columns with RLS policies
- **No webhooks** -- subscription status checked live via Stripe API


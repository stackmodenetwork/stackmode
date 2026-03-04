

# Comprehensive Stackmode Flow Overhaul

This is a large request covering multiple systems. Here is the plan broken into clear tasks.

## 1. Grant Premium Access for Testing

Update the `check-subscription` edge function to recognize `officialbeatsbykinco@gmail.com` as a premium user (hardcoded override for your testing account). This lets you see the full premium experience live without needing a Stripe subscription.

## 2. Fix Auth Redirect -- Stay on Current Page After Login

**Problem:** When a user clicks "View Prompt" on `/shop`, sees the subscribe overlay, clicks to `/auth`, and logs in, they get sent to `/` (home). They should return to where they were.

**Fix:**
- In `PromptShop.tsx`: When the "Subscribe to Unlock" link is clicked, encode the current URL as a query param: `/auth?redirect=/shop`
- In `Auth.tsx`: Read the `redirect` query param. After successful login/Google OAuth, navigate to that URL instead of `/`. For Google OAuth, store the redirect in `sessionStorage` before redirecting, then read it back on return.

## 3. Premium-Aware Prompt Dialog

**Problem:** Subscribed users still see the "Subscribe to Unlock" overlay on premium prompts.

**Fix:**
- Import `useAuth` in `PromptShop.tsx`
- In the dialog, check `isSubscribed`:
  - If subscribed: show full prompt text with copy button (same as free prompts) -- requires adding `fullPrompt` to premium prompt data
  - If not subscribed: show current blurred overlay with subscribe CTA

## 4. Smart Nav Button for Subscribers

**Problem:** Subscribed users see "Subscribe" button instead of "Manage".

**Fix in `SiteNav.tsx`:**
- When `isSubscribed === true`: Show "Manage" button (gold badge style). Dropdown shows "Manage Subscription" (triggers `handlePortal`) and "Logout".
- This is already partially implemented but the label says "Premium" -- change the button flow so it says "Manage" with a clear dropdown for cancellation/portal access.
- Show user's email beneath the menu items for identification.

## 5. Auth Page Cleanup -- Passwordless Focus

Per the memory note, auth should be passwordless (Google OAuth + Magic Links only). However the current Auth page has email/password forms. Since the user hasn't explicitly asked to remove these, I'll keep them but ensure the redirect logic works.

## 6. SEO + Meta Optimization

- Ensure every page has proper `<Helmet>` with title, description, canonical URL
- Add "Christopher Robinson, Stackmodechris" branding consistently to meta descriptions
- Add Open Graph tags to Landing, Shop, Academy pages
- Ensure mobile viewport meta is set in `index.html`

## 7. Mobile Responsiveness Audit

- Ensure nav hamburger menu works cleanly
- Verify prompt dialog modal sizing on mobile (already done with 95vw)
- Check all CTA buttons have adequate touch targets (min 44px)

## 8. Button/Link Audit Across Pages

- All "Subscribe" / "Unlock Premium" CTAs redirect to `/auth?redirect=<currentPath>` instead of just `/auth`
- Academy page keeps Whop links
- All nav dropdown links properly filter the prompt shop

---

## Technical Details

### Files to modify:
1. **`supabase/functions/check-subscription/index.ts`** -- Add email override for testing
2. **`src/pages/PromptShop.tsx`** -- Add `useAuth`, conditional premium content display, fix subscribe link with redirect param, add `fullPrompt` to premium prompts
3. **`src/pages/Auth.tsx`** -- Read `redirect` query param, navigate there after login, store in sessionStorage for OAuth flow
4. **`src/components/SiteNav.tsx`** -- Update subscribed user button to show "Manage" with email, improve dropdown UX
5. **`src/pages/Landing.tsx`** -- Add OG meta tags, ensure Christopher Robinson branding
6. **`index.html`** -- Verify viewport meta tag

### Premium prompt content:
Will add placeholder `fullPrompt` text to premium prompts so subscribed users can see/copy them. You can replace with real content later.

### No database changes needed.


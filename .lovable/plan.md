

## Fix: Meta Pixel ViewContent Missing Parameters

### Problem
Meta Pixel is flagging the `ViewContent` event because it's missing the required `value` and `currency` parameters. This prevents proper conversion tracking and ad optimization in Meta Ads Manager.

### Current Code (line 269 in `index.html`)
```js
fbq('track', 'ViewContent');
```

### Updated Code
```js
fbq('track', 'ViewContent', {
  content_name: 'Stackmode Academy Homepage',
  content_category: 'Education',
  value: 0.00,
  currency: 'USD'
});
```

### What This Does
- Adds `value: 0.00` -- since this is a page view (not a purchase), the value is 0. This satisfies Meta's requirement that value must be a numeric value greater than or equal to 0.
- Adds `currency: 'USD'` -- required currency code.
- Adds `content_name` and `content_category` for better event reporting in Meta Ads Manager.

### File Changed
- **`index.html`** -- Line 269: Update the `ViewContent` event call to include the missing parameters.

# Stackmode

**Website**: https://stackmode.net

Stackmode is an online academy teaching AI-powered software development, asset stacking, and financial systems.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn-ui
- Supabase (auth & database)
- Cloudflare Pages (hosting)

## Local Development

```sh
# Clone the repo
git clone <YOUR_GIT_URL>
cd stackmode

# Install dependencies (bun recommended)
bun install
# or: npm install

# Start dev server
bun run dev
# or: npm run dev
```

Requires Node.js 18+ or Bun. Copy `.env.example` to `.env.local` and fill in your Supabase credentials.

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon/public key |

## Deployment

Deployed via Cloudflare Pages. Push to `main` triggers a deploy, or run:

```sh
npx wrangler pages deploy dist --project-name=stackmode
```

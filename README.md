# Portfolio

An Amazon-creative portfolio site built with Next.js (App Router), Tailwind CSS, and Framer Motion — dark theme with a gold accent, animated route transitions, scroll reveals.

## Running it

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Where to edit things

- **Categories (Main Images, Listing Images, A+ Content, Brand Story, Brand Store)** — [`src/lib/categories.ts`](src/lib/categories.ts). Each entry drives its folder card on Home/Work and its own page at `/work/<slug>` (headline, subtext, and preview images).
- **Adding real work samples** — drop image files anywhere under `public/` (e.g. `public/work/main-images/1.jpg`) and list their paths in that category's `images` array in `categories.ts`. Until you add paths, a gold placeholder grid renders instead so the layout still looks finished.
- **Name, bio, skills, "What I do"** — [`src/app/about/page.tsx`](src/app/about/page.tsx).
- **Hero headline/copy** — [`src/components/Hero.tsx`](src/components/Hero.tsx).
- **Email & social links** — [`src/app/contact/page.tsx`](src/app/contact/page.tsx) and [`src/components/Footer.tsx`](src/components/Footer.tsx) (update the placeholder LinkedIn/Instagram URLs).
- **Colors** — CSS variables at the top of [`src/app/globals.css`](src/app/globals.css) (`--accent` is the gold; `--background`, etc for the rest).
- **Nav links / site name** — [`src/components/Nav.tsx`](src/components/Nav.tsx).

## Deploying

Push this to a GitHub repo and import it on [Vercel](https://vercel.com/new) (zero-config for Next.js). Add a custom domain under the project's Domains settings once it's deployed.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react

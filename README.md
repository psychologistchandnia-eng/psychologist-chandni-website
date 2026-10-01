# Psychologist Chandni Akhenia

Premium, mobile-first website for Psychologist Chandni Akhenia in Malad West, Mumbai. Built with Next.js App Router and exported as a static site for GitHub Pages.

## Local development

```sh
pnpm install
pnpm dev
```

## Production build

```sh
pnpm install --frozen-lockfile
pnpm build
```

The static site is generated in `out/`. Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## Domain

The canonical URL is `https://www.besttherapistnearme.in`. GitHub Pages must use **GitHub Actions** as its Pages deployment source and `www.besttherapistnearme.in` as the custom domain. The apex domain should remain connected as an alias and forward to the canonical `www` host through GitHub Pages. The `public/CNAME` file is included in the export.

## Site information

Business listing details, address, appointment hours, contact details, social links and page URLs are centralized in `lib/site.ts`. Service content and routes are in `lib/services.ts`.

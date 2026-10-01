# SEO audit and implementation record

**Site:** [besttherapistnearme.in](https://www.besttherapistnearme.in/)  
**Architecture:** Next.js App Router, static export, deployed to GitHub Pages  
**Canonical host:** `https://www.besttherapistnearme.in`

## Scope and current routes

The repository has four informational pages and 14 service pages: home, About, FAQ, Contact, Anxiety, Depression, Stress and Workplace Burnout, Relationship and Couples Counselling, Teen and Adolescent Mental Health, ADHD and Autism, OCD, Trauma and PTSD, Personality and Relationship Patterns, Sleep Problems, Grief and Loss, Self-Esteem and Personal Growth, Productivity and Focus, and Online Psychology Consultation.

The service pages share a single route template and central service data in `lib/services.ts`. The site has no blog or separate resources architecture. No neighborhood doorway pages were created. The practice address is in Malad West; neighborhood references describe areas for which online appointments can be discussed, not additional clinic locations.

## Problems found and changes made

- **Social metadata drift:** Inner pages inherited the homepage Open Graph and Twitter titles/descriptions from the root layout. Added `lib/metadata.ts` and applied it to all indexable routes so each page now has a route-specific title, description, canonical, Open Graph URL/image/title/description and Twitter metadata.
- **404 index signals:** The static 404 page inherited the homepage canonical and index directive. Removed the root-level canonical fallback (every indexable route already defines its own) and set the 404 page to `noindex, follow`.
- **Sitemap dates and URL consistency:** The sitemap used the same fixed modification date for every page and represented the home URL without its trailing slash. Removed unverified `lastmod` values and aligned the home URL with its canonical slash form.
- **Robots output:** Kept crawling open and the sitemap declaration. Removed the nonessential `Host` directive.
- **Over-specific medical schema:** Service pages labeled every topic as a `MedicalCondition`, including relationship concerns, general focus and online consultation. Changed these pages to `WebPage` with a general `Thing` topic and a connected `Service` entity. FAQ schema remains only where the visible page contains those questions.
- **Entity connection:** Added a `WebSite` node and linked the professional practice and service pages to the site, practitioner and provider entities. The home page retains `Person` and `ProfessionalService` data with the supported address, geo, hours, phone, email, service areas and existing profile links. No review/rating schema was added.
- **Local relevance:** Added Kandivali West, Andheri and Bandra to the existing schema service-area list based on the user-provided target areas. The homepage clarifies that these are areas where online appointments can be discussed; the only physical appointment location remains Malad West.
- **Image accessibility:** Kept the descriptive portrait alt text, dimensions and responsive `sizes` values. Marked the two purely decorative SVG illustrations with empty alt attributes.

## Technical and content findings

- `app/sitemap.ts` generates all **18 indexable URLs**. `app/robots.ts` allows crawling and points to the sitemap.
- Every indexable route has exactly one H1, a unique title and description, and a canonical on the `www` host.
- Breadcrumb navigation and `BreadcrumbList` JSON-LD are present on all inner pages. Service pages contain visible FAQs and corresponding FAQPage JSON-LD; the FAQ page schema matches its visible question list.
- Structured-data scripts parse as JSON. Service pages use general page/service entities rather than diagnostic condition claims. No review or rating markup exists.
- All 14 service articles contain the shared first-visit and online-consultation information, a clear WhatsApp booking CTA, four visible FAQs and three related service links. Their main article text is approximately 655–715 words per page.
- Homepage service cards link to all service pages; service pages link to related services; About, FAQ, Contact and footer navigation connect the informational routes. WhatsApp, phone and email links are present; service pages have a service-specific WhatsApp message and a call link.
- The portrait is a 57 KB JPEG. Images use `next/image`, descriptive sizing and dimensions. Because this is a GitHub Pages static export, Next image optimization is disabled (`images.unoptimized`); the exported pages do not receive Next’s responsive image transformation. The current portrait is already small, and the site’s previously measured mobile PageSpeed scores were 95 Performance, 100 Accessibility, 100 Best Practices and 100 SEO. Those scores predate this audit’s latest metadata/content edits and should be measured again after deployment.
- Focus-visible styling, a skip link, semantic headings, a labeled navigation menu and reduced-motion rules are present. The reveal animation leaves content visible unless client-side motion setup runs.
- Google Maps is embedded on the homepage and Contact page. The footer includes the practice address, hours, phone and email.
- Static hosting provides the 404 page, but this repository does not define arbitrary 301 redirect rules. The canonical `www` host and apex forwarding are hosting/DNS configuration. A redirect from the older Chandni Vercel deployment would need a separate change in that Vercel project. No Dr. Abhijeet domain or project was changed.

## Validation performed

- `pnpm build` completed successfully with Next.js 16.3.7 and generated static routes for all listed pages, sitemap and robots.
- Generated output contains 18 sitemap URLs; all 18 have one H1, a canonical, a meta description, Open Graph and Twitter tags, and parseable JSON-LD.
- Generated 404 output has `noindex` and no longer inherits a homepage canonical.
- Fourteen service articles fall within the word-count range above. Five rendered images were found across the indexable pages; none is missing an `alt` attribute.
- An anchor-only check found **zero broken internal routes or fragments** across the 18 indexable pages. All locally referenced image, script, stylesheet and icon files were present in the static export.

## Remaining issues and recommendations

- The repository currently has no blog/resource section. Add articles only when Chandni can review the clinical content and factual sources; begin with first-session expectations, online vs in-person appointments, stress and relationship communication. Link each article to a relevant service and Contact page.
- The GMB website field still points to the previous Chandni Vercel site. Update it manually to `https://www.besttherapistnearme.in/` after the code deployment is live.
- The site currently has one genuine portrait and decorative SVG art, but no real clinic/reception photos. Add permitted location photos only after obtaining them and confirming hospital permission.
- Chandni’s languages, internships, additional training and any professional registration details were not provided. They remain absent or marked for confirmation; do not invent them.
- The LinkedIn URL is present in the repository based on the older Chandni site, but should be confirmed as Chandni’s current profile. Practo and YouTube URLs are blank and correctly omitted from schema.
- Recheck that Google Business Profile hours, address pin, website, phone, email and displayed services match the site. The profile currently lists Monday–Saturday 11:00 am–9:00 pm and Sunday 11:00 am–3:00 pm.
- Verify the domain property in Google Search Console, submit `https://www.besttherapistnearme.in/sitemap.xml`, inspect the homepage and key service URLs, and review Page indexing after deployment.
- Run PageSpeed Insights again after deployment and check the actual GitHub Pages response for `/`, `/contact/`, `/ocd/`, `/sitemap.xml`, `/robots.txt` and an unknown URL. The most recent reported PageSpeed score belongs to the previous deployed version.
- The older Chandni Vercel domain may serve a duplicate/older copy. This repository cannot redirect that separate deployment. Confirm whether it should permanently redirect to the canonical site, then configure the redirect in that Vercel project. Domains belonging to Dr. Abhijeet remain untouched.

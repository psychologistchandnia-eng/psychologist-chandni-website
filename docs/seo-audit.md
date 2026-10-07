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
- The portrait is a 57 KB JPEG. Images use `next/image`, descriptive sizing and dimensions. Because this is a GitHub Pages static export, Next image optimization is disabled (`images.unoptimized`); the exported pages do not receive Next’s responsive image transformation. A fresh mobile PageSpeed Insights run on the live homepage on **October 2, 2026** scored **97 Performance, 100 Accessibility, 100 Best Practices and 100 SEO**. It reported FCP 0.9 s, LCP 2.3 s, TBT 20 ms, CLS 0 and Speed Index 3.8 s under simulated Moto G Power / slow 4G conditions. The report had no CrUX field data. It still identified possible savings for image delivery (31 KB), cache lifetime (270 KB), unused JavaScript (29 KB) and render-blocking requests (90 ms); these are opportunities, while the mobile Lighthouse score is already above 90. [View the mobile report](https://pagespeed.web.dev/analysis/https-www-besttherapistnearme-in/w9xdataj4m?form_factor=mobile).
- Focus-visible styling, a skip link, semantic headings, a labeled navigation menu and reduced-motion rules are present. The reveal animation leaves content visible unless client-side motion setup runs.
- Google Maps is embedded on the homepage and Contact page. The footer includes the practice address, hours, phone and email.
- Static hosting provides the 404 page, but this repository does not define arbitrary 301 redirect rules. The canonical `www` host and apex forwarding are hosting/DNS configuration. A redirect from the older Chandni Vercel deployment would need a separate change in that Vercel project. No Dr. Abhijeet domain or project was changed.
- The first audit deployment succeeded but reported that several workflow actions still declared Node 20 and that `ubuntu-latest` would migrate to Ubuntu 26 later in October 2026. Updated the workflow to supported Node 24-compatible action releases and pinned the build runner to Ubuntu 24.04 for a stable image.

## Validation performed

- `pnpm build` completed successfully with Next.js 16.3.7 and generated static routes for all listed pages, sitemap and robots.
- Generated output contains 18 sitemap URLs; all 18 have one H1, a canonical, a meta description, Open Graph and Twitter tags, and parseable JSON-LD.
- Generated 404 output has `noindex` and no longer inherits a homepage canonical.
- Fourteen service articles fall within the word-count range above. Five rendered images were found across the indexable pages; none is missing an `alt` attribute.
- An anchor-only check found **zero broken internal routes or fragments** across the 18 indexable pages. All locally referenced image, script, stylesheet and icon files were present in the static export.

## Remaining issues and recommendations

- The repository currently has no blog/resource section. Add articles only when Chandni can review the clinical content and factual sources; begin with first-session expectations, online vs in-person appointments, stress and relationship communication. Link each article to a relevant service and Contact page.
- At the time of this October 2 audit, the GMB website field still pointed to the previous Chandni Vercel site. A later account session changed it to the canonical domain; reconfirm it in the profile after publishing these code changes.
- The site currently has one genuine portrait and decorative SVG art, but no real clinic/reception photos. Add permitted location photos only after obtaining them and confirming hospital permission.
- Chandni’s languages, internships, additional training and any professional registration details were not provided. They remain absent or marked for confirmation; do not invent them.
- The LinkedIn URL is present in the repository based on the older Chandni site, but should be confirmed as Chandni’s current profile. Practo and YouTube URLs are blank and correctly omitted from schema.
- Recheck that Google Business Profile hours, address pin, website, phone, email and displayed services match the site. The profile currently lists Monday–Saturday 11:00 am–9:00 pm and Sunday 11:00 am–3:00 pm.
- Verify the domain property in Google Search Console, submit `https://www.besttherapistnearme.in/sitemap.xml`, inspect the homepage and key service URLs, and review Page indexing after deployment.
- The live homepage has a current mobile PageSpeed report linked above. Repeat it after material image, font or layout changes, and review representative service and Contact pages separately. The production build generated the sitemap and robots files; Search Console should confirm that Google can fetch them and process all submitted routes.
- The older Chandni Vercel domain may serve a duplicate/older copy. This repository cannot redirect that separate deployment. Confirm whether it should permanently redirect to the canonical site, then configure the redirect in that Vercel project. Domains belonging to Dr. Abhijeet remain untouched.

## Follow-up audit — October 7, 2026

- **ChatGPT Search access:** `app/robots.ts` now explicitly allows `OAI-SearchBot` to crawl all public pages. OpenAI says this is the crawler publishers should not block when they want content considered for ChatGPT Search summaries and citations. This enables discovery; it does not guarantee a recommendation or citation. [OpenAI publisher guidance](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- **Service search snippets:** Each of the 14 service pages now has an individually written title and description that names the service and Malad West, Mumbai. Existing H1s and service URLs are unchanged.
- **Entity accuracy:** Removed an unverified LinkedIn URL from Person and ProfessionalService `sameAs` data. The confirmed Google Business Profile/Maps and Instagram links remain; empty Practo and YouTube fields remain omitted.
- **Sitemap accuracy:** Kept the 18 canonical URLs and removed unsupported monthly `changeFrequency` and priority hints. No fabricated modification dates are included.
- **Public discovery check:** A public search on this date surfaced the older [psychologistchandniakhenia.vercel.app](https://psychologistchandniakhenia.vercel.app/) site; the canonical domain did not appear in the same search check. Search results are not definitive proof of index status, so use Search Console URL Inspection after publication. The old Vercel site is independently hosted and is still an outstanding duplicate-content/conflicting-information issue; this GitHub Pages project cannot issue a redirect for that separate host.
- **Search Console/profile status:** A previous account session verified the domain and submitted the 18-URL sitemap successfully, and changed the Google Business Profile website field to the canonical domain. These account states were not rechecked in this follow-up.
- **External profile consistency:** A public [Medavas directory listing](https://medavas.com/therapists/india/maharashtra/palghar/) surfaced Chandni with “1+ Years Experience,” which conflicts with the user-confirmed three years on this site. Update that third-party listing if Chandni controls it. The site itself continues to omit unverified language and training claims.
- **Validation:** `git diff --check` and `tsc --noEmit` passed. The production build could not finish in this environment because Next.js could not fetch Cardo and Inter from Google Fonts. Direct live-host checks for the canonical site and Vercel host were blocked in this environment, so the current deployed `robots.txt`, sitemap and redirects still need confirmation after publication.

Google's guidance for generative Search features is to keep pages crawlable and useful, with no special AI markup or `llms.txt` required. [Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?version=published)

## Articles and publication update — October 7, 2026

- Added an Articles hub, ten sourced educational guides and a website privacy page. The sitemap now includes 30 indexable pages. Guides link to relevant services, booking, related reading and official references, without claiming unverified clinical review.
- Improved mobile body text, article navigation and related links. Added a separate Book now link to each homepage service card. Google Maps loads only after the visitor requests it; verified the interactive embed in the browser.
- Added an export validation script and a deployment check to prevent broken internal links, missing assets, duplicate metadata or incorrect canonical URLs from publishing.
- The earlier font-fetch limitation was resolved with network access. The production build and export validation passed for all 30 pages. Desktop and 390px mobile browser reviews passed; the representative article had no horizontal overflow.
- Publication uses the existing GitHub Pages workflow. No unrelated Dr. Abhijeet properties are changed. The separate older Chandni Vercel deployment and third-party profile corrections still require their own account access.

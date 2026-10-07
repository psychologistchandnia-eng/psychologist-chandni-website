import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCards from "@/components/ArticleCards";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { articles, articleBySlug, articlePath, articlePublishedDate, readingMinutes } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { serviceBySlug, servicePath } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const article = articleBySlug.get((await params).slug);
  return article ? pageMetadata({ title: article.title, description: article.description, path: articlePath(article.slug), openGraphType: "article" }) : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = articleBySlug.get((await params).slug);
  if (!article) notFound();
  const url = absoluteUrl(articlePath(article.slug));
  const related = articles.filter((other) => other.slug !== article.slug && other.relatedServices.some((slug) => article.relatedServices.includes(slug))).slice(0, 3);
  const sources = [...new Map(article.sections.filter((section) => section.source).map((section) => [section.source!.url, section.source!])).values()];
  return <main id="main" className="inner-page reading-page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", "@id": url + "#article", headline: article.title, description: article.description, url, mainEntityOfPage: { "@type": "WebPage", "@id": url }, inLanguage: "en-IN", datePublished: articlePublishedDate, dateModified: articlePublishedDate, articleSection: article.category, publisher: { "@type": "Organization", "@id": absoluteUrl("/#practice"), name: site.name, url: absoluteUrl("/") }, citation: sources.map((source) => source.url), isPartOf: { "@id": absoluteUrl("/articles/#webpage") } }} />
    <section className="page-intro"><div className="shell">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Articles", href: "/articles/" }, { label: article.title, href: articlePath(article.slug) }]} />
      <div className="page-title-block"><p className="eyebrow">{article.category} · {readingMinutes(article)} min read</p><h1>{article.title}</h1><p className="lead">{article.intro}</p><p className="guide-date">Published <time dateTime={articlePublishedDate}>7 October 2026</time> · Educational guide</p></div>
    </div></section>
    <div className="shell article-layout">
      <article className="service-article">
        <nav className="guide-contents" aria-label="In this article"><h2>In this guide</h2><ol>{article.sections.map((section) => <li key={section.id}><a href={"#" + section.id}>{section.title}</a></li>)}</ol></nav>
        {article.sections.map((section) => <section key={section.id} className="article-section" aria-labelledby={section.id}><h2 id={section.id}>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul className="check-list">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{section.source && <p className="guide-source">Reference: <a href={section.source.url} target="_blank" rel="noopener noreferrer">{section.source.title} ↗</a></p>}</section>)}
        <section className="article-section soft-panel"><h2>About this guide</h2><p>Published on the website of Psychologist Chandni Akhenia, M.A. in Clinical Psychology, with {site.experienceYears} years of experience. This is general educational information, not a personalised assessment. The public health references above support the information; their inclusion does not imply endorsement of this practice.</p><p>For appointments, visit the <Link className="text-link" href="/contact/">Contact page</Link>. You can also read <Link className="text-link" href="/faq/">session FAQs</Link> or learn <Link className="text-link" href="/about/">about Chandni</Link>.</p></section>
        <section className="care-note"><h2>Need urgent support?</h2><p>If there is immediate danger, contact local emergency services. In India, Tele-MANAS is available at <a href="tel:14416">14416</a>. This website and its booking channels are not an emergency service.</p></section>
      </article>
      <aside className="service-aside">
        <div className="practitioner-card"><p className="eyebrow">Talk it through</p><h2>A first conversation, at your pace.</h2><p>Psychological support in Malad West, Mumbai and online, by prior booking.</p><a className="button button-primary button-full" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a></div>
        <div className="related-card"><p className="eyebrow">Relevant support</p><h2>Explore counselling</h2>{article.relatedServices.map((slug) => { const service = serviceBySlug.get(slug); return service ? <Link className="related-link" key={slug} href={servicePath(slug)}><span>{service.title}</span><span aria-hidden="true">↗</span></Link> : null; })}</div>
      </aside>
    </div>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">Keep reading</p><h2>More room to explore.</h2></div><ArticleCards items={related} /></div></section>
  </main>;
}

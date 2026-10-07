import ArticleCards from "@/components/ArticleCards";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { articles, articlePath } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Mental Health Articles & Counselling Guides",
  description: "Practical guides to anxiety, relationships, grief, sleep and starting therapy. Explore psychological support in Malad West, Mumbai with Chandni Akhenia.",
  path: "/articles/"
});

export default function ArticlesPage() {
  return <main id="main" className="inner-page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", "@id": absoluteUrl("/articles/#webpage"), name: "Mental health articles and counselling guides", url: absoluteUrl("/articles/"), isPartOf: { "@id": absoluteUrl("/#website") }, mainEntity: { "@type": "ItemList", itemListElement: articles.map((article, index) => ({ "@type": "ListItem", position: index + 1, name: article.title, url: absoluteUrl(articlePath(article.slug)) })) } }} />
    <section className="page-intro"><div className="shell">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Articles", href: "/articles/" }]} />
      <div className="page-title-block"><p className="eyebrow">Understand, reflect, begin</p><h1>Room for <em>understanding.</em></h1><p className="lead">Practical reading for everyday concerns and the questions that come before a first consultation.</p></div>
    </div></section>
    <section className="section"><div className="shell">
      <p className="guide-editorial-note">These educational guides bring together public health references and practical appointment information. Each guide links to its sources and relevant support. Reading can help you prepare questions; it does not provide an individual diagnosis or treatment plan.</p>
      <ArticleCards items={articles} />
    </div></section>
  </main>;
}

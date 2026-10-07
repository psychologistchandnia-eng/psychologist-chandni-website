import Link from "next/link";
import { articlePath, readingMinutes, type Article } from "@/lib/articles";

export default function ArticleCards({ items }: { items: Article[] }) {
  return <div className="article-grid">{items.map((article) => (
    <Link key={article.slug} className="guide-card" href={articlePath(article.slug)}>
      <span className="guide-category">{article.category} · {readingMinutes(article)} min read</span>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <span className="text-link">Read the guide <span aria-hidden="true">↗</span></span>
    </Link>
  ))}</div>;
}

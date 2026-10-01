import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": absoluteUrl(item.href || "")
    }))
  };
  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>{items.map((item, index) => (
          <li key={item.label}>
            {index < items.length - 1 && item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}</ol>
      </nav>
    </>
  );
}

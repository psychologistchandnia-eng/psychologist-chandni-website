import type { MetadataRoute } from "next";
import { services, servicePath } from "@/lib/services";
import { site, absoluteUrl } from "@/lib/site";
import { articles, articlePath, articlePublishedDate } from "@/lib/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about/", "/faq/", "/contact/", "/articles/", "/privacy/"].map((path) => ({
    url: absoluteUrl(path),
    ...(path === "/about/" ? { lastModified: "2026-10-09" } : {})
  }));
  const servicePages = services.map((service) => ({
    url: absoluteUrl(servicePath(service.slug))
  }));
  const articlePages = articles.map((article) => ({ url: absoluteUrl(articlePath(article.slug)), lastModified: articlePublishedDate }));
  return [...staticPages, ...servicePages, ...articlePages].filter((entry) => entry.url.startsWith(site.baseUrl));
}

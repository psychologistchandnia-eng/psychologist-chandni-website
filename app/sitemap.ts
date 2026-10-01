import type { MetadataRoute } from "next";
import { services, servicePath } from "@/lib/services";
import { site, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about/", "/faq/", "/contact/"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7
  }));
  const servicePages = services.map((service) => ({
    url: absoluteUrl(servicePath(service.slug)),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));
  return [...staticPages, ...servicePages].filter((entry) => entry.url.startsWith(site.baseUrl));
}

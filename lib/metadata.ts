import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: { path: string; width: number; height: number; alt: string };
  publishedTime?: string;
  openGraphType?: "website" | "article";
};

/** Keep each route's search, social, and canonical metadata in sync. */
export function pageMetadata({ title, description, path, image: preview, publishedTime, openGraphType = "website" }: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(site.practitioner) ? title : title + " | " + site.practitioner;
  const image = absoluteUrl(preview?.path ?? site.portrait);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: openGraphType,
      ...(openGraphType === "article" && publishedTime ? { publishedTime } : {}),
      locale: "en_IN",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: image, width: preview?.width ?? 899, height: preview?.height ?? 1599, alt: preview?.alt ?? "Psychologist Chandni Akhenia" }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}

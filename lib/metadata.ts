import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
};

/** Keep each route's search, social, and canonical metadata in sync. */
export function pageMetadata({ title, description, path, openGraphType = "website" }: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title + " | Chandni Akhenia";
  const image = absoluteUrl(site.portrait);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: openGraphType,
      locale: "en_IN",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: image, width: 414, height: 414, alt: "Psychologist Chandni Akhenia" }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}

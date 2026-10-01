import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services, serviceBySlug, servicePath } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) return {};
  const title = service.title + " Therapy in Malad West, Mumbai";
  return {
    title,
    description: "Learn about " + service.title.toLowerCase() + " support in Malad West, Mumbai with Psychologist Chandni Akhenia. Read about common concerns, counselling and first visits.",
    alternates: { canonical: absoluteUrl(servicePath(service.slug)) },
    openGraph: {
      type: "article",
      title: title + " | Chandni Akhenia",
      description: "Patient-friendly information about " + service.title.toLowerCase() + " support in Malad West, Mumbai.",
      url: absoluteUrl(servicePath(service.slug))
    }
  };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}

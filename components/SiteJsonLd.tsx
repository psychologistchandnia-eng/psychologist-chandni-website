import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export default function SiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": site.baseUrl + "/#chandni",
        "name": site.practitioner,
        "jobTitle": site.title,
        "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "Master's degree", "name": site.credential },
        "image": site.baseUrl + site.portrait,
        "url": site.baseUrl + "/about/",
        "sameAs": [site.googleMapsPlace, site.instagram, site.linkedIn, site.profileLinks.practo, site.profileLinks.youtube].filter(Boolean)
      },
      {
        "@type": "ProfessionalService",
        "@id": site.baseUrl + "/#practice",
        "name": site.name,
        "url": site.baseUrl,
        "image": site.baseUrl + site.portrait,
        "telephone": site.phone,
        "email": site.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": site.streetAddress,
          "addressLocality": site.locality,
          "addressRegion": site.region,
          "postalCode": site.postalCode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": site.latitude,
          "longitude": site.longitude
        },
        "openingHoursSpecification": site.hours.map((hour) => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": hour.days.map((day) => "https://schema.org/" + day),
          "opens": hour.open,
          "closes": hour.close
        })),
        "areaServed": site.areasServed.map((name) => ({ "@type": "Place", "name": name })),
        "knowsAbout": "Psychology",
        "employee": { "@id": site.baseUrl + "/#chandni" },
        "sameAs": [site.googleMapsPlace, site.instagram, site.linkedIn, site.profileLinks.practo, site.profileLinks.youtube].filter(Boolean)
      }
    ]
  };
  return <JsonLd data={schema} />;
}

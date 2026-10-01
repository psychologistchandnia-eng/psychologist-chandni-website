import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";
import { appointmentHoursText, absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact and Directions | Psychologist in Malad West, Mumbai",
  description: "Contact Psychologist Chandni Akhenia by WhatsApp, phone or email. Find the clinic at Sun Multispeciality Hospital in Malad West, Mumbai, and view current hours.",
  path: "/contact/"
});

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Psychologist Chandni Akhenia",
    "url": absoluteUrl("/contact/"),
    "mainEntity": { "@id": site.baseUrl + "/#practice" }
  };
  return (
    <main id="main" className="inner-page">
      <JsonLd data={schema} />
      <section className="page-intro">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact and directions", href: "/contact/" }]} />
          <div className="page-title-block">
            <p className="eyebrow">Appointments · Malad West, Mumbai</p>
            <h1>Make room for a <em>first conversation.</em></h1>
            <p className="lead">Contact Chandni to request an in-person or online psychology consultation.</p>
            <div className="button-row">
              <a className="button button-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
              <a className="button button-light" href={"tel:" + site.phone}>Call now</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section contact-details-section">
        <div className="shell contact-details-grid">
          <Reveal className="contact-info-card">
            <p className="eyebrow">Get in touch</p>
            <h2>Appointments by prior booking.</h2>
            <div className="contact-detail"><span className="detail-label">Phone and WhatsApp</span><a href={"tel:" + site.phone}>{site.phoneDisplay}</a><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp ↗</a></div>
            <div className="contact-detail"><span className="detail-label">Email</span><a href={"mailto:" + site.email}>{site.email}</a></div>
            <div className="contact-detail"><span className="detail-label">Clinic address</span><address>{site.address}</address></div>
            <div className="contact-detail"><span className="detail-label">Current listed hours</span><p>{appointmentHoursText}</p></div>
            <a className="text-link" href={site.googleBusiness} target="_blank" rel="noopener noreferrer">Open directions on Google Maps ↗</a>
          </Reveal>
          <Reveal className="contact-map-card">
            <MapEmbed />
            <p>Sun Multispeciality Hospital · Malad West, Mumbai</p>
          </Reveal>
        </div>
      </section>
      <section className="section contact-last">
        <div className="shell contact-last-inner">
          <div>
            <p className="eyebrow">What happens next</p>
            <h2>We’ll start with what you need.</h2>
            <p>Tell Chandni whether you are looking for an in-person visit or online consultation and what you would like to discuss.</p>
          </div>
          <Link className="button button-primary" href="/faq/">Read appointment FAQs</Link>
        </div>
      </section>
    </main>
  );
}

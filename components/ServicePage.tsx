import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LineIcon, { iconFor } from "@/components/LineIcon";
import Reveal from "@/components/Reveal";
import { faqPageSchema, serviceBySlug, servicePath, type Service } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

export default function ServicePage({ service }: { service: Service }) {
  const path = servicePath(service.slug);
  const condition = { "@type": "MedicalCondition", "name": service.condition };
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": service.title + " in Malad West, Mumbai",
    "url": absoluteUrl(path),
    "about": condition,
    "isPartOf": { "@type": "WebSite", "name": site.name, "url": site.baseUrl },
    "author": { "@type": "Person", "name": site.practitioner, "jobTitle": site.title }
  };

  return (
    <main id="main" className="inner-page service-page">
      <JsonLd data={pageSchema} />
      <JsonLd data={faqPageSchema(service)} />
      <section className="page-intro">
        <div className="shell">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: service.title, href: path }
          ]} />
          <div className="service-heading">
            <p className="eyebrow">Psychology · Malad West, Mumbai</p>
            <h1>{service.title} <span>in Malad West, Mumbai</span></h1>
            <p className="lead">{service.intro}</p>
            <div className="button-row">
              <a className="button button-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
              <a className="button button-light" href={"tel:" + site.phone}>Call now</a>
            </div>
          </div>
        </div>
      </section>

      <div className="shell article-layout">
        <article className="service-article">
          <Reveal>
            <section className="article-section" aria-labelledby="signs">
              <p className="eyebrow">Understanding the concern</p>
              <h2 id="signs">Common signs and experiences</h2>
              <p>People experience this concern in different ways. A few signs may be familiar, or your experience may not match a list neatly. These examples are not a test and cannot diagnose a condition.</p>
              <ul className="check-list">{service.signs.map((sign) => <li key={sign}>{sign}</li>)}</ul>
              <p>What matters is the effect on your life and whether you would like support in understanding it. You are welcome to describe the concern in your own words rather than using clinical terms.</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="article-section" aria-labelledby="when-to-see">
              <p className="eyebrow">Getting support</p>
              <h2 id="when-to-see">When to see a psychologist</h2>
              {service.when.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p>Seeking support is a personal choice. A first conversation can help clarify the concern, your priorities and whether this service is the right next step. If a different professional or a medical assessment would be more suitable, that can be discussed openly.</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="article-section" aria-labelledby="treatment">
              <p className="eyebrow">A collaborative process</p>
              <h2 id="treatment">How counselling and follow-up work</h2>
              {service.care.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p>Psychotherapy is a conversation-based process shaped around your concerns and goals. Sessions can include reflection, counselling, practice between visits and follow-up discussions. The approach is reviewed with you; no cure or specific result is promised.</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="article-section soft-panel" aria-labelledby="first-visit">
              <p className="eyebrow">Your first visit</p>
              <h2 id="first-visit">What happens at the first consultation?</h2>
              <p>The first meeting is a chance to share what has brought you in and what you would like help with. You can talk about when the concern began, how it affects daily life and what you have already tried. There is no requirement to tell your whole story in one sitting.</p>
              <p>Chandni will ask questions to understand your goals and relevant context, explain how sessions are organised, and invite your questions. Privacy and its legal or safety-related limits are discussed. You can then decide together whether to continue, consider a different approach or seek another professional’s input.</p>
              <p>You do not need a referral or special preparation. Notes, reports or a list of questions are optional if they help you feel ready.</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="article-section" aria-labelledby="online">
              <p className="eyebrow">Flexible appointments</p>
              <h2 id="online">Online consultation option</h2>
              <p>Online appointments are available by prior booking. They can be useful when travel is difficult or when you prefer to speak from a familiar setting. The psychologist will discuss whether online care fits your concern and goals.</p>
              <p>Please join from a private place with a reliable connection. If an urgent in-person assessment or emergency response is needed, an online appointment is not a substitute; appropriate local support should be contacted promptly.</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="article-section faq-section" aria-labelledby="service-faq">
              <p className="eyebrow">Clear answers</p>
              <h2 id="service-faq">Frequently asked questions</h2>
              <div className="faq-list">{service.faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}</div>
            </section>
          </Reveal>

          <Reveal>
            <section className="care-note" aria-label="Urgent mental health support">
              <h2>Need urgent support?</h2>
              <p>This website is not an emergency service. If you or someone else is in immediate danger, call local emergency services. In India, the Government’s Tele-MANAS helpline is available at <a href="tel:14416">14416</a>.</p>
            </section>
          </Reveal>
        </article>

        <aside className="service-aside">
          <div className="practitioner-card">
            <span className="aside-monogram" aria-hidden="true">ca</span>
            <p className="eyebrow">About Chandni Akhenia</p>
            <h2>Psychologist in Malad West</h2>
            <p>M.A. in Clinical Psychology · 6 years of experience. Chandni’s approach is collaborative and may draw on CBT, DBT-informed strategies and expressive techniques when appropriate.</p>
            <a className="button button-primary button-full" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book a consultation</a>
          </div>
          <div className="related-card">
            <p className="eyebrow">Keep exploring</p>
            <h2>Related support</h2>
            {service.related.map((slug, index) => {
              const related = serviceBySlug.get(slug);
              if (!related) return null;
              return <Link className="related-link" href={servicePath(slug)} key={slug}><LineIcon name={iconFor(index)} /><span>{related.title}</span><span aria-hidden="true">↗</span></Link>;
            })}
          </div>
        </aside>
      </div>
    </main>
  );
}

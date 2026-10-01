import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Chandni Akhenia, Psychologist in Malad West",
  description: "Learn about Chandni Akhenia, her M.A. in Clinical Psychology, six years of experience and collaborative approach to care in Malad West, Mumbai.",
  alternates: { canonical: absoluteUrl("/about/") }
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Chandni Akhenia",
    "url": absoluteUrl("/about/"),
    "mainEntity": { "@type": "Person", "name": site.practitioner, "jobTitle": site.title, "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "Master's degree", "name": site.credential }, "image": absoluteUrl(site.portrait) }
  };
  return (
    <main id="main" className="inner-page">
      <JsonLd data={schema} />
      <section className="page-intro">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Chandni", href: "/about/" }]} />
          <div className="page-title-block">
            <p className="eyebrow">A little about the practice</p>
            <h1>Care shaped around <em>your story.</em></h1>
            <p className="lead">Meet Chandni Akhenia, a psychologist offering psychological support in Malad West, Mumbai and online.</p>
          </div>
        </div>
      </section>
      <section className="section about-detail-section">
        <div className="shell about-detail-grid">
          <Reveal className="about-detail-photo">
            <Image src={site.portrait} alt="Chandni Akhenia, psychologist" width={414} height={414} sizes="(max-width: 760px) 86vw, 450px" />
          </Reveal>
          <Reveal className="about-detail-copy">
            <p className="eyebrow">Psychologist · Malad West</p>
            <h2>Chandni Akhenia</h2>
            <p>Chandni holds an M.A. in Clinical Psychology and has six years of experience. She works with individuals and couples who want to understand what they are experiencing, develop healthier coping skills and build more fulfilling relationships.</p>
            <p>Her approach is collaborative and client-centred. The existing practice information describes work informed by CBT and DBT, alongside creative and expressive techniques when appropriate. Sessions begin with the concerns and goals that matter to each person.</p>
            <p>Chandni also works with workplace wellness themes, including stress, emotional wellbeing, communication and boundaries. Details of language availability and programme formats are being confirmed for this page.</p>
            <div className="credential-list">
              <div><span className="credential-mark">01</span><span><strong>Education</strong><small>M.A. in Clinical Psychology</small></span></div>
              <div><span className="credential-mark">02</span><span><strong>Experience</strong><small>6 years</small></span></div>
              <div><span className="credential-mark">03</span><span><strong>Approach</strong><small>Collaborative, client-centred care</small></span></div>
              <div><span className="credential-mark">04</span><span><strong>Languages</strong><small>Details to be confirmed</small></span></div>
            </div>
            <Link className="button button-primary" href="/contact/">Book a consultation</Link>
          </Reveal>
        </div>
      </section>
      <section className="section approach-section">
        <div className="shell approach-grid">
          <Reveal>
            <p className="eyebrow">How I work</p>
            <h2>Warmth and clarity, held together.</h2>
          </Reveal>
          <Reveal>
            <p>Therapy is a shared process. It can include listening, asking questions, noticing patterns, practising new ways to cope and checking whether the work still fits. You can ask questions and take part in decisions throughout.</p>
            <p>There is no need to arrive with a perfect explanation. If another kind of assessment or support is a better fit, that can be discussed. No single approach works the same way for everyone.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

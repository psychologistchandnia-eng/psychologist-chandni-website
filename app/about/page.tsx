import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Chandni Akhenia, Psychologist in Malad West",
  description: "Learn about Chandni Akhenia, her M.A. in Clinical Psychology, three years of experience and collaborative approach to care in Malad West, Mumbai.",
  path: "/about/"
});

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
          <div className="about-intro-grid">
          <div className="page-title-block">
            <p className="eyebrow">Meet Chandni</p>
            <h1>Care shaped around <em>your story.</em></h1>
            <p className="lead">I’m Chandni Akhenia, a psychologist in Malad West, Mumbai. I offer a space to talk openly, understand your experiences and explore what matters to you—in person or online.</p>
          </div>
            <Image className="about-intro-portrait" src={site.portrait} alt="Chandni Akhenia seated at her clinic desk" width={770} height={1024} sizes="(max-width: 760px) 86vw, 320px" />
          </div>
        </div>
      </section>
      <section className="section about-detail-section">
        <div className="shell about-detail-grid">
          <Reveal className="about-detail-photo">
            <Image src="/images/chandni-akhenia-about.jpeg" alt="Portrait of psychologist Chandni Akhenia wearing glasses" width={899} height={1599} sizes="(max-width: 760px) 86vw, 450px" />
          </Reveal>
          <Reveal className="about-detail-copy">
            <p className="eyebrow">Psychologist · Malad West</p>
            <h2>Chandni Akhenia</h2>
            <p>I hold an M.A. in Clinical Psychology and have three years of experience. I work with individuals and couples navigating anxiety, stress, low mood, relationship difficulties and changes in life. You do not need to know exactly what is wrong before reaching out.</p>
            <p>My approach starts with listening to your story, without reducing you to a label. Together, we explore the patterns you want to understand and the changes you would like to make. Your needs, goals and pace guide our conversations.</p>
            <p>Alongside individual and couples counselling, my work includes workplace wellbeing, with a focus on stress, communication and boundaries. In-person consultations take place at Sun Multispeciality Hospital in Malad West; online appointments are also available.</p>
            <div className="credential-list">
              <div><span className="credential-mark">01</span><span><strong>Education</strong><small>M.A. in Clinical Psychology</small></span></div>
              <div><span className="credential-mark">02</span><span><strong>Experience</strong><small>3 years</small></span></div>
              <div><span className="credential-mark">03</span><span><strong>Approach</strong><small>Collaborative, client-centred care</small></span></div>
              <div><span className="credential-mark">04</span><span><strong>Appointments</strong><small>Malad West, Mumbai & online</small></span></div>
            </div>
            <Link className="button button-primary" href="/contact/">Book a consultation</Link>
          </Reveal>
        </div>
      </section>
      <section className="section approach-section">
        <div className="shell approach-grid">
          <Reveal>
            <p className="eyebrow">How I work</p>
            <h2>A conversation we shape together.</h2>
          </Reveal>
          <Reveal>
            <p>In our first conversation, we make room for what brings you here, how it affects everyday life and what you hope to get from counselling. You can ask questions, share at your own pace and discuss the next steps with me.</p>
            <p>When suitable, I draw on cognitive behavioural approaches, DBT-informed skills and creative or expressive techniques. We may explore connections between thoughts, feelings and actions, practise coping skills and review what feels useful. If another form of assessment or care is needed, we can discuss that together.</p>
          </Reveal>
        </div>
      </section>
      <section className="section training-section" id="internships-training">
        <div className="shell training-grid">
          <Reveal className="training-art">
            <Image src="/images/chandni-akhenia-internships.jpeg" alt="Chandni Akhenia smiling in a striped shirt" width={903} height={1600} sizes="(max-width: 760px) 88vw, 420px" />
          </Reveal>
          <Reveal className="training-copy">
            <p className="eyebrow">Internships & certification</p>
            <h2>Internships and certification are available.</h2>
            <p>Interested in learning more about psychology? Internship and certification opportunities are available. Contact me to discuss eligibility, programme content, duration and certification details.</p>
            <div className="training-facts">
              <div><span className="credential-mark">01</span><span><strong>Academic qualification</strong><small>M.A. in Clinical Psychology</small></span></div>
              <div><span className="credential-mark">02</span><span><strong>Professional experience</strong><small>3 years</small></span></div>
              <div><span className="credential-mark">03</span><span><strong>Internships & certification</strong><small>Available. Enquire about eligibility, programme details and certification.</small></span></div>
            </div>
            <a className="button button-primary" href="https://wa.me/917718805593?text=Hi%20Chandni%2C%20I%27d%20like%20to%20enquire%20about%20internships%20and%20certification.">Enquire on WhatsApp</a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

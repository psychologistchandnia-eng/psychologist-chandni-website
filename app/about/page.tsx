import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
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
    <main id="main" className="about-editorial">
      <JsonLd data={schema} />
      <section className="about-opening">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Chandni", href: "/about/" }]} />
          <div className="about-opening-grid">
            <div>
              <p className="eyebrow">About Chandni Akhenia · Psychologist</p>
              <h1>A space to feel heard.<br /><em>A place to begin.</em></h1>
              <p className="about-opening-lead">I’m Chandni, a psychologist in Malad West, Mumbai. I work with people who want to understand their emotions, navigate relationships and find ways through life’s difficult moments.</p>
              <Link className="button button-primary" href="/contact/">Let’s start a conversation</Link>
            </div>
            <figure className="about-photo"><Image src={site.portrait} alt="Chandni Akhenia seated at her clinic desk" width={770} height={1024} sizes="(max-width: 760px) 86vw, 340px" priority /><figcaption>Chandni Akhenia · Malad West, Mumbai</figcaption></figure>
          </div>
          <dl className="about-profile-strip"><div><dt>Qualification</dt><dd>M.A. in Clinical Psychology</dd></div><div><dt>Experience</dt><dd>3 years of practice</dd></div><div><dt>Consultations</dt><dd>In person &amp; online</dd></div></dl>
        </div>
      </section>
      <section className="section">
        <div className="shell about-story-grid">
          <figure className="about-photo"><Image src="/images/chandni-akhenia-about.jpeg" alt="Portrait of Chandni Akhenia wearing glasses" width={899} height={1599} sizes="(max-width: 760px) 86vw, 320px" /></figure>
          <div className="about-story"><p className="eyebrow">The person behind the practice</p><h2>Hello, I’m Chandni.</h2>
            <p>Reaching out for support can feel like a big step. You may have a clear concern, or simply a feeling that something has become difficult to manage. You are welcome to begin with either.</p>
            <p>I hold an M.A. in Clinical Psychology and have three years of experience. My work with individuals and couples includes anxiety, stress, low mood, relationship concerns, grief and self-esteem.</p>
            <p>In our conversations, I aim to understand your experiences in the context of your life. We explore what matters to you, the patterns you notice and the changes you would like to work towards. Your questions and preferences are part of that process.</p>
            <p>I also work with workplace wellbeing themes, including communication, emotional wellbeing and boundaries. In-person appointments take place at Sun Multispeciality Hospital in Malad West, with online consultations available by prior booking.</p>
          </div>
        </div>
      </section>
      <section className="section about-care-section"><div className="shell"><p className="eyebrow">My approach to care</p><h2>We make room for your experience.</h2><div className="about-care-grid">
        <article><span>01</span><h3>Listen and understand</h3><p>We begin with what brings you here, how it affects your day and what you hope to get from counselling. You can share at a pace that feels manageable.</p></article>
        <article><span>02</span><h3>Explore together</h3><p>When appropriate, I draw on cognitive behavioural approaches, DBT-informed skills and expressive techniques to explore thoughts, feelings and actions.</p></article>
        <article><span>03</span><h3>Review the next step</h3><p>We discuss practical coping skills and review what feels useful. If another form of assessment or care is needed, we can talk through that together.</p></article>
      </div><Link className="about-text-link" href="/faq/">Read what to expect from a consultation →</Link></div></section>
      <section className="section" id="internships-training"><div className="shell about-learning-grid"><div><p className="eyebrow">Internships &amp; certification</p><h2>Make room for learning.</h2><p>Internship and certification opportunities are available. If you are interested in developing your understanding of psychology, get in touch to discuss the programme.</p><ul className="about-learning-list"><li>Eligibility and how to apply</li><li>Programme content and duration</li><li>Certification details</li></ul><a className="button button-primary" href="https://wa.me/917718805593?text=Hi%20Chandni%2C%20I%27d%20like%20to%20enquire%20about%20internships%20and%20certification.">Enquire about internships</a></div><figure className="about-photo"><Image src="/images/chandni-akhenia-internships.jpeg" alt="Chandni Akhenia smiling in a striped shirt" width={903} height={1600} sizes="(max-width: 760px) 86vw, 300px" /></figure></div></section>
    </main>
  );
}

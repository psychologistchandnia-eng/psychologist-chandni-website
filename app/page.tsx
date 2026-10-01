import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LineIcon, { iconFor } from "@/components/LineIcon";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";
import SiteJsonLd from "@/components/SiteJsonLd";
import { services, servicePath } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psychologist in Malad West, Mumbai",
  description: "Meet Psychologist Chandni Akhenia in Malad West, Mumbai. Explore counselling for anxiety, relationships, stress, grief and emotional wellbeing, in person or online.",
  alternates: { canonical: absoluteUrl("/") }
};

const reviews = [
  "“Full of empathy, kindness and positivity.”",
  "“A safe space where I felt comfortable opening up at my own pace.”",
  "“Extremely non-judgmental.”"
];

export default function HomePage() {
  return (
    <main id="main">
      <SiteJsonLd />
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-rule" />Psychological support · Malad West, Mumbai</p>
            <h1>A quieter place to <em>understand what you’re carrying.</em></h1>
            <p className="hero-lead">I’m Chandni Akhenia, a psychologist offering a warm, collaborative space for emotional wellbeing, relationships and personal growth.</p>
            <div className="button-row">
              <a className="button button-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book on WhatsApp <span aria-hidden="true">↗</span></a>
              <a className="button button-outline" href={"tel:" + site.phone}>Call now <span aria-hidden="true">↗</span></a>
            </div>
            <div className="trust-row" aria-label="Practice information">
              <div><strong>{site.experienceYears} years</strong><span>of experience</span></div>
              <div><strong>M.A.</strong><span>Clinical Psychology</span></div>
              <a href={site.googleBusiness} target="_blank" rel="noopener noreferrer" aria-label="4.9 out of 5 from 42 Google reviews">
                <strong><span className="gold-star" aria-hidden="true">★</span> {site.googleRating}/5</strong><span>{site.googleReviewCount} Google reviews</span>
              </a>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-backdrop" aria-hidden="true" />
            <div className="portrait-frame">
              <Image
                src={site.portrait}
                alt="Chandni Akhenia, psychologist in Malad West, Mumbai"
                width={414}
                height={414}
                sizes="(max-width: 760px) 82vw, (max-width: 1100px) 42vw, 440px"
                priority
              />
            </div>
            <div className="portrait-caption"><span className="caption-dot" />A considered space, at your pace</div>
          </div>
        </div>
        <div className="shell hero-bottom-note">
          <span>In-person in Malad West</span><span className="note-separator">·</span><span>Online appointments</span><span className="note-separator">·</span><span>By prior booking</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="shell intro-strip-grid">
          <p className="eyebrow">A thoughtful first step</p>
          <p>Therapy does not ask you to have everything figured out. We can begin with what feels present today and make room for the questions that matter to you.</p>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <Reveal className="section-heading">
            <p className="eyebrow">Areas of support</p>
            <h2>Care that starts with your experience.</h2>
            <p>Explore common concerns and learn what a psychology consultation may involve. Every person’s needs are different.</p>
          </Reveal>
          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal key={service.slug} className="service-card-wrap">
                <Link className="service-card" href={servicePath(service.slug)}>
                  <LineIcon name={iconFor(index)} />
                  <span className="service-card-title">{service.title}</span>
                  <span className="service-card-arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="shell about-preview-grid">
          <Reveal className="about-preview-image">
            <Image
              src={site.portrait}
              alt="Portrait of Chandni Akhenia"
              width={414}
              height={414}
              sizes="(max-width: 760px) 86vw, 400px"
            />
            <span className="image-note">Chandni Akhenia · Psychologist</span>
          </Reveal>
          <Reveal className="about-preview-copy">
            <p className="eyebrow">Meet Chandni</p>
            <h2>Curiosity, care and room to be human.</h2>
            <p>Chandni Akhenia holds an M.A. in Clinical Psychology and has six years of experience. Her approach is collaborative and client-centred, drawing on CBT, DBT-informed strategies and expressive techniques when appropriate.</p>
            <p>Sessions make space to understand patterns, develop practical coping skills and build more fulfilling relationships—at a pace that respects your needs.</p>
            <Link className="text-link" href="/about/">More about Chandni <span aria-hidden="true">↗</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="section first-visit-section" id="first-visit">
        <div className="shell">
          <Reveal className="section-heading center-heading">
            <p className="eyebrow">Your first visit</p>
            <h2>Three gentle steps.</h2>
            <p>Clear expectations can make it easier to begin.</p>
          </Reveal>
          <div className="steps-grid">
            {[
              { number: "01", title: "Get in touch", text: "Send a WhatsApp message or call to ask for an appointment. Choose an in-person or online conversation." },
              { number: "02", title: "Share what’s on your mind", text: "Talk about what has changed, what matters to you and what you would like help understanding." },
              { number: "03", title: "Agree on a next step", text: "Ask questions, discuss suitable support and decide together whether you would like to continue." }
            ].map((step) => (
              <Reveal key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="center-cta"><Link className="button button-primary" href="/contact/">Plan a first visit</Link></div>
        </div>
      </section>

      <section className="section review-section">
        <div className="shell review-layout">
          <Reveal className="review-intro">
            <p className="eyebrow">Patient reviews</p>
            <h2>Words shared on Google.</h2>
            <p>The rating and short excerpts below are from Chandni’s public Google Business Profile. Reviewers’ names are omitted here.</p>
            <div className="rating-lockup"><strong>4.9</strong><span><span className="stars" aria-label="4.9 out of 5 stars">★★★★★</span><small>from {site.googleReviewCount} Google reviews</small></span></div>
            <a className="text-link" href={site.googleBusiness} target="_blank" rel="noopener noreferrer">Read Google reviews <span aria-hidden="true">↗</span></a>
          </Reveal>
          <div className="review-cards">
            {reviews.map((review, index) => (
              <Reveal className="review-card" key={review}>
                <span className="review-quote-mark" aria-hidden="true">“</span>
                <p>{review.replace(/[“”]/g, "")}</p>
                <div className="review-source"><span className="stars" aria-hidden="true">★★★★★</span><span>Google review {index + 1}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="shell location-grid">
          <Reveal className="location-copy">
            <p className="eyebrow">The practice</p>
            <h2>A familiar place to begin.</h2>
            <p>In-person consultations are at Sun Multispeciality Hospital in Malad West. Online appointments are also available by prior booking.</p>
            <address>{site.address}</address>
            <p className="hours-summary"><strong>Current listed hours</strong><br />{site.hours.map((hour) => hour.label).join(" · ")}</p>
            <a className="text-link" href={site.googleBusiness} target="_blank" rel="noopener noreferrer">Open directions on Google Maps <span aria-hidden="true">↗</span></a>
          </Reveal>
          <Reveal className="location-map"><MapEmbed /></Reveal>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="shell">
          <div className="final-cta">
            <div>
              <p className="eyebrow">When you’re ready</p>
              <h2>Start with a conversation.</h2>
              <p>Ask about an in-person appointment in Malad West or an online consultation.</p>
            </div>
            <a className="button button-light" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book on WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
          <p className="crisis-note">This website is not an emergency service. For immediate support in India, call local emergency services or Tele-MANAS at <a href="tel:14416">14416</a>.</p>
        </div>
      </section>
    </main>
  );
}

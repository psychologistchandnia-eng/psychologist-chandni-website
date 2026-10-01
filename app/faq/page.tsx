import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions | Psychologist in Malad West",
  description: "Answers about therapy, confidentiality, online appointments, first visits, teenagers and booking with Psychologist Chandni Akhenia in Malad West, Mumbai.",
  path: "/faq/"
});

const questions = [
  ["Is my consultation confidential?", "Privacy matters. Confidentiality and its legal or safety-related limits are explained before care begins. Information is handled with care and shared only as permitted or required."],
  ["Do I need a referral?", "No referral is needed to request an appointment. You can get in touch directly and describe what you would like help understanding."],
  ["How long does therapy usually take?", "There is no fixed timeline. The length and frequency of sessions depend on your goals, concerns and how the work is progressing."],
  ["Do you see teenagers?", "Yes, adolescent concerns can be discussed. Consent, caregiver involvement, privacy and safety are clarified before sessions begin."],
  ["Is online consultation possible?", "Yes. Online appointments are available by prior booking, subject to suitability and a private, reliable setting."],
  ["What should I bring to my first appointment?", "Nothing is required. You may bring notes, relevant reports or questions if they help you feel prepared."],
  ["What happens during the first consultation?", "You can describe what has brought you in, discuss your goals and ask questions. Together you can consider suitable next steps."],
  ["How do I book an appointment?", "Use the WhatsApp or call buttons on this site. Appointments are arranged by prior booking."],
  ["Can I consult for relationship problems?", "Yes. Individuals and couples can discuss communication, conflict, trust, boundaries and other relationship concerns."],
  ["Can I consult for workplace stress or burnout?", "Yes. Counselling can explore stress, work pressures, emotional exhaustion, boundaries and practical coping strategies."],
  ["Can family members participate in therapy?", "Family participation can be discussed with consent, a clear purpose and agreed privacy expectations."],
  ["Where are in-person appointments held?", "At Sun Multispeciality Hospital, BJ Patel Road, near SNDT College and Liberty Garden, Malad West, Mumbai 400067. See the Contact page for directions."],
  ["What are the clinic hours?", "The Google Business Profile currently lists Monday to Saturday, 11:00 am–9:00 pm, and Sunday, 11:00 am–3:00 pm."],
  ["What does a consultation cost?", "Fees are not published on this website. Ask about current fees when requesting an appointment."],
  ["What if I need urgent help?", "This practice is not an emergency service. If there is immediate danger, contact local emergency services. In India, Tele-MANAS is available at 14416."]
];

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(([question, answer]) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer }
    }))
  };
  return (
    <main id="main" className="inner-page">
      <JsonLd data={schema} />
      <section className="page-intro">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Frequently asked questions", href: "/faq/" }]} />
          <div className="page-title-block">
            <p className="eyebrow">Questions, answered simply</p>
            <h1>Frequently asked <em>questions.</em></h1>
            <p className="lead">Clear information about sessions with Psychologist Chandni Akhenia in Malad West and online.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell faq-page-layout">
          <div className="faq-page-list">{questions.map(([question, answer], index) => (
            <Reveal className="faq-page-item" key={question}>
              <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
              <details className="faq-item">
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            </Reveal>
          ))}</div>
          <aside className="faq-aside">
            <p className="eyebrow">Still deciding?</p>
            <h2>A first conversation can start with one question.</h2>
            <p>Ask about a consultation or learn more about the process before you book.</p>
            <a className="button button-primary button-full" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

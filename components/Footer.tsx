import Link from "next/link";
import { appointmentHoursText, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">ca</span>
            <span className="brand-copy"><strong>Chandni Akhenia</strong><small>Psychologist · Mumbai</small></span>
          </Link>
          <p>A thoughtful, collaborative space for psychological support in Malad West and online.</p>
          <a className="footer-map-link" href={site.googleBusiness} target="_blank" rel="noopener noreferrer">Open Google Business Profile ↗</a>
        </div>
        <div className="footer-contact">
          <h2>Visit and contact</h2>
          <address>{site.address}</address>
          <p><strong>Hours</strong><br />{appointmentHoursText}</p>
          <p><a href={"tel:" + site.phone}>{site.phoneDisplay}</a><br /><a href={"mailto:" + site.email}>{site.email}</a></p>
        </div>
        <div className="footer-nav">
          <h2>Explore</h2>
          <Link href="/about/">About Chandni</Link>
          <Link href="/#services">Areas of support</Link>
          <Link href="/articles/">Articles and practical guides</Link>
          <Link href="/faq/">Frequently asked questions</Link>
          <Link href="/contact/">Contact and directions</Link>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Psychologist Chandni Akhenia</p>
        <Link href="/privacy/">Website privacy</Link>
      </div>
    </footer>
  );
}

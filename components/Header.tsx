"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/about/", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/articles/", label: "Articles" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Chandni Akhenia, home">
          <span className="brand-mark" aria-hidden="true">ca</span>
          <span className="brand-copy">
            <strong>Chandni Akhenia</strong>
            <small>Psychologist · Mumbai</small>
          </span>
        </Link>
        <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Close" : "Open"} navigation menu</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav id="primary-navigation" className={"primary-nav" + (open ? " is-open" : "")} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link className="nav-booking" href="/contact/" onClick={() => setOpen(false)}>Book a consultation</Link>
        </nav>
      </div>
    </header>
  );
}

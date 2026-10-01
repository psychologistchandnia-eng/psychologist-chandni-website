import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="inner-page">
      <section className="page-intro">
        <div className="shell page-title-block">
          <p className="eyebrow">Page not found</p>
          <h1>This page has <em>moved.</em></h1>
          <p className="lead">The address may be incorrect. Browse the areas of support or return to the homepage.</p>
          <div className="button-row"><Link className="button button-primary" href="/#services">Explore services</Link><Link className="button button-outline" href="/">Home</Link></div>
        </div>
      </section>
    </main>
  );
}

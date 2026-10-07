"use client";
import { useState } from "react";
import { site } from "@/lib/site";

export default function MapEmbed({ compact = false }: { compact?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={"map-frame" + (compact ? " map-frame-compact" : "")}>
      {loaded ? <iframe
        title="Map to Chandni Akhenia at Sun Multispeciality Hospital, Malad West"
        src={site.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer"
        allowFullScreen
      /> : <div className="map-placeholder"><span className="map-pin" aria-hidden="true">⌖</span><h3>Visit in Malad West</h3><p>Sun Multispeciality Hospital<br />BJ Patel Road, near SNDT College</p><button className="button button-primary" onClick={() => setLoaded(true)}>Load interactive map</button><small>Loads Google Maps. Google’s privacy policy applies.</small><a className="text-link" href={site.googleBusiness} target="_blank" rel="noopener noreferrer">Open directions ↗</a></div>}
    </div>
  );
}

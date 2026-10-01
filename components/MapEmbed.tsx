import { site } from "@/lib/site";

export default function MapEmbed({ compact = false }: { compact?: boolean }) {
  return (
    <div className={"map-frame" + (compact ? " map-frame-compact" : "")}>
      <iframe
        title="Map to Chandni Akhenia at Sun Multispeciality Hospital, Malad West"
        src={site.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

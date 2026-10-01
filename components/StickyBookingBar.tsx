import { site } from "@/lib/site";

export default function StickyBookingBar() {
  return (
    <div className="mobile-booking" aria-label="Quick contact">
      <a className="mobile-booking-whatsapp" href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a className="mobile-booking-call" href={"tel:" + site.phone}>Call</a>
    </div>
  );
}

import { CLINIC_INFO } from "@/data/clinic-info";

export function FloatingCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a href={CLINIC_INFO.phoneHref} className="mobile-sticky-btn is-call">
        Appeler Cabinet
      </a>
      <a
        href={CLINIC_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-sticky-btn is-whatsapp"
      >
        RDV WhatsApp
      </a>
    </div>
  );
}

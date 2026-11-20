import { CtaButton } from "@/components/ui/CtaButton";

interface BookVisitCtaSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function BookVisitCtaSection({
  badge = "Réserver votre créneau",
  title = "Planifier votre visite",
  description = "Choisissez un horaire adapté via notre formulaire en ligne ou contactez directement notre secrétariat par téléphone ou WhatsApp.",
  ctaLabel = "Prendre rendez-vous",
  ctaHref = "/contact-acces-kenitra",
}: BookVisitCtaSectionProps) {
  return (
    <section
      className="section book-visit-section"
      aria-labelledby="book-visit-title"
    >
      <div className="container">
        <div className="book-visit-card">
          <div className="book-visit-content">
            <div className="book-visit-pill">
              <span>{badge}</span>
            </div>

            <h2 id="book-visit-title" className="book-visit-heading">
              {title}
            </h2>

            <p className="book-visit-description">{description}</p>

            <div className="book-visit-actions">
              <CtaButton label={ctaLabel} href={ctaHref} />
            </div>
          </div>

          <div className="book-visit-stage" aria-hidden="true">
            <img
              src="/assets/mimosa-book-visit-illustration.svg"
              alt=""
              loading="lazy"
              className="book-visit-svg-illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

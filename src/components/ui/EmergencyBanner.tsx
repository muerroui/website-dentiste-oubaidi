import Link from "next/link";

interface EmergencyBannerProps {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const FEATURES = [
  "Anesthésie progressive douce pour des soins indolores",
  "Chaîne de stérilisation Classe B et matériaux certifiés CE",
  "Devis dentaire écrit remis avant toute intervention",
];

export function EmergencyBanner({
  title = "Soins dentaires doux et précis à Kénitra",
  ctaLabel = "Demander un RDV",
  ctaHref = "/contact-acces-kenitra#form-section",
}: EmergencyBannerProps) {
  return (
    <section className="section light-subtle">
      <div className="container">
        <div className="call-to-action-radial">
          <div className="cta-2nd-content">
            <div className="cta-2nd-about">
              <h2 className="heading is-large">{title}</h2>
              <Link href={ctaHref} className="large-link-block w-inline-block">
                <div className="large-link-text">{ctaLabel}</div>
                <img
                  loading="lazy"
                  src="/assets/caliora/69d91148a58b88b54b0d9a1f_arrow-dark-5.svg"
                  alt=""
                  className="large-link-icon"
                />
                <div className="large-link-line"></div>
              </Link>
            </div>
            <div className="cta-2nd-images">
              <img
                loading="lazy"
                src="/assets/caliora/69e0bb755d17e5ccd1940839_after-2.avif"
                alt="Patient satisfait"
                className="cta-2nd-image"
              />
              <img
                loading="lazy"
                src="/assets/caliora/69e0bb758c7c8a3ff522b4e9_after-1.avif"
                alt="Patient satisfait"
                className="cta-2nd-image is-2nd"
              />
              <img
                loading="lazy"
                src="/assets/caliora/69e0bb80a5a4f33bc8262728_after-3.avif"
                alt="Patient satisfait"
                className="cta-2nd-image is-3rd"
              />
            </div>
            <div className="cta-2nd-features">
              <div className="cta-2nd-features-wrap w-dyn-list">
                <div role="list" className="cta-2nd-features-list w-dyn-items">
                  {FEATURES.map((feat) => (
                    <div key={feat} role="listitem" className="w-dyn-item">
                      <div className="list-item">
                        <div className="list-item-icon">
                          <img
                            src="/assets/caliora/69e2004be3b2d87c7730a82c_76de53169fdcee8455774c02f7d2b550_checkmark.svg"
                            loading="lazy"
                            alt=""
                            className="list-label-icon"
                          />
                        </div>
                        <div className="list-text">{feat}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

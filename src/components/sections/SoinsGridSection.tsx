import Link from "next/link";
import { SOINS_DATA } from "@/data/soins";
import { SoinCard } from "@/components/ui/SoinCard";

export function SoinsGridSection() {
  return (
    <section id="explore" className="section no-paddings">
      <div className="condition-wrap w-dyn-list">
        <div role="list" className="condition-listing w-dyn-items">
          {SOINS_DATA.map((soin) => (
            <SoinCard key={soin.slug} soin={soin} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SoinsCompactSection({ excludeSlug }: { excludeSlug?: string } = {}) {
  const items = excludeSlug
    ? SOINS_DATA.filter((s) => s.slug !== excludeSlug)
    : SOINS_DATA;

  return (
    <section className="section dark-subtle">
      <div className="container tab-is-fullwidth">
        <div className="primary-content-block w-variant-adbe5150-d616-cdde-dc48-8577423528b3">
          <div className="primary-content-title">
            <h2 className="heading is-large">
              {excludeSlug
                ? "Nos autres pôles d’expertise à Kénitra"
                : "Nos pôles d’expertise à Kénitra"}
            </h2>
          </div>
          <div className="spacing"></div>
        </div>
        <div className="condition-compact-wrap w-dyn-list">
          <div role="list" className="condition-compact-list w-dyn-items">
            {items.map((soin) => (
              <div
                key={soin.slug}
                role="listitem"
                className="condition-compact-item w-dyn-item"
              >
                <div className="condition-compact-image">
                  <div className="condition-compact-gradient"></div>
                  <div className="condition-compact-overlay"></div>
                  <div className="parallax-wrap">
                    <img
                      src={soin.cardImage}
                      loading="lazy"
                      alt={soin.title}
                      className="parallax-image"
                    />
                  </div>
                </div>
                <div className="condition-compact-content">
                  <h2 className="heading is-small">{soin.title}</h2>
                  <div className="related-treatments w-dyn-list">
                    <div role="list" className="related-treatments-list w-dyn-items">
                      {soin.relatedLinks.map((link) => (
                        <div
                          key={`${soin.slug}-compact-${link.label}`}
                          role="listitem"
                          className="related-treatment-item w-dyn-item"
                        >
                          <Link
                            aria-label={link.label}
                            href={link.href}
                            className="related-treatment-link is-dark w-inline-block"
                          >
                            <img
                              src={link.icon}
                              loading="lazy"
                              alt={link.label}
                              className="related-treatment-icon"
                            />
                            <p className="paragraph in-list">{link.label}</p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

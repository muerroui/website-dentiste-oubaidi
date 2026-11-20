import Link from "next/link";
import type { SoinData } from "@/data/soins";
import { ARTICLES_DATA } from "@/data/articles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HeroSplit } from "@/components/sections/HeroSection";
import { BookVisitCtaSection } from "@/components/sections/BookVisitCtaSection";
import { SoinsCompactSection } from "@/components/sections/SoinsGridSection";
import { CalioraFaqList } from "@/components/ui/FaqAccordion";
import { CtaButton } from "@/components/ui/CtaButton";

interface SoinTemplateProps {
  soin: SoinData;
}

export function SoinTemplate({ soin }: SoinTemplateProps) {
  const relatedArticles = ARTICLES_DATA.filter((a) =>
    soin.relatedArticleSlugs.includes(a.slug)
  );

  return (
    <div className="page-wrapper">
      <Navbar variant="dark-hero" />
      <main className="main">
        <HeroSplit
          badgeLeft="Mimosa Smile"
          badgeRight={soin.title}
          title={soin.shortTitle}
          summary={soin.heroSummary}
          images={soin.heroImages}
        />

        <section id="details" className="section">
          <div className="container">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Spécialités", href: "/tarifs-mutuelles" },
                { label: soin.title },
              ]}
            />
            <div className="split-content-wrap">
              <div className="split-content-block is-sticky">
                <div className="sidebar-block with-details">
                  {soin.sidebarDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className={`sidebar-detail${
                        detail.featured ? " is-featured" : ""
                      }`}
                    >
                      <div className="sibebar-label">
                        <img
                          src={detail.icon}
                          loading="lazy"
                          alt=""
                          className="sibebar-icon"
                        />
                        <div className="label-text">{detail.label}</div>
                      </div>
                      {detail.featured ? (
                        <Link
                          href={`/soins/${soin.slug}`}
                          aria-current="page"
                          className="label-text-link w-inline-block w--current"
                        >
                          <p className="paragraph">{detail.value}</p>
                        </Link>
                      ) : (
                        <p className="paragraph">{detail.value}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Carte tarifaire & devis associée (pont direct vers /tarifs-mutuelles) */}
                <div className="soin-associated-card">
                  <div className="soin-associated-header">
                    <span className="label-text">{soin.associatedCard.tag}</span>
                    <h3 className="heading is-small">
                      {soin.associatedCard.title}
                    </h3>
                  </div>
                  <p className="paragraph is-small">
                    {soin.associatedCard.description}
                  </p>
                  <div className="soin-associated-metrics">
                    {soin.associatedCard.metrics.map((m) => (
                      <div key={m.label} className="soin-associated-metric">
                        <span className="label-text with-opacity">
                          {m.label}
                        </span>
                        <strong className="paragraph is-small">{m.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="soin-associated-action">
                    <CtaButton
                      label={soin.associatedCard.ctaLabel}
                      href={soin.associatedCard.ctaHref}
                    />
                  </div>
                </div>
              </div>

              <div className="split-content-block">
                <h2 className="heading is-large">{soin.contentTitle}</h2>
                <div className="spacing"></div>
                <div className="w-richtext">
                  <p>
                    <strong>{soin.leadParagraph}</strong>
                  </p>
                  <p>{soin.introParagraph}</p>

                  <h3>{soin.section1Title}</h3>
                  <ul>
                    {soin.bulletGroup1.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {/* Protocole clinique structuré en 3 étapes numérotées */}
                  <div className="soin-protocol-block">
                    <h3>{soin.clinicalStepsTitle}</h3>
                    <div className="soin-steps-grid">
                      {soin.clinicalSteps.map((step) => (
                        <div key={step.number} className="soin-step-card">
                          <span className="soin-step-number" aria-hidden="true">
                            {step.number}
                          </span>
                          <div className="soin-step-body">
                            <h4 className="heading is-xsmall">{step.title}</h4>
                            <p className="paragraph is-small">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3>{soin.section2Title}</h3>
                  {soin.middleParagraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <ul>
                    {soin.bulletGroup2.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p>{soin.closingParagraph}</p>

                  {/* Maillage interne Hub & Spoke vers les articles de blog liés */}
                  {relatedArticles.length > 0 && (
                    <div className="soin-related-articles">
                      <span className="label-text">
                        Pour approfondir avant votre consultation
                      </span>
                      <h3>
                        {relatedArticles.length > 1
                          ? "Guides cliniques associés à ce soin"
                          : "Guide clinique associé à ce soin"}
                      </h3>
                      <div className="soin-related-articles-list">
                        {relatedArticles.map((art) => (
                          <Link
                            key={art.slug}
                            href={`/blog/${art.slug}`}
                            className="soin-related-article-card"
                          >
                            <div className="soin-related-article-meta">
                              <span className="label-text">{art.category}</span>
                              <span className="label-text with-opacity">
                                Lecture {art.readingTime}
                              </span>
                            </div>
                            <h4 className="heading is-xsmall">{art.title}</h4>
                            <p className="paragraph is-small">{art.excerpt}</p>
                            <span className="soin-related-article-cta">
                              Lire le guide complet <span aria-hidden="true">↗</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section light-strong">
          <div className="container is-narrow">
            <div
              className="primary-content-block w-variant-adbe5150-d616-cdde-dc48-8577423528b3"
              style={{ marginBottom: "2.5rem" }}
            >
              <h2 className="heading is-medium">
                Questions fréquentes — {soin.title}
              </h2>
            </div>
            <CalioraFaqList items={soin.faq} />
          </div>
        </section>

        <SoinsCompactSection excludeSlug={soin.slug} />
        <BookVisitCtaSection />
        <Footer />
      </main>
      <FloatingCTA />
    </div>
  );
}

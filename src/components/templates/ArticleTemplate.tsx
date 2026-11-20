import Link from "next/link";
import { ARTICLES_DATA, type ArticleData } from "@/data/articles";
import { CLINIC_INFO } from "@/data/clinic-info";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CtaButton } from "@/components/ui/CtaButton";
import { ArticleParallaxShapes } from "@/components/ui/ArticleParallaxShapes";
import { ArticleSidebarForm } from "@/components/ui/ArticleSidebarForm";
import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function formatFrenchMonthYear(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat("fr-MA", {
    month: "long",
    year: "numeric",
  }).format(date);
}

interface ArticleTemplateProps {
  article: ArticleData;
}

export function ArticleTemplate({ article }: ArticleTemplateProps) {
  const relatedArticles = ARTICLES_DATA.filter(
    (item) => item.slug !== article.slug
  ).slice(0, 3);

  return (
    <div className="page-wrapper">
      <ReadingProgressBar />
      <Navbar variant="light-hero" />
      <main className="main">
        {/* 1. Hero éditorial avec image de couverture + carte chevauchante + formes parallaxe */}
        <section className="section mimosa-blog-hero">
          <ArticleParallaxShapes />

          <div className="container mimosa-blog-container">
            <div className="mimosa-blog-breadcrumb">
              <Breadcrumb
                items={[
                  { label: "Accueil", href: "/" },
                  { label: "Blog & Conseils", href: "/blog" },
                  { label: article.title },
                ]}
              />
            </div>

            <div className="mimosa-blog-cover-wrap mimosa-hero-enter">
              <img
                src={article.heroImage}
                alt={article.heroAlt}
                className="mimosa-blog-cover-img"
              />
            </div>

            <div className="mimosa-blog-hero-card mimosa-hero-enter is-delayed">
                <div className="mimosa-blog-date-row">
                  <span
                    className="label-text"
                    style={{ textTransform: "capitalize" }}
                  >
                    {formatFrenchMonthYear(article.updatedAt)}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="label-text">{article.readingTime}</span>
                </div>

                <h1 className="heading is-large mimosa-blog-hero-title">
                  {article.title}
                </h1>

                <p className="paragraph is-large mimosa-blog-hero-excerpt">
                  {article.excerpt}
                </p>

                <div className="mimosa-blog-about-row">
                  <Link
                    href="/contact-acces-kenitra"
                    className="mimosa-blog-author-link"
                  >
                    <span className="mimosa-blog-author-avatar" aria-hidden="true">
                      DO
                    </span>
                    <span className="mimosa-blog-author-name">
                      Dr. Oubaidi · Chirurgien-Dentiste
                    </span>
                  </Link>

                  <Link
                    href={article.relatedSoin.href}
                    className="mimosa-blog-category-pill"
                  >
                    {article.category}
                  </Link>
                </div>
              </div>
          </div>
        </section>

        {/* 2. Séparateur fin 1px */}
        <div className="container">
          <div className="mimosa-blog-divider" />
        </div>

        {/* 3. Corps de l'article (gauche) + Formulaire consultation sticky (droite) */}
        <section className="section mimosa-blog-body-section">
          <div className="container">
            <div className="mimosa-blog-split">
              <div className="mimosa-blog-main-col">
                <ScrollReveal>
                  <article className="w-richtext mimosa-blog-richtext">
                    <h2 style={{ marginTop: 0 }}>{article.leadTitle}</h2>

                    {/* Pull-quote en carte avec bordure gauche bronze */}
                    <blockquote className="mimosa-blockquote">
                      {article.leadIntro}
                    </blockquote>

                    {article.sections.map((sec, idx) => (
                      <div key={sec.h2} style={{ marginTop: "2.35rem" }}>
                        <span className="mimosa-section-num">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h2 style={{ marginTop: "0.25rem" }}>{sec.h2}</h2>
                        {sec.paragraphs.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                        {sec.h3s?.map((sub) => (
                          <div key={sub.title} style={{ marginTop: "1.35rem" }}>
                            <h3>{sub.title}</h3>
                            <p>{sub.body}</p>
                          </div>
                        ))}
                        {sec.bullets && (
                          <ul>
                            {sec.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        )}

                        {/* Figure intégrée au milieu de la lecture */}
                        {idx === 0 && article.galleryImages[0] && (
                          <figure className="mimosa-inline-figure">
                            <img
                              src={article.galleryImages[0]}
                              alt={article.heroAlt}
                              loading="lazy"
                            />
                            <figcaption>
                              {article.category} — Cabinet Mimosa Smile, Kénitra
                            </figcaption>
                          </figure>
                        )}
                      </div>
                    ))}
                  </article>
                </ScrollReveal>

                {/* Passerelle discrète vers le soin associé */}
                <ScrollReveal delayMs={40}>
                  <div className="mimosa-related-soin-banner">
                    <div className="mimosa-related-soin-text">
                      <span className="label-text">Soin associé au cabinet</span>
                      <h3 className="heading is-xsmall" style={{ margin: "0.25rem 0 0.35rem" }}>
                        {article.relatedSoin.title}
                      </h3>
                      <p className="paragraph" style={{ margin: 0 }}>
                        {article.relatedSoin.description}
                      </p>
                    </div>
                    <div className="mimosa-related-soin-cta">
                      <CtaButton
                        label={article.relatedSoin.ctaLabel}
                        href={article.relatedSoin.href}
                      />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Carte Auteur (30px sous l'article) */}
                <ScrollReveal delayMs={80}>
                  <div className="mimosa-author-card">
                    <div className="mimosa-author-card-avatar" aria-hidden="true">
                      DO
                    </div>
                    <div className="mimosa-author-card-body">
                      <h2 className="heading is-small" style={{ margin: 0 }}>
                        Dr. Oubaidi
                      </h2>
                      <div className="mimosa-author-card-role">
                        Chirurgien-Dentiste · Mimosa Smile Kénitra
                      </div>
                      <p className="paragraph" style={{ margin: "0.65rem 0 0" }}>
                        Prise en charge douce et précise au Quartier Mimosa à
                        Kénitra : soins conservateurs, prothèse céramique,
                        implantologie 3D et esthétique du sourire.
                      </p>
                      <div className="mimosa-author-card-actions">
                        <a
                          href={CLINIC_INFO.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mimosa-author-icon-btn"
                          aria-label="Contacter sur WhatsApp"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                        </a>
                        <a
                          href={CLINIC_INFO.phoneHref}
                          className="mimosa-author-icon-btn"
                          aria-label="Appeler le cabinet"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Barre latérale droite sticky : carte consultation rapide */}
              <aside className="mimosa-blog-sidebar">
                <div className="mimosa-blog-sidebar-sticky">
                  <ArticleSidebarForm articleTitle={article.title} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 4. Derniers Articles (grille 3 cartes + chorégraphie hover) */}
        {relatedArticles.length > 0 && (
          <section className="section light-subtle mimosa-latest-section">
            <div className="container">
              <div className="mimosa-latest-header">
                <h2 className="heading is-medium" style={{ margin: 0 }}>
                  Derniers Articles
                </h2>
                <CtaButton label="Tous les articles" href="/blog" />
              </div>

              <div className="mimosa-latest-grid">
                {relatedArticles.map((item, idx) => (
                  <ScrollReveal key={item.slug} delayMs={idx * 70}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="mimosa-latest-card"
                    >
                      <div className="mimosa-latest-thumb-wrap">
                        <img
                          src={item.heroImage}
                          alt={item.heroAlt}
                          loading="lazy"
                          className="mimosa-latest-thumb"
                        />
                        <span className="mimosa-latest-cat-badge">
                          {item.category}
                        </span>
                      </div>

                      <div className="mimosa-latest-body">
                        <h3 className="mimosa-latest-title">{item.title}</h3>
                        <p className="mimosa-latest-excerpt">{item.excerpt}</p>
                        <div className="mimosa-latest-card-divider" />
                        <div className="mimosa-latest-footer">
                          <span
                            className="label-text"
                            style={{ textTransform: "capitalize" }}
                          >
                            {formatFrenchMonthYear(item.updatedAt)}
                          </span>
                          <span className="mimosa-read-more">
                            <span>Lire l’article</span>
                            <span
                              className="mimosa-read-more-line"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
      <FloatingCTA />
    </div>
  );
}

import type { Metadata } from "next";
import { ARTICLES_DATA } from "@/data/articles";
import { buildPageMetadata } from "@/data/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HeroPrimary } from "@/components/sections/HeroSection";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { BookVisitCtaSection } from "@/components/sections/BookVisitCtaSection";
import { PageStylesheet } from "@/components/layout/PageStylesheet";

export const metadata: Metadata = buildPageMetadata({
  title: "Conseils Dentiste Kénitra : Guides Santé & Esthétique | Mimosa Smile",
  description:
    "Conseils dentiste Kénitra par le Dr. Oubaidi : guides santé bucco-dentaire et esthétique dentaire (facettes E-max, couronne zircone, implants 3D, aligneurs et gencives).",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <PageStylesheet href="/assets/caliora-page-index.css" />
      <div className="page-wrapper">
        <Navbar variant="dark-hero" />
        <main className="main">
          <HeroPrimary
            title="Conseils & Santé Dentaire"
            description="Conseils dentiste Kénitra rédigés par le Dr. Oubaidi : guides santé bucco-dentaire et esthétique dentaire pour préparer votre visite."
            imageSrc="/assets/caliora/69e3bf2140147d374a8e30b0_dentique-16.avif"
            imageAlt="Guides santé bucco-dentaire et conseils dentiste Kénitra"
            ctaLabel="Prendre rendez-vous"
            ctaHref="/contact-acces-kenitra"
            exploreHref="#articles"
            socialProofLabel="Guides cliniques validés par le Dr. Oubaidi"
            showAvatars={false}
            fiveStars={true}
          />

          <section id="articles" className="section light-strong">
            <div className="container">
              <Breadcrumb
                items={[
                  { label: "Accueil", href: "/" },
                  { label: "Blog & Conseils" },
                ]}
              />
              <h2 className="heading is-large">Nos dossiers d’information dentaire</h2>
              <div className="spacing"></div>
              <div className="blog-index-grid">
                {ARTICLES_DATA.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    variant="featured"
                  />
                ))}
              </div>
            </div>
          </section>

          <BookVisitCtaSection
            badge="Besoin d’un avis clinique ?"
            title="Planifier votre visite"
            description="Une question suite à votre lecture ? Prenez rendez-vous au Quartier Mimosa à Kénitra ou échangez directement avec notre secrétariat."
            ctaLabel="Prendre rendez-vous"
            ctaHref="/contact-acces-kenitra"
          />
          <Footer />
        </main>
        <FloatingCTA />
      </div>
    </>
  );
}

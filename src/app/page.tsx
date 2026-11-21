import Link from "next/link";
import type { Metadata } from "next";
import { CLINIC_INFO } from "@/data/clinic-info";
import { buildPageMetadata } from "@/data/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { HeroPrimary } from "@/components/sections/HeroSection";
import { SoinsGridSection } from "@/components/sections/SoinsGridSection";
import { CircleCtaSection } from "@/components/sections/CircleCtaSection";
import { HumanApproachSection } from "@/components/sections/HumanApproachSection";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { PageStylesheet } from "@/components/layout/PageStylesheet";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Dentiste Kénitra : Clinique Dentaire Mimosa Smile | Dr. Oubaidi",
  description:
    "Cabinet dentaire Quartier Mimosa Kénitra (23 Av. Chakib Arslan). Dr. Oubaidi dentiste Kénitra : soins dentaires sans douleur, urgences jour même, implants 3D et facettes E-max.",
  path: "/",
});

const HOME_FAQS = [
  {
    number: "01",
    question: "Où se situe notre cabinet dentaire Quartier Mimosa Kénitra ?",
    answer:
      "Votre clinique dentaire Kénitra Mimosa Smile (Dr. Oubaidi) est installée au 23 Av. Chakib Arslan, Résidence Khadija Oum Al Mouminine, Bureau 01, Kénitra 14000, tout près de la Gare LGV.",
    linkLabel: "Consulter le plan d’accès détaillé",
    linkHref: "/contact-acces-kenitra",
  },
  {
    number: "02",
    question: "Comment consulter le Dr Oubaidi dentiste Kénitra rapidement ?",
    answer:
      "Pour fixer votre rendez-vous au cabinet dentaire, téléphonez au 05 30 59 48 00, envoyez un message WhatsApp au 06 61 48 20 90 ou complétez la demande en ligne.",
    linkLabel: "Joindre la clinique Mimosa Smile",
    linkHref: "/contact-acces-kenitra",
  },
  {
    number: "03",
    question:
      "Quels traitements réalise votre clinique dentaire Kénitra ?",
    answer:
      "Notre équipe assure détartrage et soins dentaires sans douleur Kénitra, couronnes zircone, facettes E-max, blanchiment médical, implants 3D et gouttières transparentes.",
    linkLabel: "Voir nos spécialités et tarifs clairs",
    linkHref: "/tarifs-mutuelles",
  },
  {
    number: "04",
    question: "Prenez-vous en charge l’urgence dentaire le jour même à Kénitra ?",
    answer:
      "Oui, des créneaux quotidiens permettent d’accueillir sans attente toute urgence dentaire à Kénitra : rage de dent, abcès, fracture dentaire ou couronne décollée.",
    linkLabel: "Découvrir notre accueil urgence du jour",
    linkHref: "/urgence-dentaire-kenitra",
  },
  {
    number: "05",
    question:
      "Fournissez-vous un devis écrit et les feuilles de mutuelle Maroc ?",
    answer:
      "Oui, chaque soin programmé donne lieu à un devis écrit transparent, avec paiement possible par étape clinique et remise de votre dossier mutuelle (CNOPS, CNSS).",
    linkLabel: "Consulter nos tarifs & mutuelles",
    linkHref: "/tarifs-mutuelles",
  },
  {
    number: "06",
    question: "À quelles heures ouvre votre dentiste Kénitra au Quartier Mimosa ?",
    answer:
      "Notre clinique dentaire accueille ses patients du lundi au vendredi de 09h00 à 19h30 ainsi que le samedi matin de 09h00 à 14h30 sur simple appel ou WhatsApp.",
    linkLabel: "Réserver un horaire de visite",
    linkHref: "/contact-acces-kenitra",
  },
];

export default function HomePage() {
  return (
    <>
      <PageStylesheet href="/assets/caliora-page-index.css" />
      <div className="page-wrapper">
        <Navbar variant="dark-hero" />
        <main className="main">
          <HeroPrimary
            title="Votre sourire en confiance"
            description="Clinique dentaire Kénitra du Dr. Oubaidi : soins dentaires sans douleur, prévention douce et esthétique du sourire au Quartier Mimosa."
            imageSrc="/assets/mimosa-hero-kenitra.jpg"
            imageAlt="Clinique dentaire Mimosa Smile Dr. Oubaidi dentiste Kénitra"
            ctaLabel="Prendre rendez-vous"
            ctaHref="/contact-acces-kenitra"
            exploreHref="#explore"
            socialProofLabel="Recommandé au Quartier Mimosa · Kénitra"
          />

          <SoinsGridSection />
          <CircleCtaSection />
          <HumanApproachSection />
          <BeforeAfterSlider />
          <BlogPreviewSection />

          <section className="section home-faq" aria-labelledby="home-faq-title">
            <div className="container">
              <div className="home-faq-layout">
                <div className="home-faq-header">
                  <p className="home-faq-eyebrow">
                    {CLINIC_INFO.brandName} <span aria-hidden="true">·</span>{" "}
                    {CLINIC_INFO.address.city}
                  </p>
                  <h2 id="home-faq-title" className="heading is-large">
                    Questions les plus fréquentes
                  </h2>
                  <p className="paragraph">
                    L’essentiel pour préparer sereinement votre rendez-vous chez
                    le dentiste à Kénitra.
                  </p>
                  <Link
                    className="home-faq-contact"
                    href="/contact-acces-kenitra"
                  >
                    Besoin d’un avis ? Écrivez-nous{" "}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
                <div className="home-faq-list">
                  {HOME_FAQS.map((item, idx) => (
                    <details
                      key={item.number}
                      className="home-faq-item"
                      open={idx === 0}
                    >
                      <summary>
                        <span className="home-faq-number" aria-hidden="true">
                          {item.number}
                        </span>
                        <span className="home-faq-question">
                          {item.question}
                        </span>
                      </summary>
                      <div className="home-faq-answer">
                        <p>{item.answer}</p>
                        <Link href={item.linkHref}>{item.linkLabel}</Link>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <LocationSection variant="home" />
          <Footer />
        </main>
        <FloatingCTA />
      </div>
    </>
  );
}

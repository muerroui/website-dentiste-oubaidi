import type { Metadata } from "next";
import { CLINIC_INFO } from "@/data/clinic-info";
import { buildPageMetadata } from "@/data/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { HeroPrimary } from "@/components/sections/HeroSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { CalioraFaqList } from "@/components/ui/FaqAccordion";
import { AccessRouteWidget } from "@/components/ui/AccessRouteWidget";
import { PageStylesheet } from "@/components/layout/PageStylesheet";

export const metadata: Metadata = buildPageMetadata({
  title: "Prendre Rendez-vous Dentiste Kénitra & Plan Mimosa | Mimosa Smile",
  description:
    "Prendre rendez-vous dentiste Kénitra : adresse cabinet dentaire Mimosa Kénitra (23 Av. Chakib Arslan), dentiste Avenue Chakib Arslan Gare LGV Kénitra et WhatsApp direct.",
  path: "/contact-acces-kenitra",
});

const CONTACT_FAQS = [
  {
    question:
      "Quels actes réalise le Dr. Oubaidi avant de prendre rendez-vous à Kénitra ?",
    answer:
      "Le cabinet regroupe détartrage doux et soins des caries, accueil des urgences dentaires le jour même, implants 3D Cone Beam, couronnes zircone, facettes E-max, blanchiment médical et aligneurs.",
  },
  {
    question: "Que prévoit le premier bilan pour prendre rendez-vous dentiste Kénitra ?",
    answer:
      "Votre visite inclut un examen complet, une radio numérique ciblée si nécessaire et une présentation claire sur écran suivie d’un devis écrit avant tout soin programmé.",
  },
  {
    question: "Puis-je obtenir un créneau d’urgence le jour même au cabinet ?",
    answer:
      "Oui, des horaires quotidiens permettent de soulager rapidement rage de dent, abcès, dent cassée ou couronne descellée. Appelez le 05 30 59 48 00 ou écrivez par WhatsApp.",
  },
  {
    question: "Où trouver l’adresse cabinet dentaire Mimosa Kénitra près de la Gare LGV ?",
    answer:
      "Notre clinique dentaire Avenue Chakib Arslan Gare LGV Kénitra est au 23 Av. Chakib Arslan, Résidence Khadija Oum Al Mouminine, Bureau 01, Kénitra 14000, avec stationnement devant l’entrée.",
  },
];

export default function ContactAccesPage() {
  return (
    <>
      <PageStylesheet href="/assets/caliora-page-contact.css" />
      <div className="page-wrapper">
        <Navbar variant="dark-hero" />
        <main className="main">
          <HeroPrimary
            title="Contact & Accès"
            description={CLINIC_INFO.hours.summary}
            imageSrc="/assets/mimosa-clinic-reception.jpg"
            imageAlt={`Adresse cabinet dentaire Mimosa Kénitra, ${CLINIC_INFO.address.full}`}
            socialProofLabel={`${CLINIC_INFO.address.district} · ${CLINIC_INFO.address.full} · À 4 min de la Gare LGV`}
            showAvatars={false}
            fiveStars={true}
            variantClass="w-variant-eee3793a-dcd9-7c01-b450-dd23dc991336"
          />

          <BookingSection showHours={true} />

          <section className="section no-paddings">
            <div className="map-section is-with-embed">
              <div className="map-content">
                <h2 className="heading is-large">
                  Venir au cabinet à Kénitra
                </h2>
                <AccessRouteWidget />
                <div className="map-action">
                  <a
                    href={CLINIC_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="large-link-block w-inline-block"
                  >
                    <div className="large-link-text">Ouvrir sur Google Maps</div>
                    <img
                      loading="lazy"
                      src="/assets/caliora/69d91148a58b88b54b0d9a1f_arrow-dark-5.svg"
                      alt=""
                      className="large-link-icon"
                    />
                    <div className="large-link-line"></div>
                  </a>
                </div>
              </div>
              <div className="container map-embed-wrap">
                <iframe
                  className="caliora-map-frame"
                  title="Carte Google Maps du Cabinet Dentaire Mimosa Smile Dr. Oubaidi à Kénitra"
                  src={CLINIC_INFO.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <img
                loading="lazy"
                src="/assets/caliora/69d91148a58b88b54b0d9c10_c870240ec4e17eaffbb204b160df727c_bg-mesh-gradient.avif"
                alt=""
                className="map-background"
              />
              <div className="map-overlay"></div>
            </div>
          </section>

          <section className="section light-strong">
            <div className="container is-narrow">
              <div
                className="primary-content-block w-variant-adbe5150-d616-cdde-dc48-8577423528b3"
                style={{ marginBottom: "2.5rem" }}
              >
                <h2 className="heading is-medium">Vos questions d’accès</h2>
              </div>
              <CalioraFaqList items={CONTACT_FAQS} />
            </div>
          </section>

          <Footer />
        </main>
        <FloatingCTA />
      </div>
    </>
  );
}

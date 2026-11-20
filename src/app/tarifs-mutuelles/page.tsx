import type { Metadata } from "next";
import { buildPageMetadata } from "@/data/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { HeroPrimary } from "@/components/sections/HeroSection";
import {
  TarifsTableSection,
  TarifsTreatmentsGridSection,
} from "@/components/sections/TarifsSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { PageStylesheet } from "@/components/layout/PageStylesheet";

export const metadata: Metadata = buildPageMetadata({
  title: "Tarif Dentiste Kénitra, Devis Écrit & Mutuelle CNOPS CNSS | Mimosa Smile",
  description:
    "Tarif dentiste Kénitra clair au cabinet Mimosa Smile (Dr. Oubaidi) : devis dentaire écrit avant soin, dossier remboursement dentaire CNOPS CNSS mutuelle Maroc.",
  path: "/tarifs-mutuelles",
});

export default function TarifsMutuellesPage() {
  return (
    <>
      <PageStylesheet href="/assets/caliora-page-treatments.css" />
      <div className="page-wrapper">
        <Navbar variant="dark-hero" />
        <main className="main">
          <HeroPrimary
            title="Tarifs Clairs & Mutuelles"
            description="Tout soin débute par une explication visuelle puis un devis dentaire écrit avant soin, avec dossier complet pour mutuelle."
            imageSrc="/assets/caliora/69e3bf2140147d374a8e30b0_dentique-16.avif"
            imageAlt="Tarif dentiste Kénitra et devis dentaire Mimosa Smile"
            ctaLabel="Voir le barème des soins"
            ctaHref="#tableau-honoraires"
            socialProofLabel="Devis écrit remis avant chaque intervention"
            showAvatars={false}
            fiveStars={true}
            variantClass="w-variant-f85cf866-3f35-3295-b07d-cead9cf31d65"
          />
          <TarifsTreatmentsGridSection />
          <TarifsTableSection />
          <BookingSection />
          <LocationSection variant="row" />
          <Footer />
        </main>
        <FloatingCTA />
      </div>
    </>
  );
}

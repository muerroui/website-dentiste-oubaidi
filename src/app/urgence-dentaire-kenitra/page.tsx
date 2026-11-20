import type { Metadata } from "next";
import { CLINIC_INFO } from "@/data/clinic-info";
import { buildPageMetadata } from "@/data/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { CalioraFaqList } from "@/components/ui/FaqAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { UrgenceHeroLiveVisual } from "@/components/ui/UrgenceHeroLiveVisual";
import { UrgenceTriageInteractive } from "@/components/ui/UrgenceTriageInteractive";
import { PageStylesheet } from "@/components/layout/PageStylesheet";

export const metadata: Metadata = buildPageMetadata({
  title: "Urgence Dentaire Kénitra : Dentiste Urgence Jour Même | Mimosa Smile",
  description:
    "Urgence dentaire Kénitra : rage de dent, abcès ou dent cassée Kénitra ? Le Dr. Oubaidi propose un rendez-vous dentiste urgence jour même Kénitra. Appelez le 05 37 36 48 20.",
  path: "/urgence-dentaire-kenitra",
});

const URGENCE_CASES = [
  {
    title: "Rage de dents aiguë",
    desc: "Douleur lancinante, pulsatile ou réveillant la nuit, sensibilité extrême au chaud/froid.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Abcès & gonflement",
    desc: "Joue ou gencive enflée, boule douloureuse ou sensation de pression.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Dent cassée ou expulsée",
    desc: "Choc, chute ou fracture dentaire nécessitant une prise en charge rapide.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9.5 9l5 5" />
      </svg>
    ),
  },
  {
    title: "Saignement persistant",
    desc: "Saignement gingival abondant ou suite opératoire difficile à calmer.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: "Couronne ou plombage tombé",
    desc: "Prothèse descellée, facette décollée ou obturation perdue laissant la dent sensible.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Douleur après extraction",
    desc: "Douleur persistante ou alvéolite quelques jours après une extraction dentaire.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const URGENCE_STEPS = [
  {
    num: "01",
    title: "Contact rapide",
    desc: "Appelez le secrétariat ou envoyez une photo sur WhatsApp pour évaluer votre douleur immédiatement.",
  },
  {
    num: "02",
    title: "Soulagement & radio sur place",
    desc: "Accueil prioritaire au cabinet, anesthésie douce et cliché numérique ciblé pour poser un diagnostic sûr.",
  },
  {
    num: "03",
    title: "Soin d’urgence immédiat",
    desc: "Traitement apaisant le jour même (drainage, pansement, rescellement) et plan de suivi transparent.",
  },
];

const FIRST_AID_ITEMS = [
  {
    question: "Dent expulsée : comment la conserver avant d’arriver ?",
    answer:
      "Prenez la dent uniquement par la couronne (jamais par la racine), ne la nettoyez pas et conservez-la dans du lait UHT, du sérum physiologique ou votre salive, puis venez immédiatement.",
  },
  {
    question: "Joue ou gencive gonflée : froid ou chaud ?",
    answer:
      "Appliquez du froid (poche de glace enveloppée dans un linge) sur l’extérieur de la joue pendant 10 minutes. N’appliquez jamais de chaleur, cela accélère l’infection.",
  },
  {
    question: "Douleur aiguë : que faut-il absolument éviter ?",
    answer:
      "Ne placez jamais d’aspirine ou de clou de girofle pur directement sur la gencive (risque de brûlure chimique). Évitez de mâcher du côté douloureux et gardez la tête légèrement surélevée.",
  },
  {
    question: "Couronne ou bridge tombé : que faire ?",
    answer:
      "Conservez la couronne propre dans une petite boîte. N’utilisez jamais de colle forte ou ménagère : le Dr. Oubaidi la rescellera proprement après contrôle de la dent.",
  },
];

const URGENCE_FAQS = [
  {
    question: "Prenez-vous sans rendez-vous pour une urgence dentaire à Kénitra ?",
    answer:
      "Des créneaux d’urgence sont réservés chaque jour au cabinet. Appelez le 05 37 36 48 20 ou écrivez sur WhatsApp avant de vous déplacer pour passer en priorité sans attente inutile.",
  },
  {
    question: "Quel est le coût d’une consultation d’urgence ?",
    answer:
      "La consultation avec examen clinique et radio ciblée est expliquée clairement dès votre arrivée. Tout acte complémentaire fait l’objet d’un devis transparent avant réalisation (facture fournie pour CNOPS / CNSS / assurances).",
  },
  {
    question: "Acceptez-vous les enfants en urgence dentaire ?",
    answer:
      "Oui, nous recevons adultes et enfants pour rage de dent, choc ou dent cassée avec une prise en charge douce et rassurante.",
  },
];

export default function UrgenceDentairePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        name: `${CLINIC_INFO.brandName} — ${CLINIC_INFO.doctorName}`,
        url: `${CLINIC_INFO.siteUrl}/urgence-dentaire-kenitra`,
        telephone: CLINIC_INFO.phoneHref.replace("tel:", ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: "23 Av. Chakib Arslan, Résidence Khadija Oum Al Mouminine, Bureau 01",
          addressLocality: "Kénitra",
          postalCode: "14000",
          addressCountry: "MA",
        },
        openingHours: ["Mo-Fr 09:00-19:30", "Sa 09:00-14:30"],
      },
      {
        "@type": "FAQPage",
        mainEntity: URGENCE_FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <PageStylesheet href="/assets/caliora-page-contact.css" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-wrapper">
        <Navbar variant="light-hero" />
        <main className="main">
          {/* 1. Hero compact d'action immédiate (< 5 sec) */}
          <section className="section urg-hero">
            <div className="container">
              <div className="urg-hero-grid">
                <div className="urg-hero-main mimosa-hero-enter">
                  <div className="urg-badge-pill">
                    <span className="urg-badge-dot" aria-hidden="true" />
                    <span>Urgence · Jour même</span>
                  </div>

                  <h1 className="heading is-large urg-hero-title">
                    Urgence Dentaire à Kénitra — Prise en charge rapide
                  </h1>

                  <p className="paragraph is-large urg-hero-desc">
                    Créneaux réservés chaque jour pour soulager rapidement rage
                    de dents, abcès ou dent cassée au Quartier Mimosa.
                  </p>

                  <div className="urg-hero-actions">
                    <a
                      href={CLINIC_INFO.phoneHref}
                      className="urg-btn-primary"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>Appeler : {CLINIC_INFO.phoneDisplay}</span>
                    </a>

                    <a
                      href={CLINIC_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="urg-btn-secondary"
                    >
                      <svg
                        width="19"
                        height="19"
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
                      <span>WhatsApp (photo / message)</span>
                    </a>
                  </div>

                  <div className="urg-hero-hours">
                    <span>{CLINIC_INFO.hours.weekdays}</span>
                    <span className="urg-hero-hours-sep" aria-hidden="true">
                      ·
                    </span>
                    <span>{CLINIC_INFO.hours.saturday}</span>
                  </div>
                </div>

                <UrgenceHeroLiveVisual />
              </div>
            </div>
          </section>

          {/* Ruban d'information continu en mouvement */}
          <div className="urg-marquee-strip" aria-hidden="true">
            <div className="urg-marquee-track">
              <span>Urgence dentaire Kénitra · Accueil le jour même</span>
              <span>·</span>
              <span>Anesthésie douce &amp; sans douleur</span>
              <span>·</span>
              <span>Radio numérique sur place</span>
              <span>·</span>
              <span>À 4 min de la Gare LGV Al Boraq</span>
              <span>·</span>
              <span>Parking devant l’entrée · Quartier Mimosa</span>
              <span>·</span>
              <span>Urgence dentaire Kénitra · Accueil le jour même</span>
              <span>·</span>
              <span>Anesthésie douce &amp; sans douleur</span>
              <span>·</span>
              <span>Radio numérique sur place</span>
              <span>·</span>
              <span>À 4 min de la Gare LGV Al Boraq</span>
              <span>·</span>
              <span>Parking devant l’entrée · Quartier Mimosa</span>
            </div>
          </div>

          {/* 2. Triage visuel interactif 2x3 des motifs pris en charge + Note sécurité médicale */}
          <section className="section light-subtle">
            <div className="container">
              <div className="urg-section-head">
                <div className="label-text">Triage interactif</div>
                <h2 className="heading is-medium" style={{ margin: "0.35rem 0 0.5rem" }}>
                  Sélectionnez votre symptôme
                </h2>
                <p className="paragraph" style={{ margin: 0, maxWidth: "40rem" }}>
                  Touchez le motif correspondant pour voir le premier réflexe et
                  contacter directement le secrétariat.
                </p>
              </div>

              <UrgenceTriageInteractive />

              <div className="urg-safety-note" role="note">
                <div className="urg-safety-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <p className="paragraph" style={{ margin: 0, fontSize: "0.92rem" }}>
                  <strong>Sécurité médicale :</strong> en cas de fièvre élevée (&gt;
                  38,5 °C), de gonflement gênant la respiration ou la déglutition,
                  ou de traumatisme facial important, rendez-vous directement aux{" "}
                  <strong>urgences hospitalières</strong> (SAMU <strong>141</strong> /
                  Protection Civile <strong>15</strong>).
                </p>
              </div>
            </div>
          </section>

          {/* 3. Bandeau "Comment ça se passe ?" (3 étapes rassurantes) */}
          <section className="section">
            <div className="container">
              <div className="urg-section-head">
                <div className="label-text">Parcours patient</div>
                <h2 className="heading is-medium" style={{ margin: "0.35rem 0 0" }}>
                  Comment se passe votre prise en charge ?
                </h2>
              </div>

              <div className="urg-steps-grid">
                {URGENCE_STEPS.map((step, idx) => (
                  <ScrollReveal key={step.num} delayMs={idx * 90}>
                    <div className="urg-step-card">
                      <div className="urg-step-top">
                        <span className="urg-step-num">{step.num}</span>
                        <span className="urg-step-line" aria-hidden="true" />
                      </div>
                      <h3 className="heading is-xsmall" style={{ margin: "0.75rem 0 0.4rem" }}>
                        {step.title}
                      </h3>
                      <p className="paragraph" style={{ margin: 0, fontSize: "0.94rem" }}>
                        {step.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Accordéon unique : Questions fréquentes & Premiers gestes */}
          <section className="section light-subtle">
            <div className="container is-narrow">
              <div
                className="primary-content-block w-variant-adbe5150-d616-cdde-dc48-8577423528b3"
                style={{ marginBottom: "2.25rem" }}
              >
                <div className="label-text">Informations pratiques</div>
                <h2 className="heading is-medium" style={{ marginTop: "0.35rem" }}>
                  Questions fréquentes &amp; premiers gestes
                </h2>
              </div>
              <CalioraFaqList items={[...URGENCE_FAQS, FIRST_AID_ITEMS[0], FIRST_AID_ITEMS[1]]} />
            </div>
          </section>

          {/* 5. Accès immédiat & Carte Google Maps */}
          <section className="section">
            <div className="container">
              <ScrollReveal>
                <div className="urg-access-card urg-access-split">
                  <div className="urg-access-info">
                    <div className="label-text">Accès immédiat · Kénitra</div>
                    <h2 className="heading is-medium" style={{ margin: "0.35rem 0 0.65rem" }}>
                      Venir au cabinet Mimosa Smile
                    </h2>
                    <p className="paragraph" style={{ margin: "0 0 1rem" }}>
                      {CLINIC_INFO.address.full}
                    </p>
                    <ul className="urg-access-list">
                      <li>À 4 min de la Gare LGV Al Boraq</li>
                      <li>Stationnement devant l’entrée (Av. Chakib Arslan)</li>
                      <li>Bureau 01 en rez-de-chaussée accessible PMR</li>
                    </ul>
                    <div className="urg-access-actions">
                      <a
                        href={CLINIC_INFO.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="urg-btn-secondary"
                      >
                        Ouvrir dans Google Maps ↗
                      </a>
                    </div>
                  </div>

                  <iframe
                    className="caliora-map-frame urg-map-frame"
                    title="Carte Google Maps Urgence Dentaire Mimosa Smile Kénitra"
                    src={CLINIC_INFO.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </ScrollReveal>
            </div>
          </section>

          <Footer />
        </main>
        <FloatingCTA />
      </div>
    </>
  );
}

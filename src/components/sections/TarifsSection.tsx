"use client";

import { useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";

const TREATMENT_CARDS = [
  {
    tag: "Urgence Jour Même",
    title: "Urgence dentaire Kénitra",
    description:
      "Prise en charge rapide pour rage de dent, abcès ou dent cassée avec tarif expliqué dès l’accueil au cabinet.",
    image: "/assets/caliora/69e0c6cccc3d18982bbe1100_dentique-15.avif",
    alt: "Urgence dentaire Kénitra tarifs transparents",
    href: "/urgence-dentaire-kenitra",
    metrics: [
      { label: "Délai", value: "Jour même" },
      { label: "Confort", value: "Anesthésie douce" },
      { label: "Tarif", value: "Annoncé dès J0" },
    ],
  },
  {
    tag: "Implants 3D",
    title: "Implants & Couronne Zircone",
    description:
      "Plan de traitement écrit détaillant scanner Cone Beam 3D, implant dentaire titane CE et couronne zircone fixe.",
    image: "/assets/mimosa-soin-detartrage.jpg",
    alt: "Implant dentaire 3D et couronne zircone Kénitra",
    href: "/soins/implantologie-3d-kenitra",
    metrics: [
      { label: "Imagerie", value: "Cone Beam 3D" },
      { label: "Implant", value: "Titane CE" },
      { label: "Paiement", value: "Échelonné" },
    ],
  },
  {
    tag: "Sourire E-max",
    title: "Facettes & Blanchiment",
    description:
      "Maquette d’essai en bouche et devis détaillé avant collage de facettes E-max ou éclaircissement médical.",
    image: "/assets/mimosa-soin-facettes.jpg",
    alt: "Facettes dentaires E-max Kénitra",
    href: "/soins/facettes-esthetique-kenitra",
    metrics: [
      { label: "Céramique", value: "E-max fine" },
      { label: "Aperçu", value: "Essai mock-up" },
      { label: "Visites", value: "2 à 3 séances" },
    ],
  },
  {
    tag: "Orthodontie 3D",
    title: "Gouttières & Aligneurs",
    description:
      "Aligneurs transparents amovibles et suivi orthodontique sur empreinte optique numérique sans pâte.",
    image: "/assets/mimosa-spec-orthodontie.jpg",
    alt: "Aligneurs invisibles et gouttières Kénitra",
    href: "/soins/orthodontie-aligneurs-kenitra",
    metrics: [
      { label: "Empreinte", value: "Optique 3D" },
      { label: "Patients", value: "Adulte & Ado" },
      { label: "Modalité", value: "Semestrielle" },
    ],
  },
];

type FeeCategory = "tous" | "bilan" | "prothese" | "esthetique" | "orthodontie";

const FEE_FILTERS: { id: FeeCategory; label: string }[] = [
  { id: "tous", label: "Tous les soins" },
  { id: "bilan", label: "Bilan & Détartrage" },
  { id: "prothese", label: "Implants & Zircone" },
  { id: "esthetique", label: "Facettes & Éclat" },
  { id: "orthodontie", label: "Aligneurs 3D" },
];

const FEE_ROWS: {
  category: Exclude<FeeCategory, "tous">;
  act: string;
  protocol: string;
  modality: string;
}[] = [
  {
    category: "bilan",
    act: "Consultation & Bilan Dentaire",
    protocol:
      "Examen complet des dents et gencives, radio numérique et compte rendu sur écran.",
    modality: "Remise d’un devis dentaire écrit avant soin.",
  },
  {
    category: "bilan",
    act: "Détartrage & Soin des Gencives",
    protocol:
      "Détartrage dentaire sans douleur à eau tiède, polissage et prévention gingivale.",
    modality: "Feuille de remboursement dentaire CNOPS CNSS remise.",
  },
  {
    category: "prothese",
    act: "Implant Titane & Couronne Zircone",
    protocol:
      "Étude Cone Beam 3D, pose de l’implant titane CE et couronne zircone définitive.",
    modality: "Forfait écrit clair réglé en étapes cliniques.",
  },
  {
    category: "prothese",
    act: "Couronne Zircone / Inlay Céramique",
    protocol:
      "Empreinte optique 3D sans pâte et prothèse céramique usinée sur mesure.",
    modality: "Tarif dentiste Kénitra validé avant préparation.",
  },
  {
    category: "esthetique",
    act: "Facettes Dentaires E-max",
    protocol:
      "Étude esthétique, essai en bouche sur maquette puis collage pelliculaire E-max.",
    modality: "Devis forfaitaire selon le nombre de dents traitées.",
  },
  {
    category: "orthodontie",
    act: "Aligneurs Invisibles & Orthodontie",
    protocol:
      "Scan optique 3D, série de gouttières transparentes et contrôles périodiques.",
    modality: "Forfait semestriel adapté à la durée du plan.",
  },
];

export function TarifsTreatmentsGridSection() {
  return (
    <section id="treatments" className="section dark-base">
      <div className="container">
        <div className="treatments-grid-wrap w-dyn-list">
          <div role="list" className="treatments-grid-list is-fullview w-dyn-items">
            {TREATMENT_CARDS.map((card) => (
              <div
                key={card.title}
                role="listitem"
                className="treatment-grid-item is-fullview w-dyn-item"
              >
                <div className="treatment-card">
                  <div className="treatment-card-media">
                    <div className="treatment-card-detail-wrap">
                      {card.metrics.map((m) => (
                        <div key={m.label} className="treatment-card-detail">
                          <div className="label-text with-opacity">{m.label}</div>
                          <div className="label-text">{m.value}</div>
                        </div>
                      ))}
                      <div className="treatment-card-overlay"></div>
                    </div>
                    <div className="treatment-card-tag">
                      <div className="paragraph">{card.tag}</div>
                    </div>
                    <img
                      alt={card.alt}
                      loading="lazy"
                      src={card.image}
                      className="reveal-content-image"
                    />
                  </div>
                  <div className="treatment-card-content">
                    <h2 className="heading is-medium">{card.title}</h2>
                    <div className="treatment-card-about">
                      <p className="paragraph">{card.description}</p>
                    </div>
                    <div className="treatment-card-action">
                      <CtaButton
                        label="Voir le soin"
                        href={card.href}
                        variant="secondary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-mesh-bg">
        <div className="section-mesh-bg-overlay"></div>
        <img
          loading="lazy"
          src="/assets/caliora/69d91148a58b88b54b0d9c10_c870240ec4e17eaffbb204b160df727c_bg-mesh-gradient.avif"
          alt=""
          className="cover-image"
        />
      </div>
    </section>
  );
}

export function TarifsTableSection() {
  const [activeCategory, setActiveCategory] = useState<FeeCategory>("tous");

  const visibleRows =
    activeCategory === "tous"
      ? FEE_ROWS
      : FEE_ROWS.filter((r) => r.category === activeCategory);

  return (
    <section className="section" id="tableau-honoraires">
      <div className="container">
        <div className="primary-content-block">
          <div className="primary-content-title">
            <h2 className="heading is-medium">
              Tarif dentiste Kénitra &amp; modalités de remboursement
            </h2>
          </div>
          <p
            className="paragraph is-large"
            style={{ marginTop: "0.75rem", marginBottom: "2rem" }}
          >
            Sélectionnez une spécialité pour consulter le protocole inclus dans
            votre devis dentaire écrit avant soin. Dossiers de remboursement
            dentaire CNOPS, CNSS et mutuelle Maroc remis systématiquement.
          </p>
        </div>

        <div className="caliora-fee-controls">
          <div
            className="caliora-fee-pills"
            role="group"
            aria-label="Filtrer par catégorie de soin"
          >
            {FEE_FILTERS.map((f) => {
              const active = activeCategory === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  className={`caliora-fee-pill${active ? " active" : ""}`}
                  aria-pressed={active}
                  onClick={() => setActiveCategory(f.id)}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <span id="feeFilterStatus" className="label-text" aria-live="polite">
            {visibleRows.length}{" "}
            {visibleRows.length > 1 ? "actes affichés" : "acte affiché"}
          </span>
        </div>

        <div className="caliora-fee-table-wrap">
          <table className="caliora-fee-table">
            <thead>
              <tr>
                <th>Acte ou Spécialité</th>
                <th>Protocole Clinique Inclus</th>
                <th>Modalités de Devis</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr key={row.act}>
                  <td>
                    <strong>{row.act}</strong>
                  </td>
                  <td>{row.protocol}</td>
                  <td>{row.modality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

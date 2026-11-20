"use client";

import { useState } from "react";
import { CLINIC_INFO } from "@/data/clinic-info";

interface TriageCase {
  id: string;
  title: string;
  desc: string;
  immediateTip: string;
}

const TRIAGE_CASES: TriageCase[] = [
  {
    id: "rage",
    title: "Rage de dents aiguë",
    desc: "Douleur lancinante, pulsatile ou réveillant la nuit, sensibilité au chaud/froid.",
    immediateTip:
      "Évitez le chaud/froid et ne posez jamais d’aspirine sur la gencive. Un pansement calmant ou traitement canalaire soulage rapidement.",
  },
  {
    id: "abces",
    title: "Abcès & gonflement",
    desc: "Joue ou gencive enflée, boule douloureuse ou sensation de pression.",
    immediateTip:
      "Appliquez du froid à l’extérieur de la joue (10 min). Ne percez jamais la gencive et consultez rapidement pour drainer l’infection.",
  },
  {
    id: "cassee",
    title: "Dent cassée ou expulsée",
    desc: "Choc, chute ou fracture dentaire nécessitant une prise en charge rapide.",
    immediateTip:
      "Si la dent est expulsée, tenez-la par la couronne et conservez-la dans du lait ou sérum physiologique sans frotter la racine.",
  },
  {
    id: "saignement",
    title: "Saignement persistant",
    desc: "Saignement gingival abondant ou suite opératoire difficile à calmer.",
    immediateTip:
      "Mordez fermement une compresse stérile propre pendant 15 à 20 minutes sans rincer vigoureusement.",
  },
  {
    id: "couronne",
    title: "Couronne ou plombage tombé",
    desc: "Prothèse descellée, facette décollée ou obturation perdue.",
    immediateTip:
      "Gardez la couronne propre dans une boîte et n’utilisez surtout pas de colle ménagère. Nous la rescellons proprement au cabinet.",
  },
  {
    id: "extraction",
    title: "Douleur après extraction",
    desc: "Douleur persistante ou alvéolite quelques jours après une extraction.",
    immediateTip:
      "Ne fumez pas et ne faites pas de bains de bouche agressifs. Un pansement alvéolaire apaisant calme la douleur dès la pose.",
  },
];

function renderCaseIcon(id: string) {
  switch (id) {
    case "rage":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "abces":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case "cassee":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9.5 9l5 5" />
        </svg>
      );
    case "saignement":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case "couronne":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
}

export function UrgenceTriageInteractive() {
  const [selectedId, setSelectedId] = useState<string>(TRIAGE_CASES[0].id);
  const selected =
    TRIAGE_CASES.find((c) => c.id === selectedId) ?? TRIAGE_CASES[0];

  const waHref = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Bonjour Cabinet Mimosa Smile (Dr. Oubaidi, Kénitra), j'ai une urgence : ${selected.title}. Pouvez-vous me recevoir aujourd'hui ?`
  )}`;

  return (
    <div className="urg-triage-wrap">
      <div className="urg-cases-grid" role="tablist" aria-label="Motifs d'urgence">
        {TRIAGE_CASES.map((item, idx) => {
          const isSelected = item.id === selectedId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`urg-case-card is-interactive${
                isSelected ? " is-selected" : ""
              }`}
              onClick={() => setSelectedId(item.id)}
            >
              <div className="urg-case-icon" aria-hidden="true">
                {renderCaseIcon(item.id)}
              </div>
              <div className="urg-case-body">
                <div className="urg-case-top-row">
                  <span className="urg-case-num">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {isSelected && (
                    <span className="urg-case-active-tag">Sélectionné</span>
                  )}
                </div>
                <h3 className="heading is-xsmall" style={{ margin: "0.2rem 0 0.3rem" }}>
                  {item.title}
                </h3>
                <p className="paragraph" style={{ margin: 0, fontSize: "0.9rem" }}>
                  {item.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Panneau dynamique réagissant au motif sélectionné */}
      <div className="urg-triage-live-box" key={selected.id}>
        <div className="urg-triage-live-info">
          <span className="label-text">Conseil immédiat · {selected.title}</span>
          <p className="paragraph" style={{ margin: "0.35rem 0 0" }}>
            {selected.immediateTip}
          </p>
        </div>
        <div className="urg-triage-live-actions">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="urg-btn-primary"
          >
            WhatsApp : {selected.title} ↗
          </a>
        </div>
      </div>
    </div>
  );
}

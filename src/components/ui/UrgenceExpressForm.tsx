"use client";

import { useState } from "react";
import { CLINIC_INFO } from "@/data/clinic-info";

const URGENCE_MOTIFS = [
  "Rage de dents aiguë",
  "Abcès / gonflement",
  "Dent cassée ou expulsée",
  "Couronne ou plombage tombé",
  "Saignement ou douleur post-extraction",
  "Autre urgence dentaire",
];

const URGENCE_DISPOS = [
  "Au plus vite (aujourd’hui)",
  "Matinée (09h00 – 13h00)",
  "Après-midi (13h00 – 19h30)",
];

export function UrgenceExpressForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [motif, setMotif] = useState(URGENCE_MOTIFS[0]);
  const [dispo, setDispo] = useState(URGENCE_DISPOS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "URGENCE DENTAIRE — Cabinet Mimosa Smile (Dr. Oubaidi, Kénitra)",
      `- Patient : ${name.trim() || "Patient"}`,
      `- Téléphone : ${phone.trim() || "Non précisé"}`,
      `- Motif : ${motif}`,
      `- Disponibilité : ${dispo}`,
    ];
    const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="urg-form-card">
      <div className="urg-form-header">
        <span className="label-text">Ligne occupée ou hors horaires ?</span>
        <h2 className="heading is-small" style={{ margin: "0.3rem 0 0.4rem" }}>
          Demande de rappel express
        </h2>
        <p className="paragraph" style={{ margin: 0 }}>
          Laissez vos coordonnées en 15 secondes pour être rappelé en priorité.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="urg-form">
        <div className="urg-form-field">
          <label htmlFor="urg-name" className="urg-form-label">
            Nom complet
          </label>
          <input
            id="urg-name"
            type="text"
            className="urg-form-input"
            placeholder="Votre nom et prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="urg-form-field">
          <label htmlFor="urg-phone" className="urg-form-label">
            Téléphone
          </label>
          <input
            id="urg-phone"
            type="tel"
            className="urg-form-input"
            placeholder="Ex. 06 61 48 20 90"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="urg-form-field">
          <label htmlFor="urg-motif" className="urg-form-label">
            Motif de l’urgence
          </label>
          <select
            id="urg-motif"
            className="urg-form-input"
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
          >
            {URGENCE_MOTIFS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="urg-form-field">
          <label htmlFor="urg-dispo" className="urg-form-label">
            Disponibilité
          </label>
          <select
            id="urg-dispo"
            className="urg-form-input"
            value={dispo}
            onChange={(e) => setDispo(e.target.value)}
          >
            {URGENCE_DISPOS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="urg-btn-primary is-full">
          Envoyer ma demande sur WhatsApp
        </button>
      </form>
    </div>
  );
}

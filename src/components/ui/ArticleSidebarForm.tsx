"use client";

import { useState } from "react";
import { CLINIC_INFO } from "@/data/clinic-info";

interface ArticleSidebarFormProps {
  articleTitle: string;
}

export function ArticleSidebarForm({ articleTitle }: ArticleSidebarFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Bonjour Cabinet Mimosa Smile (Dr. Oubaidi, Kénitra),",
      `Suite à votre article « ${articleTitle} », je souhaite un rendez-vous :`,
      `- Nom : ${name.trim() || "Patient"}`,
    ];
    if (phone.trim()) lines.push(`- Téléphone : ${phone.trim()}`);
    if (need.trim()) lines.push(`- Besoin : ${need.trim()}`);

    const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mimosa-sidebar-consult-card">
      <div className="mimosa-sidebar-icon-badge" aria-hidden="true">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>

      <h2 className="heading is-small" style={{ margin: 0 }}>
        Demander un avis clinique
      </h2>
      <p className="paragraph mimosa-sidebar-sub">
        Une question suite à cet article ? Écrivez directement au cabinet du Dr.
        Oubaidi à Kénitra.
      </p>

      <form onSubmit={handleSubmit} className="mimosa-sidebar-form">
        <input
          type="text"
          className="mimosa-sidebar-input"
          placeholder="Nom complet"
          aria-label="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          className="mimosa-sidebar-input"
          placeholder="Téléphone (ex. 06 61 ...)"
          aria-label="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          className="mimosa-sidebar-input"
          placeholder="Ex. Couronne zircone, bilan..."
          aria-label="Soin souhaité"
          value={need}
          onChange={(e) => setNeed(e.target.value)}
        />
        <button type="submit" className="mimosa-sidebar-submit">
          Contacter sur WhatsApp
        </button>
        <a href={CLINIC_INFO.phoneHref} className="mimosa-sidebar-call-link">
          Ou appeler : {CLINIC_INFO.phoneDisplay}
        </a>
        <div className="mimosa-sidebar-reassurance">
          Réponse le jour même · Quartier Mimosa, Kénitra
        </div>
      </form>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { CLINIC_INFO } from "@/data/clinic-info";

function getMoroccoOpenStatus(): { isOpen: boolean; label: string; sub: string } {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Casablanca",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 10);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const mins = (hour === 24 ? 0 : hour) * 60 + minute;

  if (weekday === "Sun") {
    return {
      isOpen: false,
      label: "Rappel prioritaire lundi 09h",
      sub: "Laissez un message WhatsApp maintenant",
    };
  }
  const closeMin = weekday === "Sat" ? 870 : 1170;
  if (mins >= 540 && mins < closeMin) {
    return {
      isOpen: true,
      label: "Cabinet ouvert maintenant",
      sub: "Créneau d’urgence disponible aujourd’hui",
    };
  }
  return {
    isOpen: false,
    label: "Hors horaires d’ouverture",
    sub: "Envoyez une photo sur WhatsApp pour 09h00",
  };
}

export function UrgenceHeroLiveVisual() {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    label: string;
    sub: string;
  } | null>(null);

  useEffect(() => {
    setStatus(getMoroccoOpenStatus());
    const id = setInterval(() => setStatus(getMoroccoOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <aside className="urg-live-panel mimosa-hero-enter is-delayed">
      {/* Ondes radar continues */}
      <div className="urg-radar-stage" aria-hidden="true">
        <span className="urg-radar-ring is-1" />
        <span className="urg-radar-ring is-2" />
        <span className="urg-radar-ring is-3" />
        <div className="urg-radar-core">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>

        <div className="urg-floating-chip is-top">
          <span className="urg-chip-dot" />
          <span>Accueil jour même</span>
        </div>
        <div className="urg-floating-chip is-bottom">
          <span>Gare LGV · 4 min</span>
        </div>
      </div>

      <div className="urg-live-status-box">
        <div className="urg-live-status-row">
          <span
            className={`urg-live-indicator${status?.isOpen ? " is-open" : ""}`}
            aria-hidden="true"
          />
          <div>
            <div className="urg-live-status-title">
              {status ? status.label : "Accueil prioritaire · Dr. Oubaidi"}
            </div>
            <div className="urg-live-status-sub">
              {status
                ? status.sub
                : "23 Av. Chakib Arslan, Quartier Mimosa, Kénitra"}
            </div>
          </div>
        </div>
        <div className="urg-live-meta">
          <span>{CLINIC_INFO.address.district}</span>
          <span aria-hidden="true">·</span>
          <span>Parking devant l’entrée</span>
        </div>
      </div>
    </aside>
  );
}

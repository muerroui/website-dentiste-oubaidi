"use client";

import { useState } from "react";

interface RouteOption {
  id: string;
  label: string;
  duration: string;
  distance: string;
  hint: string;
}

const ROUTES: RouteOption[] = [
  {
    id: "lgv",
    label: "Gare LGV",
    duration: "4 min",
    distance: "1,4 km",
    hint: "Via Av. Mohamed V → Av. Chakib Arslan · Parking devant l’entrée",
  },
  {
    id: "centre",
    label: "Centre-Ville",
    duration: "6 min",
    distance: "2,1 km",
    hint: "Direction Quartier Mimosa · Résidence Khadija Oum Al Mouminine",
  },
  {
    id: "mehdia",
    label: "Bir Rami / Mehdia",
    duration: "10 min",
    distance: "4,8 km",
    hint: "Accès direct Av. Chakib Arslan · Bureau 01, Kénitra 14000",
  },
];

export function AccessRouteWidget() {
  const [activeId, setActiveId] = useState<string>(ROUTES[0].id);
  const activeRoute = ROUTES.find((r) => r.id === activeId) ?? ROUTES[0];

  return (
    <div
      className="access-route-card"
      aria-label="Simulateur de trajet vers Mimosa Smile Kénitra"
    >
      <div className="access-route-tabs" role="tablist" aria-label="Point de départ">
        {ROUTES.map((route) => {
          const isActive = route.id === activeId;
          return (
            <button
              key={route.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`access-route-tab${isActive ? " is-active" : ""}`}
              onClick={() => setActiveId(route.id)}
            >
              {route.label}
            </button>
          );
        })}
      </div>

      <div className="access-route-visual" key={activeRoute.id}>
        <div className="access-route-node is-origin">
          <span className="access-route-dot" aria-hidden="true" />
          <span>{activeRoute.label}</span>
        </div>

        <div className="access-route-track" aria-hidden="true">
          <span className="access-route-line" />
          <span className="access-route-badge">
            {activeRoute.duration} · {activeRoute.distance}
          </span>
        </div>

        <div className="access-route-node is-dest">
          <span className="access-route-beacon" aria-hidden="true" />
          <span>Mimosa Smile</span>
        </div>
      </div>

      <p className="access-route-hint">{activeRoute.hint}</p>
    </div>
  );
}

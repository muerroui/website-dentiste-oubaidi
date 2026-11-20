"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <section
      className="section home-before-after"
      aria-labelledby="before-after-title"
    >
      <div className="container">
        <header className="before-after-header">
          <p className="before-after-eyebrow">Aperçu esthétique</p>
          <h2 id="before-after-title" className="heading is-medium">
            Éclat naturel, sourire préservé
          </h2>
          <p className="paragraph">
            Comparez un sourire avant soin à gauche et après éclaircissement médical à droite.
          </p>
        </header>
        <div
          className="before-after-slider"
          aria-label="Comparateur avant après des sourires"
          style={{ "--compare-position": `${position}%` } as React.CSSProperties}
        >
          <div className="before-after-viewport">
            <img
              className="before-after-layer before-after-before"
              src="/assets/sourire-selection-avant.png"
              alt="Sourire avant traitement"
              loading="eager"
            />
            <div
              className="before-after-after-layer"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            >
              <img
                className="before-after-layer before-after-after"
                src="/assets/sourire-selection-apres.png"
                alt="Sourire après traitement"
                loading="eager"
              />
            </div>
            <div className="before-after-divider" aria-hidden="true"></div>
            <input
              id="before-after-control"
              className="before-after-control"
              type="range"
              min={0}
              max={100}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              aria-label="Position de comparaison avant après"
              aria-valuetext={`${position}% avant, ${100 - position}% après`}
            />
          </div>
        </div>
        <p className="before-after-note">
          Visuel pédagogique illustratif : chaque protocole esthétique est validé
          après bilan clinique personnalisé.
        </p>
      </div>
    </section>
  );
}

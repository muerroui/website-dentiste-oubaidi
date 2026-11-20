const OPENING_HOURS = [
  { day: "Lundi", hours: "09h00 – 19h30", closed: false },
  { day: "Mardi", hours: "09h00 – 19h30", closed: false },
  { day: "Mercredi", hours: "09h00 – 19h30", closed: false },
  { day: "Jeudi", hours: "09h00 – 19h30", closed: false },
  { day: "Vendredi", hours: "09h00 – 19h30", closed: false },
  { day: "Samedi", hours: "09h00 – 14h30", closed: false },
  { day: "Dimanche", hours: "Fermé", closed: true },
];

export function OpeningHoursSection() {
  return (
    <section
      className="section light-subtle hours-section"
      aria-labelledby="opening-hours-title"
    >
      <div className="container">
        <div className="hours-layout">
          <header className="hours-header">
            <h2 id="opening-hours-title" className="heading is-large">
              Trouvez l’horaire qui vous convient
            </h2>
            <p className="paragraph">
              Des plages d’ouverture étendues au Quartier Mimosa à Kénitra pour
              vos bilans préventifs comme pour les urgences du jour.
            </p>
          </header>

          <div className="hours-list" role="list">
            {OPENING_HOURS.map((item) => (
              <div
                key={item.day}
                role="listitem"
                className={`hours-row${item.closed ? " is-closed" : ""}`}
              >
                <span className="hours-day">{item.day}</span>
                <span className="hours-time">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

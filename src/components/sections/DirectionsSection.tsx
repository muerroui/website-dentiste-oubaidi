import { CLINIC_INFO } from "@/data/clinic-info";
import { ContactQuickButtons } from "@/components/ui/CtaButton";

interface DirectionsSectionProps {
  variant?: "light-strong" | "light-base" | "light-subtle";
}

export function DirectionsSection({
  variant = "light-strong",
}: DirectionsSectionProps) {
  return (
    <section className={`section ${variant}`}>
      <div className="container">
        <div className="direction-list">
          <div className="direction-item">
            <div className="direction-title-wrap">
              <img
                src="/assets/caliora/69e600e961f9c818bb739c0e_profile.svg"
                loading="lazy"
                alt=""
                className="direction-icon"
              />
              <h2 className="heading is-medium">Contact</h2>
            </div>
            <div className="direction-action">
              <ContactQuickButtons />
            </div>
          </div>

          <div className="direction-item">
            <div className="direction-title-wrap">
              <img
                src="/assets/caliora/69e5ffb7d417206be92e3d3a_location-pin.svg"
                loading="lazy"
                alt=""
                className="direction-icon"
              />
              <h2 className="heading is-medium">Accessibilité</h2>
            </div>
            <p className="paragraph is-large">
              Cabinet au {CLINIC_INFO.address.full}, à 4 min à pied de la Gare
              LGV.
            </p>
          </div>

          <div className="direction-item">
            <div className="direction-title-wrap">
              <img
                src="/assets/caliora/69e5feff0cec1ace73c906fb_1ad23d618214f09c5a8c388bbc33d450_parking.svg"
                loading="lazy"
                alt=""
                className="direction-icon"
              />
              <h2 className="heading is-medium">Stationnement</h2>
            </div>
            <p className="paragraph is-large">
              Places disponibles juste devant la clinique et aux abords du
              Quartier Mimosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

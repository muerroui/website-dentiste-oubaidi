import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinic-info";

interface LocationSectionProps {
  variant?: "home" | "row";
}

export function LocationSection({ variant = "home" }: LocationSectionProps) {
  if (variant === "row") {
    return (
      <section className="section no-paddings">
        <div className="locations-component">
          <div className="container">
            <div className="locations-wrap w-dyn-list">
              <div role="list" className="locations-list w-dyn-items">
                <div
                  role="listitem"
                  className="location-row-item w-variant-26da8ba5-1df1-e710-61b7-2bc53447d434 w-dyn-item"
                >
                  <div className="location-row-background">
                    <div className="parallax-wrap">
                      <img
                        src="/assets/mimosa-banner-location-1.png"
                        loading="eager"
                        alt="Clinique Mimosa Smile Quartier Mimosa Kénitra"
                        className="parallax-image"
                      />
                    </div>
                  </div>
                  <Link
                    href="/contact-acces-kenitra"
                    className="location-link-block is-2nd w-inline-block"
                  >
                    <div className="location-title">
                      <h2 className="heading is-small">
                        Mimosa — Clinique à Kénitra
                      </h2>
                      <img
                        loading="lazy"
                        src="/assets/caliora/69d91148a58b88b54b0d9a1b_arrow-dark-2.svg"
                        alt=""
                        className="location-icon"
                      />
                    </div>
                    <div className="spacing w-variant-ece6450b-87b0-9820-ed54-1d28ab1173ad"></div>
                    <div className="location-address">
                      <p className="paragraph is-medium">
                        {CLINIC_INFO.address.full}
                      </p>
                      <p className="paragraph is-medium">
                        Tél : {CLINIC_INFO.phoneDisplay}
                      </p>
                    </div>
                    <div className="location-opening">
                      <p className="paragraph is-small">
                        {CLINIC_INFO.hours.weekdays}
                      </p>
                      <p className="paragraph is-small">
                        {CLINIC_INFO.hours.saturday}
                      </p>
                    </div>
                  </Link>
                </div>

                <div
                  role="listitem"
                  className="location-row-item w-variant-26da8ba5-1df1-e710-61b7-2bc53447d434 w-dyn-item"
                >
                  <div className="location-row-background">
                    <div className="parallax-wrap">
                      <img
                        src="/assets/mimosa-clinic-reception.jpg"
                        loading="eager"
                        alt="Urgences dentaires et accès Gare LGV Kénitra"
                        className="parallax-image"
                      />
                    </div>
                  </div>
                  <Link
                    href="/urgence-dentaire-kenitra"
                    className="location-link-block is-2nd w-inline-block"
                  >
                    <div className="location-title">
                      <h2 className="heading is-small">
                        Accès Gare LGV &amp; Urgences
                      </h2>
                      <img
                        loading="lazy"
                        src="/assets/caliora/69d91148a58b88b54b0d9a1b_arrow-dark-2.svg"
                        alt=""
                        className="location-icon"
                      />
                    </div>
                    <div className="spacing w-variant-ece6450b-87b0-9820-ed54-1d28ab1173ad"></div>
                    <div className="location-address">
                      <p className="paragraph is-medium">
                        À 4 min de la Gare LGV Al Boraq
                      </p>
                      <p className="paragraph is-medium">
                        Parking facile devant la clinique
                      </p>
                    </div>
                    <div className="location-opening">
                      <p className="paragraph is-small">
                        Urgence dentaire Kénitra jour même
                      </p>
                      <p className="paragraph is-small">
                        WhatsApp : {CLINIC_INFO.whatsappDisplay}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section no-paddings home-location-section">
      <div className="locations-component">
        <div className="container">
          <div className="locations-wrap w-dyn-list">
            <div role="list" className="locations-list w-dyn-items">
              <div role="listitem" className="location-item w-dyn-item">
                <Link
                  href="/contact-acces-kenitra"
                  className="location-link-block w-inline-block"
                >
                  <div className="location-title">
                    <h2 className="heading is-small">
                      Mimosa — Clinique à Kénitra
                    </h2>
                    <img
                      loading="lazy"
                      src="/assets/caliora/69d91148a58b88b54b0d9a1b_arrow-dark-2.svg"
                      alt=""
                      className="location-icon"
                    />
                  </div>
                  <div className="spacing w-variant-ece6450b-87b0-9820-ed54-1d28ab1173ad"></div>
                  <div className="location-address">
                    <p className="paragraph is-medium">
                      {CLINIC_INFO.address.full}
                    </p>
                    <p className="paragraph is-medium">
                      Tél : {CLINIC_INFO.phoneDisplay}
                    </p>
                  </div>
                  <div className="location-opening">
                    <p className="paragraph is-small">
                      {CLINIC_INFO.hours.weekdays}
                    </p>
                    <p className="paragraph is-small">
                      {CLINIC_INFO.hours.saturday}
                    </p>
                  </div>
                </Link>
              </div>
              <div role="listitem" className="location-item w-dyn-item">
                <Link
                  href="/urgence-dentaire-kenitra"
                  className="location-link-block w-inline-block"
                >
                  <div className="location-title">
                    <h2 className="heading is-small">
                      Accès Gare LGV &amp; Urgences
                    </h2>
                    <img
                      loading="lazy"
                      src="/assets/caliora/69d91148a58b88b54b0d9a1b_arrow-dark-2.svg"
                      alt=""
                      className="location-icon"
                    />
                  </div>
                  <div className="spacing w-variant-ece6450b-87b0-9820-ed54-1d28ab1173ad"></div>
                  <div className="location-address">
                    <p className="paragraph is-medium">
                      À 4 min de la Gare LGV Kénitra
                    </p>
                    <p className="paragraph is-medium">
                      Parking facile · WhatsApp {CLINIC_INFO.whatsappDisplay}
                    </p>
                  </div>
                  <div className="location-opening">
                    <p className="paragraph is-small">
                      Urgence dentaire Kénitra jour même
                    </p>
                    <p className="paragraph is-small">
                      Devis dentaire écrit avant chaque soin
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing"></div>
        <div className="locations-image">
          <div className="parallax-wrap">
            <img
              src="/assets/mimosa-clinic-reception.jpg"
              loading="lazy"
              alt="Intérieur architectural et réception lumineuse de la clinique Mimosa Smile Dentiste à Kénitra"
              className="parallax-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

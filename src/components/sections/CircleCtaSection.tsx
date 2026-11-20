import Link from "next/link";

const CIRCLE_IMAGES = [
  {
    src: "/assets/accueil-clinique-mimosa-smile-kenitra.jpg",
    alt: "Espace d'accueil lumineux et végétalisé de la clinique Mimosa Smile.",
    extraClass: "",
    counterAngle: "0deg",
  },
  {
    src: "/assets/caliora/69de6b9142c18e401741ce53_5f22c82c98e0377ff1696663296f77d6_dentique-image-5.avif",
    alt: "Salle d'hygiène moderne de la clinique Mimosa Smile.",
    extraClass: " is-2nd",
    counterAngle: "-60deg",
  },
  {
    src: "/assets/entree-cabinet-dentaire-kenitra.jpg",
    alt: "Entrée du cabinet Mimosa Smile à Kénitra.",
    extraClass: " is-3rd",
    counterAngle: "-120deg",
  },
  {
    src: "/assets/mimosa-clinic-reception.jpg",
    alt: "Comptoir d'accueil chaleureux de la clinique Mimosa Smile.",
    extraClass: " is-4th",
    counterAngle: "-180deg",
  },
  {
    src: "/assets/caliora/69de6b92972a3a995f89ae47_4876b50fe408ccb06fa0a761631e40e8_dentique-image-9.avif",
    alt: "Hygiène dentaire et soins préventifs.",
    extraClass: " is-5th",
    counterAngle: "-240deg",
  },
  {
    src: "/assets/mimosa-soin-facettes.jpg",
    alt: "Facettes céramiques E-max présentées sur un support.",
    extraClass: " is-6th",
    counterAngle: "-300deg",
  },
];

export function CircleCtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="heading-fluid">Excellence médicale. Douceur.</h2>
            <Link
              href="/tarifs-mutuelles"
              className="large-link-block w-inline-block"
            >
              <div className="large-link-text">Voir notre charte clinique</div>
              <img
                loading="lazy"
                src="/assets/caliora/69d91148a58b88b54b0d9a1f_arrow-dark-5.svg"
                alt="Flèche"
                className="large-link-icon"
              />
              <div className="large-link-line"></div>
            </Link>
          </div>
          <div className="images-in-circle">
            {CIRCLE_IMAGES.map((img) => (
              <div key={img.src} className={`cta-image-block${img.extraClass}`}>
                <img
                  loading="lazy"
                  src={img.src}
                  alt={img.alt}
                  className="cta-image"
                  style={
                    { "--medallion-angle": img.counterAngle } as React.CSSProperties
                  }
                />
              </div>
            ))}
            <div className="circle-full">
              <img
                loading="lazy"
                src="/assets/caliora/69de6f99c488987af2e5a004_0ac8da08dd4705bf16727178d54fd45a_asterisk.svg"
                alt="asterisk"
                className="brand-symbol-in-circle is-light"
              />
            </div>
            <div className="circle-border-1"></div>
            <div className="circle-border-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

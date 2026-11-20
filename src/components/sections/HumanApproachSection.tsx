const APPROACH_IMAGES = [
  {
    src: "/assets/mimosa-soin-adapte.png",
    alt: "Salle de soins de la clinique Mimosa Smile à Kénitra",
  },
  {
    src: "/assets/mimosa-sterilisation-classe-b.png",
    alt: "Autoclave et instruments dentaires emballés pour une stérilisation sûre",
  },
  {
    src: "/assets/mimosa-devis-transparent.png",
    alt: "Devis de soins dentaires présenté pendant une consultation",
  },
];

const APPROACH_STATS = [
  {
    icon: "/assets/caliora/69de0ffe702ebed50fb9d927_tooth-icon.svg",
    alt: "Symbole de dent",
    text: "Protocole doux adapté à chacun",
    label: "CONFORT",
    value: "Indolore",
  },
  {
    icon: "/assets/caliora/69e521b92dbb828caa0acf6d_protection.svg",
    alt: "Stérilisation contrôlée",
    text: "Hygiène stricte sous sachets scellés",
    label: "ASEPSIE",
    value: "Classe B",
  },
  {
    icon: "/assets/caliora/69e2004be3b2d87c7730a82c_76de53169fdcee8455774c02f7d2b550_checkmark.svg",
    alt: "Devis transparent",
    text: "Plan de soin chiffré par écrit",
    label: "TRANSPARENCE",
    value: "Devis J0",
  },
];

export function HumanApproachSection() {
  return (
    <section className="section dark-subtle">
      <div className="container">
        <div className="primary-content-block w-variant-adbe5150-d616-cdde-dc48-8577423528b3">
          <div className="primary-content-title">
            <h2 className="heading is-large">Soin tout en douceur</h2>
          </div>
          <div className="home-human-intro">
            <p className="paragraph is-large">
              Au cabinet Mimosa Smile du Dr. Oubaidi à Kénitra, technologie 3D et
              gestes apaisants garantissent des soins sans douleur.
            </p>
          </div>
          <div className="spacing w-variant-ece6450b-87b0-9820-ed54-1d28ab1173ad"></div>
        </div>
        <div className="stats-wrap">
          <div className="stats-col">
            <div className="stats-cms-image-wrapper w-dyn-list">
              <div role="list" className="stats-cms-image-list w-dyn-items">
                {APPROACH_IMAGES.map((img) => (
                  <div
                    key={img.src}
                    role="listitem"
                    className="stats-cms-image-item w-dyn-item mimosa-transparent-image"
                  >
                    <img
                      src={img.src}
                      loading="lazy"
                      alt={img.alt}
                      className="cover-image fit-to-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="stats-col">
            <div className="stats-layout">
              <div className="stats-cms-wrapper w-dyn-list">
                <div role="list" className="stats-cms-list w-dyn-items">
                  {APPROACH_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      role="listitem"
                      className="stats-cms-item w-dyn-item"
                    >
                      <div className="stat-content">
                        <img
                          src={stat.icon}
                          loading="lazy"
                          alt={stat.alt}
                          className="stat-logo-symbol engagement-icon"
                        />
                        <div className="paragraph is-small">{stat.text}</div>
                      </div>
                      <div className="stat-item-label">
                        <div className="label-text">{stat.label}</div>
                        <div className="large-number-text">{stat.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

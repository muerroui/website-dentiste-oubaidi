export interface NavLinkItem {
  label: string;
  href: string;
}

export interface MegaMenuSoinItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface MegaMenuQuickAction {
  label: string;
  href: string;
  icon: string;
  alt: string;
}

export const NAV_PAGES: NavLinkItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Urgence du Jour", href: "/urgence-dentaire-kenitra" },
  { label: "Tarifs & Mutuelles", href: "/tarifs-mutuelles" },
  { label: "Blog & Conseils", href: "/blog" },
  { label: "Contact & Accès", href: "/contact-acces-kenitra" },
];

export const NAV_SOINS: MegaMenuSoinItem[] = [
  {
    title: "Esthétique & Facettes",
    description: "Blanchiment dentaire et facette E-max sur mesure.",
    href: "/soins/facettes-esthetique-kenitra",
    image: "/assets/mimosa-spec-facettes.jpg",
  },
  {
    title: "Soins & Prévention",
    description: "Soin carie, détartrage sans douleur et endodontie.",
    href: "/soins/soins-conservateurs-kenitra",
    image: "/assets/mimosa-spec-soins.jpg",
  },
  {
    title: "Implants & Zircone",
    description: "Implant dentaire 3D titane et couronne en zircone.",
    href: "/soins/implantologie-3d-kenitra",
    image: "/assets/mimosa-spec-implants.jpg",
  },
  {
    title: "Aligneurs & Orthodontie",
    description: "Aligneurs invisibles 3D et orthodontie sur mesure.",
    href: "/soins/orthodontie-aligneurs-kenitra",
    image: "/assets/mimosa-spec-orthodontie.jpg",
  },
];

export const NAV_QUICK_ACTIONS: MegaMenuQuickAction[] = [];

export const MOBILE_MENU_LINKS: NavLinkItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Esthétique & Facettes", href: "/soins/facettes-esthetique-kenitra" },
  { label: "Soins & Prévention", href: "/soins/soins-conservateurs-kenitra" },
  { label: "Implants & Zircone", href: "/soins/implantologie-3d-kenitra" },
  { label: "Aligneurs & Orthodontie", href: "/soins/orthodontie-aligneurs-kenitra" },
  { label: "Urgence du Jour", href: "/urgence-dentaire-kenitra" },
  { label: "Tarifs & Mutuelles", href: "/tarifs-mutuelles" },
  { label: "Blog & Conseils", href: "/blog" },
  { label: "Contact & Accès", href: "/contact-acces-kenitra" },
];

export const FOOTER_LINK_GROUPS: { title: string; links: NavLinkItem[] }[] = [
  {
    title: "Pages & Guides",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Urgence dentaire du jour", href: "/urgence-dentaire-kenitra" },
      { label: "Tarifs & Mutuelles", href: "/tarifs-mutuelles" },
      { label: "Blog & Conseils dentaires", href: "/blog" },
      { label: "Contact & Plan d’accès", href: "/contact-acces-kenitra" },
    ],
  },
  {
    title: "Soins & Spécialités",
    links: [
      { label: "Esthétique & Facettes", href: "/soins/facettes-esthetique-kenitra" },
      { label: "Soins & Prévention", href: "/soins/soins-conservateurs-kenitra" },
      { label: "Implants & Zircone", href: "/soins/implantologie-3d-kenitra" },
      { label: "Aligneurs & Orthodontie", href: "/soins/orthodontie-aligneurs-kenitra" },
    ],
  },
];

export const FOOTER_LINK_COLUMNS: NavLinkItem[][] = FOOTER_LINK_GROUPS.map(
  (g) => g.links
);

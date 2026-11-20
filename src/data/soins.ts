export interface SoinSidebarDetail {
  icon: string;
  label: string;
  value: string;
  featured?: boolean;
}

export interface SoinFaqItem {
  question: string;
  answer: string;
}

export interface SoinRelatedLink {
  label: string;
  href: string;
  icon: string;
}

export interface SoinClinicalStep {
  number: string;
  title: string;
  description: string;
}

export interface SoinData {
  slug: string;
  title: string;
  shortTitle: string;
  accroche: string;
  heroSummary: string;
  seoTitle: string;
  seoDescription: string;
  procedureType: string;
  cardImage: string;
  heroImages: [string, string, string, string];
  sidebarDetails: SoinSidebarDetail[];
  contentTitle: string;
  leadParagraph: string;
  introParagraph: string;
  section1Title: string;
  bulletGroup1: string[];
  clinicalStepsTitle: string;
  clinicalSteps: SoinClinicalStep[];
  section2Title: string;
  middleParagraphs: string[];
  bulletGroup2: string[];
  closingParagraph: string;
  relatedArticleSlugs: string[];
  associatedCard: {
    tag: string;
    title: string;
    description: string;
    image: string;
    metrics: { label: string; value: string }[];
    ctaLabel: string;
    ctaHref: string;
  };
  relatedLinks: SoinRelatedLink[];
  faq: SoinFaqItem[];
}

export const SOINS_DATA: SoinData[] = [
  {
    slug: "facettes-esthetique-kenitra",
    title: "Esthétique & Facettes",
    shortTitle: "Facettes & Sourire",
    accroche: "Blanchiment dentaire et facette E-max sur mesure.",
    heroSummary:
      "Facettes dentaires Kénitra en céramique E-max fine et blanchiment dentaire médical sans tailler l’émail, validés directement par essai en bouche à Mimosa Smile.",
    seoTitle:
      "Facettes Dentaires Kénitra & Blanchiment Médical E-max | Mimosa Smile",
    seoDescription:
      "Esthétique du sourire à Kénitra : facette céramique E-max Maroc, Hollywood Smile sans tailler et éclaircissement dentaire médical avec le Dr. Oubaidi au Quartier Mimosa.",
    procedureType: "Cosmetic Dental Procedure",
    cardImage: "/assets/mimosa-spec-facettes.jpg",
    heroImages: [
      "/assets/mimosa-spec-facettes.jpg",
      "/assets/mimosa-facettes-blanchiment-3d.jpg",
      "/assets/mimosa-facettes-scanner-3d.jpg",
      "/assets/mimosa-soin-facettes.jpg",
    ],
    sidebarDetails: [
      {
        icon: "/assets/caliora/69e521b92dbb828caa0acf6d_protection.svg",
        label: "Domaine",
        value: "Esthétique à Kénitra",
        featured: true,
      },
      {
        icon: "/assets/caliora/69e522283d38d5087cfb2774_dentist.svg",
        label: "Matériau",
        value: "Facette E-max fine",
      },
      {
        icon: "/assets/caliora/69e521b93d38d5087cfb2260_tooth.svg",
        label: "Aperçu",
        value: "Essai mock-up en bouche",
      },
      {
        icon: "/assets/caliora/69e521b90f096bb95bb33f79_dental-care.svg",
        label: "Durée",
        value: "2 à 3 séances dédiées",
      },
    ],
    contentTitle: "Sublimer l’esthétique du sourire à Kénitra sans abîmer votre émail",
    leadParagraph:
      "Chaque projet d’esthétique du sourire à Kénitra débute par une simulation en bouche (mock-up) pour valider la forme, l’équilibre et la teinte avant fabrication.",
    introParagraph:
      "Au cabinet du Dr. Oubaidi au Quartier Mimosa, nous choisissons toujours la voie la plus respectueuse pour vos dents : blanchiment dentaire Kénitra sous contrôle médical, composite sculpté pour réparer un bord ébréché, ou facette céramique E-max Maroc pour un Hollywood Smile sans tailler.",
    section1Title: "Indications esthétiques & avantages des facettes E-max",
    bulletGroup1: [
      "Empreinte optique numérique et simulation du sourire avant tout acte",
      "Facette céramique E-max translucide résistante au café et au thé",
      "Éclaircissement dentaire médical avec protection complète des gencives",
    ],
    clinicalStepsTitle: "Déroulement de votre traitement esthétique en 3 étapes",
    clinicalSteps: [
      {
        number: "01",
        title: "Bilan gingival & Empreinte optique 3D",
        description:
          "Examen complet de l’émail et des gencives, photographies du visage et scan optique 3D sans pâte pour concevoir votre futur sourire.",
      },
      {
        number: "02",
        title: "Essai du sourire en bouche (Mock-up)",
        description:
          "Pose temporaire d’une maquette sur vos dents sans les tailler afin de valider ensemble la longueur, la forme et la teinte naturelle.",
      },
      {
        number: "03",
        title: "Collage adhésif sous digue & Finitions",
        description:
          "Scellement micrométrique des facettes céramiques E-max ou séance d’éclaircissement médical au fauteuil, suivi d’un contrôle d’occlusion.",
      },
    ],
    section2Title: "Préservation de l’émail naturel & longévité du collage",
    middleParagraphs: [
      "Lors de votre bilan initial à Kénitra, le Dr. Oubaidi contrôle la vitalité des dents et la santé des gencives avant de lancer le protocole esthétique.",
      "Après validation du mock-up en bouche, le collage sous champ isolé assure une adaptation précise, naturelle et durable dans le temps.",
    ],
    bulletGroup2: [
      "Rendu lumineux et nuancé respectant la texture naturelle de l’émail",
      "Préparation pelliculaire ultra-douce pour garder des dents saines",
      "Devis détaillé remis par écrit avec conseils d’entretien personnalisés",
    ],
    closingParagraph:
      "Vous obtenez un plan de soin transparent avant de vous engager, pour un sourire harmonieux parfaitement adapté aux traits de votre visage.",
    relatedArticleSlugs: ["facettes-emax-ou-composite-esthetique"],
    associatedCard: {
      tag: "Esthétique à Kénitra",
      title: "Devis Soins Esthétiques",
      description:
        "Consultez nos formules dédiées au blanchiment dentaire médical, au composite esthétique et aux facettes céramiques E-max.",
      image: "/assets/mimosa-soin-facettes.jpg",
      metrics: [
        { label: "Céramique", value: "E-max haute finesse" },
        { label: "Simulation", value: "Essai en bouche" },
        { label: "Délai", value: "8 à 10 jours" },
      ],
      ctaLabel: "Voir les tarifs & devis",
      ctaHref: "/tarifs-mutuelles",
    },
    relatedLinks: [
      {
        label: "Blanchiment dentaire médical",
        href: "/soins/facettes-esthetique-kenitra",
        icon: "/assets/caliora/69de0ffe702ebed50fb9d927_tooth-icon.svg",
      },
      {
        label: "Facette E-max sans tailler",
        href: "/soins/facettes-esthetique-kenitra",
        icon: "/assets/caliora/69de0ff783da4e834d3bd900_gum.svg",
      },
      {
        label: "Détartrage doux préalable",
        href: "/soins/soins-conservateurs-kenitra",
        icon: "/assets/caliora/69de103275ea304932a1e4a0_mouth-mirror.svg",
      },
    ],
    faq: [
      {
        question: "Un Hollywood Smile sans tailler les dents est-il possible à Kénitra ?",
        answer:
          "Oui. Selon l’alignement initial de vos dents, la facette céramique E-max Maroc pelliculaire se pose avec un simple polissage de surface (0,2 à 0,4 mm) ou sans aucune taille de l’émail sain.",
      },
      {
        question: "Peut-on prévisualiser le résultat des facettes dentaires avant la pose ?",
        answer:
          "Tout à fait. Le Dr. Oubaidi applique une maquette provisoire (mock-up) directement sur vos dents afin de valider avec vous la longueur, la teinte et le rendu du sourire avant fabrication.",
      },
      {
        question: "Le blanchiment dentaire Kénitra fragilise-t-il l’émail des dents ?",
        answer:
          "Non. Réalisé au fauteuil après un bilan et un détartrage doux, avec protection gingivale et gel dosé médicalement, l’éclaircissement dentaire médical respecte totalement la structure de l’émail.",
      },
    ],
  },
  {
    slug: "soins-conservateurs-kenitra",
    title: "Soins & Prévention",
    shortTitle: "Soins & Détartrage",
    accroche: "Soin carie, détartrage sans douleur et endodontie.",
    heroSummary:
      "Soin carie dentaire Kénitra, détartrage dentaire sans douleur aux ultrasons tièdes, composite dentaire esthétique et dévitalisation endodontie mécanisée.",
    seoTitle:
      "Soin Carie Dentaire Kénitra, Détartrage & Endodontie | Mimosa Smile",
    seoDescription:
      "Détartrage dentaire sans douleur, soin des gencives Kénitra, composite dentaire esthétique et traitement canal dentaire par endodontie mécanisée avec le Dr. Oubaidi.",
    procedureType: "Restorative and Preventive Dental Care",
    cardImage: "/assets/mimosa-spec-soins.jpg",
    heroImages: [
      "/assets/mimosa-spec-soins.jpg",
      "/assets/mimosa-soin-detartrage.jpg",
      "/assets/mimosa-soins-endodontie-3d.jpg",
      "/assets/mimosa-soins-composite-3d.jpg",
    ],
    sidebarDetails: [
      {
        icon: "/assets/caliora/69e521b92dbb828caa0acf6d_protection.svg",
        label: "Domaine",
        value: "Prévention & Soins",
        featured: true,
      },
      {
        icon: "/assets/caliora/69e522283d38d5087cfb2774_dentist.svg",
        label: "Douceur",
        value: "Anesthésie progressive",
      },
      {
        icon: "/assets/caliora/69e521b93d38d5087cfb2260_tooth.svg",
        label: "Précision",
        value: "Endodontie mécanisée",
      },
      {
        icon: "/assets/caliora/69e521b90f096bb95bb33f79_dental-care.svg",
        label: "Asepsie",
        value: "Stérilisation Classe B",
      },
    ],
    contentTitle: "Soigner vos dents naturelles en douceur au cœur du Quartier Mimosa",
    leadParagraph:
      "Au cabinet Mimosa Smile à Kénitra, notre priorité est de conserver chaque dent naturelle vivante grâce au dépistage précoce et aux restaurations adhésives.",
    introParagraph:
      "Du détartrage dentaire sans douleur au soin carie dentaire Kénitra par composite dentaire esthétique, jusqu’au traitement canal dentaire en dévitalisation endodontie mécanisée, tous nos gestes s’effectuent sous anesthésie locale progressive.",
    section1Title: "Traitements conservateurs & prophylaxie gingivale",
    bulletGroup1: [
      "Détartrage dentaire sans douleur à eau tiède et polissage anti-taches",
      "Soin des caries par composite dentaire esthétique invisible, sans mercure",
      "Dévitalisation par endodontie mécanisée sous digue et contrôle radio",
    ],
    clinicalStepsTitle: "Déroulement d’un soin conservateur en 3 étapes",
    clinicalSteps: [
      {
        number: "01",
        title: "Diagnostic visuel & Radio numérique basse dose",
        description:
          "Détection précise des caries débutantes ou de l’inflammation gingivale sur écran haute définition avec remise immédiate d’un devis écrit.",
      },
      {
        number: "02",
        title: "Anesthésie locale douce & Champ opératoire isolé",
        description:
          "Gel pré-anesthésique puis anesthésie progressive sans douleur et pose d’une digue protectrice garantissant une étanchéité optimale.",
      },
      {
        number: "03",
        title: "Restauration biomimétique (Composite ou Inlay 3D)",
        description:
          "Reconstruction anatomique par composite stratifié invisible ou inlay-onlay céramique, suivie d’un polissage fin respectueux de l’occlusion.",
      },
    ],
    section2Title: "Inlay-onlay céramique & traçabilité de stérilisation Classe B",
    middleParagraphs: [
      "Pour une dent fragilisée mais encore saine à la racine, un inlay-onlay en céramique réalisé sur empreinte 3D permet d’éviter une couronne complète trop invasive.",
      "Chaque instrument passe par une chaîne de désinfection stricte sous sachets scellés et stérilisation en autoclave Classe B à traçabilité contrôlée.",
    ],
    bulletGroup2: [
      "Cliché radio numérique basse dose commenté directement sur écran",
      "Soin des gencives Kénitra contre les saignements et sensibilités",
      "Devis écrit précis remis avant chaque soin conservateur ou prothèse",
    ],
    closingParagraph:
      "Une visite préventive tous les 6 à 12 mois à Kénitra suffit bien souvent à éviter les douleurs aiguës et les soins complexes.",
    relatedArticleSlugs: [
      "couronne-zircone-ou-inlay-ceramique",
      "saignements-gencives-quand-consulter",
    ],
    associatedCard: {
      tag: "Soin des Gencives",
      title: "Bilan & Détartrage Doux",
      description:
        "Découvrez notre protocole de bilan bucco-dentaire complet, détartrage dentaire sans douleur et soin des caries avec devis écrit.",
      image: "/assets/mimosa-soin-detartrage.jpg",
      metrics: [
        { label: "Durée", value: "45 min au cabinet" },
        { label: "Confort", value: "Ultrasons tièdes" },
        { label: "Contrôle", value: "Radio numérique" },
      ],
      ctaLabel: "Consulter les tarifs",
      ctaHref: "/tarifs-mutuelles",
    },
    relatedLinks: [
      {
        label: "Détartrage & Caries",
        href: "/soins/soins-conservateurs-kenitra",
        icon: "/assets/caliora/69de103275ea304932a1e4a0_mouth-mirror.svg",
      },
      {
        label: "Urgence dentaire Kénitra",
        href: "/urgence-dentaire-kenitra",
        icon: "/assets/caliora/69e530b6ff125f735c3efe9d_dental-chair.svg",
      },
      {
        label: "Implants & Couronne zircone",
        href: "/soins/implantologie-3d-kenitra",
        icon: "/assets/caliora/69de10396b8587204d65b53d_crown.svg",
      },
    ],
    faq: [
      {
        question: "Comment se déroule un détartrage dentaire sans douleur à Kénitra ?",
        answer:
          "Nous employons des ultrasons à fréquence douce irrigués à l’eau tiède, complétés par un polissage délicat qui élimine plaque et taches sans irriter les gencives sensibles.",
      },
      {
        question: "Pourquoi utiliser la dévitalisation par endodontie mécanisée ?",
        answer:
          "Lorsque la carie atteint le nerf, le traitement canal dentaire mécanisé sous anesthésie locale nettoie et obture les racines avec grande précision, tout en restant confortable.",
      },
      {
        question: "Le composite dentaire esthétique remplace-t-il bien l’amalgame ?",
        answer:
          "Oui. Nous n’employons aucun plombage gris au mercure : le composite dentaire adhère directement aux parois saines, préserve davantage la dent et imite parfaitement la teinte naturelle.",
      },
    ],
  },
  {
    slug: "implantologie-3d-kenitra",
    title: "Implants & Zircone",
    shortTitle: "Implants Dentaires",
    accroche: "Implant dentaire 3D titane et couronne en zircone.",
    heroSummary:
      "Remplacer une dent manquante Kénitra grâce à l’implantologie 3D Cone Beam : implant dentaire en titane certifié CE et couronne zircone sur implant sur mesure.",
    seoTitle:
      "Implant Dentaire Kénitra, Cone Beam 3D & Couronne Zircone | Mimosa Smile",
    seoDescription:
      "Implant dentaire Kénitra et couronne zircone sur implant avec le Dr. Oubaidi. Étude d’implantologie 3D Cone Beam et transparence sur le prix implant dentaire Maroc.",
    procedureType: "Dental Implant Surgery",
    cardImage: "/assets/mimosa-spec-implants.jpg",
    heroImages: [
      "/assets/mimosa-spec-implants.jpg",
      "/assets/mimosa-implants-guide-3d.jpg",
      "/assets/mimosa-implants-conebeam-3d.jpg",
      "/assets/mimosa-soin-couronnes.jpg",
    ],
    sidebarDetails: [
      {
        icon: "/assets/caliora/69e521b92dbb828caa0acf6d_protection.svg",
        label: "Domaine",
        value: "Implantologie Cone Beam",
        featured: true,
      },
      {
        icon: "/assets/caliora/69e522283d38d5087cfb2774_dentist.svg",
        label: "Implant",
        value: "Titane biocompatible",
      },
      {
        icon: "/assets/caliora/69e521b93d38d5087cfb2260_tooth.svg",
        label: "Couronne",
        value: "Zircone monolithique",
      },
      {
        icon: "/assets/caliora/69e521b90f096bb95bb33f79_dental-care.svg",
        label: "Budget",
        value: "Devis écrit échelonné",
      },
    ],
    contentTitle: "Remplacer une dent manquante à Kénitra par un implant stable et fixe",
    leadParagraph:
      "Chaque implant dentaire à Kénitra chez le Dr. Oubaidi s’appuie sur une étude d’implantologie 3D Cone Beam afin d’évaluer l’os au millimètre et sécuriser la pose.",
    introParagraph:
      "Pour remplacer une dent manquante Kénitra sans toucher aux dents adjacentes saines, l’implant joue le rôle d’une racine artificielle. Une fois intégré à l’os, une empreinte 3D permet de fixer une couronne zircone sur implant naturelle et robuste.",
    section1Title: "Sécurité chirurgicale 3D & traçabilité de l’implant en titane CE",
    bulletGroup1: [
      "Bilan en implantologie 3D Cone Beam mesurant hauteur et densité osseuses",
      "Implant dentaire en titane pur accompagné de son passeport de traçabilité CE",
      "Protocole chirurgical aseptique réalisé sous anesthésie locale douce",
    ],
    clinicalStepsTitle: "Protocole implantaire 3D en 3 étapes maîtrisées",
    clinicalSteps: [
      {
        number: "01",
        title: "Bilan Cone Beam 3D & Devis échelonné",
        description:
          "Analyse tridimensionnelle du volume osseux, choix de la dimension exacte de l’implant titane CE et remise du plan financier par étape.",
      },
      {
        number: "02",
        title: "Pose de l’implant sous anesthésie locale douce",
        description:
          "Intervention atraumatique sous asepsie stricte au cabinet, suivie d’une période d’ostéo-intégration de 8 à 12 semaines.",
      },
      {
        number: "03",
        title: "Scan optique 3D & Pose de la couronne en zircone",
        description:
          "Empreinte numérique sans pâte et fixation de la couronne zircone sur implant, ajustée à la teinte et à la mastication naturelles.",
      },
    ],
    section2Title: "Prothèse sur couronne zircone & transparence des honoraires",
    middleParagraphs: [
      "Selon le secteur concerné (dent unitaire, molaires ou réhabilitation étendue), un guide de chirurgie 3D ou une dent provisoire esthétique peut être prévu.",
      "Concernant le prix implant dentaire Maroc, notre devis écrit distingue clairement l’acte chirurgical puis l’étape prothétique pour un règlement échelonné.",
    ],
    bulletGroup2: [
      "Couronne zircone sur implant sans armature métallique ni ombre grise",
      "Scan optique 3D précis remplaçant les empreintes traditionnelles à la pâte",
      "Suivi post-implantaire attentif au Quartier Mimosa près de la Gare LGV",
    ],
    closingParagraph:
      "Sollicitez votre bilan pré-implantaire à Kénitra : vous repartez avec la lecture de votre scanner 3D et un devis clair adapté à votre cas.",
    relatedArticleSlugs: [
      "bilan-implant-dentaire-3d-kenitra",
      "couronne-zircone-ou-inlay-ceramique",
    ],
    associatedCard: {
      tag: "Implantologie Cone Beam",
      title: "Forfait Implant & Zircone",
      description:
        "Découvrez le déroulé clinique et les modalités de règlement par étape pour un implant dentaire et sa couronne en zircone.",
      image: "/assets/mimosa-soin-couronnes.jpg",
      metrics: [
        { label: "Bilan", value: "Scanner 3D" },
        { label: "Traçabilité", value: "Titane CE" },
        { label: "Paiement", value: "Échelonné" },
      ],
      ctaLabel: "Voir les tarifs & devis",
      ctaHref: "/tarifs-mutuelles",
    },
    relatedLinks: [
      {
        label: "Couronne zircone & Inlays",
        href: "/soins/implantologie-3d-kenitra",
        icon: "/assets/caliora/69de10396b8587204d65b53d_crown.svg",
      },
      {
        label: "Détartrage & Suivi gencives",
        href: "/soins/soins-conservateurs-kenitra",
        icon: "/assets/caliora/69de103275ea304932a1e4a0_mouth-mirror.svg",
      },
      {
        label: "Urgence dent fracturée",
        href: "/urgence-dentaire-kenitra",
        icon: "/assets/caliora/69e530b6ff125f735c3efe9d_dental-chair.svg",
      },
    ],
    faq: [
      {
        question: "Quel est le prix implant dentaire Maroc et comment se règle-t-il ?",
        answer:
          "Au cabinet Mimosa Smile, le tarif dépend du bilan osseux 3D et du type de couronne zircone sur implant. Vous recevez un devis écrit complet avec règlement réparti entre la pose chirurgicale et la couronne.",
      },
      {
        question: "La pose d’un implant dentaire Kénitra est-elle douloureuse ?",
        answer:
          "Non. Grâce à l’anesthésie locale progressive et à la planification en implantologie 3D Cone Beam, l’acte est précis, rapide et indolore, avec des suites simples calmées par antalgiques usuels.",
      },
      {
        question: "Combien de semaines faut-il pour remplacer une dent manquante Kénitra ?",
        answer:
          "La cicatrisation osseuse autour de l’implant demande généralement 8 à 12 semaines. Sur les dents visibles devant, une solution provisoire esthétique est posée dès le début.",
      },
    ],
  },
  {
    slug: "orthodontie-aligneurs-kenitra",
    title: "Aligneurs & Orthodontie",
    shortTitle: "Aligneurs Invisibles",
    accroche: "Aligneurs invisibles 3D et orthodontie sur mesure.",
    heroSummary:
      "Aligneurs invisibles Kénitra et gouttière dentaire transparente Maroc sur empreinte optique 3D : orthodontie adulte et ado Kénitra sans pâte ni métal visible.",
    seoTitle:
      "Aligneurs Invisibles Kénitra & Orthodontie Adulte Ado | Mimosa Smile",
    seoDescription:
      "Orthodontie adulte et ado Kénitra par gouttière dentaire transparente Maroc et appareil dentaire invisible sans bagues. Scan optique 3D au cabinet du Dr. Oubaidi.",
    procedureType: "Orthodontic Treatment",
    cardImage: "/assets/mimosa-spec-orthodontie.jpg",
    heroImages: [
      "/assets/mimosa-spec-orthodontie.jpg",
      "/assets/mimosa-ortho-coffret-3d.jpg",
      "/assets/mimosa-ortho-ceramique-3d.jpg",
      "/assets/mimosa-soin-blanchiment.jpg",
    ],
    sidebarDetails: [
      {
        icon: "/assets/caliora/69e521b92dbb828caa0acf6d_protection.svg",
        label: "Domaine",
        value: "Aligneurs & Orthodontie",
        featured: true,
      },
      {
        icon: "/assets/caliora/69e522283d38d5087cfb2774_dentist.svg",
        label: "Modélisation",
        value: "Empreinte optique 3D",
      },
      {
        icon: "/assets/caliora/69e521b93d38d5087cfb2260_tooth.svg",
        label: "Patients",
        value: "Adolescents & Adultes",
      },
      {
        icon: "/assets/caliora/69e521b90f096bb95bb33f79_dental-care.svg",
        label: "Maintien",
        value: "Contention sur mesure",
      },
    ],
    contentTitle: "Réaligner votre sourire à Kénitra avec un appareil dentaire invisible",
    leadParagraph:
      "Sans empreinte à la pâte : dès le premier bilan, notre scanner optique 3D modélise vos dents et simule chaque étape de votre traitement orthodontique.",
    introParagraph:
      "Pensée pour l’orthodontie adulte et ado Kénitra, notre approche s’appuie sur des aligneurs invisibles Kénitra (gouttière dentaire transparente Maroc amovible) ou sur des bagues esthétiques en céramique pour un appareil dentaire invisible sans bagues métalliques.",
    section1Title: "Liberté au quotidien & modélisation orthodontique 3D",
    bulletGroup1: [
      "Gouttière dentaire transparente amovible pour manger et brosser sans gêne",
      "Visualisation 3D du résultat d’alignement avant de débuter les séances",
      "Rendez-vous de contrôle espacés adaptés aux agendas scolaires et pros",
    ],
    clinicalStepsTitle: "Votre parcours d’alignement dentaire en 3 étapes",
    clinicalSteps: [
      {
        number: "01",
        title: "Empreinte optique 3D & Simulation virtuelle",
        description:
          "Numérisation complète des arcades sans pâte et présentation en 3D du mouvement progressif de vos dents jusqu’au sourire aligné.",
      },
      {
        number: "02",
        title: "Port des gouttières transparentes & Suivi régulier",
        description:
          "Remise de votre série d’aligneurs sur mesure (portés 22h/24 et retirés aux repas) avec contrôle rapide toutes les 6 à 8 semaines.",
      },
      {
        number: "03",
        title: "Contention discrète & Stabilisation durable",
        description:
          "En fin d’alignement actif, pose d’un fil de contention interne invisible et/ou gouttière nocturne pour pérenniser le résultat.",
      },
    ],
    section2Title: "Équilibre occlusal, hygiène facilitée & maintien à long terme",
    middleParagraphs: [
      "Des dents bien alignées améliorent le sourire mais protègent aussi l’émail contre l’usure, tout en rendant le passage de la brosse et du fil bien plus simple.",
      "En fin de parcours actif, une contention discrète (fil fin collé et/ou gouttière nocturne) maintient durablement la nouvelle position des dents.",
    ],
    bulletGroup2: [
      "Contrôle systématique des gencives et des caries avant la mise en place",
      "Forfait semestriel ou global présenté par écrit dès la consultation",
      "Réactivité immédiate au cabinet en cas d’attache ou de gouttière perdue",
    ],
    closingParagraph:
      "Prenez rendez-vous au Quartier Mimosa à Kénitra pour réaliser votre bilan optique 3D et choisir la solution d’alignement la plus adaptée.",
    relatedArticleSlugs: ["aligneurs-invisibles-ou-appareil-discret"],
    associatedCard: {
      tag: "Aligneurs & Orthodontie",
      title: "Devis Aligneurs Invisibles",
      description:
        "Consultez nos modalités de suivi par gouttière dentaire transparente et forfaits semestriels avec devis écrit préalable.",
      image: "/assets/mimosa-spec-orthodontie.jpg",
      metrics: [
        { label: "Scan", value: "Optique 3D" },
        { label: "Gouttière", value: "Transparente" },
        { label: "Contrôles", value: "Toutes 6–8 sem." },
      ],
      ctaLabel: "Voir les tarifs & devis",
      ctaHref: "/tarifs-mutuelles",
    },
    relatedLinks: [
      {
        label: "Gouttière transparente 3D",
        href: "/soins/orthodontie-aligneurs-kenitra",
        icon: "/assets/caliora/69de1067bfdf0bbf8a67d60f_dental-checkup.svg",
      },
      {
        label: "Esthétique & Facettes",
        href: "/soins/facettes-esthetique-kenitra",
        icon: "/assets/caliora/69de0ff783da4e834d3bd900_gum.svg",
      },
      {
        label: "Détartrage & Soins doux",
        href: "/soins/soins-conservateurs-kenitra",
        icon: "/assets/caliora/69de103275ea304932a1e4a0_mouth-mirror.svg",
      },
    ],
    faq: [
      {
        question: "Combien de mois faut-il porter des aligneurs invisibles Kénitra ?",
        answer:
          "Selon l’encombrement dentaire initial, la durée moyenne avec une gouttière dentaire transparente Maroc se situe entre 6 et 18 mois, avec des visites espacées de 6 à 8 semaines.",
      },
      {
        question: "L’orthodontie adulte et ado Kénitra est-elle possible à tout âge ?",
        answer:
          "Oui, il n’y a aucune limite d’âge dès lors que les gencives et le support osseux sont sains. L’appareil dentaire invisible sans bagues reste très prisé des adultes en activité.",
      },
      {
        question: "Une gouttière dentaire transparente modifie-t-elle la façon de parler ?",
        answer:
          "Un léger temps d’adaptation de 24 à 48 heures suffit dans la quasi-totalité des cas. Épousant le contour des dents au micron près, la gouttière reste très confortable.",
      },
    ],
  },
];

export function getSoinBySlug(slug: string): SoinData | undefined {
  return SOINS_DATA.find((s) => s.slug === slug);
}

export type ArticleCategory = "Prothèse & Implants" | "Prévention & Hygiène";

export interface ArticleSection {
  h2: string;
  paragraphs: string[];
  h3s?: {
    title: string;
    body: string;
  }[];
  bullets?: string[];
}

export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export interface ArticleData {
  slug: string;
  title: string;
  category: ArticleCategory;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  heroAlt: string;
  galleryImages: [string, string, string, string];
  sidebarSummary: {
    pole: string;
    expertise: string;
    keyIndicator: string;
    devis: string;
    duration: string;
  };
  leadTitle: string;
  leadIntro: string;
  sections: ArticleSection[];
  relatedSoin: {
    title: string;
    description: string;
    href: string;
    ctaLabel: string;
  };
  faq: ArticleFaqItem[];
}

export const ARTICLES_DATA: ArticleData[] = [
  {
    slug: "couronne-zircone-ou-inlay-ceramique",
    title: "Inlay-onlay céramique ou couronne zircone : que choisir ?",
    category: "Prothèse & Implants",
    readingTime: "4 min",
    publishedAt: "2026-09-12",
    updatedAt: "2026-10-18",
    excerpt:
      "Découvrez la différence couronne et inlay pour réparer une dent abîmée sans couronne ou poser une prothèse dentaire fixe à Kénitra.",
    seoTitle:
      "Inlay-Onlay Céramique ou Couronne Zircone à Kénitra ? | Mimosa Smile",
    seoDescription:
      "Conseils du Dr. Oubaidi sur la différence couronne et inlay : comment réparer une dent abîmée sans couronne ou choisir une couronne zircone fixe à Kénitra.",
    heroImage: "/assets/mimosa-blog-couronne-zircone-inlay.jpg",
    heroAlt:
      "Guide clinique couronne zircone et inlay-onlay céramique au cabinet Mimosa Smile",
    galleryImages: [
      "/assets/mimosa-blog-couronne-zircone-inlay.jpg",
      "/assets/mimosa-soin-couronnes.jpg",
      "/assets/mimosa-soins-composite-3d.jpg",
      "/assets/mimosa-soins-endodontie-3d.jpg",
    ],
    sidebarSummary: {
      pole: "Prothèse & Implants",
      expertise: "Prothèse dentaire fixe",
      keyIndicator: "Scan numérique 3D",
      devis: "Devis détaillé préalable",
      duration: "2 visites au cabinet",
    },
    leadTitle:
      "Préférer l’option prothétique la plus conservatrice selon l’état de votre dent",
    leadIntro:
      "Face à une molaire creusée par une ancienne carie ou un plombage fracturé, deux options fiables permettent une reconstruction durable : l’inlay-onlay céramique ou la couronne zircone.",
    sections: [
      {
        h2: "Réparer une dent abîmée sans couronne avec l’inlay-onlay céramique",
        paragraphs: [
          "L’inlay-onlay céramique est une pièce de précision collée uniquement sur la partie manquante de la dent. Il permet de réparer dent abîmée sans couronne complète lorsque les parois restent solides.",
        ],
        h3s: [
          {
            title: "Comment savoir s’il convient à votre dent ?",
            body: "Dès que la dent demeure vivante avec des parois suffisamment résistantes pour la mastication, cette approche biomimétique garde le nerf intact.",
          },
          {
            title: "Pourquoi cette différence couronne et inlay compte",
            body: "Par rapport à un simple composite étendu, l’inlay offre une excellente étanchéité tout en conservant entre 60 et 75 % de votre émail et dentine sains.",
          },
        ],
        bullets: [
          "Conservation de la vitalité nerveuse sans dévitalisation inutile",
          "Prise d’empreinte optique 3D confortable sans pâte",
          "Finition céramique fondue à la teinte exacte de vos dents",
        ],
      },
      {
        h2: "La couronne zircone : la prothèse dentaire fixe pour dents fragiles",
        paragraphs: [
          "Quand une dent a perdu la majorité de ses parois ou a subi un traitement de canal, la couronne zircone encercle toute sa surface pour éviter une fracture sous la mastication.",
        ],
        h3s: [
          {
            title: "Les atouts d’une prothèse dentaire fixe Kénitra sans métal",
            body: "En remplaçant l’ancien alliage métallique par de la zircone biocompatible, la gencive reste rose et saine sans jamais afficher de bordure sombre.",
          },
        ],
        bullets: [
          "Solidité mécanique optimale pour les dents du fond",
          "Tolérance biologique parfaite au contact de la gencive",
          "Solution privilégiée aussi sur un implant dentaire 3D",
        ],
      },
    ],
    relatedSoin: {
      title: "Explorer nos soins conservateurs & prothèse fixe à Kénitra",
      description:
        "Le Dr. Oubaidi examine votre radio numérique pour déterminer si un inlay-onlay céramique ou une couronne zircone protège le mieux votre dent.",
      href: "/soins/soins-conservateurs-kenitra",
      ctaLabel: "Voir Soins & Prévention",
    },
    faq: [
      {
        question: "Quelle longévité espérer d’une couronne zircone ou d’un inlay céramique ?",
        answer:
          "Avec un brossage biquotidien soigneux et un détartrage annuel au cabinet, un inlay-onlay céramique ou une couronne zircone reste stable durant 10 à 20 ans.",
      },
      {
        question: "Est-il obligatoire de dévitaliser avant de réparer une dent abîmée sans couronne ?",
        answer:
          "Jamais d’office. Tant que le nerf est sain, le Dr. Oubaidi préserve la vitalité de la dent grâce à un inlay-onlay céramique protecteur.",
      },
    ],
  },
  {
    slug: "facettes-emax-ou-composite-esthetique",
    title: "Facette E-max ou composite : embellir sans tailler l’émail",
    category: "Prothèse & Implants",
    readingTime: "5 min",
    publishedAt: "2026-09-24",
    updatedAt: "2026-10-22",
    excerpt:
      "Faut-il choisir une facette pelliculaire céramique ou un composite stratifié esthétique ? Comparatif et durée de vie facette E-max.",
    seoTitle:
      "Facette E-max ou Composite Stratifié Esthétique à Kénitra | Mimosa Smile",
    seoDescription:
      "Comparatif facette E-max ou composite au cabinet Mimosa Smile Kénitra : facette dentaire sans tailler l’émail, durée de vie facette E-max et rendu naturel.",
    heroImage: "/assets/mimosa-blog-facettes-emax-composite.jpg",
    heroAlt:
      "Comparatif facette pelliculaire céramique E-max et composite stratifié esthétique",
    galleryImages: [
      "/assets/mimosa-blog-facettes-emax-composite.jpg",
      "/assets/mimosa-soin-facettes.jpg",
      "/assets/mimosa-spec-facettes.jpg",
      "/assets/mimosa-facettes-blanchiment-3d.jpg",
    ],
    sidebarSummary: {
      pole: "Prothèse & Implants",
      expertise: "Sourire peu invasif",
      keyIndicator: "Essai mock-up préalable",
      devis: "Tarif écrit par dent",
      duration: "1 à 3 visites",
    },
    leadTitle:
      "Embellir l’harmonie du sourire tout en préservant l’émail dentaire naturel",
    leadIntro:
      "Réparer une incisive ébréchée, fermer un léger espace ou éclaircir la teinte n’oblige plus à mutiler les dents. Choisir entre facette E-max ou composite dépend de votre objectif au Quartier Mimosa.",
    sections: [
      {
        h2: "Le composite stratifié esthétique : rapide et ciblé en une visite",
        paragraphs: [
          "Modelé directement par le praticien au fauteuil, le composite stratifié esthétique reconstitue un angle fracturé ou masque une petite dysharmonie en gardant 100 % de l’émail intact.",
        ],
        h3s: [
          {
            title: "Atouts et limites du composite esthétique",
            body: "Abordable, modulable et facile à retoucher, la résine reste toutefois sensible aux colorants (thé, café) et demande souvent un repolissage après 4 à 6 ans.",
          },
        ],
        bullets: [
          "Soin réalisé en un seul rendez-vous sans étape prothétique",
          "Aucune préparation invasive de la dent d’origine",
          "Solution idéale sur une ou deux dents ou chez le jeune patient",
        ],
      },
      {
        h2: "La facette pelliculaire céramique E-max : éclat durable et sur mesure",
        paragraphs: [
          "Taillée sur mesure en disilicate de lithium à une épaisseur de 0,3 mm, la facette pelliculaire céramique autorise souvent une facette dentaire sans tailler l'émail tout en conservant sa brillance.",
        ],
        h3s: [
          {
            title: "Validation par essai et durée de vie facette E-max",
            body: "Un essayage provisoire en bouche valide votre sourire avant le collage définitif. Bien entretenue, la durée de vie facette E-max dépasse couramment 12 à 15 ans.",
          },
        ],
        bullets: [
          "Couleur inaltérable qui ne se tache pas avec les boissons",
          "Collage pelliculaire respectant la vitalité dentaire",
          "Esthétique translucide proche de l’émail naturel",
        ],
      },
    ],
    relatedSoin: {
      title: "Découvrir nos facettes céramiques E-max à Kénitra",
      description:
        "Consultez le protocole complet de facette dentaire sans tailler l’émail avec essai mock-up et blanchiment médical.",
      href: "/soins/facettes-esthetique-kenitra",
      ctaLabel: "Voir Esthétique & Facettes",
    },
    faq: [
      {
        question: "Faut-il privilégier facette E-max ou composite avec un éclaircissement ?",
        answer:
          "Nous commençons souvent par un éclaircissement médical global, puis réalisons une facette pelliculaire céramique ou un composite stratifié esthétique sur la teinte obtenue.",
      },
      {
        question: "Quelle est la durée de vie facette E-max et risque-t-elle de tomber ?",
        answer:
          "Collée sous champ isolé sur de l’émail sain, la facette pelliculaire forme une fusion durable offrant une durée de vie facette E-max de 12 à 15 ans et plus.",
      },
    ],
  },
  {
    slug: "aligneurs-invisibles-ou-appareil-discret",
    title: "Gouttière orthodontique ou appareil discret adulte et ado",
    category: "Prévention & Hygiène",
    readingTime: "4 min",
    publishedAt: "2026-10-03",
    updatedAt: "2026-10-28",
    excerpt:
      "Orthodontie invisible à Kénitra : comparatif entre aligneurs invisibles adulte ado, gouttière transparente et durée du traitement.",
    seoTitle:
      "Aligneurs Invisibles Adulte Ado & Gouttière Transparente Kénitra | Mimosa Smile",
    seoDescription:
      "Orthodontie invisible Kénitra : comment choisir entre gouttière orthodontique transparente et bagues céramiques ? Durée traitement aligneur dentaire et conseils.",
    heroImage: "/assets/mimosa-blog-aligneurs-invisibles.jpg",
    heroAlt:
      "Gouttière orthodontique transparente et aligneurs invisibles pour adulte et ado",
    galleryImages: [
      "/assets/mimosa-blog-aligneurs-invisibles.jpg",
      "/assets/mimosa-spec-orthodontie.jpg",
      "/assets/mimosa-ortho-ceramique-3d.jpg",
      "/assets/mimosa-facettes-scanner-3d.jpg",
    ],
    sidebarSummary: {
      pole: "Prévention & Hygiène",
      expertise: "Aligneurs & Orthodontie",
      keyIndicator: "Empreinte sans pâte",
      devis: "Devis semestriel écrit",
      duration: "6 à 18 mois environ",
    },
    leadTitle:
      "Corriger l’alignement dentaire discrètement pour faciliter l’hygiène quotidienne",
    leadIntro:
      "L’orthodontie invisible Kénitra s’adresse désormais autant aux actifs qu’aux lycéens : choisir entre aligneurs invisibles adulte ado et attaches céramiques dépend de la complexité du mouvement.",
    sections: [
      {
        h2: "La gouttière orthodontique transparente : confort et discrétion",
        paragraphs: [
          "Réalisée sur mesure d’après un scan optique 3D, la gouttière orthodontique transparente se porte 22 heures par jour et s’enlève simplement pour manger ou brosser les dents.",
        ],
        h3s: [
          {
            title: "Pour qui les aligneurs sont-ils indiqués ?",
            body: "Ils répondent idéalement aux adultes et adolescents rigoureux désirant un alignement discret sans modifier leurs habitudes alimentaires ni leur hygiène.",
          },
        ],
        bullets: [
          "Quasi imperceptibles au travail ou lors des échanges",
          "Liberté alimentaire totale puisque amovibles aux repas",
          "Aucun fil métallique susceptible de blesser les joues",
        ],
      },
      {
        h2: "Bagues céramiques et durée traitement aligneur dentaire : ce qu’il faut savoir",
        paragraphs: [
          "Pour certains déplacements radiculaires complexes, les attaches en céramique teinte dent gardent une grande efficacité tout en restant bien plus discrètes que le métal.",
        ],
        h3s: [
          {
            title: "Stabiliser les dents après l’orthodontie",
            body: "Une fois la durée traitement aligneur dentaire achevée, un fil de contention collé ou une gouttière nocturne empêche les dents de bouger à nouveau.",
          },
        ],
        bullets: [
          "Action continue adaptée aux malpositions importantes",
          "Céramique translucide respectant l’esthétique du sourire",
          "Contrôle carieux et détartrage complet réalisés avant le départ",
        ],
      },
    ],
    relatedSoin: {
      title: "Consulter notre pôle Orthodontie invisible à Kénitra",
      description:
        "Planifiez votre empreinte optique 3D au Quartier Mimosa et visualisez l’évolution de votre futur alignement dentaire.",
      href: "/soins/orthodontie-aligneurs-kenitra",
      ctaLabel: "Voir Aligneurs & Orthodontie",
    },
    faq: [
      {
        question: "Un détartrage est-il prévu avant une gouttière orthodontique transparente ?",
        answer:
          "Oui. Avant de lancer des aligneurs invisibles adulte ado, nous vérifions systématiquement l’absence de tartre et de caries pour déplacer les dents sur un terrain sain.",
      },
      {
        question: "Quelle est la durée traitement aligneur dentaire et le rythme des visites ?",
        answer:
          "Le traitement dure généralement entre 6 et 18 mois selon l’ampleur des corrections, avec des contrôles rapides toutes les 6 à 8 semaines à Kénitra.",
      },
    ],
  },
  {
    slug: "bilan-implant-dentaire-3d-kenitra",
    title: "Les étapes du bilan implant dentaire 3D Cone Beam à Kénitra",
    category: "Prothèse & Implants",
    readingTime: "5 min",
    publishedAt: "2026-10-10",
    updatedAt: "2026-11-02",
    excerpt:
      "Déroulement du bilan implant dentaire 3D Kénitra : scanner dentaire Cone Beam 3D, étapes pose implant dentaire et chirurgie douce.",
    seoTitle:
      "Bilan Implant Dentaire 3D Kénitra : Scanner Cone Beam & Étapes | Mimosa Smile",
    seoDescription:
      "Comment se passe un bilan implant dentaire 3D Kénitra ? Décryptage du scanner dentaire Cone Beam 3D, des étapes pose implant dentaire et de la chirurgie sans douleur.",
    heroImage: "/assets/mimosa-blog-bilan-implant-3d.jpg",
    heroAlt:
      "Examen sur scanner dentaire Cone Beam 3D pour implant à Kénitra",
    galleryImages: [
      "/assets/mimosa-blog-bilan-implant-3d.jpg",
      "/assets/mimosa-spec-implants.jpg",
      "/assets/mimosa-implants-guide-3d.jpg",
      "/assets/mimosa-soin-couronnes.jpg",
    ],
    sidebarSummary: {
      pole: "Prothèse & Implants",
      expertise: "Chirurgie guidée 3D",
      keyIndicator: "Scanner Cone Beam 3D",
      devis: "Devis écrit par étape",
      duration: "Séance de 30 à 45 min",
    },
    leadTitle:
      "Préparer chaque implant dentaire grâce à l’imagerie 3D avant le jour de la pose",
    leadIntro:
      "Remplacer une dent manquante offre un confort durable lorsqu’on prépare soigneusement l’intervention. Voici comment se déroule un bilan implant dentaire 3D Kénitra.",
    sections: [
      {
        h2: "1. Questionnaire de santé et examen bucco-dentaire complet",
        paragraphs: [
          "Le Dr. Oubaidi vérifie vos antécédents médicaux généraux (traitements, équilibre glycémique, tabac) et mesure l’espace prothétique disponible entre les dents voisines.",
        ],
        h3s: [
          {
            title: "Préparer une chirurgie implantaire sans douleur Kénitra",
            body: "Un assainissement gingival ou le soin d’une carie voisine est toujours réalisé avant l’acte pour garantir une cicatrisation propre autour de l’implant.",
          },
        ],
      },
      {
        h2: "2. Scanner dentaire Cone Beam 3D et étapes pose implant dentaire",
        paragraphs: [
          "Le scanner dentaire Cone Beam 3D cartographie en trois dimensions l’épaisseur et la densité de l’os, tout en repérant les sinus et les nerfs au dixième de millimètre.",
        ],
        bullets: [
          "Sélection millimétrée de la taille de l’implant en titane certifié CE",
          "Vérification d’un éventuel comblement osseux préalable si l’os est fin",
          "Présentation écrite du devis détaillant les étapes pose implant dentaire",
        ],
      },
    ],
    relatedSoin: {
      title: "Voir notre protocole Implantologie 3D à Kénitra",
      description:
        "Découvrez les avantages de l’implant titane CE et de la couronne zircone avec devis clair échelonné.",
      href: "/soins/implantologie-3d-kenitra",
      ctaLabel: "Voir Implants & Zircone",
    },
    faq: [
      {
        question: "Le bilan implant dentaire 3D Kénitra est-il utile pour une extraction ancienne ?",
        answer:
          "Indispensable. Quand une dent manque depuis des années, l’os peut s’être aminci : le scanner dentaire Cone Beam 3D indique si l’implant est posable d’emblée ou après renforcement.",
      },
      {
        question: "La chirurgie implantaire sans douleur Kénitra assure-t-elle une longue durée ?",
        answer:
          "Oui. Posé sous anesthésie locale complète après étude 3D et entretenu par un suivi annuel, un implant titane affiche plus de 95 % de réussite à long terme.",
      },
    ],
  },
  {
    slug: "saignements-gencives-quand-consulter",
    title: "Gencive qui saigne au brossage : quand faut-il consulter ?",
    category: "Prévention & Hygiène",
    readingTime: "4 min",
    publishedAt: "2026-10-19",
    updatedAt: "2026-11-05",
    excerpt:
      "Comment arrêter le saignement des gencives ? Comprendre le traitement gingivite parodontite et le détartrage soin des gencives.",
    seoTitle:
      "Gencive Qui Saigne au Brossage : Soin & Gingivite à Kénitra | Mimosa Smile",
    seoDescription:
      "Gencive qui saigne au brossage ? Comment arrêter le saignement des gencives avec un traitement gingivite parodontite et détartrage soin des gencives Kénitra.",
    heroImage: "/assets/mimosa-blog-saignements-gencives.jpg",
    heroAlt:
      "Bilan parodontal et soin des gencives qui saignent à Kénitra",
    galleryImages: [
      "/assets/mimosa-blog-saignements-gencives.jpg",
      "/assets/mimosa-soins-composite-3d.jpg",
      "/assets/mimosa-spec-soins.jpg",
      "/assets/mimosa-soins-endodontie-3d.jpg",
    ],
    sidebarSummary: {
      pole: "Prévention & Hygiène",
      expertise: "Soin des gencives",
      keyIndicator: "Ultrasons doux ciblés",
      devis: "Bilan parodontal précis",
      duration: "Visite de 45 min",
    },
    leadTitle:
      "Traiter une gencive qui saigne au brossage tôt évite l’atteinte de l’os",
    leadIntro:
      "On banalise souvent une gencive qui saigne au brossage ou en croquant dans un fruit. Or une gencive en bonne santé demeure ferme, rose pâle et ne saigne jamais au contact.",
    sections: [
      {
        h2: "Traitement gingivite parodontite : distinguer les deux stades",
        paragraphs: [
          "Lorsque le tartre stagne au collet des dents, il déclenche une gingivite : une inflammation superficielle qui guérit vite grâce à un détartrage et soin des gencives Kénitra.",
        ],
        h3s: [
          {
            title: "Symptômes nécessitant un bilan gingival rapide",
            body: "Saignement régulier, gencives rouges et gonflées, haleine tenace, dent qui paraît plus longue ou sensation de mobilité légère au toucher.",
          },
        ],
        bullets: [
          "Une gingivite simple disparaît après un détartrage doux ciblé",
          "Non traitée, elle évolue vers la parodontite et touche l’os de soutien",
          "Un traitement gingivite parodontite précoce protège la stabilité des dents",
        ],
      },
      {
        h2: "Comment arrêter le saignement des gencives au cabinet Mimosa Smile ?",
        paragraphs: [
          "Le Dr. Oubaidi effectue un sondage gingival indolore suivi d’un détartrage ultrasonique à eau tiède pour assainir en douceur les poches et les collets dentaires.",
        ],
        bullets: [
          "Prescription d’une brosse souple et réglage des brossettes interdentaires",
          "Prise en charge urgente en cas d’abcès ou de gonflement douloureux",
          "Visites de maintenance espacées de 6 à 12 mois selon votre profil",
        ],
      },
    ],
    relatedSoin: {
      title: "Planifier un détartrage & soin des gencives à Kénitra",
      description:
        "Retrouvez des gencives saines et apaisées grâce à notre protocole de détartrage dentaire sans douleur au Quartier Mimosa.",
      href: "/soins/soins-conservateurs-kenitra",
      ctaLabel: "Voir Soins & Prévention",
    },
    faq: [
      {
        question: "Comment arrêter le saignement des gencives : faut-il arrêter le brossage ?",
        answer:
          "Surtout pas ! Interrompre le brossage favorise la plaque et aggrave l’inflammation. Passez à une brosse extra-souple avec un geste doux et planifiez un détartrage au cabinet.",
      },
      {
        question: "À quel moment une gencive qui saigne impose-t-elle une consultation urgente ?",
        answer:
          "Si le saignement s’associe à une enflure, de la fièvre ou une douleur lancinante, appelez notre service d’urgence dentaire Kénitra pour être pris en charge dans la journée.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return ARTICLES_DATA.find((a) => a.slug === slug);
}

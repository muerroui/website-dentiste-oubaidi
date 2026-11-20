import type { Metadata } from "next";
import { CLINIC_INFO } from "./clinic-info";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  image = `${CLINIC_INFO.siteUrl}/assets/mimosa-hero-kenitra.jpg`,
}: BuildMetadataOptions): Metadata {
  const canonicalUrl =
    path === "/" ? `${CLINIC_INFO.siteUrl}/` : `${CLINIC_INFO.siteUrl}${path}`;

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      locale: "fr_MA",
      siteName: CLINIC_INFO.fullName,
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    other: {
      "geo.region": CLINIC_INFO.geo.region,
      "geo.placename": CLINIC_INFO.geo.placename,
    },
  };
}

export function getGlobalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
        "@id": `${CLINIC_INFO.siteUrl}/#clinic`,
        name: "Mimosa Smile : Clinique Dentaire Dr. Oubaidi Kénitra",
        url: `${CLINIC_INFO.siteUrl}/`,
        logo: `${CLINIC_INFO.siteUrl}/assets/logo-mimosa-smile.svg`,
        image: `${CLINIC_INFO.siteUrl}/assets/mimosa-hero-kenitra.jpg`,
        telephone: CLINIC_INFO.phoneSchema,
        priceRange: "$$",
        currenciesAccepted: "MAD",
        paymentAccepted:
          "Espèces, Carte Bancaire, Chèque, Règlement échelonné par étape clinique",
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC_INFO.address.street,
          addressLocality: CLINIC_INFO.address.city,
          addressRegion: CLINIC_INFO.address.region,
          postalCode: CLINIC_INFO.address.postalCode,
          addressCountry: CLINIC_INFO.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CLINIC_INFO.geo.latitude,
          longitude: CLINIC_INFO.geo.longitude,
        },
        hasMap: CLINIC_INFO.mapsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:30",
          },
        ],
      },
    ],
  };
}

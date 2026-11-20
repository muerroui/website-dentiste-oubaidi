import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CLINIC_INFO } from "@/data/clinic-info";
import { buildPageMetadata } from "@/data/seo";
import { getSoinBySlug, SOINS_DATA } from "@/data/soins";
import { JsonLd } from "@/components/seo/JsonLd";
import { SoinTemplate } from "@/components/templates/SoinTemplate";
import { PageStylesheet } from "@/components/layout/PageStylesheet";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOINS_DATA.map((soin) => ({
    slug: soin.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const soin = getSoinBySlug(slug);
  if (!soin) return {};

  return buildPageMetadata({
    title: soin.seoTitle,
    description: soin.seoDescription,
    path: `/soins/${soin.slug}`,
    image: `${CLINIC_INFO.siteUrl}${soin.cardImage}`,
  });
}

export default async function SoinDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const soin = getSoinBySlug(slug);
  if (!soin) notFound();

  const soinJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalProcedure", "Service"],
        name: soin.title,
        description: soin.seoDescription,
        procedureType: soin.procedureType,
        url: `${CLINIC_INFO.siteUrl}/soins/${soin.slug}`,
        provider: {
          "@id": `${CLINIC_INFO.siteUrl}/#clinic`,
        },
        areaServed: {
          "@type": "City",
          name: "Kénitra",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: soin.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <PageStylesheet href="/assets/caliora-page-condition_detail.css" />
      <JsonLd data={soinJsonLd} />
      <SoinTemplate soin={soin} />
    </>
  );
}

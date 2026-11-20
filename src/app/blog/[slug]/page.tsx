import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CLINIC_INFO } from "@/data/clinic-info";
import { buildPageMetadata } from "@/data/seo";
import { ARTICLES_DATA, getArticleBySlug } from "@/data/articles";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { PageStylesheet } from "@/components/layout/PageStylesheet";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildPageMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/blog/${article.slug}`,
    type: "article",
    image: `${CLINIC_INFO.siteUrl}${article.heroImage}`,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["BlogPosting", "MedicalWebPage"],
        headline: article.title,
        description: article.seoDescription,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        image: `${CLINIC_INFO.siteUrl}${article.heroImage}`,
        url: `${CLINIC_INFO.siteUrl}/blog/${article.slug}`,
        author: {
          "@type": "Physician",
          name: CLINIC_INFO.doctorName,
        },
        publisher: {
          "@id": `${CLINIC_INFO.siteUrl}/#clinic`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${CLINIC_INFO.siteUrl}/blog/${article.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: `${CLINIC_INFO.siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog & Conseils",
            item: `${CLINIC_INFO.siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `${CLINIC_INFO.siteUrl}/blog/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <PageStylesheet href="/assets/caliora-page-treatment_dental-implants.css" />
      <JsonLd data={articleJsonLd} />
      <ArticleTemplate article={article} />
    </>
  );
}

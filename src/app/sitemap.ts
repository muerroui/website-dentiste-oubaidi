import type { MetadataRoute } from "next";
import { CLINIC_INFO } from "@/data/clinic-info";
import { SOINS_DATA } from "@/data/soins";
import { ARTICLES_DATA } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CLINIC_INFO.siteUrl;
  const now = new Date("2026-11-18");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tarifs-mutuelles`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/urgence-dentaire-kenitra`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-acces-kenitra`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const soinRoutes: MetadataRoute.Sitemap = SOINS_DATA.map((soin) => ({
    url: `${baseUrl}/soins/${soin.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...soinRoutes, ...articleRoutes];
}

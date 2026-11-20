import type { MetadataRoute } from "next";
import { CLINIC_INFO } from "@/data/clinic-info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${CLINIC_INFO.siteUrl}/sitemap.xml`,
  };
}

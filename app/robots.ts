import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://framesense.app";
const canonicalUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app", "/dashboard", "/reports", "/api"],
      },
    ],
    sitemap: [`${canonicalUrl}/sitemap.xml`, `${canonicalUrl}/docs/sitemap.xml`],
  };
}

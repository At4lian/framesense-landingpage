import type { MetadataRoute } from "next";
import { docsRoutes } from "@/lib/seo-pages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://framesense.app";
const canonicalUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return docsRoutes.map((route) => ({
    url: `${canonicalUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/docs" ? 0.7 : 0.6,
  }));
}

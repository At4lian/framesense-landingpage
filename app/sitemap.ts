import type { MetadataRoute } from "next";
import { marketingRoutes } from "@/lib/seo-pages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://framesense.app";
const canonicalUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return marketingRoutes.map((route) => ({
    url: route === "/" ? canonicalUrl : `${canonicalUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

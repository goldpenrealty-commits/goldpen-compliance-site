import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy-policy", "/sms-terms", "/sms-consent"];
  const lastModified = new Date(brand.lastUpdatedISO);

  return routes.map((route) => ({
    url: `${brand.productionUrl}${route}`,
    lastModified,
    changeFrequency: "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}

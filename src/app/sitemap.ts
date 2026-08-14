import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

const routes = [
  "",
  "/orbyt",
  "/solucoes",
  "/computadores",
  "/sobre",
  "/contato",
  "/privacidade",
  "/termos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

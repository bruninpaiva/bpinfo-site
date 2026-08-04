import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.metaDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#17171b",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

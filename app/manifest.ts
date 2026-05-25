import type { MetadataRoute } from "next";
import { siteConfig } from "./seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Sabuj M.",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070709",
    theme_color: "#070709",
    orientation: "portrait-primary",
    categories: ["business", "productivity", "portfolio"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

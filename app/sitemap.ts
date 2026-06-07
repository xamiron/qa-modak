import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

const sectionAnchors = [
  "",
  "#home",
  "#experience",
  "#projects",
  "#about",
  "#philosophy",
  "#skills",
  "#domains",
  "#education",
  "#recognition",
  "#contact",
];

const standalonePages: { path: string; priority: number }[] = [
  { path: "/projects", priority: 0.9 },
  { path: "/journey", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home = sectionAnchors.map((anchor) => ({
    url: `${siteUrl}/${anchor}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: anchor === "" ? 1 : 0.7,
  }));

  const pages = standalonePages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [...home, ...pages];
}

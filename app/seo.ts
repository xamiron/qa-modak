import type { Metadata } from "next";

/**
 * Canonical production URL for OG images, sitemaps, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://qa-sabuj-modak.vercel.app).
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    const host = process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(
      /^https?:\/\//,
      "",
    );
    return `https://${host.replace(/\/$/, "")}`;
  }
  return "https://qa-sabuj-modak.vercel.app";
}

export const siteUrl = resolveSiteUrl();

export const siteConfig = {
  name: "Sabuj Kumar Modak",
  fullName: "Sabuj Kumar Modak",
  role: "Software QA Engineer & Security Tester",
  shortTitle: "Sabuj Kumar Modak | Software QA Engineer | Security Tester",
  longTitle:
    "Sabuj Kumar Modak | Software QA Engineer | Security Tester | Selenium Automation",
  description:
    "Sabuj Kumar Modak is a Dhaka-based Software QA Engineer & Security Tester with 2.5+ years experience in Selenium automation, Postman API testing, JMeter performance testing, and OWASP security testing across fintech, biometrics, and enterprise products.",
  shortDescription:
    "QA Engineer & Security Tester in Dhaka — Selenium, Postman, JMeter, OWASP, Burp Suite. Fintech, biometrics, EV & ERP testing.",
  locale: "en_US",
  language: "en",
  twitterHandle: "@sabujmodak",
  email: "Sabuj.modak.qa@gmail.com",
  location: {
    city: "Dhaka",
    region: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
  },
  keywords: [
    "Sabuj Kumar Modak",
    "Sabuj Modak",
    "Sabuj Kumar Modak QA",
    "Sabuj Modak Software QA Engineer",
    "Sabuj Modak Security Tester",
    "Software QA Engineer Dhaka",
    "QA Engineer Bangladesh",
    "Security Tester Bangladesh",
    "Selenium WebDriver",
    "API Testing Postman",
    "JMeter Performance Testing",
    "OWASP Top 10",
    "Burp Suite",
    "FinTech QA",
    "Biometric Testing",
    "RegTech QA",
    "EV App Testing",
    "ERP Testing",
    "Test Automation Java",
    "Penetration Testing",
  ],
  socials: {
    github: "https://github.com/xamiron",
    linkedin: "https://www.linkedin.com/in/sabuj-kumar-modak/",
    email: "mailto:Sabuj.modak.qa@gmail.com",
  },
  ogImage: "/opengraph-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

export type SiteConfig = typeof siteConfig;

const sharedOgImages: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: siteConfig.ogImage,
    width: siteConfig.ogImageWidth,
    height: siteConfig.ogImageHeight,
    alt: siteConfig.shortTitle,
    type: "image/png",
  },
];

const sharedTwitter = {
  card: "summary_large_image" as const,
  creator: siteConfig.twitterHandle,
  images: [siteConfig.ogImage],
};

/** Reusable metadata for every route — keeps OG, Twitter & canonical in sync. */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const pageUrl = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: pageUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: sharedOgImages,
    },
    twitter: {
      ...sharedTwitter,
      title,
      description,
    },
  };
}

export const pageSeo = {
  home: createPageMetadata({
    title: siteConfig.longTitle,
    description: siteConfig.description,
    path: "/",
  }),
  projects: createPageMetadata({
    title: "Projects & Case Studies",
    description:
      "Explore QA case studies by Sabuj Kumar Modak — Brac Bank, Nagad, passport biometrics, EV charging apps, ERP systems, and Selenium automation projects across fintech and enterprise.",
    path: "/projects",
    keywords: [
      ...siteConfig.keywords,
      "QA Portfolio",
      "Brac Bank QA",
      "Passport Biometric Testing",
      "Nagad UAT",
      "LeadsBox ERP QA",
    ],
  }),
  journey: createPageMetadata({
    title: "Career Journey",
    description:
      "Sabuj Modak's QA career journey — from junior tester to Software QA Engineer. Experience across fintech, biometrics, e-commerce, ERP, and EV mobility domains in Dhaka, Bangladesh.",
    path: "/journey",
    keywords: [
      ...siteConfig.keywords,
      "QA Career Journey",
      "Software Tester Bangladesh",
      "Singularity Limited QA",
    ],
  }),
};

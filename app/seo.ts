/**
 * Central SEO configuration.
 *
 * To change the production URL, set the env var `NEXT_PUBLIC_SITE_URL`
 * in your Vercel project settings (e.g. https://sabuj-modak.vercel.app
 * or your custom domain). It is also picked up automatically on Vercel
 * via VERCEL_URL.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://sabuj-modak.vercel.app";
}

export const siteUrl = resolveSiteUrl();

export const siteConfig = {
  name: "Sabuj Kumar Modak",
  fullName: "Sabuj Kumar Modak",
  role: "Software QA Engineer & Security Tester",
  shortTitle: "Sabuj Kumar Modak — QA Engineer & Security Tester",
  longTitle:
    "Sabuj Kumar Modak — Software QA Engineer | Security Tester | Selenium Automation",
  // Search-optimized: 158 chars, includes primary keywords + location + value prop
  description:
    "Sabuj Kumar Modak — Dhaka-based Software QA Engineer with 2+ years in functional, API, security testing & Selenium automation across fintech & EV products.",
  shortDescription:
    "QA Engineer specializing in functional, API, security testing & Selenium automation. Based in Dhaka, Bangladesh.",
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
    "QA Engineer Bangladesh",
    "Software QA Engineer Dhaka",
    "Security Tester Bangladesh",
    "Penetration Tester",
    "Selenium Automation Engineer",
    "API Testing Postman",
    "JMeter Performance Testing",
    "OWASP Top 10",
    "Manual Testing",
    "Test Automation Java",
    "FinTech QA",
    "Banking Software Testing",
    "RegTech",
    "E-commerce QA",
    "ERP Testing",
    "Biometric Testing",
    "EV Charging App Testing",
    "Burp Suite",
    "Nmap",
    "Acunetix",
    "Vulnerability Assessment",
    "Software Tester",
    "Quality Assurance Engineer",
  ],
  socials: {
    github: "https://github.com/xamiron",
    linkedin: "https://www.linkedin.com/in/sabuj-kumar-modak/",
    email: "mailto:Sabuj.modak.qa@gmail.com",
  },
  ogImage: "/opengraph-image",
};

export type SiteConfig = typeof siteConfig;

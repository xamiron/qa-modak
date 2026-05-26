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
  shortTitle: "Sabuj Kumar Modak — Software QA Engineer | Security Tester",
  longTitle:
    "Sabuj Kumar Modak — Software QA Engineer | Security Tester | Selenium Automation",
  // Search-optimized (~160 chars): branded name + location + role + tool stack
  description:
    "Sabuj Kumar Modak — Dhaka-based Software QA Engineer & Security Tester. 2.5+ years in Selenium automation, Postman API, JMeter load & OWASP security testing.",
  shortDescription:
    "QA Engineer & Security Tester — Selenium, Postman, JMeter, OWASP, BurpSuite. Fintech, EV & ERP products. Dhaka, Bangladesh.",
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
    // Branded & identity (highest priority — should rank #1 for direct talent searches)
    "Sabuj Kumar Modak",
    "Sabuj Modak",
    "Sabuj Kumar Modak QA",
    "Sabuj Kumar Modak Software QA Engineer",
    "Sabuj Modak Security Tester",
    "sabuj.qa",

    // Core role & location (recruiter-targeted)
    "Software QA Engineer Dhaka",
    "QA Engineer Bangladesh",
    "Security Tester Bangladesh",
    "Junior Software QA Engineer",
    "Freelance Security Tester Fintech",
    "Quality Assurance Engineer",
    "Software Tester",
    "Penetration Tester",
    "Manual Testing",

    // Tool & framework long-tail
    "Selenium Java Web Automation",
    "Selenium Automation Engineer",
    "Test Automation Java",
    "API Testing using Postman",
    "Postman API Testing Collections",
    "JMeter Load Testing Web Apps",
    "JMeter Performance Testing",
    "BurpSuite Penetration Testing Web Applications",
    "Burp Suite",
    "OWASP Top 10 Vulnerability Assessment",
    "OWASP Top 10",
    "Vulnerability Assessment",
    "Nmap",
    "Acunetix",

    // Domain & project-specific
    "Fintech Platform Functionality Testing",
    "Banking Website Security Audit QA",
    "Banking Software Testing",
    "FinTech QA",
    "EV Charging Mobile App Testing iOS Android",
    "EV Charging App Testing",
    "Dynamic Product Selector UI UX Testing",
    "E-commerce Checkout Cart Flow QA",
    "E-commerce QA",
    "ERP Testing",
    "RegTech",
    "Biometric Testing",
  ],
  socials: {
    github: "https://github.com/xamiron",
    linkedin: "https://www.linkedin.com/in/sabuj-kumar-modak/",
    email: "mailto:Sabuj.modak.qa@gmail.com",
  },
  ogImage: "/opengraph-image",
};

export type SiteConfig = typeof siteConfig;

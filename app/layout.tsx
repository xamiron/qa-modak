import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Loader from "./components/Loader";
import "./globals.css";
import { siteConfig, siteUrl } from "./seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.longTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "Technology",
  classification: "Personal Portfolio",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.shortTitle,
    description: siteConfig.description,
    firstName: "Sabuj Kumar",
    lastName: "Modak",
    username: "sabujmodak",
    gender: "male",
    // Next.js auto-injects /opengraph-image from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.shortTitle,
    description: siteConfig.shortDescription,
    creator: siteConfig.twitterHandle,
    // Next.js auto-injects /twitter-image from app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons (app/icon.tsx, app/apple-icon.tsx) and manifest (app/manifest.ts)
  // are auto-linked by Next.js file conventions — no manual declaration needed.

  // To verify ownership with search engines, set these env vars in Vercel:
  //   NEXT_PUBLIC_GOOGLE_VERIFICATION, NEXT_PUBLIC_YANDEX_VERIFICATION,
  //   NEXT_PUBLIC_BING_VERIFICATION
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } }
      : {}),
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070709" },
    { media: "(prefers-color-scheme: light)", color: "#070709" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

// JSON-LD structured data — Person + WebSite for rich results
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  givenName: "Sabuj Kumar",
  familyName: "Modak",
  jobTitle: siteConfig.role,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.countryCode,
  },
  worksFor: {
    "@type": "Organization",
    name: "Singularity Limited",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Information Technology & Sciences",
    },
  ],
  knowsAbout: [
    "Software Quality Assurance",
    "Manual Testing",
    "Test Automation",
    "Selenium WebDriver",
    "API Testing",
    "Postman",
    "JMeter Performance Testing",
    "Web Application Penetration Testing",
    "OWASP Top 10",
    "Burp Suite",
    "Vulnerability Assessment",
    "Agile Scrum",
  ],
  sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="author" content={siteConfig.name} />
        <meta name="geo.region" content="BD-13" />
        <meta name="geo.placename" content={siteConfig.location.city} />
        <meta name="DC.title" content={siteConfig.shortTitle} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="bg-background text-zinc-200 antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Loader />
        {children}
      </body>
    </html>
  );
}

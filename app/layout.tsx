import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Loader from "./components/Loader";
import "./globals.css";
import { pageSeo, siteConfig, siteUrl } from "./seo";

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
  ...pageSeo.home,
  title: {
    default: siteConfig.longTitle,
    template: `%s | ${siteConfig.name}`,
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  givenName: "Sabuj Kumar",
  familyName: "Modak",
  jobTitle: siteConfig.role,
  url: siteUrl,
  image: `${siteUrl}${siteConfig.ogImage}`,
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
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Information Technology & Sciences",
  },
  knowsAbout: [
    "Software Quality Assurance",
    "Functional Testing",
    "Regression Testing",
    "API Testing",
    "Performance Testing",
    "Selenium WebDriver",
    "Postman",
    "JMeter",
    "OWASP Top 10",
    "Web Application Penetration Testing",
    "Burp Suite",
    "Biometric Testing",
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
  author: { "@type": "Person", name: siteConfig.name },
};

const jsonLdProfile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: siteConfig.shortTitle,
  description: siteConfig.description,
  url: siteUrl,
  mainEntity: { "@type": "Person", name: siteConfig.name },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <meta name="author" content={siteConfig.name} />
        <meta name="geo.region" content="BD-13" />
        <meta name="geo.placename" content={siteConfig.location.city} />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />
        <meta name="DC.title" content={siteConfig.shortTitle} />
        <meta name="DC.description" content={siteConfig.description} />
        <meta name="DC.creator" content={siteConfig.name} />
        <meta name="DC.language" content="en" />
        <meta property="og:email" content={siteConfig.email} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfile) }}
        />
      </head>
      <body className="bg-background text-zinc-200 antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Loader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

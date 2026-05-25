import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Sabuj Kumar Modak — QA Engineer & Security Tester",
  description:
    "Software QA Engineer with 2+ years of experience in functional, API, security testing, and automation. Specializing in FinTech, RegTech, E-commerce, ERP, and EV Charging platforms.",
  keywords: [
    "Sabuj Kumar Modak",
    "QA Engineer",
    "Software Tester",
    "Security Testing",
    "Penetration Testing",
    "Selenium Automation",
    "API Testing",
    "Postman",
    "JMeter",
    "OWASP",
    "FinTech QA",
    "Bangladesh",
  ],
  authors: [{ name: "Sabuj Kumar Modak" }],
  creator: "Sabuj Kumar Modak",
  openGraph: {
    title: "Sabuj Kumar Modak — QA Engineer & Security Tester",
    description:
      "Software QA Engineer specializing in functional, API, security testing, and Selenium automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabuj Kumar Modak — QA Engineer & Security Tester",
    description:
      "Software QA Engineer specializing in functional, API, security testing, and Selenium automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-zinc-200 antialiased">
        {children}
      </body>
    </html>
  );
}

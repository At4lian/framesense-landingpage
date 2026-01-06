import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://framesense.app";
const canonicalUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
const seoTitle =
  "FrameSense - Automated Video QC for Editors (Black Frames, Freezes, Loudness)";
const seoDescription =
  "Scan exports for black frames, freezes, silence, loudness spikes and spec mismatches. Get a clear PASS/FAIL report with timecodes in minutes.";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: seoTitle,
    template: "%s | FrameSense",
  },
  description: seoDescription,
  keywords: [
    "video QC",
    "video quality control",
    "automated video QC",
    "video QC for editors",
    "video QC software",
    "post-production QC",
    "freelance video QC",
    "broadcast QC",
    "delivery spec checks",
    "video spec check",
    "black frame detection",
    "freeze frame detection",
    "silence detection",
    "LUFS checker",
    "EBU R128",
    "loudness compliance",
    "video export checks",
    "frame-accurate QC",
    "QC presets",
  ],
  applicationName: "FrameSense",
  authors: [{ name: "FrameSense", url: canonicalUrl }],
  creator: "FrameSense",
  publisher: "FrameSense",
  referrer: "origin-when-cross-origin",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: "/",
    siteName: "FrameSense",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description: seoDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${canonicalUrl}/#organization`,
      name: "FrameSense",
      url: canonicalUrl,
      description: seoDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${canonicalUrl}/#website`,
      url: canonicalUrl,
      name: "FrameSense",
      publisher: { "@id": `${canonicalUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${canonicalUrl}/#software`,
      name: "FrameSense",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: seoDescription,
      url: canonicalUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          // JSON-LD for search engines and rich results.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

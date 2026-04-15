import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amnr.bro.bd/"),
  title: {
    default: "Aminur Rahman — Enterprise software, built from business sense",
    template: "%s · Aminur Rahman",
  },
  description:
    "Full-stack developer and CTO from Bangladesh. Building enterprise SaaS systems — Alpha, CloudShadow, Sekkain, Aqren. A non-linear portfolio, held quietly for Hadi.",
  keywords: [
    "Aminur Rahman",
    "full-stack developer",
    "CTO",
    "Next.js",
    "TypeScript",
    "enterprise SaaS",
    "Bangladesh",
    "Aqren",
    "Sekkain",
    "CloudShadow",
  ],
  authors: [{ name: "Aminur Rahman" }],
  creator: "Aminur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amnr.bro.bd/",
    siteName: "Aminur Rahman",
    title: "Aminur Rahman — Enterprise software, built from business sense",
    description:
      "A non-linear portfolio. Full-stack developer and CTO. Wander between four rooms — pick up what you want, leave the rest.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 753,
        alt: "Aminur Rahman — Enterprise software, built from business sense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aminur Rahman — Enterprise software, built from business sense",
    description:
      "Full-stack developer and CTO. A non-linear portfolio, held quietly for Hadi.",
    images: ["/og.jpg"],
    creator: "@aminur",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f2ebde",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

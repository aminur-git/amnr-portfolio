import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amnr.bro.bd/"),
  title: {
    default: "Aminur Rahman — CTO at Aqren Dev",
    template: "%s · Aminur Rahman",
  },
  description:
    "I’m Aminur Rahman, CTO of Aqren Dev. I lead teams and build software around the business problems people need solved. Explore my work across SaaS, operations, and client products.",
  keywords: [
    "Aminur Rahman",
    "Aqren Dev",
    "full-stack developer",
    "CTO",
    "Next.js",
    "TypeScript",
    "enterprise SaaS",
    "Bangladesh",
    "Alpha",
    "Sekkain",
    "The Cloud Shadow LLC",
    "Fieldflo Automation",
    "The Quran Circle",
  ],
  authors: [{ name: "Aminur Rahman" }],
  creator: "Aminur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amnr.bro.bd/",
    siteName: "Aminur Rahman",
    title: "Aminur Rahman — CTO at Aqren Dev",
    description:
      "I’m Aminur Rahman, CTO of Aqren Dev. I lead teams and build software around real business problems.",
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
    title: "Aminur Rahman — CTO at Aqren Dev",
    description:
      "I’m Aminur Rahman, CTO of Aqren Dev. Explore the products I’ve helped build and the problems behind them.",
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

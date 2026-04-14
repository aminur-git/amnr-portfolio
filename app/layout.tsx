import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aminur Rahman — Field notes, work, and a good cup of chai",
  description:
    "A non-linear portfolio by Aminur Rahman. Builder, tinkerer, occasional philosopher.",
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

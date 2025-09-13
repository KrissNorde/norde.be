import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://norde.be"),
  title: {
    default: "Norde | Belgique",
    template: "%s | Norde",
  },
  description:
    "Agence vidéo belge: YouTube, storytelling pub, mariage, documentaire, 3D/VFX.",
  keywords: [
    "agence vidéo",
    "Belgique",
    "YouTube",
    "mariage",
    "documentaire",
    "3D",
    "VFX",
  ],
  openGraph: { siteName: "Norde", locale: "fr_BE" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-BE">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Orbitron, DM_Sans, Share_Tech_Mono } from "next/font/google";
import { SITE_URL } from "@/data/site";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-orbitron",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono-tech",
  display: "swap",
});

const title = "R36S en Caballito | Consola Retro Portátil — TecnoFan";
const description =
  "Consola retro R36S violeta transparente con pantalla IPS 3.5”, batería de 3500 mAh y más de 15 sistemas emulados (PS1, NES, SNES, SEGA, GBA y más). Retiro en Caballito o envío rápido a CABA y alrededores.";
const ogImage = `${SITE_URL}/images/violeta_transparente_portada.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "R36S",
    "consola retro",
    "consola retro Caballito",
    "consola retro Buenos Aires",
    "emuladores portátil",
    "R36S Argentina",
    "TecnoFan",
    "handheld retro gaming",
  ],
  authors: [{ name: "TecnoFan Caballito" }],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo-tecnofan.png",
    apple: "/images/logo-tecnofan.png",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "R36S Caballito",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: ogImage,
        width: 1000,
        height: 1000,
        alt: "Consola retro R36S violeta transparente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#09080d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${orbitron.variable} ${dmSans.variable} ${shareTechMono.variable}`}
    >
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}

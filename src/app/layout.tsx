import type { Metadata } from "next";
import { Orbitron, DM_Sans, Share_Tech_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "R36S en Caballito | Consola Retro Portátil — TecnoFan",
  description:
    "Consola retro R36S con pantalla IPS 3.5”, batería de 3500 mAh y más de 15 sistemas emulados (PS1, NES, SNES, SEGA, GBA y más). Retiro en Caballito o envío rápido a CABA y alrededores.",
  keywords: [
    "R36S",
    "consola retro",
    "consola retro Caballito",
    "emuladores portátil",
    "TecnoFan",
    "Buenos Aires",
  ],
  authors: [{ name: "TecnoFan Caballito" }],
  icons: {
    icon: "/images/logo-tecnofan.png",
    apple: "/images/logo-tecnofan.png",
  },
  openGraph: {
    title: "R36S en Caballito | Consola Retro Portátil",
    description:
      "Reviví los clásicos con la R36S: PS1, NES, SNES, SEGA, GBA y más de 15 sistemas. Retiro en Caballito o envío rápido a CABA.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${orbitron.variable} ${dmSans.variable} ${shareTechMono.variable}`}
    >
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}

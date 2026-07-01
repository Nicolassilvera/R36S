import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/StructuredData";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { Specs } from "@/components/sections/Specs";
import { Emulators } from "@/components/sections/Emulators";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { AboutUs } from "@/components/sections/AboutUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <PromoBanner />
        <Specs />
        <Emulators />
        <Features />
        <Gallery />
        <Faq />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

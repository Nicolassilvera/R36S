import { Timer } from "lucide-react";
import { waMessages } from "@/data/site";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pt-24 pb-16 overflow-hidden"
    >
      <HeroSlideshow />
      {/* degradado concentrado abajo, donde va el texto, para que las fotos se vean arriba */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-black/40" />

      <div className="absolute top-28 right-[4%] flex items-center gap-2 font-mono text-[0.68rem] text-accent tracking-[2px] border border-accent/30 bg-black/40 backdrop-blur-sm px-4 py-2 z-10 clip-cartridge">
        <Timer size={14} strokeWidth={2} />
        OFERTA POR TIEMPO LIMITADO
      </div>

      <div className="relative z-10">
        <p className="font-mono text-[0.75rem] text-accent tracking-[3px] uppercase mb-4">
          // Consola retro portátil
        </p>
        <h1 className="font-display font-bold text-[clamp(2.6rem,9vw,6.2rem)] leading-[1.02] uppercase drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
          Reviví los clásicos
          <br />
          <span className="text-accent">con la R36S</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-[1.7] text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          Pantalla IPS 3.5” HD, batería de 3500 mAh y más de 15 sistemas
          emulados: PS1, NES, SNES, SEGA, Game Boy, GBA, GBC, NEOGEO, M.A.M.E,
          Atari, N64, Nintendo DS, PSP, DreamCast y PC-Engine. Todo en una
          consola de bolsillo.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <WhatsAppButton message={waMessages.comprar}>
            Comprar por WhatsApp
          </WhatsAppButton>
          <LinkButton href="#specs" variant="outline">
            Ver precio y ficha técnica
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

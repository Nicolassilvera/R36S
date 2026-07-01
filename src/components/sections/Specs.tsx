import { waMessages } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { PriceBlock } from "@/components/ui/PriceBlock";
import { MediaCarousel } from "@/components/ui/MediaCarousel";

const specs = [
  { key: "Pantalla", val: "IPS 3.5” HD" },
  { key: "Batería", val: "3500 mAh / USB-C" },
  { key: "Controles", val: "Doble joystick + D-pad" },
  { key: "Almacenamiento", val: "microSD expandible" },
  { key: "Sistemas emulados", val: "15+ (ver lista abajo)" },
  { key: "Color", val: "Violeta transparente — único disponible" },
];

const mediaSlides = [
  {
    type: "video" as const,
    src: "/images/r36s-demo.mp4",
    poster: "/images/violeta_transparente_portada.png",
    alt: "Video demo de la consola R36S violeta transparente",
  },
  {
    type: "image" as const,
    src: "/images/violeta_transparente_portada.png",
    alt: "Consola R36S violeta transparente sobre escritorio",
  },
];

export function Specs() {
  return (
    <section id="specs" className="bg-dark px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <MediaCarousel slides={mediaSlides} />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-[0.72rem] text-accent tracking-[3px] uppercase mb-3">
            // Ficha técnica
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] uppercase leading-[1] mb-6">
            R36S
          </h2>

          <div className="grid grid-cols-1 divide-y divide-border border border-border bg-panel mb-8">
            {specs.map((s) => (
              <div
                key={s.key}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <span className="text-[0.7rem] tracking-[1px] uppercase text-muted">
                  {s.key}
                </span>
                <span className="text-sm font-medium text-right">
                  {s.val}
                </span>
              </div>
            ))}
          </div>

          <PriceBlock ctaMessage={waMessages.specs} />
        </Reveal>
      </div>
    </section>
  );
}

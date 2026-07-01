import { galleryPhotos } from "@/data/gallery";
import { SafeImage } from "@/components/ui/SafeImage";
import { Reveal } from "@/components/ui/Reveal";
import { PriceBlock } from "@/components/ui/PriceBlock";
import { waMessages } from "@/data/site";

export function Gallery() {
  return (
    <section id="galeria" className="bg-black px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="font-mono text-[0.72rem] text-accent tracking-[3px] uppercase mb-3">
              // Sin vueltas
            </p>
            <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] uppercase">
              Stock real
            </h2>
            <p className="text-muted text-[0.95rem] mt-2 max-w-md">
              Fotos reales de la unidad disponible en Caballito. Lo que ves es
              lo que te llevás.
            </p>
          </Reveal>
          <div className="flex items-center gap-2 font-mono text-[0.7rem] text-muted tracking-wide">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            FOTOS SIN FILTRO
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {galleryPhotos.map((photo) => (
            <Reveal
              key={photo.src}
              className={photo.featured ? "sm:col-span-2" : ""}
            >
              <div
                className={`group relative overflow-hidden border border-border bg-panel ${
                  photo.featured ? "aspect-[16/9]" : "aspect-square"
                }`}
              >
                <SafeImage
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover grayscale-[15%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 p-5 text-sm text-white/90 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <PriceBlock ctaMessage={waMessages.comprar} align="center" />
        </Reveal>
      </div>
    </section>
  );
}

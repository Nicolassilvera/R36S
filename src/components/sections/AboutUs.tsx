import { site, waMessages } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LinkButton } from "@/components/ui/LinkButton";

const stats = [
  { num: "15+", label: "Sistemas emulados" },
  { num: "3500", label: "mAh de batería" },
  { num: "3.5”", label: "Pantalla IPS" },
  { num: "Hoy", label: "Retiro en Caballito" },
];

export function AboutUs() {
  return (
    <section id="quienes-somos" className="bg-dark px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="font-mono text-[0.72rem] text-accent tracking-[3px] uppercase mb-3">
            // Quiénes somos
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] uppercase mb-6">
            TecnoFan
            <br />
            <span className="text-accent">Caballito</span>
          </h2>
          <p className="text-muted leading-[1.7] text-[0.95rem] mb-5">
            Somos TecnoFan, un comercio de electrónica con local físico en
            Caballito, Buenos Aires. Sumamos la línea de consolas retro R36S
            para los que quieren revivir los clásicos sin vueltas: stock real,
            atención directa y retiro en el local el mismo día.
          </p>
          <p className="text-muted leading-[1.7] text-[0.95rem] mb-8">
            Nada de depósitos a ciegas ni esperar semanas: nos ves, nos
            visitás y te llevás la consola probada en mano.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1.5 shrink-0">
                <img
                  src="/images/logo-tecnofan.png"
                  alt="Logo TecnoFan"
                  className="w-11 h-11 object-contain"
                />
              </div>
              <span className="text-[0.8rem] font-medium text-white/90">
                TecnoFan Caballito
              </span>
            </div>

            <span className="text-muted text-xs">también fabricamos</span>

            <a
              href="https://balanzas-caballito.vercel.app/"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/logo-balanzascaballito.png"
                alt="Logo BalanzasCaballito"
                className="w-11 h-11 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
              />
              <span className="text-[0.8rem] font-medium text-white/90 underline decoration-border underline-offset-4">
                Balanzas Caballito
              </span>
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <LinkButton href="#contacto">Contactarnos</LinkButton>
            <WhatsAppButton message={waMessages.retiro} variant="outline">
              Coordinar retiro
            </WhatsAppButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-panel p-8 text-center">
                <div className="font-display text-[3rem] text-accent leading-none">
                  {s.num}
                </div>
                <div className="text-[0.72rem] tracking-[2px] uppercase text-muted mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="max-w-5xl mx-auto mt-16 text-center">
        <p className="font-mono text-[0.72rem] text-accent tracking-[2px] uppercase mb-4">
          // Ubicación de nuestro local
        </p>
        <div className="w-full h-[400px] border border-border overflow-hidden rounded-sm">
          <iframe
            src={site.mapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(90%) contrast(90%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación TecnoFan Caballito en Google Maps"
          />
        </div>
      </Reveal>
    </section>
  );
}

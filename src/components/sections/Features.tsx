import { BatteryCharging, Gamepad2, Tv, Save, type LucideIcon } from "lucide-react";
import { features } from "@/data/features";
import { SafeImage } from "@/components/ui/SafeImage";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<(typeof features)[number]["icon"], LucideIcon> = {
  battery: BatteryCharging,
  gamepad: Gamepad2,
  screen: Tv,
  storage: Save,
};

export function Features() {
  return (
    <section className="bg-black px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal className="hidden md:block relative aspect-square">
          <div className="absolute inset-0 border border-border rotate-[15deg]" />
          <div className="absolute inset-[10%] border border-accent/20 -rotate-[5deg]" />
          <SafeImage
            src="/images/r36s-violeta-manos.jpg"
            alt="Jugando con la consola retro R36S violeta transparente en la mano"
            className="absolute inset-[6%] w-[88%] h-[88%] object-cover border border-border"
          />
        </Reveal>

        <Reveal>
          <p className="font-mono text-[0.72rem] text-accent tracking-[3px] uppercase mb-3">
            // Por qué elegirla
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] uppercase mb-10">
            Ventajas
            <br />
            que importan
          </h2>

          <div className="flex flex-col gap-8">
            {features.map((f) => {
              const Icon = icons[f.icon];
              return (
              <div key={f.title} className="flex gap-5 items-start">
                <div className="w-[42px] h-[42px] shrink-0 bg-accent/8 border border-accent/20 flex items-center justify-center text-accent">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[0.95rem] font-bold mb-1">{f.title}</h3>
                  <p className="text-[0.85rem] text-muted leading-[1.6]">
                    {f.desc}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

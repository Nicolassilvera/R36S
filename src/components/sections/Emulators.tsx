import { emulatorGroups } from "@/data/emulators";
import { Reveal } from "@/components/ui/Reveal";

export function Emulators() {
  return (
    <section id="emuladores" className="bg-black px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-[0.72rem] text-accent tracking-[3px] uppercase mb-3">
            // Todo lo que trae adentro
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] uppercase mb-4">
            Sistemas emulados
          </h2>
          <p className="text-muted max-w-xl leading-[1.7] text-[0.95rem] mb-10">
            Llega lista para jugar, sin instalar nada. Cargá tus partidas y
            arrancá.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {emulatorGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08} className="bg-panel p-6">
              <h3 className="font-mono text-[0.7rem] text-accent tracking-[2px] uppercase mb-4">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.systems.map((sys) => (
                  <li
                    key={sys}
                    className="text-[0.72rem] font-medium px-2.5 py-1 border border-border rounded-sm text-white/90"
                  >
                    {sys}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

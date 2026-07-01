"use client";

import { useState } from "react";
import { Gift, X } from "lucide-react";
import { waMessages, promoDiaDelNino, formatARS } from "@/data/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <section className="bg-black px-6 md:px-10 py-10">
      <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-orange-500/15 via-dark to-black border border-orange-500/40 clip-cartridge px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-6">
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Cerrar anuncio"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-muted hover:text-orange-400 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="w-14 h-14 shrink-0 bg-orange-500/15 border border-orange-500/40 flex items-center justify-center text-orange-400">
          <Gift size={28} strokeWidth={1.5} />
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="font-mono text-[0.7rem] text-orange-400 tracking-[2px] uppercase mb-1.5">
            // Se viene el Día del Niño
          </p>
          <h3 className="font-display font-bold text-xl md:text-2xl uppercase leading-tight mb-1.5">
            Preparate con tiempo y llevá a buen precio
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            Llevate 2 R36S violeta transparente a{" "}
            <span className="text-orange-400 font-semibold">
              {formatARS(promoDiaDelNino.unidad)} c/u
            </span>
            , pagando en efectivo y retirando en Caballito.
          </p>
        </div>

        <WhatsAppButton
          message={waMessages.promoDiaDelNino}
          className="shrink-0 w-fit bg-orange-500 hover:bg-orange-600"
        >
          Quiero la promo
        </WhatsAppButton>
      </div>
    </section>
  );
}

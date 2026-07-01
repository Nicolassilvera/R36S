"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-panel px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-[0.72rem] text-accent tracking-[3px] uppercase mb-3">
            // Preguntas frecuentes
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] uppercase">
            FAQ
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border mt-12">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="bg-panel overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-7 text-left hover:bg-accent/4 transition-colors"
                >
                  <span className="font-semibold text-[0.9rem]">{item.q}</span>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center font-mono text-accent text-lg transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <p className="px-7 pb-7 pt-3 text-[0.87rem] text-muted leading-[1.7] border-t border-border">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

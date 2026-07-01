"use client";

import { useState } from "react";
import { waLink, waMessages } from "@/data/site";

const links = [
  { href: "#specs", label: "Ficha técnica" },
  { href: "#emuladores", label: "Emuladores" },
  { href: "#galeria", label: "Stock real" },
  { href: "#faq", label: "FAQ" },
  { href: "#quienes-somos", label: "Quiénes somos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-4 bg-black/92 backdrop-blur-md border-b border-border">
        <a href="#inicio" className="font-display text-xl tracking-[3px] text-white">
          R36S<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.78rem] font-medium tracking-[2px] uppercase text-muted hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={waLink(waMessages.comprar)}
              target="_blank"
              rel="noopener"
              className="bg-accent text-white font-bold px-5 py-2 clip-cartridge hover:bg-accent2 transition-colors"
            >
              Comprar
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menú"
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-[99] bg-black/98 flex-col items-center justify-center gap-10 ${
          open ? "flex" : "hidden"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-6 right-7 text-2xl font-mono text-white"
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-4xl tracking-[3px] text-white hover:text-accent transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href={waLink(waMessages.comprar)}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          className="font-display text-4xl tracking-[3px] text-accent"
        >
          Comprar
        </a>
      </div>
    </>
  );
}

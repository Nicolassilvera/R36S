export function Footer() {
  return (
    <footer className="bg-black border-t border-border px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div className="font-display text-lg tracking-[3px] text-white">
        R36S<span className="text-accent">.</span>
        <span className="block md:inline font-body text-[0.7rem] tracking-[1px] text-muted normal-case font-normal md:ml-2">
          un producto de TecnoFan Caballito
        </span>
      </div>

      <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
        {[
          { href: "#specs", label: "Ficha técnica" },
          { href: "#faq", label: "FAQ" },
          { href: "#quienes-somos", label: "Quiénes somos" },
          { href: "#contacto", label: "Contacto" },
        ].map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[0.75rem] text-muted tracking-[1px] uppercase hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-[0.75rem] text-muted tracking-[1px]">
        © 2026 R36S Caballito. Todos los derechos reservados.
      </p>
    </footer>
  );
}

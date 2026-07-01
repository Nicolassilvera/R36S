"use client";

import { useState } from "react";
import { MapPin, MessageCircle, Mail, type LucideIcon } from "lucide-react";
import { site, waLink, waMessages, WHATSAPP_NUMBER } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Contact() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [mensaje, setMensaje] = useState("");

  function sendViaWA(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hola! Me contacto desde la web de la R36S violeta transparente.\n\nNombre: ${
      nombre || "(sin nombre)"
    }\nTeléfono: ${telefono || "(sin teléfono)"}\nMétodo de pago: ${
      metodoPago || "No especificado"
    }\nMensaje: ${mensaje || "(sin mensaje)"}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <section id="contacto" className="bg-dark px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-[0.72rem] text-accent tracking-[3px] uppercase mb-3">
            // Contacto
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] uppercase mb-4">
            Hablemos
          </h2>
          <p className="text-muted text-[0.95rem] mb-12 max-w-md">
            Estamos en Caballito, Buenos Aires. Respondemos por WhatsApp y
            email.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal className="flex flex-col gap-9">
            <ContactItem icon={MapPin} label="Dirección">
              <a
                href={site.mapsShortLink}
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                {site.address}
              </a>
            </ContactItem>
            <ContactItem icon={MessageCircle} label="WhatsApp">
              <a
                href={waLink(waMessages.consulta)}
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                +54 9 11 4059-1621
              </a>
            </ContactItem>
            <ContactItem icon={Mail} label="Email">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-accent transition-colors"
              >
                {site.email}
              </a>
            </ContactItem>

            <WhatsAppButton message={waMessages.consulta} variant="whatsapp" className="w-fit">
              Consultar por WhatsApp
            </WhatsAppButton>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={sendViaWA} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre" htmlFor="nombre">
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="bg-panel border border-border text-white px-4 py-3.5 text-sm rounded-sm outline-none focus:border-accent transition-colors"
                  />
                </Field>
                <Field label="Teléfono" htmlFor="telefono">
                  <input
                    id="telefono"
                    type="tel"
                    placeholder="Tu número"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="bg-panel border border-border text-white px-4 py-3.5 text-sm rounded-sm outline-none focus:border-accent transition-colors"
                  />
                </Field>
              </div>

              <Field label="Método de pago" htmlFor="metodoPago">
                <select
                  id="metodoPago"
                  value={metodoPago}
                  onChange={(e) => setMetodoPago(e.target.value)}
                  className="bg-panel border border-border text-white px-4 py-3.5 text-sm rounded-sm outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="Transferencia ($60.000)">
                    Transferencia ($60.000)
                  </option>
                  <option value="Efectivo ($58.000)">Efectivo ($58.000)</option>
                  <option value="Consulta general">Consulta general</option>
                </select>
              </Field>

              <Field label="Mensaje" htmlFor="mensaje">
                <textarea
                  id="mensaje"
                  placeholder="¿En qué te podemos ayudar?"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="bg-panel border border-border text-white px-4 py-3.5 text-sm rounded-sm outline-none focus:border-accent transition-colors min-h-[110px] resize-y"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-accent to-accent2 text-white font-bold text-[0.85rem] tracking-[2px] uppercase px-8 py-4 clip-cartridge transition-all hover:opacity-90 hover:-translate-y-0.5"
              >
                Enviar por WhatsApp →
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-11 h-11 shrink-0 bg-accent/8 border border-accent/20 flex items-center justify-center text-accent">
        <Icon size={18} strokeWidth={2} />
      </div>
      <div>
        <span className="block text-[0.7rem] tracking-[2px] uppercase text-muted mb-1">
          {label}
        </span>
        <p className="text-[0.95rem] font-medium">{children}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-[0.7rem] tracking-[2px] uppercase text-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

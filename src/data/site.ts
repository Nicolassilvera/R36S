export const WHATSAPP_NUMBER = "5491140591621";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  comprar:
    "Hola! Quiero comprar la R36S violeta transparente. Vi la oferta en la web ($60.000 transferencia / $58.000 efectivo).",
  specs: "Hola! Vi la ficha técnica de la R36S en la web y quiero más información.",
  retiro: "Hola! Quiero coordinar el retiro de la R36S en el local de Caballito.",
  consulta: "Hola! Tengo una consulta sobre la R36S.",
  promoDiaDelNino:
    "Hola! Quiero aprovechar la promo del Día del Niño: 2 R36S violeta transparente a $56.000 c/u en efectivo, retirando en Caballito.",
};

export const price = {
  original: 68000,
  transferencia: 60000,
  efectivo: 58000,
};

export const promoDiaDelNino = {
  unidad: 56000,
};

export function formatARS(value: number) {
  return `$${value.toLocaleString("es-AR")}`;
}

const mapsQuery = "TecnoFan Caballito, Acoyte 236, Caballito, CABA";

export const site = {
  name: "R36S Caballito",
  parent: "TecnoFan",
  address: "Acoyte 236, Caballito, CABA",
  mapsShortLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
  mapsEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`,
  email: "tecnofanelectronic@gmail.com",
};

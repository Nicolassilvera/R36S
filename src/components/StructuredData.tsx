import { site, price, SITE_URL, WHATSAPP_NUMBER } from "@/data/site";
import { faqItems } from "@/data/faq";

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: "TecnoFan Caballito",
    image: `${SITE_URL}/images/violeta_transparente_portada.png`,
    url: SITE_URL,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Caballito, Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: ["https://balanzas-caballito.vercel.app/"],
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Consola Retro R36S",
    description:
      "Consola retro portátil R36S violeta transparente, pantalla IPS 3.5” HD, batería de 3500 mAh y más de 15 sistemas emulados.",
    image: `${SITE_URL}/images/violeta_transparente_portada.png`,
    brand: { "@type": "Brand", name: "TecnoFan" },
    offers: {
      "@type": "Offer",
      url: SITE_URL,
      priceCurrency: "ARS",
      price: price.efectivo,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      areaServed: "AR",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

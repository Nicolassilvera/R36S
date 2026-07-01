"use client";

import { useEffect, useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";

const slides = [
  "/images/violeta_transparente_portada.png",
  "/images/r36s-violeta-frontal.png",
  "/images/r36s-violeta-manos.jpg",
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => (
        <SafeImage
          key={src}
          src={src}
          alt="Consola retro R36S violeta transparente"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

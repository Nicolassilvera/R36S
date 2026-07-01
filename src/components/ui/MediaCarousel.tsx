"use client";

import { useRef, useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";

type Slide =
  | { type: "video"; src: string; poster: string; alt: string }
  | { type: "image"; src: string; alt: string };

export function MediaCarousel({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function goTo(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: clamped * track.offsetWidth, behavior: "smooth" });
    setIndex(clamped);
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    setIndex(Math.round(track.scrollLeft / track.offsetWidth));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full shrink-0 snap-center aspect-square border border-border bg-panel"
            >
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  poster={slide.poster}
                  controls
                  preload="none"
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <SafeImage
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Anterior"
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-black/60 border border-border text-white hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === slides.length - 1}
          aria-label="Siguiente"
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-black/60 border border-border text-white hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          →
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`h-1.5 transition-all ${
              i === index ? "w-8 bg-accent" : "w-3 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

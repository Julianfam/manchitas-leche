"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";

export type HeroSlide = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaAction: "product" | "whatsapp" | "cheese";
};

type HeroCarouselProps = {
  slides: HeroSlide[];
  onWhatsApp: () => void;
};

const AUTOPLAY_MS = 6000;

export default function HeroCarousel({ slides, onWhatsApp }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const total = slides.length;
      setActiveIndex(((index % total) + total) % total);
    },
    [slides.length]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, slides.length]);

  const handleCta = (action: HeroSlide["ctaAction"]) => {
    if (action === "product") {
      document.getElementById("producto")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (action === "cheese") {
      document.getElementById("queso")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    onWhatsApp();
  };

  return (
    <section
      className="pt-20 pb-0 md:pt-24 bg-gradient-to-b from-[#14532d] to-[#166534] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Banners promocionales"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <article
                key={slide.id}
                className="w-full flex-shrink-0"
                aria-hidden={index !== activeIndex}
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${slides.length}`}
              >
                <div className="grid md:grid-cols-2 gap-10 items-center py-10 md:py-14 min-h-[420px] md:min-h-[480px]">
                  <div className="order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold tracking-[2px] px-4 py-1.5 rounded-full mb-6">
                      {slide.badge}
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-white/90 mb-3">{slide.subtitle}</p>
                    <p className="max-w-md text-white/80 text-lg mb-8">{slide.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleCta(slide.ctaAction)}
                        className="bg-white text-[#14532d] font-semibold px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#fefce8] transition-all text-lg"
                      >
                        {slide.ctaLabel} <ArrowRight className="w-5 h-5" />
                      </button>
                      <button onClick={onWhatsApp} className="btn-whatsapp text-lg px-10 py-4">
                        <Phone className="w-5 h-5" /> Pedir por WhatsApp
                      </button>
                    </div>
                  </div>

                  <div className="order-1 md:order-2 relative">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 text-[#14532d] shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Banner anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 text-[#14532d] shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Banner siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className="flex justify-center gap-2 pb-8"
              role="tablist"
              aria-label="Paginación de banners"
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Ir al banner ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
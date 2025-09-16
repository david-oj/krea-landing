"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import heroImage1 from "@/assets/images/kreaHero1.webp";
import heroImage2 from "@/assets/images/kreaHero2.webp";
import heroImage3 from "@/assets/images/kreaHero3.webp";
import heroImage4 from "@/assets/images/kreaHero4.webp";
import heroImage5 from "@/assets/images/kreaHero5.webp";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

interface Herocarousel {
  title: string;
  description: string;
  image: string;
  cta?: string;
}

const Herocarousels: Herocarousel[] = [
  {
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    image: heroImage1.src,
    cta: "Try Wan 2.2",
  },
  {
    title: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    image: heroImage2.src,
    cta: "Try FLUX.1",
  },
  {
    title: "Real-Time Video Generation",
    description:
      "Announcing Realtime Video. Generate videos in real-time. Fully frame-consistent, controllable video clips.",
    image: heroImage3.src,
    cta: "Try Real-Time",
  },
  {
    title: "Seedream 4.0",
    description:
      "Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance.",
    image: heroImage4.src,
    cta: "Try Seedream 4.0",
  },

  {
    title: "Introducing Motion Transfer",
    description:
      "Bring motion into your characters. Upload any image, record a video of yourself and make your characters smile, talk and dance. Powered by Runway Act 2",
    image: heroImage5.src,
    cta: "Try Motion Transfer",
  },
];

const Hero = () => {
  // Autoplay plugin instance (useRef to keep stable)
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false, align: "start" },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Sync state when embla initializes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // clickable dot -> scrollTo
  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Pause autoplay on mouse enter/drag start, resume on leave
  useEffect(() => {
    if (!emblaApi) return;
    const stop = () =>
      autoplay.current && autoplay.current.stop && autoplay.current.stop();
    const play = () =>
      autoplay.current && autoplay.current.reset && autoplay.current.reset();

    emblaApi.rootNode()?.addEventListener("mouseenter", stop);
    emblaApi.rootNode()?.addEventListener("mouseleave", play);
    emblaApi.on("pointerDown", stop);
    emblaApi.on("pointerUp", play);

    return () => {
      emblaApi.rootNode()?.removeEventListener("mouseenter", stop);
      emblaApi.rootNode()?.removeEventListener("mouseleave", play);
      emblaApi.off("pointerDown", stop);
      emblaApi.off("pointerUp", play);
    };
  }, [emblaApi]);

  return (
    <section className="section">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-12  ">
          {Herocarousels.map((carousel, idx) => (
            // <div className="flex-1 max-md:min-w-full" key={idx}>
              <div key={idx}
                className={`flex-none max-md:min-w-full ${
                  Herocarousels.length - 1 === idx ? "mr-4 md:mr-12" : ""
                } relative xl:w-[1000px] lg:w-[800px] md:w-[600px] w-full xl:h-[480px] lg:h-[450px] md:h-[380px] h-[300px] rounded-3xl overflow-hidden`}
              >
                <Image
                  src={carousel.image}
                  alt={carousel.title}
                  width={800}
                  height={500}
                  priority
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-black/70">
                  <div className="flex flex-col justify-end h-full p-8 text-white gap-2">
                    <h2 className="text-xl md:text-3xl font-medium">{carousel.title}</h2>
                    <div className="flex justify-between items-center">
                      <p className="max-w-md max-md:text-sm">{carousel.description}</p>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="rounded-full "
                      >
                        {carousel.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            // </div>
          ))}
        </div>
      </div>

      {/* Dots (indicators) */}
      <div className="flex items-center justify-center gap-2 md:gap-4 mt-4">
        {scrollSnaps.map((_, idx) => {
          const isActive = idx === selectedIndex;
          return (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 w-2 rounded-full transition-transform duration-200 ${
                isActive ? "scale-125 bg-foreground" : "bg-muted-foreground/40"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;

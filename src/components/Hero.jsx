"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../assets/01.webp";
import img2 from "../assets/02.webp";
import img3 from "../assets/03.webp";

const slides = [
  {
    title: "Fila Fratello",
    subtitle: "Excellence in Generic & Specialty Medicines",
    description: "Leading the way in high-quality pharmaceutical innovation, delivering effective healthcare solutions across India with global standards.",
    image: img1,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    title: "Global Innovation",
    subtitle: "Innovating for a Healthier Tomorrow",
    description: "Consolidating and enhancing the world of pharmaceutical care through science-backed formulations and ethical practices for global impact.",
    image: img3,
    accent: "from-indigo-600 to-purple-600",
  },
  {
    title: "India's Health Partner",
    subtitle: "Trusted Healthcare Solutions India",
    description: "Empowering breakthroughs with cutting-edge technology and a commitment to high-standard pharmaceutical products for a better future.",
    image: img2,
    accent: "from-blue-500 to-cyan-500",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] min-h-[500px] md:min-h-[600px] overflow-hidden bg-slate-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.subtitle}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from--950/80 via--950/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-6">
                <span className={`h-[2px] w-12 bg-gradient-to-r ${slide.accent}`}></span>
                <span className="text-sm  font-semibold tracking-wider text-black -400 uppercase">
                  {slide.title}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold text-blue-00 mb-6 leading-[1.1]">
                {slide.subtitle.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? "block" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-slate-900 mb-10 max-w-xl leading-relaxed font-normal">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg- black/10 hover:bg-black/20 text- backdrop-blur-md rounded-full font-semibold transition-all border border-black/20 hover:scale-105 active:scale-95"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? "w-10 bg-blue-500" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

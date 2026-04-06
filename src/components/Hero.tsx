"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    titleTop: "Technology that",
    highlight: "Enables",
    sub: "efficient global freight solutions",
    desc: "For over two decades, we have been delivering world-class integrated supply chain and long-term sustainable logistics solutions to our clients across the globe.",
    image: "/img/hero/hero-1.jpg",
    btnColor: "#ff9100",
  },
  {
    id: 2,
    titleTop: "Excellence in",
    highlight: "Air Freight",
    sub: "Fast and reliable sky courier solutions",
    desc: "Our premium air freight services ensure your urgent cargo reaches its global destination with maximum speed and complete safety.",
    image: "/img/hero/hero-2.jpg",
    btnColor: "#ff9100",
  },
  {
    id: 3,
    titleTop: "Global Reach,",
    highlight: "Sea Freight",
    sub: "Reliable maritime transport network",
    desc: "Connecting continents through efficient sea freight consolidation and dedicated maritime logistics solutions tailoring to your business needs.",
    image: "/img/hero/hero-3.jpg",
    btnColor: "#ff9100",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const smoothTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="relative h-[100dvh] lg:h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Background Slides */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          />
          {/* Overlay to match image look */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content - LEFT ALIGNED as per image */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 lg:px-24">
        <div className="max-w-4xl pt-0 md:pt-20 flex flex-col items-start text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={smoothTransition}
              className="flex flex-col items-start"
            >
              {/* Main Headline Group */}
              <div className="flex flex-col gap-3 mb-5">
                <h2 className="text-white text-3xl md:text-4xl font-light tracking-tight">
                  {slides[current].titleTop}
                </h2>
                <h1 className="text-white text-[2.8rem] md:text-6xl font-bold md:font-black leading-[0.85] tracking-tight">
                  {slides[current].highlight}
                </h1>
              </div>

              {/* Sub-headline */}
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-6 max-w-4xl leading-tight">
                {slides[current].sub}
              </h3>

              {/* Description Body */}
              <p className="text-white text-sm md:text-base max-w-2xl leading-relaxed mb-8 md:mb-12 font-normal">
                {slides[current].desc}
              </p>

              {/* Learn More Button - ORANGE as per image */}
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-4 bg-primary text-white pl-6 pr-2 py-2 rounded-full transition-all"
              >
                <span className="text-base font-semibold tracking-tight whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
                  Let&apos;s talk logistics
                </span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                  <ArrowRight className="w-5 h-5 text-[#003eb7] absolute transition-all duration-500 group-hover:translate-x-10" />
                  <ArrowRight className="w-5 h-5 text-[#003eb7] absolute -translate-x-10 transition-all duration-500 group-hover:translate-x-0" />
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Indicators - Vertical Right side as per image */}
      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group relative flex items-center justify-center p-2"
          >
            <div
              className={`w-[2px] h-4 transition-all duration-500 ${
                current === i
                  ? "bg-white h-10 w-[3px]"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
            {current === i && (
              <div className="absolute right-8 text-[10px] font-bold text-white uppercase tracking-widest pointer-events-none opacity-50">
                0{i + 1}
              </div>
            )}
          </button>
        ))}
      </div>
      {/* Services Auto-Slider - Bottom Right */}
      <div className="absolute bottom-12 left-0 right-0 lg:left-auto lg:right-16 z-30 flex flex-col items-end">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1 }}
          className="text-white text-[10px] font-bold uppercase tracking-[0.5em] mb-4 mr-6 lg:mr-1"
        >
          Our Services
        </motion.span>

        <div className="w-full lg:w-[600px] overflow-hidden mask-linear-fade [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-4 py-2 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30, // Slightly slower for better readability
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[
              "Shipping",
              "Air Freight",
              "Land Transportation",
              "Customs Clearing",
              "International Moving",
              "Business way Freight",
              "Shipping",
              "Air Freight",
              "Land Transportation",
              "Customs Clearing",
              "International Moving",
              "Business way Freight",
            ].map((service, i) => (
              <div
                key={i}
                className="px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg flex items-center justify-center min-w-auto hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer group shadow-xl"
              >
                <span className="text-white/60 group-hover:text-white text-[10px] md:text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap">
                  {service}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

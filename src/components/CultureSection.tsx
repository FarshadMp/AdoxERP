"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, Handshake, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cultureItems = [
  {
    title: "Our Culture",
    icon: <Users className="w-12 h-12" />,
    image: "/img/hero/hero-1.jpg",
    delay: 0.1,
  },
  {
    title: "Collaborative",
    icon: <Handshake className="w-12 h-12" />,
    image: "/img/hero/hero-2.jpg",
    delay: 0.2,
  },
  {
    title: "Convenient",
    icon: <ThumbsUp className="w-12 h-12" />,
    image: "/img/hero/hero-3.jpg",
    delay: 0.3,
  },
];

export default function CultureSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  };

  return (
    <section className="relative py-18 lg:py-24 bg-[#011c4d] overflow-hidden text-white font-sans transition-colors duration-1000">
      {/* Dynamic Background Image - Seamless Cross-fade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence initial={false}>
          {hoveredIdx !== null && (
            <motion.div
              key={hoveredIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "linear" }}
              className="absolute inset-0 z-0 bg-[#011c4d]"
            >
              <Image
                src={cultureItems[hoveredIdx].image}
                alt="Background"
                fill
                className="object-cover opacity-25 scale-100 transition-transform duration-3000"
              />
              {/* Unified Theme Color Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-[#011c4d] via-[#011c4d]/40 to-[#011c4d]/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 lg:px-20 text-center mb-12 md:mb-14">
        <motion.div {...fadeInUp} className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white/95 banner-title">
            We are making the{" "}
            <span className="text-[#00b8fe] italic">future</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative z-10 px-6 md:px-14 lg:px-20">
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 md:mx-0 px-6 md:px-0 scroll-smooth">
          {cultureItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="flex-none w-[85%] sm:w-[60%] md:w-auto snap-center relative h-[60vh] md:h-[65vh] min-h-[450px] border border-white/5 group overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-700 ease-out"
            >
              {/* Background Image of the Card */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale brightness-[0.85] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                {/* Unified Theme Color Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-[#011c4d]/95 via-[#011c4d]/40 to-transparent transition-opacity duration-700 md:opacity-10 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                <div className="mb-4 text-white transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-medium tracking-tight mb-4 text-white transition-all duration-500">
                  {item.title}
                </h3>

                <div className="w-12 h-px bg-white mb-8 transition-all duration-700 group-hover:w-24 group-hover:bg-[#00b8fe]" />

                <Link
                  href="/#contact"
                  className="px-10 py-3 bg-[#00b8fe] text-white font-semibold text-[11px] tracking-widest uppercase transition-all duration-500 hover:bg-[#0096ce] hover:shadow-[0_0_25px_rgba(0,184,254,0.3)] transform active:scale-95 shadow-xl"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="flex md:hidden justify-center gap-2 mt-0">
          {cultureItems.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                hoveredIdx === i ? "w-8 bg-[#00b8fe]" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

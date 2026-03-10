"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and scale effects
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacityMainText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const opacityBottomText = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] md:h-[130vh] w-full flex flex-col justify-end overflow-hidden pb-12 md:pb-24 bg-[#521212]"
    >
      {/* Background Video with 3D Parallax */}
      <motion.div
        style={{ scale, y: yBg, opacity }}
        className="absolute inset-0 w-full h-full origin-bottom"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/img/banner.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </motion.div>

      {/* Main Centered Content */}
      <motion.div
        style={{ y: yText, opacity: opacityMainText }}
        className="absolute inset-0 w-full h-full flex items-center justify-center px-6 md:px-12 z-10 pt-10 pointer-events-none"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-4xl md:text-6xl font-normal text-white text-center max-w-4xl md:max-w-3xl leading-[1] tracking-tight drop-shadow-md"
        >
          Welcome To Anarc Builders & Developers!
        </motion.h1>
      </motion.div>

      {/* Bottom Content Area */}
      <motion.div
        style={{ opacity: opacityBottomText }}
        className="relative z-10 w-full max-w-4xl lg:max-w-3xl ml-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 items-start pb-12"
      >
        {/* Left Side (Sub-label) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center justify-center md:justify-start gap-2 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase drop-shadow-md"
        >
          <span className="text-white">♦</span> ANARC BUILDERS
        </motion.div>

        {/* Right Side (Description) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="justify-self-center md:justify-self-end text-white/90 text-xs md:text-sm leading-relaxed max-w-[320px] text-center md:text-left drop-shadow-md"
        >
          <p>
            Anarc Developers is a construction company established in 2000 and
            based in Mukkam, Calicut. Led by the highly experienced managing
            director Mr.Muhammad Lais.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

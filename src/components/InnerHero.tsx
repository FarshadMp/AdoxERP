"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface InnerHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function InnerHero({ title, subtitle, image }: InnerHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-screen w-full flex flex-col justify-end overflow-hidden bg-black">
      {/* Background Image with a very subtle dark overlay to match the dusk lighting */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-70"
          priority
        />
        {/* Subtle vignette and bottom dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </div>

      {/* Bottom Left Content area mirroring "Vision 2030 Overview" */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8 md:px-16 lg:px-24 pb-20 md:pb-24">
        <div className="flex flex-col items-start gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-white text-[12px] md:text-lg font-normal tracking-[0.25em] uppercase"
          >
            {subtitle}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="text-white text-4xl md:text-8xl font-light tracking-tight leading-[1]"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* Subtle bottom line / scroll hint if needed */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
    </section>
  );
}

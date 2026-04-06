"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  };

  return (
    <section className="relative py-18 lg:py-22 overflow-hidden bg-black">
      {/* Background with Grayscale Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero/hero-2.jpg"
          alt="Logistics Background"
          fill
          className="object-cover opacity-30 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#2a2a2a] via-[#2a2a2a]/10 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-14 lg:px-20">
        <div className="max-w-4xl">
          <motion.h4
            {...fadeInUp}
            className="text-[#00b8fe] font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Ready to Move?
          </motion.h4>

          <motion.h2
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-5xl font-normal text-white leading-tight tracking-tight mb-10"
          >
            Business Way <br />
            <span className="text-[#00b8fe] italic">Freight Cargo</span> LLC
          </motion.h2>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-[#00b8fe] text-white font-bold text-sm uppercase transition-all duration-500 hover:bg-white hover:text-[#011c4d] hover:shadow-[0_20px_40px_rgba(0,184,254,0.3)] transform active:scale-95"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements - Subtle Gray */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white rounded-full" />
      </div>
    </section>
  );
}

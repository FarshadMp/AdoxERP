"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const trustItems = [
    "ZATCA Certified",
    "AI-Powered",
    "Arabic & English",
    "Cloud-Based",
    "500+ Businesses in KSA & GCC",
    "Vision 2030 Ready",
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center pt-40 md:pt-32 pb-0 overflow-hidden bg-[#020817]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero/hero.png"
          alt="AdoxERP Hero Background"
          fill
          className="object-cover opacity-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817]" />
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex-grow flex flex-col items-center text-center">
        {/* Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-[2.5rem] md:text-[4rem] leading-[1.1] tracking-tight mb-3 max-w-5xl"
        >
          The Ultimate Cloud ERP System <br className="hidden md:block" />
          To Run Your Business
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-base md:text-[1.15rem] font-normal mb-8"
        >
          The All-in-One AI-Powered Business Solution Built for Saudi Arabia and
          the Middle East.
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto px-6 md:px-0"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-fit md:w-auto"
          >
            <Link
              href="/free-demo"
              className="px-5 py-4 md:py-3 bg-white md:bg-primary hover:bg-white hover:text-black text-black md:text-white text-sm rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 shadow-lg shadow-white/10 md:shadow-primary/10 w-[220px] md:w-auto"
            >
              Get a Free Demo
              <Sparkles className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-fit md:w-auto"
          >
            <Link
              href="#modules"
              className="px-5 py-4 md:py-3 bg-white/5 hover:bg-white hover:text-black text-white text-sm rounded-lg border border-white/10 transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 backdrop-blur-sm hover:shadow-white/5 w-[220px] md:w-auto"
            >
              Explore All Modules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Dashboard/Screen Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-5xl mx-auto mt-auto overflow-hidden"
        >
          {/* Desktop Version */}
          <div className="hidden md:block shadow-2xl shadow-blue-500/10">
            <Image
              src="/img/hero/screen-dark.svg"
              alt="AdoxERP Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Version - Truly touching the bottom */}
          <div className="block md:hidden mb-[-5px]">
            <Image
              src="/img/hero/mob-dark.svg"
              alt="AdoxERP Mobile dashboard"
              width={600}
              height={1000}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

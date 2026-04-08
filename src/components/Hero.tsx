"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FileText, Users, Zap, Cloud, Sparkles } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stats = [
    {
      icon: <FileText className="w-5 h-5 text-[#00BCFC]" />,
      text: "Already deployed",
      subText: "in real businesses",
    },
    {
      icon: <Users className="w-5 h-5 text-[#00BCFC]" />,
      text: "Supports finance,",
      subText: "inventory, CRM, HR, & routing",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#00BCFC]" />,
      text: "30-50% faster",
      subText: "implementation",
    },
    {
      icon: <Cloud className="w-5 h-5 text-[#00BCFC]" />,
      text: "Cloud-native,",
      subText: "AI-enabled platform",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [stats.length]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#020817]">
      {/* Background for Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/img/hero/hero.jpg"
          alt="IntelliERP Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#020817]/10 via-[#020817]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020817]/80" />
      </div>

      {/* Background for Mobile - Footer style */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/img/hero/gradient.png"
          alt="IntelliERP Mobile Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#020817]/40 to-[#020817]" />
      </div>

      {/* Main Content Container - Full Height Flex */}
      <div className="relative z-10 px-6 md:px-14 lg:px-20 w-full min-h-screen flex flex-col justify-between pt-22 pb-20 md:pb-12">
        {/* Top/Center Content - Centered in remaining space */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl mx-auto md:mx-0">
              {/* Headline with premium word-by-word reveal */}
              <h1 className="text-white text-[2.2rem] md:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-4 md:mb-6">
                <span className="block overflow-hidden pb-1">
                  <span className="inline-block">AI-Driven ERP</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="inline-block text-white/80">
                    for Modern SMEs
                  </span>
                </span>
              </h1>

              <p className="text-white text-sm md:text-base leading-relaxed mb-6 md:mb-10 max-w-lg font-light">
                IntelliERP is a next-generation, cloud-based ERP platform that
                combines operations, automation, and AI-driven insights into a
                single unified system.
              </p>

              <div className="flex flex-row items-center gap-4 w-full md:w-auto">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 md:flex-none"
                >
                  <Link
                    href="/#demo"
                    style={{ backgroundColor: "#0693FB" }}
                    className="group relative flex items-center justify-center px-4 md:px-8 py-4 rounded-xl text-[13px] md:text-sm font-bold transition-all duration-300 text-white shadow-2xl shadow-blue-500/20 whitespace-nowrap overflow-hidden"
                  >
                    <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_0.8s_ease-out] pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2">
                      Request a Demo
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 md:flex-none"
                >
                  <Link
                    href="/#modules"
                    className="group flex items-center justify-center px-4 md:px-8 py-4 rounded-xl text-[13px] md:text-sm font-bold border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white whitespace-nowrap"
                  >
                    <span className="flex items-center gap-2">
                      Explore Modules
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="hidden md:block"
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Dashboard Visual Placeholder */}
            <div className="hidden lg:block relative">
              {/* Optional dashboard visual */}
            </div>
          </div>
        </div>

        {/* Bottom Feature Bar - Anchored to bottom of screen */}
        <div className="w-full overflow-hidden">
          {/* Mobile Creative Slider */}
          <div className="lg:hidden relative h-[100px] w-full flex items-center justify-center mb-6">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="absolute w-full px-4"
              >
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg max-w-[320px] mx-auto min-h-[80px]">
                  <div
                    className="p-3 rounded-xl border border-white/10"
                    style={{ background: "rgba(6, 147, 251, 0.15)" }}
                  >
                    {stats[currentSlide].icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white text-sm font-semibold tracking-wide">
                      {stats[currentSlide].text}
                    </span>
                    <span className="text-white/40 text-xs font-light">
                      {stats[currentSlide].subText}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="absolute -bottom-4 flex justify-center w-full gap-2">
              {stats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "w-6 bg-[#00BCFC]"
                      : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-md transition-all group cursor-default"
              >
                <div
                  className="p-3 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors"
                  style={{ background: "rgba(6, 147, 251, 0.1)" }}
                >
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold tracking-wide">
                    {stat.text}
                  </span>
                  <span className="text-white/40 text-xs font-light">
                    {stat.subText}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none z-0"
        style={{ background: "rgba(6, 147, 251, 0.08)" }}
      />
    </section>
  );
}

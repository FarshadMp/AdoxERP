"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModuleData } from "@/data/modules";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Users,
  Plus,
} from "lucide-react";
import FAQ from "@/components/FAQ";

interface ModulePageClientProps {
  module: ModuleData;
}

export default function ModulePageClient({ module }: ModulePageClientProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-white pt-14 md:pt-24">
      {/* Module Hero Section - Enhanced UI inspired by reference */}
      <section className="relative pt-8 md:pt-14 pb-1 md:pb-14 bg-white overflow-hidden">
        {/* Background Decorative Gradients - Moved Outside the Box */}
        {/* Background Decorative Gradients - Matched with Primary Adox Blue */}
        <div
          className="absolute pointer-events-none blur-[200px] rounded-[620px] z-0 opacity-100"
          style={{
            background: "#E6F5FB",
            height: "744px",
            width: "1141px",
            left: "-153px",
            top: "-126px",
            transform: "rotate(180deg)",
          }}
        />
        <div
          className="absolute pointer-events-none blur-[200px] rounded-[620px] z-0 opacity-100"
          style={{
            background: "#EEF2FF",
            height: "520px",
            width: "523px",
            right: "-295px",
            top: "140px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="relative bg-white rounded-[1.5rem] md:rounded-[2.8rem] p-6 md:p-15 overflow-hidden border border-slate-100">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="max-w-xl text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs mb-5"
                >
                  <Zap className="w-3.5 h-3.5" />
                  {module.title} Module
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  className="text-primary-dark text-3xl md:text-[2.5rem] leading-[1.05] font-bold tracking-tight mb-2 md:mb-4"
                >
                  {module.heroTitle}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-secondary-dark text-base md:text-lg font-normal leading-relaxed mb-6 opacity-90"
                >
                  {module.heroSubtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="grid grid-cols-2 md:flex gap-3 md:gap-4"
                >
                  <Link
                    href="/free-demo"
                    className="px-4 md:px-8 py-3.5 bg-primary hover:bg-primary-dark text-white text-xs md:text-sm font-bold rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 shadow-lg shadow-primary/20 whitespace-nowrap"
                  >
                    Start for free
                    <Zap className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/free-demo"
                    className="px-4 md:px-8 py-3.5 border border-primary-dark/10 hover:border-primary-dark/20 text-primary-dark text-xs md:text-sm font-bold rounded-lg bg-white transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center whitespace-nowrap"
                  >
                    Get a demo
                  </Link>
                </motion.div>
              </div>

              {/* Right Visual mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative aspect-[4/3] md:aspect-square lg:aspect-auto h-full min-h-[300px] lg:min-h-[420px] rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-white"
              >
                <Image
                  src={module.heroImage}
                  alt={`${module.title} Mockup`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Stats Section - Enhanced Premium UI */}
      <section className="py-16 md:py-26 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-6 space-y-6">
              <div className="space-y-2 md:space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
                  Module Overview
                </div>
                <h2 className="text-3xl md:text-[3.5rem] font-medium text-primary-dark leading-[1.05] tracking-tight">
                  Intelligent {module.title}
                </h2>
              </div>

              <div className="relative group">
                <p className="text-lg text-secondary-dark leading-relaxed font-normal">
                  {module.mainDescription}
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              {module.highlightStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`group p-4 md:p-8 rounded-[20px] md:rounded-[34px] border transition-all duration-500 overflow-hidden relative ${
                    idx === 0 || idx === 3
                      ? "bg-primary-dark text-white border-primary-dark shadow-2xl shadow-primary-dark/20"
                      : "bg-slate-50 text-primary-dark border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-6 ${
                      idx === 0 || idx === 3
                        ? "bg-white/10 text-white"
                        : "bg-white text-primary shadow-sm"
                    }`}
                  >
                    {idx === 0 && <Users className="w-6 h-6" />}
                    {idx === 1 && <Zap className="w-6 h-6" />}
                    {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 3 && <Globe className="w-5 h-5" />}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs md:text-sm font-bold uppercase opacity-60`}
                  >
                    {stat.label}
                  </div>

                  {/* Subtle inner glow for dark cards */}
                  {(idx === 0 || idx === 3) && (
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced UI */}
      <section className="py-16 md:py-26 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-18 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
              System Capabilities
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark mb-4 leading-[1.1]">
              {module.featuresTitle}
            </h2>
            <p className="text-lg text-secondary-dark leading-relaxed font-normal max-w-5xl mx-auto">
              {module.featuresDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {module.features.map((feature, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white p-6 md:p-10 rounded-[20px] md:rounded-[32px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
              >
                {/* Side Icon - High Contrast */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-primary/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-primary-dark tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-base text-secondary-dark leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Animated filling border at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-50 overflow-hidden">
                  <div className="h-full w-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Uses it Section - Premium Split Layout */}
      <section className="bg-[#1a2332] overflow-hidden relative border-y border-white/5">
        <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[850px]">
          {/* Left: Cinematic Image Column */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
            <Image
              src="/img/saudi-team-who-uses.png"
              alt="Professional team using AdoxERP"
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              priority
            />
            {/* Dark overlay to blend image better on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right: Content Column */}
          <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-18 flex flex-col justify-center relative">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <motion.div {...fadeInUp} className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-[3rem] text-white leading-[1.1] tracking-tight mb-6">
                {module.whoUsesSection.title.split(" ").slice(0, 2).join(" ")}
                <span className="text-primary">
                  {" "}
                  {module.whoUsesSection.title.split(" ").slice(2).join(" ")}
                </span>
                <span className="text-primary">.</span>
              </h2>

              <p className="text-base md:text-lg text-white leading-relaxed mb-8 font-normal">
                {module.whoUsesSection.description}
              </p>

              <div className="space-y-4">
                {module.whoUsesSection.userTypes.map((type, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <p className="text-base text-gray-200 leading-snug group-hover:text-white transition-colors">
                      {type}
                    </p>
                  </div>
                ))}
              </div>

              {/* Saudi Arabia Compliance Note Integrated at bottom */}
              <div className="mt-10 pt-10 border-t border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                    Compliance Note
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed">
                  {module.complianceNote}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Minimal Accordion UI */}
      <section className="py-16 md:py-26 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-24">
            {/* Left Side: Title */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <h2 className="text-4xl md:text-[2.5rem] font-medium text-primary-dark leading-[1.05] tracking-tight mb-4">
                  {module.faqTitle}
                </h2>
                <h3 className="text-2xl md:text-[1.5rem] font-medium text-primary-dark leading-[1.05] tracking-tight">
                  {module.title} in Saudi Arabia
                </h3>
                <p className="text-secondary-dark text-lg max-w-sm mt-3 md:mt-5">
                  {module.faqDescription}
                </p>
              </motion.div>
            </div>

            {/* Right Side: Accordion Items */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-gray-100">
                {module.faqs.map((faq, idx) => {
                  const isOpen = activeIndex === idx;
                  return (
                    <div key={idx} className="py-6 md:py-8 group">
                      <button
                        onClick={() => setActiveIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left transition-all duration-300"
                      >
                        <span className="text-xl md:text-xl font-bold text-primary-dark tracking-tight leading-tight group-hover:text-primary transition-colors pr-8">
                          {faq.question}
                        </span>
                        <div
                          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45 text-primary" : "text-primary-dark group-hover:text-primary"}`}
                        >
                          <Plus className="w-6 h-6" />
                        </div>
                      </button>

                      {/* Using framer-motion for smooth height animation */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="text-md text-secondary-dark leading-relaxed font-normal max-w-3xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Specific CTA */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-primary rounded-2xl md:rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
              </div>

              <div className="flex flex-col lg:flex-row items-stretch">
                <div className="w-full lg:w-[22%] relative overflow-hidden min-h-[200px] lg:min-h-0">
                  <Image
                    src="/img/features/features-14.png"
                    alt="Professional team"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent lg:hidden" />
                </div>

                <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-[1.75rem] font-bold text-white leading-tight tracking-tight mb-3">
                      See {module.title} in Action — Book a Free Demo
                    </h3>
                    <p className="text-white/80 text-sm md:text-base font-normal">
                      Get a demo tailored to your industry and city — Riyadh ·
                      Jeddah · Dammam
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <Link
                      href="/free-demo"
                      className="px-8 py-3.5 bg-white hover:bg-white/90 text-primary-dark text-sm font-bold rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 active:scale-95 group shadow-lg"
                    >
                      Book a Free Demo
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

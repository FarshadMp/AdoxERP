"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IndustryData } from "@/data/industries";
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
  AlertCircle,
  Lightbulb,
  Building2,
  Quote,
} from "lucide-react";

interface IndustryPageClientProps {
  industry: IndustryData;
}

export default function IndustryPageClient({
  industry,
}: IndustryPageClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-white pt-14 md:pt-24">
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-14 pb-1 md:pb-14 bg-white overflow-hidden">
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
          <div className="relative bg-white rounded-[1.5rem] md:rounded-[2.8rem] p-6 md:p-15 overflow-hidden border border-slate-100 shadow-sm">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="max-w-xl text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs mb-5 font-bold uppercase tracking-wider"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  {industry.title} Industry
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  className="text-primary-dark text-3xl md:text-[2.5rem] leading-[1.05] font-bold tracking-tight mb-4 md:mb-6"
                >
                  {industry.heroTitle}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-secondary-dark text-base md:text-lg font-medium leading-relaxed mb-8 opacity-90"
                >
                  {industry.heroSubtitle}
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
                    Get Started
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/free-demo"
                    className="px-4 md:px-8 py-3.5 border border-primary-dark/10 hover:border-primary-dark/20 text-primary-dark text-xs md:text-sm font-bold rounded-lg bg-white transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center whitespace-nowrap"
                  >
                    Free Demo
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-white"
              >
                <Image
                  src={industry.heroImage}
                  alt={`${industry.title} Industry`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Intro */}
      <section className="py-16 md:py-26 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <motion.div
              {...fadeInUp}
              className="lg:col-span-6 space-y-4 md:space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
                  Overview
                </div>
                <h2 className="text-4xl md:text-[3rem] font-medium text-primary-dark leading-[1.05] tracking-tight">
                  {industry.title} in KSA
                </h2>
              </div>
              <p className="text-lg text-secondary-dark leading-relaxed">
                {industry.mainDescription}
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              {industry.highlightStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-5 md:p-8 rounded-[1rem] md:rounded-[2rem] border transition-all duration-500 ${
                    idx === 0 || idx === 3
                      ? "bg-primary-dark text-white border-primary-dark shadow-xl"
                      : "bg-slate-50 text-primary-dark border-gray-100"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${
                      idx === 0 || idx === 3
                        ? "bg-white/10"
                        : "bg-white text-primary shadow-sm"
                    }`}
                  >
                    {idx === 0 && <Building2 className="w-5 h-5" />}
                    {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 2 && <Zap className="w-5 h-5" />}
                    {idx === 3 && <Globe className="w-5 h-5" />}
                  </div>
                  <div className="text-xl md:text-2xl font-bold mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase opacity-60 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Landscape Section - Clean & Premium UI */}
      <section className="py-16 md:py-26 bg-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left Content: Market Context */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div {...fadeInUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
                  Market Context
                </div>

                <h2 className="text-4xl md:text-[2.5rem] font-medium text-primary-dark leading-[1.1] tracking-tight mb-6">
                  {industry.landscapeSection.title}
                </h2>
                <p className="text-lg text-secondary-dark leading-relaxed font-normal">
                  {industry.landscapeSection.description}
                </p>
              </motion.div>
            </div>

            {/* Right Content: Vision 2030 Context Card */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[3rem] border border-white shadow-2xl shadow-primary/5 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-8">
                    <Zap className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4 md:mb-5 tracking-tight">
                    Vision 2030 <span className="text-primary">Alignment</span>
                  </h3>

                  <p className="text-base text-secondary-dark leading-relaxed">
                    {industry.landscapeSection.vision2030Context}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-26 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-[2.5rem] font-medium text-primary-dark mb-5 md:mb-6">
              {industry.challengesSection.title}
            </h2>
            <p className="text-lg text-secondary-dark">
              {industry.challengesSection.description}
            </p>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory -mx-6 px-6 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {industry.challengesSection.challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[85vw] md:min-w-0 snap-center bg-red-50/30 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-red-100 group hover:bg-red-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4 tracking-tight">
                  {challenge.title}
                </h3>
                <p className="text-secondary-dark leading-relaxed text-sm">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Exact match to reference image */}
      <section className="py-16 md:py-26 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Top Header: Split Layout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start mb-10 md:mb-20">
            <motion.div {...fadeInUp} className="">
              <div>
                <span className="text-primary font-bold text-sm uppercase">
                  Comprehensive Solutions
                </span>
                <h2 className="text-3xl md:text-[2.5rem] mt-4 font-medium text-primary-dark leading-[1.1] tracking-tight">
                  {industry.solutionsSection.title}
                </h2>
              </div>
              <p className="text-lg mt-6 text-secondary-dark leading-relaxed font-normal max-w-xl">
                {industry.solutionsSection.description}
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative aspect-[16/10] rounded-[1rem] overflow-hidden shadow-2xl shadow-primary/5"
            >
              <Image
                src="/img/features/features-11.png"
                alt="AdoxERP Solutions"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Bottom Grid: Contained in a large white card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[1rem] p-6 md:p-12 shadow-xl shadow-primary/5 border border-white"
          >
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 lg:gap-x-20 lg:gap-y-16">
              {industry.solutionsSection.solutions.map((solution, idx) => (
                <div key={idx} className="space-y-2 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 text-primary rounded-md flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary-dark tracking-tight">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-base text-secondary-dark leading-relaxed font-normal opacity-80 pl-12">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules & Compliance */}
      <section className="py-16 md:py-26 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            {/* Modules Used */}
            <motion.div {...fadeInUp} className="space-y-8">
              <h3 className="text-3xl font-bold text-primary-dark">
                Integrated Modules
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {industry.modulesUsed.map((module, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg md:rounded-2xl border border-gray-100 text-sm md:text-base font-bold text-primary-dark"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 " />
                    <span className="leading-tight">{module}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Compliance Items */}
            <motion.div
              {...fadeInUp}
              className="bg-slate-50 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-6 md:mb-8">
                {industry.complianceSection.title}
              </h3>
              <div className="space-y-6">
                {industry.complianceSection.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-secondary-dark text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Uses & Testimonial - Redesigned Split Layout */}
      <section className="bg-[#1a2332] overflow-hidden relative border-y border-white/5">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Visual Column with Testimonial Overlay */}
          <div className="w-full lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden">
            <Image
              src="/img/saudi-team-who-uses.png"
              alt="Professional team using AdoxERP"
              fill
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              priority
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-[#1a2332]/20 to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-[#1a2332]/10 hidden lg:block" />

            {/* Floating Testimonial Card */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl p-4 md:p-8 rounded-[1rem] md:rounded-[2rem] border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
                <Quote className="absolute top-8 right-8 w-10 h-10 text-primary opacity-20" />

                <div className="relative z-10">
                  <p className="text-sm md:text-lg font-medium leading-relaxed mb-6 text-white/90">
                    "{industry.testimonial.quote}"
                  </p>

                  <div className="flex items-start md:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                      {industry.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base md:text-lg leading-tight">
                        {industry.testimonial.author}
                      </div>
                      <div className="text-primary text-xs md:text-sm font-medium uppercase mt-1">
                        {industry.testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Content Column */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center relative bg-[#1a2332]">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            <motion.div {...fadeInUp} className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
                Trusted Solutions
              </div>
              <h2 className="text-2xl md:text-[2.5rem] text-white leading-[1.1] tracking-tight mb-4">
                {industry.whoUsesSection.title.split(" ").slice(0, 2).join(" ")}
                <span className="text-primary">
                  {" "}
                  {industry.whoUsesSection.title.split(" ").slice(2).join(" ")}
                </span>
                <span className="text-primary">.</span>
              </h2>

              <p className="text-base text-white leading-relaxed mb-6 font-normal">
                {industry.whoUsesSection.description}
              </p>

              <div className="space-y-3">
                {industry.whoUsesSection.userTypes.map((type, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 items-start group p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-200 leading-snug group-hover:text-white transition-colors">
                        {type}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
                  {industry.faqTitle}
                </h2>
                <h3 className="text-2xl md:text-[1.5rem] font-medium text-primary-dark leading-[1.05] tracking-tight">
                  {industry.title} in Saudi Arabia
                </h3>
                <p className="text-secondary-dark text-lg max-w-sm mt-3 md:mt-5">
                  {industry.faqDescription}
                </p>
              </motion.div>
            </div>

            {/* Right Side: Accordion Items */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-gray-100">
                {industry.faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="py-6 md:py-8 group">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
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

      {/* Bottom CTA - Premium Split Layout */}
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
                      {industry.ctaText}
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

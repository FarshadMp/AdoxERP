"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Lightbulb,
  Target,
  ArrowRight,
  Code,
  Users,
  LineChart,
} from "lucide-react";
import Link from "next/link";

export default function GraduatePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const pillars = [
    {
      title: "ERP Expertise",
      desc: "Gain deep knowledge of modular ERP architecture and implementations.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Digital Operations",
      desc: "Master the processes that drive modern business efficiency and intelligence.",
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      title: "Client Success",
      icon: <Users className="w-6 h-6" />,
      desc: "Learn how to bridge technical capability with real-world business outcomes.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION (MATCHES ABOUT PAGE STYLE) --- */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-22 overflow-hidden bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold flex items-center gap-2 border border-[#0693FB]/20"
          >
            <span className="text-[#0693FB]">✦</span>Talent Development
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-primary-dark leading-tight tracking-tight mb-4"
          >
            Graduate <span className="text-[#0693FB]">Programme</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-light text-base leading-relaxed max-w-2xl mx-auto font-semibold"
          >
            IntelliERP is committed to developing UK talent through a structured
            Graduate Programme focused on ERP systems and digital operations.
          </motion.p>
        </div>

        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(6,147,251,0.05)_0%,_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(0,188,252,0.05)_0%,_transparent_50%)] pointer-events-none" />
      </section>

      {/* --- PROGRAMME PILLARS --- */}
      <section className="py-14 md:py-22">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-10 rounded-[20px] md:rounded-[40px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-[#0693FB]/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0693FB] mb-8">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STRUCTURE SECTION --- */}
      <section className="py-14 md:py-22 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-[20px] md:rounded-[38px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-12 items-center">
            <div className="w-24 h-24 rounded-3xl bg-[#0693FB] text-white flex items-center justify-center shrink-0">
              <BookOpen className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-[#0F172A] mb-4 md:mb-5 tracking-tight">
                Support & Growth
              </h2>
              <p className="text-base text-[#475569] leading-relaxed mb-6 md:mb-8 font-medium">
                Our programme provides direct mentorship from industry experts,
                involving you in actual product deployment and R&D projects from
                day one.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0693FB] font-bold group"
              >
                Inquire about the next intake{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

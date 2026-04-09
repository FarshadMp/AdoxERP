"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, Zap, Layers } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION (IMAGE INSPIRED - BLUE THEME) --- */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-22 overflow-hidden bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div
            data-aos="fade-up"
            className="inline-flex mb-6 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold flex items-center gap-2 border border-[#0693FB]/20"
          >
            <span className="text-[#0693FB]">✦</span>About IntelliERP
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-primary-dark leading-tight tracking-tight mb-4"
          >
            Excellence in{" "}
            <span className="text-[#0693FB]">Intelligent ERP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-light text-base leading-relaxed max-w-2xl mx-auto font-semibold"
          >
            IntelliERP is developed by Intellio Technologies UK Ltd, a company
            focused on building intelligent, scalable ERP systems for SMEs.
          </motion.p>
        </div>
      </section>

      {/* --- THE GAP (STRATEGIC POSITIONING) --- */}
      <section className="py-14 md:py-22 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight mb-6"
            >
              Bridging the Gap in <br />
              <span className="text-[#0693FB]">Business Intelligence</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-primary-light text-base md:text-lg"
            >
              IntelliERP was created to address the significant disconnect
              between rigid enterprise systems and basic accounting tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">
            {/* Visual Connector Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-100 -translate-y-1/2 z-0" />

            {/* Complex ERP */}
            <motion.div
              {...fadeInUp}
              className="relative z-10 group p-10 rounded-[32px] bg-gray-50/50 border border-gray-100 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark tracking-tight">
                Complex Enterprise <br /> ERP Systems
              </h3>
            </motion.div>

            {/* IntelliERP (The Bridge) */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="relative z-20 group p-12 rounded-[40px] bg-gradient-to-br from-[#0693FB] to-[#00BCFC] shadow-2xl shadow-blue-500/30 flex flex-col items-center text-center text-white transform md:-translate-y-6"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-10 shadow-inner">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <div className="inline-flex px-4 py-1.5 rounded-full bg-white/20 text-[11px] font-bold tracking-widest uppercase mb-6">
                The Bridge
              </div>
              <h3 className="text-3xl font-extrabold mb-2">IntelliERP</h3>
              <div className="w-12 h-1 bg-white/30 rounded-full mt-6" />
            </motion.div>

            {/* Limited Accounting Tools */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative z-10 group p-10 rounded-[32px] bg-gray-50/50 border border-gray-100 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0693FB] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark tracking-tight">
                Limited Accounting Tools <br /> Used by SMEs
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION (HIGH IMPACT) --- */}
      <section className="py-14 md:py-22 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <motion.div
              {...fadeInUp}
              className="group relative p-8 md:p-12 rounded-[22px] md:rounded-[32px] bg-white border border-gray-100 hover:border-[#0693FB]/10 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#0693FB]/5"
            >
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-32 h-32 text-primary-dark" />
              </div>
              <div className="w-16 h-16 rounded-3xl bg-[#0693FB]/10 text-[#0693FB] flex items-center justify-center mb-6 md:mb-10 group-hover:bg-[#0693FB] group-hover:text-white transition-all duration-500">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4 md:mb-8 tracking-tighter">
                Mission
              </h3>
              <p className="text-base md:text-xl text-primary-light leading-relaxed font-semibold">
                To make advanced business systems{" "}
                <span className="text-[#0693FB]">
                  accessible, intelligent, and scalable
                </span>{" "}
                for SMEs.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="group relative p-8 md:p-12 rounded-[22px] md:rounded-[32px] bg-white border border-gray-100 hover:border-[#00BCFC]/10 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#00BCFC]/5"
            >
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye className="w-32 h-32 text-primary-dark" />
              </div>
              <div className="w-16 h-16 rounded-3xl bg-[#00BCFC]/10 text-[#00BCFC] flex items-center justify-center mb-6 md:mb-10 group-hover:bg-[#00BCFC] group-hover:text-white transition-all duration-500">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4 md:mb-8 tracking-tighter">
                Vision
              </h3>
              <p className="text-base md:text-xl text-primary-light leading-relaxed font-semibold">
                To build a globally scalable ERP platform that enables SMEs to
                operate with{" "}
                <span className="text-[#00BCFC]">
                  enterprise-level efficiency and intelligence
                </span>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

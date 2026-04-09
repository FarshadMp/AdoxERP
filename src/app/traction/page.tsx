"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  ShieldCheck,
  Users,
  TrendingUp,
  Wallet,
  FileCheck,
  Building2,
  Globe,
} from "lucide-react";

export default function TractionPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const demos = [
    {
      title: "System Stability",
      desc: "Architected for 99.9% uptime in high-volume environments.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Practical Usability",
      desc: "Designed with end-users in mind for seamless daily operations.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Commercial Viability",
      desc: "Proven return on investment across multiple business sectors.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION (MATCHES ABOUT PAGE STYLE) --- */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-22 overflow-hidden bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            {...fadeInUp}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold flex items-center gap-2 border border-[#0693FB]/20"
          >
            <span className="text-[#0693FB]">✦</span>Live Deployment
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-primary-dark leading-tight tracking-tight mb-4"
          >
            Real-World <span className="text-[#0693FB]">Validation</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-light text-base leading-relaxed max-w-2xl mx-auto font-semibold"
          >
            IntelliERP is already deployed in live environments across multiple industries, 
            delivering measurable value to modern enterprises.
          </motion.p>
        </div>

        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(6,147,251,0.05)_0%,_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(0,188,252,0.05)_0%,_transparent_50%)] pointer-events-none" />
      </section>

      {/* --- DEMONSTRATIONS GRID --- */}
      <section className="py-14 md:py-22 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {demos.map((demo, i) => (
              <motion.div
                key={demo.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0693FB]/10 text-[#0693FB] flex items-center justify-center mb-8">
                  {demo.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                  {demo.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">{demo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVENUE & MARKET MODEL --- */}
      <section className="py-14 md:py-22 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-stretch">
            {/* Revenue Model */}
            <motion.div
              {...fadeInUp}
              className="p-8 md:p-12 rounded-[30px] bg-white border border-gray-100 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-8">
                <Wallet className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6 tracking-tight">
                Revenue Model
              </h2>
              <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-8">
                The platform operates on a robust{" "}
                <strong>SaaS subscription model</strong> with active
                monthly-paying clients, ensuring a stable and scalable business
                foundation.
              </p>
              <div className="mt-auto pt-8 border-t border-gray-50 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
                  Active Growth
                </span>
              </div>
            </motion.div>

            {/* Market Interest */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 rounded-[30px] bg-gradient-to-br from-[#0693FB] to-[#00BCFC] text-white shadow-2xl shadow-blue-500/10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">
                Market Interest
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium">
                IntelliERP has received{" "}
                <strong>Expressions of Interest (EOIs)</strong> and professional
                validation from leading accounting firms, indicating strong
                demand within the SME sector.
              </p>
              <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-4">
                <Building2 className="w-6 h-6 opacity-60" />
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">
                  Sector Validation
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

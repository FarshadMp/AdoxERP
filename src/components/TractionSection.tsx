"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Activity,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

export default function TractionSection() {
  const points = [
    { title: "Daily transactions", icon: <Activity className="w-5 h-5" /> },
    { title: "Financial reporting", icon: <CreditCard className="w-5 h-5" /> },
    {
      title: "Inventory operations",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    { title: "Route execution", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <section
      className="relative py-14 md:py-22 bg-white overflow-hidden"
      id="traction"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold border border-[#0693FB]/20 mb-6">
              Proof & Traction
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight tracking-tight mb-6">
              A Platform Built for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0693FB] to-[#0470c2]">
                Real Business Use
              </span>
            </h2>

            <p className="text-primary-light text-base leading-relaxed mb-10 max-w-lg">
              IntelliERP is already deployed in live business environments and
              supports:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-black/5 text-primary-dark font-medium group hover:border-[#0693FB]/30 transition-colors duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0693FB] flex items-center justify-center shadow-sm border border-black/2 group-hover:bg-[#0693FB] group-hover:text-white transition-all duration-500">
                    {point.icon}
                  </div>
                  <span className="text-sm md:text-base font-semibold">
                    {point.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-[16px] bg-linear-to-r from-[#0693FB]/5 to-transparent border-l-4 border-[#0693FB]">
              <p className="text-primary-dark font-medium text-sm md:text-base leading-relaxed">
                The platform is generating recurring subscription revenue,
                demonstrating real-world adoption and commercial viability.
              </p>
            </div>
          </div>

          {/* Right Column - Visual representation of traction */}
          <div className="relative border border-black/5 rounded-[28px] md:rounded-[48px] p-5 md:p-8 bg-gray-50/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0693FB]/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0693FB]/5 blur-3xl rounded-full" />

            <div className="relative space-y-6">
              {/* Traction Cards */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-xl shadow-black/2 border border-black/2">
                <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-black/40 uppercase tracking-widest mb-0.5">
                    Deployment Status
                  </div>
                  <div className="text-lg font-bold text-primary-dark">
                    Live & Operational
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white shadow-xl shadow-black/2 border border-black/2">
                <div className="text-xs font-bold text-black/40 uppercase tracking-widest mb-3">
                  System Health
                </div>
                <div className="flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [`${h}%`, `${Math.max(20, h - 20)}%`, `${h}%`],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-full bg-[#0693FB]/20 rounded-t-sm"
                      style={{ height: `${h}%`, minHeight: "20px" }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#0693FB] text-white shadow-xl shadow-blue-500/20">
                  <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">
                    Commercial Adoption
                  </div>
                  <div className="text-base leading-tight md:text-xl font-bold">
                    Revenue Generating
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-black/5">
                  <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-1">
                    Uptime
                  </div>
                  <div className="text-xl font-bold text-primary-dark">
                    99.9%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

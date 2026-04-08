"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  BarChart3,
  Box,
  Users2,
  Store,
  Truck,
  Sparkles,
} from "lucide-react";

export default function ValueProposition() {
  const coreModules = [
    { icon: <Calculator className="w-5 h-5" />, label: "Finance & Accounting" },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Sales & CRM" },
    { icon: <Box className="w-5 h-5" />, label: "Inventory & Warehouse" },
    { icon: <Users2 className="w-5 h-5" />, label: "HR & Payroll" },
    { icon: <Store className="w-5 h-5" />, label: "POS & Retail" },
    {
      icon: <Truck className="w-5 h-5" />,
      label: "Route & Distribution Management",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      label: "AI Business Intelligence",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-22 bg-gray-50 overflow-hidden"
      id="proposition"
    >
      <div className="px-6 md:px-14 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left Column - Headline */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left gap-5">
            <div
              data-aos="fade-up"
              className="px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold border border-[#0693FB]/20"
            >
              Core Value Proposition
            </div>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight tracking-tight"
            >
              One Platform. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0693FB] to-[#0470c2]">
                Complete Control.
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-primary-light text-base leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Manage your entire business from a single system for maximum
              efficiency and real-time visibility.
            </p>
          </div>

          <div className="lg:col-span-12 xl:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {coreModules.map((module, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="group flex flex-col md:flex-row items-center gap-3 md:gap-4 p-3 md:p-5 rounded-2xl bg-white border border-black/5 hover:border-[#0693FB]/30 hover:shadow-xl hover:shadow-[#0693FB]/5 transition-all duration-500 h-full"
                >
                  <div className="shrink-0 p-2.5 md:p-3 rounded-xl bg-[#0693FB] text-white group-hover:scale-110 transition-transform duration-500">
                    {module.icon}
                  </div>
                  <span className="text-primary-dark font-medium text-[13px] md:text-base tracking-tight text-center md:text-left leading-snug">
                    {module.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur for premium feel */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0693FB]/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}

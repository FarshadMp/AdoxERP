"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Warehouse,
  Calculator,
  ShoppingCart,
  Truck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductPage() {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  const capabilities = [
    {
      title: "Finance & Accounting",
      icon: <Calculator className="w-6 h-6" />,
      features: ["General Ledger", "P&L, Balance Sheet", "VAT-ready"],
    },
    {
      title: "Sales & CRM",
      icon: <Users className="w-6 h-6" />,
      features: ["Lead management", "Sales tracking", "Customer insights"],
    },
    {
      title: "Inventory & Warehouse",
      icon: <Warehouse className="w-6 h-6" />,
      features: ["Stock tracking", "Transfers", "Multi-location management"],
    },
    {
      title: "HR & Payroll",
      icon: <Users className="w-6 h-6" />,
      features: ["Attendance", "Leave", "Payroll"],
    },
    {
      title: "POS",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Retail billing", "Real-time integration"],
    },
    {
      title: "Route & Distribution",
      icon: <Truck className="w-6 h-6" />,
      features: ["Route planning", "Delivery tracking", "Field execution"],
    },
    {
      title: "AI Layer",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        "Natural language queries",
        "Intelligent insights",
        "Decision support",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* --- section hero --- */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-22 overflow-hidden bg-[#020817] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero/gradient.png"
            alt="Product Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/20 via-[#020817]/40 to-[#020817]" />
        </div>

        <div className="px-6 md:px-14 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[13px] font-medium text-white mb-8 flex items-center gap-2"
              >
                Home <span className="opacity-30">›</span> Product Overview
              </motion.div>

              <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shrink-0"
                >
                  <BarChart3 className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-2xl md:text-5xl font-bold tracking-tight leading-tight"
                >
                  IntelliERP Platform
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-white text-base md:text-lg leading-relaxed mb-7 md:mb-10 max-w-xl font-medium"
              >
                A modular, AI-enabled ERP platform designed to manage end-to-end
                business operations with intelligence and scale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#020817] font-bold text-sm hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-sm transition-all duration-300 text-center"
                >
                  Book Free Demo
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-[4/3] bg-white/5 rounded-3xl border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl">
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="p-8 space-y-6">
                  <div className="h-4 w-1/3 bg-white/10 rounded-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-2xl" />
                    <div className="h-24 bg-white/5 rounded-2xl" />
                  </div>
                  <div className="h-40 bg-white/5 rounded-2xl" />
                </div>
              </div>
              <div className="absolute -inset-10 bg-[#0693FB]/20 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- section two --- */}
      <section className="py-14 md:py-22 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 text-center mb-15">
          <motion.h2
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight"
          >
            Key Capabilities
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                variants={containerVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                className="group flex flex-col p-6 md:p-8 rounded-[30px] bg-gray-50 border border-gray-100 hover:border-[#0693FB]/20 hover:bg-white hover:shadow-2xl hover:shadow-[#0693FB]/5 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-3xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-primary-dark">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-6 tracking-tight">
                  {cap.title}
                </h3>
                <ul className="space-y-4 mb-8">
                  {cap.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-primary-light"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0693FB]" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between group-hover:text-[#0693FB] transition-colors">
                  <span className="text-xs font-bold text-[#0693FB]">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Built from the ground up for Saudi Arabia — not adapted from a Western system",
  "ZATCA e-invoicing certified for Phase 1 and Phase 2 — included in every subscription",
  "Full Arabic interface, Arabic reports, and Arabic-speaking support team",
  "AI features available to every subscriber — not a premium add-on",
  "Local implementation teams in Riyadh, Jeddah, and Dammam",
  "98% client retention rate across 500+ businesses in KSA and the GCC",
  "15+ years of regional ERP experience",
  "PDPL-compliant data residency within Saudi Arabia",
];

export default function DemoBenefits() {
  return (
    <section className="py-16 md:py-26 bg-[#002d62] text-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-[3.5rem] font-medium text-white leading-[1.05] tracking-tight mb-4">
              Why Businesses in Saudi Arabia Choose AdoxERP
            </h2>
            <p className="text-white/60 text-lg">
              We understand the local landscape. Our platform is built to solve
              the specific challenges of Saudi Arabian enterprises.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-base text-white/90 leading-tight">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

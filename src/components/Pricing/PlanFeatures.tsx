"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  Server,
  Headset,
  RefreshCw,
  Cloud,
} from "lucide-react";

const mainFeatures = [
  {
    title: "ZATCA E-Invoicing — Phase 1 & Phase 2",
    description:
      "Every AdoxERP plan includes full ZATCA Fatoorah compliance — Phase 1 and Phase 2. No add-on, no extra cost. Every invoice your business generates is automatically compliant.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Arabic & English Interface",
    description:
      "Every plan includes the full bilingual interface — Arabic with RTL support and English — switchable per user. All reports available in both languages.",
    icon: Globe2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Saudi Data Residency",
    description:
      "Your data is hosted within Saudi Arabia on certified cloud infrastructure, in full compliance with the Personal Data Protection Law (PDPL).",
    icon: Server,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "24/7 Arabic & English Support",
    description:
      "Every plan includes access to AdoxERP's support team — available 24/7 in Arabic and English by chat, email, and phone.",
    icon: Headset,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Regular Compliance Updates",
    description:
      "When ZATCA, GOSI, SAMA, or Ministry of Labour regulations change, AdoxERP updates the platform automatically. Compliance is maintained effortlessly.",
    icon: RefreshCw,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Cloud Infrastructure 99.9% Uptime",
    description:
      "AdoxERP runs on enterprise-grade cloud infrastructure with 99.9% uptime SLA, automated backups, and geo-redundant storage.",
    icon: Cloud,
    color: "text-sky-600",
    bgColor: "bg-sky-50",
  },
];

export default function PlanFeatures() {
  return (
    <section className="py-16 md:py-26 bg-white px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[3.5rem] font-medium text-primary-dark leading-[1.05] tracking-tight mb-4">
            What Is Included in Every AdoxERP Plan
          </h2>
          <p className="text-lg text-secondary-dark leading-relaxed font-normal max-w-5xl mx-auto">
            We believe core business essentials shouldn't be premium add-ons.
            That's why these features are standard across every plan we offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

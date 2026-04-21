"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Zap,
  Bot,
  Languages,
  MessageSquareText,
} from "lucide-react";

const features = [
  {
    title: "Your industry, your workflow",
    description:
      "We configure the demo around your sector — trading, manufacturing, retail, contracting, healthcare, or services. You see screens and workflows that are relevant to how you actually run your business.",
    icon: Briefcase,
  },
  {
    title: "ZATCA e-invoicing live",
    description:
      "Watch a ZATCA-compliant invoice generated, signed, and submitted to the Fatoorah portal in real time. See the QR code and XML format in action.",
    icon: Zap,
  },
  {
    title: "AI features in action",
    description:
      "See the AI business chatbot answer questions about simulated business data. Watch anomaly detection flag test duplicate payments and generate demand forecasts.",
    icon: Bot,
  },
  {
    title: "Arabic interface",
    description:
      "If your team works in Arabic, we run the demo entirely in Arabic — so you can see exactly what your staff would see when they log in.",
    icon: Languages,
  },
  {
    title: "Your specific questions answered",
    description:
      "Every demo includes dedicated Q&A time with an AdoxERP specialist who understands Saudi Arabia's business and regulatory environment.",
    icon: MessageSquareText,
  },
];

export default function DemoFeatures() {
  return (
    <section className="py-16 md:py-26 bg-white px-6">
      <div className="max-w-[1300px] mx-auto px-0 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-[3rem] font-medium text-primary-dark tracking-tight mb-4">
            What You Will See in Your Free Demo
          </h2>
          <p className="text-lg text-secondary-dark/70 max-w-2xl mx-auto">
            Experience the power of localized, intelligent ERP built for the
            Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-secondary-dark leading-relaxed text-sm opacity-80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

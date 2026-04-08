"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const faqs = [
  {
    question: "How does the AI assistant in IntelliERP work?",
    answer:
      "Our AI assistant uses natural language processing to interact with your business data. You can ask it to generate reports, predict inventory needs, or provide insights on sales trends instantly, eliminating the need for complex manual analysis.",
  },
  {
    question: "Can I integrate IntelliERP with my existing hardware and tools?",
    answer:
      "Yes, IntelliERP is designed with an open architecture that allows seamless integration with common POS systems, accounting software, and third-party logistics tools via our robust API.",
  },
  {
    question: "What platforms are supported by your mobile app?",
    answer:
      "Our mobile application is available for both iOS and Android, providing full functionality for field execution, route tracking, and real-time inventory management on the go.",
  },
  {
    question: "How secure is my business data in IntelliERP?",
    answer:
      "We prioritize security with enterprise-grade encryption (AES-256), regular security audits, and multi-factor authentication. Your data is stored in high-tier cloud environments with 99.9% uptime guaranteed.",
  },
  {
    question: "What kind of customer support and training do you offer?",
    answer:
      "We provide comprehensive onboarding, on-site/remote training sessions, and 24/7 dedicated technical support. Every client is assigned a success manager to ensure smooth transitions and optimal system use.",
  },
  {
    question: "Is IntelliERP scalable for growing businesses?",
    answer:
      "Absolutely. IntelliERP is cloud-native and modular by design. You can start with core modules and scale up as your business complexity grows, without needing to migrate data or change platforms.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-14 md:py-22 bg-white overflow-hidden"
      id="faq"
    >
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div
            data-aos="fade-up"
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold mb-6"
          >
            You have Q&apos;S, we have A&apos;S
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={200 + i * 100}
              className="group border border-black/5 rounded-2xl bg-white hover:border-[#0693FB]/20 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left gap-4"
              >
                <span className="text-sm md:text-base font-semibold text-primary-dark group-hover:text-[#0693FB] transition-colors">
                  {faq.question}
                </span>
                <div className="flex items-center gap-3 shrink-0">
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-black/20"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                  <ExternalLink className="w-4 h-4 text-black/10 group-hover:text-[#0693FB]/40 transition-colors" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-primary-light text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-primary-light">
          Didn&apos;t find the answer you are looking for?{" "}
          <a
            href="#contact"
            className="text-[#0693FB] font-semibold hover:underline"
          >
            Contact our support
          </a>
        </div>
      </div>
    </section>
  );
}

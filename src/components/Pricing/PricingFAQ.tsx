"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question:
      "Does AdoxERP pricing include ZATCA e-invoicing compliance in Saudi Arabia?",
    answer:
      "Yes. ZATCA e-invoicing compliance — Phase 1 and Phase 2 — is included in every AdoxERP plan at no additional cost. There is no separate ZATCA module, no compliance add-on, and no per-invoice submission fee. Full Fatoorah compliance is built into the platform for every subscriber.",
  },
  {
    question: "Can small businesses (SMEs) in Riyadh or Jeddah afford AdoxERP?",
    answer:
      "Yes. AdoxERP's Starter plan is designed specifically for growing SMEs in Saudi Arabia — with a focused set of core modules at a pricing level that reflects the reality of SME budgets in the Kingdom. You start with what you need and add modules as your business grows.",
  },
  {
    question: "Is there a free trial available for AdoxERP in Saudi Arabia?",
    answer:
      "AdoxERP offers a free, personalised demo session tailored to your business — which gives you a hands-on experience of the system without any commitment. We also offer a structured pilot period for businesses that want to run AdoxERP in a test environment.",
  },
  {
    question: "How is AdoxERP priced — per user, per module, or flat fee?",
    answer:
      "AdoxERP pricing is based on a combination of user count and module selection. You select the modules your business needs and the number of user licences required. This ensures you only pay for the functionality and capacity you actually use.",
  },
  {
    question:
      "Are there any hidden costs in AdoxERP's pricing for Saudi businesses?",
    answer:
      "No. AdoxERP's pricing is transparent. What is quoted covers your cloud hosting, ZATCA compliance, software updates, Arabic and English support, and the modules included in your plan. Implementation and data migration are quoted separately and clearly.",
  },
];

export default function PricingFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="pb-16 md:pb-26 bg-white border-t border-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-24">
          {/* Left Side: Title */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-[2.5rem] font-medium text-primary-dark leading-[1.05] tracking-tight mb-4">
                Pricing FAQ
              </h2>
              <h3 className="text-2xl md:text-[1.5rem] font-medium text-primary-dark leading-[1.05] tracking-tight">
                AdoxERP Plans in Saudi Arabia
              </h3>
              <p className="text-secondary-dark text-lg max-w-sm mt-3 md:mt-5">
                Common questions about AdoxERP pricing and plans in Saudi
                Arabia.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Accordion Items */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-100">
              {faqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div key={idx} className="py-6 md:py-8 group">
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left transition-all duration-300"
                    >
                      <span className="text-xl md:text-1xl font-bold text-primary-dark tracking-tight leading-tight group-hover:text-primary transition-colors pr-8">
                        {faq.question}
                      </span>
                      <div
                        className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45 text-primary" : "text-primary-dark group-hover:text-primary"}`}
                      >
                        <Plus className="w-6 h-6" />
                      </div>
                    </button>

                    {/* Using framer-motion for smooth height animation */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2">
                        <p className="text-md text-secondary-dark leading-relaxed font-normal max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

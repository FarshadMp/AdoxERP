"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Is the AdoxERP demo really free with no commitment?",
    answer:
      "Yes. The demo is completely free and carries no obligation. We want you to see exactly what AdoxERP can do for your business before making any decision. There is no sales pressure and no follow-up contract unless you choose to proceed.",
  },
  {
    question: "Can I request a demo in Arabic for my team in Saudi Arabia?",
    answer:
      "Yes. AdoxERP demos are available in full Arabic or English — or a combination of both. If your key decision-makers or team members are more comfortable in Arabic, our Saudi-based demo specialists will conduct the entire session in Arabic.",
  },
  {
    question: "How long does the AdoxERP demo take?",
    answer:
      "A standard AdoxERP demo takes approximately 45 minutes — 30 minutes of guided walkthrough tailored to your business, and 15 minutes of Q&A. For larger businesses or more complex requirements, we can arrange a more in-depth session.",
  },
  {
    question:
      "Can I get a demo focused specifically on ZATCA e-invoicing compliance?",
    answer:
      "Yes. We can tailor the demo specifically to ZATCA compliance — walking through the entire Fatoorah workflow live: invoice generation, XML formatting, digital signing, QR code creation, real-time API submission to ZATCA, and rejection handling.",
  },
  {
    question:
      "Can AdoxERP give a demo to our team in Dammam or Jeddah in person?",
    answer:
      "Yes. AdoxERP has local teams in Riyadh, Jeddah, and Dammam who can conduct in-person demos at your office. We can also arrange demonstrations at our offices in each city. Contact us to schedule an in-person session.",
  },
];

export default function DemoFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="pt-16 md:pt-26 bg-white border-t border-gray-50">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">
                Demo FAQ
              </h2>
              <p className="text-secondary-dark/70 text-lg">
                Common questions about booking and attending your AdoxERP demo
                session.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-100">
              {faqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div key={idx} className="py-8 group">
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="text-xl font-bold text-primary-dark group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <div
                        className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        <Plus className="w-6 h-6 text-primary" />
                      </div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6">
                        <p className="text-secondary-dark/70 leading-relaxed text-lg">
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

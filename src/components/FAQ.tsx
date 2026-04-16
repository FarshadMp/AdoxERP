"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const faqs = [
  {
    question:
      "What is AdoxERP and how does it work for businesses in Saudi Arabia?",
    answer:
      "AdoxERP is a cloud-based, AI-powered Enterprise Resource Planning (ERP) system built specifically for businesses operating in Saudi Arabia and the wider GCC region. It integrates all your core business functions — accounting, sales, inventory, HR, manufacturing, CRM, and e-commerce — into a single intelligent platform. Unlike generic ERP solutions adapted for the Middle East as an afterthought, AdoxERP was built from the ground up with Saudi regulations, ZATCA e-invoicing compliance, Arabic language support, and local business practices at its core. Whether you are a trading company in Riyadh, a manufacturer in Dammam, or a retailer in Jeddah, AdoxERP works the way your business works.",
  },
  {
    question:
      "Is AdoxERP fully compliant with ZATCA e-invoicing (Fatoorah) requirements?",
    answer:
      "Yes — AdoxERP is fully certified for both Phase 1 (Generation) and Phase 2 (Integration) of ZATCA’s e-invoicing mandate. Every invoice is automatically formatted in the required XML structure, digitally signed, and submitted directly to the ZATCA Fatoorah portal in real time. QR codes are generated on every invoice automatically. If an invoice is rejected by ZATCA, the system flags it immediately with clear guidance on corrections. For businesses in Riyadh, Jeddah, Dammam, or anywhere in the Kingdom, this means zero compliance risk and no penalties.",
  },
  {
    question: "Which businesses in Saudi Arabia is AdoxERP best suited for?",
    answer:
      "AdoxERP is designed to serve a wide range of businesses across Saudi Arabia — from growing SMEs to large multi-branch enterprises. It is particularly well-suited for trading and distribution companies in Riyadh, manufacturing and industrial businesses in Dammam and the Eastern Province, retail and e-commerce operations in Jeddah, contracting and project-based businesses working on Vision 2030 initiatives, and service businesses with HR-heavy operations requiring GOSI and Saudization compliance.",
  },
  {
    question:
      "How does AI work inside AdoxERP and what does it actually do for my business?",
    answer:
      "AdoxERP has artificial intelligence embedded across the platform — not bolted on as a separate tool. In practical terms, this means your AI business chatbot can answer questions about your data in plain Arabic or English. The anomaly detection engine monitors financial transactions and inventory in real time and flags anything unusual before it becomes costly. Predictive analytics forecast your cash flow, sales demand, and inventory needs weeks in advance. AI agents handle routine tasks automatically, and AI-generated reports turn complex data into clear, readable business summaries in seconds.",
  },
  {
    question:
      "Does AdoxERP support Arabic and is the interface available in Arabic?",
    answer:
      "Yes — AdoxERP is fully bilingual with complete Arabic and English support throughout the platform. The Arabic interface uses a right-to-left (RTL) layout, Arabic reporting, and bilingual document generation — so invoices, payslips, purchase orders, and financial reports can be produced in either language or both. Arabic is a first-class language built into the core of AdoxERP, which matters deeply for day-to-day usability across Saudi Arabia.",
  },
  {
    question:
      "How does AdoxERP handle HR, payroll, GOSI, and Saudization requirements?",
    answer:
      "AdoxERP’s HR and payroll module is built specifically around Saudi Arabia’s labor law and regulatory environment. It handles full GOSI contribution calculations for both Saudi and expat employees, Saudization (Nitaqat) tracking to help your business stay within Vision 2030 compliance targets, automated end-of-service benefit calculations, Iqama and visa expiry tracking, and payroll processing for multi-nationality workforces.",
  },
  {
    question:
      "Can I access AdoxERP from multiple offices or cities across Saudi Arabia?",
    answer:
      "Absolutely. AdoxERP is a cloud-based system with 99.9% uptime, which means your team in Riyadh, your warehouse in Dammam, and your sales office in Jeddah are all working from the same live data at the same time. Role-based access controls let you define exactly what each user or location can see and do inside the system. This makes AdoxERP ideal for businesses with multiple branches, warehouses, or offices across Saudi Arabia and the GCC.",
  },
  {
    question:
      "How secure is AdoxERP and does it comply with Saudi Arabia’s data protection laws?",
    answer:
      "Data security is built into every layer of AdoxERP. The platform uses end-to-end encryption for all data in transit and at rest, multi-factor authentication, automated daily backups with geo-redundant storage, and a complete audit log of every action. AdoxERP is fully compliant with Saudi Arabia’s Personal Data Protection Law (PDPL), which governs how businesses collect, store, and process personal data in the Kingdom.",
  },
  {
    question:
      "How long does it take to implement AdoxERP for a business in Riyadh or Jeddah?",
    answer:
      "For small to mid-size businesses in Riyadh, Jeddah, or Dammam activating core modules, a typical implementation takes between 4 and 8 weeks from kickoff to go-live. Larger enterprises or businesses with complex manufacturing, multi-branch setups, or custom integration requirements may take 2 to 4 months. Our local implementation consultants in Saudi Arabia manage the process from start to finish — including data migration, staff training, ZATCA registration, and post-go-live support.",
  },
  {
    question: "What support does AdoxERP offer and is it available in Arabic?",
    answer:
      "AdoxERP offers 24/7 bilingual support in both Arabic and English — by phone, email, and live chat. Our support team is based in Saudi Arabia and understands the local market, regulatory environment, and the specific challenges businesses in Riyadh, Jeddah, and Dammam face. Every AdoxERP subscription includes access to our knowledge base, video training library, and dedicated onboarding support. Our 98% client retention rate reflects the fact that when our customers need help, they actually get it.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decorative patterns - keeping it consistent with the rest of the site */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
              FAQ
            </div>

            <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark mb-4 leading-[1.1]">
              Everything You Need to Know About AdoxERP
            </h2>

            <p className="text-lg text-secondary-dark leading-relaxed font-normal max-w-5xl">
              Quick answers for business owners, finance leaders, and IT teams
              across Saudi Arabia — from Riyadh to Jeddah to Dammam and beyond.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30_rgba(0,0,0,0.1)] transition-all duration-300 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 md:py-6 flex items-center justify-between text-left transition-colors duration-200"
              >
                <span className="text-md md:text-lg leading-[1.15] tracking-tight font-bold text-primary-dark pr-8 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="flex items-center gap-3 md:gap-6 shrink-0">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    className={`w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-primary text-white"
                        : "bg-slate-50 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        },
                        opacity: {
                          duration: 0.25,
                          delay: 0.1,
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                          ease: [0.4, 0, 1, 1],
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-10 pb-8 md:pb-10">
                      <div className="pt-6 border-t border-slate-100 text-secondary-dark text-sm md:text-base leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Activity,
  TrendingUp,
  UserCheck,
  FileText,
  Settings,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Plus,
  MessageSquare,
  AlertTriangle,
  BarChart3,
  BrainCircuit,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const statusCards = [
  {
    title: "Arabic",
    status: "AI chatbot support",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Real-time",
    status: "Anomaly detection",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "bg-amber-500",
  },
  {
    title: "Weeks",
    status: "Demand forecasting",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
  {
    title: "24/7",
    status: "AI agents working",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "bg-purple-500",
  },
];

const aiFeatures = [
  {
    title: "AI Business Chatbot (Arabic & English)",
    description:
      "Ask your ERP anything in plain Arabic or English and get an instant, accurate answer from your real business data. No reports to run. Just ask.",
    icon: <MessageSquare />,
  },
  {
    title: "Anomaly Detection & Real-Time Alerts",
    description:
      "AdoxERP’s AI engine monitors every financial transaction and inventory movement in real time looking for patterns that fall outside normal parameters.",
    icon: <AlertTriangle />,
  },
  {
    title: "Predictive Analytics & Demand Forecasting",
    description:
      "Analyse historical sales data, seasonal patterns, and market trends to generate forward-looking forecasts for cash flow and inventory demand.",
    icon: <BarChart3 />,
  },
  {
    title: "AI Agents That Work Autonomously",
    description:
      "Digital workers that handle defined, rule-based tasks automatically — around the clock, without supervision. They work quietly in the background.",
    icon: <BrainCircuit />,
  },
  {
    title: "AI-Generated Reports & Summaries",
    description:
      "The AI reporting engine produces customised business summaries and financial trend analyses in seconds. Choose Arabic or English.",
    icon: <FileText />,
  },
  {
    title: "Intelligent Process Automation",
    description:
      "Learns how your business operates and automates repetitive tasks like PO verification, payroll calculations, and ZATCA submissions.",
    icon: <Settings />,
  },
];

const faqs = [
  {
    question:
      "Does AdoxERP’s AI chatbot work in Arabic for businesses in Saudi Arabia?",
    answer:
      "Yes. AdoxERP’s AI business chatbot is fully bilingual — responding in Arabic or English based on the language you use to ask your question. Your team in Riyadh can ask questions in Arabic and get instant, accurate answers from your live business data. The chatbot understands business context — it knows what 'last quarter' means and how to query your data intelligently.",
  },
  {
    question:
      "How does AdoxERP’s anomaly detection protect Saudi businesses from financial errors and fraud?",
    answer:
      "AdoxERP’s AI engine establishes a baseline of normal behaviour for your business — typical transaction amounts, usual supplier patterns, expected inventory movements. When any transaction or event falls significantly outside that baseline, the system flags it immediately as an anomaly and alerts the relevant team member, protecting your business without requiring manual audits.",
  },
  {
    question: "What can AdoxERP’s AI predict for businesses in Saudi Arabia?",
    answer:
      "AdoxERP’s predictive analytics engine can forecast sales demand by product, category, and region; cash flow and working capital requirements; inventory reorder timing; HR headcount needs; and revenue trends. Forecasts are generated from your own historical data — the more you use AdoxERP, the more accurate the predictions become.",
  },
  {
    question:
      "What are AI agents in AdoxERP and how do they help Saudi businesses?",
    answer:
      "AI agents in AdoxERP are autonomous digital assistants that perform defined tasks automatically. Examples include: sending payment reminders to overdue customers; raising purchase orders when stock falls below reorder points; and flagging transactions for approval when they exceed thresholds. They work continuously in the background, handling operational tasks that would otherwise require manual effort.",
  },
  {
    question:
      "Is AdoxERP’s AI available to all businesses or only large enterprises in Saudi Arabia?",
    answer:
      "All AI features in AdoxERP are available to businesses of every size — from a growing SME in Dammam to a large enterprise in Riyadh. The AI capabilities scale with your data: the more transactions and history in your system, the more accurate the predictions. There is no separate AI tier; AI is built into the AdoxERP platform for every subscriber.",
  },
];

export default function AiFeaturesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Page Hero Section - UPDATED to match ZATCA Style */}
      <section className="relative py-20 overflow-hidden border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark leading-[1.05] mb-5">
                Artificial Intelligence Built <br />
                <span className="text-primary">
                  Into Your ERP — Not Bolted On
                </span>
              </h1>
              <p className="text-xl text-secondary-dark leading-relaxed font-normal mb-8">
                AdoxERP Does Not Just Store Your Business Data. It Understands
                It, Acts On It, and Makes You Smarter. Built specifically for
                the Saudi Arabian market with full Arabic support.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/free-demo"
                  className="px-5 py-4 md:py-3 bg-primary text-white text-sm rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 shadow-lg shadow-primary/10"
                >
                  Experience AI Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="px-5 py-4 md:py-3 border border-slate-200 text-primary-dark text-sm rounded-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center"
                >
                  Explore AI Features
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-26 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-[2.75rem] font-medium tracking-tight text-primary-dark leading-[1.1] mb-6 md:mb-8">
                  ERP That Thinks, Predicts, <br />
                  <span className="text-primary">
                    and Protects Your Business
                  </span>
                </h2>
                <p className="text-lg text-secondary-dark leading-relaxed font-normal mb-6 md:mb-8">
                  Most ERP systems are record-keeping tools. They store what
                  happened — transactions, stock movements, invoices. AdoxERP is
                  different. With artificial intelligence embedded across every
                  module, it continuously monitors your business in real time,
                  spots patterns your team would never catch, forecasts what is
                  coming, and automates the routine tasks that consume your
                  time.
                </p>
                <p className="text-lg text-secondary-dark leading-relaxed font-normal">
                  For businesses in Saudi Arabia navigating rapid growth and
                  tightening regulations, this is not a nice-to-have. It is a
                  competitive advantage.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                {statusCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f8fafc] p-6 rounded-[2rem] border border-slate-100 flex flex-col items-start gap-4 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-500 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${card.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 shrink-0`}
                    >
                      {React.cloneElement(card.icon as React.ReactElement<any>, {
                        className: "w-6 h-6",
                      })}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                        {card.status}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section
        id="features"
        className="py-16 md:py-26 bg-slate-100/50 border-b border-slate-100"
      >
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark">
              AdoxERP AI Features
            </h2>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            {aiFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="min-w-[300px] md:min-w-0 snap-center bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:border-primary/30 hover:shadow-[0_30px_60px_rgba(0,138,208,0.1)] transition-all duration-700 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center shadow-sm mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shrink-0">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, {
                    className: "w-7 h-7",
                  })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Matters Section */}
      <section className="py-16 md:py-26 bg-white px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden border border-slate-50">
                <img
                  src="/img/ai-features-hero.png"
                  alt="AI Business Intelligence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 w-20 md:w-32 h-20 md:h-32 bg-primary rounded-3xl flex items-center justify-center text-white shadow-2xl animate-bounce-slow">
                <BrainCircuit className="w-10 md:w-16 h-10 md:h-16" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[3rem] font-medium tracking-tight text-primary-dark mb-6 md:mb-8 leading-tight">
                Why AI Matters for <br />
                <span className="text-primary">Saudi Businesses Right Now</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Saudi Arabia’s Vision 2030 is driving a wave of digital
                transformation. Businesses that embrace AI-powered operations
                today are building a compound competitive advantage.
              </p>
              <ul className="space-y-6">
                {[
                  "Faster, better decisions based on real data",
                  "Lower operational costs through task automation",
                  "Reduced compliance risk with automated ZATCA submissions",
                  "Better customer service with real-time info",
                  "Competitive differentiation in a growing market",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-slate-700 font-semibold text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Split Layout */}
      <section className="py-16 md:py-26 bg-white border-t border-slate-100">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-24">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-[3rem] font-medium text-primary-dark leading-[1.05] tracking-tight mb-6">
                  AI in AdoxERP <br />
                  <span className="text-primary">FAQ</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-sm">
                  Find answers to common questions about our artificial
                  intelligence capabilities and how they empower Saudi
                  businesses.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-slate-100">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-6 md:py-8 group">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left transition-all duration-300"
                      >
                        <span className="text-xl md:text-2xl font-bold text-primary-dark tracking-tight leading-tight group-hover:text-primary transition-colors pr-8">
                          {faq.question}
                        </span>
                        <div
                          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 text-primary"
                              : "text-slate-400 group-hover:text-primary"
                          }`}
                        >
                          <Plus className="w-8 h-8" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 pb-2 text-slate-600 text-lg leading-relaxed max-w-3xl">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Premium UI */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-primary rounded-2xl md:rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
              </div>

              <div className="flex flex-col lg:flex-row items-stretch">
                <div className="w-full lg:w-[22%] relative overflow-hidden min-h-[200px] lg:min-h-0">
                  <Image
                    src="/img/saudi-team-who-uses.png"
                    alt="AI Experts Team"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent lg:hidden" />
                </div>

                <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-[1.75rem] font-bold text-white leading-tight tracking-tight mb-3">
                      See AdoxERP AI in Action — Book a Live Demo
                    </h3>
                    <p className="text-white/80 text-sm md:text-base font-normal">
                      Available in Arabic & English · Riyadh · Jeddah · Dammam ·
                      GCC
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <Link
                      href="/free-demo"
                      className="px-8 py-3.5 bg-white hover:bg-white/90 text-primary-dark text-sm font-bold rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 active:scale-95 group shadow-lg"
                    >
                      Book a Free Demo
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

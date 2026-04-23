"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  QrCode,
  RefreshCcw,
  Archive,
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileCheck,
  Globe,
  LayoutDashboard,
  Link2,
  Lock,
  ChevronDown,
  Building2,
  Plus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const phaseCards = [
  {
    title: "Phase 1",
    status: "Fully certified",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Phase 2",
    status: "Fully certified",
    icon: <Link2 className="w-6 h-6" />,
    color: "bg-indigo-600",
  },
  {
    title: "Real-time",
    status: "ZATCA submission",
    icon: <RefreshCcw className="w-6 h-6" />,
    color: "bg-cyan-500",
  },
  {
    title: "Zero",
    status: "Manual steps",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
];

const workflowSteps = [
  "Invoice is created in AdoxERP — from a sales order, delivery note, or manual entry.",
  "The system automatically formats the invoice in ZATCA-required XML structure (UBL 2.1 standard).",
  "The invoice is cryptographically signed using your registered ZATCA digital certificate.",
  "A ZATCA-compliant QR code is generated and embedded in the invoice document.",
  "The invoice is submitted to ZATCA’s Fatoorah API in real time for validation.",
  "ZATCA validates and returns a clearance stamp (for B2B invoices) or a reporting confirmation (for B2C invoices).",
  "The cleared invoice is delivered to your customer in Arabic, English, or both.",
  "A tamper-proof copy is archived in AdoxERP for the ZATCA-required retention period.",
];

const features = [
  {
    title: "Phase 1 & Phase 2 Certified",
    description:
      "AdoxERP holds full ZATCA certification for both phases of the Fatoorah programme. Your invoices are generated in compliant XML format, digitally signed with a ZATCA-registered certificate, and submitted to the Fatoorah portal automatically for every transaction.",
    icon: <ShieldCheck />,
  },
  {
    title: "Real-Time API Submission to ZATCA Fatoorah",
    description:
      "AdoxERP connects directly to ZATCA’s Fatoorah API. Every invoice is submitted and cleared in real time — typically in under two seconds. There is no batch processing delay, no end-of-day submission queue, and no risk of submitting uncompliant invoices.",
    icon: <RefreshCcw />,
  },
  {
    title: "Automatic QR Code Generation",
    description:
      "Every invoice generated through AdoxERP automatically includes a ZATCA-compliant QR code — printed on the document and scannable by customers and auditors to verify authenticity instantly.",
    icon: <QrCode />,
  },
  {
    title: "Rejection Handling & Correction Guidance",
    description:
      "If ZATCA rejects an invoice, AdoxERP flags it immediately in your dashboard with a clear, plain-language explanation of the rejection reason and the required correction. No technical knowledge needed to resolve compliance issues.",
    icon: <LayoutDashboard />,
  },
  {
    title: "Credit Notes & Debit Notes Compliance",
    description:
      "ZATCA’s requirements extend to credit notes, debit notes, and amended invoices. AdoxERP handles all adjustment documents in full compliance — linked to original invoices, correctly formatted, and submitted to ZATCA automatically.",
    icon: <FileCheck />,
  },
  {
    title: "Full Audit Trail & Tamper-Proof Archive",
    description:
      "AdoxERP maintains a complete, cryptographically secured archive of every e-invoice issued — exactly as ZATCA requires. In the event of a ZATCA audit, your full invoice history is accessible instantly, organised, and verifiably authentic.",
    icon: <Lock />,
  },
  {
    title: "Multi-Entity & Multi-Branch Support",
    description:
      "For businesses operating multiple legal entities or branches across Saudi Arabia, AdoxERP manages ZATCA compliance separately for each registered entity — with separate ZATCA certificates, submission queues, and compliance dashboards for each.",
    icon: <Building2 />,
  },
  {
    title: "Arabic & English Invoice Generation",
    description:
      "AdoxERP generates ZATCA-compliant invoices in Arabic, English, or bilingual format — meeting the language requirements for different transaction types and customer preferences across Saudi Arabia.",
    icon: <Globe />,
  },
];

const faqs = [
  {
    question:
      "What happens if my business is not ZATCA-compliant in Saudi Arabia?",
    answer:
      "Non-compliance with ZATCA’s e-invoicing requirements can result in financial penalties issued by the Zakat, Tax and Customs Authority. Penalties can be applied for generating invoices in a non-compliant format, failing to submit invoices to ZATCA’s Fatoorah portal in real time (Phase 2), or failing to maintain the required invoice archive. The exact penalty amounts depend on the nature and frequency of the violation.",
  },
  {
    question: "What is the difference between ZATCA Phase 1 and Phase 2?",
    answer:
      "Phase 1 (Generation) required businesses to generate invoices in a structured electronic format with a QR code — effective December 2021. Phase 2 (Integration) requires businesses to connect their billing system directly to ZATCA’s Fatoorah API for real-time invoice submission and validation. Phase 2 is being rolled out in waves by ZATCA, based on business revenue. AdoxERP is certified for both phases.",
  },
  {
    question:
      "Does AdoxERP need a separate tool or plugin for ZATCA compliance?",
    answer:
      "No. ZATCA compliance is built directly into the AdoxERP platform — not a plugin, add-on, or third-party integration. Every invoice generated through AdoxERP is automatically compliant from day one. There is nothing extra to install, configure, or pay for.",
  },
  {
    question:
      "How does AdoxERP handle ZATCA compliance for businesses with multiple branches in Saudi Arabia?",
    answer:
      "AdoxERP supports multi-entity and multi-branch ZATCA compliance. Each registered VAT entity has its own ZATCA digital certificate, its own submission queue, and its own compliance dashboard — managed from within a single AdoxERP instance. Group businesses with operations in Riyadh, Jeddah, and Dammam can manage compliance for all entities centrally.",
  },
  {
    question:
      "Can AdoxERP generate ZATCA-compliant credit notes and return invoices?",
    answer:
      "Yes. AdoxERP generates ZATCA-compliant credit notes, debit notes, and amended invoices — all correctly linked to the original invoice, formatted in the required XML structure, and submitted to the ZATCA Fatoorah portal automatically. All adjustment documents are archived alongside their original invoices for audit purposes.",
  },
];

export default function ZatcaComplianceClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Page Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark leading-[1.05] mb-5">
                ZATCA E-Invoicing Compliance —{" "}
                <span className="text-primary">
                  Phase 1 & Phase 2 Built Right In
                </span>
              </h1>
              <p className="text-xl text-secondary-dark leading-relaxed font-normal mb-8">
                AdoxERP is fully certified for ZATCA Fatoorah e-invoicing in
                Saudi Arabia. Automatic XML generation, real-time submission, QR
                codes & full audit trail — zero manual steps.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/free-demo"
                  className="px-5 py-4 md:py-3 bg-primary text-white text-sm rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 shadow-lg shadow-white/10 md:shadow-primary/10"
                >
                  Book a Free Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      </section>

      {/* Integrated Compliance Overview Section */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Left Side: Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-[2.75rem] font-medium tracking-tight text-primary-dark leading-[1.1] mb-6">
                  ZATCA E-Invoicing Compliance <br />
                  <span className="text-primary">for Saudi Businesses</span>
                </h2>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-sm font-bold mb-8 border border-primary/10">
                  Full Fatoorah Certification — Phase 1 & Phase 2 — Built Into
                  Every AdoxERP Subscription
                </div>

                <p className="text-lg text-secondary-dark leading-relaxed font-normal mb-6">
                  ZATCA's e-invoicing mandate — known as Fatoorah — is one of
                  the most consequential regulatory changes in Saudi Arabia's
                  business history. Non-compliance carries real financial
                  penalties, and the technical requirements of Phase 2
                  (Integration) have caught many businesses off-guard.
                </p>
                <p className="text-lg text-secondary-dark leading-relaxed font-normal">
                  AdoxERP is fully certified for both phases of ZATCA's
                  e-invoicing programme. Compliance is not an add-on. It is
                  built into the foundation of our platform — which means every
                  invoice your business generates is automatically compliant,
                  from the moment you go live.
                </p>
              </motion.div>
            </div>

            {/* Right Side: Status Grid */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                {phaseCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f8fafc] p-6 rounded-[2rem] border border-slate-100 flex flex-col items-start gap-4 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-500 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${card.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 shrink-0`}
                    >
                      {React.cloneElement(card.icon as React.ReactElement, {
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

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-emerald-800 text-sm font-bold">
                  Official ZATCA Implementation Partner Compatibility
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - Phase 1 vs Phase 2 */}
      <section className="py-16 md:py-26 px-6 md:px-12 max-w-[1300px] mx-auto bg-white">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-[3rem] font-medium tracking-tight text-primary-dark mb-4">
            What Is ZATCA E-Invoicing (Fatoorah)?
          </h2>
          <p className="text-lg text-secondary-dark max-w-3xl">
            ZATCA (the Zakat, Tax and Customs Authority) introduced its
            e-invoicing programme to modernise tax compliance and reduce fraud
            in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Phase 1 Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-[#f8fafc] rounded-[1.25rem] md:rounded-[2.8rem] p-6 md:p-12 h-full border border-slate-200/60 flex flex-col items-start transition-all duration-700 group-hover:bg-white group-hover:shadow-[0_20px_80px_-20px_rgba(0,138,208,0.15)]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-1">
                    Compliance Stage
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-dark">
                    Phase 1 — Generation
                  </h3>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200/60 mb-6 md:mb-8" />

              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                All VAT-registered businesses in Saudi Arabia were required to
                generate invoices in a structured electronic format (XML or PDF
                with embedded XML), stored electronically with a QR code.
                Manual, handwritten, and basic digital invoices were no longer
                compliant.
              </p>

              <div className="mt-auto flex items-center gap-3 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Active Since Dec 2021
              </div>
            </div>
          </motion.div>

          {/* Phase 2 Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-[#f8fafc] rounded-[1.25rem] md:rounded-[2.8rem] p-6 md:p-12 h-full border border-slate-200/60 flex flex-col items-start transition-all duration-700 group-hover:bg-white group-hover:shadow-[0_20px_80px_-20px_rgba(79,70,229,0.15)]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200/30 group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <RefreshCcw className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest block mb-1">
                    Integration Stage
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-dark">
                    Phase 2 — Integration
                  </h3>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200/60 mb-6 md:mb-8" />

              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Businesses are required to connect their invoicing system
                directly to ZATCA's Fatoorah API, allowing real-time submission
                and validation of every invoice before it is shared with the
                buyer. Invoices must be cryptographically stamped and digitally
                signed.
              </p>

              <div className="mt-auto flex items-center gap-3 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold border border-indigo-100">
                <RefreshCcw className="w-4 h-4 animate-spin-slow shrink-0" />
                Rolling Out Since Jan 2023
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section - LIGHT VERSION */}
      <section className="py-16 md:py-26 bg-white overflow-hidden relative border-t border-slate-100">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-10 md:mb-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-[3rem] font-medium tracking-tight text-primary-dark mb-4">
              How AdoxERP Handles ZATCA Compliance — Step by Step
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              AdoxERP automates the entire ZATCA compliance workflow from end to
              end. Here is exactly what happens every time your business
              generates an invoice:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-12">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-start gap-4 md:gap-6 p-6 md:p-6 rounded-3xl border border-slate-100 hover:bg-slate-50 transition-colors duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  {idx + 1}
                </div>
                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-26 bg-slate-100/50 border-y border-slate-100">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-[3rem] font-medium tracking-tight text-primary-dark mb-4">
              AdoxERP ZATCA Features
            </h2>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="min-w-[280px] md:min-w-0 snap-center bg-white p-6 md:p-8 rounded-[1.5rem] border border-slate-100 hover:border-primary/30 hover:shadow-[0_30px_60px_rgba(0,138,208,0.1)] transition-all duration-700 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-primary flex items-center justify-center shadow-sm mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shrink-0">
                  {typeof feature.icon === "object" &&
                    React.cloneElement(feature.icon as React.ReactElement, {
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

      {/* Target Audience Section */}
      <section className="py-16 md:py-26 border-y border-slate-100">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-[3rem] font-medium tracking-tight text-primary-dark mb-6 md:mb-8 leading-tight">
                Who Needs ZATCA E-Invoicing Compliance in Saudi Arabia?
              </h2>
              <p className="text-xl text-slate-600 mb-10">
                ZATCA’s Fatoorah e-invoicing requirement applies to all
                VAT-registered businesses in Saudi Arabia. This includes:
              </p>
              <ul className="space-y-6">
                {[
                  "All businesses generating B2B invoices above the VAT registration threshold",
                  "Businesses generating B2C (retail) invoices — Phase 1 compliance required",
                  "Businesses in Riyadh, Jeddah, Dammam, and all regions of the Kingdom",
                  "Foreign businesses registered for VAT in Saudi Arabia",
                  "All sectors including trading, manufacturing, retail, contracting, healthcare, and professional services",
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
            <div className="relative">
              <div className="aspect-square bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden">
                <img
                  src="/img/zatca-compliance-hero.png"
                  alt="ZATCA Compliance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - UPDATED UI */}
      <section className="py-16 md:py-26 bg-white border-t border-slate-50">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-24">
            {/* Left Side: Title */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-[3rem] font-medium text-primary-dark leading-[1.05] tracking-tight mb-6">
                  ZATCA E-Invoicing <br />
                  <span className="text-primary">FAQ</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-sm">
                  Find answers to common questions about Fatoorah compliance,
                  Phase 2 integration, and AdoxERP's certified solutions in
                  Saudi Arabia.
                </p>
              </div>
            </div>

            {/* Right Side: Accordion Items */}
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

      {/* Final CTA - UPDATED UI */}
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
                    alt="ZATCA Compliance Team"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent lg:hidden" />
                </div>

                <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-[1.75rem] font-bold text-white leading-tight tracking-tight mb-3">
                      Get ZATCA-Compliant Today — Book a Free AdoxERP Demo
                    </h3>
                    <p className="text-white/80 text-sm md:text-base font-normal">
                      Speak to our Saudi Arabia compliance team in Riyadh,
                      Jeddah or Dammam.
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

"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  QrCode,
  RefreshCcw,
  Archive,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Phase 1 & Phase 2 Certified",
    description:
      "AdoxERP is fully certified for ZATCA’s Phase 1 (Generation) and Phase 2 (Integration) requirements. Your invoices are automatically generated in the correct XML format, digitally signed, and submitted directly to the ZATCA portal — with no third-party tools needed.",
    icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "QR Code Generation on Every Invoice",
    description:
      "Every invoice generated through AdoxERP automatically includes a ZATCA-compliant QR code — printed clearly on the document and verifiable by customers and auditors instantly. No manual coding, no errors, full compliance from day one.",
    icon: <QrCode className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Real-Time Submission & Validation",
    description:
      "AdoxERP connects directly to ZATCA’s Fatoorah API. Invoices are submitted and validated in real time — and any rejections are flagged immediately with clear guidance on what needs to be corrected. Your team always knows the status of every invoice at a glance.",
    icon: <RefreshCcw className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Full Audit Trail & Archive",
    description:
      "AdoxERP stores a complete, tamper-proof archive of every e-invoice submitted — exactly as ZATCA requires. In the event of a tax audit, your records are ready to present immediately. No scrambling through emails. No missing documents. Just clean, compliant records.",
    icon: <Archive className="w-8 h-8 md:w-10 md:h-10" />,
  },
];

export default function ZatcaCompliance() {
  return (
    <section className="pb-14 md:pb-24 bg-white relative overflow-hidden">
      <div className="px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-sm">
              ZATCA E-Invoicing Compliance
            </span>

            <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark mb-4 leading-[1.1]">
              Full E-Invoice Compliance With ZATCA —{" "}
              <span className="text-primary">Built Right In</span>
            </h2>

            <p className="text-lg text-secondary-dark leading-relaxed font-normal max-w-5xl">
              ZATCA’s e-invoicing mandate (Fatoorah) is one of the most
              significant regulatory requirements facing businesses in Saudi
              Arabia today — and non-compliance carries real financial
              penalties. AdoxERP is fully certified for both Phase 1
              (Generation) and Phase 2 (Integration) of the ZATCA e-invoicing
              programme, which means every invoice your business generates is
              automatically formatted, validated, and submitted to the ZATCA
              portal without any manual intervention. You stay compliant. Your
              accountants stay sane. And your business keeps moving.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            // Directional offsets to make cards slide out from the center
            // Index 0, 1 (Left side) start with positive X to come from center-right
            // Index 2, 3 (Right side) start with negative X to come from center-left
            let initialX = 0;
            if (index === 0) initialX = 100;
            else if (index === 1) initialX = 30;
            else if (index === 2) initialX = -30;
            else if (index === 3) initialX = -100;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: initialX, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: (index % 4) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-[#f8fafc] hover:bg-white p-6 md:p-8 rounded-[1.5rem] border border-slate-100/50 hover:border-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,138,208,0.15)] transition-all duration-700 flex flex-col items-start"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl text-primary border border-slate-100 shadow-sm mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-3">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal opacity-90 group-hover:opacity-100">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner - Requested Style */}
        <div className="max-w-[1300px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 md:mt-16 max-w-5xl mx-auto"
          >
            <div className="relative bg-primary rounded-2xl md:rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
              </div>

              <div className="flex flex-col lg:flex-row items-stretch">
                <div className="w-full lg:w-[18%] relative overflow-hidden min-h-[220px] lg:min-h-0">
                  <img
                    src="/img/cta-people.png"
                    alt="Professional team"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent lg:hidden" />
                </div>

                <div className="flex-1 p-8 md:p-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-center md:text-left">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-[1.5rem] font-bold text-white leading-tight tracking-tight">
                      Get ZATCA-Ready Today —{" "}
                      <span className="opacity-80 block lg:inline-block">
                        Talk to Our Compliance Team
                      </span>
                    </h3>
                  </div>

                  <div className="flex-shrink-0">
                    <button className="px-6 py-3 bg-white hover:bg-white/90 text-primary-dark text-sm font-bold rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 active:scale-95 group">
                      Talk to Compliance
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

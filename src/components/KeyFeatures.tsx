"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cloud,
  Maximize,
  Languages,
  Calendar,
  DollarSign,
  ShieldCheck,
  CreditCard,
  Database,
  Smartphone,
  LayoutGrid,
  Users,
  Lock,
  Puzzle,
  Building2,
} from "lucide-react";

export default function KeyFeatures() {
  const features = [
    {
      title: "Cloud-Based & Always Accessible",
      description:
        "Access your entire business from anywhere in Saudi Arabia — or anywhere in the world. AdoxERP runs in the cloud with 99.9% uptime, so your team in Riyadh and your managers in Jeddah are always working from the same live data, on any device, at any time.",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      title: "Modular & Scalable by Design",
      description:
        "Start with what you need today. Add modules as your business grows. AdoxERP scales from a single-branch SME in Dammam to a multi-city enterprise across the GCC — without expensive migrations, hardware upgrades, or system overhauls.",
      icon: <Maximize className="w-5 h-5" />,
    },
    {
      title: "Arabic Language Interface & Support",
      description:
        "AdoxERP is fully localized in Arabic — every screen, report, and customer-facing document. The interface supports right-to-left (RTL) layout natively, and our Arabic-speaking customer support team is available 24/7.",
      icon: <Languages className="w-5 h-5" />,
    },
    {
      title: "Hijri Calendar Integration",
      description:
        "AdoxERP supports a dual calendar system — Gregorian and Hijri — across all modules. Issue official documents, schedule transactions, and generate reports using Hijri dates where required, without manual conversion.",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      title: "Multi-Currency Support (SAR Primary)",
      description:
        "Handle transactions in Saudi Riyals as your primary currency while managing international payments in USD, EUR, AED, and other currencies. Automated exchange rate updates keep your books accurate.",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      title: "ZATCA & SAMA Compliance",
      description:
        "AdoxERP is certified for ZATCA e-invoicing (Phase 1 and Phase 2) and built to meet SAMA’s financial regulations — giving businesses in the Kingdom a single compliant platform for VAT reporting and e-invoicing.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Saudi Payment Gateway Integrations",
      description:
        "AdoxERP connects natively with Saudi Arabia’s leading payment infrastructure — Mada, STC Pay, HyperPay, Tabby, Tamara, and major Saudi banking systems. Accept payments and manage BNPL options seamlessly.",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      title: "Cloud Hosting with Saudi Data Residency",
      description:
        "AdoxERP is hosted on secure cloud infrastructure with data residency within Saudi Arabia — ensuring full compliance with the PDPL. Your business data never leaves the Kingdom without your knowledge.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "Mobile Accessibility & WhatsApp Integration",
      description:
        "Run your business from your phone with native iOS and Android apps. WhatsApp integration delivers instant alerts, approval requests, and operational updates directly to your team’s messaging platform.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "Industry-Specific Modules",
      description:
        "Pre-configured solutions for contracting, retail, manufacturing, trading, and healthcare. Each configuration includes the workflows, reports, and compliance settings your sector requires, out of the box.",
      icon: <LayoutGrid className="w-5 h-5" />,
    },
    {
      title: "Local Customer Support",
      description:
        "On-the-ground support teams in Riyadh, Jeddah, and Dammam — available for implementation, onboarding, staff training, and ongoing assistance from people who understand your business environment.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Role-Based Access & User Permissions",
      description:
        "Control exactly who sees what inside your ERP. Set precise permissions by role, department, branch, or city — so your staff in different cities have exactly the access they need and nothing more.",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      title: "Seamless Third-Party Integrations",
      description:
        "Connect AdoxERP to the tools your business already uses — Saudi government portals, e-commerce platforms, and more — through our open API and growing library of pre-built integrations.",
      icon: <Puzzle className="w-5 h-5" />,
    },
    {
      title: "Bank-Level Data Security",
      description:
        "AdoxERP protects your business data with end-to-end encryption, multi-factor authentication, automated daily backups, and complete audit logging — fully compliant with Saudi Arabia’s PDPL.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="px-6 md:px-12">
        {/* Top Hero-style Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#f8fafc] rounded-[1rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12 shadow-sm border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 p-4 md:p-10">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/features.svg"
                  alt="AdoxERP Dashboard Mockup"
                  width={1000}
                  height={700}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-1/2 p-8 md:p-14 lg:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
                Key Features
              </div>
              <h2 className="text-2xl md:text-[2.5rem] font-bold text-primary-dark leading-tight tracking-tight mb-4">
                Built for Saudi Businesses. <br /> Ready for What Comes Next.
              </h2>
              <p className="text-secondary-dark text-lg leading-relaxed mb-6 md:mb-10">
                AdoxERP is engineered around the specific needs of businesses
                operating in Saudi Arabia — from regulatory compliance and
                language support to local payment gateways and on-the-ground
                customer service.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-primary/20">
                Full Saudi-Specific List
              </button>
            </div>
          </div>
        </motion.div>

        {/* Features Grid Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#f8fafc] rounded-[1rem] md:rounded-[2.5rem] p-6 md:p-16 lg:p-18 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 md:gap-y-14">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start group">
                <div className="w-12 md:w-10 h-12 md:h-10 flex items-center justify-center bg-white rounded-lg text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-secondary-dark text-[0.95rem] leading-relaxed font-normal opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

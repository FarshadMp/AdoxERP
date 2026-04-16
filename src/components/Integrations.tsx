"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  Smartphone,
  Globe,
  ShoppingCart,
  Cloud,
  Mail,
  Slack,
  Files,
  Key,
  Zap,
  Building2,
  Users,
} from "lucide-react";

const saudiIntegrations = [
  {
    name: "ZATCA / Fatoorah",
    sub: "E-Invoicing",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    name: "Mada",
    sub: "Saudi Payments",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    name: "STC Pay",
    sub: "Saudi Payments",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    name: "PayTabs",
    sub: "Payment Gateway",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    name: "GOSI Portal",
    sub: "Government KSA",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    name: "Muqeem / MOL",
    sub: "HR / Iqama",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Salla",
    sub: "E-Commerce KSA",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    name: "Zid",
    sub: "E-Commerce KSA",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
];

const globalIntegrations = [
  {
    name: "Shopify",
    sub: "E-Commerce",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    name: "WooCommerce",
    sub: "E-Commerce",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  { name: "Stripe", sub: "Payments", icon: <CreditCard className="w-6 h-6" /> },
  { name: "PayPal", sub: "Payments", icon: <CreditCard className="w-6 h-6" /> },
  {
    name: "Razorpay",
    sub: "Payments",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    name: "Tabby / Tamara",
    sub: "BNPL KSA",
    icon: <Zap className="w-6 h-6" />,
  },
  { name: "AWS", sub: "Cloud / Hosting", icon: <Cloud className="w-6 h-6" /> },
  {
    name: "Google Workspace",
    sub: "Productivity",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    name: "Microsoft 365",
    sub: "Productivity",
    icon: <Mail className="w-6 h-6" />,
  },
  { name: "Slack", sub: "Collaboration", icon: <Slack className="w-6 h-6" /> },
  { name: "Dropbox", sub: "File Storage", icon: <Files className="w-6 h-6" /> },
  {
    name: "Open API",
    sub: "Custom Connect",
    icon: <Key className="w-6 h-6" />,
  },
];

const IntegrationCard = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05 }}
    whileHover={{ y: -5 }}
    className="group relative bg-white p-4 md:p-6 rounded-[1rem] md:rounded-[1.5rem] border border-slate-100 hover:border-primary/30 transition-all duration-500 overflow-hidden"
  >
    {/* Animated Background Gradient on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    {/* Floating Decoration */}
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 md:w-12 h-10 md:h-12 bg-slate-50 rounded-sm md:rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
          {item.icon}
        </div>

        {/* Connection Light */}
        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-full group-hover:bg-primary/10 transition-colors">
          <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-primary animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary uppercase tracking-tighter">
            Ready
          </span>
        </div>
      </div>

      <h4 className="text-primary-dark font-bold text-sm md:text-lg mb-1 leading-[1.05] tracking-tight group-hover:text-primary transition-colors">
        {item.name}
      </h4>
      <p className="text-secondary-dark text-xs font-semibold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
        {item.sub}
      </p>
    </div>
  </motion.div>
);

export default function Integrations() {
  return (
    <section className="pb-14 md:pb-24 bg-[#fcfdfe] relative overflow-hidden">
      {/* Background Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
              Integrations
            </div>

            <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark mb-4 leading-[1.1]">
              Connect AdoxERP to the Tools You Already Use
            </h2>

            <p className="text-lg text-secondary-dark leading-relaxed font-normal max-w-5xl">
              AdoxERP integrates with the platforms Saudi businesses depend on —
              from local payment gateways and government portals to global
              e-commerce and productivity tools. One ERP. Your entire ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Saudi Specific Grid */}
        <div className="mb-15">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-primary/30" />
            <h3 className="text-primary font-bold uppercase text-xs">
              SAUDI-SPECIFIC INTEGRATIONS
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {saudiIntegrations.map((item, index) => (
              <IntegrationCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Global Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-primary/30" />
            <h3 className="text-primary font-bold uppercase text-xs">
              GLOBAL INTEGRATIONS
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {globalIntegrations.map((item, index) => (
              <IntegrationCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 md:mt-16 p-8 rounded-[1rem] md:rounded-[1.5rem] bg-slate-50/90 border border-slate-200 text-center max-w-4xl mx-auto"
        >
          <p className="text-secondary-dark text-sm md:text-base font-medium opacity-80">
            + Saudi banking integrations, Absher, Maroof, HyperPay, and more via
            our{" "}
            <span className="text-primary font-bold not-italic">
              Open API ecosystem
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

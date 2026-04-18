"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const saudiIntegrations = [
  {
    name: "ZATCA / Fatoorah",
    domain: "zatca.gov.sa",
    sub: "Full compliance with Saudi e-invoicing Phase 2 requirements.",
    logo: "/img/logos/zatca.png",
    tag: "E-Invoicing",
  },
  {
    name: "Mada",
    domain: "mada.com.sa",
    sub: "Seamless acceptance of Saudi Arabia's local payment network.",
    logo: "/img/logos/mada.png",
    tag: "Saudi Payments",
  },
  {
    name: "STC Pay",
    domain: "stcpay.com.sa",
    sub: "Direct integration with the Kingdom's most popular digital wallet.",
    logo: "/img/logos/stc.png",
    tag: "Saudi Payments",
  },
  {
    name: "PayTabs",
    domain: "paytabs.com",
    sub: "Secure payment gateway for local and international transactions.",
    logo: "/img/logos/PayTabs.png",
    tag: "Payment Gateway",
  },
  {
    name: "GOSI Portal",
    domain: "gosi.gov.sa",
    sub: "Automated social insurance reporting and compliance tracking.",
    logo: "/img/logos/gosi.png",
    tag: "Government KSA",
  },
  {
    name: "Muqeem / MOL",
    domain: "muqeem.sa",
    sub: "Direct HR integration with Muqeem and Ministry of Labor portals.",
    logo: "/img/logos/Muqeem.png",
    tag: "HR / Iqama",
  },
  {
    name: "Salla",
    domain: "salla.sa",
    sub: "Sync your inventory and sales from Saudi's leading e-commerce platform.",
    logo: "/img/logos/Salla.png",
    tag: "E-Commerce KSA",
  },
  {
    name: "Zid",
    domain: "zid.sa",
    sub: "Complete ERP synchronization for your Zid-powered online store.",
    logo: "/img/logos/Zid.png",
    tag: "E-Commerce KSA",
  },
];

const globalIntegrations = [
  {
    name: "Shopify",
    domain: "shopify.com",
    sub: "Automate orders, inventory, and customer sync with Shopify.",
    logo: "/img/logos/shopify.png",
    tag: "E-Commerce",
  },
  {
    name: "WooCommerce",
    domain: "woocommerce.com",
    sub: "Robust sync for WordPress-based online businesses.",
    logo: "/img/logos/woocommerce.png",
    tag: "E-Commerce",
  },
  {
    name: "Stripe",
    domain: "stripe.com",
    sub: "Accept payments globally with world-class security.",
    logo: "/img/logos/stripe.png",
    tag: "Payments",
  },
  {
    name: "PayPal",
    domain: "paypal.com",
    sub: "Expand your reach with the world's most trusted wallet.",
    logo: "/img/logos/paypal.png",
    tag: "Payments",
  },
  {
    name: "Razorpay",
    domain: "razorpay.com",
    sub: "Next-generation payment processing for modern business.",
    logo: "/img/logos/razorpay.png",
    tag: "Payments",
  },
  {
    name: "Tabby / Tamara",
    domain: "tabby.ai",
    sub: "Enable 'Buy Now Pay Later' solutions for your KSA customers.",
    logo: "/img/logos/Tabby.png",
    tag: "BNPL KSA",
  },
  {
    name: "AWS",
    domain: "aws.amazon.com",
    sub: "Enterprise-grade cloud hosting and infrastructure solutions.",
    logo: "/img/logos/aws.png",
    tag: "Cloud / Hosting",
  },
  {
    name: "Google Workspace",
    domain: "google.com",
    sub: "Sync your calendar, mail and documents seamlessly.",
    logo: "/img/logos/Google.png",
    tag: "Productivity",
  },
  {
    name: "Microsoft 365",
    domain: "microsoft.com",
    sub: "Full integration with Outlook, Teams, and Excel.",
    logo: "/img/logos/microsoft.png",
    tag: "Productivity",
  },
  {
    name: "Slack",
    domain: "slack.com",
    sub: "Automated business notifications and team collaboration.",
    logo: "/img/logos/slack.png",
    tag: "Collaboration",
  },
  {
    name: "Dropbox",
    domain: "dropbox.com",
    sub: "Cloud-based file storage and document management sync.",
    logo: "/img/logos/Dropbox.png",
    tag: "File Storage",
  },
  {
    name: "Open API",
    domain: "adoxerp.com",
    sub: "Flexible API endpoints to connect any custom software.",
    logo: "/img/logos/openapi.png",
    tag: "Custom Connect",
  },
];

const IntegrationItem = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.03 }}
    className="flex flex-col md:flex-row md:items-center py-6 border-b border-slate-100 last:border-0 gap-3 md:gap-0"
  >
    <div className="flex items-center shrink-0">
      {/* Logo Column */}
      <div className="w-12 md:w-14 shrink-0 flex items-center justify-start">
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden">
          <img
            src={item.logo}
            alt={item.name}
            className="max-w-[70%] max-h-[70%] object-contain"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`;
            }}
          />
        </div>
      </div>

      {/* Name Column */}
      <div className="w-[120px] md:w-[220px] shrink-0 pr-4">
        <h4 className="text-slate-900 font-bold md:font-medium text-[15px] md:text-[16px] tracking-tight">
          {item.name}
        </h4>
      </div>
    </div>

    {/* Description Column */}
    <div className="flex-1 md:pl-0 pl-12">
      <p className="text-slate-600 text-[14px] md:text-[15px] font-normal leading-relaxed">
        {item.sub}
      </p>
    </div>
  </motion.div>
);

export default function Integrations() {
  const [activeTab, setActiveTab] = useState<"saudi" | "global">("saudi");

  return (
    <section className="pb-16 md:pb-26 bg-white relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

            {/* Premium Tabs */}
            <div className="flex p-1 bg-slate-100 rounded-full my-8 md:my-12">
              <button
                onClick={() => setActiveTab("saudi")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "saudi"
                    ? "bg-white text-primary shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Saudi-Specific Integrations
              </button>
              <button
                onClick={() => setActiveTab("global")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "global"
                    ? "bg-white text-primary shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Global Integrations
              </button>
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden min-h-[500px]">
          <div className="divide-y divide-slate-100">
            <AnimatePresence>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === "saudi" ? -5 : 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === "saudi" ? 10 : -10 }}
                transition={{ duration: 0.2 }}
                className="px-4 md:px-6"
              >
                {(activeTab === "saudi"
                  ? saudiIntegrations
                  : globalIntegrations
                ).map((item, index) => (
                  <IntegrationItem key={item.name} item={item} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-dark/50 text-sm font-medium">
            + Saudi banking, Absher, Maroof, HyperPay, and more via our{" "}
            <span className="text-primary font-bold">Open API</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

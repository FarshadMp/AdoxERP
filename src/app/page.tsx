import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CoreModules from "@/components/CoreModules";
import AIIntegration from "@/components/AIIntegration";
import KeyFeatures from "@/components/KeyFeatures";
import ZatcaCompliance from "@/components/ZatcaCompliance";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";

export const metadata: Metadata = {
  title: "AdoxERP — The Ultimate Cloud ERP System in Saudi Arabia",
  description:
    "AdoxERP is an AI-powered, ZATCA-compliant cloud ERP system for businesses in Riyadh, Jeddah & Dammam. Manage sales, accounting, HR, inventory, and more — all in one platform.",
  keywords: [
    "cloud ERP system Saudi Arabia",
    "AI ERP software Riyadh",
    "best ERP for business KSA",
    "ZATCA compliant ERP",
    "Fatoorah e-invoicing software",
    "ERP system Jeddah",
    "ERP system Dammam",
    "manufacturing ERP Saudi Arabia",
    "accounting software KSA",
    "inventory management Saudi Arabia",
    "how to manage a business in Saudi Arabia",
    "what is the best ERP for SMEs in Saudi Arabia",
    "which ERP is ZATCA compliant",
    "how does ZATCA e-invoicing work",
    "can ERP software use AI",
    "what are AI agents in business software",
    "is there an Arabic ERP system",
  ],
  openGraph: {
    title: "AdoxERP — The Ultimate Cloud ERP System in Saudi Arabia",
    description:
      "AdoxERP is an AI-powered, ZATCA-compliant cloud ERP system for businesses in Riyadh, Jeddah & Dammam.",
    type: "website",
    locale: "en_US",
    siteName: "AdoxERP",
  },
};

import FAQ from "@/components/FAQ";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutSection />
      <CoreModules />
      <AIIntegration />
      <KeyFeatures />
      <ZatcaCompliance />
      <Testimonials />
      <Integrations />
      <FAQ />
      <NewsletterCTA />
    </main>
  );
}

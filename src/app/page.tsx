import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PositioningSection from "@/components/PositioningSection";
import ValueProposition from "@/components/ValueProposition";
import AIAssistantSection from "@/components/AIAssistantSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import WhySection from "@/components/WhySection";
import ModulesSection from "@/components/ModulesSection";
import DistributionSection from "@/components/DistributionSection";
import TractionSection from "@/components/TractionSection";
import ImpactSection from "@/components/ImpactSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  // ... existing metadata

  // ... (keep metadata)
  title: "AI-Driven ERP for Modern SMEs",
  description:
    "IntelliERP is a next-generation, cloud-native ERP platform that combines business operations, automation, and AI-driven insights into a single unified system. Designed specifically for small and medium-sized enterprises, IntelliERP enables businesses to operate with real-time visibility, reduced complexity, and intelligent decision-making.",
  keywords: [
    "IntelliERP",
    "AI-Driven ERP",
    "Cloud ERP",
    "SME ERP",
    "Business Automation",
    "Real-time visibility",
  ],
  openGraph: {
    title: "AI-Driven ERP for Modern SMEs",
    description:
      "IntelliERP is a next-generation, cloud-native ERP platform that combines business operations, automation, and AI-driven insights into a single unified system.",
    type: "website",
    locale: "en_US",
    siteName: "IntelliERP",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <PositioningSection />
      <ValueProposition />
      <AIAssistantSection />
      <WhySection />
      <IntelligenceSection />
      <ModulesSection />
      <DistributionSection />
      <TractionSection />
      <ImpactSection />
      <FAQSection />
    </main>
  );
}

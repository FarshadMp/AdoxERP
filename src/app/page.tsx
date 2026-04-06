import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import CultureSection from "@/components/CultureSection";
import ClientSection from "@/components/ClientSection";
import CTASection from "@/components/CTASection";
import News from "@/components/News";

export const metadata: Metadata = {
  title: "B-Freight | Premium Logistics Solutions",
  description:
    "B-Freight (Business Way) is a full-fledged international freight forwarder. We achieve success in both Air and Sea Freight operations due to our experienced staff and commitment to customer satisfaction.",
  keywords: [
    "B-Freight",
    "Business Way",
    "International Freight Forwarder",
    "Air Freight",
    "Sea Freight",
    "Logistics Solutions",
  ],
  openGraph: {
    title: "B-Freight Logistics",
    description:
      "B-Freight is a full-fledged international freight forwarder. We commit ourselves to complete customer satisfaction in every aspect of the service we offer.",
    type: "website",
    locale: "en_IN",
    siteName: "B-Freight",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <SolutionSection />
      <Services />
      <HowItWorks />
      <CultureSection />
      <News />
      <CTASection />
      <ClientSection />
    </main>
  );
}

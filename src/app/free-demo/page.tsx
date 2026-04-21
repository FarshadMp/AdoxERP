import { Metadata } from "next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import DemoHero from "../../components/Demo/DemoHero";
import DemoStats from "../../components/Demo/DemoStats";
import DemoFeatures from "../../components/Demo/DemoFeatures";
import DemoSteps from "../../components/Demo/DemoSteps";
import DemoFormSection from "../../components/Demo/DemoFormSection";
import DemoBenefits from "../../components/Demo/DemoBenefits";
import DemoFAQ from "../../components/Demo/DemoFAQ";
import DemoCTA from "../../components/Demo/DemoCTA";

export const metadata: Metadata = {
  title:
    "Book a Free AdoxERP Demo | Cloud ERP Saudi Arabia | Riyadh · Jeddah · Dammam",
  description:
    "Book a free, personalised AdoxERP demo for your business in Saudi Arabia. See ZATCA e-invoicing, AI features & Saudi-specific compliance in action. No commitment. Arabic & English.",
  keywords:
    "free ERP demo Saudi Arabia, AdoxERP demo, ERP demo Riyadh, cloud ERP demo KSA, ZATCA ERP demo, book ERP demo Jeddah, ERP software trial Saudi Arabia",
};

export default function FreeDemoPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Header />

      <DemoHero />
      <DemoStats />

      <section id="book-form" className="py-16 md:py-26 bg-slate-100/50">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <DemoSteps />
          </div>
          <div className="lg:col-span-7">
            <DemoFormSection />
          </div>
        </div>
      </section>

      <DemoFeatures />
      <DemoBenefits />
      <DemoFAQ />
      <DemoCTA />
    </main>
  );
}

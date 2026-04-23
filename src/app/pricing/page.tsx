import { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import PricingCard, {
  PricingCardProps,
} from "@/components/Pricing/PricingCard";
import PlanFeatures from "@/components/Pricing/PlanFeatures";
import PricingFAQ from "@/components/Pricing/PricingFAQ";
import PricingCTA from "@/components/Pricing/PricingCTA";

export const metadata: Metadata = {
  title:
    "AdoxERP Pricing Saudi Arabia | Cloud ERP Plans for SMEs & Enterprise | KSA",
  description:
    "AdoxERP pricing for businesses in Saudi Arabia. Flexible cloud ERP plans for SMEs and enterprises in Riyadh, Jeddah & Dammam. All plans include ZATCA compliance & Arabic support.",
  keywords:
    "ERP pricing Saudi Arabia, AdoxERP cost KSA, cloud ERP price Riyadh, ERP software cost Jeddah, ZATCA ERP pricing, affordable ERP Saudi Arabia, SME ERP pricing KSA",
};

export default function PricingPage() {
  const plans: PricingCardProps[] = [
    {
      name: "Starter",
      description: "For growing SMEs",
      price: "Request a Quote",
      dotColor: "bg-emerald-500",
      buttonVariant: "outline",
      stats: [
        { label: "Up to 10 users", highlight: true },
        { label: "Support type", value: "Email & Chat" },
        { label: "Data residency", value: "Saudi Arabia" },
      ],
      features: [
        "Sales Management",
        "Accounting & Finance",
        "Inventory Management",
        "HR & Payroll (up to 50 employees)",
        "ZATCA e-invoicing (Phase 1 & 2)",
        "Arabic & English interface",
        "Cloud hosting — Saudi data residency",
        "Email & chat support",
      ],
    },
    {
      name: "Growth",
      description: "For scaling businesses",
      price: "Request a Quote",
      dotColor: "bg-orange-500",
      buttonVariant: "outline",
      popular: true,
      stats: [
        { label: "Up to 50 users", highlight: true },
        { label: "Onboarding", value: "Dedicated Specialist" },
        { label: "Support", value: "Priority 24/7" },
      ],
      features: [
        "Everything in Starter, plus:",
        "CRM & Customer Management",
        "Manufacturing & Production",
        "Project Management",
        "Asset Management",
        "E-Commerce Integration",
        "AI chatbot & anomaly detection",
        "Predictive analytics",
        "Dedicated onboarding specialist",
        "Priority support — Arabic & English",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organisations",
      price: "Custom Pricing",
      dotColor: "bg-rose-500",
      buttonVariant: "solid",
      stats: [
        { label: "Unlimited users", highlight: true },
        { label: "Training", value: "On-site" },
        { label: "Deployment", value: "Full Migration" },
      ],
      features: [
        "Everything in Growth, plus:",
        "Unlimited users",
        "Multi-entity & multi-branch",
        "Custom integrations & API",
        "Advanced AI agents & automation",
        "Custom reporting & dashboards",
        "Dedicated account manager",
        "SLA-backed support",
        "On-site training in Riyadh, Jeddah or Dammam",
        "Full data migration service",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      <Header />

      {/* Page Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark leading-[1.05] mb-5">
              AdoxERP Pricing —{" "}
              <span className="text-primary">
                Transparent, Flexible, Built for Saudi Arabia
              </span>
            </h1>
            <p className="text-xl text-secondary-dark leading-relaxed font-normal mb-4">
              One platform. Every Saudi business need. Priced for the way you
              actually grow.
            </p>
            <p className="text-lg text-secondary-dark leading-relaxed font-normal opacity-80">
              ERP pricing should not be a mystery. AdoxERP offers transparent,
              modular pricing designed for businesses at every stage of growth
              in Saudi Arabia. Whether you are a single-branch SME in Dammam or
              a multi-entity enterprise operating across Riyadh, Jeddah, and the
              GCC, there is an AdoxERP plan that fits your business and your
              budget.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 md:py-26 bg-slate-100/50 px-6">
        <div className="max-w-[1300px] mx-auto px-0 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <PlanFeatures />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
}

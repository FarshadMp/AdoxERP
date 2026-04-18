import { Metadata } from "next";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AdoxERP — the ultimate cloud ERP specifically built for Saudi businesses, ZATCA compliance, and the GCC market.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-20">
      {/* Page Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark leading-[1.05] mb-5">
              Empowering the Future of Saudi Business with AI-Native ERP
            </h1>
            <p className="text-xl text-secondary-dark leading-relaxed font-normal">
              At AdoxERP, we believe that software should adapt to the business,
              not the other way around. Our mission is to provide Saudi
              enterprises with the world's most intelligent, compliant, and
              localized management platform.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      </section>

      {/* Main Content Component Section */}
      <AboutSection />

      {/* Our Values Section */}
      <section className="py-14 md:py-24 bg-slate-50">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center mb-10">
          <h2 className="text-3xl md:text-[2.75rem] font-medium text-primary-dark tracking-tight">
            The Principles That Drive Us
          </h2>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Native Localization",
              text: "We don't just 'translate' software. We build it around Saudi Arabian tax laws, ZATCA requirements, and GCC business customs.",
            },
            {
              title: "AI-First Thinking",
              text: "Our engineers embed artificial intelligence into every module, moving businesses from simple record-keeping to proactive insights.",
            },
            {
              title: "Uncompromising Security",
              text: "With local data residency and enterprise-grade encryption, your business data stays within the Kingdom and under your control.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-primary-dark mb-4">
                {value.title}
              </h3>
              <p className="text-secondary-dark leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-[2.75rem] font-medium text-primary-dark tracking-tight leading-[1.1]">
              Aligned with Saudi <br /> Vision 2030
            </h2>
            <p className="text-lg text-secondary-dark leading-relaxed">
              AdoxERP is more than just a software provider. We are an active
              contributor to the Kingdom's digital transformation journey. By
              providing powerful software tools to SMEs and large enterprises
              alike, we help foster economic diversification and increase
              private sector contribution to the GDP.
            </p>
            <p className="text-lg text-secondary-dark leading-relaxed">
              Our workforce is locally based, our data is stored in Riyadh, and
              our heart is in the Kingdom.
            </p>
          </div>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-100 border border-gray-100 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
            <Image
              src="/img/hero/hero.png"
              alt="Saudi Digital Transformation"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <NewsletterCTA />
    </main>
  );
}

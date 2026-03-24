"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import InnerHero from "@/components/InnerHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <InnerHero
        title="Design & Build Solutions"
        subtitle="Our Expertise"
        image="/img/projects/project_5.png"
      />

      {/* Services Grid */}
      <section className="py-20 md:py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full group relative overflow-hidden bg-white p-6 md:p-10 flex flex-col items-start hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                {/* Pattern Background */}
                <div
                  className="absolute bottom-0 right-0 w-64 h-64 opacity-0 pointer-events-none transform translate-x-1/4 translate-y-1/4 group-hover:opacity-[0.03] transition-opacity duration-700"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                  }}
                />

                <div className="text-[#c9952f] mb-6 relative z-10 transform origin-left transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                <div className="flex flex-col relative z-10 w-full flex-grow">
                  <h3 className="text-2xl font-normal text-black mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-12 flex-grow font-light">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-3 text-[#c9952f] font-semibold text-[13px] uppercase tracking-widest hover:text-black transition-colors duration-300 mt-auto group/link">
                    Explore Details
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

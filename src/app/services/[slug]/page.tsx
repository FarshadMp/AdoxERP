"use client";

import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-[#f7f5f2] flex items-center justify-center font-light">
        Project not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Mini Back Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#f7f5f2]/80 backdrop-blur-md px-6 md:px-12 py-6">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Link
            href="/services"
            className="group flex items-center gap-3 text-black hover:text-[#c9952f] transition-all"
          >
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#c9952f] transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] md:text-xs font-semibold uppercase">
              BACK TO SERVICES
            </span>
          </Link>

          <Link href="/" className="relative w-30 h-8 md:w-34 md:h-10">
            <Image
              src="/img/logo.png"
              alt="Anarc Logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      <section className="pt-40 pb-20 px-6 md:px-12 mx-auto">
        {/* Service Hero Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#c9952f] mb-4 md:mb-8">{service.icon}</div>
          <h1 className="text-3xl md:text-4xl font-normal text-black leading-tight tracking-tight uppercase mb-4 md:mb-10">
            {service.title}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12">
            {service.fullContent}
          </p>
        </motion.div>

        {/* Key Features / Offerings Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 border border-black/5 bg-white/50 space-y-4"
              >
                <span className="text-[#c9952f] text-xs font-bold uppercase tracking-widest">
                  {idx + 1}
                </span>
                <h4 className="text-black text-lg font-normal tracking-tight">
                  {feature}
                </h4>
                <div className="w-full h-[1px] bg-black/5" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global CTA Trigger - Next Service */}
        <div className="border-t border-black/5 pt-20 text-center">
          <span className="text-gray-400 text-xs tracking-widest uppercase mb-4 block">
            Next Expertise
          </span>
          <Link
            href={`/services/${services[(services.findIndex((s) => s.slug === slug) + 1) % services.length].slug}`}
            className="group inline-flex flex-col items-center gap-6"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-black transition-colors group-hover:text-[#c9952f] uppercase duration-500">
              {
                services[
                  (services.findIndex((s) => s.slug === slug) + 1) %
                    services.length
                ].title
              }
            </h2>
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#c9952f] group-hover:border-[#c9952f] transition-all duration-300">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </div>
          </Link>
        </div>
      </section>

      <CTA />
    </main>
  );
}

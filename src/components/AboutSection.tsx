"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    {
      id: 1,
      value: "500+",
      label: "Businesses in KSA & GCC",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      delay: 0.1,
    },
    {
      id: 2,
      value: "15+",
      label: "Years of Regional Experience",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      delay: 0.2,
    },
    {
      id: 3,
      value: "98%",
      label: "Client Retention Rate",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      delay: 0.3,
    },
    {
      id: 4,
      value: "24/7",
      label: "Arabic & English Support",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      delay: 0.4,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-26 bg-white overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-14 md:mb-24">
          {/* Left Side: Header & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-secondary-dark font-medium text-lg mb-4">
                About AdoxERP
              </div>
              <h2 className="text-4xl md:text-[3.5rem] font-medium text-primary-dark leading-[1.05] tracking-tight">
                An ERP Platform That Actually Understands the Saudi Market
              </h2>

              {/* Pill Button like in image */}
              <button className="mt-10 inline-flex items-center gap-3 px-5 py-2.5 bg-[#f4f4f5] hover:bg-gray-200 text-gray-900 rounded-full transition-all duration-300 font-medium group text-sm">
                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-black">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Learn more
              </button>
            </motion.div>
          </div>

          {/* Right Side: Content & Testimonial-style text */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl lg:text-[1.5rem] text-primary-dark leading-snug font-normal">
                Most ERP systems were built for Western markets and then adapted
                for the Middle East as an afterthought. AdoxERP is different. We
                built our platform from the ground up with Saudi businesses in
                mind — which means ZATCA compliance is native, Arabic is a
                first-class language, and local regulations.
              </p>

              {/* Styled with vertical left border like image */}
              <div className="mt-10 md:mt-16 border-l border-gray-200 pl-4 md:pl-8 space-y-4">
                <p className="text-base text-secondary-dark leading-relaxed italic">
                  Whether you run a trading business in Riyadh, a manufacturing
                  facility in Dammam, or a retail operation in Jeddah, AdoxERP
                  was designed to fit how you actually work. And with built-in
                  artificial intelligence now embedded across the platform, your
                  system does not just record what happened — it helps you
                  understand what is happening right now and what to do next.
                </p>
                <div className="pt-0 md:pt-2">
                  <div className="font-semibold text-primary-dark">
                    AdoxERP Team
                  </div>
                  <div className="text-sm text-secondary-dark">
                    Built for Saudi Vision 2030
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Stats Grid - Refined Card Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 pt-12 md:pt-20 border-t border-gray-100">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="bg-[#f2f4f8] px-8 md:px-6 py-8 rounded-lg flex flex-col justify-center transition-all duration-500 hover:bg-[#f1f3f6]"
            >
              <div className="flex flex-col">
                <h4 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight leading-none mb-3">
                  {stat.value}
                </h4>
                <p className="text-secondary-dark text-sm md:text-base font-medium leading-tight opacity-80">
                  {stat.label}
                  <sup className="ml-0.5 text-[10px] font-normal"></sup>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

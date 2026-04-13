"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    {
      id: 1,
      value: "500+",
      label: "Businesses Trusted",
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
      label: "Years Experience",
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
      label: "Client Retention",
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
      label: "Local Support",
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
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/10 border border-primary/20 w-fit mb-6 mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold">
                About AdoxERP
              </span>
            </div>

            <h2 className="text-4xl md:text-[3.5rem] text-primary-dark font-medium leading-[1.1] tracking-tight mb-8">
              An ERP Platform That Actually Understands the Saudi Market
            </h2>

            <p className="text-[1.125rem] text-primary-dark leading-relaxed mb-6 font-normal">
              Most ERP systems were built for Western markets and then adapted
              for the Middle East as an afterthought. AdoxERP is different. We
              built our platform from the ground up with Saudi businesses in
              mind — which means ZATCA compliance is native, Arabic is a
              first-class language, and local regulations like GOSI,
              Saudization, and VAT are fully supported without needing
              workarounds or third-party add-ons.
            </p>

            <p className="text-[1.125rem] text-primary-dark leading-relaxed mb-12 font-normal">
              Whether you run a trading business in Riyadh, a manufacturing
              facility in Dammam, or a retail operation in Jeddah, AdoxERP was
              designed to fit how you actually work. And with built-in
              artificial intelligence now embedded across the platform, your
              system does not just record what happened — it helps you
              understand what is happening right now and what to do next.
            </p>

            {/* Simple Stats Grid Mapped */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-transform hover:scale-110 duration-300">
                    {stat.icon}
                  </div>
                  <h4 className="text-4xl font-bold text-primary-dark mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-secondary-dark text-sm font-medium tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

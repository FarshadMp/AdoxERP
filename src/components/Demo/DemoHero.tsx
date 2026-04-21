"use client";

import { motion } from "framer-motion";

export default function DemoHero() {
  return (
    <section className="relative py-20 overflow-hidden border-b border-gray-100 bg-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark leading-[1.05] mb-5"
          >
            Book Your Free <span className="text-primary">AdoxERP Demo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary-dark leading-relaxed font-normal mb-8"
          >
            See exactly how AdoxERP works for your business — live, personalised, and tailored to your industry in Saudi Arabia.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-dark leading-relaxed font-normal opacity-80"
          >
            A generic software demo tells you very little. That is why every AdoxERP demo is personalised to your business — your industry, your city, your specific operational and compliance challenges. Our team will show you exactly how AdoxERP addresses your specific situation.
          </motion.p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
    </section>
  );
}

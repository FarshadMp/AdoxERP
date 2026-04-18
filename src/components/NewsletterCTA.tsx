"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Send } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="pb-16 md:pb-26 bg-white relative overflow-hidden">
      <div className="px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#020817] border border-white/5"
        >
          {/* Background Image/Gradient matching Hero/Footer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/hero/gradient.png"
              alt="CTA Background"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/60 via-[#020817]/80 to-[#020817]" />
          </div>

          <div className="relative z-10 pt-16 md:pt-24 pb-0 flex flex-col items-center text-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-[3.5rem] font-medium tracking-tight text-white mb-4 leading-[1.1]"
            >
              Powering Saudi Businesses With AI.{" "}
              <br className="hidden md:block" /> Simplifying Operations. Driving
              Growth.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white text-base md:text-lg max-w-5xl mb-8 md:mb-10 leading-relaxed font-light"
            >
              Join hundreds of business owners, finance leaders, and operations
              managers across Saudi Arabia and the GCC who receive our monthly
              insights on ERP trends, AI in business, ZATCA updates, and Vision
              2030 readiness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-md mb-10 md:mb-15"
            >
              <form className="relative flex flex-col sm:flex-row items-stretch gap-3">
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary hover:bg-secondary text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 whitespace-nowrap active:scale-95"
                >
                  Subscribe for Free
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
              <p className="mt-3 text-[10px] text-white/40 font-medium">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>

            {/* Dashboard Visual */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full max-w-5xl mx-auto rounded-t-2xl md:rounded-t-[2rem] overflow-hidden shadow-2xl shadow-black/80 border-x border-t border-white/10"
            >
              <Image
                src="/img/hero/screen-dark.svg"
                alt="AdoxERP Analytics Dashboard"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

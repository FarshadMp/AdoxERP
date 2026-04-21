"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="pb-12 md:pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[1000px] mx-auto overflow-hidden"
        >
          <div className="relative bg-[#0052cc] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-center overflow-hidden shadow-xl shadow-blue-900/10">
            {/* Background Decorations - Subtle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-black rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white text-xs font-semibold mb-6 backdrop-blur-md border border-white/10"
              >
                <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                Tailored Quotes
              </motion.div>

              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
                Ready for a Personalised AdoxERP Quote?
              </h2>

              <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed">
                Contact our experts in Riyadh, Jeddah, or Dammam to build a
                custom proposal that fits your industry and scale perfectly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/free-demo"
                  className="group bg-white hover:bg-slate-50 text-[#0052cc] px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                >
                  Speak with Sales
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

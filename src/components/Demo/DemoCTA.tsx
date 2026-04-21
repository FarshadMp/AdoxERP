"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DemoCTA() {
  const scrollToForm = () => {
    document
      .getElementById("book-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-white px-6">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-primary rounded-2xl md:rounded-3xl overflow-hidden group shadow-2xl shadow-primary/20">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Image Side */}
              <div className="w-full lg:w-[22%] relative overflow-hidden min-h-[200px] lg:min-h-0">
                <img
                  src="/img/cta-people.png"
                  alt="Professional team"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent lg:hidden" />
              </div>

              {/* Content Side */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-[1.75rem] font-bold text-white leading-tight tracking-tight mb-2">
                    Book Your Free AdoxERP Demo Today{" "}
                  </h3>
                  <span className="opacity-80 block lg:inline-block text-xl mb-2">
                    Riyadh · Jeddah · Dammam
                  </span>
                  <p className="text-white/80 text-sm md:text-base font-normal">
                    GCC · Arabic & English · No commitment needed
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <button
                    onClick={scrollToForm}
                    className="px-8 py-3.5 bg-white hover:bg-white/90 text-primary-dark text-sm font-bold rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 active:scale-95 group shadow-lg"
                  >
                    Book Your Free Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

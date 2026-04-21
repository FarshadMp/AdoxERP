"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users, Globe, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  { icon: Clock, label: "45 min", text: "Focused live demo" },
  { icon: Users, label: "Saudi", text: "Based demo team" },
  { icon: Globe, label: "Arabic", text: "& English available" },
  { icon: ShieldCheck, label: "Zero", text: "Commitment needed" },
];

export default function DemoStats() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-8 bg-white px-6">
      <div className="max-w-[1300px] mx-auto">
        {/* Desktop Version: Unified Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block bg-white border border-slate-100 rounded-full p-2 md:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-stretch md:items-center">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className={`flex-1 flex items-center gap-4 px-8 py-4 transition-all duration-300 relative group
                  ${i !== stats.length - 1 ? 'border-r border-slate-100' : ''}
                `}
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-primary/20">
                  <stat.icon className="w-6 h-6" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary-dark leading-tight group-hover:text-primary transition-colors">
                    {stat.label}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                    {stat.text}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] rounded-full -z-10 transition-colors" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Version: Auto Carousel */}
        <div className="block md:hidden">
          <div className="relative h-[90px] overflow-hidden bg-white border border-slate-100 rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <AnimatePresence mode="wait">
              {(() => {
                const Icon = stats[activeIndex].icon;
                return (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center gap-5 px-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shadow-inner">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-primary-dark leading-tight">
                        {stats[activeIndex].label}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                        {stats[activeIndex].text}
                      </span>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Pagination dots for mobile */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {stats.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-4 bg-primary' : 'w-1 bg-slate-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

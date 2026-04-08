"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Users, Activity } from "lucide-react";

export default function ImpactSection() {
  const points = [
    {
      text: "30–50% reduction in implementation time",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      text: "Faster access to business insights (hours → seconds)",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      text: "Reduced dependency on external consultants",
      icon: <Users className="w-5 h-5" />,
    },
    {
      text: "Improved operational visibility across departments",
      icon: <Activity className="w-5 h-5" />,
    },
  ];

  return (
    <section
      className="relative py-14 md:py-22 bg-gray-50 overflow-hidden"
      id="impact"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-14 lg:px-20 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold border border-[#0693FB]/20 mb-6">
          Business Impact
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight tracking-tight mb-8 md:mb-12">
          IntelliERP delivers <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0693FB] to-[#0470c2]">
            measurable improvements:
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="group flex items-center gap-5 p-6 rounded-[22px] md:rounded-[32px] bg-white border border-black/3 text-primary-dark font-medium text-left shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(6,147,251,0.08)] hover:border-[#0693FB]/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 text-[#0693FB] flex items-center justify-center shrink-0 border border-black/2 group-hover:bg-[#0693FB] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {point.icon}
              </div>
              <span className="text-sm md:text-[15px] leading-snug font-semibold tracking-tight text-primary-dark/90">
                {point.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

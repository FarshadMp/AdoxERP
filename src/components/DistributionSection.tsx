"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DistributionSection() {
  const points = [
    "Route planning",
    "Customer assignment",
    "Delivery tracking",
    "Field execution monitoring",
  ];

  return (
    <section
      className="relative  bg-[#020817] py-14 md:py-22 overflow-hidden"
      id="distribution"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero/gradient.png"
          alt="Distribution Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#020817]/10 via-[#020817]/30 to-[#020817]" />
      </div>
      <div className="max-w-4xl mx-auto px-6 md:px-14 lg:px-20 relative z-10 text-center">
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[13px] font-bold mb-8 border border-white/20"
        >
          Distribution Intelligence (Strong Differentiator)
        </div>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Built-In Route & Field Operations
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white/90 text-base leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Unlike most ERP systems, IntelliERP includes native distribution
          capabilities:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {points.map((point, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="flex items-center gap-3 p-5 rounded-2xl bg-[#0693FB]/5 border border-white/10 text-white font-medium backdrop-blur-2xl hover:bg-[#0693FB]/10 transition-colors duration-300"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="w-2 h-2 rounded-full bg-white"
              />
              {point}
            </motion.div>
          ))}
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white font-bold text-sm md:text-xl"
        >
          This creates a closed-loop system from sales to delivery.
        </p>
      </div>
    </section>
  );
}

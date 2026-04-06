"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "TECHNOLOGY",
    description:
      "For the last decade we have been using innovative technologies and services concerning freight transportation which has benefited our 100's of customers worldwide.",
  },
  {
    title: "GLOBAL AGENCY NETWORK",
    description:
      "We have Global freight network worldwide which provides increased customer satisfaction, reliability and guarantee for all our services.",
  },
  {
    title: "LEADERSHIP TEAM",
    description:
      "Our Leadership team has vast experience in the freight forwarding business which has helped us to be one of the best in GCC countries.",
  },
];

export default function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  };

  return (
    <section className="relative md:min-h-screen flex flex-col justify-between pb-0 py-18 lg:py-22 px-6 md:px-14 lg:px-20 overflow-hidden bg-[#011c4d]">
      {/* Background Image Setup */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-70 md:opacity-100"
        style={{ backgroundImage: "url('/img/HowItWorks.jpg')" }}
      />
      {/* Deep blue blending gradient layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-[#011c4d]/50 to-[#011c4d]" />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Top Huge Header */}
        <div className="max-w-4xl">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-7xl lg:text-6xl font-light text-white leading-[1.05] tracking-tight"
          >
            How It Works
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="mt-4 md:mt-6 text-base text-white font-light leading-relaxed max-w-2xl"
          >
            We streamline your global supply chain with our cutting-edge
            logistics solutions. From advanced tracking and real-time analytics
            to our expansive international network, every step of the freight
            process is thoroughly optimized. Our dedicated teams ensure your
            cargo reaches its destination safely, efficiently, and exactly on
            schedule.
          </motion.p>
        </div>

        {/* Bottom Content Area */}
        <div className="mt-20 md:mt-auto flex flex-col xl:flex-row justify-between items-center xl:items-end gap-16 xl:gap-8">
          {/* Text grid (Left side) */}
          <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as any,
                }}
                className="flex flex-col gap-4"
              >
                <h4 className="text-primary font-medium tracking-widest text-sm uppercase">
                  {feature.title}
                </h4>
                <p className="text-white text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Circle stats (Right side) - Matching reference image style */}
          <motion.div
            {...fadeInUp}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1] as any,
            }}
            className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-full border border-white/20 flex flex-col items-center justify-center relative shrink-0"
          >
            <div className="text-center">
              <span className="text-4xl md:text-6xl font-light text-white block mb-2">
                10+ <span className="text-2xl md:text-4xl">YRS</span>
              </span>
              <span className="text-primary text-xs md:text-sm tracking-[0.2em] font-medium block">
                EXPERIENCE
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

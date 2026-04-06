"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const truckX = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const truckOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } as const,
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-18 lg:py-22 bg-[#F3F4F6]/80 overflow-hidden font-sans"
    >
      <div className="mx-auto px-6 md:px-14 lg:px-20 relative z-10">
        <div className="">
          {/* Main Heading - Very Large, Tight Tracking, Dark Blue */}
          <motion.div
            {...fadeInUp}
            className="max-w-full lg:max-w-7xl mb-8 md:mb-12"
          >
            <h2 className="text-[clamp(2rem,8vw,5.5rem)] font-normal text-[#002d62] leading-[1.1] tracking-[-0.03em] md:tracking-[-0.05em]">
              A leading company in international{" "}
              <br className="hidden lg:block" />
              transport and logistics.
            </h2>
          </motion.div>

          {/* Thin, Subtle Horizontal Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[1.5px] bg-[#002d62]/30 mb-8 md:mb-12 origin-left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-10 items-start">
            {/* Left Category Label - Bold Red */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:col-span-3 pt-1"
            >
              <span className="text-primary font-bold uppercase text-sm leading-tight block">
                International <br />
                Logistics Specialists
              </span>
            </motion.div>

            {/* Content & Button Area */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="max-w-lg">
                <p className="text-[#334155] text-[14px] mb-8 font-normal">
                  Business Way is a full-fledged international freight
                  forwarders established with an extensive agency network
                  throughout the world. In a relatively short period we have
                  achieved remarkable success in both Air and Sea Freight
                  operations. We believe this success is to a great extent due
                  to our experienced, loyal and self-motivated staff.
                </p>

                {/* Pill Button - Matching + INFO Style */}
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-gray-400/50 text-black font-bold text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all transform active:scale-95"
                >
                  <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:bg-white transition-colors" />
                  READ MORE
                </Link>
              </div>
            </motion.div>

            {/* Truck Image - Large, Clean, Overlap Right side */}
            <div className="lg:col-span-5 relative lg:-mt-32 lg:-mr-32 pointer-events-none overflow-hidden lg:overflow-visible">
              <motion.div style={{ x: truckX, opacity: truckOpacity }}>
                <Image
                  src="/img/truck.png"
                  alt="Logistics Fleet"
                  width={1400}
                  height={1100}
                  className="w-[150%] md:w-[120%] lg:w-[140%] max-w-none h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] translate-x-[10%] md:translate-x-0"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

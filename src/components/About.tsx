"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building2, Home, Users2, Award, ArrowRight } from "lucide-react";

function AnimatedStat({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/\d/g, "");

  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [motionValue, isInView, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  const stats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      value: "600+",
      label: "PROJECTS",
    },
    {
      icon: <Home className="w-8 h-8" />,
      value: "300+",
      label: "HOUSING PROJECTS",
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      value: "600+",
      label: "HAPPY CLIENTS",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "20+",
      label: "YEARS OF EXPERIENCE",
    },
  ];

  return (
    <section id="about" className="relative bg-white">
      {/* Top Section - Stats & Intro */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-24 mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--foreground)] leading-[1.1] tracking-tight"
          >
            Partner with <span className="text-[var(--secondary)]">Anarc</span>{" "}
            <br />
            for your upcoming <br />
            premium projects.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:max-w-md lg:ml-auto"
          >
            <p className="text-[var(--foreground)]/70 text-lg leading-relaxed">
              Thanks to our dedicated construction capacity and in-house
              expertise, we offer a wide range of high-quality services for
              residential and commercial infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start gap-4 relative group"
            >
              <div className="text-[var(--primary)] mb-2">{stat.icon}</div>
              <div className="flex flex-col">
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl md:text-5xl font-semibold text-[var(--foreground)]">
                    <AnimatedStat value={stat.value} />
                  </span>
                </div>
                <p className="text-[var(--foreground)]/60 text-[10px] md:text-xs uppercase tracking-widest font-semibold leading-snug">
                  {stat.label}
                </p>
              </div>
              {/* Vertical Divider for Desktop screens */}
              {index < 3 && (
                <div className="hidden lg:block absolute -right-6 top-0 bottom-0 w-[1px] bg-[var(--foreground)]/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Full Width Feature */}
      <div className="relative mx-auto h-auto py-20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Anarc Interior"
          fill
          className="object-cover"
        />

        {/* Dark Overlay with Primary Color Tint */}
        <div className="absolute inset-0 bg-[#521212]/80 backdrop-blur-[1px]" />

        <div className="relative z-10 h-full max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-24 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
                Square Deals Tall Stature Solid Trust
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div className="space-y-6 lg:max-w-md">
                <p className="text-white/80 text-base leading-relaxed">
                  Anarc Developers is a construction company established in 2000
                  and based in Mukkam, Calicut. Led by the highly experienced
                  managing director Mr.Muhammad Lais. His extensive background
                  in project management ensures all of Anarc Developers&apos;
                  initiatives are completed on time and within budget without
                  sacrificing quality or value. It focuses on the design,
                  engineering, and construction of large-scale building
                  projects. Also, he is an experienced and well-respected
                  innovator in the construction industry, owning many companies
                  like TK bricks, TK industrial, quarries, profix paint shop,
                  madar building materials shop, crusher, etc that provide a
                  wide range of services related to the field.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-4 px-8 py-4 border border-white/30 rounded-full text-white text-xs tracking-widest uppercase hover:bg-white hover:text-[var(--primary)] transition-all duration-300 group"
                >
                  Explore Our World
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

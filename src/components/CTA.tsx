"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#f7f5f2] py-20 md:py-24 px-6 md:px-12 relative overflow-hidden border-y border-black/5">
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-black font-semibold tracking-widest text-[10px] md:text-xs uppercase">
                Where Vision Meets Execution
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-normal text-black leading-[1.1] tracking-tight mb-12"
            >
              Every great build begins with understanding
            </motion.h2>

            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <Link
                href="#approach"
                className="bg-black text-white px-8 py-4 rounded-sm text-[10px] md:text-xs font-semibold tracking-widest uppercase flex items-center gap-3 hover:bg-[var(--primary)] transition-all duration-300"
              >
                <span className="text-lg leading-none">↳</span>
                OUR APPROACH
              </Link>

              <Link
                href="#contact"
                className="text-black text-[10px] md:text-xs font-semibold tracking-widest uppercase flex items-center gap-3 group"
              >
                <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">
                  ↳
                </span>
                GET IN TOUCH
              </Link>
            </div>
          </div>

          {/* Abstract Line Art / Architectural Graphic */}
          <div className="hidden lg:flex justify-end relative h-[400px]">
            <svg
              viewBox="0 0 400 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full opacity-40"
            >
              <path
                d="M50 550V100L350 50V500L50 550Z"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path d="M50 300L350 250" stroke="currentColor" strokeWidth="1" />
              <path d="M200 525V75" stroke="currentColor" strokeWidth="1" />
              <path
                d="M350 50L450 150V550L350 500"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M450 350L350 300"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Background Graphic Lines */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.1] pointer-events-none">
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="500"
            y1="0"
            x2="500"
            y2="1000"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="500"
            x2="1000"
            y2="500"
            stroke="black"
            strokeWidth="1"
          />
          <path
            d="M1000 200L500 0V500L1000 700V200Z"
            stroke="black"
            strokeWidth="1"
          />
          <path d="M500 0L0 200V700L500 500" stroke="black" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";

export default function News() {
  return (
    <section id="news" className="bg-white py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[var(--primary)] font-medium tracking-widest text-xs uppercase mb-4 block"
            >
              Latest News
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-tight tracking-tight"
            >
              Updates from the <br className="hidden md:block" /> world of{" "}
              <span className="text-[var(--primary)]">B-Freight.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/#contact"
              className="group flex items-center gap-3 text-sm font-semibold tracking-widest uppercase hover:text-[var(--primary)] transition-colors"
            >
              Contact Us
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {newsItems.map((item, index) => (
            <div key={item.slug}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
                    {item.category}
                  </div>
                </div>

                <div className="space-y-4">
                  <time className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                    {item.date}
                  </time>
                  <h3 className="text-2xl font-normal text-black leading-tight group-hover:text-[var(--primary)] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-black font-semibold text-xs tracking-widest uppercase group-hover:gap-4 transition-all hover:text-[var(--primary)]">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

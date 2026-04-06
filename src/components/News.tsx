"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { newsItems } from "@/data/news";

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);

  return (
    <section id="news" className="bg-white py-18 lg:py-22 px-6 md:px-14 lg:px-20 overflow-hidden font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="mb-12 md:mb-12">
          <motion.div {...fadeInUp} className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-normal text-[#002d62] tracking-tight">
              Latest <span className="text-[#00b8fe] italic">News</span> & Updates
            </h2>
            <div className="w-12 h-px bg-[#00b8fe]" />
          </motion.div>
        </div>

        {/* Mobile Carousel - Only visible on small screens */}
        <div className="md:hidden">
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
              >
                <NewsCard item={newsItems[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Mobile Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {newsItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    i === currentIndex ? "w-8 bg-[#00b8fe]" : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3 border border-gray-200 rounded-full hover:border-[#00b8fe] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#002d62]" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-[#002d62] text-white rounded-full hover:bg-[#00b8fe] transition-colors shadow-lg shadow-[#00b8fe]/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid - Visible on md and up */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <NewsCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item }: { item: any }) {
  return (
    <article className="group cursor-pointer flex flex-col h-full">
      {/* Image Container with Hover Reveal */}
      <div className="relative aspect-video overflow-hidden mb-6 bg-gray-100 rounded-sm">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-[0.9] group-hover:brightness-100"
        />
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-[#002d62] text-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest">
            {item.category}
          </div>
        </div>
        {/* Minimalist Border Decoration */}
        <div className="absolute inset-0 border border-black/5 group-hover:border-[#00b8fe]/30 transition-colors duration-500" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col grow space-y-4">
        <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#00b8fe]">
          <Calendar className="w-3.5 h-3.5" />
          {item.date}
        </div>

        <h3 className="text-2xl md:text-3xl font-medium text-[#002d62] leading-[1.15] tracking-tight group-hover:text-[#00b8fe] transition-colors duration-300">
          {item.title}
        </h3>

        <p className="text-[#334155]/70 text-[15px] leading-relaxed line-clamp-2 md:line-clamp-3 font-normal">
          {item.excerpt}
        </p>

        <div className="pt-4 mt-auto">
          <div className="inline-flex items-center gap-3 text-[#002d62] font-bold text-[11px] tracking-widest uppercase group-hover:gap-8 transition-all duration-700 ease-in-out">
            <span>READ MORE</span>
            <div className="w-12 h-px bg-[#002d62]/20 group-hover:w-20 group-hover:bg-[#00b8fe] transition-all duration-700" />
            <ArrowRight className="w-4 h-4 transition-colors duration-300 group-hover:text-[#00b8fe]" />
          </div>
        </div>
      </div>
    </article>
  );
}

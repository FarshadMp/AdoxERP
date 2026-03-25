"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";

export default function OurProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds auto-slide
    return () => clearInterval(timer);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black"
    >
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={currentProject.mainImage}
            alt={currentProject.name}
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col justify-between">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-[#c9952f] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4 md:mb-6">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-[#c9952f] mb-8" />
        </motion.div>

        {/* Project Information Box (Boxy UI) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-none max-w-xl group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#c9952f] text-[10px] font-bold uppercase tracking-widest">
                    {currentProject.status}
                  </span>
                  <div className="w-8 h-[1px] bg-white/20" />
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    {currentProject.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-light text-white mb-6 tracking-tight">
                  {currentProject.name}
                </h3>

                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-8 border-l border-[#c9952f] pl-6 italic">
                  {currentProject.title}
                </p>

                <div className="flex items-center gap-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <div className="flex flex-col gap-1">
                    <span className="text-white/20">Location</span>
                    <span>{currentProject.location}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/20">Year</span>
                    <span>{currentProject.year || "2024"}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons inside the box */}
            <div className="flex gap-1 absolute -bottom-[1px] right-0 translate-y-full lg:translate-y-0 lg:left-full lg:-ml-[1px]">
              <button
                onClick={prevSlide}
                className="w-16 h-16 bg-[#c9952f] hover:bg-[#b07d24] text-white flex items-center justify-center transition-all"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-16 h-16 bg-white hover:bg-gray-100 text-black flex items-center justify-center transition-all"
                aria-label="Next project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

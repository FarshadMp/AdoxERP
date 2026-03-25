"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

import { projects } from "@/data/projects";

export default function ProjectHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds auto-slide
    return () => clearInterval(timer);
  }, []); // Re-run when index changes to reset timer

  return (
    <section className="relative h-[80vh] md:h-screen w-full flex flex-col justify-end overflow-hidden bg-black">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 1.2, ease: [0.33, 1, 0.68, 1] },
              opacity: { duration: 0.8 },
              scale: { duration: 1.5 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={projects[currentIndex].mainImage}
              alt={projects[currentIndex].name}
              fill
              priority
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main UI Layout */}
      <div className="relative z-10 w-full flex flex-col justify-end px-6 md:px-16 pb-12">
        {/* Project Content Area */}
        <div className="w-full space-y-12">
          {/* Project Title and UI Layer */}
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-12 w-full">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                  className="text-white text-4xl md:text-6xl font-light leading-[1.05] tracking-tight max-w-5xl uppercase"
                >
                  {projects[currentIndex].title}
                </motion.h1>
              </AnimatePresence>

              {/* Navigation Buttons - Fixed (Outside AnimatePresence) */}
              <div className="flex gap-4 mb-4 z-20">
                <button
                  onClick={prevSlide}
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-all text-[10px] tracking-widest uppercase font-semibold"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  PREV
                </button>
                <div className="w-px h-4 bg-white/10" />
                <button
                  onClick={nextSlide}
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-all text-[10px] tracking-widest uppercase font-semibold"
                >
                  NEXT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Progress Bar Area - Fixed Background, Animated Fill */}
            <div className="relative w-full h-[1.5px] bg-white/10 overflow-hidden mb-4">
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-white/60"
              />
            </div>

            <div className="flex justify-between items-center py-2 w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white text-[10px] md:text-xs font-medium uppercase"
                >
                  {projects[currentIndex].name}
                </motion.span>
              </AnimatePresence>

              {/* Pagination - Fixed (Outside AnimatePresence for the structure) */}
              <div className="text-white text-[10px] md:text-xs tracking-widest font-light flex items-center gap-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="font-normal"
                  >
                    {projects[currentIndex].id < 10
                      ? `0${projects[currentIndex].id}`
                      : projects[currentIndex].id}
                  </motion.span>
                </AnimatePresence>
                <span className="opacity-40">/</span>
                <span className="opacity-40">
                  {projects.length < 10
                    ? `0${projects.length}`
                    : projects.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

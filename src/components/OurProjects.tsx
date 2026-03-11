"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Housing Project",
    location: "MuringaPurayi",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Villas",
    location: "Waynad",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Commercial Complex",
    location: "Calicut",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
  },
];

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

  return (
    <section
      id="projects"
      className="relative w-full h-[600px] md:h-[800px] overflow-hidden"
    >
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={projects[currentIndex].image}
            alt="Our Projects Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col justify-between">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-4 md:mb-6">
            Our Projects
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Discover our portfolio of successfully completed and ongoing
            developments across Kerala. Each project is a testament to our
            commitment to innovative design, uncompromising quality, and
            sustainable construction practices that stand the test of time.
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[600px] bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-[10px] md:text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold ${
                    projects[currentIndex].status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : projects[currentIndex].status === "Ongoing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {projects[currentIndex].status}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-normal text-black mb-4">
                {projects[currentIndex].title}
              </h3>
              <div className="space-y-1 text-black text-base md:text-lg">
                <p>{projects[currentIndex].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--secondary)] hover:opacity-90 text-white flex items-center justify-center transition-opacity"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--secondary)] hover:opacity-90 text-white flex items-center justify-center transition-opacity"
              aria-label="Next project"
            >
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

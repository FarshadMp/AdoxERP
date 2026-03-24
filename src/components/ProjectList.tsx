"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

const categories = ["ALL", "COMPLETED", "ONGOING", "UPCOMING"];

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.status === activeCategory);

  return (
    <section className="bg-[#f7f5f2] py-20 md:py-24">
      {/* Sticky Category Filter */}
      <div className="sticky top-0 z-40 bg-[#f7f5f2]/80 backdrop-blur-md border-y border-black/5 mb-16">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Section Indicator */}
          <div className="flex items-center">
            <span className="text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              PROJECTS
            </span>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-[10px] md:text-xs font-semibold transition-all border ${
                  activeCategory === category
                    ? "bg-[#222] border-[#222] text-white"
                    : "bg-transparent border-black/10 text-black/60 hover:border-black/30 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-[4/3] group overflow-hidden bg-gray-100"
            >
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src={project.mainImage}
                  alt={project.name}
                  fill
                  className="object-cover transition-all duration-700 scale-100 group-hover:scale-110 grayscale-0 group-hover:grayscale"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-white text-lg font-light uppercase border-b border-white/40 pb-2 mb-4">
                    {project.name}
                  </span>
                  <span className="text-white text-[10px] font-light border border-white/20 px-6 py-2 backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
                    VIEW PROJECT
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

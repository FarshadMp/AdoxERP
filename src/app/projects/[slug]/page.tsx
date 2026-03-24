"use client";

import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; // Assuming these icons are from lucide-react

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#f7f5f2] flex items-center justify-center">
        <h1 className="text-black text-2xl font-light">Project not found</h1>
      </main>
    );
  }

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % project.gallery.length : null,
    );
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + project.gallery.length) % project.gallery.length
        : null,
    );
  };

  return (
    <main className="min-h-screen bg-[#f7f5f2]">
      {/* Mini Back Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#f7f5f2]/80 backdrop-blur-md px-6 md:px-12 py-6">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Link
            href="/projects"
            className="group flex items-center gap-3 text-black hover:text-[#E65F2B] transition-all"
          >
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#E65F2B] transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] md:text-xs font-semibold uppercase">
              BACK TO PROJECTS
            </span>
          </Link>

          <Link href="/" className="relative w-30 h-8 md:w-34 md:h-10">
            <Image
              src="/img/logo.png"
              alt="Anarc Logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      <section className="pt-40 pb-20 px-6 md:px-40 mx-auto">
        {/* Project Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-15">
          <div className="space-y-4">
            <h3 className="text-gray-400 text-[10px] md:text-sm tracking-widest uppercase font-medium">
              Project
            </h3>
            <p className="text-black text-lg md:text-2xl font-light uppercase tracking-tight">
              {project.name}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-400 text-[10px] md:text-sm tracking-widest uppercase font-medium">
              Project Details
            </h3>
            <ul className="text-black text-sm md:text-lg font-light tracking-tight space-y-1">
              <li className="uppercase">{project.location}</li>
              <li className="opacity-60">
                {project.status}, {project.year}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-400 text-[10px] md:text-sm tracking-widest uppercase font-medium">
              Photographer
            </h3>
            <p className="text-black text-sm md:text-lg font-light uppercase tracking-tight">
              {project.photographer || "N/A"}
            </p>
          </div>
        </div>

        {/* Unified Vertical Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 mb-20">
          {project.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer group"
              onClick={() => setLightboxIndex(idx)}
            >
              <Image
                src={img}
                alt={`${project.name} gallery ${idx}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Project Navigation */}
        <div className="border-t border-black/10 pt-15 flex flex-row justify-between items-center gap-4 text-left">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group block space-y-1 md:space-y-2 flex-1"
          >
            <span className="text-gray-400 text-[10px] md:text-xs tracking-widest uppercase font-semibold block transition-colors group-hover:text-black whitespace-nowrap">
              ← PREV
            </span>
            <span className="text-black text-[12px] md:text-4xl font-light uppercase tracking-tight block transition-transform group-hover:translate-x-[-5px] line-clamp-1">
              {prevProject.name}
            </span>
          </Link>

          <div className="w-[1px] h-12 md:h-20 bg-black/5 shrink-0" />

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block space-y-1 md:space-y-2 text-right flex-1"
          >
            <span className="text-gray-400 text-[10px] md:text-xs tracking-widest uppercase font-semibold block transition-colors group-hover:text-black whitespace-nowrap">
              NEXT →
            </span>
            <span className="text-black text-[12px] md:text-4xl font-light uppercase tracking-tight block transition-transform group-hover:translate-x-[5px] line-clamp-1">
              {nextProject.name}
            </span>
          </Link>
        </div>
      </section>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.gallery[lightboxIndex]}
                alt="Full size project image"
                fill
                className="object-contain"
                priority
              />

              {/* Lightbox Controls */}
              <button
                onClick={prevLightbox}
                className="absolute left-4 md:left-[-60px] top-1/2 -translate-y-12 p-4 text-white hover:text-[#E65F2B] transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
              </button>

              <button
                onClick={nextLightbox}
                className="absolute right-4 md:right-[-60px] top-1/2 -translate-y-12 p-4 text-white hover:text-[#E65F2B] transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
              </button>

              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-[-40px] right-0 md:right-[-40px] text-white hover:text-[#E65F2B] p-2"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest font-light">
                {lightboxIndex + 1} / {project.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <CTA />
      <Footer />
    </main>
  );
}

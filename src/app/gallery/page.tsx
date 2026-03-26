"use client";

import { useState } from "react";
import InnerHero from "@/components/InnerHero";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Flatten all gallery images from all projects and remove duplicates
  const allImages = projects
    .flatMap((project) =>
      project.gallery.map((img) => ({
        src: img,
        category: project.category,
        name: project.name,
      })),
    )
    .filter(
      (img, index, self) => index === self.findIndex((t) => t.src === img.src),
    );

  return (
    <main className="min-h-screen bg-white">
      <InnerHero
        title="Visual Journey"
        subtitle="Our Gallery"
        image="/img/hero/gallery-ban.png"
      />

      {/* Gallery Grid */}
      <section className="py-20 md:py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {allImages.map((image) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[3/2] overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl aspect-video md:aspect-auto h-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Gallery Full Size"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <button
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-[#c9952f] transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

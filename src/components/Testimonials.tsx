"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Unrivaled customer service, cutting edge design and quality. Anarc Builders is firmly lodged in our list of preferred partners for premium construction projects.",
    author: "Vaidas Vileikis",
    role: "FOUNDER, NAME ARCHITECTS",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote:
      "The attention to detail and professional management shown by Anarc Developers is exceptional. They deliver exactly what they promise, within the budget and timeline.",
    author: "Sarah Johnson",
    role: "CEO, URBAN SPACES",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-[#f7f5f2] py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-10 md:mb-15">
          <div className="flex items-center gap-3">
            <span className="text-black font-semibold tracking-widest text-xs uppercase">
              Client Stories
            </span>
          </div>

          <div className="hidden md:block text-sm font-mono text-gray-400">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-12 items-start">
          {/* Client Image */}
          <motion.div
            key={currentIndex + "-img"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 aspect-[3/4] relative grayscale hover:grayscale-0 transition-all duration-700 mr-auto lg:mx-0 w-full max-w-[150px] md:max-w-[150px] lg:max-w-none mb-6 lg:mb-0"
          >
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Testimonial Text */}
          <div className="lg:col-span-9 lg:ml-12 relative pt-2 md:pt-0">
            <motion.div
              key={currentIndex + "-content"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex gap-4 mb-4">
                <Quote
                  className="w-8 h-8 md:w-12 md:h-12 text-black/10 flex-shrink-0"
                  fill="currentColor"
                />
              </div>

              <blockquote className="text-2xl md:text-5xl font-normal text-black leading-tight tracking-tight mb-10">
                {testimonials[currentIndex].quote}
              </blockquote>

              <div className="flex flex-col gap-1">
                <cite className="text-xl font-normal text-black not-italic tracking-tight">
                  {testimonials[currentIndex].author}
                </cite>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

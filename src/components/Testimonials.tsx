"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Building2,
  Store,
  Factory,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "“We evaluated several ERP systems before choosing AdoxERP. The ZATCA integration worked straight out of the box, the AI chatbot has genuinely saved our team hours every week, and the support team actually understands the Saudi market. It has made a real difference to how we run our business.”",
    author: "Operations Director",
    company: "Trading Company — Riyadh",
    location: "Riyadh, Saudi Arabia",
    image: "/saudi_business_riyadh_1776163776987.png",
    category: "Trading & Retail",
    icon: <Store className="w-6 h-6" />,
  },
  {
    id: 2,
    content:
      "“Our finance team used to spend weeks on quarterly reporting and VAT reconciliation. With AdoxERP’s automated accounting and AI-generated reports, the same process now takes two days. The time saving alone has been worth every riyal.”",
    author: "CFO",
    company: "Distribution Group — Jeddah",
    location: "Jeddah, Saudi Arabia",
    image: "/saudi_business_jeddah_1776163792887.png",
    category: "Logistics & Finance",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: 3,
    content:
      "“As a manufacturing company in Dammam, we needed an ERP that could handle production planning and inventory across multiple sites. AdoxERP delivered that and more — and the predictive analytics module has completely changed how we manage our supply chain.”",
    author: "General Manager",
    company: "Manufacturing Firm — Dammam",
    location: "Dammam, Saudi Arabia",
    image: "/saudi_business_dammam_1776163809680.png",
    category: "Manufacturing",
    icon: <Factory className="w-6 h-6" />,
  },
];

// Filler poles to match the 7-pole UI from the screenshot
const fillerPoles = [
  { id: "f1", image: "/saudi_business_general_1_1776164677349.png" },
  { id: "f2", image: "/saudi_business_general_2_1776164697826.png" },
  { id: "f3", image: "/saudi_business_riyadh_1776163776987.png" }, // reusing
  { id: "f4", image: "/saudi_business_jeddah_1776163792887.png" }, // reusing
];

// Combine into a 7-item list: [Filler, Testimonial1, Testimonial2, Testimonial3, Filler, Filler, Filler]
// Or better: [Filler, Filler, Testimonial1, Testimonial2, Testimonial3, Filler, Filler] - Testimonial2 is center
const galleryItems = [
  { type: "filler", ...fillerPoles[0] },
  { type: "filler", ...fillerPoles[1] },
  { type: "content", ...testimonials[0] },
  { type: "content", ...testimonials[1] },
  { type: "content", ...testimonials[2] },
  { type: "filler", ...fillerPoles[2] },
  { type: "filler", ...fillerPoles[3] },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(3); // Start with center testimonial (Index 3)

  useEffect(() => {
    const timer = setInterval(() => {
      // Rotate active index among the 3 content poles (2, 3, 4)
      setActiveIndex((prev) => {
        if (prev === 2) return 3;
        if (prev === 3) return 4;
        return 2;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  return (
    <section className="pb-14 md:pb-24 bg-white overflow-hidden text-primary-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-sm">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark mb-6 leading-[1.1]">
              Businesses Across Saudi Arabia Trust AdoxERP
            </h2>

            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* 7-Pole Imagepole Gallery */}
        <div className="flex flex-row items-stretch h-[400px] md:h-[550px] gap-2 md:gap-3 overflow-hidden rounded-xl md:rounded-xl">
          {galleryItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  flex: isActive ? 12 : 1, // High flex for expanded card
                }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="relative cursor-pointer overflow-hidden group rounded-sm md:rounded-xl"
              >
                <Image
                  src={item.image}
                  alt="Gallery image"
                  fill
                  className={`object-cover transition-transform duration-1000 ${isActive ? "scale-100" : "scale-110 group-hover:scale-105"}`}
                />

                {/* Overlays */}
                <div
                  className={`absolute inset-0 bg-black/20 transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100"}`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                />

                {/* Content - Only for Testimonial types when active */}
                <AnimatePresence mode="wait">
                  {isActive && item.type === "content" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute inset-0 flex items-end justify-center p-6 md:p-8 z-20"
                    >
                      {/* Floating White Card matching screenshot */}
                      <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl shadow-2xl relative max-w-2xl ml-auto md:mr-0 mr-auto">
                        {/* Top Row: Logo and Category */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                            {item.icon}
                          </div>
                          <span className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item.category}
                          </span>
                        </div>

                        <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8 font-normal">
                          "{item.content}"
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden relative">
                              <Image
                                src={item.image}
                                fill
                                className="object-cover"
                                alt="User"
                              />
                            </div>
                            <div>
                              <h4 className="text-primary-dark font-bold text-sm md:text-base leading-tight">
                                {item.author}
                              </h4>
                              <p className="text-secondary-dark text-xs mt-0.5">
                                {item.company}
                              </p>
                            </div>
                          </div>

                          <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-primary/5 transition-colors">
                            <ChevronRight className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building,
  CalendarDays,
  ClipboardCheck,
  Settings,
  HardHat,
  KanbanSquare,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

export default function OurServices() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Site Management",
      icon: <Building className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
      description:
        "Comprehensive site operations, ensuring safety, efficiency, and seamless execution throughout the building process.",
      link: "#",
    },
    {
      title: "Planning & Scheduling",
      icon: (
        <CalendarDays className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />
      ),
      description:
        "Strategic project planning and precise scheduling to meet deadlines without compromising quality.",
      link: "#",
    },
    {
      title: "Quality control",
      icon: (
        <ClipboardCheck className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />
      ),
      description:
        "Rigorous quality assurance protocols at every phase to guarantee structural integrity and excellence.",
      link: "#",
    },
    {
      title: "Field Engineering",
      icon: <Settings className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
      description:
        "Expert on-site engineering solutions addressing technical challenges and optimizing construction methods.",
      link: "#",
    },
    {
      title: "Construction",
      icon: <HardHat className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
      description:
        "Full-scale construction services delivering durable, sustainable, and aesthetically pleasing structures.",
      link: "#",
    },
    {
      title: "Project Management",
      icon: (
        <KanbanSquare className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />
      ),
      description:
        "End-to-end management aligning resources, timelines, and budgets to achieve project objectives.",
      link: "#",
    },
  ];

  const getScrollAmount = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return 382; // Keep the original hardcoded desktop scroll amount
    }

    if (
      !scrollContainerRef.current ||
      !scrollContainerRef.current.firstElementChild
    ) {
      return 382;
    }

    const item = scrollContainerRef.current.firstElementChild as HTMLElement;
    return item.offsetWidth + 24; // mobile mobile gap (gap-6 = 24px)
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="relative py-20 md:py-24 bg-[#f7f5f2] overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black font-semibold tracking-widest text-xs uppercase block mb-2">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-tight tracking-tight">
              Our Services
            </h2>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 hidden md:flex">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pt-4 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-none w-[85vw] md:w-[350px] snap-center group relative overflow-hidden bg-white p-8 md:p-8 flex flex-col items-start hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                {/* Subtle blueprint background pattern inside card */}
                <div
                  className="absolute bottom-0 right-0 w-64 h-64 opacity-0 pointer-events-none transform translate-x-1/4 translate-y-1/4 group-hover:opacity-[0.03] transition-opacity duration-700"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                  }}
                />

                <div className="text-[var(--secondary)] mb-4 relative z-10 transform origin-left transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                <div className="flex flex-col relative z-10 w-full flex-grow">
                  <h3 className="text-2xl md:text-2xl font-normal text-black mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-10 flex-grow font-normal">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-3 text-[var(--secondary)] font-semibold text-[13px] uppercase tracking-widest hover:text-black transition-colors duration-300 mt-auto group/link"
                  >
                    View more
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-start justify-start gap-2 mt-8 md:hidden">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 border border-black/10 flex items-center justify-center text-black active:bg-black active:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 border border-black/10 flex items-center justify-center text-black active:bg-black active:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Users,
  Package,
  UserSquare2,
  MonitorDot,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const modules = [
  // ... (same modules array)
  {
    title: "Finance & Accounting",
    description:
      "Automate ledger management, accounts payable/receivable, and financial reporting with real-time accuracy.",
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    title: "Sales & CRM",
    description:
      "Track leads, manage customer relationships, and streamline your entire sales pipeline from inquiry to invoice.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Inventory & Warehouse",
    description:
      "Multi-location tracking, automated reordering, and real-time stock visibility to eliminate shortages.",
    icon: <Package className="w-6 h-6" />,
  },
  {
    title: "HR & Payroll",
    description:
      "Manage employee life-cycles, attendance, and local payroll compliance with ease and precision.",
    icon: <UserSquare2 className="w-6 h-6" />,
  },
  {
    title: "POS System",
    description:
      "Fast, reliable point-of-sale features that sync instantly with inventory and accounting backends.",
    icon: <MonitorDot className="w-6 h-6" />,
  },
  {
    title: "Route & Distribution Intelligence",
    description:
      "Optimize delivery routes, manage fleet logistics, and track real-time distribution efficiency.",
    icon: <Truck className="w-6 h-6" />,
  },
];

export default function ModulesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const GAP = 32; // 32px for gap-8

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (currentIndex < modules.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      className="relative py-14 md:py-22 bg-white overflow-hidden"
      id="modules"
    >
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#0693FB_0.5px,transparent_0.5px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0693FB]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0693FB]/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[13px] font-semibold mb-5">
              System Core
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark leading-[1.1] tracking-[-0.04em] mb-6">
              Everything Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0693FB] to-[#0470c2]">
                Business Needs
              </span>
            </h2>

            <p className="text-primary-light text-base leading-relaxed">
              IntelliERP integrates all core functions into a single,
              high-performance operating system.
            </p>
          </div>

          {/* Carousel Controls - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-black/5 text-primary-dark hover:border-[#0693FB] hover:text-[#0693FB] hover:bg-[#0693FB]/5 shadow-sm"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= modules.length - cardsToShow}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                currentIndex >= modules.length - cardsToShow
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-black/5 text-primary-dark hover:border-[#0693FB] hover:text-[#0693FB] hover:bg-[#0693FB]/5 shadow-sm"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-visible">
          <div className="overflow-hidden py-4 -my-4 px-4 -mx-4">
            <motion.div
              drag="x"
              dragConstraints={{
                right: 0,
                left: -((modules.length - cardsToShow) * 2000), // Large enough or will snap back
              }}
              onDragEnd={(_, info) => {
                const threshold = 50;
                if (
                  info.offset.x < -threshold &&
                  currentIndex < modules.length - cardsToShow
                ) {
                  setCurrentIndex((prev) => prev + 1);
                } else if (info.offset.x > threshold && currentIndex > 0) {
                  setCurrentIndex((prev) => prev - 1);
                }
              }}
              animate={{
                x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (GAP / cardsToShow)}px)`,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-8 cursor-grab active:cursor-grabbing"
              ref={containerRef}
            >
              {modules.map((module, i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{
                    width: `calc(${100 / cardsToShow}% - ${(GAP * (cardsToShow - 1)) / cardsToShow}px)`,
                  }}
                >
                  <div className="group relative h-full p-8 md:p-10 rounded-[40px] bg-white border border-black/3 hover:border-[#0693FB]/30 transition-all duration-700 hover:shadow-[0_32px_64px_-16px_rgba(6,147,251,0.12)]">
                    <div className="absolute top-8 right-8 text-[40px] font-bold text-black/3 group-hover:text-[#0693FB]/10 transition-colors duration-700 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="w-16 h-16 rounded-[24px] bg-gray-50 text-[#0693FB] flex items-center justify-center mb-8 md:mb-10 group-hover:bg-[#0693FB] group-hover:text-white transition-all duration-700 shadow-sm border border-black/2">
                      {module.icon}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-4 group-hover:translate-x-1 transition-transform duration-500">
                      {module.title}
                    </h3>

                    <p className="text-primary-light/70 text-sm md:text-[15px] leading-relaxed mb-8 group-hover:text-primary-light transition-colors duration-500">
                      {module.description}
                    </p>

                    <div className="flex items-center gap-3 text-[#0693FB] font-bold text-[10px] md:text-[11px] tracking-widest uppercase group-hover:gap-5 transition-all duration-500">
                      Explore Module <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Decorative line on hover */}
                    <div className="absolute bottom-10 left-10 right-10 h-px bg-linear-to-r from-[#0693FB]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mt-12 h-[2px] w-full bg-gray-100 rounded-full relative overflow-hidden">
            <motion.div
              animate={{
                width: `${((currentIndex + cardsToShow) / modules.length) * 100}%`,
                x: `${(currentIndex / modules.length) * 100}%`,
              }}
              className="absolute h-full bg-[#0693FB] transition-all duration-500"
            />
          </div>

          {/* Carousel Controls - Mobile */}
          <div className="flex md:hidden items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-black/5 text-primary-dark active:scale-95 shadow-sm bg-white"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= modules.length - cardsToShow}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                currentIndex >= modules.length - cardsToShow
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-black/5 text-primary-dark active:scale-95 shadow-sm bg-white"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

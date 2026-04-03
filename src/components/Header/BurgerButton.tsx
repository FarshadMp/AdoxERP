"use client";

import { motion } from "framer-motion";

interface BurgerButtonProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}

export default function BurgerButton({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isScrolled,
}: BurgerButtonProps) {
  return (
    <button
      className={`lg:hidden relative z-[200] w-10 h-10 flex flex-col items-center justify-center gap-[6px] transition-all duration-300 ${
        isMobileMenuOpen
          ? "text-white"
          : isScrolled
          ? "text-[#002d62]"
          : "text-white"
      }`}
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <motion.span
        animate={
          isMobileMenuOpen
            ? { rotate: 45, y: 8, backgroundColor: "#fff" }
            : {
                rotate: 0,
                y: 0,
                backgroundColor: isScrolled ? "#002d62" : "#fff",
              }
        }
        className="w-8 h-[2px] rounded-full transition-colors duration-300"
      />
      <motion.span
        animate={
          isMobileMenuOpen
            ? { opacity: 0, x: 20 }
            : {
                opacity: 1,
                x: 0,
                backgroundColor: isScrolled ? "#002d62" : "#fff",
              }
        }
        className="w-8 h-[2px] rounded-full transition-colors duration-300"
      />
      <motion.span
        animate={
          isMobileMenuOpen
            ? { rotate: -45, y: -8, backgroundColor: "#fff" }
            : {
                rotate: 0,
                y: 0,
                backgroundColor: isScrolled ? "#002d62" : "#fff",
              }
        }
        className="w-8 h-[2px] rounded-full transition-colors duration-300"
      />
    </button>
  );
}

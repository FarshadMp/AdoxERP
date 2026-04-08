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
  const barColor = isScrolled ? "#111827" : "#fff"; // gray-900 when scrolled

  return (
    <button
      className={`lg:hidden relative z-200 w-10 h-10 flex flex-col items-center justify-center gap-[6px] transition-all duration-300`}
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <motion.span
        animate={
          isMobileMenuOpen
            ? { rotate: 45, y: 8, backgroundColor: barColor }
            : {
                rotate: 0,
                y: 0,
                backgroundColor: barColor,
              }
        }
        className="w-8 h-[2.5px] rounded-full transition-colors duration-300"
      />
      <motion.span
        animate={
          isMobileMenuOpen
            ? { opacity: 0, x: 20 }
            : {
                opacity: 1,
                x: 0,
                backgroundColor: barColor,
              }
        }
        className="w-7 h-[2.5px] rounded-full transition-colors duration-300 self-end mr-1"
      />
      <motion.span
        animate={
          isMobileMenuOpen
            ? { rotate: -45, y: -8, backgroundColor: barColor }
            : {
                rotate: 0,
                y: 0,
                backgroundColor: barColor,
              }
        }
        className="w-8 h-[2.5px] rounded-full transition-colors duration-300"
      />
    </button>
  );
}

"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface NavbarProps {
  navItems: { label: string; href: string }[];
  smoothEase: string;
  isScrolled: boolean;
  openMenu: string | null;
  onMouseEnter: (label: string) => void;
  onMouseLeave: () => void;
}

export default function Navbar({
  navItems,
  smoothEase,
  isScrolled,
  openMenu,
  onMouseEnter,
  onMouseLeave,
}: NavbarProps) {
  return (
    <nav className="flex items-center gap-2 md:gap-4 relative px-2">
      {navItems.map((item, index) => {
        const isActive = openMenu === item.label;
        const hasMenu = item.label === "Modules";

        return (
          <div
            key={item.label}
            onMouseEnter={() => onMouseEnter(item.label)}
            onMouseLeave={onMouseLeave}
            className="relative py-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 relative z-10 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? "bg-gray-100 text-primary-dark"
                    : isScrolled
                      ? "text-primary-dark/80 hover:text-primary"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {hasMenu && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isActive ? "rotate-180" : "rotate-0"
                    } ${
                      isActive
                        ? "text-primary"
                        : isScrolled
                          ? "text-primary-dark/40"
                          : "text-white/40"
                    }`}
                  />
                )}
              </Link>
            </motion.div>
          </div>
        );
      })}
    </nav>
  );
}

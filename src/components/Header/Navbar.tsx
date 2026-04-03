"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavbarProps {
  navItems: { label: string; href: string }[];
  isScrolled: boolean;
  smoothEase: string;
}

export default function Navbar({ navItems, isScrolled, smoothEase }: NavbarProps) {
  return (
    <div className="flex items-center gap-10">
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-10">
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={item.href}
              className={`relative group text-[13px] font-extrabold tracking-wide flex flex-col items-center group ${smoothEase} ${
                isScrolled ? "text-[#002d62]" : "text-white"
              }`}
            >
              <span className="group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>

              {/* Underline Blending */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full ${smoothEase} ${
                  isScrolled ? "bg-[#002d62]" : "bg-white"
                }`}
              />
            </Link>
          </motion.div>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/#contact"
          className={`hidden lg:block px-8 py-3 rounded-full text-[11px] font-bold uppercase shadow-2xl ${smoothEase} hover:scale-105 active:scale-95 ${
            isScrolled
              ? "bg-[#002d62] text-white shadow-[#002d62]/10 hover:bg-[#004291]"
              : "bg-white text-[#002d62] shadow-white/10 hover:bg-slate-50"
          }`}
        >
          CONTACT US
        </Link>
      </motion.div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavbarProps {
  navItems: { label: string; href: string }[];
  smoothEase: string;
}

export default function Navbar({ navItems, smoothEase }: NavbarProps) {
  return (
    <div className="flex items-center gap-16">
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
              className={`relative group text-[13.5px] font-extrabold tracking-wide flex flex-col items-center ${smoothEase} text-white`}
            >
              <span className="group-hover:translate-x-1 duration-300 whitespace-nowrap">
                {item.label}
              </span>

              {/* Underline Blending */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full ${smoothEase} bg-white`}
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
          className={`hidden lg:block px-8 py-3 rounded-full text-[12px] font-extrabold uppercase shadow-2xl ${smoothEase} hover:scale-105 active:scale-95 bg-white text-[#002d62] shadow-white/10 hover:bg-slate-50 whitespace-nowrap`}
        >
          CONTACT US
        </Link>
      </motion.div>
    </div>
  );
}

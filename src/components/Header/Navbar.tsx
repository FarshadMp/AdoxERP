"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavbarProps {
  navItems: { label: string; href: string }[];
  smoothEase: string;
  isScrolled: boolean;
}

export default function Navbar({
  navItems,
  smoothEase,
  isScrolled,
}: NavbarProps) {
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
              className={`relative group text-[13.5px] font-bold tracking-wide flex flex-col items-center ${smoothEase} ${
                isScrolled
                  ? "text-gray-800 hover:text-black"
                  : "text-white/90 hover:text-white"
              } pb-1.5 overflow-hidden`}
            >
              <span className="relative flex flex-col overflow-hidden">
                <span className="inline-block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full whitespace-nowrap">
                  {item.label}
                </span>
                <span
                  className={`absolute left-0 top-full inline-block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full whitespace-nowrap ${isScrolled ? "text-black" : "text-white"} font-black`}
                >
                  {item.label}
                </span>
              </span>

              {/* Sophisticated Underline - Expanding from center */}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0693FB] to-transparent group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out" />
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/#platform"
            className={`hidden lg:flex items-center justify-center px-5 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 whitespace-nowrap backdrop-blur-md ${
              isScrolled
                ? "border border-gray-300 hover:border-gray-400 hover:bg-gray-100 text-gray-800 hover:text-black"
                : "border border-white/10 hover:border-white/30 hover:bg-white/5 text-white/90 hover:text-white"
            }`}
          >
            View Platform
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/#contact"
            style={{ backgroundColor: "#0693FB" }}
            className="group relative hidden lg:flex items-center justify-center px-5 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 text-white shadow-lg shadow-blue-500/25 whitespace-nowrap overflow-hidden"
          >
            {/* Creative Shine Effect */}
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-r ${isScrolled ? "from-transparent via-white/40 to-transparent" : "from-transparent via-white/20 to-transparent"} -translate-x-full group-hover:animate-[shine_0.8s_ease-out] pointer-events-none`}
            />
            <span className="relative z-10">Request Demo</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

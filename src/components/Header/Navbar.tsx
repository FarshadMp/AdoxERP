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
    <nav className="flex items-center gap-6">
      {navItems.map((item, index) => (
        <motion.div
          key={item.label}
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
            className={`px-2 py-1 text-sm font-medium rounded-sm transition-all duration-300 ${
              isScrolled
                ? "text-white/90 hover:bg-white hover:text-black"
                : "text-white/80 hover:bg-white hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}

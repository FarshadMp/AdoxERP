"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
  isScrolled: boolean;
  smoothEase: string;
  onLogoClick: () => void;
}

export default function Logo({
  isScrolled,
  smoothEase,
  onLogoClick,
}: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center"
    >
      <Link href="/" onClick={onLogoClick}>
        <Image
          src="/img/logo.png"
          alt="B-Freight Logo"
          width={200}
          height={80}
          className={`w-auto object-contain ${smoothEase} ${
            isScrolled
              ? "h-12 md:h-14 brightness-100"
              : "h-14 md:h-16 brightness-110"
          }`}
        />
      </Link>
    </motion.div>
  );
}

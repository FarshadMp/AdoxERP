import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
      <Link
        href="/"
        onClick={onLogoClick}
        className="flex items-center gap-3 group"
      >
        <div className="relative flex items-center justify-center">
          <div
            className={`absolute inset-0 blur-2xl rounded-full transition-all duration-700 ${isScrolled ? "scale-75" : "scale-100 opacity-60"}`}
            style={{ background: "rgba(6, 147, 251, 0.25)" }}
          />
          <div
            className={`relative z-10 transition-all duration-500 group-hover:scale-105 ${isScrolled ? "w-32" : "w-32"}`}
          >
            <Image
              src={isScrolled ? "/img/logo-dark.png" : "/img/logo.png"}
              alt="AdoxERP Logo"
              width={200}
              height={60}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

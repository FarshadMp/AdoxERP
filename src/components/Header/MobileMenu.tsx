"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden fixed inset-0 w-full h-screen bg-[#002d62] z-[150] flex flex-col justify-center px-10"
        >
          {/* Simple Decorative Elements (No heavy blurs) */}
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
          </div>

          <nav className="relative z-10 flex flex-col gap-4">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.4em] mb-4">
              Navigation
            </span>

            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="text-3xl font-extrabold text-white uppercase"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <div className="pt-8 mt-3 border-t border-white/10 flex flex-col gap-6">
              <Link
                href="/#contact"
                className="w-full bg-white text-[#002d62] py-5 rounded-xl text-center text-sm font-bold uppercase tracking-widest active:scale-95 transition-transform"
                onClick={onClose}
              >
                Request Demo
              </Link>

              <div className="flex justify-between items-end opacity-40">
                <span className="text-white text-[12px]">[EMAIL_ADDRESS]</span>
                <span className="text-white text-[12px]">IntelliERP</span>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

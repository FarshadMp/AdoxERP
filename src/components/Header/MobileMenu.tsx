"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { moduleSections, industrySections } from "./MegaMenu";

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
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden fixed inset-0 w-full h-screen bg-[#002d62] z-[150] flex flex-col overflow-y-auto px-6 py-20"
        >
          {/* Simple Decorative Elements */}
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
          </div>

          <nav className="relative z-10 flex flex-col gap-2">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.4em] mb-6 px-4">
              Navigation
            </span>

            {navItems.map((item, i) => {
              const hasSubmenu = item.label === "Modules" || item.label === "Industries";
              const isExpanded = expandedMenu === item.label;
              const sections = item.label === "Modules" ? moduleSections : industrySections;

              return (
                <div key={item.label} className="flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-center justify-between"
                  >
                    {hasSubmenu ? (
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className="flex-1 text-left py-4 px-4 text-2xl font-extrabold text-white uppercase flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex-1 py-4 px-4 text-2xl font-extrabold text-white uppercase"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {hasSubmenu && isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white/5 rounded-2xl mx-2 mb-4"
                      >
                        <div className="p-4 flex flex-col gap-6">
                          {sections.map((section) => (
                            <div key={section.title} className="flex flex-col gap-3">
                              <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
                                {section.title}
                              </span>
                              <div className="flex flex-col gap-4">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={onClose}
                                    className="group flex flex-col gap-1"
                                  >
                                    <span className="text-white font-bold text-base group-active:text-primary transition-colors">
                                      {subItem.name}
                                    </span>
                                    <span className="text-white/50 text-[12px] leading-tight">
                                      {subItem.sub}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col gap-6 px-4">
              <Link
                href="/free-demo"
                className="w-full bg-white text-[#002d62] py-5 rounded-xl text-center text-sm font-bold uppercase tracking-widest active:scale-95 transition-transform shadow-xl shadow-black/20"
                onClick={onClose}
              >
                Request Demo
              </Link>

              <div className="flex justify-between items-end opacity-40 pb-10">
                <span className="text-white text-[12px]">info@adoxerp.com</span>
                <span className="text-white text-[12px]">AdoxERP</span>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/#gallery" },
    { label: "News", href: "/#news" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Hide header when scrolling down, show when scrolling up
      // Don't hide if mobile menu is open
      if (!isMobileMenuOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#fef4e0]/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/img/logo.png"
              alt="Anarc Builders & Developers Logo"
              width={120}
              height={40}
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`hover:text-[#c9952f] uppercase text-sm font-normal tracking-wider transition-colors ${
                isScrolled || isMobileMenuOpen
                  ? "text-[var(--foreground)]"
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:flex bg-[#c9952f] hover:bg-[#b08027] text-white h-10 px-6 rounded-lg text-xs font-normal transition-all items-center justify-center group"
          >
            <span className="text-lg leading-none transform transition-all duration-300 overflow-hidden flex justify-center items-center w-4 opacity-100 mr-2 group-hover:w-0 group-hover:opacity-0 group-hover:mr-0 group-hover:-translate-x-2">
              ↗
            </span>
            CONTACT
            <span className="text-lg leading-none transform transition-all duration-300 overflow-hidden flex justify-center items-center w-0 opacity-0 ml-0 translate-x-2 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 group-hover:translate-x-0">
              ↗
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50 p-2 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
              } ${isScrolled || isMobileMenuOpen ? "bg-[var(--foreground)]" : "bg-white"}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              } ${isScrolled || isMobileMenuOpen ? "bg-[var(--foreground)]" : "bg-white"}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              } ${isScrolled || isMobileMenuOpen ? "bg-[var(--foreground)]" : "bg-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#fef4e0] shadow-xl overflow-hidden flex flex-col pt-8 px-6 pb-24"
          >
            <nav className="flex flex-col gap-6 items-start">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-[var(--foreground)] text-base md:text-2xl uppercase font-normal tracking-wide transition-colors hover:text-[var(--secondary)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.1 }}
                className="w-full pt-8 border-t border-[var(--foreground)]/10"
              >
                <Link
                  href="#contact"
                  className="flex bg-[#c9952f] hover:bg-[#b08027] text-white h-10 px-6 rounded-lg text-xs font-normal transition-all items-center justify-center group w-fit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg leading-none transform transition-all duration-300 overflow-hidden flex justify-center items-center w-4 opacity-100 mr-2 group-hover:w-0 group-hover:opacity-0 group-hover:mr-0 group-hover:-translate-x-2">
                    ↗
                  </span>
                  CONTACT
                  <span className="text-lg leading-none transform transition-all duration-300 overflow-hidden flex justify-center items-center w-0 opacity-0 ml-0 translate-x-2 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 group-hover:translate-x-0">
                    ↗
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

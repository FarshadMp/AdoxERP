"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Smoother threshold for background change
      setIsScrolled(currentScrollY > 40);

      // Visibility logic
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Product", href: "/#proposition" },
    { label: "Modules", href: "/#modules" },
    { label: "Proof", href: "/#traction" },
    { label: "Contact", href: "/#contact" },
  ];

  const smoothEase = "transition-all duration-700 ease-[0.16,1,0.3,1]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${smoothEase} ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent border-b border-white/0"
      }`}
    >
      {/* Main Header Container */}

      <div
        className={`px-6 md:px-14 lg:px-12 py-4 flex items-center justify-between relative z-200 ${smoothEase}`}
      >
        <div className="shrink-0">
          <Logo
            isScrolled={isScrolled}
            smoothEase={smoothEase}
            onLogoClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <Navbar
            navItems={navItems}
            smoothEase={smoothEase}
            isScrolled={isScrolled}
          />
        </div>

        <div className="flex lg:hidden">
          <BurgerButton
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isScrolled={isScrolled}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import TopBar from "./TopBar";
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
    { label: "Home", href: "/", active: true },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Clients", href: "/#clients" },
    { label: "Location", href: "/#location" },
  ];

  const smoothEase = "transition-all duration-700 ease-[0.16,1,0.3,1]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${smoothEase} ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl border-b border-slate-200/50 py-2"
          : "bg-transparent border-b border-white/0 pb-2 md:pb-4"
      }`}
    >
      <TopBar isScrolled={isScrolled} smoothEase={smoothEase} />

      {/* Main Header Container */}
      <div
        className={`px-6 md:px-12 py-2 flex items-center justify-between relative z-[200] ${smoothEase}`}
      >
        <Logo
          isScrolled={isScrolled}
          smoothEase={smoothEase}
          onLogoClick={() => setIsMobileMenuOpen(false)}
        />

        <div className="flex items-center gap-10">
          <Navbar
            navItems={navItems}
            isScrolled={isScrolled}
            smoothEase={smoothEase}
          />

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

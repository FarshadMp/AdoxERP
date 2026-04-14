"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import { Globe } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

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
    { label: "Product", href: "/product" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Resources", href: "/#resources" },
    { label: "Company", href: "/about" },
    { label: "Pricing", href: "/#pricing" },
  ];

  const smoothEase = "transition-all duration-500 ease-[0.16,1,0.3,1]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b ${
        isScrolled ? "border-gray-100 bg-white shadow-sm" : "border-white/10 bg-transparent"
      } ${smoothEase} ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } py-2.5`}
    >
      <div className="px-6 md:px-14 lg:px-12 flex items-center relative">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Logo
            isScrolled={isScrolled}
            smoothEase={smoothEase}
            onLogoClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Center: Navbar */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Navbar
            navItems={navItems}
            smoothEase={smoothEase}
            isScrolled={isScrolled}
          />
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/#demo"
              className="px-5 py-2.5 bg-primary hover:opacity-90 text-white text-sm rounded-lg transition-all"
            >
              Book a demo
            </Link>
            <Link
              href="/#login"
              className={`px-5 py-2.5 text-sm rounded-lg border transition-all font-medium ${
                isScrolled 
                  ? "bg-gray-50 hover:bg-gray-100 text-primary-dark border-gray-200" 
                  : "bg-white/5 hover:bg-white/10 text-white border-white/10"
              }`}
            >
              Log in
            </Link>
            <button className={`${isScrolled ? "text-primary-dark" : "text-white"} transition-colors ml-2`}>
              <Globe className="w-5 h-5" />
            </button>
          </div>

          <div className="flex lg:hidden">
            <BurgerButton
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              isScrolled={isScrolled}
            />
          </div>
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

"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Pages that have a white background and need a dark header from the start
  const isWhitePage =
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/contact" ||
    pathname === "/about";
  const forceScrolledStyle = isScrolled || isWhitePage;

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
      className={`fixed top-0 left-0 right-0 z-[200] flex justify-center ${smoothEase} ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isScrolled && !isMobileMenuOpen ? "pt-4" : "pt-0"}`}
    >
      <div
        className={`flex items-center w-full transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isMobileMenuOpen
            ? "max-w-full bg-transparent py-5 px-6 md:px-14 shadow-none pointer-events-auto"
            : isScrolled
              ? "max-w-[1200px] mx-4 bg-white/100 backdrop-blur-xl rounded-full py-2.5 px-6 md:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              : isWhitePage
                ? "max-w-full bg-white py-4 px-6 md:px-14 border-b border-gray-100"
                : "max-w-full bg-transparent py-5 px-6 md:px-14"
        }`}
      >
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Logo
            isScrolled={forceScrolledStyle && !isMobileMenuOpen}
            smoothEase={smoothEase}
            onLogoClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Center: Navbar */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Navbar
            navItems={navItems}
            smoothEase={smoothEase}
            isScrolled={forceScrolledStyle}
          />
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#login"
              className={`px-6 py-2.5 text-sm rounded-full transition-all font-semibold ${
                forceScrolledStyle
                  ? "text-primary-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Log in
            </Link>
            <Link
              href="/#demo"
              className="px-6 py-2.5 bg-primary hover:bg-secondary text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-primary/20"
            >
              Book a demo
            </Link>
            <button
              className={`${
                forceScrolledStyle ? "text-primary-dark" : "text-white"
              } transition-colors ml-1 p-2 hover:bg-gray-100/10 rounded-full`}
            >
              <Globe className="w-5 h-5" />
            </button>
          </div>

          <div className="flex lg:hidden">
            <BurgerButton
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              isScrolled={forceScrolledStyle}
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

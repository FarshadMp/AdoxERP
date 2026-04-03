"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer id="contact" className="bg-white text-black py-20 px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Logo Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 border-b border-slate-100 pb-12">
          <div className="w-48 md:w-64">
            <Image
              src="/img/logo.png"
              alt="Business Way Freight Cargo LLC"
              width={240}
              height={80}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex gap-4">
             {[
              { icon: <Facebook className="w-5 h-5" />, href: "#" },
              { icon: <Twitter className="w-5 h-5" />, href: "#" },
              { icon: <Linkedin className="w-5 h-5" />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content Grid - Updated with User's specific services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm uppercase font-bold tracking-widest text-[var(--primary)]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3 text-sm font-medium">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Location", href: "/#location" },
                { label: "Clients", href: "/#clients" },
                { label: "Contact Us", href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-500 hover:text-black transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Our Services - Updated List */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm uppercase font-bold tracking-widest text-[var(--primary)]">
              Our Services
            </h4>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-500">
              {[
                "Shipping",
                "Air Freight",
                "Land Transportation",
                "Customs Clearing",
                "International Moving",
                "Business way Freight",
              ].map((item) => (
                <span key={item} className="hover:text-black cursor-default transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm uppercase font-bold tracking-widest text-[var(--primary)]">
              Get In Touch
            </h4>
            <div className="space-y-6 text-sm font-medium text-slate-500">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                <p className="leading-relaxed">
                  Office No. 1013, 1st Floor, <br />
                  Cargo Mega Terminal Building, <br />
                  P.O Box. 57123, <br />
                  Cargo Village, Dubai – U.A.E
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                <a href="tel:+97142834222" className="hover:text-black transition-colors">
                  Call : +9714 283 4 222
                </a>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                <a href="mailto:mansoor@bfreight.com" className="hover:text-black transition-colors">
                  E-mail : mansoor@bfreight.com
                </a>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm uppercase font-bold tracking-widest text-[var(--primary)]">
              Branches
            </h4>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-500">
              {["Ajman", "Sharjah,", "Dubai", "Dubai Flower Centre"].map((item) => (
                <span key={item} className="hover:text-black cursor-default transition-colors">{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] text-slate-400">
          <p>
            © {currentYear} <span className="text-[var(--primary)]">bfreight.com</span>. All rights reserved
          </p>
          <div className="flex items-center gap-8">
            <a 
              href="https://www.adoxsolutions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-[var(--primary)] transition-colors"
            >
              Designed by www.adoxsolutions.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

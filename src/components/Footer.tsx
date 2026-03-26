"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#521212] text-white/90 py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-10 md:mb-32">
          {/* Contact Column */}
          <div className="flex flex-col gap-4 md:gap-8">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
              Contact
            </span>
            <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed">
              <p>
                Kalloor Building, Areacode Road, <br />
                Mukkam, Calicut, <br />
                Kerala, India-673602
              </p>
              <div className="flex flex-col gap-1 mt-4">
                <a
                  href="mailto:info@anarcdevelopers.com"
                  className="hover:text-[var(--secondary)] transition-colors"
                >
                  info@anarcdevelopers.com
                </a>
                <a
                  href="tel:+918592061010"
                  className="hover:text-[var(--secondary)] transition-colors"
                >
                  +91 8592061010
                </a>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/company-profile.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#521212] transition-all duration-300 group w-fit"
              >
                Company Profile
                <Download className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="flex flex-col gap-4 md:gap-8">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
              Sitemap
            </span>
            <nav className="flex flex-col gap-3 text-sm md:text-base">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-[var(--secondary)] transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col gap-4 md:gap-8">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
              Socials
            </span>
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <a
                href="https://www.instagram.com/anarc_developers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--secondary)] transition-colors w-fit"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-[var(--secondary)] transition-colors w-fit"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/anarc-builders/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--secondary)] transition-colors w-fit"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Updates Column */}
          <div className="flex flex-col gap-4 md:gap-8">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
              Updates
            </span>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-lg leading-tight">
                Get occasional updates on <br className="hidden lg:block" /> all
                things Anarc.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email here"
                  className="w-full bg-white/5 border-b border-white/20 py-4 px-4 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--secondary)] transition-all"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-white/30 leading-relaxed max-w-[240px]">
                When you sign up for our newsletter you agree to our{" "}
                <Link href="/privacy-policy" className="underline">
                  privacy policy
                </Link>{" "}
                and will receive commercial emails.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 pt-10 border-t border-white/10 text-xs md:text-sm text-white/50 tracking-wide">
          <p>© Anarc Developers {new Date().getFullYear()}</p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
            <p>
              Website by{" "}
              <a
                href="https://adoxsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Adoxsolutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

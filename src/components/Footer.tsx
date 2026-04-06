"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#011c4d] text-white pt-18 md:pt-22 pb-8 px-6 md:px-14 lg:px-20 overflow-hidden relative border-t border-white/5"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00b8fe] opacity-[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-10 md:mb-20">
          {/* Brand Column - Logo & Recognitions */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-8 md:space-y-12">
              <Link
                href="/"
                className="inline-block transition-transform duration-300 hover:scale-105"
              >
                <div className="w-56 filter brightness-0 invert opacity-90">
                  <Image
                    src="/img/logo.png"
                    alt="Business Way Freight Cargo LLC"
                    width={240}
                    height={80}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </Link>

              {/* Gartner-style Badge Placeholder/Brand Statement */}
              <div className="pt-10 space-y-4 border-t border-white/5">
                <p className="text-white text-sm md:text-xs font-light mb-8">
                  2025 Global Market Guide <br />
                  Freight Management <br />
                  Featured Provider
                </p>
                <div className="space-y-1.5 pt-1">
                  <a
                    href="tel:+97142834222"
                    className="text-white hover:text-[#00b8fe] text-[14px] font-light transition-colors block"
                  >
                    Call : +9714 283 4 222
                  </a>
                  <a
                    href="mailto:mansoor@bfreight.com"
                    className="text-white hover:text-[#00b8fe] text-[14px] font-light transition-colors block"
                  >
                    E-mail : mansoor@bfreight.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid - Large Typo */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 md:gap-12">
            {/* Navigation */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
                Company
              </h4>
              <nav className="flex flex-col gap-5">
                {[
                  { label: "Homepage", href: "/" },
                  { label: "About Us", href: "/#about" },
                  { label: "Location", href: "/#location" },
                  { label: "Our Clients", href: "/#clients" },
                  { label: "Contact", href: "/#contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white hover:text-[#00b8fe] text-lg font-light transition-all duration-300 transform hover:translate-x-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
                Services
              </h4>
              <nav className="flex flex-col gap-5">
                {[
                  "Air Freight",
                  "Sea Freight",
                  "Land Transport",
                  "Warehousing",
                  "Project Cargo",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-white hover:text-[#00b8fe] text-lg font-light cursor-default transition-all duration-300 transform hover:translate-x-2 block"
                  >
                    {item}
                  </span>
                ))}
              </nav>
            </div>
          </div>

          {/* Reach Us Column - CTA Style */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
                Reach Us
              </h4>
              <h3 className="text-2xl md:text-3xl font-light leading-tight text-white">
                Ready to streamline your <br />
                global logistics?
              </h3>
              <p className="text-white/40 text-lg font-light">
                Connect with our experts today.
              </p>
            </div>

            {/* Social Icons - Filled Style */}
            <div className="flex gap-6 items-center pt-2">
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.3 2.1v5.9h-2.8V9h2.8v1.1c.3-1 1.6-1.6 2.6-1.6 1.8 0 3.2 1.4 3.2 3.2v5.8h-2.8M7.3 19V9H4.5v10h2.8m-.2-12c0-.8-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-white/60 hover:text-[#00b8fe] transition-all duration-500 transform hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Details Small */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <p className="text-white text-[11px] font-light leading-relaxed">
                Office No. 1013 <br />
                1st Floor, Cargo Mega Terminal Building <br />
                P.O Box. 57123 <br />
                Cargo Village, Dubai – U.A.E
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimalist */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <div className="text-white/20 text-[12px] font-normal">
              Copyright Business Way Freight Cargo LLC © {currentYear} All
              Rights Reserved
            </div>
          </div>

          <div className="flex items-center gap-12">
            <a
              href="https://www.adoxsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-[#00b8fe] text-[12px] font-normal transition-all duration-300 flex items-center gap-2 group"
            >
              Made by{" "}
              <span className="text-white/40 font-normal">Adoxsolution</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

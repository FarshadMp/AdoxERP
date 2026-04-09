"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-[#020817] text-white overflow-hidden"
    >
      {/* Background Image/Gradient from theme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero/gradient.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#020817]/10 via-[#020817]/30 to-[#020817]" />
      </div>

      <div className="relative z-10 px-6 md:px-14 lg:px-20">
        {/* Final CTA Section */}
        <div className="py-10 md:py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 max-w-7xl mx-auto">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
                Start Your Digital Transformation
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                See how IntelliERP can simplify operations and enable smarter
                decision-making.
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 shrink-0 w-full md:w-auto">
              <Link
                href="/#demo"
                className="flex-1 md:flex-none px-4 sm:px-8 py-4 rounded-xl bg-white text-[#0693FB] font-bold text-[13px] sm:text-sm hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-center whitespace-nowrap"
              >
                Request Demo
              </Link>
              <Link
                href="/#contact"
                className="flex-1 md:flex-none px-4 sm:px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 font-bold text-[13px] sm:text-sm transition-all duration-300 text-center whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Links & Grid Section */}
        <div className="py-10 md:py-14 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-4 space-y-6">
              <Link
                href="/"
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src="/img/logo.png"
                  alt="IntelliERP Logo"
                  width={180}
                  height={60}
                  className="filter brightness-0 invert opacity-90 h-auto"
                />
              </Link>
              <p className="text-white text-sm leading-relaxed max-w-xs font-light">
                All-in-one platform for your business: manage Finance, CRM,
                Inventory, and Field Operations seamlessly in one place.
              </p>

              {/* GDPR Badge */}
              <div className="inline-flex flex-col p-3 rounded-xl bg-white/5 border border-white/10 max-w-[160px]">
                <div className="text-[10px] font-bold tracking-widest text-[#0693FB] uppercase mb-2">
                  Security Standard
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0693FB]/20 flex items-center justify-center text-[#0693FB]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-xs font-bold font-mono tracking-tighter">
                    GDPR COMPLIANT
                  </span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="col-span-1 lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0693FB]">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-white font-light">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/graduate"
                    className="hover:text-white transition-colors"
                  >
                    Graduate Programme
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0693FB]">
                Apps
              </h4>
              <ul className="space-y-4 text-sm text-white font-light">
                <li>
                  <span className="cursor-default">Sales & CRM</span>
                </li>
                <li>
                  <span className="cursor-default">Inventory Mgmt</span>
                </li>
                <li>
                  <span className="cursor-default">Field Service</span>
                </li>
                <li>
                  <span className="cursor-default">HR & Payroll</span>
                </li>
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0693FB]">
                Resources
              </h4>
              <ul className="space-y-4 text-sm text-white font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0693FB]">
                Follow Us
              </h4>
              <ul className="space-y-4 text-sm text-white font-light">
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Whatsapp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white">
          <div>
            © Copyright {currentYear}, All Rights Reserved by IntelliERP
          </div>
          <div className="flex items-center gap-2 hover:text-[#0693FB] transition-colors cursor-pointer group">
            Made by{" "}
            <span className="text-white/50 group-hover:text-white transition-colors">
              ADOX SOLUTIONS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

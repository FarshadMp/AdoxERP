"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const seoLinks = [
    { title: "ERP Software Saudi Arabia", href: "/#erp" },
    { title: "AI ERP System", href: "/#ai" },
    { title: "ZATCA E-Invoicing", href: "/#zatca" },
    { title: "Cloud ERP for SMEs KSA", href: "/#cloud" },
    { title: "Manufacturing ERP", href: "/#manufacturing" },
    { title: "HR Software Riyadh", href: "/#hr" },
    { title: "Inventory Management Jeddah", href: "/#inventory" },
    { title: "Contact Us — Dammam", href: "/#contact" },
  ];

  return (
    <footer id="contact" className="relative w-full px-2 md:px-4 bg-white">
      <div className="relative w-full overflow-hidden rounded-t-[1rem] md:rounded-t-[3rem]">
        {/* Full Background Image - Now contained within rounded wrapper */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/footer-bg.png"
            alt="Footer Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Top CTA Section - Now consistent on top of full bg */}
        <div className="relative z-10 w-full py-10 md:py-16 px-6 md:px-20 flex flex-col items-start max-w-[1400px] mx-auto">
          <div className="relative z-10 space-y-5">
            <h2 className="text-3xl md:text-[3.5rem] font-medium tracking-tight text-white leading-[1.1]">
              Let’s Talk About What Your Business Needs
            </h2>
            <p className="text-white/80 text-base md:text-lg font-normal leading-relaxed">
              We work with businesses of all sizes across Riyadh, Jeddah,
              Dammam, and the wider GCC region — and we take the time to
              understand what you actually need before recommending anything.
              Reach out today and one of our local consultants will get back to
              you within one business day.
            </p>
            <div className="pt-2 md:pt-4">
              <Link
                href="/#consultation"
                className="px-5 py-4 md:py-3 bg-white/5 hover:bg-white hover:text-black text-white text-sm rounded-lg border border-white/10 transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 backdrop-blur-sm hover:shadow-white/5 w-fit"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Rounded Card - Original Content in New UI */}
        <div className="relative z-10 px-4 md:px-8 pb-8 max-w-[1500px] mx-auto">
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(2.8125rem)",
              WebkitBackdropFilter: "blur(2.8125rem)",
            }}
            className="rounded-[1em] md:rounded-[2rem] p-6 md:p-12 text-white border border-white/20 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle Glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 relative z-10">
              {/* Left Section: Logo and Interaction Cards */}
              <div className="lg:col-span-6 space-y-4">
                <Link href="/" className="inline-block">
                  <Image
                    src="/img/logo.png"
                    alt="AdoxERP Logo"
                    width={160}
                    height={50}
                    className="brightness-0 invert w-[110px] md:w-[160px] h-auto"
                  />
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/contact"
                    className="group relative bg-white/5 hover:bg-white border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 flex flex-col justify-end min-h-[140px] md:min-h-[180px]"
                  >
                    <div className="absolute top-5 right-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-white/40 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                      <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-white font-bold text-2xl leading-tight group-hover:text-primary-dark transition-colors">
                        Send Us a Message
                      </p>
                      <p className="text-white/40 text-sm group-hover:text-primary-dark/60 transition-colors">
                        Quick Response Team
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="tel:+966500000000"
                    className="group relative bg-white/5 hover:bg-white border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 flex flex-col justify-end min-h-[140px] md:min-h-[180px]"
                  >
                    <div className="absolute top-5 right-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-white/40 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                      <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-white font-bold text-2xl leading-tight group-hover:text-primary-dark transition-colors">
                        Contact Sales
                      </p>
                      <p className="text-white/40 text-sm group-hover:text-primary-dark/60 transition-colors">
                        Custom Solutions
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Section: Old Content Links */}
              <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:pl-8 lg:pt-0">
                <div className="space-y-6">
                  <h4 className="text-xs font-bold text-white/70">Solutions</h4>
                  <ul className="space-y-4 font-semibold text-white/90 text-sm">
                    {seoLinks.slice(0, 4).map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="hover:text-white transition-colors"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-bold text-white/70">Company</h4>
                  <ul className="space-y-4 font-semibold text-white/90 text-sm">
                    <li>
                      <Link
                        href="/about"
                        className="hover:text-white transition-colors"
                      >
                        About Us
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
                    {seoLinks.slice(4, 6).map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="hover:text-white transition-colors"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-bold text-white/80">Social</h4>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="#"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-sm">LinkedIn</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-sm">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-sm">WhatsApp</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Old Copyright & Legal */}
            <div className="relative z-10 mt-10 pt-8 border-t border-white/15 md:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[12px] text-white/90 font-medium">
                <span>© {currentYear} AdoxERP. All Rights Reserved.</span>
                <div className="flex items-center gap-6">
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[12px] group">
                <span className="text-white/80">Made by</span>
                <span className="font-bold text-white/80 group-hover:text-white transition-colors uppercase">
                  ADOX SOLUTIONS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

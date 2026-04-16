"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
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
    <footer
      id="contact"
      className="relative bg-white text-primary-dark overflow-hidden border-t border-slate-100"
    >
      <div className="relative z-10 px-6 md:px-14 lg:px-20">
        {/* Let's Talk Section */}
        <div className="py-14 md:py-20 border-b border-slate-100">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-[2.5rem] font-medium tracking-tight text-primary-dark mb-4 leading-[1.1]">
                Let’s Talk About What Your Business Needs
              </h2>
              <p className="text-secondary-dark text-lg leading-relaxed mb-10 font-normal">
                We work with businesses of all sizes across Riyadh, Jeddah,
                Dammam, and the wider GCC region — and we take the time to
                understand what you actually need before recommending anything.
                If you are exploring ERP options, planning a digital
                transformation, or looking for a smarter way to manage your
                operations with AI, we would love to have a conversation. Reach
                out today and one of our local consultants will get back to you
                within one business day.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/#consultation"
                  className="w-full sm:w-auto px-5 py-4 md:py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-secondary transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-5 py-4 md:py-3 rounded-lg border border-slate-200 text-primary-dark font-bold text-base hover:bg-slate-50 transition-all duration-300 text-center"
                >
                  Send Us a Message
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[320px] space-y-8 bg-slate-50 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@adoxerp.com"
                      className="text-primary-dark font-bold hover:text-primary transition-colors"
                    >
                      info@adoxerp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+966500000000"
                      className="text-primary-dark font-bold hover:text-primary transition-colors"
                    >
                      +966 [Phone Number]
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Location
                    </div>
                    <div className="text-primary-dark font-bold">
                      Riyadh, Saudi Arabia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Hours
                    </div>
                    <div className="text-primary-dark font-bold text-sm">
                      Sunday – Thursday
                      <br />
                      8:00 AM – 5:00 PM AST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links & Grid Section */}
        <div className="py-14 md:py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-4 space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/img/logo-dark.png"
                  alt="AdoxERP Logo"
                  width={180}
                  height={60}
                  className="h-auto"
                />
              </Link>
              <p className="text-secondary-dark text-sm leading-relaxed max-w-xs font-normal">
                All-in-one platform for your business: manage Finance, CRM,
                Inventory, and Field Operations seamlessly in one place.
              </p>
            </div>

            {/* Links Columns */}
            <div className="col-span-2 lg:col-span-4 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                Solutions
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-secondary-dark font-medium">
                {seoLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-secondary-dark font-medium">
                <li>
                  <Link
                    href=""
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                Connect
              </h4>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-secondary-dark font-medium leading-relaxed">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div>© {currentYear} AdoxERP. All Rights Reserved.</div>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 group transition-colors">
            Made by{" "}
            <span className="font-bold text-primary-dark group-hover:text-primary transition-colors">
              ADOX SOLUTIONS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

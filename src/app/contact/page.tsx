"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <InnerHero
        title="Get in Touch"
        subtitle="Contact Us"
        image="/img/hero/contact-ban.png" // Placeholder image, adjust if necessary
      />

      <section className="py-20 md:py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-light text-[#c9952f] tracking-tight">
                How can we help you?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md font-light">
                Whether you want to find out more about a project or just want a
                helping hand, you can always get us online or over the phone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
              {/* Address */}
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#c9952f]/10 shadow-sm border border-gray-100">
                  <MapPin className="w-6 h-6 text-[#c9952f]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-[#c9952f] transition-colors">
                    Anarc Builders & Developers PVT. LTD.
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Areacode Road, Mukkam, Calicut,
                    <br />
                    Kerala, India-673602
                  </p>
                </div>
              </div>

              {/* Mail */}
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#c9952f]/10 shadow-sm border border-gray-100">
                  <Mail className="w-6 h-6 text-[#c9952f]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-[#c9952f] transition-colors">
                    Mail Us
                  </h3>
                  <a
                    href="mailto:info@anarcdevelopers.com"
                    className="text-gray-500 hover:text-[#c9952f] transition-colors font-light"
                  >
                    info@anarcdevelopers.com
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#c9952f]/10 shadow-sm border border-gray-100">
                  <Phone className="w-6 h-6 text-[#c9952f]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-[#c9952f] transition-colors">
                    Call Us
                  </h3>
                  <a
                    href="tel:+918592061010"
                    className="text-gray-500 hover:text-[#c9952f] transition-colors font-light"
                  >
                    +91 8592061010
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 md:p-10 border border-gray-200 rounded-none"
          >
            <h2 className="text-2xl md:text-4xl font-light text-[#c9952f] mb-4 md:mb-8 tracking-tight">
              Feedback
            </h2>
            <form className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-white border border-gray-300 rounded-none py-3 px-4 text-gray-950 placeholder:text-gray-400 focus:outline-none focus:border-[#c9952f] transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white border border-gray-300 rounded-none py-3 px-4 text-gray-950 placeholder:text-gray-400 focus:outline-none focus:border-[#c9952f] transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="tel"
                  placeholder="Number"
                  className="w-full bg-white border border-gray-300 rounded-none py-3 px-4 text-gray-950 placeholder:text-gray-400 focus:outline-none focus:border-[#c9952f] transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-none py-3 px-4 text-gray-950 placeholder:text-gray-400 focus:outline-none focus:border-[#c9952f] transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-[#c9952f] text-white py-4 px-10 rounded-none text-sm font-semibold uppercase tracking-widest hover:bg-[#b07d24] transition-all"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

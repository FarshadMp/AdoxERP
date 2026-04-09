"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  MessageCircle,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION (MATCHES ABOUT PAGE STYLE) --- */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-22 overflow-hidden bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold flex items-center gap-2 border border-[#0693FB]/20"
          >
            <span className="text-[#0693FB]">✦</span>Contact Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-primary-dark leading-tight tracking-tight mb-4"
          >
            Get in <span className="text-[#0693FB]">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-light text-base leading-relaxed max-w-2xl mx-auto font-semibold"
          >
            Have questions about IntelliERP? Our team is here to help you
            scaling your business operations with intelligent solutions.
          </motion.p>
        </div>

        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(6,147,251,0.05)_0%,_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(0,188,252,0.05)_0%,_transparent_50%)] pointer-events-none" />
      </section>

      {/* --- CONTACT CONTENT --- */}
      <section className="py-14 md:py-22">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-8 tracking-tight">
                  Connect with us
                </h2>
                <p className="text-[#475569] text-lg leading-relaxed mb-10">
                  Whether you're an SME looking to scale or a potential partner,
                  we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0693FB] group-hover:bg-[#0693FB] group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#0693FB] mb-1">
                      Email
                    </h4>
                    <p className="text-lg font-bold text-[#0F172A]">
                      info@intellierp.xyz
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0693FB] group-hover:bg-[#0693FB] group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#0693FB] mb-1">
                      Office
                    </h4>
                    <p className="text-lg font-bold text-[#0F172A]">
                      London, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0693FB] group-hover:bg-[#0693FB] group-hover:text-white transition-all duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#0693FB] mb-1">
                      Markets
                    </h4>
                    <p className="text-lg font-bold text-[#0F172A]">
                      UK, GCC & Emerging Markets
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[48px] border border-gray-100 shadow-2xl shadow-gray-200/50"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#475569] ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#0693FB] focus:bg-white transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#475569] ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#0693FB] focus:bg-white transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#475569] ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#0693FB] focus:bg-white transition-all outline-none"
                    placeholder="Product Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#475569] ml-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#0693FB] focus:bg-white transition-all outline-none resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-[#0693FB] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#0693FB]/30 transition-all duration-300 flex items-center justify-center gap-3 mt-4"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

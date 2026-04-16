import { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with AdoxERP. We work with businesses across Riyadh, Jeddah, Dammam, and the GCC region to provide AI-powered ERP solutions.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark leading-[1.1]">
                Let’s Talk About What Your <br /> Business Needs
              </h1>
              <p className="text-secondary-dark text-lg leading-relaxed font-normal max-w-2xl">
                We work with businesses of all sizes across Riyadh, Jeddah,
                Dammam, and the wider GCC region — and we take the time to
                understand what you actually need before recommending anything.
                If you are exploring ERP options, planning a digital
                transformation, or looking for a smarter way to manage your
                operations with AI, we would love to have a conversation. Reach
                out today and one of our local consultants will get back to you
                within one business day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/#consultation"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                className="w-full sm:w-auto px-8 py-4 border border-slate-200 text-primary-dark font-bold rounded-lg hover:bg-slate-50 transition-all duration-300 text-center"
              >
                Send Us a Message
              </button>
            </div>

            {/* Decorative background element */}
            <div className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* Right Info Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="relative z-10 space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                      Email
                    </div>
                    <a
                      href="mailto:info@adoxerp.com"
                      className="text-primary-dark text-xl font-bold hover:text-primary transition-colors"
                    >
                      info@adoxerp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                      Phone
                    </div>
                    <a
                      href="tel:+966500000000"
                      className="text-primary-dark text-xl font-bold hover:text-primary transition-colors"
                    >
                      +966 [Phone Number]
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                      Location
                    </div>
                    <div className="text-primary-dark text-xl font-bold">
                      Riyadh, Saudi Arabia
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/60">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                        Hours
                      </div>
                      <div className="text-primary-dark font-bold py-1">
                        Sunday – Thursday
                        <br />
                        <span className="text-lg">8:00 AM – 5:00 PM AST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card decorative Glow */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

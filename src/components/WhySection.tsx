"use client";

import { Rocket, ShieldCheck, Workflow, Cloud } from "lucide-react";

export default function WhySection() {
  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Faster onboarding and implementation",
      desc: "Get up and running in weeks, not months, with our streamlined setup process.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Reduced dependency on consultants",
      desc: "Our intuitive interface means you don't need a team of experts to manage your business.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Practical, real-world workflows",
      desc: "Built to match how SMEs actually operate, eliminating unnecessary complexity.",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Scalable SaaS architecture",
      desc: "Grow your business without worrying about infrastructure or maintenance.",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-22 bg-white overflow-hidden"
      id="why-us"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-15">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[13px] font-semibold mb-6"
          >
            Why IntelliERP
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight tracking-tight mb-6"
          >
            Built for SMEs — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0693FB] to-[#0470c2]">
              Not Adapted for Them
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-primary-light text-base max-w-md mx-auto"
          >
            Unlike traditional ERP systems, IntelliERP is designed specifically
            to meet the unique challenges of modern SMEs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={300 + i * 100}
              className="group p-6 md:p-7 rounded-3xl bg-gray-50 border border-black/5 hover:border-[#0693FB]/20 hover:bg-white hover:shadow-2xl hover:shadow-[#0693FB]/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0693FB]/10 text-[#0693FB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-primary-dark font-bold text-lg mb-3 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-primary-light leading-relaxed text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

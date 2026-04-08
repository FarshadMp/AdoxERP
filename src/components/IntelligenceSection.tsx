"use client";

import { Zap, BarChart3, Workflow } from "lucide-react";

export default function IntelligenceSection() {
  const points = [
    {
      title: "Connecting all business functions",
      icon: <Workflow className="w-5 h-5" />,
    },
    {
      title: "Providing real-time operational visibility",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: "Enabling AI-driven insights",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative py-14 md:py-22 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-14 lg:px-20 relative z-10 text-center">
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[13px] font-semibold mb-5"
        >
          Operational Intelligence
        </div>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight tracking-tighter mb-6"
        >
          From Transactions <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0693FB] to-[#0470c2]">
            to Decisions
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-primary-light text-base leading-relaxed mb-12 max-w-md mx-auto"
        >
          IntelliERP transforms ERP from a record-keeping system into a
          decision-making engine by:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {points.map((point, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={300 + i * 100}
              className="group p-6 rounded-3xl bg-white border border-black/5 hover:border-[#0693FB]/20 transition-all duration-500 hover:shadow-[#0693FB]/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0693FB]/10 text-[#0693FB] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                {point.icon}
              </div>
              <h3 className="text-primary-dark font-semibold text-sm leading-snug">
                {point.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

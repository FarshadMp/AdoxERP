"use client";

import { Sparkles, MessageSquare, Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AIAssistantSection() {
  const queries = [
    "“What are my top-selling products this month?”",
    "“Which customers have overdue payments?”",
    "“Which routes are underperforming?”",
  ];

  return (
    <section
      className="relative bg-[#020817] py-14 md:py-28 overflow-hidden"
      id="ai-assistant"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero/gradient.png"
          alt="AI Assistant Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#020817]/10 via-[#020817]/30 to-[#020817]" />
      </div>

      <div className="px-6 md:px-14 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[13px] font-bold mb-8 border border-white/20">
              <Sparkles className="w-4 h-4" /> AI Assistant (Key Differentiator)
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Ask Your <br />
              <span className="text-[#0693FB]">ERP Anything</span>
            </h2>

            <p className="text-white text-base font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              IntelliERP includes an embedded AI assistant that allows you to
              interact with your business data using natural language.
            </p>

            <div className="flex items-center gap-2 text-white/90 font-medium group cursor-pointer justify-center lg:justify-start">
              Get instant, actionable insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
              {/* Fake Search Bar */}
              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 mb-10 group-hover:border-white/20 transition-colors">
                <Search className="w-5 h-5 text-white/40" />
                <span className="text-white/30 text-sm font-light">
                  Ask IntelliERP...
                </span>
              </div>

              {/* Chat Bubble Simulation */}
              <div className="space-y-6">
                {queries.map((query, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white/80 text-[14.5px] leading-relaxed italic group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                      {query}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Detail */}
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-white tracking-widest uppercase">
                <span>AI Processing Center</span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0693FB] animate-pulse" />
                  Live Sync
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

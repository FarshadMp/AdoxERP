"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageSquare,
  AlertTriangle,
  TrendingUp,
  UserCheck,
  FileText,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AIIntegration() {
  const aiFeatures = [
    {
      title: "AI Business Chatbot",
      description:
        "Ask your ERP a question in plain Arabic or English and get an instant, intelligent answer. ‘What were our top-selling products in Riyadh last quarter?’ or ‘Which invoices are overdue this week?’ — the AdoxERP AI assistant gives you real answers from your real business data, without needing to run a single report manually.",
      icon: <MessageSquare className="w-6 h-6" />,
      delay: 0.1,
    },
    {
      title: "Anomaly Detection & Alerts",
      description:
        "AdoxERP’s AI engine continuously monitors your financial transactions, inventory movements, and operational data. The moment something looks out of the ordinary — a duplicate payment, an unusual stock drop, a suspicious expense entry — the system flags it instantly, so your team can investigate before it becomes a bigger problem.",
      icon: <AlertTriangle className="w-6 h-6" />,
      delay: 0.2,
    },
    {
      title: "Predictive Analytics & Forecasting",
      description:
        "Stop reacting to what already happened. AdoxERP’s predictive engine uses your historical data to forecast sales demand, cash flow trends, and inventory needs — weeks or months in advance. For businesses in fast-moving markets like Jeddah or Dammam, that kind of foresight changes everything.",
      icon: <TrendingUp className="w-6 h-6" />,
      delay: 0.3,
    },
    {
      title: "AI Agents That Work for You",
      description:
        "AdoxERP’s AI agents handle routine business tasks automatically — from sending payment reminders and generating purchase orders when stock runs low, to flagging overdue project milestones and recommending vendor alternatives. They work quietly in the background, so your team can focus on decisions that actually need a human.",
      icon: <UserCheck className="w-6 h-6" />,
      delay: 0.4,
    },
    {
      title: "AI-Generated Reports & Insights",
      description:
        "Instead of spending hours building reports, ask AdoxERP to generate them for you. Our AI reporting engine creates customized business summaries, department performance snapshots, and trend analyses — in seconds — with clear language that any stakeholder can understand, whether they are technical or not.",
      icon: <FileText className="w-6 h-6" />,
      delay: 0.5,
    },
    {
      title: "Intelligent Process Automation",
      description:
        "AdoxERP learns how your business operates and automates the repetitive parts — approval workflows, invoice matching, payroll calculations, stock replenishment, and more. The result is fewer manual errors, faster turnaround times, and a team that spends its energy where it matters most.",
      icon: <Zap className="w-6 h-6" />,
      delay: 0.6,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-sm">
              <Sparkles className="w-4 h-4" />
              AI Integration
            </span>
            <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark mb-4 leading-[1.1]">
              AdoxERP Is Not Just Software — It Thinks With You
            </h2>
            <p className="text-lg text-secondary-dark leading-relaxed">
              Most ERP systems store your data. AdoxERP uses it. With artificial
              intelligence embedded at the core of our platform, AdoxERP goes
              beyond recording transactions — it monitors your business in real
              time, spots problems before they become expensive, and gives your
              team the kind of insights that used to require a full analytics
              department. For businesses in Saudi Arabia and the Middle East
              navigating rapid growth, new regulations, and an increasingly
              competitive market, AI is no longer a luxury. It is how you stay
              ahead.
            </p>
          </motion.div>
        </div>

        {/* Full-width Auto Carousel */}
      </div>

      <div className="relative w-full mt-0 md:mt-8 overflow-hidden">
        {/* CSS Marquee for Maximum Smoothness */}
        <div className="marquee-container group py-12 flex overflow-hidden w-full touch-pan-y">
          <div className="marquee-content flex gap-8 animate-marquee whitespace-nowrap w-fit group-hover:[animation-play-state:paused]">
            {/* Duplicated for seamless loop */}
            {[...aiFeatures, ...aiFeatures].map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="marquee-card w-[330px] md:w-[340px] min-h-[280px] md:min-h-[360px] flex-shrink-0 bg-white rounded-[12px] p-6 md:p-8 border border-gray-100/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_100px_-20px_rgba(0,138,208,0.1)] transition-all duration-500 flex flex-col items-start whitespace-normal"
              >
                <div className="text-primary mb-6 md:mb-8 transition-transform duration-500 group-hover/card:scale-110">
                  {feature.icon && (
                    <div className="[&>svg]:w-10 [&>svg]:h-10">
                      {feature.icon}
                    </div>
                  )}
                </div>

                <h3 className="text-xl md:text-[1.5rem] font-medium text-primary-dark mb-4 leading-[1.1] tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-primary-dark text-sm leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-2 md:mt-12 max-w-5xl mx-auto"
        >
          <div className="relative bg-primary rounded-2xl md:rounded-3xl overflow-hidden group">
            {/* Background Decorative Patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left Image Section */}
              <div className="w-full lg:w-[18%] relative overflow-hidden">
                <Image
                  src="/img/cta-people.png"
                  alt="Professional team collaborating on AdoxERP"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Mobile Overlay: Blends image into the green content area below */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#10a37f] to-transparent lg:hidden" />
              </div>

              {/* Right Content Section */}
              <div className="flex-1 p-8 md:p-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                <div className="max-w-xl text-center md:text-left">
                  <h3 className="text-2xl md:text-[1.5rem] font-bold text-white leading-tight tracking-tight">
                    See AdoxERP AI In Action -{" "}
                    <span className="opacity-80 block lg:inline-block">
                      Book a Live Demo
                    </span>
                  </h3>
                </div>

                <div className="flex-shrink-0">
                  <button className="px-5 py-2.5 bg-white hover:bg-white/90 text-primary-dark text-sm font-bold rounded-lg transition-all duration-500 ease-[0.16,1,0.3,1] flex items-center justify-center gap-2 active:scale-95 group">
                    Live Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MessageSquare,
  AlertTriangle,
  TrendingUp,
  Zap,
  Sparkles,
  ArrowRight,
  Check,
  Plus,
  Layout,
  Database,
  ChevronRight,
  Bot,
  Bell,
  LineChart,
  ShieldAlert,
} from "lucide-react";

export default function AIIntegration() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Business Chat",
      icon: <MessageSquare className="w-5 h-5" />,
      title: "AI Business Chatbot",
      description:
        "Ask your ERP a question in plain Arabic or English and get an instant, intelligent answer. ‘What were our top-selling products in Riyadh last quarter?’ or ‘Which invoices are overdue this week?’ — the AdoxERP AI assistant gives you real answers from your real business data, without needing to run a single report manually.",
      cta: "EXPLORE CHATBOT",
      bgColor: "#f3edff",
      visual: (
        <div className="space-y-5 w-full max-w-[440px] mx-auto">
          {/* User Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-end"
          >
            <div className="bg-white/90 backdrop-blur-sm py-4 px-6 rounded-3xl shadow-sm border border-purple-100 rounded-tr-none max-w-[85%]">
              <p className="text-[15px] font-semibold text-purple-900 leading-relaxed">
                Which invoices are overdue this week?
              </p>
            </div>
          </motion.div>

          {/* AI Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4"
          >
            <div className="w-11 h-11 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-purple-200">
              <Bot className="w-6 h-6" />
            </div>
            <div className="bg-white/95 backdrop-blur-sm py-4 px-6 rounded-3xl shadow-sm border border-purple-100 rounded-tl-none flex-1">
              <div className="space-y-3">
                <div className="h-2 w-full bg-purple-50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="h-full bg-purple-500"
                  />
                </div>
                <div className="h-2 w-[80%] bg-purple-50/50 rounded-full" />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                  className="text-[13px] font-black text-purple-600 flex items-center gap-1.5 mt-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Insight Ready
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Typing Indicator */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex gap-2.5 ml-14"
          >
            <div className="w-2 h-2 rounded-full bg-purple-300" />
            <div className="w-2 h-2 rounded-full bg-purple-300" />
            <div className="w-2 h-2 rounded-full bg-purple-300" />
          </motion.div>
        </div>
      ),
    },
    {
      label: "Anomaly Detection",
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Anomaly Detection & Alerts",
      description:
        "AdoxERP’s AI engine continuously monitors your financial transactions, inventory movements, and operational data. The moment something looks out of the ordinary — a duplicate payment, an unusual stock drop, a suspicious expense entry — the system flags it instantly, so your team can investigate before it becomes a bigger problem.",
      cta: "SEE SMART ALERTS",
      bgColor: "#dbe8ff",
      visual: (
        <div className="space-y-3 w-full">
          {[
            { label: "Duplicate Invoice", type: "alert", color: "blue" },
            { label: "Inventory Drop", type: "warning", color: "indigo" },
            { label: "Unusual Expense", type: "alert", color: "blue" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl shadow-sm border border-blue-100 flex items-center gap-4"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center bg-blue-50 text-blue-600`}
              >
                {item.type === "alert" ? (
                  <AlertTriangle className="w-4 h-4" />
                ) : (
                  <Bell className="w-4 h-4" />
                )}
              </div>
              <p className="text-sm font-semibold text-blue-900">
                {item.label}
              </p>
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            </motion.div>
          ))}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="p-3 bg-blue-600 rounded-xl text-center shadow-lg shadow-blue-200"
          >
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">
              Scanning Live Data
            </span>
          </motion.div>
        </div>
      ),
    },
    {
      label: "Predictive Analytics",
      icon: <LineChart className="w-5 h-5" />,
      title: "Predictive Analytics & Forecasting",
      description:
        "Stop reacting to what already happened. AdoxERP’s predictive engine uses your historical data to forecast sales demand, cash flow trends, and inventory needs — weeks or months in advance. For businesses in fast-moving markets like Jeddah or Dammam, that kind of foresight changes everything.",
      cta: "VIEW FORECASTING",
      bgColor: "#b7e7f2",
      visual: (
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-cyan-100 w-full">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-[12px] font-bold text-cyan-900 uppercase tracking-widest">
              Growth Forecast
            </h4>
            <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="relative h-32 flex items-end gap-2.5">
            {[40, 70, 45, 90, 65, 100, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className={`flex-1 rounded-t-md relative group ${i === 5 ? "bg-cyan-500" : "bg-cyan-100"}`}
              >
                {i === 5 && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  />
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-cyan-50 flex justify-between items-center">
            <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">
              Target Projection
            </span>
            <span className="text-[12px] text-cyan-700 font-black">+34.2%</span>
          </div>
        </div>
      ),
    },
    {
      label: "AI Agents",
      icon: <Bot className="w-5 h-5" />,
      title: "AI Agents That Work for You",
      description:
        "AdoxERP’s AI agents handle routine business tasks automatically — from sending payment reminders and generating purchase orders when stock runs low, to flagging overdue project milestones and recommending vendor alternatives. They work quietly in the background, so your team can focus on decisions that actually need a human.",
      cta: "MEET YOUR AGENTS",
      bgColor: "#d4d9ff",
      visual: (
        <div className="space-y-3 w-full">
          {[
            { title: "Payment Reminder", icon: <Bell className="w-4 h-4" /> },
            {
              title: "Stock Monitor",
              icon: <TrendingUp className="w-4 h-4" />,
            },
            { title: "Workflow Sync", icon: <Zap className="w-4 h-4" /> },
          ].map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-indigo-100 flex items-center justify-between group overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  {agent.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-indigo-900">
                    {agent.title}
                  </p>
                  <p className="text-[10px] text-indigo-400 font-medium uppercase tracking-tighter">
                    Autonomous Agent
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="w-5 h-5 border-2 border-indigo-100 border-t-indigo-600 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      label: "Reports & Insights",
      icon: <Sparkles className="w-5 h-5" />,
      title: "AI-Generated Reports & Insights",
      description:
        "Instead of spending hours building reports, ask AdoxERP to generate them for you. Our AI reporting engine creates customized business summaries, department performance snapshots, and trend analyses — in seconds — with clear language that any stakeholder can understand, whether they are technical or not.",
      cta: "EXPLORE INSIGHTS",
      bgColor: "#f9e4da",
      visual: (
        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-[32px] shadow-sm border border-orange-100 w-full relative overflow-hidden">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-[11px] font-black text-orange-900 uppercase tracking-[0.2em]">
                Real-time Insights
              </span>
            </div>
            <Sparkles className="w-5 h-5 text-orange-400" />
          </div>
          <div className="space-y-4 mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="h-2 bg-orange-50 rounded-full"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ delay: 0.2, duration: 1 }}
              className="h-2 bg-orange-50 rounded-full"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{ delay: 0.4, duration: 1 }}
              className="h-2 bg-orange-50 rounded-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { l: "Revenue", v: "$124k", c: "orange" },
              { l: "Growth", v: "+18%", c: "amber" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100"
              >
                <p className="text-[10px] text-orange-500 font-black mb-1 uppercase tracking-widest">
                  {stat.l}
                </p>
                <p className="text-xl font-black text-orange-900">{stat.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Process Automation",
      icon: <Zap className="w-5 h-5" />,
      title: "Intelligent Process Automation",
      description:
        "AdoxERP learns how your business operates and automates the repetitive parts — approval workflows, invoice matching, payroll calculations, stock replenishment, and more. The result is fewer manual errors, faster turnaround times, and a team that spends its energy where it matters most.",
      cta: "START AUTOMATING",
      bgColor: "#e1f0e3",
      visual: (
        <div className="space-y-4 w-full max-w-[400px] mx-auto scale-110">
          {/* Step 1: Auto-Matching */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/95 backdrop-blur-sm p-4 rounded-[24px] shadow-sm border border-green-100 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-200">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[14px] font-black text-green-900 leading-tight">
                  Auto-Matching
                </p>
                <span className="text-[10px] text-green-600 font-bold uppercase tracking-widest">
                  Active Engine
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-green-400" />
            </motion.div>
          </motion.div>

          {/* Connection Line with Pulse */}
          <div className="relative h-10 ml-[38px]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-50 rounded-full overflow-hidden">
              <motion.div
                animate={{ top: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-1/3 bg-green-500 rounded-full"
              />
            </div>
          </div>

          {/* Step 2: Verification */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/90 backdrop-blur-sm p-4 rounded-[24px] shadow-sm border border-green-100 flex items-center gap-4 ml-6"
          >
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-black text-green-800">
                Smart Approval
              </p>
              <div className="h-1.5 w-[60%] bg-green-50 rounded-full mt-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-full bg-green-400"
                />
              </div>
            </div>
          </motion.div>

          {/* Step 3: Database Sync */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="bg-green-600/5 backdrop-blur-sm p-3 rounded-2xl border-2 border-green-100 border-dashed flex items-center gap-4 ml-12 opacity-80"
          >
            <Database className="w-5 h-5 text-green-400" />
            <p className="text-[11px] font-bold text-green-900 italic">
              ERP Ledger Synchronized
            </p>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="ml-auto w-2 h-2 rounded-full bg-green-500"
            />
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <section className="pb-16 md:pb-26 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark mb-4 leading-[1.1]">
              AdoxERP Is Not Just Software — It Thinks With You
            </h2>
            <p className="text-lg text-secondary-dark leading-relaxed font-normal max-w-5xl mx-auto">
              AdoxERP goes beyond storing data — with built-in AI, it monitors
              your business in real time, detects issues early, and delivers
              smart insights instantly. For growing businesses in Saudi Arabia
              and the Middle East, AI is no longer optional — it’s essential to
              stay ahead.
            </p>
          </motion.div>
        </div>

        {/* Custom Tabs UI matching the image */}
        <div className="mb-12 md:mb-16 border-b border-gray-100">
          <div className="flex flex-wrap justify-center overflow-x-auto no-scrollbar gap-2 md:gap-8 lg:gap-16">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative flex flex-col items-center gap-3 pb-6 px-1 transition-all group min-w-[100px] ${
                  activeTab === index
                    ? "text-primary"
                    : "text-gray-400 hover:text-primary-dark"
                }`}
              >
                <div
                  className={`transition-transform duration-300 ${activeTab === index ? "scale-110" : "group-hover:scale-105"}`}
                >
                  {tab.icon}
                </div>
                <span
                  className={`text-sm md:text-base font-medium whitespace-nowrap transition-colors`}
                >
                  {tab.label}
                </span>
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Section */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              {/* Left Column: Text Content */}
              <div>
                <h3 className="text-2xl md:text-[2.75rem] font-bold text-primary-dark mb-2 md:mb-8 leading-[1.15]">
                  {tabs[activeTab].title}
                </h3>

                <p className="text-[17px] text-secondary-dark leading-relaxed">
                  {tabs[activeTab].description}
                </p>
              </div>

              {/* Right Column: Visual Mock matching image style */}
              <div className="relative">
                <div
                  className="aspect-[1/1] md:aspect-[1.2/1] rounded-[22px] md:rounded-[48px] p-6 md:p-10 flex items-center justify-center overflow-hidden transition-colors duration-500"
                  style={{ backgroundColor: tabs[activeTab].bgColor }}
                >
                  <div className="w-full max-w-sm">
                    {tabs[activeTab].visual}
                  </div>
                </div>

                {/* Decorative floating elements if needed */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-50/50 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-12 max-w-5xl mx-auto"
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

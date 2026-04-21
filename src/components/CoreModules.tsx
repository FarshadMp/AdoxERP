"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  CreditCard,
  Box,
  Factory,
  Users,
  Target,
  ClipboardList,
  HardDrive,
  Globe,
  TrendingUp,
  Check,
  Database,
  Calendar,
  Layers,
} from "lucide-react";

const modules = [
  {
    id: 1,
    slug: "sales-management",
    title: "Sales Management",
    description:
      "Manage your entire sales cycle from first contact to final invoice. Track quotations, sales orders, pricing, customer accounts, and sales team performance — all in one place. Whether your customers are in Riyadh or across the GCC, your sales team will always have what they need to close faster.",
    icon: <ShoppingBag className="w-4 h-4" />,
    bgColor: "#f3edff",
    visual: (
      <div className="space-y-4 w-full max-w-[340px] mx-auto scale-110">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="bg-white/95 backdrop-blur-sm p-4 rounded-3xl shadow-lg shadow-purple-200/50 border border-purple-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-200">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[14px] font-black text-purple-900 leading-tight">
                New Order
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">
                  Converting
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[13px] font-black text-purple-900">SAR 45k</p>
            <p className="text-[9px] text-green-600 font-black tracking-widest">
              +12% EXP
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 pl-6">
          {[
            { l: "Leads", v: "124" },
            { l: "Convert", v: "24%" },
          ].map((s, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
              className="bg-white/80 p-4 rounded-2xl border border-purple-50 shadow-sm"
            >
              <p className="text-[10px] text-purple-400 font-bold uppercase mb-1">
                {s.l}
              </p>
              <p className="text-xl font-black text-purple-900">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    slug: "accounting-finance",
    title: "Accounting & Finance",
    description:
      "Take full control of your books with real-time accounting, automated VAT calculations, multi-currency support, and financial statements that are always up to date. Fully compliant with Saudi Arabia’s GAAP and built to integrate directly with ZATCA’s e-invoicing portal.",
    icon: <CreditCard className="w-4 h-4" />,
    bgColor: "#dbe8ff",
    visual: (
      <div className="space-y-4 w-full max-w-[340px] mx-auto scale-110">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="bg-white/95 backdrop-blur-sm p-6 rounded-[22px] md:rounded-[32px] shadow-xl shadow-blue-200/40 border border-blue-100 overflow-hidden relative"
        >
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="p-2.5 bg-blue-50 rounded-xl">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <p className="text-[11px] text-blue-400 font-black uppercase tracking-widest mb-1">
                E-Invoicing
              </p>
              <div className="flex items-center gap-1.5 justify-end">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[12px] font-black text-green-600 tracking-tighter">
                  ZATCA LINKED
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2.5 relative z-10">
            <div className="h-2 w-full bg-blue-50 rounded-full overflow-hidden">
              <motion.div
                animate={{ left: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent"
              />
            </div>
            <div className="h-2 w-2/3 bg-blue-50/50 rounded-full" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="bg-blue-600 p-4 rounded-2xl shadow-xl shadow-blue-300 flex items-center justify-between mx-4 -mt-2 relative z-20"
        >
          <span className="text-white text-[13px] font-bold">
            Accounting Pool
          </span>
          <span className="text-white font-black text-sm md:text-lg">
            SAR 1.2M
          </span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    slug: "inventory-management",
    title: "Inventory Management",
    description:
      "Always know what you have, where it is, and when you need to reorder. AdoxERP tracks stock across multiple warehouses and locations — with real-time updates and automated low-stock alerts.",
    icon: <Box className="w-4 h-4" />,
    bgColor: "#b7e7f2",
    visual: (
      <div className="space-y-3 w-full max-w-[340px] mx-auto scale-110">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="bg-white/95 backdrop-blur-sm p-5 rounded-[22px] md:rounded-[32px] shadow-xl shadow-cyan-200/40 border border-cyan-100"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-600 text-white flex items-center justify-center">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[13px] font-black text-cyan-900 leading-tight">
                  Warehouse 01
                </p>
                <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
                  Jeddah Hub
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-cyan-900">12,840</p>
              <p className="text-[9px] text-cyan-400 font-bold uppercase">
                Total Skus
              </p>
            </div>
          </div>
          <div className="h-1.5 w-full bg-cyan-50 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: ["0%", "85%", "85%"] }}
              transition={{ repeat: Infinity, duration: 3, times: [0, 0.5, 1] }}
              className="h-full bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 pl-4">
          {[
            {
              n: "Steel Pipes",
              q: "LOW",
              c: "text-rose-500",
              b: "bg-rose-500",
            },
            {
              n: "Electronics",
              q: "OK",
              c: "text-green-500",
              b: "bg-cyan-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
              className="bg-white/90 p-3.5 rounded-[24px] border border-cyan-50 shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <p className="text-[11px] font-black text-cyan-900 truncate pr-2">
                  {item.n}
                </p>
                <div
                  className={`w-1.5 h-1.5 rounded-full ${item.q === "LOW" ? "bg-rose-500 animate-pulse" : "bg-green-500"}`}
                />
              </div>
              <div className="h-1 w-full bg-cyan-50 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.b} rounded-full`}
                  style={{ width: item.q === "LOW" ? "25%" : "75%" }}
                />
              </div>
              <p className={`text-[9px] font-black mt-2 ${item.c}`}>
                {item.q} STOCK
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    slug: "manufacturing-production",
    title: "Manufacturing & Production",
    description:
      "Plan production runs, manage bills of materials, track work-in-progress, and monitor shop floor activity in real time. Built for Saudi-based producers needing precision and traceability.",
    icon: <Factory className="w-4 h-4" />,
    bgColor: "#e1f0e3",
    visual: (
      <div className="space-y-4 w-full max-w-[340px] mx-auto scale-110">
        <div className="grid grid-cols-2 gap-3 mb-2">
          {[
            { l: "Line A1", s: "ACTIVE", c: "bg-green-500" },
            { l: "Line A2", s: "MAINT", c: "bg-amber-500" },
          ].map((line, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 1 }}
              className="bg-white/95 backdrop-blur-sm p-3 rounded-2xl border border-green-100 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-black text-green-400 uppercase tracking-widest">
                  {line.l}
                </span>
                <div
                  className={`w-1.5 h-1.5 rounded-full ${line.c} ${line.s === "ACTIVE" ? "animate-pulse" : ""}`}
                />
              </div>
              <p className="text-[11px] font-black text-green-900">{line.s}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="bg-white/95 backdrop-blur-sm p-5 rounded-[22px] md:rounded-[32px] shadow-xl shadow-green-100 border border-green-100 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-200">
              <Factory className="w-6 h-6" />
            </div>
            <div className="text-right">
              <p className="text-[10px] text-green-400 font-black uppercase tracking-widest">
                Global OEE
              </p>
              <p className="text-2xl font-black text-green-900">92.8%</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-[10px] font-black text-green-900 uppercase">
              <span>Output Progress</span>
              <span>840/1000</span>
            </div>
            <div className="h-2 w-full bg-green-50 rounded-full overflow-hidden p-0.5">
              <motion.div
                animate={{ width: ["0%", "84%", "84%"] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="h-full bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
              />
            </div>
          </div>

          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    ),
  },
  {
    id: 5,
    slug: "human-resources-payroll",
    title: "Human Resources & Payroll",
    description:
      "Manage your Saudi and expat workforce with full support for GOSI, Saudization (Vision 2030 targets), and automated payroll. Every process is handled in compliance with Saudi labor law.",
    icon: <Users className="w-4 h-4" />,
    bgColor: "#fff9db",
    visual: (
      <div className="space-y-4 w-full max-w-[340px] mx-auto scale-110">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="bg-white/95 backdrop-blur-sm p-5 rounded-[20px] md:rounded-[32px] shadow-xl shadow-yellow-100 border border-yellow-200 overflow-hidden relative"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 rounded-2xl bg-yellow-500 text-white flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-right">
              <p className="text-[10px] text-yellow-600 font-black uppercase tracking-widest">
                Saudization
              </p>
              <p className="text-md md:text-xl font-black text-yellow-900">
                Platinum Class
              </p>
            </div>
          </div>
          <div className="relative h-2 bg-yellow-50 rounded-full overflow-hidden mb-2">
            <motion.div
              animate={{ width: ["0%", "78%", "78%"] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="h-full bg-yellow-500 rounded-full"
            />
          </div>
          <div className="flex justify-between text-[9px] font-black text-yellow-700 uppercase">
            <span>Vision 2030 Target</span>
            <span>78% Achieved</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          className="bg-white/95 p-4 rounded-3xl border border-yellow-100 shadow-sm space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center font-black text-yellow-700">
              NA
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-black text-yellow-900">
                Nasser Al-Otaibi
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] text-yellow-600 font-bold">
                  Payroll Active
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-black text-yellow-900">
                SAR 14,500
              </p>
              <p className="text-[8px] text-yellow-400 font-bold uppercase">
                Basic + GOSI
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 6,
    slug: "crm-customer-management",
    title: "CRM & Customer Management",
    description:
      "Build and maintain stronger client relationships with a CRM that sits directly inside your ERP. Track interactions, manage pipelines, and automate follow-ups in real time.",
    icon: <Target className="w-4 h-4" />,
    bgColor: "#f3f0ff",
    visual: (
      <div className="space-y-4 w-full max-w-[340px] mx-auto scale-110">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="bg-white/95 backdrop-blur-sm p-6 rounded-[20px] md:rounded-[40px] border border-indigo-100 shadow-xl shadow-indigo-200/40 relative overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-2 md:mb-8">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[14px] font-black text-indigo-900">
                Sales Funnel
              </p>
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">
                Real-time Tracker
              </span>
            </div>
          </div>
          <div className="space-y-2.5">
            {[90, 70, 50, 30].map((w, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[9px] font-black text-indigo-300 uppercase">
                    {["Lead", "Quote", "Offer", "Deal"][i]}
                  </span>
                  <span className="text-[9px] font-black text-indigo-900">
                    {w}%
                  </span>
                </div>
                <div className="h-4 bg-indigo-50 rounded-md overflow-hidden p-0.5">
                  <motion.div
                    animate={{ width: [`0%`, `${w}%`] }}
                    transition={{
                      delay: i * 0.2,
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    className="h-full bg-indigo-500 rounded-sm relative group"
                  >
                    <motion.div
                      animate={{ left: ["-10% ", "110%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 7,
    slug: "project-management",
    title: "Project Management",
    description:
      "Plan, execute, and deliver projects on time and within budget. Assign resources, track milestones, and monitor costs — all linked to accounting and HR.",
    icon: <ClipboardList className="w-4 h-4" />,
    bgColor: "#e6fffa",
    visual: (
      <div className="space-y-3 w-full max-w-[340px] mx-auto scale-110">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[12px] font-black text-teal-900 uppercase tracking-widest pl-2">
            Timeline
          </span>
          <Calendar className="w-5 h-5 text-teal-400" />
        </div>
        {[
          { t: "Foundation", s: "Done" },
          { t: "Structural", s: "Active" },
          { t: "Finishing", s: "Next" },
        ].map((task, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: i * 0.3 }}
            className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl md:rounded-3xl border border-teal-100 shadow-lg shadow-teal-100/30 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${task.s === "Done" ? "bg-green-500" : task.s === "Active" ? "bg-teal-500 animate-ping" : "bg-gray-200"}`}
              />
              <span className="text-[14px] font-black text-teal-900">
                {task.t}
              </span>
            </div>
            <span
              className={`text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter ${
                task.s === "Done"
                  ? "bg-green-100 text-green-700"
                  : task.s === "Active"
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-200"
                    : "bg-gray-50 text-gray-400"
              }`}
            >
              {task.s}
            </span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 8,
    slug: "asset-management",
    title: "Asset Management",
    description:
      "Track every asset across its full lifecycle — from purchase to maintenance. AdoxERP keeps you audit-ready and maintenance-proactive at all times.",
    icon: <HardDrive className="w-4 h-4" />,
    bgColor: "#fff5f5",
    visual: (
      <div className="relative h-64 w-full max-w-[340px] mx-auto overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -bottom-20 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl"
        />
        <div className="grid grid-cols-2 gap-3 relative z-10">
          {[
            { n: "Machinery A1", s: "Healthy" },
            { n: "Fleet 04", s: "Service" },
            { n: "HQ Server", s: "Healthy" },
            { n: "HVAC Unit", s: "Healthy" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/95 p-4 rounded-2xl shadow-sm border border-rose-100"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 mb-3 flex items-center justify-center">
                <Box className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-black text-rose-900 mb-1">
                {item.n}
              </p>
              <p
                className={`text-[9px] font-bold uppercase ${item.s === "Healthy" ? "text-green-500" : "text-rose-400"}`}
              >
                {item.s}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 9,
    slug: "ecommerce-management",
    title: "E-Commerce Management",
    description:
      "Connect your online store directly to your ERP. Orders, inventory, and payments sync automatically — so you can grow without the operational chaos.",
    icon: <Globe className="w-4 h-4" />,
    bgColor: "#f1f3f5",
    visual: (
      <div className="space-y-4 w-full max-w-[340px] mx-auto scale-110">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="bg-white/95 backdrop-blur-sm p-6 rounded-[10px] md:rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-50/30 to-transparent" />
          <div className="w-10 h-10 md:w-20 md:h-20 bg-gray-50 rounded-[28px] flex items-center justify-center text-gray-900 mb-6 shadow-inner relative z-10 mx-auto">
            <Globe className="w-5 h-5 md:w-10 md:h-10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -inset-2 border border-dashed border-gray-200 rounded-full"
            />
          </div>
          <p className="text-[16px] font-black text-gray-900 mb-2 relative z-10">
            Real-time Store Sync
          </p>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full relative z-10 mb-0 md:mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-[11px] font-black uppercase tracking-[0.1em]">
              Online Now
            </span>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full mt-2 border-t border-gray-50 pt-8 relative z-10">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                Total Sales
              </p>
              <p className="text-xl md:text-2xl font-black text-gray-900">
                SAR 128k
              </p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            >
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                Sync Orders
              </p>
              <p className="text-xl md:text-2xl font-black text-green-600">
                98%
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    ),
  },
];

const Card = ({ module, index }: { module: any; index: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Smooth out the scroll progress for a liquid feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 0 to 0.5: Card is entering (scaling up from 0.8 to 1)
  // 0.5 to 1: Card is stacking (scaling down from 1 to 0.9 and fading)
  // For the last card, we keep it at scale 1 and opacity 1 to avoid a jumpy exit
  const scale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.8, 1, index === 8 ? 1 : 0.9],
  );
  const opacity = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1, 1, index === 8 ? 1 : 0.6],
  );

  return (
    <div
      ref={container}
      className="h-screen sticky top-0 flex items-center justify-center py-20"
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full bg-white rounded-[48px] border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-16 gap-12 lg:gap-20 items-center relative z-[10]"
      >
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-gray-900 text-xs font-black uppercase tracking-widest border border-gray-100">
            <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              {module.icon}
            </span>
            Module {module.id}
          </div>
          <h3 className="text-2xl lg:text-[2.75rem] font-medium text-primary-dark leading-[1.1] tracking-tight">
            {module.title}
          </h3>
          <p className="text-base text-secondary-dark leading-relaxed max-w-[95%] pb-2 md:pb-6">
            {module.description}
          </p>
          <Link 
            href={`/modules/${module.slug}`}
            className="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 text-sm px-5 py-2.5 rounded-xl inline-flex items-center gap-2 font-medium group"
          >
            Learn more
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Right Visual Container - Matching AIIntegration Style */}
        <div
          className="aspect-[1/1] md:aspect-[1.2/1] rounded-[22px] md:rounded-[48px] p-10 md:p-12 flex items-center justify-center overflow-hidden transition-colors duration-500"
          style={{ backgroundColor: module.bgColor }}
        >
          <div className="w-full">{module.visual}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default function CoreModules() {
  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 pt-16 md:pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-sm">
            Core Modules
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-primary-dark mb-4 leading-[1.1]">
            Everything Your Business Needs, All in One Place
          </h2>
          <p className="text-lg text-semibold text-primary-dark leading-relaxed max-w-4xl mx-auto">
            Running a business in Saudi Arabia means managing a lot of moving
            parts at once. AdoxERP brings all of them together — nine fully
            integrated modules that share data in real time, so every department
            is always working from the same picture. No silos. No duplication.
            No wasted time.
          </p>
        </motion.div>
      </div>

      {/* The Scrollable Cards Section */}
      <div className="pb-16">
        <div className="max-w-[1300px] mx-auto relative flex flex-col gap-0">
          {modules.map((module, index) => (
            <Card key={module.id} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const modules = [
  {
    id: 1,
    title: "Sales Management",
    description:
      "Manage your entire sales cycle from first contact to final invoice. Track quotations, sales orders, pricing, customer accounts, and sales team performance — all in one place. Whether your customers are in Riyadh or across the GCC, your sales team will always have what they need to close faster.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Accounting & Finance",
    description:
      "Take full control of your books with real-time accounting, automated VAT calculations, multi-currency support, and financial statements that are always up to date. Fully compliant with Saudi Arabia’s GAAP and built to integrate directly with ZATCA’s e-invoicing portal.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Inventory Management",
    description:
      "Always know what you have, where it is, and when you need to reorder. AdoxERP tracks stock across multiple warehouses and locations — whether that is one site in Jeddah or a network of distribution points across the Kingdom — with real-time updates and automated low-stock alerts.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Manufacturing & Production",
    description:
      "Plan production runs, manage bills of materials, track work-in-progress, and monitor shop floor activity in real time. AdoxERP’s manufacturing module is built for Saudi-based producers and assemblers who need precision, traceability, and tight integration between the factory floor and the back office.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Human Resources & Payroll",
    description:
      "Manage your Saudi and expat workforce with full support for GOSI, Saudization (Vision 2030 targets), end-of-service calculations, and automated payroll. From hiring to offboarding, every HR process is handled cleanly and in compliance with Saudi labor law.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "CRM & Customer Management",
    description:
      "Build and maintain stronger client relationships with a CRM that sits directly inside your ERP. Track interactions, manage pipelines, automate follow-ups, and give your sales team in Riyadh or Dammam the full customer picture — every time.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Project Management",
    description:
      "Plan, execute, and deliver projects on time and within budget. Assign resources, track milestones, log time, and monitor costs — all linked back to your accounting and HR modules. Ideal for contracting businesses and Vision 2030 project stakeholders across the Kingdom.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Asset Management",
    description:
      "Track every asset across its full lifecycle — from purchase and depreciation to maintenance scheduling and disposal. Whether you manage a fleet of vehicles in Dammam or IT infrastructure across multiple offices, AdoxERP keeps you audit-ready at all times.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 9,
    title: "E-Commerce Management",
    description:
      "Connect your online store directly to your ERP and let the two work as one. Orders, inventory, customer records, and payments sync automatically — so you can take advantage of Saudi Arabia’s booming e-commerce market without the operational chaos that usually comes with it.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
];

const Card = ({ module, index }: { module: any; index: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Scale down and fade as we progress
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // This is the relative scroll within the card section
  const { scrollYProgress: cardScroll } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const innerScale = useTransform(cardScroll, [0, 1], [1, 0.9]);
  const opacity = useTransform(cardScroll, [0, 1], [1, 0.6]);

  return (
    <div
      ref={container}
      className="h-screen sticky top-0 flex items-center justify-center py-20"
    >
      <motion.div
        style={{ scale: innerScale, opacity }}
        className="w-full bg-white rounded-[40px] border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-16 gap-12 lg:gap-20 items-center relative z-[10]"
      >
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold">
            {module.icon}
            Module {module.id}
          </div>
          <h3 className="text-3xl lg:text-[2.75rem] font-medium text-gray-900 leading-[1.1] tracking-tight">
            {module.title}
          </h3>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-[95%] pb-6">
            {module.description}
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 px-8 py-4 rounded-xl inline-flex items-center gap-2 font-medium group">
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
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center transform transition-transform duration-700 hover:scale-[1.02]">
          <Image
            src="/img/right.png"
            alt={`${module.title} Interface`}
            fill
            className="object-contain p-4 lg:p-8"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function CoreModules() {
  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 pt-24 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-sm">
            Core Modules
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Everything Your Business Needs, All in One Place
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Running a business in Saudi Arabia means managing a lot of moving
            parts at once. AdoxERP brings all of them together — nine fully
            integrated modules that share data in real time, so every department
            is always working from the same picture. No silos. No duplication.
            No wasted time.
          </p>
        </motion.div>
      </div>

      {/* The Scrollable Cards Section */}
      <div className="bg-[#F5F5F7] px-4 md:px-8">
        <div className="max-w-[1300px] mx-auto relative flex flex-col gap-0">
          {modules.map((module, index) => (
            <Card key={module.id} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

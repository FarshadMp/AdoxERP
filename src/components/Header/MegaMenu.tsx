"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    title: "Core Modules",
    items: [
      {
        name: "Sales Management",
        sub: "Streamline your sales pipeline and orders",
        href: "/modules/sales-management",
      },
      {
        name: "Accounting & Finance",
        sub: "Complete financial control and reporting",
        href: "/modules/accounting-finance",
      },
      {
        name: "Inventory Management",
        sub: "Real-time stock tracking and logistics",
        href: "/modules/inventory-management",
      },
    ],
  },
  {
    title: "Operational Modules",
    items: [
      {
        name: "Manufacturing",
        sub: "Optimize production and supply chain",
        href: "/modules/manufacturing-production",
      },
      {
        name: "HR & Payroll",
        sub: "Manage teams, attendance, and salaries",
        href: "/modules/human-resources-payroll",
      },
      {
        name: "CRM & Customer",
        sub: "Enhance customer loyalty and support",
        href: "/modules/crm-customer-management",
      },
    ],
  },
  {
    title: "Enterprise Solutions",
    items: [
      {
        name: "Project Management",
        sub: "Track tasks, timelines, and budgets",
        href: "/modules/project-management",
      },
      {
        name: "Asset Management",
        sub: "Lifecycle tracking for company assets",
        href: "/modules/asset-management",
      },
      {
        name: "E-Commerce",
        sub: "Connect your online store with ERP",
        href: "/modules/ecommerce-management",
      },
    ],
  },
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, pointerEvents: "none" }}
      animate={
        isOpen
          ? { opacity: 1, y: 0, pointerEvents: "auto" }
          : { opacity: 0, y: 10, pointerEvents: "none" }
      }
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 right-0 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-t border-gray-100 mt-2 rounded-3xl overflow-hidden max-w-[1240px] mx-auto w-[calc(100vw-48px)] p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Left Featured Card */}
        <div className="hidden lg:flex w-[300px] shrink-0">
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden group">
            <Image
              src="/img/megamenu-bg.png"
              alt="Featured"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                Solutions that drive business results
              </h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Deliver customer value and drive business outcomes with
                AdoxERP's integrated modules.
              </p>
              <Link
                href="/#solutions"
                onClick={onClose}
                className="inline-flex items-center text-white font-bold text-sm hover:translate-x-1 transition-transform"
              >
                AdoxERP Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Columns Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="text-[12px] uppercase tracking-wider font-bold text-gray-400 mb-6">
                {section.title}
              </h4>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="group block"
                  >
                    <div className="text-[15px] font-bold text-gray-900 group-hover:text-primary transition-colors mb-0.5">
                      {item.name}
                    </div>
                    <div className="text-[13px] text-gray-500 leading-snug">
                      {item.sub}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

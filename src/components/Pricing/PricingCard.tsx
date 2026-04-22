"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  dotColor: string;
  buttonVariant: "outline" | "solid";
  popular?: boolean;
  stats: { label: string; highlight?: boolean; value?: string }[];
  features: string[];
}

export default function PricingCard({
  name,
  description,
  price,
  dotColor,
  buttonVariant,
  popular,
  stats,
  features,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col bg-white rounded-[1.5rem] border ${
        popular ? "border-primary" : "border-slate-100"
      } shadow-xl shadow-slate-200/50 overflow-hidden h-full`}
    >
      {popular && (
        <div className="bg-primary text-white text-center py-3 text-md font-bold tracking-wide">
          Most popular
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
          <span className="text-sm font-semibold text-slate-800">{name}</span>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <div
            className={`text-4xl md:text-4xl font-bold text-slate-900 mb-1 ${price.length > 15 ? "text-2xl md:text-3xl" : ""}`}
          >
            {price === "Request a Quote" || price === "Custom Pricing" ? (
              <span className="text-3xl md:text-4xl">{price}</span>
            ) : (
              price
            )}
          </div>
          <div className="text-slate-500 text-sm">{description}</div>
        </div>

        {/* Stats Section */}
        <div className="space-y-2 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span
                className={`text-base ${stat.highlight ? "font-bold text-slate-900" : "text-slate-600"}`}
              >
                {stat.label}
              </span>
              {stat.value && (
                <span className="text-sm text-slate-400">{stat.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          href="/free-demo"
          className={`w-full py-3 px-6 rounded-full text-center font-bold transition-all duration-300 mb-8 ${
            buttonVariant === "solid"
              ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
              : "bg-transparent text-primary border-2 border-primary hover:bg-primary/5"
          }`}
        >
          {price === "Custom Pricing" ? "Contact Us" : "REQUEST A QUOTE"}
        </Link>

        {/* Divider */}
        <div className="h-px bg-slate-100 -mx-10 mb-8" />

        {/* Features List */}
        <div className="space-y-4">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-dark shrink-0 mt-0.5 stroke-[1.5px]" />
              <span
                className={`text-base md:text-base leading-snug tracking-tight ${feature.toLowerCase().includes("plus") ? "font-bold text-slate-900" : "text-slate-600"}`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Cloud-Based & Always Accessible",
    description:
      "Access your business anytime, anywhere with secure cloud hosting and 99.9% uptime. Teams across locations work on the same real-time data from any device.",
    image: "/img/features/cloud.png",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Modular & Scalable by Design",
    description:
      "Start with essential modules and expand as your business grows. Scale بسهولة from a single branch to multi-city operations without major upgrades.",
    image: "/img/features/modular.png",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Arabic Language Interface & Support",
    description:
      "Fully localized in Arabic with native RTL support across all screens and reports. 24/7 Arabic-speaking support ensures smooth user experience.",
    image: "/img/features/arabic.png",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Hijri Calendar Integration",
    description:
      "Supports both Hijri and Gregorian calendars across all modules. Create documents, reports, and schedules without manual date conversion.",
    image: "/img/features/hijri.png",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Multi-Currency Support",
    description:
      "Manage SAR as your base currency while handling global transactions easily. Automatic exchange rate updates keep financial data accurate.",
    image: "/img/features/currency.png",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "ZATCA & SAMA Compliance",
    description:
      "Built to meet Saudi regulations including ZATCA e-invoicing and SAMA standards. Simplifies VAT reporting and compliance processes.",
    image: "/img/features/compliance.png",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Saudi Payment Gateways",
    description:
      "Integrates with leading Saudi payment systems and banking platforms. Accept, track, and reconcile payments without leaving your ERP.",
    image: "/img/features/api.png",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Saudi Data Residency",
    description:
      "Secure cloud hosting with data stored داخل Saudi Arabia. Ensures compliance with PDPL and full control over business data.",
    image: "/img/features/residency.png",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Manage operations through mobile apps on iOS and Android بسهولة. Get alerts, approvals, and updates instantly via WhatsApp integration.",
    image: "/img/features/whatsapp.png",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Industry-Specific Modules",
    description:
      "Pre-built solutions tailored for key Saudi industries and workflows. Get ready-to-use modules with relevant reports and compliance settings.",
    image: "/img/features/industry.png",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Local Customer Support",
    description:
      "On-ground support teams available across major Saudi cities. Get help with onboarding, training, and ongoing system assistance.",
    image: "/img/features/support.png",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Role-Based Permissions",
    description:
      "Control user access by role, department, or location. Ensure secure and relevant data visibility across your organization.",
    image: "/img/features/roles.png",
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    title: "Seamless Third-Party Sync",
    description:
      "Connect easily with external tools, platforms, and government systems. Open API allows flexible and scalable integrations.",
    image: "/img/features/sync.png",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Bank-Level Data Security",
    description:
      "Advanced security with encryption, backups, and audit logs. Fully compliant with Saudi data protection and global standards.",
    image: "/img/features/security.png",
    color: "from-red-500/20 to-orange-500/20",
  },
];

const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
  <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(2.8125rem)",
      WebkitBackdropFilter: "blur(2.8125rem)",
    }}
    className="flex-shrink-0 w-[320px] md:w-[320px] min-h-[400px] rounded-[1.5rem] p-4 flex flex-col group transition-all duration-500"
  >
    <div
      className={`relative h-45 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br ${feature.color}`}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
      {/* Decorative glass elements */}
      <div className="absolute top-4 left-4 right-4 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center px-4">
        <div className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse" />
        <div className="h-2 w-24 bg-white/20 rounded-full" />
      </div>
    </div>

    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
      {feature.title}
    </h3>
    <p className="text-white text-base leading-relaxed">
      {feature.description}
    </p>
  </div>
);

export default function KeyFeatures() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-26 relative overflow-hidden bg-white rounded-b-[1rem] md:rounded-b-[3rem]">
        {/* Footer Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/footer-bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md text-primary text-sm font-semibold mb-4">
            Key Features
          </div>

          <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-white mb-4 leading-[1.1]">
            Built for Saudi Businesses. Ready for What Comes Next.
          </h2>

          <p className="text-lg text-white leading-relaxed font-normal max-w-5xl mx-auto">
            AdoxERP is built specifically for Saudi businesses — covering
            compliance, language, payments, and local support. Every feature is
            designed for the Saudi market, not adapted from elsewhere.
          </p>
        </div>

        {/* Auto Carousel Container */}
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 90,
                ease: "linear",
              },
            }}
            className="flex gap-6 px-3"
          >
            {/* Double the features for infinite effect */}
            {[...features, ...features].map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

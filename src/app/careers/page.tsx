"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  GraduationCap,
  Users,
  LineChart,
  Code,
} from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const jobs = [
    {
      role: "Junior ERP Consultant",
      type: "Full-time",
      location: "UK (Hybrid)",
      icon: <Code className="w-6 h-6" />,
    },
    {
      role: "Customer Success Associate",
      type: "Full-time",
      location: "UK (Remote/Office)",
      icon: <Users className="w-6 h-6" />,
    },
    {
      role: "Sales Development Representative",
      type: "Full-time",
      location: "UK (Office)",
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      role: "Graduate Trainee",
      type: "Fixed-term",
      location: "UK (Hybrid)",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION (MATCHES ABOUT PAGE STYLE) --- */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-22 overflow-hidden bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold flex items-center gap-2 border border-[#0693FB]/20"
          >
            <span className="text-[#0693FB]">✦</span>We Are Hiring
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-primary-dark leading-tight tracking-tight mb-4"
          >
            Join Our <span className="text-[#0693FB]">Mission</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-light text-base leading-relaxed max-w-2xl mx-auto font-semibold"
          >
            We are building a UK-based team to support product growth,
            implementation, and customer success. Come build the future of
            intelligent ERP.
          </motion.p>
        </div>

        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(6,147,251,0.05)_0%,_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(0,188,252,0.05)_0%,_transparent_50%)] pointer-events-none" />
      </section>

      {/* --- JOB LISTINGS --- */}
      <section className="py-14 md:py-22">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-2xl font-bold text-[#0F172A] mb-8 md:mb-12 flex items-center gap-3"
          >
            <Briefcase className="w-6 h-6 text-[#0693FB]" />
            Current Openings
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, i) => (
              <motion.div
                key={job.role}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group p-5 md:p-8 rounded-[22px] md:rounded-[32px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-[#0693FB]/5 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start md:items-center gap-4 md:gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-dark group-hover:bg-[#0693FB] group-hover:text-white transition-colors duration-500">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#0F172A] mb-2">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#475569]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-[#0693FB] font-bold text-sm group-hover:bg-[#0693FB] group-hover:text-white group-hover:border-[#0693FB] transition-all duration-300"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-10 md:mt-20 p-5 md:p-12 rounded-[20px] md:rounded-[30px] bg-gray-50 border border-gray-100 text-center"
          >
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">
              Don't see a position for you?
            </h3>
            <p className="text-[#475569] mb-6 md:mb-8 max-w-lg mx-auto">
              We are always looking for passionate people to join us. Send your
              CV to our team and we'll keep you in mind for future roles.
            </p>
            <Link
              href="/#contact"
              className="text-[#0693FB] font-bold hover:underline"
            >
              Contact Recruiting team
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

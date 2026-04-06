"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "react-countup";

export default function SolutionSection() {
  const stats = [
    {
      value: 15,
      prefix: "+ ",
      label: "Countries",
      width: "max-w-[280px]",
    },
    {
      value: 25,
      prefix: "+ ",
      label: "Years of Expertise",
      width: "max-w-[150px]",
    },
    {
      value: 70,
      prefix: "+ ",
      label: "strategic locations",
      width: "max-w-[200px]",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  };

  return (
    <section className="relative w-full py-18 lg:py-24 bg-[#011c4d] flex flex-col justify-center overflow-hidden text-white selection:bg-[#00b8fe] selection:text-white">
      {/* Background Blue Chevron - Replicating Lodisna's "square rotated" logic */}
      <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/2 right-[-25vw] md:right-[-15vw] w-[80vh] h-[80vh] transform -translate-y-1/2 rotate-225"
          style={{
            background:
              "linear-gradient(225deg, #00b8fe 0%, rgba(0, 184, 254, 0.12) 40%, transparent 75%)",
          }}
        />
        {/* Subtle Watermark-like texture/overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.1),transparent)]" />
      </div>

      <div className="relative z-10 px-6 md:px-14 lg:px-20 flex flex-col">
        {/* Top Content Area */}
        <div className="max-w-4xl lg:max-w-[45vw] mb-[8vh]">
          <motion.div {...fadeInUp}>
            <h2 className="text-[2.5rem] md:text-[5.5vw] font-light leading-[1.1] tracking-tighter mb-[3vh] text-white/95">
              A global network of excellence
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <p className="text-white/80 text-[clamp(14px,1vw,18px)] font-normal leading-[1.6] w-full md:w-[90%] mb-[4vh]">
              We plan and execute customized logistics and transport projects to
              meet each client&apos;s unique requirements. Our strategic vision
              spans the entire supply chain, managing every aspect of the
              transport and distribution process through our expansive global
              network of excellence.
            </p>

            <Link
              href="/#services"
              className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-white/30 text-white font-medium text-[clamp(9px,0.7vw,11px)] uppercase tracking-[0.2em] hover:bg-white hover:text-[#011c4d] transition-all duration-400 group"
            >
              <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-[6px] border-l-primary transition-colors group-hover:border-l-[#011c4d]" />
              SERVICES
            </Link>
          </motion.div>
        </div>

        {/* Stats Row - Updated to 3 columns on mobile (1 row) */}
        <div className="grid grid-cols-3 md:flex md:flex-row items-start md:items-end justify-between gap-x-4 md:gap-8 w-full mt-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-start md:items-end shrink-0"
            >
              <div className="text-[14vw] md:text-[10vw] font-light tracking-tighter leading-[0.85] mb-2 text-white/95 drop-shadow-sm select-none">
                {stat.prefix}
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator="."
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div
                className={`text-white text-[clamp(11px,0.9vw,15px)] font-semibold text-left md:text-right leading-tight ${stat.width}`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

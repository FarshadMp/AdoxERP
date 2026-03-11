"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Muhammad Lais",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "John Doe",
    role: "Chief Architect",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Michael Brown",
    role: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Emily Davis",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
];

export default function OurTeam() {
  return (
    <section id="team" className="bg-white py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black font-semibold tracking-widest text-xs uppercase block mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-tight tracking-tight">
              Meet the <span className="text-[var(--secondary)]">minds</span>{" "}
              <br /> behind the vision
            </h2>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-12 pb-8 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer min-w-[75vw] sm:min-w-0 snap-center sm:snap-align-none flex-shrink-0"
            >
              <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl font-normal text-black tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

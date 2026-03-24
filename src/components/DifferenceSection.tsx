"use client";

import { motion } from "framer-motion";

export default function DifferenceSection() {
  const fullText = `Anarc Constructions provides a unique, square deal cutting edge approach to construction and buildings, roads, dams, etc which sets them apart from other companies. With a focus on sustainability, Anarc combines advanced engineering processes with traditional, natural materials to create highly efficient, ergonomic, and sustainable structures. We also employ green building principles as part of our process to minimize the environmental impact of our projects and are dedicated to using energy-efficient materials and products where possible. Anarc's innovative construction techniques such as curved walls and formed steel detailing provide clients with distinctive architectural elements that are tailored to their individual needs. Ultimately, Anarc's combination of modern technology and eco-friendly practices provide customers with attractive yet durable buildings that are both cost-effective and built to last. And the qualified and experienced team delivers the best to our clients. A dedicated and qualified team of professionals ensures that clients receive only the best in terms of quality and service. Each member of our team is highly experienced, with many years of expertise in the field being an important asset to the company. Our commitment to providing performance and excellence extends to every sphere of our services, from consultation to design implementation and beyond.`;

  return (
    <section className="bg-[#1a1a1a] text-white py-24 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Graphic Element - Diagonal Line */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            stroke="white"
            strokeWidth="0.1"
          />
        </svg>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Title column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-white text-sm md:text-base font-normal uppercase tracking-wider">
              What Makes Us Different?
            </h2>
          </motion.div>

          {/* Text column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/70 text-base md:text-lg leading-relaxed md:col-span-1"
          >
            {fullText.slice(0, Math.floor(fullText.length / 2))}
          </motion.div>

          {/* Text column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg leading-relaxed md:col-span-1"
          >
            {fullText.slice(Math.floor(fullText.length / 2))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

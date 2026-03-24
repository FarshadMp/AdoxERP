import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { useState } from "react";

export default function VisionMission() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = [
    {
      title: "VISION",
      content:
        "Our vision is to offer construction service with the latest technology and value addition to our clients by a team of construction professionals committed to excellence and Providing quality and innovative services",
      icon: <Eye className="w-8 h-8 md:w-10 md:h-10" />,
      image: "/img/about/vision_bg.png",
    },
    {
      title: "MISSION",
      content:
        "To enhance and fortify quality, speed, innovation and technology into the Organizations business ventures and to be a trend setter in in novative management practices across premium infrastructure space.",
      icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
      image: "/img/about/mission_bg.png",
    },
  ];

  return (
    <section className="relative py-16 md:py-32 px-6 md:px-12 overflow-hidden min-h-[600px] flex items-center bg-white">
      {/* Global Section Background with AnimatePresence */}
      <div className="absolute inset-0 z-0 bg-white">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={data[hoveredIndex].image}
                alt="Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {data.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group p-8 md:p-16 rounded-sm border transition-all duration-500 cursor-pointer ${
                hoveredIndex === index
                  ? "border-white/20 bg-white/5 backdrop-blur-md"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex flex-col h-full">
                <div
                  className={`mb-8 transition-colors duration-500 ${
                    hoveredIndex === index ? "text-white" : "text-[#521212]"
                  }`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`text-3xl md:text-5xl font-normal tracking-tight mb-4 md:mb-8 transition-colors duration-500 ${
                    hoveredIndex === index ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm md:text-lg leading-relaxed max-w-md transition-colors duration-500 ${
                    hoveredIndex === index ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

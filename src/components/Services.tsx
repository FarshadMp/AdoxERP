"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  number: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Shipping",
    description:
      "Business Way is a full-fledged international freight forwarders established with an extensive agency network throughout the world",
    number: "01",
    image: "/img/hero/hero-1.jpg",
  },
  {
    title: "Air Freight",
    description:
      "As a one stop solution for full service provider Business Way Freight Cargo LLC offer a full range of export airfreight services...",
    number: "02",
    image: "/img/hero/hero-2.jpg",
  },
  {
    title: "Land Transportation",
    description:
      "Land Transportation Business Way operates an integrated road transport network for GCC countries regardless of whether...",
    number: "03",
    image: "/img/hero/hero-3.jpg",
  },
  {
    title: "Customs Clearing",
    description:
      "Our Customs Clearance division offers a comprehensive customs clearance service at All ocean ports and Airports...",
    number: "04",
    image: "/img/hero/hero-1.jpg",
  },
  {
    title: "International Moving",
    description:
      "With a quality of work recognized by all the leading international moving associations, Business...",
    number: "05",
    image: "/img/hero/hero-2.jpg",
  },
  {
    title: "Business way Freight",
    description:
      "Business Way Freight is freight forwarding and distribution arm of the Business Way of Group...",
    number: "06",
    image: "/img/hero/hero-3.jpg",
  },
  {
    title: "Baggage Courier",
    description:
      "If you have access baggage in airport and cannot manage to travel take advantage of our baggage courier services.",
    number: "07",
    image: "/img/hero/hero-1.jpg",
  },
  {
    title: "Sea Freight",
    description:
      "Irrespective of the size of the consignment whether LCL (Less Container Load) FCL (Full containers Load)...",
    number: "08",
    image: "/img/hero/hero-2.jpg",
  },
  {
    title: "Perishable cargo",
    description:
      "We Business way Freight Cargo is one of the leading import handling team for perishable products...",
    number: "09",
    image: "/img/hero/hero-3.jpg",
  },
  {
    title: "Warehousing & Distribution",
    description:
      "Business Way Freight is freight forwarding and distribution arm of the Business Way of Group...",
    number: "10",
    image: "/img/hero/hero-1.jpg",
  },
  {
    title: "Supply Chain Management",
    description:
      "Global supply chain is emerging as a critical success factor for manufactures and retailers...",
    number: "11",
    image: "/img/hero/hero-2.jpg",
  },
  {
    title: "Project Cargo",
    description:
      "Project cargo includes freight that is voluminous, either by weight, size or quantity...",
    number: "12",
    image: "/img/hero/hero-3.jpg",
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      if (scrollRef.current && scrollRef.current.children.length > 0) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // In some TS versions, Element doesn't have clientWidth directly accessible without casting, but HTMLDivElement does.
        const firstChild = scrollRef.current.children[0] as HTMLDivElement;
        const cardWidth = firstChild ? firstChild.clientWidth : 0;
        const gap = 24;
        const itemWidth = cardWidth + gap;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleScroll = () => {
    // Left for future scrolling logic if needed
  };

  const slideLeft = () => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const cardWidth = scrollRef.current.children[0].clientWidth;
      const gap = 24;
      const itemWidth = cardWidth + gap;
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const cardWidth = scrollRef.current.children[0].clientWidth;
      const gap = 24;
      const itemWidth = cardWidth + gap;
      scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-18 lg:py-22 px-6 md:px-14 lg:px-20 bg-white overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-4 md:gap-8">
          <div className="flex-1">
            <motion.span
              {...fadeInUp}
              className="text-[#00b8fe] font-medium tracking-wider mb-2 block"
            >
              Our Services
            </motion.span>
            <motion.h2
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight"
            >
              A market leader in <br />
              global logistics
            </motion.h2>
          </div>

          <div className="flex-1 max-w-xl">
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-slate-600 text-base leading-relaxed mt-4 md:mt-16"
            >
              Business way is a full-fledged international freight forwarders
              established with an extensive agency network throughout the world.
              In a relatively short period we have achieved remarkable success
              in both Air and Sea Freight operations.
            </motion.p>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="w-[85vw] min-w-[85vw] md:w-[calc(50%_-_12px)] md:min-w-[calc(50%_-_12px)] lg:w-[calc(25%_-_18px)] lg:min-w-[calc(25%_-_18px)] relative shrink-0 snap-start p-8 flex flex-col justify-between group cursor-pointer overflow-hidden transition-colors duration-500"
                style={{
                  clipPath:
                    "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
                }}
              >
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />

                <div className="absolute inset-0 z-10 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[#00b8fe]/90 group-hover:via-[#00b8fe]/90 group-hover:to-[#00b8fe]/90" />

                <div className="relative z-10 mb-6">
                  <span className="text-2xl font-light mb-8 block transition-colors duration-500 text-white/50 group-hover:text-white/80">
                    {"//"}
                  </span>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium tracking-tight transition-colors duration-500 text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-4 font-light transition-colors duration-500 text-white/70 group-hover:text-white/95">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-end justify-between mt-8">
                  <span className="text-6xl font-light tracking-tighter transition-colors duration-500 text-white/60 group-hover:text-white">
                    {service.number}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={slideLeft}
                className="p-3 border border-slate-200 hover:border-[#00b8fe] rounded-full transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:text-[#00b8fe]" />
              </button>

              <button
                onClick={slideRight}
                className="p-3 border border-slate-200 hover:border-[#00b8fe] rounded-full transition-colors group"
              >
                <ChevronRight className="w-5 h-5 group-hover:text-[#00b8fe]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

const clients = [
  { name: "Client 1", logo: "/img/client/cl-1.png" },
  { name: "Client 2", logo: "/img/client/cl-2.png" },
  { name: "Client 3", logo: "/img/client/cl-3.png" },
  { name: "Client 4", logo: "/img/client/cl-4.png" },
  { name: "Client 5", logo: "/img/client/cl-5.png" },
  { name: "Client 6", logo: "/img/client/cl-6.png" },
  { name: "Client 7", logo: "/img/client/cl-7.png" },
  { name: "Client 8", logo: "/img/client/cl-8.png" },
  { name: "Client 9", logo: "/img/client/cl-9.png" },
  { name: "Client 10", logo: "/img/client/cl-10.png" },
  { name: "Client 11", logo: "/img/client/cl-11.png" },
  { name: "Client 12", logo: "/img/client/cl-12.png" },
];

export default function ClientSection() {
  return (
    <section className="py-4 bg-white overflow-hidden border-t border-gray-100">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 40s linear infinite;
        }
      `,
        }}
      />

      <div className="relative flex overflow-hidden">
        <div className="flex gap-3 whitespace-nowrap animate-marquee-scroll hover:[animation-play-state:paused] py-4">
          {/* Double the list for seamless loop */}
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="transition-all duration-500 rounded-xl flex items-center justify-center group cursor-pointer border border-transparent"
            >
              <div className="relative w-45 h-20">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-cover filter grayscale rounded-xl group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

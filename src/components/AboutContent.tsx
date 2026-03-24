"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContent() {
  const text1 = `Anarc Developers is a construction company established in 2000 and based in Mukkam, Calicut. led by the highly experienced managing director Mr. Muhammad Lais. His extensive background in project management ensures all of our initiatives are completed on time and within budget without sacrificing quality or value. Also, he is an experienced and well-respected innovator in the construction industry, owning many companies like TK bricks, TK industrial, madar building materials shop, crusher, etc that provide a wide range of services related to the field. These businesses help in engineering, architecture and design, equipment installation and maintenance, project management, restoration, and repairs, as well as sustainable construction technologies. The company’s hiring of experienced and specialized personnel, modern technology, and creative problem-solving techniques to ensure that each project is carried out to a high standard has earned it a well-regarded reputation.`;

  const text2 = `Our strong team consists of well-experienced and qualified engineers, project managers, a quantity surveyor team, a drawing team, a transportation team, supervisors, and accounts team. Anarc Developers are focused on providing our clients with square deals, meaning projects are designed and constructed to meet the client’s needs and satisfaction, while also maintaining a high level of safety and efficiency. Our team of design and engineering professionals will work closely with the clients to ensure the solution they provide meets their needs. This includes taking into account the clients' budgets, scheduling requirements, and aesthetic preferences. Anarc Developers takes great pride in completing building projects to a high standard, while more than fulfilling their client’s expectations. The company’s primary goal is to ensure that every project is completed in the most efficient, cost-effective, and timely manner possible.`;

  return (
    <section className="bg-white py-20 md:py-24 px-6 md:px-12 border-b border-black/10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[350px_1fr_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Title column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-8 md:gap-12"
          >
            <h2 className="text-black text-sm md:text-base font-normal uppercase tracking-wider">
              Company origins
            </h2>
          </motion.div>

          {/* Text column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-black/80 text-sm md:text-base leading-relaxed text-pretty">
              {text1}
            </p>
          </motion.div>

          {/* Text column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-black/80 text-sm md:text-base leading-relaxed text-pretty">
              {text2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import InnerHero from "@/components/InnerHero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { newsItems } from "@/data/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <InnerHero
        title="Perspectives & Updates"
        subtitle="News"
        image="/img/hero/news-ban.png"
      />

      <section className="py-20 md:py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 gap-24 md:gap-24">
          {newsItems.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center group"
            >
              <Link
                href={`/news/${article.slug}`}
                className={`relative aspect-[16/10] overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
                  {article.category}
                </div>
              </Link>

              <div className="flex flex-col gap-6 md:gap-8">
                <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight group-hover:text-[var(--secondary)] transition-colors duration-500">
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-gray-500 text-lg leading-relaxed max-w-xl font-light">
                  {article.excerpt}
                </p>

                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center gap-4 text-black font-bold text-xs uppercase tracking-[0.2em] group/link w-fit"
                >
                  Read Article
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover/link:bg-black group-hover/link:text-white transition-all duration-500">
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    </main>
  );
}

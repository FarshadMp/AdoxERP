"use client";

import InnerHero from "@/components/InnerHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { newsItems } from "@/data/news";
import { useParams, notFound } from "next/navigation";

export default function NewsDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <InnerHero
        title={article.title}
        subtitle={article.category}
        image={article.image}
      />

      <section className="py-20 md:py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        {/* Navigation & Header Meta */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-10 mb-10 md:mb-20">
          <Link
            href="/news"
            className="flex items-center gap-4 text-[10px] uppercase font-bold text-gray-500 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to News
          </Link>

          <div className="flex items-center gap-8 text-[10px] uppercase font-bold text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-3.5 h-3.5" />
              {article.author}
            </span>
            <button className="flex items-center gap-2 hover:text-[#c9952f] transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              Share
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-xl prose-stone max-w-none prose-h1:font-light prose-h2:font-light prose-h3:font-normal prose-h3:text-[#c9952f] prose-p:text-gray-500 prose-p:leading-relaxed prose-p:font-light"
          >
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="space-y-8"
            />
          </motion.div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-15 md:mt-20 pt-16 border-t border-gray-100 flex justify-center">
          <Link
            href="/contact"
            className="bg-[#c9952f] text-white py-5 px-10 text-xs font-bold uppercase hover:bg-[#b07d24] transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            Start a conversation
          </Link>
        </div>
      </section>

    </main>
  );
}

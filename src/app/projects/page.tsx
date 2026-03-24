"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectList from "@/components/ProjectList";
import CTA from "@/components/CTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Immersive Project Showcase Hero */}
      <ProjectHero />

      {/* Project Grid with Filtering */}
      <ProjectList />

      {/* Unified Call to Action */}
      <CTA />

      <Footer />
    </main>
  );
}

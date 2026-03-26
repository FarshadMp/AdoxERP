"use client";

import ProjectHero from "@/components/ProjectHero";
import ProjectList from "@/components/ProjectList";
import CTA from "@/components/CTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black">
      
      {/* Immersive Project Showcase Hero */}
      <ProjectHero />

      {/* Project Grid with Filtering */}
      <ProjectList />

      {/* Unified Call to Action */}
      <CTA />

    </main>
  );
}

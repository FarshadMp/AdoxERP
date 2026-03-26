"use client";

import InnerHero from "@/components/InnerHero";
import AboutContent from "@/components/AboutContent";
import VisionMission from "@/components/VisionMission";
import About from "@/components/About";
import OurTeam from "@/components/OurTeam";
import DifferenceSection from "@/components/DifferenceSection";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Reusable Hero Section */}
      <InnerHero 
        title="Anarc Developers" 
        subtitle="About us" 
        image="/img/hero/about-ban.png" 
      />

      {/* Intro Content Section */}
      <AboutContent />

      {/* Stats Section */}
      <About />

      {/* Team Section */}
      <OurTeam />

      {/* Difference Section */}
      <DifferenceSection />

      {/* Vision & Mission Section */}
      <VisionMission />

      {/* CTA Section */}
      <CTA />

    </main>
  );
}

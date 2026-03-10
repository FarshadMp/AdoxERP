import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import OurProjects from "@/components/OurProjects";
import OurTeam from "@/components/OurTeam";
import News from "@/components/News";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Anarc Builders & Developers | Construction Company in Calicut",
  description:
    "Anarc Developers is a construction company established in 2000 and based in Mukkam, Calicut. Completing initiatives on time and within budget.",
  keywords: [
    "Anarc Developers",
    "Builders",
    "Developers",
    "Construction Company",
    "Calicut",
    "Mukkam",
  ],
  openGraph: {
    title: "Anarc Builders & Developers",
    description:
      "Anarc Developers is a construction company established in 2000 and based in Mukkam, Calicut.",
    type: "website",
    locale: "en_IN",
    siteName: "Anarc Developers",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <About />
      <OurServices />
      <OurTeam />
      <OurProjects />
      <Testimonials />
      <News />
      <CTA />
      <Footer />
    </main>
  );
}

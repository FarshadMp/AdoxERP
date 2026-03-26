import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the wide range of services offered by Anarc Builders & Developers, including general contracting, design-build, and construction management.",
  keywords: ["Construction Services Calicut", "Design Build Kerala", "Renovations Mukkam", "General Contracting"],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

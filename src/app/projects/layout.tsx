import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "View our portfolio of residential and commercial projects that showcase our commitment to quality, innovation, and excellence.",
  keywords: ["Anarc Projects", "Construction Portfolio Kerala", "Featured Builds Calicut", "Architecture Showcase"],
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

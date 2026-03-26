import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Gallery",
  description: "A visual journey through the exceptional builds and architectural designs of Anarc Builders & Developers.",
  keywords: ["Construction Photos Kerala", "Gallery of Builds Calicut", "Architecture Photography", "Project Visuals"],
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Stay updated with the latest news, project milestones, and industry insights from Anarc Builders & Developers.",
  keywords: ["Construction News Kerala", "Anarc Developers Updates", "Industry Blog Calicut", "Company News"],
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

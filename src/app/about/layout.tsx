import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Anarc Builders & Developers. Since 2000, we've the highest standards in construction and urban development in Kerala.",
  keywords: ["Anarc Developers History", "About Anarc Builders", "Construction Kerala", "Builders Vision"],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

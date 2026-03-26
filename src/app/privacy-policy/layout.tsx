import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how Anarc Builders & Developers handles and protects your personal data.",
  keywords: ["Anarc Privacy Policy", "Data Protection", "Privacy Standards"],
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Anarc Builders & Developers for your next construction project. We're here to help bring your vision to life.",
  keywords: ["Contact Builders Calicut", "Constructon Company Location Mukkam", "Inquire Anarc Developers", "Customer Support"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

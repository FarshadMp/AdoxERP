import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Including all relevant weights for flexibility
});

export const metadata: Metadata = {
  title: {
    default: "IntelliERP | AI-Driven ERP for Modern SMEs",
    template: "%s | IntelliERP",
  },
  description:
    "IntelliERP is a next-generation, cloud-native ERP platform that combines business operations, automation, and AI-driven insights into a single unified system. Designed specifically for small and medium-sized enterprises, IntelliERP enables businesses to operate with real-time visibility, reduced complexity, and intelligent decision-making.",
  keywords: [
    "IntelliERP",
    "AI ERP",
    "Cloud ERP",
    "Business Automation",
    "Enterprise Resource Planning",
    "SME Solutions",
    "Intelligent Decision-Making",
    "Cloud-Native ERP",
  ],
  authors: [{ name: "IntelliERP" }],
  creator: "IntelliERP",
  publisher: "IntelliERP",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "IntelliERP | AI-Driven ERP for Modern SMEs",
    description:
      "IntelliERP is a next-generation, cloud-native ERP platform that combines business operations, automation, and AI-driven insights into a single unified system.",
    url: "https://intellierp.com", // Assuming new domain or should I omit? I'll use a placeholder or leave it as requested.
    siteName: "IntelliERP",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntelliERP",
    description: "The next-generation, AI-driven ERP platform for modern SMEs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AosProvider } from "@/components/AosProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Including all relevant weights for flexibility
});

export const metadata: Metadata = {
  title: {
    default: "AdoxERP — The Ultimate Cloud ERP System in Saudi Arabia",
    template: "%s | AdoxERP",
  },
  description:
    "AdoxERP is an AI-powered, ZATCA-compliant cloud ERP system for businesses in Riyadh, Jeddah & Dammam. Manage sales, accounting, HR, inventory, and more — all in one platform.",
  keywords: [
    "cloud ERP system Saudi Arabia",
    "AI ERP software Riyadh",
    "best ERP for business KSA",
    "ZATCA compliant ERP",
    "Fatoorah e-invoicing software",
    "ERP system Jeddah",
    "ERP system Dammam",
    "manufacturing ERP Saudi Arabia",
    "accounting software KSA",
    "inventory management Saudi Arabia",
    "how to manage a business in Saudi Arabia",
    "what is the best ERP for SMEs in Saudi Arabia",
    "which ERP is ZATCA compliant",
    "how does ZATCA e-invoicing work",
    "can ERP software use AI",
    "what are AI agents in business software",
    "is there an Arabic ERP system",
  ],
  authors: [{ name: "AdoxERP" }],
  creator: "AdoxERP",
  publisher: "AdoxERP",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "AdoxERP — The Ultimate Cloud ERP System in Saudi Arabia",
    description:
      "AdoxERP is an AI-powered, ZATCA-compliant cloud ERP system for businesses in Riyadh, Jeddah & Dammam. Manage sales, accounting, HR, inventory, and more — all in one platform.",
    url: "https://adoxerp.com",
    siteName: "AdoxERP",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdoxERP — The Ultimate Cloud ERP System in Saudi Arabia",
    description: "AdoxERP is an AI-powered, ZATCA-compliant cloud ERP system for businesses in Riyadh, Jeddah & Dammam.",
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
        <AosProvider>
          <Header />
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}

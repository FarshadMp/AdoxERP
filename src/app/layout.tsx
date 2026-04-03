import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "B-Freight | Premium Logistics Solutions",
    template: "%s | B-Freight",
  },
  description:
    "B-Freight (Business Way) is a full-fledged international freight forwarder with an extensive agency network throughout the world. We specialize in Air and Sea Freight operations with a clear focus on complete customer satisfaction.",
  keywords: [
    "B-Freight",
    "Business Way",
    "International Freight Forwarder",
    "Air Freight",
    "Sea Freight",
    "Logistics",
    "Transportation",
    "Dubai Freight",
  ],
  authors: [{ name: "B-Freight" }],
  creator: "B-Freight",
  publisher: "B-Freight",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "B-Freight Logistics",
    description: "B-Freight is a full-fledged international freight forwarder. We commit ourselves to complete customer satisfaction in every aspect of the service we offer.",
    url: "https://bfreight.com",
    siteName: "B-Freight",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B-Freight",
    description: "B-Freight is a full-fledged international freight forwarder. We commit ourselves to complete customer satisfaction in every aspect of the service we offer.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

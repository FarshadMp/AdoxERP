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
    default: "Anarc Builders & Developers | Premium Construction in Calicut",
    template: "%s | Anarc Builders & Developers",
  },
  description:
    "Anarc Builders & Developers is a premier construction company in Mukkam, Calicut, Kerala. Specializing in high-quality residential and commercial projects with a focus on excellence and integrity since 2000.",
  keywords: [
    "Anarc Developers",
    "Anarc Builders",
    "Construction Company Calicut",
    "Builders in Mukkam",
    "Kerala Builders",
    "Architectural Excellence",
    "Construction Services",
    "Premium Developers India",
  ],
  authors: [{ name: "Anarc Developers" }],
  creator: "Anarc Developers",
  publisher: "Anarc Developers",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Anarc Builders & Developers",
    description: "Building excellence with integrity since 2000. Premium construction services in Calicut, Kerala.",
    url: "https://anarcdevelopers.com",
    siteName: "Anarc Builders & Developers",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anarc Builders & Developers",
    description: "Building excellence with integrity since 2000. Premium construction services in Calicut, Kerala.",
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

"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // Hide footer on the contact page
  if (pathname === "/contact") {
    return null;
  }

  return <Footer />;
}

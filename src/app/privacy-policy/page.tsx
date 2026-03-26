"use client";

import InnerHero from "@/components/InnerHero";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information Collection",
      content:
        "We collect information from you when you visit our site, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address or phone number.",
    },
    {
      title: "2. Information Usage",
      content:
        "Any of the information we collect from you may be used in one of the following ways: to personalize your experience, to improve our website, to improve customer service, to process transactions, and to send periodic emails.",
    },
    {
      title: "3. Information Protection",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.",
    },
    {
      title: "4. Cookies",
      content:
        "Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information. We use cookies to help us remember and process the items in your shopping cart and understand and save your preferences for future visits.",
    },
    {
      title: "5. Third Party Disclosure",
      content:
        "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
    },
    {
      title: "6. Online Privacy Policy Only",
      content:
        "This online privacy policy applies only to information collected through our website and not to information collected offline.",
    },
    {
      title: "7. Your Consent",
      content: "By using our site, you consent to our website's privacy policy.",
    },
    {
      title: "8. Changes to our Privacy Policy",
      content:
        "If we decide to change our privacy policy, we will post those changes on this page.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <InnerHero
        title="Privacy Policy"
        subtitle="Legal Information"
        image="/img/hero/about-ban.png" 
      />

      <section className="py-20 md:py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="prose prose-lg max-w-none"
        >
          <p className="text-gray-600 mb-12 text-lg font-light leading-relaxed">
            At Anarc Builders & Developers PVT. LTD., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website.
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-2xl md:text-3xl font-light text-[#c9952f] tracking-tight border-b border-gray-100 pb-4">
                  {section.title}
                </h2>
                <p className="text-gray-500 leading-relaxed font-light">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 pt-12 border-t border-gray-200"
          >
            <p className="text-gray-400 text-sm font-light italic text-center">
              Last updated: March 26, 2024
            </p>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

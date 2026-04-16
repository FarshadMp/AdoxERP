import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for AdoxERP — Personal Data Protection Law (PDPL) compliance and data security in Saudi Arabia.",
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-[3rem] font-medium tracking-tight text-primary-dark mb-8 leading-[1.1]">
            Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none space-y-8 text-secondary-dark text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                1. Introduction
              </h2>
              <p>
                AdoxERP ("we", "our", or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our ERP platform, particularly in compliance with
                Saudi Arabia's Personal Data Protection Law (PDPL).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                2. Data Residency & Sovereignty
              </h2>
              <p>
                In accordance with the regulations of the Kingdom of Saudi
                Arabia, AdoxERP ensures that all sensitive business data and
                personal information processed through our cloud infrastructure
                are stored within secure data centers located in Saudi Arabia.
                We prioritize data residency to ensure full compliance with
                national security and privacy standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                3. Information We Collect
              </h2>
              <p>We may collect information in several ways:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone
                  number, and professional details provided during registration
                  or consultation.
                </li>
                <li>
                  <strong>Business Data:</strong> Financial records, inventory
                  details, employee information, and other operations data
                  processed through the ERP.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  platform, including IP addresses, browser types, and access
                  times.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                4. How We Use Your Information
              </h2>
              <p>We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To provide and maintain our Service.</li>
                <li>
                  To comply with legal obligations, including ZATCA e-invoicing
                  requirements.
                </li>
                <li>To process transactions and manage customer accounts.</li>
                <li>To provide customer support and technical assistance.</li>
                <li>
                  To improve and optimize our platform through AI-driven
                  insights.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                5. Data Sharing & Disclosure
              </h2>
              <p>
                We do not sell your personal data. We may share information only
                with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Government Authorities:</strong> When required for
                  regulatory compliance (e.g., ZATCA audits).
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party partners who
                  help us run our platform (e.g., cloud hosting in KSA).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                6. Security
              </h2>
              <p>
                We implement bank-level encryption, multi-factor authentication
                (MFA), and secure access controls to protect your data. However,
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                protection practices in Saudi Arabia, please contact us at{" "}
                <a
                  href="mailto:privacy@adoxerp.com"
                  className="text-primary hover:underline"
                >
                  privacy@adoxerp.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

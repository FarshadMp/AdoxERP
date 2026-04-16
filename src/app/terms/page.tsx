import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for AdoxERP — Usage terms, licensing, and compliance with Saudi Arabian business regulations.",
};

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-[3rem] font-medium tracking-tight text-primary-dark mb-8 leading-[1.1]">
            Terms of Service
          </h1>

          <div className="prose prose-slate max-w-none space-y-8 text-secondary-dark text-lg leading-relaxed">
            <p className="font-medium text-primary-dark">
              Last Updated: April 2026
            </p>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using AdoxERP, you agree to be bound by these
                Terms of Service and all applicable laws and regulations in the
                Kingdom of Saudi Arabia. If you do not agree with any of these
                terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                2. Use License
              </h2>
              <p>
                Permission is granted to use AdoxERP according to your
                subscription plan. This is the grant of a license, not a
                transfer of title, and under this license, you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Modify or copy the software or its source code.</li>
                <li>
                  Use the platform for any unlawful purpose as defined by Saudi
                  Law.
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained in AdoxERP.
                </li>
                <li>
                  Transfer the access to another person or "mirror" the
                  materials on any other server without authorization.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                3. Subscription & Billing
              </h2>
              <p>
                AdoxERP operates on a subscription-based model. By subscribing,
                you agree to provide accurate billing information and pay all
                fees associated with your chosen plan. All payments must be made
                in Saudi Riyal (SAR) unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                4. Compliance & Regulatory Requirements
              </h2>
              <p>
                AdoxERP provides tools to assist with ZATCA e-invoicing and VAT
                compliance. However, users are ultimately responsible for
                ensuring that their business practices, data entry, and
                financial reporting align with current Saudi Arabian regularions
                and tax laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                In no event shall AdoxERP or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use AdoxERP, even if AdoxERP has been
                notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                6. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of the Kingdom of Saudi Arabia and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in Riyadh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                7. Modifications
              </h2>
              <p>
                AdoxERP may revise these terms of service for its website at any
                time without notice. By using this website you are agreeing to
                be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                8. Contact Details
              </h2>
              <p>
                If you have any questions regarding these Terms, please contact
                us at{" "}
                <a
                  href="mailto:legal@adoxerp.com"
                  className="text-primary hover:underline"
                >
                  legal@adoxerp.com
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

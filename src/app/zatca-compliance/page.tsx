import { Metadata } from "next";
import ZatcaComplianceClient from "./ZatcaComplianceClient";

export const metadata: Metadata = {
  title: "ZATCA E-Invoicing Compliance Saudi Arabia | Phase 1 & Phase 2 | AdoxERP",
  description:
    "AdoxERP is fully certified for ZATCA Fatoorah Phase 1 & Phase 2 e-invoicing in Saudi Arabia. Automatic XML generation, real-time submission, QR codes & full audit trail — zero manual steps.",
  keywords: [
    "ZATCA e-invoicing Saudi Arabia",
    "Fatoorah Phase 2",
    "ZATCA certified ERP",
    "e-invoicing software KSA",
    "ZATCA compliance Riyadh",
    "Phase 2 integration",
    "ZATCA QR code invoice",
    "VAT invoice Saudi Arabia",
  ],
};

export default function ZatcaCompliancePage() {
  return <ZatcaComplianceClient />;
}

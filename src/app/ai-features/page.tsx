import { Metadata } from "next";
import AiFeaturesClient from "./AiFeaturesClient";

export const metadata: Metadata = {
  title: "AI-Powered ERP Software Saudi Arabia | AdoxERP Artificial Intelligence Features",
  description:
    "AdoxERP uses AI to transform how Saudi businesses operate — chatbot, anomaly detection, predictive analytics, AI agents & intelligent automation. Built for KSA. Available in Arabic.",
  keywords: [
    "AI ERP software Saudi Arabia",
    "artificial intelligence ERP KSA",
    "AI business software Riyadh",
    "predictive analytics ERP Saudi Arabia",
    "AI chatbot ERP",
    "AI automation business KSA",
    "smart ERP Jeddah",
  ],
};

export default function AiFeaturesPage() {
  return <AiFeaturesClient />;
}

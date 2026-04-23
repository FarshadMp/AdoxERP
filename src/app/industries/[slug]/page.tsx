import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesData } from "@/data/industries";
import IndustryPageClient from "@/components/IndustryPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ResolvedParams = await params;
  const slug = ResolvedParams.slug;
  const industry = industriesData[slug];

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords.join(", "),
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: "website",
    },
  };
}

export default async function Page({ params }: Props) {
  const ResolvedParams = await params;
  const slug = ResolvedParams.slug;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return <IndustryPageClient industry={industry} />;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

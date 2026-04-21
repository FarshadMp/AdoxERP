import { Metadata } from "next";
import { notFound } from "next/navigation";
import { modulesData } from "@/data/modules";
import ModulePageClient from "@/components/ModulePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ResolvedParams = await params;
  const slug = ResolvedParams.slug;
  const module = modulesData[slug];

  if (!module) {
    return {
      title: "Module Not Found",
    };
  }

  return {
    title: module.metaTitle,
    description: module.metaDescription,
    keywords: module.keywords,
    openGraph: {
      title: module.metaTitle,
      description: module.metaDescription,
      type: "website",
    },
  };
}

export default async function Page({ params }: Props) {
  const ResolvedParams = await params;
  const slug = ResolvedParams.slug;
  const module = modulesData[slug];

  if (!module) {
    notFound();
  }

  return <ModulePageClient module={module} />;
}

export async function generateStaticParams() {
  return Object.keys(modulesData).map((slug) => ({
    slug,
  }));
}

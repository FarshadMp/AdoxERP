import { projects } from "@/data/projects";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.title,
    openGraph: {
      title: `${project.name} | Anarc Builders & Developers`,
      description: project.title,
      images: [project.mainImage],
    },
  };
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { newsItems } from "@/data/news";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "News Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Anarc News`,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

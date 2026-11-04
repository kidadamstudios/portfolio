import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import WorkGallery from "@/components/WorkGallery";
import { categories, getCategory } from "@/lib/categories";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.folderLabel} — Adrian Dayao`,
    description: category.subtext,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <article className="mx-auto max-w-5xl px-6 py-16 md:px-10">
      <Reveal>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to work
        </Link>
      </Reveal>

      <Reveal delay={0.05} className="mt-8 max-w-2xl">
        <div className="h-1 w-16 rounded-full bg-accent" />
        <p className="mt-6 font-mono text-sm text-accent">
          {category.folderLabel}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
          {category.headline}
        </h1>
        <p className="mt-4 text-lg text-muted">{category.subtext}</p>
      </Reveal>

      <div className="mt-14">
        <WorkGallery
          images={category.images}
          projects={category.projects}
          comparisons={category.comparisons}
          layout={category.layout}
        />
      </div>

      <Reveal delay={0.1} className="mt-20 border-t border-border pt-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to all work
        </Link>
      </Reveal>
    </article>
  );
}

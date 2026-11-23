import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import WorkGallery from "@/components/WorkGallery";
import CategorySidebar from "@/components/CategorySidebar";
import BrandHashFocus from "@/components/BrandHashFocus";
import { categories, getBrands, getCategory } from "@/lib/categories";

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
  const items = categories.map((c) => ({ category: c, brands: getBrands(c) }));

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[230px_1fr] lg:gap-14">
      <BrandHashFocus />
      <CategorySidebar items={items} activeSlug={category.slug} />
    <article className="min-w-0">
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
        <div className="pill-primary h-1 w-16 rounded-full" />
        <p className="mt-6 font-mono text-sm text-accent">
          {category.folderLabel}
        </p>
        <h1 className="mt-2 font-serif text-5xl tracking-tight md:text-6xl">
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
    </div>
  );
}

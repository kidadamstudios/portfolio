import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FolderCard from "@/components/FolderCard";
import CategorySidebar from "@/components/CategorySidebar";
import GradientHeadline from "@/components/GradientHeadline";
import { categories, coverShape, folderThumbs, getBrands } from "@/lib/categories";
import { headlines } from "@/lib/headlines";

export const metadata: Metadata = {
  title: "Work — Adrian Dayao",
  description: "Creative direction portfolio by Adrian Dayao.",
};

export default function WorkPage() {
  const items = categories.map((category) => ({ category, brands: getBrands(category) }));

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[230px_1fr] lg:gap-14">
      <CategorySidebar items={items} />

      <div className="min-w-0">
        <Reveal>
          <p className="font-mono text-sm text-accent">Work</p>
          <h1 className="mt-3 font-serif text-5xl tracking-tight md:text-6xl">
            <GradientHeadline {...headlines.work} />
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Creative work, organized by category — pick one to see the brands
            behind it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map(({ category, brands }, i) => (
            <FolderCard
              key={category.slug}
              category={category}
              brands={brands}
              thumbs={folderThumbs(category)}
              shape={coverShape(category)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

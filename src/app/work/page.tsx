import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FolderCard from "@/components/FolderCard";
import GradientHeadline from "@/components/GradientHeadline";
import { categories } from "@/lib/categories";
import { headlines } from "@/lib/headlines";

export const metadata: Metadata = {
  title: "Work — Adrian Dayao",
  description: "Creative direction portfolio by Adrian Dayao.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
      <Reveal>
        <p className="font-mono text-sm text-accent">Work</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          <GradientHeadline {...headlines.work} />
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Creative work, organized by category — pick one to see examples of
          the work.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {categories.map((category, i) => (
          <FolderCard key={category.slug} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import FolderCard from "@/components/FolderCard";
import { categories, coverShape, folderThumbs, getBrands } from "@/lib/categories";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-accent">Portfolio</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
              Browse by category.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden shrink-0 text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            View all &rarr;
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((category, i) => (
            <FolderCard
              key={category.slug}
              category={category}
              brands={getBrands(category)}
              thumbs={folderThumbs(category)}
              shape={coverShape(category)}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32 md:px-10">
        <Reveal className="glass flex flex-col items-start gap-6 rounded-[28px] p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Have a product that needs to sell?
            </h2>
            <p className="mt-2 max-w-md text-muted">
              I&apos;m always open to talking through new listings, brand launches, campaigns, or refreshes.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 pill-primary rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
          </Link>
        </Reveal>
      </section>
    </>
  );
}

import Link from "next/link";
import type { BrandSummary, Category } from "@/lib/categories";

// "Browse by category" as a sticky side menu on pages other than Home. The
// current category is highlighted and lists its brands as jump links.
export default function CategorySidebar({
  items,
  activeSlug,
}: {
  items: { category: Category; brands: BrandSummary[] }[];
  activeSlug?: string;
}) {
  return (
    <aside className="glass self-start rounded-3xl p-3.5 pt-5 lg:sticky lg:top-28">
      <p className="px-3 pb-3 font-mono text-xs text-accent">Browse by category</p>
      <nav className="flex flex-col gap-0.5">
        {items.map(({ category, brands }) => {
          const active = category.slug === activeSlug;
          return (
            <div key={category.slug}>
              <Link
                href={`/work/${category.slug}/`}
                className={`flex items-center justify-between gap-3 rounded-full px-3.5 py-2.5 text-sm transition-colors ${
                  active ? "pill-primary font-medium" : "text-muted hover:bg-accent-soft hover:text-foreground"
                }`}
              >
                {category.folderLabel}
                <span className="text-xs opacity-70">{brands.length}</span>
              </Link>
              {active && (
                <div className="my-1.5 ml-5 flex flex-col border-l border-border pl-3">
                  {brands.map((b) => (
                    <a
                      key={b.slug}
                      href={`#${b.slug}`}
                      className="rounded-md px-2 py-1.5 text-[13px] text-dim transition-colors hover:text-accent-light"
                    >
                      {b.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

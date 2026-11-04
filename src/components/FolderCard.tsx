"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Folder, ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/categories";

export default function FolderCard({
  category,
  index = 0,
}: {
  category: Category;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${category.slug}`}
        className="group relative block overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        />
        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-accent transition-colors group-hover:border-accent/40">
              <Folder size={20} />
            </span>
            <h3 className="text-xl font-semibold tracking-tight">
              {category.folderLabel}
            </h3>
          </div>
          <ArrowUpRight
            className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            size={20}
          />
        </div>
        <p className="relative mt-4 max-w-md text-sm text-muted">
          {category.headline}
        </p>
      </Link>
    </motion.div>
  );
}

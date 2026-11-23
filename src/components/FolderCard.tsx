"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import type { BrandSummary, Category } from "@/lib/categories";
import { asset } from "@/lib/asset";
import BrandPicker from "@/components/BrandPicker";

const thumbAspect = {
  square: "aspect-square",
  wide: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
};

export default function FolderCard({
  category,
  brands,
  thumbs,
  shape,
  index = 0,
}: {
  category: Category;
  brands: BrandSummary[];
  thumbs: string[];
  shape: "square" | "wide" | "portrait";
  index?: number;
}) {
  const [open, setOpen] = useState(false);
  const unit = category.slug === "app-design" ? "apps" : "brands";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="glass group relative block w-full overflow-hidden rounded-3xl p-6 text-left transition-colors hover:border-border-strong hover:bg-surface-hover"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
          />
          <div className="relative grid grid-cols-3 gap-2.5">
            {thumbs.map((src) => (
              <div
                key={src}
                className={`relative ${thumbAspect[shape]} overflow-hidden rounded-xl border border-border bg-surface`}
              >
                <Image
                  src={asset(src)}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 15vw, 30vw"
                  className={`object-cover ${shape === "wide" ? "object-top" : ""}`}
                />
              </div>
            ))}
          </div>
          <div className="relative mt-5 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="pill-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <Folder size={20} />
              </span>
              <h3 className="font-serif text-2xl tracking-tight">
                {category.folderLabel}
              </h3>
            </div>
            <span className="shrink-0 rounded-full border border-border-strong bg-accent-soft px-3 py-1 text-xs text-accent-light">
              {brands.length} {unit}
            </span>
          </div>
          <p className="relative mt-4 text-sm text-muted">{category.headline}</p>
        </button>
      </motion.div>

      <BrandPicker
        open={open}
        onClose={() => setOpen(false)}
        category={category}
        brands={brands}
        shape={shape}
      />
    </>
  );
}

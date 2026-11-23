"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { BrandSummary, Category } from "@/lib/categories";
import { asset } from "@/lib/asset";

const roundBtn =
  "glass h-10 w-10 place-items-center rounded-full transition-colors hover:border-border-strong";

const coverAspect = {
  square: "aspect-square",
  wide: "aspect-[16/11]",
  portrait: "aspect-[4/5]",
};

// Popup carousel listing the brands in a category. Picking one goes to that
// brand's section on the category page (/work/<category>/#<brand>).
export default function BrandPicker({
  open,
  onClose,
  category,
  brands,
  shape,
}: {
  open: boolean;
  onClose: () => void;
  category: Category;
  brands: BrandSummary[];
  shape: "square" | "wide" | "portrait";
}) {
  const track = useRef<HTMLDivElement>(null);
  const unit = category.slug === "app-design" ? "apps" : "brands";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  const scroll = (dir: number) =>
    track.current?.scrollBy({ left: dir * 276, behavior: "smooth" });

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#050912]/60 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${category.folderLabel} brands`}
            className="w-full max-w-5xl rounded-[28px] border border-border-strong bg-gradient-to-b from-[#16223a]/95 to-[#0c1322]/95 py-7 shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
            initial={{ y: 16, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-5 px-6 md:px-8">
              <div>
                <p className="font-mono text-xs text-accent">{category.folderLabel}</p>
                <h2 className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">
                  {unit === "apps" ? "Apps I've designed for" : "Brands I've worked with"}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted">{category.subtext}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" aria-label="Previous" onClick={() => scroll(-1)} className={`${roundBtn} hidden sm:grid`}>
                  <ChevronLeft size={18} />
                </button>
                <button type="button" aria-label="Next" onClick={() => scroll(1)} className={`${roundBtn} hidden sm:grid`}>
                  <ChevronRight size={18} />
                </button>
                <button type="button" aria-label="Close" onClick={onClose} className={`${roundBtn} grid`}>
                  <X size={18} />
                </button>
              </div>
            </div>

            <div
              ref={track}
              className="flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 pt-6 md:scroll-px-8 [scrollbar-width:none] md:px-8 [&::-webkit-scrollbar]:hidden"
            >
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/work/${category.slug}/#${b.slug}`}
                  onClick={onClose}
                  className="glass group w-60 shrink-0 snap-start rounded-[22px] p-3 pb-5 transition hover:-translate-y-1 hover:border-border-strong hover:bg-surface-hover md:w-64"
                >
                  <div className={`relative ${coverAspect[shape]} overflow-hidden rounded-2xl`}>
                    <Image
                      src={asset(b.cover)}
                      alt=""
                      fill
                      sizes="256px"
                      className={`object-cover ${shape === "wide" ? "object-top" : ""}`}
                    />
                  </div>
                  <h3 className="mx-1.5 mt-3.5 font-serif text-xl leading-tight">{b.name}</h3>
                  {b.summary && (
                    <p className="mx-1.5 mt-1.5 text-[13px] leading-snug text-muted">{b.summary}</p>
                  )}
                  <span className="mx-1.5 mt-3 inline-flex items-center gap-1 text-[13px] text-accent-light">
                    Open {b.name} <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 px-6 pt-4 text-[13px] text-dim md:px-8">
              <span>
                {brands.length} {unit} · pick one to jump to its work
              </span>
              <Link
                href={`/work/${category.slug}/`}
                onClick={onClose}
                className="text-accent-light hover:underline"
              >
                View all in this category →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

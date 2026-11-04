"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Amazon's Brand Story module keeps one fixed background while the cards on
// top of it cycle. Each `frames` entry is a full screenshot of that same
// background at a different card state — since the background is identical
// across frames, crossfading between them reads as "only the content moves."
export default function BrandStoryCarousel({ frames }: { frames: string[] }) {
  const [active, setActive] = useState(0);
  const count = frames.length;

  const go = (delta: number) => setActive((i) => (i + delta + count) % count);

  return (
    <div className="w-full">
      <div className="relative aspect-[1460/625] w-full overflow-hidden rounded-xl border border-border bg-surface">
        {frames.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover transition-opacity duration-700 ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {frames.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show card ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

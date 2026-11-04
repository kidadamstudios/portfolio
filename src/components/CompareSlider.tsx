"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal, ImageIcon } from "lucide-react";
import { asset } from "@/lib/asset";

type Side = {
  src?: string;
  label: string;
};

export default function CompareSlider({
  before,
  after,
  initial = 50,
}: {
  before: Side;
  after: Side;
  /** Starting position of the divider, 0-100. 100 = fully "before". */
  initial?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initial);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    updateFromClientX(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
      className="relative aspect-square w-full touch-none select-none overflow-hidden rounded-xl border border-border bg-surface"
    >
      {/* Base layer: after */}
      <ImageOrPlaceholder src={after.src} />

      {/* Top layer: before, clipped to reveal `after` underneath */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ImageOrPlaceholder src={before.src} />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-xs backdrop-blur-sm">
        {before.label}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-accent/30 bg-background/70 px-3 py-1 text-xs text-accent backdrop-blur-sm">
        {after.label}
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/70"
        style={{ left: `${position}%` }}
      />
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Comparison slider between ${before.label} and ${after.label}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/20 bg-foreground text-background shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-accent"
        style={{ left: `${position}%` }}
      >
        <MoveHorizontal size={18} />
      </div>
    </div>
  );
}

function ImageOrPlaceholder({ src }: { src?: string }) {
  if (!src) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,var(--accent-soft),transparent_60%)] text-muted">
        <ImageIcon size={22} className="text-accent/50" />
        <span className="text-xs">Add work sample</span>
      </div>
    );
  }
  return (
    <Image
      src={asset(src)}
      alt=""
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      className="object-cover"
    />
  );
}

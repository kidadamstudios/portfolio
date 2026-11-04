import Image from "next/image";
import { ImageIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import CompareSlider from "@/components/CompareSlider";
import BrandStoryCarousel from "@/components/BrandStoryCarousel";
import type { ComparisonSample, WorkProject } from "@/lib/categories";

export default function WorkGallery({
  images,
  projects,
  comparisons,
  layout = "grid",
}: {
  images: string[];
  // Work grouped by client/brand, each rendered as its own labeled section.
  projects?: WorkProject[];
  // When provided (even as an empty array), the category is shown as
  // before/after comparison sliders instead of an image grid.
  comparisons?: ComparisonSample[];
  // "grid": square-cropped tiles (product/lifestyle shots).
  // "pages": full-height, uncropped previews (tall page screenshots).
  // "carousel": crossfading card carousel over a fixed background.
  layout?: "grid" | "pages" | "carousel";
}) {
  if (comparisons) {
    const samples = comparisons.length > 0 ? comparisons : [null];

    return (
      <div className="grid gap-10 md:grid-cols-2">
        {samples.map((sample, i) => (
          <Reveal key={i} delay={i * 0.08} y={16}>
            {sample?.name && (
              <p className="mb-3 text-sm font-medium text-foreground/80">
                {sample.name}
              </p>
            )}
            <CompareSlider
              before={{
                src: sample?.before,
                label: sample?.beforeLabel ?? "Normal",
              }}
              after={{
                src: sample?.after,
                label: sample?.afterLabel ?? "CTR Hack",
              }}
            />
          </Reveal>
        ))}
      </div>
    );
  }

  if (projects) {
    const groups = projects.length > 0 ? projects : [{ name: "", images: [] }];

    return (
      <div className="space-y-16">
        {groups.map((project, gi) => (
          <div key={project.name || gi}>
            {project.name && (
              <Reveal delay={gi * 0.05}>
                <h2 className="text-lg font-medium">{project.name}</h2>
              </Reveal>
            )}
            <div className="mt-5">
              {layout === "carousel" ? (
                <CarouselOrPlaceholder images={project.images} />
              ) : layout === "pages" ? (
                <PageStrip images={project.images} offset={gi} />
              ) : (
                <ImageGrid images={project.images} offset={gi} />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (layout === "carousel") return <CarouselOrPlaceholder images={images} />;
  return layout === "pages" ? (
    <PageStrip images={images} />
  ) : (
    <ImageGrid images={images} />
  );
}

function CarouselOrPlaceholder({ images }: { images: string[] }) {
  if (images.length === 0) {
    return (
      <div className="flex aspect-[1460/625] w-full flex-col items-center justify-center gap-2 rounded-xl border border-border bg-[radial-gradient(circle_at_30%_20%,var(--accent-soft),transparent_60%)] text-muted">
        <ImageIcon size={22} className="text-accent/50" />
        <span className="text-xs">Add work sample</span>
      </div>
    );
  }
  return <BrandStoryCarousel frames={images} />;
}

// Full-height, uncropped previews for tall page screenshots (A+ Content,
// Brand Story, Brand Store — typically a desktop + mobile pair per project).
function PageStrip({ images, offset = 0 }: { images: string[]; offset?: number }) {
  const tiles = images.length > 0 ? images : Array.from({ length: 2 });

  return (
    <div className="flex flex-wrap items-start gap-5">
      {tiles.map((src, i) => (
        <Reveal key={i} delay={(offset + i) * 0.05} y={16}>
          <div className="h-[560px] max-h-[70vh] overflow-hidden rounded-xl border border-border bg-surface">
            {typeof src === "string" ? (
              // eslint-disable-next-line @next/next/no-img-element -- natural aspect ratio, unknown dimensions
              <img src={src} alt="" className="h-full w-auto object-contain" />
            ) : (
              <div className="flex h-full w-[280px] flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,var(--accent-soft),transparent_60%)] text-muted">
                <ImageIcon size={22} className="text-accent/50" />
                <span className="text-xs">Add work sample</span>
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ImageGrid({ images, offset = 0 }: { images: string[]; offset?: number }) {
  // Show real images when available, otherwise placeholder tiles so the
  // layout is easy to preview before work samples are added.
  const tiles = images.length > 0 ? images : Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {tiles.map((src, i) => (
        <Reveal key={i} delay={(offset + i) * 0.04} y={16}>
          <div className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-surface">
            {typeof src === "string" ? (
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,var(--accent-soft),transparent_60%)] text-muted">
                <ImageIcon size={22} className="text-accent/50" />
                <span className="text-xs">Add work sample</span>
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export type ComparisonSample = {
  name?: string; // client/brand name shown above the slider
  slug?: string; // anchor id on the category page, e.g. /work/main-images#holy-cow
  summary?: string; // one-liner shown in the brand picker popup
  // Paths to the two versions, e.g. "/work/main-images/holy-cow/normal.jpg".
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export type WorkProject = {
  name: string; // client/brand name shown as a heading
  slug?: string; // anchor id on the category page; defaults to a slug of `name`
  summary?: string; // one-liner shown in the brand picker popup
  images: string[];
  // Tile shape in grid layouts. Defaults to "square"; use "portrait" for 4:5
  // posts (e.g. 1080x1350 Instagram) so they aren't cropped.
  aspect?: "square" | "portrait";
};

export type Category = {
  slug: string;
  folderLabel: string; // short label used on the folder/button
  headline: string;
  subtext: string;
  // Flat placeholder/fallback gallery — only used when `projects` isn't set.
  // Leave empty and placeholder tiles will render instead until real work is added.
  images: string[];
  // Work grouped by client/brand, shown as labeled sections of image grids.
  projects?: WorkProject[];
  // For categories shown as before/after comparison sliders (e.g. Main Images:
  // normal version vs. a CTR-optimized version) instead of an image grid.
  comparisons?: ComparisonSample[];
  // "grid" (default): square-cropped tiles, good for product/lifestyle shots.
  // "pages": full-height, uncropped previews for tall page screenshots
  // (A+ Content, Brand Store desktop/mobile layouts).
  // "carousel": crossfading card carousel over a fixed background, one per
  // project (Brand Story — Amazon keeps one background while cards cycle).
  layout?: "grid" | "pages" | "carousel";
};

// Edit this list to add, remove, reorder, or update your portfolio categories.
export const categories: Category[] = [
  {
    slug: "main-images",
    folderLabel: "Main Images",
    headline: "Make the First Impression Count",
    subtext:
      "Amazon-compliant hero images designed to capture attention, showcase the product clearly, and maximize click-through potential.",
    images: [],
    comparisons: [
      {
        name: "Holy Cow — Whipped Tallow Balm",
        slug: "holy-cow",
        summary: "Whipped tallow balm — a plain jar shot rebuilt into an open-jar, ingredient-led hero.",
        before: "/work/main-images/holy-cow/normal.jpg",
        after: "/work/main-images/holy-cow/ctr-hack.jpg",
      },
      {
        name: "SANO — Maxima Ultra Concentrated Fabric Softener",
        slug: "sano-maxima",
        summary: "Ultra-concentrated fabric softener with a richer, ribboned pack render.",
        before: "/work/main-images/sano-maxima/normal.jpg",
        after: "/work/main-images/sano-maxima/ctr-hack.jpg",
      },
      {
        name: "Sunglass Monsters — Fit Over Glasses Goggles",
        slug: "sunglass-monsters",
        summary: "Fit-over-glasses goggles paired with their branded pouch.",
        before: "/work/main-images/sunglass-monsters/normal.jpg",
        after: "/work/main-images/sunglass-monsters/ctr-hack.jpg",
      },
      {
        name: "Bow Wow Labs",
        slug: "bow-wow-labs",
        summary: "Pet product hero, normal vs CTR-optimized.",
        before: "/work/main-images/bow-wow-labs/normal.jpg",
        after: "/work/main-images/bow-wow-labs/ctr-hack.jpg",
      },
      {
        name: "Luxury Light Co",
        slug: "luxury-light-co",
        summary: "LED bulb hero with the retail box pulled into frame.",
        before: "/work/main-images/luxury-light-co/normal.jpg",
        after: "/work/main-images/luxury-light-co/ctr-hack.jpg",
      },
    ],
  },
  {
    slug: "listing-images",
    folderLabel: "Listing Images",
    headline: "Turn Features Into Reasons to Buy",
    subtext:
      "High-impact infographics and lifestyle visuals that communicate benefits, features, dimensions, and real-world use to move shoppers toward purchase.",
    images: [],
    projects: [
      {
        name: "Fireside Coffee",
        summary: "6-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/fireside-coffee/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Fitly",
        summary: "6-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/fitly/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Nugevity",
        summary: "7-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 7 },
          (_, i) => `/work/listing-images/nugevity/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Original Earthling",
        summary: "6-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/original-earthling/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Pretty Privates",
        summary: "6-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/pretty-privates/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Good Guys",
        summary: "6-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/good-guys/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Pet and Pen",
        summary: "6-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/pet-and-pen/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Riverbend",
        summary: "6-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/riverbend/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Symglass",
        summary: "7-image listing set — infographics and lifestyle scenes.",
        images: Array.from(
          { length: 7 },
          (_, i) => `/work/listing-images/symglass/${pad(i + 1)}.jpg`
        ),
      },
    ],
  },
  {
    slug: "a-plus-content",
    folderLabel: "A+ Content",
    headline: "Create an Experience Beyond the Product",
    subtext:
      "Immersive, visually rich A+ experiences designed to elevate brand perception, engage shoppers, and turn product consideration into conversion.",
    images: [],
    layout: "pages",
    projects: [
      {
        name: "314 Retail",
        summary: "Hazelnut Bliss — full desktop and mobile A+ layouts.",
        images: [
          "/work/a-plus-content/314-retail/desktop.png",
          "/work/a-plus-content/314-retail/mobile.png",
        ],
      },
      {
        name: "Fitly",
        summary: "Desktop and mobile A+ modules for the Fitly line.",
        images: [
          "/work/a-plus-content/fitly/desktop.png",
          "/work/a-plus-content/fitly/mobile.png",
        ],
      },
    ],
  },
  {
    slug: "brand-story",
    folderLabel: "Brand Story",
    headline: "Give Your Brand a Story Worth Remembering",
    subtext:
      "Engaging brand narratives that showcase your mission, values, and product lineup while building trust and encouraging customers to discover more.",
    images: [],
    layout: "carousel",
    projects: [
      {
        name: "Vincent's Meat Market",
        summary: "Family butcher since 1954 — chef-led story cards on a dark slate backdrop.",
        images: Array.from(
          { length: 4 },
          (_, i) => `/work/brand-story/vincents-meat-market/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Webb's Water Gardens",
        summary: "Pond supply specialists since 1981, told in a splash-driven layout.",
        images: Array.from(
          { length: 4 },
          (_, i) => `/work/brand-story/webbs-water-garden/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Fireside Coffee",
        summary: "Brand story cards for Fireside Coffee.",
        images: Array.from(
          { length: 4 },
          (_, i) => `/work/brand-story/fireside-coffee/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Massage Tools",
        summary: "Brand story slides for a massage tools brand.",
        images: Array.from(
          { length: 4 },
          (_, i) => `/work/brand-story/massage-tools/${pad(i + 1)}.png`
        ),
      },
    ],
  },
  {
    slug: "social-media",
    folderLabel: "Social Media",
    headline: "Build a Presence Worth Following",
    subtext:
      "Scroll-stopping content for Meta platforms — Instagram and Facebook posts designed to build brand presence, spark engagement, and keep customers coming back.",
    images: [],
    projects: [
      {
        name: "Bilva",
        summary: "2 Instagram and Facebook posts.",
        images: Array.from(
          { length: 2 },
          (_, i) => `/work/social-media/bilva/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Boffe",
        summary: "3 Instagram and Facebook posts.",
        images: Array.from(
          { length: 3 },
          (_, i) => `/work/social-media/boffe/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Garrison Eagle",
        summary: "5 Instagram and Facebook posts.",
        images: Array.from(
          { length: 5 },
          (_, i) => `/work/social-media/garrison-eagle/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Slinky Stove",
        summary: "4 Instagram and Facebook posts.",
        images: Array.from(
          { length: 4 },
          (_, i) => `/work/social-media/slinky-stove/${pad(i + 1)}.jpg`
        ),
      },
    ],
  },
  {
    slug: "app-design",
    folderLabel: "App Design",
    headline: "Make Every Screen Worth Tapping",
    subtext:
      "App interfaces and launch creatives — from in-app screens to store and social visuals — designed to look sharp, feel intuitive, and turn downloads into daily players.",
    images: [],
    projects: [
      {
        name: "Blackout Murder",
        summary: "Noir murder-mystery game — six launch posts built from in-app screens.",
        aspect: "portrait",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/app-design/blackout-murder/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Rounds",
        summary: "Six launch posts for the Rounds app.",
        aspect: "portrait",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/app-design/rounds/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Bottled Worlds",
        summary: "Six launch posts for Bottled Worlds.",
        aspect: "portrait",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/app-design/bottled-worlds/${pad(i + 1)}.jpg`
        ),
      },
    ],
  },
];

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export type BrandSummary = {
  name: string;
  slug: string;
  summary?: string;
  cover: string;
};

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// One entry per brand in a category, used by the folder thumbnails, the brand
// picker popup, the category sidebar, and the anchor ids on category pages.
export function getBrands(category: Category): BrandSummary[] {
  if (category.comparisons) {
    return category.comparisons.map((c) => {
      const name = (c.name ?? "").split(" — ")[0];
      return { name, slug: c.slug ?? slugify(name), summary: c.summary, cover: c.after };
    });
  }
  return (category.projects ?? []).map((p) => ({
    name: p.name,
    slug: p.slug ?? slugify(p.name),
    summary: p.summary,
    cover: p.images[0],
  }));
}

// Three thumbnails for a folder card: one cover per brand, topped up with each
// brand's other images when a category has fewer than three brands.
export function folderThumbs(category: Category): string[] {
  const covers = getBrands(category).map((b) => b.cover);
  const extras = (category.projects ?? []).flatMap((p) => p.images.slice(1));
  return [...covers, ...extras].slice(0, 3);
}

// Thumbnail shape for a category's covers.
export function coverShape(category: Category): "square" | "wide" | "portrait" {
  if (category.layout === "pages" || category.layout === "carousel") return "wide";
  if (category.projects?.some((p) => p.aspect === "portrait")) return "portrait";
  return "square";
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

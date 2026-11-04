export type ComparisonSample = {
  name?: string; // client/brand name shown above the slider
  // Paths to the two versions, e.g. "/work/main-images/holy-cow/normal.jpg".
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export type WorkProject = {
  name: string; // client/brand name shown as a heading
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
        before: "/work/main-images/holy-cow/normal.jpg",
        after: "/work/main-images/holy-cow/ctr-hack.jpg",
      },
      {
        name: "SANO — Maxima Ultra Concentrated Fabric Softener",
        before: "/work/main-images/sano-maxima/normal.jpg",
        after: "/work/main-images/sano-maxima/ctr-hack.jpg",
      },
      {
        name: "Sunglass Monsters — Fit Over Glasses Goggles",
        before: "/work/main-images/sunglass-monsters/normal.jpg",
        after: "/work/main-images/sunglass-monsters/ctr-hack.jpg",
      },
      {
        name: "Bow Wow Labs",
        before: "/work/main-images/bow-wow-labs/normal.jpg",
        after: "/work/main-images/bow-wow-labs/ctr-hack.jpg",
      },
      {
        name: "Luxury Light Co",
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
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/fireside-coffee/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Fitly",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/fitly/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Nugevity",
        images: Array.from(
          { length: 7 },
          (_, i) => `/work/listing-images/nugevity/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Original Earthling",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/original-earthling/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Pretty Privates",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/pretty-privates/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Good Guys",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/good-guys/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Pet and Pen",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/pet-and-pen/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Riverbend",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/listing-images/riverbend/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Symglass",
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
        images: [
          "/work/a-plus-content/314-retail/desktop.png",
          "/work/a-plus-content/314-retail/mobile.png",
        ],
      },
      {
        name: "Fitly",
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
        images: Array.from(
          { length: 4 },
          (_, i) => `/work/brand-story/vincents-meat-market/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Webb's Water Gardens",
        images: Array.from(
          { length: 4 },
          (_, i) => `/work/brand-story/webbs-water-garden/${pad(i + 1)}.png`
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
        images: Array.from(
          { length: 2 },
          (_, i) => `/work/social-media/bilva/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Boffe",
        images: Array.from(
          { length: 3 },
          (_, i) => `/work/social-media/boffe/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Garrison Eagle",
        images: Array.from(
          { length: 5 },
          (_, i) => `/work/social-media/garrison-eagle/${pad(i + 1)}.jpg`
        ),
      },
      {
        name: "Slinky Stove",
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
        aspect: "portrait",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/app-design/blackout-murder/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Rounds",
        aspect: "portrait",
        images: Array.from(
          { length: 6 },
          (_, i) => `/work/app-design/rounds/${pad(i + 1)}.png`
        ),
      },
      {
        name: "Bottled Worlds",
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

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

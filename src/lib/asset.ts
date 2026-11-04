// next/image and <img> don't add the basePath to `src` on their own, so prefix
// public-folder paths with it (empty locally, "/portfolio" on GitHub Pages).
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

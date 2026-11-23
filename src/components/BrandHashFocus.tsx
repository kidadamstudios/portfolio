"use client";

import { useEffect } from "react";

// Scroll to the brand named in the URL hash (e.g. #holy-cow) and flash it.
// The page fades in through PageTransition, so the browser's own jump to the
// hash happens too early; redo it once the content is in place, and on later
// hash changes from the sidebar links.
export default function BrandHashFocus() {
  useEffect(() => {
    const focus = (delay: number) => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const t = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.remove("brand-flash");
        void el.offsetWidth;
        el.classList.add("brand-flash");
      }, delay);
      return () => window.clearTimeout(t);
    };
    const cancel = focus(550);
    const onHash = () => focus(0);
    window.addEventListener("hashchange", onHash);
    return () => {
      cancel?.();
      window.removeEventListener("hashchange", onHash);
    };
  }, []);
  return null;
}

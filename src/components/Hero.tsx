"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import GradientHeadline from "@/components/GradientHeadline";
import { headlines } from "@/lib/headlines";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
} satisfies Variants;

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
} satisfies Variants;

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-6 md:px-10">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm text-accent"
        >
          Hi, I&apos;m Adrian — Creative Director
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-10 text-5xl font-semibold tracking-tight sm:mt-12 sm:text-6xl md:mt-14 md:text-7xl"
        >
          <GradientHeadline {...headlines.home} />
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base text-muted md:text-lg"
        >
          I help brands look, feel, and sell like they mean it — building
          the visual identity, campaigns, and everyday assets that carry a
          brand across every platform it shows up on.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/30"
          >
            Get in touch
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

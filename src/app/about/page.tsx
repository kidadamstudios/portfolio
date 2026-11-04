import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GradientHeadline from "@/components/GradientHeadline";
import { experience } from "@/lib/experience";
import { headlines } from "@/lib/headlines";

export const metadata: Metadata = {
  title: "About — Adrian Dayao",
  description: "A bit about Adrian Dayao.",
};

const skills = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "Creative direction",
  "Brand identity",
  "Amazon A+ Content",
  "Amazon Brand Store",
  "Social media content",
  "Canva",
  "Copywriting for conversion",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-10">
      <Reveal>
        <p className="font-mono text-sm text-accent">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          <GradientHeadline {...headlines.about} />
        </h1>
      </Reveal>

      <Reveal delay={0.05} className="mt-8 space-y-5 text-foreground/80">
        <p className="leading-relaxed">
          I&apos;m a creative director who focuses on one thing: making
          brands sell. That means thinking like a shopper first — what stops
          the scroll, what earns the click, what actually explains why a
          product is worth buying — and then building visuals around that.
        </p>
        <p className="leading-relaxed">
          I work across the full creative stack for e-commerce and social —
          from the main image that has to win the click, to the brand store
          that turns a one-time buyer into a repeat customer, to the social
          content that keeps a brand in front of people between purchases.
          Amazon is where most of my work lives, but the thinking isn&apos;t
          limited to it. Every category on this site is a piece of the same
          system, built to move someone one step closer to buying.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <h2 className="text-sm font-mono text-muted">Skills &amp; tools</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-16">
        <h2 className="text-sm font-mono text-muted">Experience</h2>
        <ol className="mt-6 space-y-10 border-l border-border pl-6">
          {experience.map((role) => (
            <li key={`${role.title}-${role.period}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">{role.title}</h3>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {role.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {role.company}
                {role.manager && (
                  <span className="text-muted/70"> · {role.manager}</span>
                )}
              </p>
              <ul className="mt-3 space-y-1.5">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

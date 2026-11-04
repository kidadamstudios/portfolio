import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Adrian Dayao",
  description: "Get in touch with Adrian Dayao.",
};

// Edit these to match your own details.
const EMAIL = "adrianc.dayao@gmail.com";
const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  { label: "Instagram", href: "https://instagram.com/your-username" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-16 md:px-10">
      <Reveal>
        <p className="font-mono text-sm text-accent">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Let&apos;s sell
          <br />
          something.
        </h1>
        <p className="mt-6 max-w-md text-muted">
          Whether it&apos;s a new listing, a brand refresh, a social
          campaign, or just an idea worth talking through — my inbox is
          open.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex items-center gap-3 text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-accent md:text-3xl"
        >
          {EMAIL}
          <ArrowUpRight
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            size={24}
          />
        </a>
      </Reveal>

      <Reveal delay={0.15} className="mt-14 flex gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            {link.label}
            <ArrowUpRight size={14} />
          </a>
        ))}
      </Reveal>
    </section>
  );
}

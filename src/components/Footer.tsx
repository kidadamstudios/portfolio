const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  { label: "Instagram", href: "https://instagram.com/your-username" },
  { label: "Email", href: "mailto:adrianc.dayao@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>&copy; {new Date().getFullYear()} Adrian Dayao. Built from scratch.</p>
        <ul className="flex gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

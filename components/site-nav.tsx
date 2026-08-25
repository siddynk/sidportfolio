const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 px-4">
        <a
          href="#top"
          className="glass px-4 py-2 font-mono text-sm font-bold uppercase tracking-[0.2em]"
        >
          SN<span className="text-accent">.</span>
        </a>
        <nav
          aria-label="Primary"
          className="glass flex items-center gap-1 px-2 py-1.5 font-mono text-xs uppercase tracking-[0.2em]"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

import { ArrowUpRight } from "lucide-react"

const socials = [
  { label: "GitHub — siddynk", href: "https://github.com/siddynk" },
  { label: "LinkedIn — nayak-sid", href: "https://linkedin.com/in/nayak-sid" },
  { label: "LeetCode — sidspams", href: "https://leetcode.com/sidspams" },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          (03) Contact
        </h2>

        <div className="mt-8 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-balance font-sans text-5xl font-black uppercase leading-[0.85] tracking-tighter sm:text-6xl md:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-outline">something</span>
              <br />
              good.
            </p>

            <a
              href="https://github.com/siddynk"
              className="glass mt-10 inline-flex items-center gap-3 px-5 py-3 font-sans text-xl font-bold tracking-tight transition-colors hover:text-accent md:text-2xl"
            >
              github.com/siddynk
              <ArrowUpRight className="h-6 w-6 text-accent" aria-hidden="true" />
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="group flex items-center justify-between border-b border-border py-2 font-mono text-sm transition-colors hover:text-accent"
                  >
                    {social.label}
                    <ArrowUpRight
                      className="h-4 w-4 opacity-40 transition-all group-hover:opacity-100 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

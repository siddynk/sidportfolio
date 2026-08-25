import { WireframeSphere } from "@/components/wireframe-sphere"

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-between overflow-hidden">
      {/* reactive wireframe sphere */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[120vw] w-[120vw] max-h-[860px] max-w-[860px] opacity-90">
          <WireframeSphere />
        </div>
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_78%)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="inline-block h-2 w-2 animate-pulse bg-accent" aria-hidden="true" />
          Open to internships & collaborations
        </div>

        <h1 className="mt-8 text-balance font-sans text-[19vw] font-black uppercase leading-[0.82] tracking-tighter sm:text-8xl md:text-[10rem] lg:text-[12rem]">
          <span className="block">Sidharth</span>
          <span className="block text-outline">Nayak</span>
        </h1>

        <p className="mt-10 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Information Science student building practical software — backend systems, AI, and
          the web. State-level basketball player away from the keyboard.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border font-mono text-sm md:grid-cols-4">
          {[
            { t: "Focus", d: "Backend & AI" },
            { t: "Based in", d: "Bangalore, IN" },
            { t: "Studying", d: "ISE @ Sapthagiri" },
            { t: "Off-screen", d: "State basketball" },
          ].map((item) => (
            <div key={item.t} className="glass px-4 py-4">
              <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {item.t}
              </dt>
              <dd className="mt-1 font-medium text-foreground">{item.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

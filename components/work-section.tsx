import { ArrowUpRight } from "lucide-react"

type Project = {
  index: string
  title: string
  description: string
  tags: string[]
  year: string
  href: string
}

const projects: Project[] = [
  {
    index: "01",
    title: "Roomsy",
    description:
      "A PG accommodation and management platform built to make finding and managing paying-guest stays simpler. My primary shipped project.",
    tags: ["Java", "MySQL"],
    year: "2025",
    href: "https://github.com/siddynk/Roomsy",
  },
  {
    index: "02",
    title: "OTT Subscriber Churn Prediction",
    description:
      "Currently building an ML-based approach to understanding and predicting OTT subscriber churn. Work in progress.",
    tags: ["Python", "Machine Learning", "WIP"],
    year: "2026",
    href: "#",
  },
  {
    index: "03",
    title: "Tekmeria",
    description:
      "Currently building an AI-powered research and retrieval system — exploring search, vector indexing, and retrieval-driven workflows. Work in progress.",
    tags: ["AI", "Retrieval", "WIP"],
    year: "2026",
    href: "#",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="flex items-end justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            (02) Selected Work
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {projects.length} projects
          </span>
        </div>

        <ul className="mt-10 border-t border-border">
          {projects.map((project) => (
            <li key={project.index}>
              <a
                href={project.href}
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-border px-2 py-8 transition-colors hover:bg-secondary/40"
              >
                <span className="col-span-2 font-mono text-sm text-muted-foreground transition-colors group-hover:text-accent md:col-span-1">
                  {project.index}
                </span>

                <div className="col-span-10 md:col-span-4">
                  <h3 className="flex items-center gap-2 font-sans text-2xl font-bold tracking-tight md:text-3xl">
                    {project.title}
                    <ArrowUpRight
                      className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {project.tags.map((tag) => (
                      <span key={tag} className="glass px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="col-span-12 text-pretty leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:pr-10">
                  {project.description}
                </p>

                <span className="col-span-12 font-mono text-sm text-muted-foreground md:col-span-1 md:col-start-12 md:text-right">
                  {project.year}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

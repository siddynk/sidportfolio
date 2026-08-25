const stack = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "HTML",
  "CSS",
  "Node.js",
  "MySQL",
  "SQL",
  "Git",
  "SQL Workbench",
  "Excel",
  "Canva",
]

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              (01) About
            </h2>
            <p className="mt-6 font-sans text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">
              I build software, and I compete — on the court and in code.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="text-pretty">
                I&apos;m a 19-year-old Information Science and Engineering student in my sixth
                semester at Sapthagiri College of Engineering, Bangalore (VTU). I&apos;m drawn to
                backend development, AI and machine learning, and modern web development — and I
                learn the most by actually building things.
              </p>
              <p className="text-pretty text-muted-foreground">
                Away from the screen I&apos;m an athlete and a national-level basketball player.
                The court is where the discipline, teamwork, and habit of improving under pressure
                come from — the same instincts I bring to shipping software.
              </p>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Toolkit
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-sm">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="glass px-3 py-1.5 transition-colors hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

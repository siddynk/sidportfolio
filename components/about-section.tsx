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
              I ship products, then teach the fundamentals behind them.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="text-pretty">
                I&apos;m a final-year Information Science student at Sapthagiri College of
                Engineering, Bengaluru (VTU). I work Java-first across the stack — building
                full-stack apps from a React or plain HTML/CSS/JS front end through a Spring
                Boot and MySQL back end.
              </p>
              <p className="text-pretty text-muted-foreground">
                Alongside building, I teach. I&apos;m a Java instructor for a Wipro
                Project-Based Learning program, taking students from Java fundamentals
                through OOP in Eclipse, and I coordinate HCL Tech placement-assessment prep
                across quantitative, logical-reasoning, and verbal sections. I&apos;m also an
                Abacus Grandmaster and teach mental-calculation to kids.
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

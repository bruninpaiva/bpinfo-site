import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/config/projects";

export function ProjectsSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projetos"
          title="Soluções desenvolvidas pela BPInfo"
          description="Cada projeto nasce de um processo real. Novos cases entram nesta lista conforme forem desenvolvidos."
        />

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="relative overflow-hidden border-l-2 border-accent bg-surface p-8 md:p-12"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] leading-none text-fg opacity-[0.04] md:text-[9rem]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative grid gap-10 md:grid-cols-[auto_1fr] md:items-start md:gap-14">
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
                  <span className="border border-accent px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    Case {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-2xl text-fg md:text-3xl">{project.name}</p>
                </div>

                <div>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-fg-subtle">
                        Problema
                      </p>
                      <p className="mt-1.5 leading-relaxed text-fg-muted">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-fg-subtle">
                        Solução
                      </p>
                      <p className="mt-1.5 leading-relaxed text-fg-muted">{project.solution}</p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="border border-border-strong bg-bg-elevated px-3 py-1 text-xs text-fg-muted"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={project.href}
                    className="mt-7 inline-block text-sm text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {project.linkLabel} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

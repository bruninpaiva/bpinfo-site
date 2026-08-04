import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workSteps } from "@/lib/config/services";

export function HowWeWorkSection() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Método"
          title="Como trabalhamos"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {workSteps.map((step, index) => (
            <div key={step.number} className="relative pt-6">
              <div className="absolute left-0 top-0 h-px w-10 bg-accent" />
              <span className="font-display text-3xl text-fg-subtle">
                {step.number}
              </span>
              <p className="mt-4 font-display text-lg text-fg">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {step.description}
              </p>
              {index < workSteps.length - 1 ? (
                <div className="mt-8 hidden h-px bg-border md:block" />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

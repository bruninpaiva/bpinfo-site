import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workSteps } from "@/lib/config/services";

export function HowWeWorkSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Método"
          title="Como trabalhamos"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-border md:inset-x-0 md:left-0 md:right-0 md:top-4 md:bottom-auto md:h-px md:w-auto"
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {workSteps.map((step) => (
              <div key={step.number} className="relative pl-12 md:pl-0 md:pt-14 md:text-center">
                <span className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center border border-accent bg-bg font-display text-sm text-fg md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </span>
                <p className="font-display text-lg text-fg">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted md:mx-auto md:max-w-[15rem]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

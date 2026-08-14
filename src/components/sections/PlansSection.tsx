import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { plans } from "@/lib/config/plans";

export function PlansSection() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Planos"
          title="Condições comerciais sob medida"
          description="Os planos abaixo indicam o escopo geral de cada modalidade. Valores e condições são definidos em conversa comercial, conforme a operação do cliente."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-md p-8",
                plan.featured ? "bg-surface-strong ring-1 ring-accent/40" : "bg-surface",
              )}
            >
              <p className="font-display text-xl text-fg">{plan.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 text-sm text-fg-muted">
                    <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/contato" variant={plan.featured ? "primary" : "outline"} className="mt-8">
                Consultar condições
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/contato" variant="ghost">
            Solicitar proposta
          </Button>
        </div>
      </Container>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const before = [
  "Planilhas espalhadas entre times e ferramentas diferentes",
  "Processos manuais que dependem de memória e boa vontade",
  "Sistemas prontos que não se adaptam à operação da empresa",
];

const after = [
  "Informações centralizadas em um único lugar",
  "Automação das tarefas repetitivas",
  "Acompanhamento claro da operação em tempo real",
];

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Diagnóstico"
          title="Problemas que resolvemos"
          description="A maior parte do retrabalho em uma empresa não vem de má gestão — vem de processos que nunca foram desenhados para a operação atual."
        />

        <div className="mt-12 grid overflow-hidden border border-border md:grid-cols-2">
          <div className="p-8 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-fg-subtle">
              Antes
            </p>
            <ul className="mt-6 space-y-4">
              {before.map((item) => (
                <li key={item} className="text-fg-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border bg-contrast-bg p-8 md:border-l md:border-t-0 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Depois
            </p>
            <ul className="mt-6 space-y-4">
              {after.map((item) => (
                <li key={item} className="text-contrast-fg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
